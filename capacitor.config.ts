import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "dev.tymeline.app",
  appName: "Tymeline",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
    AdMob: {
      appId: "ca-app-pub-2642508269663537~1659395746",
      testingDevices: [],
    },
  },
};

export default config;
