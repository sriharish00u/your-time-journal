import {
  AdMob,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
  AdOptions,
  RewardInterstitialAdOptions,
} from "@capacitor-community/admob";
import type { AdMobRewardInterstitialItem } from "@capacitor-community/admob";

// ─── Platform detection ───────────────────────────────────────────────────────
// AdMob only works in a real Capacitor Android/iOS build.
// On web (Lovable preview, browser) we skip all AdMob calls and grant the
// reward immediately so the UI is fully testable without a device.

export function isCapacitorNative(): boolean {
  return (
    typeof window !== "undefined" &&
    !!(window as Window & { Capacitor?: { isNativePlatform?: () => boolean } })
      .Capacitor?.isNativePlatform?.()
  );
}

// ─── Unit IDs ─────────────────────────────────────────────────────────────────

const IS_DEV = import.meta.env.DEV;

const UNIT_IDS = {
  banner:        IS_DEV ? "ca-app-pub-3940256099942544/6300978111"  : "ca-app-pub-2642508269663537/1078461728",
  interstitial:  IS_DEV ? "ca-app-pub-3940256099942544/1033173712"  : "ca-app-pub-2642508269663537/8434511481",
  rewardedInter: IS_DEV ? "ca-app-pub-3940256099942544/5354046379"  : "ca-app-pub-2642508269663537/5511010844",
};

// ─── Init ─────────────────────────────────────────────────────────────────────

let initialized = false;

export async function initAdMob(): Promise<void> {
  if (!isCapacitorNative()) return;
  if (initialized) return;
  try {
    await AdMob.initialize({
      requestTrackingAuthorization: false,
      testingDevices: [],
      initializeForTesting: IS_DEV,
    });
    initialized = true;
  } catch {
    // Unsupported platform — no-op
  }
}

// ─── Banner ───────────────────────────────────────────────────────────────────

let bannerVisible = false;
let currentBannerRoute = "";

export async function showBanner(route: string): Promise<void> {
  if (!initialized) return;
  try {
    if (bannerVisible && currentBannerRoute === route) return;
    if (bannerVisible) await hideBanner();
    const options: BannerAdOptions = {
      adId: UNIT_IDS.banner,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 64,
      isTesting: IS_DEV,
    };
    await AdMob.showBanner(options);
    bannerVisible = true;
    currentBannerRoute = route;
  } catch {
    // no-op
  }
}

export async function hideBanner(): Promise<void> {
  if (!initialized || !bannerVisible) return;
  try {
    await AdMob.hideBanner();
    bannerVisible = false;
    currentBannerRoute = "";
  } catch {
    // no-op
  }
}

export async function removeBanner(): Promise<void> {
  if (!initialized) return;
  try {
    await AdMob.removeBanner();
    bannerVisible = false;
    currentBannerRoute = "";
  } catch {
    // no-op
  }
}

// ─── Interstitial ─────────────────────────────────────────────────────────────

const SESSION_KEY = "tymeline:inter-shown";

function interstitialShownThisSession(): boolean {
  try { return sessionStorage.getItem(SESSION_KEY) === "1"; } catch { return false; }
}
function markInterstitialShown(): void {
  try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* no-op */ }
}

export async function showSessionInterstitial(): Promise<void> {
  if (!initialized) return;
  if (interstitialShownThisSession()) return;
  try {
    const options: AdOptions = { adId: UNIT_IDS.interstitial, isTesting: IS_DEV };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
    markInterstitialShown();
  } catch {
    // no-op — ad unavailable
  }
}

// ─── Rewarded Interstitial ────────────────────────────────────────────────────
//
// Key design:
// 1. On web (non-native): immediately resolves `true` so the UI works in preview.
// 2. On native: prepares + shows the ad, resolves true on reward, false on skip/fail.
// 3. Hard timeout (15 s): if nothing fires the promise resolves `false` and unblocks UI.
// 4. All listeners are cleaned up before resolving — no accumulation across calls.
// 5. An in-flight guard prevents parallel calls from stacking.

let rewardedInFlight = false;

export async function showRewardedInterstitial(): Promise<boolean> {
  // ── Web fallback: grant reward immediately so preview/browser works ──────────
  if (!isCapacitorNative()) {
    return IS_DEV ? true : false;
  }

  if (!initialized) return false;

  // ── Guard against parallel calls ─────────────────────────────────────────────
  if (rewardedInFlight) return false;
  rewardedInFlight = true;

  return new Promise<boolean>((resolve) => {
    let rewarded = false;
    const removers: (() => void)[] = [];

    // Hard timeout — if AdMob never fires any event, unblock the UI after 15 s
    const timeout = setTimeout(() => {
      cleanup();
      resolve(false);
    }, 15_000);

    function cleanup() {
      clearTimeout(timeout);
      removers.forEach((fn) => { try { fn(); } catch { /* no-op */ } });
      removers.length = 0;
      rewardedInFlight = false;
    }

    function done(result: boolean) {
      cleanup();
      resolve(result);
    }

    // Ad loaded → show it
    AdMob.addListener("onRewardedInterstitialAdLoaded", async () => {
      try {
        await AdMob.showRewardInterstitialAd();
      } catch {
        done(false);
      }
    }).then((h) => removers.push(h.remove)).catch(() => {});

    // User earned reward (fires before dismissed)
    AdMob.addListener(
      "onRewardedInterstitialAdReward",
      (_r: AdMobRewardInterstitialItem) => { rewarded = true; },
    ).then((h) => removers.push(h.remove)).catch(() => {});

    // Ad dismissed — resolve with whatever reward state is
    AdMob.addListener("onRewardedInterstitialAdDismissed", () => {
      done(rewarded);
    }).then((h) => removers.push(h.remove)).catch(() => {});

    // Ad failed to load
    AdMob.addListener("onRewardedInterstitialAdFailedToLoad", () => {
      done(false);
    }).then((h) => removers.push(h.remove)).catch(() => {});

    // Ad failed to show (separate event in some plugin versions)
    AdMob.addListener("onRewardedInterstitialAdFailedToShow", () => {
      done(false);
    }).then((h) => removers.push(h.remove)).catch(() => {});

    // Kick off the load
    const options: RewardInterstitialAdOptions = {
      adId: UNIT_IDS.rewardedInter,
      isTesting: IS_DEV,
    };
    AdMob.prepareRewardInterstitialAd(options).catch(() => done(false));
  });
}
