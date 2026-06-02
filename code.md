# your-time-journal — Codebase Overview

## Directory Structure

```
.
├── src
│   ├── components
│   │   ├── tymeline
│   │   │   ├── ActivityCard.tsx
│   │   │   ├── AddActivitySheet.tsx
│   │   │   ├── PaperEarnedNotification.tsx
│   │   │   ├── TabBar.tsx
│   │   │   └── ThemeProvider.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   ├── hooks
│   │   └── use-mobile.tsx
│   ├── lib
│   │   ├── api
│   │   │   └── example.functions.ts
│   │   ├── tymeline
│   │   │   ├── ai.functions.ts
│   │   │   ├── categories.ts
│   │   │   ├── notifications.ts
│   │   │   ├── papers.ts
│   │   │   ├── storage.ts
│   │   │   └── types.ts
│   │   ├── config.server.ts
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   ├── lovable-error-reporting.ts
│   │   └── utils.ts
│   ├── routes
│   │   ├── __root.tsx
│   │   ├── analytics.tsx
│   │   ├── collection.tsx
│   │   ├── index.tsx
│   │   ├── onboarding.tsx
│   │   ├── README.md
│   │   ├── settings.tsx
│   │   └── summary.tsx
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
├── .gitignore
├── bunfig.toml
├── capacitor.config.ts
├── code.md
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
└── vite.config.ts
```


## Source Files


### `.gitignore`

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
.output
.vinxi
.tanstack/**
.nitro
*.local

# Wrangler / Cloudflare
.wrangler/
.dev.vars

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Capacitor
android/
capacitor.config.json
```

### `bunfig.toml`

```toml
[install]
# 24h supply-chain guard: skip package versions published less than a day ago.
minimumReleaseAge = 86400
# Each entry bypasses the 24h guard for one package — confirm with the user
# before adding any.
minimumReleaseAgeExcludes = ["@lovable.dev/vite-tanstack-config"]
```

### `capacitor.config.ts`

```ts
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
  },
};

export default config;
```

### `code.md`

```md
# your-time-journal — Codebase Overview

## Directory Structure

```
.
├── src
│   ├── components
│   │   ├── tymeline
│   │   │   ├── ActivityCard.tsx
│   │   │   ├── AddActivitySheet.tsx
│   │   │   ├── PaperEarnedNotification.tsx
│   │   │   ├── TabBar.tsx
│   │   │   └── ThemeProvider.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       └── tooltip.tsx
│   ├── hooks
│   │   └── use-mobile.tsx
│   ├── lib
│   │   ├── api
│   │   │   └── example.functions.ts
│   │   ├── tymeline
│   │   │   ├── ai.functions.ts
│   │   │   ├── categories.ts
│   │   │   ├── papers.ts
│   │   │   ├── storage.ts
│   │   │   └── types.ts
│   │   ├── config.server.ts
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   ├── lovable-error-reporting.ts
│   │   └── utils.ts
│   ├── routes
│   │   ├── __root.tsx
│   │   ├── analytics.tsx
│   │   ├── collection.tsx
│   │   ├── index.tsx
│   │   ├── onboarding.tsx
│   │   ├── README.md
│   │   ├── settings.tsx
│   │   └── summary.tsx
│   ├── router.tsx
│   ├── routeTree.gen.ts
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
├── .gitignore
├── bunfig.toml
├── capacitor.config.ts
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
└── vite.config.ts
```


## Source Files


### `.gitignore`

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
.output
.vinxi
.tanstack/**
.nitro
*.local

# Wrangler / Cloudflare
.wrangler/
.dev.vars

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Capacitor
android/
capacitor.config.json
```

### `bunfig.toml`

```toml
[install]
# 24h supply-chain guard: skip package versions published less than a day ago.
minimumReleaseAge = 86400
# Each entry bypasses the 24h guard for one package — confirm with the user
# before adding any.
minimumReleaseAgeExcludes = ["@lovable.dev/vite-tanstack-config"]
```

### `capacitor.config.ts`

```ts
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
  },
};

export default config;
```

### `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "css": "src/styles.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
```

### `eslint.config.js`

```js
import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", ".output", ".vinxi"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message:
                "TanStack Start does not use the Next.js `server-only` package. Rename the module to `*.server.ts` or mark it with `@tanstack/react-start/server-only`.",
            },
          ],
        },
      ],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  eslintPluginPrettier,
);
```

### `package.json`

```json
{
  "name": "tanstack_start_ts",
  "private": true,
  "sideEffects": false,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write .",
    "build:android": "vite build && npx cap sync android",
    "open:android": "npx cap open android"
  },
  "dependencies": {
    "@capacitor/android": "^8.3.4",
    "@capacitor/cli": "^8.3.4",
    "@capacitor/core": "^8.3.4",
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/vite": "^4.2.1",
    "@tanstack/react-query": "^5.83.0",
    "@tanstack/react-router": "^1.168.25",
    "@tanstack/react-start": "^1.167.50",
    "@tanstack/router-plugin": "^1.167.28",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.575.0",
    "react": "^19.2.0",
    "react-day-picker": "^9.14.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.71.2",
    "react-resizable-panels": "^4.6.5",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tailwindcss": "^4.2.1",
    "tw-animate-css": "^1.3.4",
    "vaul": "^1.1.2",
    "vite-tsconfig-paths": "^6.0.2",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@lovable.dev/vite-tanstack-config": "^2.1.1",
    "@types/node": "^22.16.5",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.32.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "nitro": "3.0.260429-beta",
    "prettier": "^3.7.3",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.56.1",
    "vite": "^7.3.1"
  }
}
```

### `tsconfig.json`

```json
{
  "include": ["src/**/*.ts", "src/**/*.tsx", "vite.config.ts", "eslint.config.js"],
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": false,
    "noEmit": true,

    /* Linting */
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### `vite.config.ts`

```ts
// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
```

### `android/.gitignore`

```
# Using Android gitignore template: https://github.com/github/gitignore/blob/HEAD/Android.gitignore

# Built application files
*.apk
*.aar
*.ap_
*.aab

# Files for the ART/Dalvik VM
*.dex

# Java class files
*.class

# Generated files
bin/
gen/
out/
#  Uncomment the following line in case you need and you don't have the release build type files in your app
# release/

# Gradle files
.gradle/
build/

# Local configuration file (sdk path, etc)
local.properties

# Proguard folder generated by Eclipse
proguard/

# Log Files
*.log

# Android Studio Navigation editor temp files
.navigation/

# Android Studio captures folder
captures/

# IntelliJ
*.iml
.idea/workspace.xml
.idea/tasks.xml
.idea/gradle.xml
.idea/assetWizardSettings.xml
.idea/dictionaries
.idea/libraries
# Android Studio 3 in .gitignore file.
.idea/caches
.idea/modules.xml
# Comment next line if keeping position of elements in Navigation Editor is relevant for you
.idea/navEditor.xml

# Keystore files
# Uncomment the following lines if you do not want to check your keystore files in.
#*.jks
#*.keystore

# External native build folder generated in Android Studio 2.2 and later
.externalNativeBuild
.cxx/

# Google Services (e.g. APIs or Firebase)
# google-services.json

# Freeline
freeline.py
freeline/
freeline_project_description.json

# fastlane
fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots
fastlane/test_output
fastlane/readme.md

# Version control
vcs.xml

# lint
lint/intermediates/
lint/generated/
lint/outputs/
lint/tmp/
# lint/reports/

# Android Profiling
*.hprof

# Cordova plugins for Capacitor
capacitor-cordova-android-plugins

# Copied web assets
app/src/main/assets/public

# Generated Config files
app/src/main/assets/capacitor.config.json
app/src/main/assets/capacitor.plugins.json
app/src/main/res/xml/config.xml
```

### `android/app/.gitignore`

```
/build/*
!/build/.npmkeep
```

### `src/routeTree.gen.ts`

```ts
/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as SummaryRouteImport } from './routes/summary'
import { Route as SettingsRouteImport } from './routes/settings'
import { Route as OnboardingRouteImport } from './routes/onboarding'
import { Route as CollectionRouteImport } from './routes/collection'
import { Route as AnalyticsRouteImport } from './routes/analytics'
import { Route as IndexRouteImport } from './routes/index'

const SummaryRoute = SummaryRouteImport.update({
  id: '/summary',
  path: '/summary',
  getParentRoute: () => rootRouteImport,
} as any)
const SettingsRoute = SettingsRouteImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRouteImport,
} as any)
const OnboardingRoute = OnboardingRouteImport.update({
  id: '/onboarding',
  path: '/onboarding',
  getParentRoute: () => rootRouteImport,
} as any)
const CollectionRoute = CollectionRouteImport.update({
  id: '/collection',
  path: '/collection',
  getParentRoute: () => rootRouteImport,
} as any)
const AnalyticsRoute = AnalyticsRouteImport.update({
  id: '/analytics',
  path: '/analytics',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/analytics': typeof AnalyticsRoute
  '/collection': typeof CollectionRoute
  '/onboarding': typeof OnboardingRoute
  '/settings': typeof SettingsRoute
  '/summary': typeof SummaryRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/analytics': typeof AnalyticsRoute
  '/collection': typeof CollectionRoute
  '/onboarding': typeof OnboardingRoute
  '/settings': typeof SettingsRoute
  '/summary': typeof SummaryRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/analytics': typeof AnalyticsRoute
  '/collection': typeof CollectionRoute
  '/onboarding': typeof OnboardingRoute
  '/settings': typeof SettingsRoute
  '/summary': typeof SummaryRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/analytics'
    | '/collection'
    | '/onboarding'
    | '/settings'
    | '/summary'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/analytics'
    | '/collection'
    | '/onboarding'
    | '/settings'
    | '/summary'
  id:
    | '__root__'
    | '/'
    | '/analytics'
    | '/collection'
    | '/onboarding'
    | '/settings'
    | '/summary'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AnalyticsRoute: typeof AnalyticsRoute
  CollectionRoute: typeof CollectionRoute
  OnboardingRoute: typeof OnboardingRoute
  SettingsRoute: typeof SettingsRoute
  SummaryRoute: typeof SummaryRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/summary': {
      id: '/summary'
      path: '/summary'
      fullPath: '/summary'
      preLoaderRoute: typeof SummaryRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/onboarding': {
      id: '/onboarding'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof OnboardingRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/collection': {
      id: '/collection'
      path: '/collection'
      fullPath: '/collection'
      preLoaderRoute: typeof CollectionRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/analytics': {
      id: '/analytics'
      path: '/analytics'
      fullPath: '/analytics'
      preLoaderRoute: typeof AnalyticsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AnalyticsRoute: AnalyticsRoute,
  CollectionRoute: CollectionRoute,
  OnboardingRoute: OnboardingRoute,
  SettingsRoute: SettingsRoute,
  SummaryRoute: SummaryRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
```

### `src/router.tsx`

```tsx
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
```

### `src/server.ts`

```ts
import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
```

### `src/start.ts`

```ts
import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
```

### `src/styles.css`

```css
@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-card: var(--surface);
  --color-card-foreground: var(--foreground);
  --color-popover: var(--surface);
  --color-popover-foreground: var(--foreground);
  --color-primary: var(--accent);
  --color-primary-foreground: var(--accent-foreground);
  --color-secondary: var(--accent-soft);
  --color-secondary-foreground: var(--foreground);
  --color-muted: var(--accent-soft);
  --color-muted-foreground: var(--text-secondary);
  --color-accent: var(--accent);
  --color-accent-soft: var(--accent-soft);
  --color-accent-foreground: var(--accent-foreground);
  --color-text-secondary: var(--text-secondary);
  --color-destructive: oklch(0.55 0.22 27);
  --color-destructive-foreground: oklch(0.98 0 0);
  --color-border: var(--border);
  --color-input: var(--border);
  --color-ring: var(--accent);

  --color-cat-study: #4A90D9;
  --color-cat-code: #7C4DFF;
  --color-cat-exercise: #43A047;
  --color-cat-read: #FB8C00;
  --color-cat-meeting: #00ACC1;
  --color-cat-entertainment: #E91E63;
  --color-cat-travel: #009688;
  --color-cat-food: #8D6E63;
  --color-cat-sleep: #5C6BC0;
  --color-cat-custom: #78909C;
  --color-cat-health: #26A69A;
  --color-cat-social: #AB47BC;
  --color-cat-finance: #FFA726;
  --color-cat-creative: #EC407A;
  --color-cat-chores: #8D8D8D;

  --font-serif: "DM Serif Display", ui-serif, Georgia, serif;
  --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
}

:root {
  --radius: 0.875rem;
  --background: #FAF7F2;
  --surface: #FFFFFF;
  --border: #E8E0D5;
  --foreground: #1A1612;
  --text-secondary: #6B5E52;
  --accent: #D4622A;
  --accent-soft: #F5E6DC;
  --accent-foreground: #FFFFFF;
}

.dark {
  --background: #141210;
  --surface: #1E1B18;
  --border: #2C2823;
  --foreground: #F0EBE3;
  --text-secondary: #9C8E82;
  --accent: #E8763A;
  --accent-soft: #2A1E17;
  --accent-foreground: #141210;
}

@layer base {
  * {
    border-color: var(--color-border);
  }
  html, body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, .font-serif {
    font-family: var(--font-serif);
    letter-spacing: -0.01em;
  }
}

/* Paper texture utility */
.paper-texture {
  background-image:
    radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--accent) 4%, transparent) 0, transparent 50%),
    radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--accent) 3%, transparent) 0, transparent 50%);
}

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.6); opacity: 0; }
}
.pulse-ring::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: var(--accent);
  animation: pulse-ring 1.8s ease-out infinite;
  z-index: -1;
}

@keyframes float-soft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.float-soft { animation: float-soft 4s ease-in-out infinite; }

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media print {
  body > *:not(.print-summary) { display: none !important; }
  .print-summary { display: block !important; }
  .print-summary article {
    border: none !important;
    box-shadow: none !important;
    padding: 2rem !important;
    max-width: 210mm;
    margin: 0 auto;
  }
}
```

### `src/hooks/use-mobile.tsx`

```tsx
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

### `src/lib/config.server.ts`

```ts
import process from "node:process";

// Server-only config. The .server.ts suffix prevents Vite from bundling
// this file into the client — values here never reach the browser.
//
// On Cloudflare Workers, env binds at REQUEST time. Module-scope reads
// (e.g. `const x = process.env.X`) resolve to undefined — always read
// process.env INSIDE a function or handler.
//
// When to use which env-access pattern:
//   - .server.ts module (this file): server-only helpers reused across
//     handlers. Wrap reads in a function so they run per-request.
//   - inline process.env inside a createServerFn handler: one-off reads
//     not reused elsewhere.
//   - import.meta.env.VITE_FOO: PUBLIC config readable from both client
//     and server (analytics IDs, public URLs). Define in .env with the
//     VITE_ prefix. Never put secrets here — they ship to the browser.

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
    // Add server-only values here, e.g.:
    //   databaseUrl: process.env.DATABASE_URL,
    //   stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  };
}
```

### `src/lib/error-capture.ts`

```ts
// Captures the original Error out-of-band so server.ts can recover the stack
// when h3 has already swallowed the throw into a generic 500 Response.

let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 5_000;

function record(error: unknown) {
  lastCapturedError = { error, at: Date.now() };
}

if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record((event as ErrorEvent).error ?? event));
  globalThis.addEventListener("unhandledrejection", (event) =>
    record((event as PromiseRejectionEvent).reason),
  );
}

export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError) return undefined;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = undefined;
    return undefined;
  }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}
```

### `src/lib/error-page.ts`

```ts
export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
```

### `src/lib/lovable-error-reporting.ts`

```ts
type LovableErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type LovableEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: LovableErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __lovableEvents?: LovableEvents;
  }
}

export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
```

### `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### `src/lib/tymeline/ai.functions.ts`

```ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  period: z.enum(["week", "month", "all"]),
  activities: z
    .array(
      z.object({
        name: z.string(),
        category: z.string(),
        duration: z.number().optional(),
        mood: z.string().optional(),
        timestamp: z.string(),
      }),
    )
    .max(500),
});

export const generateAISummary = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("AI not configured");

    const prompt = `You are a warm, reflective life coach. Here is a person's activity log for the ${data.period === "all" ? "entire period" : "past " + data.period}: ${JSON.stringify(data.activities)}.

Write a thoughtful, flowing essay (3-5 paragraphs) reflecting on how they spent their time. Write in second person ("You spent..."). Be specific to the actual activities provided. Cover what they did, any patterns or habits that emerge, how their mood trends look, and gentle encouragement. Do NOT use markdown or section headers — just plain paragraphs separated by newlines. Return ONLY the essay text, no JSON.`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content:
              "You are a warm, reflective life coach who writes in flowing prose. Write plain paragraphs only, no markdown or formatting.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (res.status === 429) throw new Error("Rate limit reached. Please try again in a moment.");
    if (res.status === 402)
      throw new Error("AI credits exhausted. Add credits in workspace settings.");
    if (!res.ok) throw new Error("AI request failed");

    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const raw = json.choices?.[0]?.message?.content ?? "";

    return { content: raw };
  });
```

### `src/lib/tymeline/categories.ts`

```ts
import type { ActivityCategory } from "./types";

export const CATEGORIES: ActivityCategory[] = [
  "Study",
  "Code",
  "Exercise",
  "Read",
  "Meeting",
  "Entertainment",
  "Travel",
  "Food",
  "Sleep",
  "Health",
  "Social",
  "Finance",
  "Creative",
  "Chores",
  "Custom",
];

export const CATEGORY_COLORS: Record<ActivityCategory, string> = {
  Study: "#4A90D9",
  Code: "#7C4DFF",
  Exercise: "#43A047",
  Read: "#FB8C00",
  Meeting: "#00ACC1",
  Entertainment: "#E91E63",
  Travel: "#009688",
  Food: "#8D6E63",
  Sleep: "#5C6BC0",
  Health: "#26A69A",
  Social: "#AB47BC",
  Finance: "#FFA726",
  Creative: "#EC407A",
  Chores: "#8D8D8D",
  Custom: "#78909C",
};

export const MOODS = ["😊", "🙂", "🎯", "📖", "💻", "😴", "😢", "😭", "😡"];
export const MOOD_SCORE: Record<string, number> = {
  "😡": 1,
  "😭": 1,
  "😢": 2,
  "😴": 2,
  "📖": 3,
  "💻": 3,
  "🎯": 4,
  "🙂": 4,
  "😊": 5,
};

const CATEGORY_KEYWORDS: Record<ActivityCategory, string[]> = {
  Study: [
    "study",
    "lecture",
    "class",
    "homework",
    "assignment",
    "exam",
    "quiz",
    "course",
    "lesson",
    "tutor",
    "revision",
    "notes",
    "chapter",
    "textbook",
  ],
  Code: [
    "code",
    "coding",
    "programming",
    "debug",
    "deploy",
    "build",
    "commit",
    "pr",
    "pull request",
    "refactor",
    "dev",
    "develop",
    "api",
    "bug",
    "fix",
    "feature",
    "script",
    "terminal",
    "git",
    "github",
  ],
  Exercise: [
    "gym",
    "workout",
    "run",
    "running",
    "walk",
    "walking",
    "yoga",
    "swim",
    "swimming",
    "cycle",
    "cycling",
    "sport",
    "exercise",
    "jog",
    "jogging",
    "lift",
    "stretch",
    "cardio",
    "hiit",
    "football",
    "cricket",
    "badminton",
    "tennis",
    "push",
    "pull",
  ],
  Read: [
    "read",
    "reading",
    "book",
    "article",
    "blog",
    "newsletter",
    "manga",
    "novel",
    "paper",
    "journal",
    "ebook",
  ],
  Meeting: [
    "meeting",
    "standup",
    "call",
    "sync",
    "interview",
    "catch up",
    "discussion",
    "conference",
    "zoom",
    "meet",
    "1:1",
    "one-on-one",
  ],
  Entertainment: [
    "watch",
    "movie",
    "film",
    "series",
    "show",
    "netflix",
    "youtube",
    "gaming",
    "game",
    "play",
    "music",
    "concert",
    "browse",
    "scroll",
    "instagram",
    "twitter",
    "tiktok",
    "reel",
  ],
  Travel: [
    "travel",
    "commute",
    "drive",
    "driving",
    "bus",
    "train",
    "flight",
    "trip",
    "journey",
    "uber",
    "auto",
    "metro",
  ],
  Food: [
    "eat",
    "eating",
    "lunch",
    "dinner",
    "breakfast",
    "snack",
    "cook",
    "cooking",
    "meal",
    "food",
    "cafe",
    "coffee",
    "restaurant",
    "bake",
    "baking",
  ],
  Sleep: ["sleep", "nap", "rest", "bed", "wake", "morning routine"],
  Health: [
    "doctor",
    "hospital",
    "clinic",
    "medicine",
    "therapy",
    "physio",
    "dentist",
    "checkup",
    "prescription",
    "mental health",
  ],
  Social: [
    "friend",
    "friends",
    "family",
    "party",
    "hangout",
    "outing",
    "dinner with",
    "lunch with",
    "coffee with",
    "date",
    "wedding",
    "event",
  ],
  Finance: [
    "budget",
    "expense",
    "invoice",
    "pay",
    "payment",
    "bank",
    "tax",
    "investment",
    "stock",
    "crypto",
    "money",
    "salary",
  ],
  Creative: [
    "draw",
    "drawing",
    "sketch",
    "paint",
    "painting",
    "design",
    "write",
    "writing",
    "poem",
    "journal",
    "craft",
    "photo",
    "photography",
    "edit",
    "video",
  ],
  Chores: [
    "clean",
    "cleaning",
    "laundry",
    "wash",
    "dishes",
    "grocery",
    "groceries",
    "shop",
    "shopping",
    "vacuum",
    "organise",
    "organize",
    "tidy",
  ],
  Custom: [],
};

const EMOJI_MAP: [string[], string][] = [
  [["gym", "workout", "lift", "weights"], "🏋️"],
  [["run", "running", "jog", "jogging"], "🏃"],
  [["walk", "walking"], "🚶"],
  [["yoga", "stretch", "meditat"], "🧘"],
  [["swim", "swimming", "pool"], "🏊"],
  [["cycle", "cycling", "bike", "bicycle"], "🚴"],
  [["football", "soccer"], "⚽"],
  [["cricket"], "🏏"],
  [["badminton"], "🏸"],
  [["tennis"], "🎾"],
  [["basketball"], "🏀"],
  [
    [
      "code",
      "coding",
      "programming",
      "debug",
      "dev",
      "develop",
      "script",
      "git",
      "commit",
      "deploy",
      "build",
    ],
    "💻",
  ],
  [["bug", "fix", "refactor"], "🐛"],
  [["api", "backend", "server"], "⚙️"],
  [["study", "revision", "notes", "chapter"], "📚"],
  [["lecture", "class", "lesson"], "🎓"],
  [["homework", "assignment"], "📝"],
  [["exam", "quiz", "test"], "📋"],
  [["read", "reading", "book", "novel", "ebook"], "📖"],
  [["article", "blog", "newsletter"], "📰"],
  [["manga"], "🗒️"],
  [["meeting", "standup", "sync", "1:1"], "🤝"],
  [["call", "zoom", "meet"], "📞"],
  [["interview"], "💼"],
  [["movie", "film"], "🎬"],
  [["series", "show", "netflix"], "📺"],
  [["youtube"], "▶️"],
  [["gaming", "game", "play"], "🎮"],
  [["music", "concert", "listen"], "🎵"],
  [["instagram", "tiktok", "scroll", "browse"], "📱"],
  [["travel", "trip", "journey"], "✈️"],
  [["commute", "drive", "driving"], "🚗"],
  [["bus"], "🚌"],
  [["train", "metro"], "🚇"],
  [["uber", "auto"], "🛺"],
  [["lunch"], "🍱"],
  [["dinner"], "🍽️"],
  [["breakfast"], "🥐"],
  [["coffee", "cafe"], "☕"],
  [["snack"], "🍎"],
  [["cook", "cooking", "bake", "baking"], "👨‍🍳"],
  [["restaurant"], "🍴"],
  [["sleep", "nap"], "😴"],
  [["rest", "relax"], "🛋️"],
  [["morning routine", "wake"], "🌅"],
  [["doctor", "hospital", "clinic", "checkup"], "🏥"],
  [["medicine", "prescription"], "💊"],
  [["therapy", "mental health"], "🧠"],
  [["dentist"], "🦷"],
  [["friend", "hangout", "outing", "party"], "🎉"],
  [["family"], "👨‍👩‍👧"],
  [["date"], "❤️"],
  [["wedding"], "💒"],
  [["budget", "expense", "finance", "money"], "💰"],
  [["invoice", "tax"], "🧾"],
  [["investment", "stock", "crypto"], "📈"],
  [["draw", "drawing", "sketch"], "✏️"],
  [["paint", "painting"], "🎨"],
  [["design"], "🖼️"],
  [["write", "writing", "journal", "poem"], "🖊️"],
  [["photo", "photography"], "📷"],
  [["clean", "cleaning", "vacuum", "tidy"], "🧹"],
  [["laundry", "wash"], "🧺"],
  [["dishes"], "🍽️"],
  [["grocery", "groceries", "shopping", "shop"], "🛒"],
  // Emotion / mood keywords
  [["happy", "joy", "joyful", "delight", "wonderful", "great", "amazing"], "😊"],
  [["smile", "good", "nice", "pleasant", "alright", "fine", "okay"], "🙂"],
  [["sad", "sadness", "unhappy", "down", "blue", "melancholy", "gloomy"], "😢"],
  [["cry", "crying", "terrible", "awful", "horrible", "devastat", "heartbreaking"], "😭"],
  [["angry", "mad", "frustrat", "annoyed", "irritat", "furious", "rage"], "😡"],
  [["focus", "focused", "deep work", "concentrat", "productive", "flow"], "🎯"],
  [["tired", "exhausted", "fatigue", "drained", "sleepy", "nap"], "😴"],
  [["learn", "learning", "study", "reading", "research"], "📖"],
  [["work", "office", "job", "working", "meeting", "busy"], "💻"],
];

const DURATION_REGEX = /(\d+(?:\.\d+)?)\s*(hours?|hrs?|h|minutes?|mins?|m)\b/i;

export function detectDuration(name: string): number | null {
  const match = name.match(DURATION_REGEX);
  if (!match) return null;
  const val = parseFloat(match[1]);
  if (Number.isNaN(val) || val <= 0) return null;
  const unit = match[2].toLowerCase();
  if (unit.startsWith("h")) return Math.round(val * 60);
  return Math.round(val);
}

export function detectCategory(name: string): ActivityCategory | null {
  const lower = name.toLowerCase();
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS) as [
    ActivityCategory,
    string[],
  ][]) {
    if (cat === "Custom") continue;
    if (keywords.some((kw) => lower.includes(kw))) return cat;
  }
  return null;
}

export function detectMood(name: string): string | null {
  const lower = name.toLowerCase();
  for (const [keywords, emoji] of EMOJI_MAP) {
    if (keywords.some((kw) => lower.includes(kw))) return emoji;
  }
  return null;
}

export const CATEGORY_HEALTH: Record<ActivityCategory, { ideal: number; max: number }> = {
  Sleep: { ideal: 480, max: 600 },
  Exercise: { ideal: 60, max: 120 },
  Study: { ideal: 120, max: 300 },
  Code: { ideal: 180, max: 480 },
  Read: { ideal: 60, max: 180 },
  Meeting: { ideal: 60, max: 120 },
  Entertainment: { ideal: 60, max: 120 },
  Travel: { ideal: 30, max: 180 },
  Food: { ideal: 60, max: 120 },
  Health: { ideal: 60, max: 180 },
  Social: { ideal: 120, max: 300 },
  Finance: { ideal: 30, max: 120 },
  Creative: { ideal: 90, max: 240 },
  Chores: { ideal: 60, max: 120 },
  Custom: { ideal: 60, max: 240 },
};
```

### `src/lib/tymeline/papers.ts`

```ts
import type { Activity, Paper, PaperType, ActivityCategory } from "./types";

interface PaperDef {
  type: PaperType;
  title: string;
  reason: string;
  check: (ctx: {
    activities: Activity[];
    summariesCount: number;
    didExport: boolean;
    didImport: boolean;
  }) => boolean;
}

function sameDay(a: string, b: string) {
  const da = new Date(a),
    db = new Date(b);
  return (
    da.getFullYear() === db.getFullYear() &&
    da.getMonth() === db.getMonth() &&
    da.getDate() === db.getDate()
  );
}

function uniqueDays(activities: Activity[]): string[] {
  return Array.from(new Set(activities.map((a) => new Date(a.timestamp).toDateString())));
}

function consecutiveDays(activities: Activity[], n: number): boolean {
  const days = uniqueDays(activities)
    .map((d) => new Date(d).getTime())
    .sort();
  let streak = 1;
  for (let i = 1; i < days.length; i++) {
    const diff = (days[i] - days[i - 1]) / 86400000;
    if (diff === 1) {
      streak++;
      if (streak >= n) return true;
    } else if (diff > 1) streak = 1;
  }
  return false;
}

export const PAPERS: PaperDef[] = [
  {
    type: "first-step",
    title: "First Step",
    reason: "Logged your first activity",
    check: ({ activities }) => activities.length >= 1,
  },
  {
    type: "consistent",
    title: "Consistent",
    reason: "Logged 3 days in a row",
    check: ({ activities }) => consecutiveDays(activities, 3),
  },
  {
    type: "deep-diver",
    title: "Deep Diver",
    reason: "Logged an activity over 2 hours",
    check: ({ activities }) => activities.some((a) => (a.duration ?? 0) >= 120),
  },
  {
    type: "mood-tracker",
    title: "Mood Tracker",
    reason: "Added mood to 5 activities",
    check: ({ activities }) => activities.filter((a) => a.mood).length >= 5,
  },
  {
    type: "reflector",
    title: "Reflector",
    reason: "Generated your first summary",
    check: ({ summariesCount }) => summariesCount >= 1,
  },
  {
    type: "archivist",
    title: "Archivist",
    reason: "Exported a backup",
    check: ({ didExport }) => didExport,
  },
  {
    type: "returning",
    title: "Returning",
    reason: "Imported data",
    check: ({ didImport }) => didImport,
  },
  {
    type: "week-warrior",
    title: "Week Warrior",
    reason: "Logged every day for 7 days",
    check: ({ activities }) => consecutiveDays(activities, 7),
  },
  {
    type: "variety",
    title: "Variety",
    reason: "Used 5 different categories in one day",
    check: ({ activities }) => {
      const byDay = new Map<string, Set<string>>();
      for (const a of activities) {
        const k = new Date(a.timestamp).toDateString();
        if (!byDay.has(k)) byDay.set(k, new Set());
        byDay.get(k)!.add(a.category);
      }
      return Array.from(byDay.values()).some((s) => s.size >= 5);
    },
  },
  {
    type: "century",
    title: "Century",
    reason: "Logged 100 activities",
    check: ({ activities }) => activities.length >= 100,
  },
  {
    type: "early-bird",
    title: "Early Bird",
    reason: "Logged an activity before 7 AM",
    check: ({ activities }) => activities.some((a) => new Date(a.timestamp).getHours() < 7),
  },
  {
    type: "night-owl",
    title: "Night Owl",
    reason: "Logged an activity after 11 PM",
    check: ({ activities }) => activities.some((a) => new Date(a.timestamp).getHours() >= 23),
  },
  {
    type: "emoji-lover",
    title: "Mood Lover",
    reason: "Added mood to 10 activities",
    check: ({ activities }) => activities.filter((a) => a.mood).length >= 10,
  },
  {
    type: "chained",
    title: "Chained",
    reason: "Logged 5 back-to-back activities using time chaining",
    check: ({ activities }) => activities.filter((a) => a.endTime).length >= 5,
  },
  {
    type: "multi-week",
    title: "Multi-Week",
    reason: "Logged activities across 3 different calendar weeks",
    check: ({ activities }) => {
      const weeks = new Set(
        activities.map((a) => {
          const d = new Date(a.timestamp);
          const startOfYear = new Date(d.getFullYear(), 0, 1);
          return `${d.getFullYear()}-W${Math.ceil(((d.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7)}`;
        }),
      );
      return weeks.size >= 3;
    },
  },
  {
    type: "category-explorer",
    title: "Explorer",
    reason: "Used every category at least once",
    check: ({ activities }) => {
      const used = new Set(activities.map((a) => a.category));
      const required: ActivityCategory[] = [
        "Study",
        "Code",
        "Exercise",
        "Read",
        "Meeting",
        "Entertainment",
        "Travel",
        "Food",
        "Sleep",
        "Health",
        "Social",
        "Finance",
        "Creative",
        "Chores",
      ];
      return required.every((c) => used.has(c));
    },
  },
  {
    type: "speed-logger",
    title: "Speed Logger",
    reason: "Logged 5 activities in one day",
    check: ({ activities }) => {
      const byDay = new Map<string, number>();
      for (const a of activities) {
        const k = new Date(a.timestamp).toDateString();
        byDay.set(k, (byDay.get(k) ?? 0) + 1);
      }
      return Array.from(byDay.values()).some((n) => n >= 5);
    },
  },
  {
    type: "half-century",
    title: "Half Century",
    reason: "Logged 50 activities",
    check: ({ activities }) => activities.length >= 50,
  },
  {
    type: "mood-rainbow",
    title: "Mood Rainbow",
    reason: "Used every mood emoji at least once",
    check: ({ activities }) => {
      const used = new Set(activities.map((a) => a.mood).filter(Boolean));
      return used.size >= 8;
    },
  },
  {
    type: "marathon",
    title: "Marathon",
    reason: "Accumulated 24 total hours of logged time",
    check: ({ activities }) => {
      const totalMin = activities.reduce((s, a) => s + (a.duration ?? 0), 0);
      return totalMin >= 1440;
    },
  },
];

export function evaluatePapers(ctx: {
  activities: Activity[];
  existing: Paper[];
  summariesCount: number;
  didExport?: boolean;
  didImport?: boolean;
}): Paper[] {
  const earned = new Set(ctx.existing.map((p) => p.type));
  const newPapers: Paper[] = [];
  for (const def of PAPERS) {
    if (earned.has(def.type)) continue;
    if (
      def.check({
        activities: ctx.activities,
        summariesCount: ctx.summariesCount,
        didExport: ctx.didExport ?? false,
        didImport: ctx.didImport ?? false,
      })
    ) {
      newPapers.push({
        id: crypto.randomUUID(),
        type: def.type,
        title: def.title,
        reason: def.reason,
        earnedAt: new Date().toISOString(),
      });
    }
  }
  return newPapers;
}

export const PAPER_ICONS: Record<PaperType, string> = {
  "first-step": "👣",
  consistent: "🔥",
  "deep-diver": "🧠",
  "mood-tracker": "💭",
  reflector: "✨",
  archivist: "📦",
  returning: "🔁",
  "week-warrior": "🏆",
  variety: "🎨",
  century: "🥇",
  "early-bird": "🌅",
  "night-owl": "🦉",
  "emoji-lover": "😍",
  chained: "⛓️",
  "multi-week": "📅",
  "category-explorer": "🧭",
  "speed-logger": "⚡",
  "half-century": "🎯",
  "mood-rainbow": "🌈",
  marathon: "🏅",
};

// Deterministic gradient from paper id
export function paperGradient(id: string): string {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const hue1 = h % 360;
  const hue2 = (hue1 + 40 + (h % 60)) % 360;
  return `linear-gradient(135deg, hsl(${hue1} 65% 78%) 0%, hsl(${hue2} 70% 70%) 100%)`;
}
export { sameDay };
```

### `src/lib/tymeline/storage.ts`

```ts
import { useEffect, useState, useCallback } from "react";
import type { Activity, Paper, Settings, Summary } from "./types";

const KEYS = {
  activities: "tymeline:activities",
  papers: "tymeline:papers",
  summaries: "tymeline:summaries",
  settings: "tymeline:settings",
  skippedDays: "tymeline:skipped-days",
} as const;

const DEFAULT_SETTINGS: Settings = {
  aiEnabled: true,
  theme: "system",
  onboarded: false,
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("tymeline:change", { detail: { key } }));
}

function useLocal<T>(key: string, fallback: T): [T, (v: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => read(key, fallback));

  useEffect(() => {
    // Re-read on mount in case localStorage changed between lazy init and effect
    setValue(read(key, fallback));
    const onChange = (e: Event) => {
      const ce = e as CustomEvent<{ key: string }>;
      if (ce.detail?.key === key) setValue(read(key, fallback));
    };
    window.addEventListener("tymeline:change", onChange);
    return () => window.removeEventListener("tymeline:change", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        write(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, update];
}

export function useActivities() {
  return useLocal<Activity[]>(KEYS.activities, []);
}
export function usePapers() {
  return useLocal<Paper[]>(KEYS.papers, []);
}
export function useSummaries() {
  return useLocal<Summary[]>(KEYS.summaries, []);
}
export function useSkippedDays() {
  return useLocal<string[]>(KEYS.skippedDays, []);
}
export function useSettings() {
  return useLocal<Settings>(KEYS.settings, DEFAULT_SETTINGS);
}

export function exportAll() {
  return {
    activities: read<Activity[]>(KEYS.activities, []),
    papers: read<Paper[]>(KEYS.papers, []),
    summaries: read<Summary[]>(KEYS.summaries, []),
    settings: read<Settings>(KEYS.settings, DEFAULT_SETTINGS),
    exportedAt: new Date().toISOString(),
  };
}

export function importAll(data: {
  activities?: Activity[];
  papers?: Paper[];
  summaries?: Summary[];
  settings?: Settings;
}) {
  if (data.activities) write(KEYS.activities, data.activities);
  if (data.papers) write(KEYS.papers, data.papers);
  if (data.summaries) write(KEYS.summaries, data.summaries);
  if (data.settings) write(KEYS.settings, data.settings);
}

export function clearAll() {
  if (typeof window === "undefined") return;
  Object.values(KEYS).forEach((k) => window.localStorage.removeItem(k));
  window.dispatchEvent(new CustomEvent("tymeline:change", { detail: { key: "*" } }));
}

export { KEYS };
```

### `src/lib/tymeline/types.ts`

```ts
export type ActivityCategory =
  | "Study"
  | "Code"
  | "Exercise"
  | "Read"
  | "Meeting"
  | "Entertainment"
  | "Travel"
  | "Food"
  | "Sleep"
  | "Health"
  | "Social"
  | "Finance"
  | "Creative"
  | "Chores"
  | "Custom";

export interface Activity {
  id: string;
  name: string;
  category: ActivityCategory;
  duration?: number; // minutes
  mood?: string;
  timestamp: string; // ISO — start time
  endTime?: string; // ISO — end time
  createdAt: string;
}

export type PaperType =
  | "first-step"
  | "consistent"
  | "deep-diver"
  | "mood-tracker"
  | "reflector"
  | "archivist"
  | "returning"
  | "week-warrior"
  | "variety"
  | "century"
  | "early-bird"
  | "night-owl"
  | "emoji-lover"
  | "chained"
  | "multi-week"
  | "category-explorer"
  | "speed-logger"
  | "half-century"
  | "mood-rainbow"
  | "marathon";

export interface Paper {
  id: string;
  type: PaperType;
  title: string;
  reason: string;
  earnedAt: string;
}

export interface SummaryContent {
  what_you_did: string;
  positives: string;
  negatives: string;
  improvements_must: string;
  improvements_nice: string;
}

export interface Summary {
  id: string;
  period: "week" | "month" | "all";
  generatedAt: string;
  content: string | SummaryContent;
  isAI: boolean;
}

export interface Settings {
  name?: string;
  why?: string;
  aiEnabled: boolean;
  theme: "system" | "light" | "dark";
  onboarded?: boolean;
}
```

### `src/lib/api/example.functions.ts`

```ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getServerConfig } from "../config.server";

// Example createServerFn. Server-side handler invoked from the client:
//   const result = await getGreeting({ data: { name: "Ada" } })
// The .handler body runs server-only — imports used only inside it (like
// .server.ts modules) are tree-shaken from the client bundle. Module-level
// code here still ships to the client; for truly server-only helpers, put
// them in a .server.ts file. Use this pattern instead of Supabase Edge
// Functions for server logic.

export const getGreeting = createServerFn({ method: "POST" })
  .inputValidator(z.object({ name: z.string().min(1) }))
  .handler(async ({ data }) => {
    const config = getServerConfig();
    return {
      greeting: `Hello, ${data.name}!`,
      mode: config.nodeEnv ?? "unknown",
    };
  });
```

### `src/components/tymeline/ActivityCard.tsx`

```tsx
import type { Activity } from "@/lib/tymeline/types";
import { CATEGORY_COLORS } from "@/lib/tymeline/categories";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";

export function ActivityCard({
  activity,
  index,
  onDelete,
}: {
  activity: Activity;
  index: number;
  onDelete: (id: string) => void;
}) {
  const color = CATEGORY_COLORS[activity.category];
  return (
    <div
      className="group relative flex items-stretch overflow-hidden rounded-2xl border bg-surface shadow-sm transition-transform active:scale-[0.98]"
      style={{
        animation: `fadeInUp 420ms cubic-bezier(0.16,1,0.3,1) both`,
        animationDelay: `${Math.min(index, 8) * 50}ms`,
      }}
    >
      <div className="w-1.5 shrink-0" style={{ backgroundColor: color }} />
      <div className="flex-1 px-4 py-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg leading-tight text-foreground">{activity.name}</h3>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-text-secondary">
              <span
                className="rounded-full px-2 py-0.5 font-medium"
                style={{ backgroundColor: `${color}22`, color }}
              >
                {activity.category}
              </span>
              {activity.duration ? <span>· {formatDuration(activity.duration)}</span> : null}
              <span>· {format(new Date(activity.timestamp), "h:mm a")}</span>
            </div>
          </div>
          {activity.mood ? (
            <div className="text-3xl leading-none" aria-label="mood">
              {activity.mood}
            </div>
          ) : null}
        </div>
      </div>
      <button
        onClick={() => onDelete(activity.id)}
        aria-label="Delete"
        className="absolute right-2 top-2 rounded-full p-1.5 text-text-secondary opacity-0 transition-opacity hover:bg-accent-soft hover:text-accent group-hover:opacity-100"
      >
        <Trash2 size={14} />
      </button>
      <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}

function formatDuration(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}
```

### `src/components/tymeline/AddActivitySheet.tsx`

```tsx
import { useState, useEffect, useRef, useMemo } from "react";
import {
  CATEGORIES,
  CATEGORY_COLORS,
  MOODS,
  detectCategory,
  detectMood,
  detectDuration,
} from "@/lib/tymeline/categories";
import type { Activity, ActivityCategory } from "@/lib/tymeline/types";
import { X } from "lucide-react";

function fmtTime(d: Date): string {
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function parseTime(val: string, base: Date): Date {
  const [h, m] = val.split(":").map(Number);
  const d = new Date(base);
  d.setHours(h, m, 0, 0);
  return d;
}

function calcDuration(start: string, end: string, base: Date): number {
  const s = parseTime(start, base).getTime();
  let e = parseTime(end, base).getTime();
  if (e <= s) e += 86400000;
  return Math.round((e - s) / 60000);
}

function formatDuration(min: number): string {
  if (min < 60) return `${min}m`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

function withinHours(iso: string, hours: number): boolean {
  const diff = Date.now() - new Date(iso).getTime();
  return diff >= 0 && diff < hours * 3600000;
}

export function AddActivitySheet({
  open,
  onClose,
  onAdd,
  defaultDate,
  lastEndTime,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (a: Activity) => void;
  defaultDate?: Date;
  lastEndTime?: string;
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<ActivityCategory>("Study");
  const [mood, setMood] = useState<string | undefined>();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);
  const [showMoodPicker, setShowMoodPicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const baseDate = useMemo(() => defaultDate ?? new Date(), [defaultDate, open]);

  // Reset on open
  useEffect(() => {
    if (!open) return;
    const n = new Date();
    let start = fmtTime(n);
    if (lastEndTime && withinHours(lastEndTime, 16)) {
      start = fmtTime(new Date(lastEndTime));
    }
    const end = fmtTime(new Date(n.getTime() + 60 * 60000));
    setName("");
    setCategory("Study");
    setMood(undefined);
    setStartTime(start);
    setEndTime(end);
    setShowCategoryPicker(false);
    setShowMoodPicker(false);
    setTimeout(() => inputRef.current?.focus(), 200);
  }, [open, lastEndTime, baseDate]);

  // Auto-detect category and mood from name
  useEffect(() => {
    if (!name) return;
    const cat = detectCategory(name);
    if (cat) {
      setCategory(cat);
      setShowCategoryPicker(false);
    }
    const mo = detectMood(name);
    if (mo) {
      setMood(mo);
      setShowMoodPicker(false);
    }
  }, [name]);

  // Duration from time range
  const duration = useMemo(
    () => calcDuration(startTime, endTime, baseDate),
    [startTime, endTime, baseDate],
  );

  // Detect duration from name (supplementary)
  const detectedDuration = useMemo(() => (name ? detectDuration(name) : null), [name]);

  if (!open) return null;

  const submit = () => {
    if (!name.trim()) return;
    const base = new Date(baseDate);
    const ts = parseTime(startTime, base);
    const te = parseTime(endTime, base);
    if (te <= ts) te.setDate(te.getDate() + 1);
    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      category,
      duration: duration > 0 ? duration : undefined,
      mood,
      timestamp: ts.toISOString(),
      endTime: te.toISOString(),
      createdAt: new Date().toISOString(),
    });
    onClose();
  };

  const detectedCat = detectCategory(name);
  const detectedMo = detectMood(name);
  const showCatBadge = detectedCat && !showCategoryPicker && name.length > 0;
  const showMoodBadge = detectedMo && !showMoodPicker && name.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" role="dialog" aria-modal>
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-md rounded-t-3xl border-t bg-surface p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
        style={{ animation: "slideUp 320ms cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-border" />
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl">Log a moment</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 text-text-secondary hover:bg-accent-soft"
          >
            <X size={18} />
          </button>
        </div>

        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="What did you do?"
          className="w-full rounded-xl border bg-background px-4 py-3 text-base outline-none focus:border-accent"
        />

        <div className="mt-4">
          <Label>Time</Label>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex-1">
              <span className="text-[10px] text-text-secondary">Start</span>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="mt-0.5 w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
            <span className="mt-5 text-text-secondary">→</span>
            <div className="flex-1">
              <span className="text-[10px] text-text-secondary">End</span>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="mt-0.5 w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-right text-sm font-medium text-text-secondary">
            <span>{formatDuration(duration)}</span>
            {detectedDuration && detectedDuration !== duration && (
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px]">
                ~{formatDuration(detectedDuration)} from name
              </span>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Label>Mood</Label>
          <div className="mt-2">
            {showMoodBadge ? (
              <div className="flex items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-3xl">
                  {mood}
                </span>
                <button
                  onClick={() => setShowMoodPicker(true)}
                  className="text-xs text-text-secondary underline transition hover:text-accent"
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="flex gap-1.5">
                {MOODS.map((m) => {
                  const active = mood === m;
                  return (
                    <button
                      key={m}
                      onClick={() => setMood(active ? undefined : m)}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-xl transition"
                      style={{
                        backgroundColor: active ? "var(--accent-soft)" : "transparent",
                        border: active ? "1.5px solid var(--accent)" : "1.5px solid transparent",
                      }}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Label>Category</Label>
          <div className="mt-2">
            {showCatBadge ? (
              <div className="flex items-center gap-2">
                <span
                  className="inline-block rounded-full px-3.5 py-1.5 text-sm font-medium text-white"
                  style={{ backgroundColor: CATEGORY_COLORS[category] }}
                >
                  {category}
                </span>
                <button
                  onClick={() => setShowCategoryPicker(true)}
                  className="text-xs text-text-secondary underline transition hover:text-accent"
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 scrollbar-hide">
                {CATEGORIES.map((c) => {
                  const active = category === c;
                  const col = CATEGORY_COLORS[c];
                  return (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className="shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition"
                      style={{
                        backgroundColor: active ? col : "transparent",
                        color: active ? "#fff" : "var(--foreground)",
                        borderColor: active ? col : "var(--border)",
                      }}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={submit}
          disabled={!name.trim()}
          className="mt-6 w-full rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground transition active:scale-[0.98] disabled:opacity-40"
        >
          Log it
        </button>
        <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: none; } }`}</style>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
      {children}
    </label>
  );
}
```

### `src/components/tymeline/PaperEarnedNotification.tsx`

```tsx
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { PAPER_ICONS } from "@/lib/tymeline/papers";
import type { Paper } from "@/lib/tymeline/types";

interface QueuedPaper {
  paper: Paper;
  id: number;
}

export function PaperEarnedNotification() {
  const navigate = useNavigate();
  const [queue, setQueue] = useState<QueuedPaper[]>([]);
  const [current, setCurrent] = useState<QueuedPaper | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idRef = useRef(0);

  const dismiss = useCallback(() => {
    setCurrent(null);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  // Process queue: show next after 600ms gap
  useEffect(() => {
    if (current !== null) return;
    if (queue.length === 0) return;
    const next = queue[0];
    setQueue((prev) => prev.slice(1));
    setCurrent(next);
    try {
      window.navigator.vibrate?.([100, 50, 100]);
    } catch {
      /* no-op */
    }
    timerRef.current = setTimeout(dismiss, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, queue, dismiss]);

  // Listen for custom events
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ paper: Paper }>;
      const paper = ce.detail?.paper;
      if (!paper) return;
      idRef.current += 1;
      setQueue((prev) => [...prev, { paper, id: idRef.current }]);
    };
    window.addEventListener("tymeline:paper-earned", handler);
    return () => window.removeEventListener("tymeline:paper-earned", handler);
  }, []);

  const handleOpen = () => {
    dismiss();
    navigate({ to: "/collection" });
  };

  if (!current) return null;

  const icon = PAPER_ICONS[current.paper.type] ?? "📜";

  return (
    <div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-50 flex justify-center px-4">
      <button
        onClick={handleOpen}
        className="flex items-center gap-3 rounded-full border bg-surface px-5 py-3 shadow-lg transition active:scale-95"
        style={{
          animation:
            "notificationSlideUp 320ms cubic-bezier(0.16,1,0.3,1), notificationShake 400ms ease-in-out 320ms",
        }}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-serif text-sm text-foreground whitespace-nowrap">
          You earned <strong>{current.paper.title}</strong>!
        </span>
        <span className="text-xs font-medium text-accent">Open</span>
      </button>
      <style>{`
        @keyframes notificationSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes notificationShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-4px); }
        }
      `}</style>
    </div>
  );
}
```

### `src/components/tymeline/TabBar.tsx`

```tsx
import { Link, useLocation } from "@tanstack/react-router";
import { Home, BarChart3, Sparkles, Layers } from "lucide-react";

const TABS = [
  { to: "/", label: "Timeline", icon: Home },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/summary", label: "Reflect", icon: Sparkles },
  { to: "/collection", label: "Papers", icon: Layers },
] as const;

export function TabBar() {
  const loc = useLocation();
  if (loc.pathname.startsWith("/settings") || loc.pathname.startsWith("/onboarding")) return null;
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {TABS.map((t) => {
          const active = t.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(t.to);
          const Icon = t.icon;
          return (
            <Link
              key={t.to}
              to={t.to}
              className="flex flex-1 flex-col items-center gap-1 py-3 text-xs transition-colors"
              style={{ color: active ? "var(--accent)" : "var(--text-secondary)" }}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span style={{ fontWeight: active ? 600 : 500 }}>{t.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
```

### `src/components/tymeline/ThemeProvider.tsx`

```tsx
import { useEffect, type ReactNode } from "react";
import { useSettings } from "@/lib/tymeline/storage";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [settings] = useSettings();
  useEffect(() => {
    const apply = () => {
      const root = document.documentElement;
      const wantDark =
        settings.theme === "dark" ||
        (settings.theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      root.classList.toggle("dark", wantDark);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", wantDark ? "#141210" : "#FAF7F2");
    };
    apply();
    if (settings.theme === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      mql.addEventListener("change", apply);
      return () => mql.removeEventListener("change", apply);
    }
  }, [settings.theme]);
  return <>{children}</>;
}
```

### `src/components/ui/accordion.tsx`

```tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
```

### `src/components/ui/alert-dialog.tsx`

```tsx
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
```

### `src/components/ui/alert.tsx`

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
```

### `src/components/ui/aspect-ratio.tsx`

```tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
```

### `src/components/ui/avatar.tsx`

```tsx
"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
```

### `src/components/ui/badge.tsx`

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
```

### `src/components/ui/breadcrumb.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
```

### `src/components/ui/button.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

### `src/components/ui/calendar.tsx`

```tsx
"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day,
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("size-4", className)} {...props} />;
          }

          if (orientation === "right") {
            return <ChevronRightIcon className={cn("size-4", className)} {...props} />;
          }

          return <ChevronDownIcon className={cn("size-4", className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
```

### `src/components/ui/card.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

### `src/components/ui/carousel.tsx`

```tsx
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
```

### `src/components/ui/chart.tsx`

```tsx
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload
            .filter((item) => item.type !== "none")
            .map((item, index) => {
              const key = `${nameKey || item.name || item.dataKey || "value"}`;
              const itemConfig = getPayloadConfigFromPayload(config, item, key);
              const indicatorColor = color || item.payload.fill || item.color;

              return (
                <div
                  key={item.dataKey}
                  className={cn(
                    "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                    indicator === "dot" && "items-center",
                  )}
                >
                  {formatter && item?.value !== undefined && item.name ? (
                    formatter(item.value, item.name, item, index, item.payload)
                  ) : (
                    <>
                      {itemConfig?.icon ? (
                        <itemConfig.icon />
                      ) : (
                        !hideIndicator && (
                          <div
                            className={cn(
                              "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                              {
                                "h-2.5 w-2.5": indicator === "dot",
                                "w-1": indicator === "line",
                                "w-0 border-[1.5px] border-dashed bg-transparent":
                                  indicator === "dashed",
                                "my-0.5": nestLabel && indicator === "dashed",
                              },
                            )}
                            style={
                              {
                                "--color-bg": indicatorColor,
                                "--color-border": indicatorColor,
                              } as React.CSSProperties
                            }
                          />
                        )
                      )}
                      <div
                        className={cn(
                          "flex flex-1 justify-between leading-none",
                          nestLabel ? "items-end" : "items-center",
                        )}
                      >
                        <div className="grid gap-1.5">
                          {nestLabel ? tooltipLabel : null}
                          <span className="text-muted-foreground">
                            {itemConfig?.label || item.name}
                          </span>
                        </div>
                        {item.value && (
                          <span className="font-mono font-medium tabular-nums text-foreground">
                            {item.value.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className,
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
```

### `src/components/ui/checkbox.tsx`

```tsx
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
```

### `src/components/ui/collapsible.tsx`

```tsx
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
```

### `src/components/ui/command.tsx`

```tsx
"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
```

### `src/components/ui/context-menu.tsx`

```tsx
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
```

### `src/components/ui/dialog.tsx`

```tsx
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
```

### `src/components/ui/drawer.tsx`

```tsx
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
```

### `src/components/ui/dropdown-menu.tsx`

```tsx
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
```

### `src/components/ui/form.tsx`

```tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
```

### `src/components/ui/hover-card.tsx`

```tsx
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-hover-card-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
```

### `src/components/ui/input-otp.tsx`

```tsx
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName,
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
```

### `src/components/ui/input.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
```

### `src/components/ui/label.tsx`

```tsx
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
```

### `src/components/ui/menubar.tsx`

```tsx
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
```

### `src/components/ui/navigation-menu.tsx`

```tsx
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
```

### `src/components/ui/pagination.tsx`

```tsx
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("", className)} {...props} />,
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
```

### `src/components/ui/popover.tsx`

```tsx
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
```

### `src/components/ui/progress.tsx`

```tsx
"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
```

### `src/components/ui/radio-group.tsx`

```tsx
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
```

### `src/components/ui/resizable.tsx`

```tsx
import { GripVertical } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof Group>) => (
  <Group
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
}) => (
  <Separator
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
```

### `src/components/ui/scroll-area.tsx`

```tsx
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
```

### `src/components/ui/select.tsx`

```tsx
"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
```

### `src/components/ui/separator.tsx`

```tsx
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
```

### `src/components/ui/sheet.tsx`

```tsx
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
```

### `src/components/ui/sidebar.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open],
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className,
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="group peer hidden text-sidebar-foreground md:block"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
          )}
        />
        <div
          className={cn(
            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className,
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          "relative flex w-full flex-1 flex-col bg-background",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className,
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="footer"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="content"
        className={cn(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="group"
        className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
        {...props}
      />
    );
  },
);
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  ),
);
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  ),
);
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring cursor-pointer transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ ...props }, ref) => <li ref={ref} {...props} />,
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
```

### `src/components/ui/skeleton.tsx`

```tsx
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-primary/10", className)} {...props} />;
}

export { Skeleton };
```

### `src/components/ui/slider.tsx`

```tsx
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
```

### `src/components/ui/sonner.tsx`

```tsx
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
```

### `src/components/ui/switch.tsx`

```tsx
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
```

### `src/components/ui/table.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
));
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
```

### `src/components/ui/tabs.tsx`

```tsx
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
```

### `src/components/ui/textarea.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
```

### `src/components/ui/toggle-group.tsx`

```tsx
"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
```

### `src/components/ui/toggle.tsx`

```tsx
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
```

### `src/components/ui/tooltip.tsx`

```tsx
"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
```

### `src/routes/README.md`

```md
# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
is a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic — bare `$`, no curly braces) |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment) |
| `files/$.tsx` | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx` | layout route (renders children via `<Outlet />`) |
| `__root.tsx` | app shell — wraps every page; preserve `<Outlet />` |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.
```

### `src/routes/__root.tsx`

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "@/components/tymeline/ThemeProvider";
import { TabBar } from "@/components/tymeline/TabBar";
import { PaperEarnedNotification } from "@/components/tymeline/PaperEarnedNotification";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#FAF7F2" },
      { title: "Tymeline — Your time, your story" },
      {
        name: "description",
        content:
          "A private, local-first life timeline. Capture moments and reflect on how you spend your time.",
      },
      { property: "og:title", content: "Tymeline" },
      { property: "og:description", content: "A private, local-first life timeline." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="mx-auto min-h-screen max-w-md pb-24">
          <Outlet />
        </div>
        <TabBar />
        <PaperEarnedNotification />
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
```

### `src/routes/analytics.tsx`

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useActivities } from "@/lib/tymeline/storage";
import { CATEGORY_COLORS, CATEGORY_HEALTH, MOOD_SCORE } from "@/lib/tymeline/categories";
import type { Activity, ActivityCategory } from "@/lib/tymeline/types";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Cell,
} from "recharts";
import { format, startOfDay, startOfWeek, startOfMonth } from "date-fns";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Tymeline" },
      { name: "description", content: "See how you spend your time." },
    ],
  }),
  component: AnalyticsPage,
});

type Range = "today" | "week" | "month" | "all";
const RANGES: { id: Range; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "week", label: "Week" },
  { id: "month", label: "Month" },
  { id: "all", label: "All" },
];

function filterRange(activities: Activity[], range: Range): Activity[] {
  const now = new Date();
  let from: Date | null = null;
  if (range === "today") from = startOfDay(now);
  if (range === "week") from = startOfWeek(now, { weekStartsOn: 1 });
  if (range === "month") from = startOfMonth(now);
  return from ? activities.filter((a) => new Date(a.timestamp) >= from!) : activities;
}

interface BarData {
  category: string;
  idealHours: number;
  extraHours: number;
  totalMinutes: number;
  health: "under" | "ideal" | "over-ok" | "overdone";
}

function getBarColors(health: BarData["health"], baseColor: string) {
  switch (health) {
    case "under":
      return { ideal: "#A8D5A2", extra: "transparent" };
    case "ideal":
      return { ideal: "#4CAF50", extra: "transparent" };
    case "over-ok":
      return { ideal: "#A8D5A2", extra: darken(baseColor, 30) };
    case "overdone":
      return { ideal: "#A8D5A2", extra: "#C0392B" };
  }
}

function darken(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max((num >> 16) - amount, 0);
  const g = Math.max(((num >> 8) & 0xff) - amount, 0);
  const b = Math.max((num & 0xff) - amount, 0);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

function AnalyticsPage() {
  const [activities] = useActivities();
  const [range, setRange] = useState<Range>("week");
  const filtered = useMemo(() => filterRange(activities, range), [activities, range]);

  const barData = useMemo(() => {
    const m = new Map<string, number>();
    for (const a of filtered) {
      m.set(a.category, (m.get(a.category) ?? 0) + (a.duration ?? 30));
    }
    return Array.from(m.entries())
      .map(([cat, minutes]): BarData => {
        const catKey = cat as ActivityCategory;
        const health = CATEGORY_HEALTH[catKey];
        const idealMin = health?.ideal ?? 60;
        const maxMin = health?.max ?? 240;
        let healthStatus: BarData["health"];
        const ratio = minutes / idealMin;
        if (ratio < 0.9) healthStatus = "under";
        else if (ratio <= 1.1) healthStatus = "ideal";
        else if (minutes <= maxMin) healthStatus = "over-ok";
        else healthStatus = "overdone";
        return {
          category: cat,
          idealHours: Math.min(minutes, idealMin) / 60,
          extraHours: Math.max(minutes - idealMin, 0) / 60,
          totalMinutes: minutes,
          health: healthStatus,
        };
      })
      .sort((a, b) => b.idealHours + b.extraHours - (a.idealHours + a.extraHours));
  }, [filtered]);

  const moodTrend = useMemo(() => {
    const m = new Map<string, { sum: number; count: number }>();
    for (const a of filtered) {
      if (!a.mood) continue;
      const key = format(new Date(a.timestamp), "MMM d");
      const cur = m.get(key) ?? { sum: 0, count: 0 };
      cur.sum += MOOD_SCORE[a.mood] ?? 3;
      cur.count += 1;
      m.set(key, cur);
    }
    return Array.from(m.entries()).map(([date, { sum, count }]) => ({
      date,
      mood: +(sum / count).toFixed(2),
    }));
  }, [filtered]);

  const heatmap = useMemo(() => {
    const counts = new Array(24).fill(0);
    for (const a of filtered) counts[new Date(a.timestamp).getHours()]++;
    const max = Math.max(...counts, 1);
    return counts.map((c, h) => ({ hour: h, intensity: c / max, count: c }));
  }, [filtered]);

  const stats = useMemo(() => {
    const freq = new Map<string, number>();
    const moodFreq = new Map<string, number>();
    const byDay = new Map<string, number>();
    for (const a of filtered) {
      freq.set(a.name, (freq.get(a.name) ?? 0) + 1);
      if (a.mood) moodFreq.set(a.mood, (moodFreq.get(a.mood) ?? 0) + 1);
      const k = new Date(a.timestamp).toDateString();
      byDay.set(k, (byDay.get(k) ?? 0) + 1);
    }
    const top = (m: Map<string, number>) =>
      Array.from(m.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
    const longest = Array.from(byDay.entries()).sort((a, b) => b[1] - a[1])[0];
    return {
      total: filtered.length,
      topActivity: top(freq),
      topMood: top(moodFreq),
      longestDay: longest ? `${longest[1]} on ${format(new Date(longest[0]), "MMM d")}` : "—",
    };
  }, [filtered]);

  return (
    <div className="px-5 pt-6">
      <header className="mb-5">
        <h1 className="font-serif text-3xl text-foreground">How you spend time</h1>
        <p className="mt-1 text-sm text-text-secondary">Patterns in your moments</p>
      </header>

      <div className="-mx-5 mb-6 flex gap-2 overflow-x-auto px-5 scrollbar-hide">
        {RANGES.map((r) => {
          const active = range === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setRange(r.id)}
              className="shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition"
              style={{
                backgroundColor: active ? "var(--accent)" : "transparent",
                color: active ? "var(--accent-foreground)" : "var(--foreground)",
                borderColor: active ? "var(--accent)" : "var(--border)",
              }}
            >
              {r.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <EmptyChart />
      ) : (
        <>
          <Card title="Time by category">
            <div style={{ height: Math.max(180, barData.length * 40) }}>
              <ResponsiveContainer>
                <BarChart
                  data={barData}
                  layout="vertical"
                  margin={{ left: 12, right: 16, top: 4, bottom: 4 }}
                  stackOffset="sign"
                >
                  <CartesianGrid horizontal={false} stroke="var(--border)" />
                  <XAxis type="number" stroke="var(--text-secondary)" fontSize={11} />
                  <YAxis
                    type="category"
                    dataKey="category"
                    stroke="var(--text-secondary)"
                    fontSize={11}
                    width={86}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                    formatter={(v: number, name: string) => [
                      `${v.toFixed(1)}h`,
                      name === "idealHours" ? "Ideal" : "Extra",
                    ]}
                  />
                  <Bar dataKey="idealHours" stackId="a" animationDuration={700}>
                    {barData.map((d) => {
                      const cat = d.category as ActivityCategory;
                      const colors = getBarColors(d.health, CATEGORY_COLORS[cat] ?? "#78909C");
                      return <Cell key={d.category} fill={colors.ideal} />;
                    })}
                  </Bar>
                  <Bar
                    dataKey="extraHours"
                    stackId="a"
                    radius={[0, 8, 8, 0]}
                    animationDuration={700}
                  >
                    {barData.map((d) => {
                      const cat = d.category as ActivityCategory;
                      const colors = getBarColors(d.health, CATEGORY_COLORS[cat] ?? "#78909C");
                      return <Cell key={d.category} fill={colors.extra} />;
                    })}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-text-secondary">
              <span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#A8D5A2" }}
                />{" "}
                Under ideal
              </span>
              <span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#4CAF50" }}
                />{" "}
                Ideal
              </span>
              <span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: darken("#78909C", 30) }}
                />{" "}
                Over (ok)
              </span>
              <span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#C0392B" }}
                />{" "}
                Overdone
              </span>
            </div>
          </Card>

          {moodTrend.length > 1 && (
            <Card title="Mood over time">
              <div style={{ height: 180 }}>
                <ResponsiveContainer>
                  <LineChart data={moodTrend} margin={{ left: -8, right: 8, top: 8, bottom: 4 }}>
                    <CartesianGrid stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="date" stroke="var(--text-secondary)" fontSize={11} />
                    <YAxis domain={[1, 5]} stroke="var(--text-secondary)" fontSize={11} />
                    <Tooltip
                      contentStyle={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="mood"
                      stroke="var(--accent)"
                      strokeWidth={2.5}
                      dot={{ fill: "var(--accent)", r: 3 }}
                      animationDuration={700}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          )}

          <Card title="Active hours">
            <div className="grid grid-cols-6 gap-1.5">
              {heatmap.map((h) => (
                <div
                  key={h.hour}
                  className="flex aspect-square flex-col items-center justify-center rounded-md text-[10px] font-medium"
                  style={{
                    backgroundColor: `color-mix(in oklab, var(--accent) ${Math.round(h.intensity * 85) + 5}%, transparent)`,
                    color: h.intensity > 0.5 ? "#fff" : "var(--text-secondary)",
                  }}
                >
                  <span>{h.hour}</span>
                  {h.count > 0 && <span className="text-[8px] opacity-80">{h.count}</span>}
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Stat label="Total logged" value={String(stats.total)} />
            <Stat label="Top activity" value={stats.topActivity} />
            <Stat label="Top mood" value={stats.topMood} />
            <Stat label="Longest day" value={stats.longestDay} />
          </div>
        </>
      )}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-4 rounded-2xl border bg-surface p-4">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
        {title}
      </h3>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-surface p-4">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
        {label}
      </div>
      <div className="mt-1 truncate font-serif text-lg text-foreground">{value}</div>
    </div>
  );
}

function EmptyChart() {
  return (
    <div className="mt-16 text-center text-text-secondary">
      <p className="font-serif text-xl">No data yet</p>
      <p className="mt-1 text-sm">Log activities to see your patterns emerge.</p>
    </div>
  );
}
```

### `src/routes/collection.tsx`

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { usePapers } from "@/lib/tymeline/storage";
import { paperGradient, PAPERS, PAPER_ICONS } from "@/lib/tymeline/papers";
import { format } from "date-fns";
import { X } from "lucide-react";
import type { Paper } from "@/lib/tymeline/types";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Papers — Tymeline" },
      {
        name: "description",
        content: "Your collected papers — small marks of meaningful moments.",
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const [papers] = usePapers();
  const [open, setOpen] = useState<Paper | null>(null);

  return (
    <div className="px-5 pt-6">
      <header className="mb-2">
        <h1 className="font-serif text-3xl text-foreground">Your Papers</h1>
        <p className="mt-1 text-sm text-text-secondary">A trophy cabinet of your journey</p>
      </header>

      <div className="mb-6">
        <div className="mb-1 flex items-center justify-between text-xs text-text-secondary">
          <span className="font-semibold">
            {papers.length} / {PAPERS.length} papers
          </span>
          <span>{Math.round((papers.length / PAPERS.length) * 100)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all duration-700"
            style={{ width: `${(papers.length / PAPERS.length) * 100}%` }}
          />
        </div>
      </div>

      {papers.length === 0 ? (
        <div className="mt-12 rounded-2xl border-2 border-dashed bg-surface/40 p-8 text-center">
          <div className="mb-2 text-3xl">🏆</div>
          <p className="font-serif text-lg text-foreground">No papers yet</p>
          <p className="mt-1 text-sm text-text-secondary">
            Log moments and reflect — papers find you as you go.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {papers.map((p) => {
            const icon = PAPER_ICONS[p.type] ?? "📜";
            return (
              <button
                key={p.id}
                onClick={() => setOpen(p)}
                className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl border p-5 text-center transition active:scale-95"
                style={{
                  background: paperGradient(p.id),
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/15" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <span className="block text-4xl drop-shadow">{icon}</span>
                  <h3 className="font-serif text-base leading-tight text-white drop-shadow">
                    {p.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-white/80">
                    {format(new Date(p.earnedAt), "MMM d, yyyy")}
                  </p>
                </div>
                <div
                  className="absolute inset-0 z-20 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
                    animation: "shimmer 2s ease-in-out infinite",
                  }}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Unearned papers */}
      {papers.length < PAPERS.length && (
        <div className="mt-10">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Still to earn ({PAPERS.length - papers.length})
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {PAPERS.filter((d) => !papers.some((p) => p.type === d.type)).map((d) => (
              <div
                key={d.type}
                className="flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-border bg-surface/20 p-5 text-center"
              >
                <span className="text-3xl opacity-40">🔒</span>
                <h3 className="font-serif text-base text-foreground/40">{d.title}</h3>
                <p className="text-[10px] text-text-secondary/60">{d.reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detail modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          role="dialog"
          aria-modal
        >
          <div
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />
          <div
            className="relative w-full max-w-xs overflow-hidden rounded-3xl border p-8 text-center"
            style={{
              background: paperGradient(open.id),
              animation: "popIn 280ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-3 top-3 rounded-full bg-white/20 p-1.5 text-white"
            >
              <X size={16} />
            </button>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20" />
            <div className="relative text-white">
              <div className="mb-4 text-8xl leading-none drop-shadow">
                {PAPER_ICONS[open.type] ?? "📜"}
              </div>
              <h2 className="font-serif text-3xl leading-tight drop-shadow">{open.title}</h2>
              <p className="mt-3 text-sm opacity-95">{open.reason}</p>
              <p className="mt-6 text-xs uppercase tracking-wider opacity-80">
                Earned {format(new Date(open.earnedAt), "MMMM d, yyyy")}
              </p>
              <p className="mt-2 font-serif text-lg italic opacity-90">Well earned!</p>
            </div>
            <style>{`@keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: none; } }`}</style>
          </div>
        </div>
      )}
    </div>
  );
}
```

### `src/routes/index.tsx`

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { Plus, Settings as SettingsIcon } from "lucide-react";
import {
  useActivities,
  usePapers,
  useSummaries,
  useSettings,
  useSkippedDays,
} from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import { ActivityCard } from "@/components/tymeline/ActivityCard";
import { AddActivitySheet } from "@/components/tymeline/AddActivitySheet";
import { format, isToday, isYesterday, differenceInMinutes } from "date-fns";
import { toast } from "sonner";
import type { Activity } from "@/lib/tymeline/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tymeline — Your timeline" },
      { name: "description", content: "Your private daily activity timeline." },
    ],
  }),
  component: TimelinePage,
});

function formatGap(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.round(min / 60);
  return `${h} hour${h > 1 ? "s" : ""}`;
}

function dayLabel(day: string) {
  const d = new Date(day);
  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";
  return format(d, "EEEE, MMM d");
}

function TimelinePage() {
  const [activities, setActivities] = useActivities();
  const [papers, setPapers] = usePapers();
  const [summaries] = useSummaries();
  const [settings] = useSettings();
  const [skippedDays, setSkippedDays] = useSkippedDays();
  const [open, setOpen] = useState(false);
  const [pendingDate, setPendingDate] = useState<Date | undefined>();

  // Redirect onboarding (client-side)
  useEffect(() => {
    if (settings && settings.onboarded === false && typeof window !== "undefined") {
      window.location.assign("/onboarding");
    }
  }, [settings]);

  const sorted = useMemo(
    () => [...activities].sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp)),
    [activities],
  );

  const groups = useMemo(() => {
    const map = new Map<string, typeof sorted>();
    for (const a of sorted) {
      const k = new Date(a.timestamp).toDateString();
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(a);
    }
    return Array.from(map.entries());
  }, [sorted]);

  // Compute all calendar days from earliest activity to today
  const allDays = useMemo(() => {
    if (sorted.length === 0 && skippedDays.length === 0) return [];
    const dates: string[] = [];
    const earliest = sorted.length > 0 ? new Date(sorted[sorted.length - 1].timestamp) : new Date();
    const end = new Date();
    const cur = new Date(earliest);
    // Normalize to date-only range so time-of-day doesn't break the loop
    cur.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    while (cur <= end) {
      dates.push(cur.toDateString());
      cur.setDate(cur.getDate() + 1);
    }
    return dates;
  }, [sorted, skippedDays]);

  const todayCount = activities.filter((a) => isToday(new Date(a.timestamp))).length;

  const onAdd = (activity: Activity) => {
    const next = [activity, ...activities];
    setActivities(next);
    const newPapers = evaluatePapers({
      activities: next,
      existing: papers,
      summariesCount: summaries.length,
    });
    if (newPapers.length) {
      setPapers([...papers, ...newPapers]);
      newPapers.forEach((p) => {
        window.dispatchEvent(new CustomEvent("tymeline:paper-earned", { detail: { paper: p } }));
      });
    }
    toast.success("Logged");
    setPendingDate(undefined);
  };

  const onDelete = (id: string) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  const onSkipDay = (day: string) => {
    setSkippedDays([...skippedDays, day]);
  };

  const onLogForDay = (day: string) => {
    setPendingDate(new Date(day));
    setOpen(true);
  };

  const openSheet = () => {
    setPendingDate(undefined);
    setOpen(true);
  };

  // Build a map of day -> activities for quick lookup
  const dayMap = useMemo(() => {
    const m = new Map<string, typeof sorted>();
    for (const a of sorted) {
      const k = new Date(a.timestamp).toDateString();
      if (!m.has(k)) m.set(k, []);
      m.get(k)!.push(a);
    }
    return m;
  }, [sorted]);

  const skippedSet = useMemo(() => new Set(skippedDays), [skippedDays]);

  return (
    <div className="px-5 pt-6">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl text-accent leading-none">Tymeline</h1>
          <p className="mt-1 text-xs text-text-secondary">{format(new Date(), "EEEE, MMM d")}</p>
        </div>
        <Link
          to="/settings"
          aria-label="Settings"
          className="rounded-full border bg-surface p-2.5 text-text-secondary transition active:scale-95"
        >
          <SettingsIcon size={18} />
        </Link>
      </header>

      {sorted.length === 0 && allDays.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-6">
          {allDays.map((day) => {
            const dayActivities = dayMap.get(day);
            const isSkipped = skippedSet.has(day);

            // Actual day with activities
            if (dayActivities && dayActivities.length > 0) {
              return (
                <section key={day}>
                  <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    {dayLabel(day)}
                  </h2>
                  <div className="space-y-2.5">
                    {dayActivities.map((a, i, arr) => {
                      const prev = arr[i - 1];
                      const gap = prev
                        ? differenceInMinutes(new Date(prev.timestamp), new Date(a.timestamp))
                        : 0;
                      return (
                        <div key={a.id}>
                          {gap > 30 ? (
                            <div className="my-2 flex items-center gap-2 px-2 text-[10px] uppercase tracking-wider text-text-secondary">
                              <div className="h-px flex-1 bg-border" />
                              <span>~{formatGap(gap)} gap</span>
                              <div className="h-px flex-1 bg-border" />
                            </div>
                          ) : null}
                          <ActivityCard activity={a} index={i} onDelete={onDelete} />
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            }

            // Skipped day
            if (isSkipped) {
              return (
                <section key={day}>
                  <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    {dayLabel(day)}
                  </h2>
                  <p className="px-1 text-xs italic text-text-secondary">— Skipped</p>
                </section>
              );
            }

            // Pending day (no activities, not skipped)
            return (
              <section key={day}>
                <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {dayLabel(day)}
                </h2>
                <div className="rounded-2xl border-2 border-dashed border-border bg-surface/30 p-4 text-center">
                  <p className="text-sm text-text-secondary">
                    No moments logged — add one or skip this day
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <button
                      onClick={() => onLogForDay(day)}
                      className="rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-accent-foreground transition active:scale-95"
                    >
                      + Log now
                    </button>
                    <button
                      onClick={() => onSkipDay(day)}
                      className="rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-text-secondary transition active:scale-95"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      <button
        onClick={openSheet}
        aria-label="Log activity"
        className={`fixed bottom-24 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition active:scale-90 ${todayCount === 0 ? "pulse-ring" : ""}`}
      >
        <Plus size={26} strokeWidth={2.5} />
      </button>

      <AddActivitySheet
        open={open}
        onClose={() => {
          setOpen(false);
          setPendingDate(undefined);
        }}
        onAdd={onAdd}
        defaultDate={pendingDate}
        lastEndTime={sorted[0]?.endTime ?? sorted[0]?.timestamp}
      />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mt-20 flex flex-col items-center text-center px-6 float-soft">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft text-3xl">
        ✎
      </div>
      <h2 className="font-serif text-2xl text-foreground">A blank canvas</h2>
      <p className="mt-2 max-w-xs text-sm text-text-secondary">
        Your day is unwritten. Tap the orange button to capture your first moment.
      </p>
    </div>
  );
}
```

### `src/routes/onboarding.tsx`

```tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSettings } from "@/lib/tymeline/storage";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
});

const SLIDES = [
  {
    title: "Your time, your story",
    body: "Tymeline is a quiet, private timeline of your moments. No streaks. No goals. Just you.",
  },
  {
    title: "No pressure, just capture",
    body: "Log what you did, how long, how you felt. Or skip the details. There's no wrong way.",
  },
  {
    title: "Reflect with AI",
    body: "Generate warm, conversational summaries of your weeks and months. Optional — turn it off in Settings.",
  },
];

function OnboardingPage() {
  const [settings, setSettings] = useSettings();
  const [i, setI] = useState(0);
  const [name, setName] = useState("");
  const [why, setWhy] = useState("");
  const [step, setStep] = useState<"slides" | "profile">("slides");
  const nav = useNavigate();

  // Safety guard: if already onboarded, redirect home
  useEffect(() => {
    if (settings.onboarded === true) {
      nav({ to: "/" });
    }
  }, [settings, nav]);

  const next = () => {
    if (i < SLIDES.length - 1) setI(i + 1);
    else setStep("profile");
  };
  const finish = () => {
    setSettings({ ...settings, name: name || undefined, why: why || undefined, onboarded: true });
    nav({ to: "/" });
  };

  return (
    <div className="flex min-h-screen flex-col px-6 pb-8 pt-16">
      {step === "slides" ? (
        <>
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-accent text-3xl text-accent-foreground">
              ✎
            </div>
            <h1 className="font-serif text-4xl leading-tight text-foreground">{SLIDES[i].title}</h1>
            <p className="mt-4 max-w-xs text-base text-text-secondary">{SLIDES[i].body}</p>
          </div>

          <div className="mb-6 flex justify-center gap-1.5">
            {SLIDES.map((_, idx) => (
              <div
                key={idx}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: idx === i ? 24 : 6,
                  backgroundColor: idx === i ? "var(--accent)" : "var(--border)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground active:scale-[0.98] transition"
          >
            {i < SLIDES.length - 1 ? "Next" : "Get started"}
          </button>
          <button onClick={finish} className="mt-2 py-2 text-sm text-text-secondary">
            Skip
          </button>
        </>
      ) : (
        <>
          <div className="flex-1">
            <h1 className="font-serif text-3xl text-foreground">A little about you</h1>
            <p className="mt-2 text-sm text-text-secondary">
              Both optional. You can change these later.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <label className="text-xs font-medium text-text-secondary">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border bg-surface px-4 py-3 outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-text-secondary">Why you track</label>
                <textarea
                  value={why}
                  onChange={(e) => setWhy(e.target.value)}
                  rows={3}
                  placeholder="To understand my days better…"
                  className="mt-1 w-full resize-none rounded-xl border bg-surface px-4 py-3 outline-none focus:border-accent"
                />
              </div>
            </div>
          </div>
          <button
            onClick={finish}
            className="rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground active:scale-[0.98] transition"
          >
            Begin
          </button>
        </>
      )}
    </div>
  );
}
```

### `src/routes/settings.tsx`

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  useSettings,
  useActivities,
  usePapers,
  useSummaries,
  exportAll,
  importAll,
  clearAll,
} from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import { ChevronLeft, Download, Upload, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Tymeline" },
      { name: "description", content: "Configure Tymeline." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const [settings, setSettings] = useSettings();
  const [activities] = useActivities();
  const [papers, setPapers] = usePapers();
  const [summaries] = useSummaries();
  const fileRef = useRef<HTMLInputElement>(null);

  const update = <K extends keyof typeof settings>(k: K, v: (typeof settings)[K]) =>
    setSettings({ ...settings, [k]: v });

  const onExport = () => {
    const data = exportAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tymeline-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    const newPapers = evaluatePapers({
      activities,
      existing: papers,
      summariesCount: summaries.length,
      didExport: true,
    });
    if (newPapers.length) setPapers([...papers, ...newPapers]);
    toast.success("Backup exported");
  };

  const onImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      importAll(data);
      const newPapers = evaluatePapers({
        activities: data.activities ?? [],
        existing: data.papers ?? [],
        summariesCount: (data.summaries ?? []).length,
        didImport: true,
      });
      if (newPapers.length) {
        importAll({ papers: [...(data.papers ?? []), ...newPapers] });
      }
      toast.success("Data imported");
    } catch {
      toast.error("Invalid backup file");
    }
  };

  const onClear = () => {
    if (confirm("Erase ALL Tymeline data? This cannot be undone.")) {
      clearAll();
      toast.success("All data cleared");
    }
  };

  return (
    <div className="px-5 pt-6">
      <header className="mb-6 flex items-center gap-3">
        <Link to="/" className="rounded-full border bg-surface p-2">
          <ChevronLeft size={18} />
        </Link>
        <h1 className="font-serif text-3xl">Settings</h1>
      </header>

      <Section title="Profile">
        <Field label="Name">
          <input
            value={settings.name ?? ""}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Optional"
            className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
        </Field>
        <Field label="Why I track">
          <textarea
            value={settings.why ?? ""}
            onChange={(e) => update("why", e.target.value)}
            placeholder="A line for yourself…"
            rows={2}
            className="w-full resize-none rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
        </Field>
      </Section>

      <Section title="AI Reflection">
        <ToggleRow
          label="Enable AI summaries"
          help="Uses Lovable AI to write reflective summaries. Off uses a local stats summary."
          value={settings.aiEnabled}
          onChange={(v) => update("aiEnabled", v)}
        />
      </Section>

      <Section title="Theme">
        <div className="grid grid-cols-3 gap-2">
          {(["system", "light", "dark"] as const).map((t) => {
            const active = settings.theme === t;
            return (
              <button
                key={t}
                onClick={() => update("theme", t)}
                className="rounded-xl border bg-surface py-2.5 text-sm capitalize transition"
                style={{
                  borderColor: active ? "var(--accent)" : "var(--border)",
                  color: active ? "var(--accent)" : "var(--foreground)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Data">
        <button
          onClick={onExport}
          className="flex w-full items-center justify-between rounded-xl border bg-surface px-4 py-3 text-sm"
        >
          <span className="flex items-center gap-3">
            <Download size={16} /> Export backup
          </span>
          <span className="text-xs text-text-secondary">{activities.length} items</span>
        </button>
        <button
          onClick={() => fileRef.current?.click()}
          className="mt-2 flex w-full items-center gap-3 rounded-xl border bg-surface px-4 py-3 text-sm"
        >
          <Upload size={16} /> Import backup
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          onChange={onImport}
          className="hidden"
        />
        <button
          onClick={onClear}
          className="mt-2 flex w-full items-center gap-3 rounded-xl border border-destructive/30 bg-surface px-4 py-3 text-sm text-destructive"
        >
          <Trash2 size={16} /> Clear all data
        </button>
      </Section>

      <Section title="About">
        <p className="text-sm text-text-secondary">Tymeline v0.1</p>
        <p className="mt-1 text-sm text-text-secondary">
          Built with care. No accounts. No cloud. Just you.
        </p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-medium text-text-secondary">{label}</div>
      {children}
    </label>
  );
}

function ToggleRow({
  label,
  help,
  value,
  onChange,
}: {
  label: string;
  help?: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border bg-surface px-4 py-3">
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium">{label}</div>
        {help && <div className="mt-0.5 text-xs text-text-secondary">{help}</div>}
      </div>
      <button
        onClick={() => onChange(!value)}
        role="switch"
        aria-checked={value}
        className="relative h-6 w-11 shrink-0 rounded-full transition"
        style={{ backgroundColor: value ? "var(--accent)" : "var(--border)" }}
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform"
          style={{ transform: value ? "translateX(22px)" : "translateX(2px)" }}
        />
      </button>
    </div>
  );
}
```

### `src/routes/summary.tsx`

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useRef } from "react";
import { useActivities, useSettings, useSummaries, usePapers } from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import { generateAISummary } from "@/lib/tymeline/ai.functions";
import { useServerFn } from "@tanstack/react-start";
import { MOOD_SCORE } from "@/lib/tymeline/categories";
import { startOfWeek, startOfMonth, format } from "date-fns";
import { Copy, Sparkles, Loader2, Download } from "lucide-react";
import { toast } from "sonner";
import type { SummaryContent, ActivityCategory } from "@/lib/tymeline/types";

export const Route = createFileRoute("/summary")({
  head: () => ({
    meta: [
      { title: "Reflect — Tymeline" },
      { name: "description", content: "Reflect on how you spent your time." },
    ],
  }),
  component: SummaryPage,
});

type Period = "week" | "month" | "all";

function filterByPeriod(activities: ReturnType<typeof useActivities>[0], period: Period) {
  if (period === "all") return activities;
  const from =
    period === "week" ? startOfWeek(new Date(), { weekStartsOn: 1 }) : startOfMonth(new Date());
  return activities.filter((a) => new Date(a.timestamp) >= from);
}

function buildLocalSummary(
  activities: ReturnType<typeof useActivities>[0],
  period: Period,
): string {
  if (activities.length === 0) {
    return "No activities logged for this period yet. Every journey begins with a single step — start capturing your moments to see meaningful patterns emerge over time.";
  }
  const totalMin = activities.reduce((s, a) => s + (a.duration ?? 30), 0);
  const totalHours = Math.round(totalMin / 60);
  const byCat = new Map<string, number>();
  for (const a of activities)
    byCat.set(a.category, (byCat.get(a.category) ?? 0) + (a.duration ?? 30));
  const sortedCats = Array.from(byCat.entries()).sort((a, b) => b[1] - a[1]);
  const topCat = sortedCats[0];
  const moods = activities.filter((a) => a.mood).map((a) => MOOD_SCORE[a.mood!] ?? 3);
  const avgMood = moods.length
    ? (moods.reduce((s, n) => s + n, 0) / moods.length).toFixed(1)
    : null;
  const freq = new Map<string, number>();
  for (const a of activities) freq.set(a.name, (freq.get(a.name) ?? 0) + 1);
  const mostFreq = Array.from(freq.entries()).sort((a, b) => b[1] - a[1])[0];
  const byDay = new Map<string, number>();
  for (const a of activities) {
    const d = new Date(a.timestamp).toDateString();
    byDay.set(d, (byDay.get(d) ?? 0) + 1);
  }
  const longestDay = Array.from(byDay.entries()).sort((a, b) => b[1] - a[1])[0];
  const totalDays = byDay.size;

  const periodLabel =
    period === "week" ? "this week" : period === "month" ? "this month" : "across all time";
  const dayRange = totalDays > 1 ? `over ${totalDays} different days` : "on a single day";

  const paras: string[] = [];

  // Opening paragraph
  paras.push(
    `Looking back ${periodLabel}, I see a story taking shape. You recorded ${activities.length} moment${activities.length > 1 ? "s" : ""} ${dayRange}, giving approximately ${totalHours} hour${totalHours > 1 ? "s" : ""} of your time a name and a place in memory. Each entry is a thread in the larger fabric of your days.`,
  );

  // Category breakdown
  if (sortedCats.length > 0) {
    const catLines = sortedCats.slice(0, 4).map(([cat, min], i) => {
      const pct = Math.round((min / totalMin) * 100);
      return `${cat} claimed ${pct}% of your logged time`;
    });
    const catStr = catLines.join(", ");
    const lastComma = catStr.lastIndexOf(", ");
    const formatted =
      lastComma > 0 ? catStr.slice(0, lastComma) + ", and " + catStr.slice(lastComma + 2) : catStr;
    paras.push(
      `Your time distributed across ${sortedCats.length} categor${sortedCats.length > 1 ? "ies" : "y"} — ${formatted}. ${topCat ? `${topCat[0]} was your dominant theme, accounting for the single largest share of your focus.` : ""}`,
    );
  }

  // Most frequent activity
  if (mostFreq && mostFreq[1] > 1) {
    paras.push(
      `A familiar rhythm emerges: "${mostFreq[0]}" appears ${mostFreq[1]} time${mostFreq[1] > 1 ? "s" : ""}, more than any other activity. This repetition suggests a steady habit or a recurring commitment woven into your routine.`,
    );
  }

  // Longest day
  if (longestDay && longestDay[1] > 1) {
    paras.push(
      `Your most eventful day held ${longestDay[1]} logged moment${longestDay[1] > 1 ? "s" : ""} — a rich and full span of hours. Days like these are worth noticing; they show what a full, engaged day looks like for you.`,
    );
  }

  // Mood reflection
  if (avgMood) {
    const moodDesc =
      Number(avgMood) >= 4
        ? "mostly bright and positive"
        : Number(avgMood) >= 3
          ? "balanced with steady moments"
          : "carrying some weight";
    const moodAdvice =
      Number(avgMood) >= 4
        ? "These positive states are worth protecting — notice what feeds them."
        : Number(avgMood) >= 3
          ? "The balanced stretches are where growth quietly happens."
          : "Even the heavier days are data, not verdicts — they reveal what matters enough to affect you.";
    paras.push(
      `On the emotional side, your average mood settled at ${avgMood} out of 5 — ${moodDesc}. ${moodAdvice}`,
    );
  } else {
    paras.push(
      `No mood data was recorded for this period. Adding a quick emotion marker to each entry paints a richer picture over time and reveals how different activities shape your state of mind.`,
    );
  }

  // Closing reflection
  paras.push(
    `Every moment you capture is an act of attention — a small pause to register that this mattered enough to remember. The patterns here are still emerging, and with each new entry the story becomes clearer. Keep going.`,
  );

  return paras.join(" ");
}

function SummaryPage() {
  const [activities] = useActivities();
  const [settings] = useSettings();
  const [summaries, setSummaries] = useSummaries();
  const [papers, setPapers] = usePapers();
  const [period, setPeriod] = useState<Period>("week");
  const [loading, setLoading] = useState(false);
  const aiFn = useServerFn(generateAISummary);
  const printRef = useRef<HTMLDivElement>(null);

  const scoped = useMemo(() => filterByPeriod(activities, period), [activities, period]);

  const generate = async () => {
    setLoading(true);
    try {
      let content: string;
      let isAI = false;
      if (settings.aiEnabled) {
        const res = await aiFn({
          data: {
            period,
            activities: scoped.map((a) => ({
              name: a.name,
              category: a.category,
              duration: a.duration,
              mood: a.mood,
              timestamp: a.timestamp,
            })),
          },
        });
        content = res.content;
        isAI = true;
      } else {
        content = buildLocalSummary(scoped, period);
      }
      const newSummary = {
        id: crypto.randomUUID(),
        period,
        generatedAt: new Date().toISOString(),
        content,
        isAI,
      };
      const next = [newSummary, ...summaries];
      setSummaries(next);
      const newPapers = evaluatePapers({
        activities,
        existing: papers,
        summariesCount: next.length,
      });
      if (newPapers.length) {
        setPapers([...papers, ...newPapers]);
        newPapers.forEach((p) => {
          window.dispatchEvent(new CustomEvent("tymeline:paper-earned", { detail: { paper: p } }));
        });
      }
    } catch (e) {
      toast.error((e as Error).message ?? "Couldn't generate summary");
    } finally {
      setLoading(false);
    }
  };

  const periodSummaries = summaries.filter((s) => s.period === period);
  const latest = periodSummaries[0];

  return (
    <div className="px-5 pt-6">
      <header className="mb-5">
        <h1 className="font-serif text-3xl text-foreground">Reflect</h1>
        <p className="mt-1 text-sm text-text-secondary">A quiet look back</p>
      </header>

      <div className="mb-5 grid grid-cols-3 gap-2">
        {(["week", "month", "all"] as Period[]).map((p) => {
          const active = period === p;
          return (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className="rounded-2xl border bg-surface p-3 text-center transition"
              style={{
                borderColor: active ? "var(--accent)" : "var(--border)",
                boxShadow: active ? "0 0 0 1px var(--accent) inset" : "none",
              }}
            >
              <div className="font-serif text-base capitalize text-foreground">{p}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-wider text-text-secondary">
                {p === "all" ? "All time" : `This ${p}`}
              </div>
            </button>
          );
        })}
      </div>

      {latest ? (
        <div ref={printRef} className="print-summary">
          <PaperCard summary={latest} />
          <button
            onClick={() => window.print()}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border bg-surface py-3 text-sm font-medium text-foreground transition active:scale-[0.98]"
          >
            <Download size={16} />
            Export as PDF
          </button>
          <p className="mt-1.5 text-center text-[10px] text-text-secondary">
            Opens your browser's print dialog — save as PDF.
          </p>
        </div>
      ) : loading ? (
        <ShimmerCard />
      ) : (
        <div className="rounded-2xl border-2 border-dashed bg-surface/40 p-8 text-center">
          <Sparkles className="mx-auto mb-2 text-accent" size={24} />
          <p className="font-serif text-lg text-foreground">Nothing to reflect on yet</p>
          <p className="mt-1 text-sm text-text-secondary">
            Tap below to {settings.aiEnabled ? "ask AI for" : "compose"} a thoughtful summary.
          </p>
        </div>
      )}

      <button
        onClick={generate}
        disabled={loading || scoped.length === 0}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground transition active:scale-[0.98] disabled:opacity-40"
      >
        {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
        {loading ? "Reflecting…" : latest ? "Regenerate" : "Generate Summary"}
      </button>

      {periodSummaries.length > 1 && (
        <div className="mt-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Past reflections
          </h3>
          <div className="space-y-3">
            {periodSummaries.slice(1).map((s) => (
              <PaperCard key={s.id} summary={s} compact />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function EssayView({ content }: { content: SummaryContent }) {
  const sections: { key: keyof SummaryContent; label: string; color: string; bold?: boolean }[] = [
    { key: "what_you_did", label: "What you did", color: "var(--foreground)" },
    { key: "positives", label: "Positives", color: "#43A047" },
    { key: "negatives", label: "What drained you", color: "#FB8C00" },
    { key: "improvements_must", label: "Must improve", color: "#C0392B" },
    { key: "improvements_nice", label: "Nice to improve", color: "var(--text-secondary)" },
  ];
  return (
    <div className="space-y-4">
      {sections.map(({ key, label, color, bold }) => {
        const text = content[key];
        if (!text || text.trim().length === 0) return null;
        return (
          <div key={key}>
            <h4
              className="mb-1 text-[10px] font-semibold uppercase tracking-wider"
              style={{ color }}
            >
              {label}
            </h4>
            <p
              className="font-serif leading-relaxed text-foreground"
              style={{ fontWeight: bold ? 600 : 400 }}
            >
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function PaperCard({
  summary,
  compact,
}: {
  summary: {
    id: string;
    content: string | SummaryContent;
    generatedAt: string;
    isAI: boolean;
    period: string;
  };
  compact?: boolean;
}) {
  const copy = () => {
    const text =
      typeof summary.content === "string"
        ? summary.content
        : Object.values(summary.content as SummaryContent)
            .filter(Boolean)
            .join("\n\n");
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  return (
    <article
      className="paper-texture rounded-2xl border bg-surface p-5 shadow-sm"
      style={{ boxShadow: "0 1px 0 var(--border), 0 8px 24px -16px rgba(0,0,0,0.15)" }}
    >
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-text-secondary">
        <span>
          {summary.isAI ? "AI · " : ""}
          {summary.period} · {format(new Date(summary.generatedAt), "MMM d, h:mm a")}
        </span>
        <button
          onClick={copy}
          aria-label="Copy"
          className="rounded-full p-1.5 hover:bg-accent-soft hover:text-accent"
        >
          <Copy size={13} />
        </button>
      </div>

      {typeof summary.content === "string" ? (
        <p
          className={`font-serif text-foreground leading-relaxed ${compact ? "text-base" : "text-lg"}`}
        >
          {summary.content}
        </p>
      ) : (
        <div className={compact ? "text-base" : "text-lg"}>
          <EssayView content={summary.content as SummaryContent} />
        </div>
      )}
    </article>
  );
}

function ShimmerCard() {
  return (
    <div className="space-y-2 rounded-2xl border bg-surface p-5">
      {[100, 95, 92, 88, 70].map((w, i) => (
        <div key={i} className="h-3 animate-pulse rounded bg-border" style={{ width: `${w}%` }} />
      ))}
    </div>
  );
}
```
```

### `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "css": "src/styles.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
```

### `eslint.config.js`

```js
import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", ".output", ".vinxi"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message:
                "TanStack Start does not use the Next.js `server-only` package. Rename the module to `*.server.ts` or mark it with `@tanstack/react-start/server-only`.",
            },
          ],
        },
      ],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  eslintPluginPrettier,
);
```

### `package.json`

```json
{
  "name": "tanstack_start_ts",
  "private": true,
  "sideEffects": false,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write .",
    "build:android": "vite build && npx cap sync android",
    "open:android": "npx cap open android"
  },
  "dependencies": {
    "@capacitor/android": "^8.3.4",
    "@capacitor/cli": "^8.3.4",
    "@capacitor/core": "^8.3.4",
    "@capacitor/local-notifications": "^8.2.0",
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tailwindcss/vite": "^4.2.1",
    "@tanstack/react-query": "^5.83.0",
    "@tanstack/react-router": "^1.168.25",
    "@tanstack/react-start": "^1.167.50",
    "@tanstack/router-plugin": "^1.167.28",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.575.0",
    "react": "^19.2.0",
    "react-day-picker": "^9.14.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.71.2",
    "react-resizable-panels": "^4.6.5",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tailwindcss": "^4.2.1",
    "tw-animate-css": "^1.3.4",
    "vaul": "^1.1.2",
    "vite-tsconfig-paths": "^6.0.2",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@lovable.dev/vite-tanstack-config": "^2.1.1",
    "@types/node": "^22.16.5",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.32.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "nitro": "3.0.260429-beta",
    "prettier": "^3.7.3",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.56.1",
    "vite": "^7.3.1"
  }
}
```

### `tsconfig.json`

```json
{
  "include": ["src/**/*.ts", "src/**/*.tsx", "vite.config.ts", "eslint.config.js"],
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],

    /* Bundler mode */
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": false,
    "noEmit": true,

    /* Linting */
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### `vite.config.ts`

```ts
// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
```

### `android/.gitignore`

```
# Using Android gitignore template: https://github.com/github/gitignore/blob/HEAD/Android.gitignore

# Built application files
*.apk
*.aar
*.ap_
*.aab

# Files for the ART/Dalvik VM
*.dex

# Java class files
*.class

# Generated files
bin/
gen/
out/
#  Uncomment the following line in case you need and you don't have the release build type files in your app
# release/

# Gradle files
.gradle/
build/

# Local configuration file (sdk path, etc)
local.properties

# Proguard folder generated by Eclipse
proguard/

# Log Files
*.log

# Android Studio Navigation editor temp files
.navigation/

# Android Studio captures folder
captures/

# IntelliJ
*.iml
.idea/workspace.xml
.idea/tasks.xml
.idea/gradle.xml
.idea/assetWizardSettings.xml
.idea/dictionaries
.idea/libraries
# Android Studio 3 in .gitignore file.
.idea/caches
.idea/modules.xml
# Comment next line if keeping position of elements in Navigation Editor is relevant for you
.idea/navEditor.xml

# Keystore files
# Uncomment the following lines if you do not want to check your keystore files in.
#*.jks
#*.keystore

# External native build folder generated in Android Studio 2.2 and later
.externalNativeBuild
.cxx/

# Google Services (e.g. APIs or Firebase)
# google-services.json

# Freeline
freeline.py
freeline/
freeline_project_description.json

# fastlane
fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots
fastlane/test_output
fastlane/readme.md

# Version control
vcs.xml

# lint
lint/intermediates/
lint/generated/
lint/outputs/
lint/tmp/
# lint/reports/

# Android Profiling
*.hprof

# Cordova plugins for Capacitor
capacitor-cordova-android-plugins

# Copied web assets
app/src/main/assets/public

# Generated Config files
app/src/main/assets/capacitor.config.json
app/src/main/assets/capacitor.plugins.json
app/src/main/res/xml/config.xml
```

### `android/app/.gitignore`

```
/build/*
!/build/.npmkeep
```

### `src/routeTree.gen.ts`

```ts
/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as SummaryRouteImport } from './routes/summary'
import { Route as SettingsRouteImport } from './routes/settings'
import { Route as OnboardingRouteImport } from './routes/onboarding'
import { Route as CollectionRouteImport } from './routes/collection'
import { Route as AnalyticsRouteImport } from './routes/analytics'
import { Route as IndexRouteImport } from './routes/index'

const SummaryRoute = SummaryRouteImport.update({
  id: '/summary',
  path: '/summary',
  getParentRoute: () => rootRouteImport,
} as any)
const SettingsRoute = SettingsRouteImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRouteImport,
} as any)
const OnboardingRoute = OnboardingRouteImport.update({
  id: '/onboarding',
  path: '/onboarding',
  getParentRoute: () => rootRouteImport,
} as any)
const CollectionRoute = CollectionRouteImport.update({
  id: '/collection',
  path: '/collection',
  getParentRoute: () => rootRouteImport,
} as any)
const AnalyticsRoute = AnalyticsRouteImport.update({
  id: '/analytics',
  path: '/analytics',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/analytics': typeof AnalyticsRoute
  '/collection': typeof CollectionRoute
  '/onboarding': typeof OnboardingRoute
  '/settings': typeof SettingsRoute
  '/summary': typeof SummaryRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/analytics': typeof AnalyticsRoute
  '/collection': typeof CollectionRoute
  '/onboarding': typeof OnboardingRoute
  '/settings': typeof SettingsRoute
  '/summary': typeof SummaryRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/analytics': typeof AnalyticsRoute
  '/collection': typeof CollectionRoute
  '/onboarding': typeof OnboardingRoute
  '/settings': typeof SettingsRoute
  '/summary': typeof SummaryRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/analytics'
    | '/collection'
    | '/onboarding'
    | '/settings'
    | '/summary'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/analytics'
    | '/collection'
    | '/onboarding'
    | '/settings'
    | '/summary'
  id:
    | '__root__'
    | '/'
    | '/analytics'
    | '/collection'
    | '/onboarding'
    | '/settings'
    | '/summary'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AnalyticsRoute: typeof AnalyticsRoute
  CollectionRoute: typeof CollectionRoute
  OnboardingRoute: typeof OnboardingRoute
  SettingsRoute: typeof SettingsRoute
  SummaryRoute: typeof SummaryRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/summary': {
      id: '/summary'
      path: '/summary'
      fullPath: '/summary'
      preLoaderRoute: typeof SummaryRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/onboarding': {
      id: '/onboarding'
      path: '/onboarding'
      fullPath: '/onboarding'
      preLoaderRoute: typeof OnboardingRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/collection': {
      id: '/collection'
      path: '/collection'
      fullPath: '/collection'
      preLoaderRoute: typeof CollectionRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/analytics': {
      id: '/analytics'
      path: '/analytics'
      fullPath: '/analytics'
      preLoaderRoute: typeof AnalyticsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AnalyticsRoute: AnalyticsRoute,
  CollectionRoute: CollectionRoute,
  OnboardingRoute: OnboardingRoute,
  SettingsRoute: SettingsRoute,
  SummaryRoute: SummaryRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
```

### `src/router.tsx`

```tsx
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
```

### `src/server.ts`

```ts
import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
```

### `src/start.ts`

```ts
import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
```

### `src/styles.css`

```css
@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-card: var(--surface);
  --color-card-foreground: var(--foreground);
  --color-popover: var(--surface);
  --color-popover-foreground: var(--foreground);
  --color-primary: var(--accent);
  --color-primary-foreground: var(--accent-foreground);
  --color-secondary: var(--accent-soft);
  --color-secondary-foreground: var(--foreground);
  --color-muted: var(--accent-soft);
  --color-muted-foreground: var(--text-secondary);
  --color-accent: var(--accent);
  --color-accent-soft: var(--accent-soft);
  --color-accent-foreground: var(--accent-foreground);
  --color-text-secondary: var(--text-secondary);
  --color-destructive: oklch(0.55 0.22 27);
  --color-destructive-foreground: oklch(0.98 0 0);
  --color-border: var(--border);
  --color-input: var(--border);
  --color-ring: var(--accent);

  --color-cat-study: #4A90D9;
  --color-cat-code: #7C4DFF;
  --color-cat-exercise: #43A047;
  --color-cat-read: #FB8C00;
  --color-cat-meeting: #00ACC1;
  --color-cat-entertainment: #E91E63;
  --color-cat-travel: #009688;
  --color-cat-food: #8D6E63;
  --color-cat-sleep: #5C6BC0;
  --color-cat-custom: #78909C;
  --color-cat-health: #26A69A;
  --color-cat-social: #AB47BC;
  --color-cat-finance: #FFA726;
  --color-cat-creative: #EC407A;
  --color-cat-chores: #8D8D8D;

  --font-serif: "DM Serif Display", ui-serif, Georgia, serif;
  --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
}

:root {
  --radius: 0.875rem;
  --background: #FAF7F2;
  --surface: #FFFFFF;
  --border: #E8E0D5;
  --foreground: #1A1612;
  --text-secondary: #6B5E52;
  --accent: #D4622A;
  --accent-soft: #F5E6DC;
  --accent-foreground: #FFFFFF;
}

.dark {
  --background: #141210;
  --surface: #1E1B18;
  --border: #2C2823;
  --foreground: #F0EBE3;
  --text-secondary: #9C8E82;
  --accent: #E8763A;
  --accent-soft: #2A1E17;
  --accent-foreground: #141210;
}

@layer base {
  * {
    border-color: var(--color-border);
  }
  html, body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, .font-serif {
    font-family: var(--font-serif);
    letter-spacing: -0.01em;
  }
}

/* Paper texture utility */
.paper-texture {
  background-image:
    radial-gradient(circle at 20% 30%, color-mix(in oklab, var(--accent) 4%, transparent) 0, transparent 50%),
    radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--accent) 3%, transparent) 0, transparent 50%);
}

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.6); opacity: 0; }
}
.pulse-ring::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: var(--accent);
  animation: pulse-ring 1.8s ease-out infinite;
  z-index: -1;
}

@keyframes float-soft {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
.float-soft { animation: float-soft 4s ease-in-out infinite; }

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media print {
  body > *:not(.print-summary) { display: none !important; }
  .print-summary { display: block !important; }
  .print-summary article {
    border: none !important;
    box-shadow: none !important;
    padding: 2rem !important;
    max-width: 210mm;
    margin: 0 auto;
  }
}
```

### `src/hooks/use-mobile.tsx`

```tsx
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

### `src/lib/config.server.ts`

```ts
import process from "node:process";

// Server-only config. The .server.ts suffix prevents Vite from bundling
// this file into the client — values here never reach the browser.
//
// On Cloudflare Workers, env binds at REQUEST time. Module-scope reads
// (e.g. `const x = process.env.X`) resolve to undefined — always read
// process.env INSIDE a function or handler.
//
// When to use which env-access pattern:
//   - .server.ts module (this file): server-only helpers reused across
//     handlers. Wrap reads in a function so they run per-request.
//   - inline process.env inside a createServerFn handler: one-off reads
//     not reused elsewhere.
//   - import.meta.env.VITE_FOO: PUBLIC config readable from both client
//     and server (analytics IDs, public URLs). Define in .env with the
//     VITE_ prefix. Never put secrets here — they ship to the browser.

export function getServerConfig() {
  return {
    nodeEnv: process.env.NODE_ENV,
    // Add server-only values here, e.g.:
    //   databaseUrl: process.env.DATABASE_URL,
    //   stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  };
}
```

### `src/lib/error-capture.ts`

```ts
// Captures the original Error out-of-band so server.ts can recover the stack
// when h3 has already swallowed the throw into a generic 500 Response.

let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 5_000;

function record(error: unknown) {
  lastCapturedError = { error, at: Date.now() };
}

if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record((event as ErrorEvent).error ?? event));
  globalThis.addEventListener("unhandledrejection", (event) =>
    record((event as PromiseRejectionEvent).reason),
  );
}

export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError) return undefined;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = undefined;
    return undefined;
  }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}
```

### `src/lib/error-page.ts`

```ts
export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
```

### `src/lib/lovable-error-reporting.ts`

```ts
type LovableErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type LovableEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: LovableErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __lovableEvents?: LovableEvents;
  }
}

export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
```

### `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### `src/lib/tymeline/ai.functions.ts`

```ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  period: z.enum(["week", "month", "all"]),
  activities: z
    .array(
      z.object({
        name: z.string(),
        category: z.string(),
        duration: z.number().optional(),
        mood: z.string().optional(),
        timestamp: z.string(),
      }),
    )
    .max(500),
});

export const generateAISummary = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("AI not configured");

    const prompt = `You are a warm, reflective life coach. Here is a person's activity log for the ${data.period === "all" ? "entire period" : "past " + data.period}: ${JSON.stringify(data.activities)}.

Write a thoughtful, flowing essay (3-5 paragraphs) reflecting on how they spent their time. Write in second person ("You spent..."). Be specific to the actual activities provided. Cover what they did, any patterns or habits that emerge, how their mood trends look, and gentle encouragement. Do NOT use markdown or section headers — just plain paragraphs separated by newlines. Return ONLY the essay text, no JSON.`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content:
              "You are a warm, reflective life coach who writes in flowing prose. Write plain paragraphs only, no markdown or formatting.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (res.status === 429) throw new Error("Rate limit reached. Please try again in a moment.");
    if (res.status === 402)
      throw new Error("AI credits exhausted. Add credits in workspace settings.");
    if (!res.ok) throw new Error("AI request failed");

    const json = (await res.json()) as { choices?: Array<{ message?: { content?: string } }> };
    const raw = json.choices?.[0]?.message?.content ?? "";

    return { content: raw };
  });
```

### `src/lib/tymeline/categories.ts`

```ts
import type { ActivityCategory } from "./types";

export const CATEGORIES: ActivityCategory[] = [
  "Study",
  "Code",
  "Exercise",
  "Read",
  "Meeting",
  "Entertainment",
  "Travel",
  "Food",
  "Sleep",
  "Health",
  "Social",
  "Finance",
  "Creative",
  "Chores",
  "Custom",
];

export const CATEGORY_COLORS: Record<ActivityCategory, string> = {
  Study: "#4A90D9",
  Code: "#7C4DFF",
  Exercise: "#43A047",
  Read: "#FB8C00",
  Meeting: "#00ACC1",
  Entertainment: "#E91E63",
  Travel: "#009688",
  Food: "#8D6E63",
  Sleep: "#5C6BC0",
  Health: "#26A69A",
  Social: "#AB47BC",
  Finance: "#FFA726",
  Creative: "#EC407A",
  Chores: "#8D8D8D",
  Custom: "#78909C",
};

export const MOODS = ["😊", "🙂", "🎯", "📖", "💻", "😴", "😢", "😭", "😡"];
export const MOOD_SCORE: Record<string, number> = {
  "😡": 1,
  "😭": 1,
  "😢": 2,
  "😴": 2,
  "📖": 3,
  "💻": 3,
  "🎯": 4,
  "🙂": 4,
  "😊": 5,
};

const CATEGORY_KEYWORDS: Record<ActivityCategory, string[]> = {
  Study: [
    "study",
    "lecture",
    "class",
    "homework",
    "assignment",
    "exam",
    "quiz",
    "course",
    "lesson",
    "tutor",
    "revision",
    "notes",
    "chapter",
    "textbook",
    "tutorial",
    "seminar",
    "workshop",
  ],
  Code: [
    "code",
    "coding",
    "programming",
    "debug",
    "deploy",
    "build",
    "commit",
    "pr",
    "pull request",
    "refactor",
    "dev",
    "develop",
    "api",
    "bug",
    "fix",
    "feature",
    "script",
    "terminal",
    "git",
    "github",
    "merge",
    "hackathon",
    "algorithm",
  ],
  Exercise: [
    "gym",
    "workout",
    "run",
    "running",
    "walk",
    "walking",
    "yoga",
    "swim",
    "swimming",
    "cycle",
    "cycling",
    "sport",
    "exercise",
    "jog",
    "jogging",
    "lift",
    "stretch",
    "cardio",
    "hiit",
    "football",
    "cricket",
    "badminton",
    "tennis",
    "push",
    "pull",
  ],
  Read: [
    "read",
    "reading",
    "book",
    "article",
    "blog",
    "newsletter",
    "manga",
    "novel",
    "paper",
    "journal",
    "ebook",
    "magazine",
    "comic",
    "fiction",
    "documentation",
  ],
  Meeting: [
    "meeting",
    "standup",
    "call",
    "sync",
    "interview",
    "catch up",
    "discussion",
    "conference",
    "zoom",
    "meet",
    "1:1",
    "one-on-one",
  ],
  Entertainment: [
    "watch",
    "movie",
    "film",
    "series",
    "show",
    "netflix",
    "youtube",
    "gaming",
    "game",
    "play",
    "music",
    "concert",
    "browse",
    "scroll",
    "instagram",
    "twitter",
    "tiktok",
    "reel",
    "podcast",
    "anime",
    "stream",
    "audiobook",
    "puzzle",
  ],
  Travel: [
    "travel",
    "commute",
    "drive",
    "driving",
    "bus",
    "train",
    "flight",
    "trip",
    "journey",
    "uber",
    "auto",
    "metro",
  ],
  Food: [
    "eat",
    "eating",
    "lunch",
    "dinner",
    "breakfast",
    "snack",
    "cook",
    "cooking",
    "meal",
    "food",
    "cafe",
    "coffee",
    "restaurant",
    "bake",
    "baking",
    "tea",
    "beer",
    "wine",
    "brunch",
    "takeout",
    "delivery",
  ],
  Sleep: ["sleep", "nap", "rest", "bed", "wake", "morning routine"],
  Health: [
    "doctor",
    "hospital",
    "clinic",
    "medicine",
    "therapy",
    "physio",
    "dentist",
    "checkup",
    "prescription",
    "mental health",
    "massage",
    "sauna",
    "optician",
    "blood",
    "vaccine",
  ],
  Social: [
    "friend",
    "friends",
    "family",
    "party",
    "hangout",
    "outing",
    "dinner with",
    "lunch with",
    "coffee with",
    "date",
    "wedding",
    "event",
    "bbq",
    "reunion",
    "potluck",
  ],
  Finance: [
    "budget",
    "expense",
    "invoice",
    "pay",
    "payment",
    "bank",
    "tax",
    "investment",
    "stock",
    "crypto",
    "money",
    "salary",
    "bills",
    "insurance",
    "subscription",
    "portfolio",
  ],
  Creative: [
    "draw",
    "drawing",
    "sketch",
    "paint",
    "painting",
    "design",
    "write",
    "writing",
    "poem",
    "journal",
    "craft",
    "photo",
    "photography",
    "edit",
    "video",
    "music",
    "animation",
    "diy",
    "sew",
    "knit",
    "garden",
    "pottery",
  ],
  Chores: [
    "clean",
    "cleaning",
    "laundry",
    "wash",
    "dishes",
    "grocery",
    "groceries",
    "shop",
    "shopping",
    "vacuum",
    "organise",
    "organize",
    "tidy",
    "repair",
    "maintenance",
    "declutter",
    "recycling",
    "meal prep",
  ],
  Custom: [],
};

const EMOJI_MAP: [string[], string][] = [
  [["gym", "workout", "lift", "weights"], "🏋️"],
  [["run", "running", "jog", "jogging"], "🏃"],
  [["walk", "walking"], "🚶"],
  [["yoga", "stretch", "meditat"], "🧘"],
  [["swim", "swimming", "pool"], "🏊"],
  [["cycle", "cycling", "bike", "bicycle"], "🚴"],
  [["football", "soccer"], "⚽"],
  [["cricket"], "🏏"],
  [["badminton"], "🏸"],
  [["tennis"], "🎾"],
  [["basketball"], "🏀"],
  [
    [
      "code",
      "coding",
      "programming",
      "debug",
      "dev",
      "develop",
      "script",
      "git",
      "commit",
      "deploy",
      "build",
    ],
    "💻",
  ],
  [["bug", "fix", "refactor"], "🐛"],
  [["api", "backend", "server"], "⚙️"],
  [["study", "revision", "notes", "chapter"], "📚"],
  [["lecture", "class", "lesson"], "🎓"],
  [["homework", "assignment"], "📝"],
  [["exam", "quiz", "test"], "📋"],
  [["read", "reading", "book", "novel", "ebook"], "📖"],
  [["article", "blog", "newsletter"], "📰"],
  [["manga"], "🗒️"],
  [["meeting", "standup", "sync", "1:1"], "🤝"],
  [["call", "zoom", "meet"], "📞"],
  [["interview"], "💼"],
  [["movie", "film"], "🎬"],
  [["series", "show", "netflix"], "📺"],
  [["youtube"], "▶️"],
  [["gaming", "game", "play"], "🎮"],
  [["music", "concert", "listen"], "🎵"],
  [["instagram", "tiktok", "scroll", "browse"], "📱"],
  [["travel", "trip", "journey"], "✈️"],
  [["commute", "drive", "driving"], "🚗"],
  [["bus"], "🚌"],
  [["train", "metro"], "🚇"],
  [["uber", "auto"], "🛺"],
  [["lunch"], "🍱"],
  [["dinner"], "🍽️"],
  [["breakfast"], "🥐"],
  [["coffee", "cafe"], "☕"],
  [["snack"], "🍎"],
  [["cook", "cooking", "bake", "baking"], "👨‍🍳"],
  [["restaurant"], "🍴"],
  [["sleep", "nap"], "😴"],
  [["rest", "relax"], "🛋️"],
  [["morning routine", "wake"], "🌅"],
  [["doctor", "hospital", "clinic", "checkup"], "🏥"],
  [["medicine", "prescription"], "💊"],
  [["therapy", "mental health"], "🧠"],
  [["dentist"], "🦷"],
  [["friend", "hangout", "outing", "party"], "🎉"],
  [["family"], "👨‍👩‍👧"],
  [["date"], "❤️"],
  [["wedding"], "💒"],
  [["budget", "expense", "finance", "money"], "💰"],
  [["invoice", "tax"], "🧾"],
  [["investment", "stock", "crypto"], "📈"],
  [["draw", "drawing", "sketch"], "✏️"],
  [["paint", "painting"], "🎨"],
  [["design"], "🖼️"],
  [["write", "writing", "journal", "poem"], "🖊️"],
  [["photo", "photography"], "📷"],
  [["clean", "cleaning", "vacuum", "tidy"], "🧹"],
  [["laundry", "wash"], "🧺"],
  [["dishes"], "🍽️"],
  [["grocery", "groceries", "shopping", "shop"], "🛒"],
];

const MOOD_EMOJI_MAP: [string[], string][] = [
  [["happy", "joy", "joyful", "delight", "wonderful", "great", "amazing"], "😊"],
  [["smile", "good", "nice", "pleasant", "alright", "fine", "okay"], "🙂"],
  [["sad", "sadness", "unhappy", "down", "blue", "melancholy", "gloomy"], "😢"],
  [["cry", "crying", "terrible", "awful", "horrible", "devastat", "heartbreaking"], "😭"],
  [["angry", "mad", "frustrat", "annoyed", "irritat", "furious", "rage"], "😡"],
  [["focus", "focused", "deep work", "concentrat", "productive", "flow"], "🎯"],
  [["tired", "exhausted", "fatigue", "drained", "sleepy", "nap"], "😴"],
  [["learn", "learning", "study", "reading", "research"], "📖"],
  [["work", "office", "job", "working", "meeting", "busy"], "💻"],
];

function kwMatch(text: string, kw: string): boolean {
  if (kw.length <= 4) {
    return new RegExp(`(?:^|\\s|[^a-z])${kw}(?:$|\\s|[^a-z])`, "i").test(text);
  }
  return text.includes(kw);
}

const DURATION_REGEX = /(\d+(?:\.\d+)?)\s*(hours?|hrs?|h|minutes?|mins?|m)\b/i;

export function detectDuration(name: string): number | null {
  const match = name.match(DURATION_REGEX);
  if (!match) return null;
  const val = parseFloat(match[1]);
  if (Number.isNaN(val) || val <= 0) return null;
  const unit = match[2].toLowerCase();
  if (unit.startsWith("h")) return Math.round(val * 60);
  return Math.round(val);
}

export function detectCategory(name: string): ActivityCategory | null {
  const lower = name.toLowerCase();
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS) as [
    ActivityCategory,
    string[],
  ][]) {
    if (cat === "Custom") continue;
    if (keywords.some((kw) => kwMatch(lower, kw))) return cat;
  }
  return null;
}

export function detectMood(name: string): string | null {
  const lower = name.toLowerCase();
  for (const [keywords, emoji] of MOOD_EMOJI_MAP) {
    if (keywords.some((kw) => kwMatch(lower, kw))) return emoji;
  }
  return null;
}

export const CATEGORY_HEALTH: Record<ActivityCategory, { ideal: number; max: number }> = {
  Sleep: { ideal: 480, max: 600 },
  Exercise: { ideal: 60, max: 120 },
  Study: { ideal: 120, max: 300 },
  Code: { ideal: 180, max: 480 },
  Read: { ideal: 60, max: 180 },
  Meeting: { ideal: 60, max: 120 },
  Entertainment: { ideal: 60, max: 120 },
  Travel: { ideal: 30, max: 180 },
  Food: { ideal: 60, max: 120 },
  Health: { ideal: 60, max: 180 },
  Social: { ideal: 120, max: 300 },
  Finance: { ideal: 30, max: 120 },
  Creative: { ideal: 90, max: 240 },
  Chores: { ideal: 60, max: 120 },
  Custom: { ideal: 60, max: 240 },
};
```

### `src/lib/tymeline/notifications.ts`

```ts
import { LocalNotifications } from "@capacitor/local-notifications";
import type { Activity } from "./types";

const CHANNEL_ID = "tymeline-reminders";
const ROUTINE_IDS = [2001, 2002, 2003];
const REPEAT_MIN = 1000;
const REPEAT_MAX = 1999;

function nameId(name: string): number {
  let hash = 0;
  const s = name.trim().toLowerCase();
  for (let i = 0; i < s.length; i++) {
    hash = (hash << 5) - hash + s.charCodeAt(i);
    hash |= 0;
  }
  return REPEAT_MIN + (Math.abs(hash) % (REPEAT_MAX - REPEAT_MIN + 1));
}

function nextAt(hour: number, minute: number): Date {
  const d = new Date();
  d.setHours(hour, minute, 0, 0);
  if (d <= new Date()) d.setDate(d.getDate() + 1);
  return d;
}

export async function setupNotificationChannel() {
  try {
    await LocalNotifications.createChannel({
      id: CHANNEL_ID,
      name: "Tymeline reminders",
      description: "Daily check-ins and gentle nudges",
      importance: 4,
    });
  } catch {
    // Silently noop on web
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  try {
    const perm = await LocalNotifications.requestPermissions();
    return perm.display === "granted";
  } catch {
    return false;
  }
}

async function scheduleRoutine(
  hour: number,
  minute: number,
  id: number,
  title: string,
  body: string,
) {
  try {
    await LocalNotifications.schedule({
      notifications: [
        {
          id,
          title,
          body,
          schedule: { at: nextAt(hour, minute), repeats: true },
          channelId: CHANNEL_ID,
        },
      ],
    });
  } catch {
    // Silently noop on web
  }
}

export async function scheduleRoutineReminders(name?: string) {
  const greeting = name ? `${name.split(/\s+/)[0]}, ` : "";
  await scheduleRoutine(
    7,
    0,
    2001,
    "Good morning",
    `${greeting}What will you do today? Start tracking!`,
  );
  await scheduleRoutine(
    12,
    0,
    2002,
    "Midday check",
    `${greeting}How's your day going? Log your morning activities.`,
  );
  await scheduleRoutine(
    21,
    0,
    2003,
    "Evening reflection",
    `${greeting}What did you do today? Time to reflect.`,
  );
}

export async function scheduleRepeatReminder(activityName: string) {
  try {
    const id = nameId(activityName);
    await LocalNotifications.cancel({ notifications: [{ id }] });
    await LocalNotifications.schedule({
      notifications: [
        {
          id,
          title: "Done that before",
          body: `You've logged "${activityName}" again — maybe try something different?`,
          schedule: { at: new Date(Date.now() + 2 * 3600000) },
          channelId: CHANNEL_ID,
        },
      ],
    });
  } catch {
    // Silently noop on web
  }
}

export async function cancelAllTymelineNotifications() {
  try {
    const pending = await LocalNotifications.getPending();
    const ours = pending.notifications.filter(
      (n) => (n.id >= REPEAT_MIN && n.id <= REPEAT_MAX) || ROUTINE_IDS.includes(n.id),
    );
    if (ours.length > 0) {
      await LocalNotifications.cancel({
        notifications: ours.map((n) => ({ id: n.id })),
      });
    }
  } catch {
    // Silently noop on web
  }
}

export async function rescheduleAllNotifications(activities: Activity[], name?: string) {
  try {
    await cancelAllTymelineNotifications();
    await scheduleRoutineReminders(name);
  } catch {
    // Silently noop on web
  }
}
```

### `src/lib/tymeline/papers.ts`

```ts
import type { Activity, Paper, PaperType, ActivityCategory } from "./types";

interface PaperDef {
  type: PaperType;
  title: string;
  reason: string;
  check: (ctx: {
    activities: Activity[];
    summariesCount: number;
    didExport: boolean;
    didImport: boolean;
  }) => boolean;
}

function sameDay(a: string, b: string) {
  const da = new Date(a),
    db = new Date(b);
  return (
    da.getFullYear() === db.getFullYear() &&
    da.getMonth() === db.getMonth() &&
    da.getDate() === db.getDate()
  );
}

function uniqueDays(activities: Activity[]): string[] {
  return Array.from(new Set(activities.map((a) => new Date(a.timestamp).toDateString())));
}

function consecutiveDays(activities: Activity[], n: number): boolean {
  const days = uniqueDays(activities)
    .map((d) => new Date(d).getTime())
    .sort();
  let streak = 1;
  for (let i = 1; i < days.length; i++) {
    const diff = (days[i] - days[i - 1]) / 86400000;
    if (diff === 1) {
      streak++;
      if (streak >= n) return true;
    } else if (diff > 1) streak = 1;
  }
  return false;
}

export const PAPERS: PaperDef[] = [
  {
    type: "first-step",
    title: "First Step",
    reason: "Logged your first activity",
    check: ({ activities }) => activities.length >= 1,
  },
  {
    type: "consistent",
    title: "Consistent",
    reason: "Logged 3 days in a row",
    check: ({ activities }) => consecutiveDays(activities, 3),
  },
  {
    type: "deep-diver",
    title: "Deep Diver",
    reason: "Logged an activity over 2 hours",
    check: ({ activities }) => activities.some((a) => (a.duration ?? 0) >= 120),
  },
  {
    type: "mood-tracker",
    title: "Mood Tracker",
    reason: "Added mood to 5 activities",
    check: ({ activities }) => activities.filter((a) => a.mood).length >= 5,
  },
  {
    type: "reflector",
    title: "Reflector",
    reason: "Generated your first summary",
    check: ({ summariesCount }) => summariesCount >= 1,
  },
  {
    type: "archivist",
    title: "Archivist",
    reason: "Exported a backup",
    check: ({ didExport }) => didExport,
  },
  {
    type: "returning",
    title: "Returning",
    reason: "Imported data",
    check: ({ didImport }) => didImport,
  },
  {
    type: "week-warrior",
    title: "Week Warrior",
    reason: "Logged every day for 7 days",
    check: ({ activities }) => consecutiveDays(activities, 7),
  },
  {
    type: "variety",
    title: "Variety",
    reason: "Used 5 different categories in one day",
    check: ({ activities }) => {
      const byDay = new Map<string, Set<string>>();
      for (const a of activities) {
        const k = new Date(a.timestamp).toDateString();
        if (!byDay.has(k)) byDay.set(k, new Set());
        byDay.get(k)!.add(a.category);
      }
      return Array.from(byDay.values()).some((s) => s.size >= 5);
    },
  },
  {
    type: "century",
    title: "Century",
    reason: "Logged 100 activities",
    check: ({ activities }) => activities.length >= 100,
  },
  {
    type: "early-bird",
    title: "Early Bird",
    reason: "Logged an activity before 7 AM",
    check: ({ activities }) => activities.some((a) => new Date(a.timestamp).getHours() < 7),
  },
  {
    type: "night-owl",
    title: "Night Owl",
    reason: "Logged an activity after 11 PM",
    check: ({ activities }) => activities.some((a) => new Date(a.timestamp).getHours() >= 23),
  },
  {
    type: "emoji-lover",
    title: "Mood Lover",
    reason: "Added mood to 10 activities",
    check: ({ activities }) => activities.filter((a) => a.mood).length >= 10,
  },
  {
    type: "chained",
    title: "Chained",
    reason: "Logged 5 back-to-back activities using time chaining",
    check: ({ activities }) => activities.filter((a) => a.endTime).length >= 5,
  },
  {
    type: "multi-week",
    title: "Multi-Week",
    reason: "Logged activities across 3 different calendar weeks",
    check: ({ activities }) => {
      const weeks = new Set(
        activities.map((a) => {
          const d = new Date(a.timestamp);
          const startOfYear = new Date(d.getFullYear(), 0, 1);
          return `${d.getFullYear()}-W${Math.ceil(((d.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7)}`;
        }),
      );
      return weeks.size >= 3;
    },
  },
  {
    type: "category-explorer",
    title: "Explorer",
    reason: "Used every category at least once",
    check: ({ activities }) => {
      const used = new Set(activities.map((a) => a.category));
      const required: ActivityCategory[] = [
        "Study",
        "Code",
        "Exercise",
        "Read",
        "Meeting",
        "Entertainment",
        "Travel",
        "Food",
        "Sleep",
        "Health",
        "Social",
        "Finance",
        "Creative",
        "Chores",
      ];
      return required.every((c) => used.has(c));
    },
  },
  {
    type: "speed-logger",
    title: "Speed Logger",
    reason: "Logged 5 activities in one day",
    check: ({ activities }) => {
      const byDay = new Map<string, number>();
      for (const a of activities) {
        const k = new Date(a.timestamp).toDateString();
        byDay.set(k, (byDay.get(k) ?? 0) + 1);
      }
      return Array.from(byDay.values()).some((n) => n >= 5);
    },
  },
  {
    type: "half-century",
    title: "Half Century",
    reason: "Logged 50 activities",
    check: ({ activities }) => activities.length >= 50,
  },
  {
    type: "mood-rainbow",
    title: "Mood Rainbow",
    reason: "Used every mood emoji at least once",
    check: ({ activities }) => {
      const used = new Set(activities.map((a) => a.mood).filter(Boolean));
      return used.size >= 8;
    },
  },
  {
    type: "marathon",
    title: "Marathon",
    reason: "Accumulated 24 total hours of logged time",
    check: ({ activities }) => {
      const totalMin = activities.reduce((s, a) => s + (a.duration ?? 0), 0);
      return totalMin >= 1440;
    },
  },
];

export function evaluatePapers(ctx: {
  activities: Activity[];
  existing: Paper[];
  summariesCount: number;
  didExport?: boolean;
  didImport?: boolean;
}): Paper[] {
  const earned = new Set(ctx.existing.map((p) => p.type));
  const newPapers: Paper[] = [];
  for (const def of PAPERS) {
    if (earned.has(def.type)) continue;
    if (
      def.check({
        activities: ctx.activities,
        summariesCount: ctx.summariesCount,
        didExport: ctx.didExport ?? false,
        didImport: ctx.didImport ?? false,
      })
    ) {
      newPapers.push({
        id: crypto.randomUUID(),
        type: def.type,
        title: def.title,
        reason: def.reason,
        earnedAt: new Date().toISOString(),
      });
    }
  }
  return newPapers;
}

export const PAPER_ICONS: Record<PaperType, string> = {
  "first-step": "👣",
  consistent: "🔥",
  "deep-diver": "🧠",
  "mood-tracker": "💭",
  reflector: "✨",
  archivist: "📦",
  returning: "🔁",
  "week-warrior": "🏆",
  variety: "🎨",
  century: "🥇",
  "early-bird": "🌅",
  "night-owl": "🦉",
  "emoji-lover": "😍",
  chained: "⛓️",
  "multi-week": "📅",
  "category-explorer": "🧭",
  "speed-logger": "⚡",
  "half-century": "🎯",
  "mood-rainbow": "🌈",
  marathon: "🏅",
};

// Deterministic gradient from paper id
export function paperGradient(id: string): string {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const hue1 = h % 360;
  const hue2 = (hue1 + 40 + (h % 60)) % 360;
  return `linear-gradient(135deg, hsl(${hue1} 65% 78%) 0%, hsl(${hue2} 70% 70%) 100%)`;
}
export { sameDay };
```

### `src/lib/tymeline/storage.ts`

```ts
import { useEffect, useState, useCallback } from "react";
import type { Activity, Paper, Settings, Summary } from "./types";

const KEYS = {
  activities: "tymeline:activities",
  papers: "tymeline:papers",
  summaries: "tymeline:summaries",
  settings: "tymeline:settings",
  skippedDays: "tymeline:skipped-days",
} as const;

const DEFAULT_SETTINGS: Settings = {
  aiEnabled: true,
  theme: "system",
  onboarded: false,
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("tymeline:change", { detail: { key } }));
}

function useLocal<T>(key: string, fallback: T): [T, (v: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(() => read(key, fallback));

  useEffect(() => {
    // Re-read on mount in case localStorage changed between lazy init and effect
    setValue(read(key, fallback));
    const onChange = (e: Event) => {
      const ce = e as CustomEvent<{ key: string }>;
      if (ce.detail?.key === key) setValue(read(key, fallback));
    };
    window.addEventListener("tymeline:change", onChange);
    return () => window.removeEventListener("tymeline:change", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        write(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, update];
}

export function useActivities() {
  return useLocal<Activity[]>(KEYS.activities, []);
}
export function usePapers() {
  return useLocal<Paper[]>(KEYS.papers, []);
}
export function useSummaries() {
  return useLocal<Summary[]>(KEYS.summaries, []);
}
export function useSkippedDays() {
  return useLocal<string[]>(KEYS.skippedDays, []);
}
export function useSettings() {
  return useLocal<Settings>(KEYS.settings, DEFAULT_SETTINGS);
}

export function exportAll() {
  return {
    activities: read<Activity[]>(KEYS.activities, []),
    papers: read<Paper[]>(KEYS.papers, []),
    summaries: read<Summary[]>(KEYS.summaries, []),
    settings: read<Settings>(KEYS.settings, DEFAULT_SETTINGS),
    exportedAt: new Date().toISOString(),
  };
}

export function importAll(data: {
  activities?: Activity[];
  papers?: Paper[];
  summaries?: Summary[];
  settings?: Settings;
}) {
  if (data.activities) write(KEYS.activities, data.activities);
  if (data.papers) write(KEYS.papers, data.papers);
  if (data.summaries) write(KEYS.summaries, data.summaries);
  if (data.settings) write(KEYS.settings, data.settings);
}

export function clearAll() {
  if (typeof window === "undefined") return;
  Object.values(KEYS).forEach((k) => window.localStorage.removeItem(k));
  window.dispatchEvent(new CustomEvent("tymeline:change", { detail: { key: "*" } }));
}

export { KEYS };
```

### `src/lib/tymeline/types.ts`

```ts
export type ActivityCategory =
  | "Study"
  | "Code"
  | "Exercise"
  | "Read"
  | "Meeting"
  | "Entertainment"
  | "Travel"
  | "Food"
  | "Sleep"
  | "Health"
  | "Social"
  | "Finance"
  | "Creative"
  | "Chores"
  | "Custom";

export interface Activity {
  id: string;
  name: string;
  category: ActivityCategory;
  duration?: number; // minutes
  mood?: string;
  timestamp: string; // ISO — start time
  endTime?: string; // ISO — end time
  createdAt: string;
}

export type PaperType =
  | "first-step"
  | "consistent"
  | "deep-diver"
  | "mood-tracker"
  | "reflector"
  | "archivist"
  | "returning"
  | "week-warrior"
  | "variety"
  | "century"
  | "early-bird"
  | "night-owl"
  | "emoji-lover"
  | "chained"
  | "multi-week"
  | "category-explorer"
  | "speed-logger"
  | "half-century"
  | "mood-rainbow"
  | "marathon";

export interface Paper {
  id: string;
  type: PaperType;
  title: string;
  reason: string;
  earnedAt: string;
}

export interface SummaryContent {
  what_you_did: string;
  positives: string;
  negatives: string;
  improvements_must: string;
  improvements_nice: string;
}

export interface Summary {
  id: string;
  period: "week" | "month" | "all";
  generatedAt: string;
  content: string | SummaryContent;
  isAI: boolean;
}

export interface Settings {
  name?: string;
  why?: string;
  aiEnabled: boolean;
  theme: "system" | "light" | "dark";
  onboarded?: boolean;
  notificationsEnabled?: boolean;
}
```

### `src/lib/api/example.functions.ts`

```ts
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getServerConfig } from "../config.server";

// Example createServerFn. Server-side handler invoked from the client:
//   const result = await getGreeting({ data: { name: "Ada" } })
// The .handler body runs server-only — imports used only inside it (like
// .server.ts modules) are tree-shaken from the client bundle. Module-level
// code here still ships to the client; for truly server-only helpers, put
// them in a .server.ts file. Use this pattern instead of Supabase Edge
// Functions for server logic.

export const getGreeting = createServerFn({ method: "POST" })
  .inputValidator(z.object({ name: z.string().min(1) }))
  .handler(async ({ data }) => {
    const config = getServerConfig();
    return {
      greeting: `Hello, ${data.name}!`,
      mode: config.nodeEnv ?? "unknown",
    };
  });
```

### `src/components/tymeline/ActivityCard.tsx`

```tsx
import type { Activity } from "@/lib/tymeline/types";
import { CATEGORY_COLORS } from "@/lib/tymeline/categories";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";

export function ActivityCard({
  activity,
  index,
  onDelete,
}: {
  activity: Activity;
  index: number;
  onDelete: (id: string) => void;
}) {
  const color = CATEGORY_COLORS[activity.category];
  return (
    <div
      className="group relative flex items-stretch overflow-hidden rounded-2xl border bg-surface shadow-sm transition-transform active:scale-[0.98]"
      style={{
        animation: `fadeInUp 420ms cubic-bezier(0.16,1,0.3,1) both`,
        animationDelay: `${Math.min(index, 8) * 50}ms`,
      }}
    >
      <div className="w-1.5 shrink-0" style={{ backgroundColor: color }} />
      <div className="flex-1 px-4 py-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg leading-tight text-foreground">{activity.name}</h3>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-text-secondary">
              <span
                className="rounded-full px-2 py-0.5 font-medium"
                style={{ backgroundColor: `${color}22`, color }}
              >
                {activity.category}
              </span>
              {activity.duration ? <span>· {formatDuration(activity.duration)}</span> : null}
              <span>· {format(new Date(activity.timestamp), "h:mm a")}</span>
            </div>
          </div>
          {activity.mood ? (
            <div className="text-3xl leading-none" aria-label="mood">
              {activity.mood}
            </div>
          ) : null}
        </div>
      </div>
      <button
        onClick={() => onDelete(activity.id)}
        aria-label="Delete"
        className="absolute right-2 top-2 rounded-full p-1.5 text-text-secondary opacity-0 transition-opacity hover:bg-accent-soft hover:text-accent group-hover:opacity-100"
      >
        <Trash2 size={14} />
      </button>
      <style>{`@keyframes fadeInUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}

function formatDuration(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}
```

### `src/components/tymeline/AddActivitySheet.tsx`

```tsx
import { useState, useEffect, useRef, useMemo } from "react";
import {
  CATEGORIES,
  CATEGORY_COLORS,
  MOODS,
  detectCategory,
  detectMood,
  detectDuration,
} from "@/lib/tymeline/categories";
import type { Activity, ActivityCategory } from "@/lib/tymeline/types";
import { X } from "lucide-react";

function fmtTime(d: Date): string {
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function parseTime(val: string, base: Date): Date {
  const [h, m] = val.split(":").map(Number);
  const d = new Date(base);
  d.setHours(h, m, 0, 0);
  return d;
}

function calcDuration(start: string, end: string, base: Date): number {
  const s = parseTime(start, base).getTime();
  let e = parseTime(end, base).getTime();
  if (e <= s) e += 86400000;
  return Math.round((e - s) / 60000);
}

function formatDuration(min: number): string {
  if (min < 60) return `${min}m`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

function withinHours(iso: string, hours: number): boolean {
  const diff = Date.now() - new Date(iso).getTime();
  return diff >= 0 && diff < hours * 3600000;
}

export function AddActivitySheet({
  open,
  onClose,
  onAdd,
  defaultDate,
  lastEndTime,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (a: Activity) => void;
  defaultDate?: Date;
  lastEndTime?: string;
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<ActivityCategory>("Study");
  const [mood, setMood] = useState<string | undefined>();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);
  const [showMoodPicker, setShowMoodPicker] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const userEditedEnd = useRef(false);

  const baseDate = useMemo(() => defaultDate ?? new Date(), [defaultDate, open]);

  // Reset on open
  useEffect(() => {
    if (!open) return;
    userEditedEnd.current = false;
    const n = new Date();
    let start = fmtTime(n);
    if (lastEndTime && withinHours(lastEndTime, 16)) {
      start = fmtTime(new Date(lastEndTime));
    }
    const end = fmtTime(new Date(n.getTime() + 60 * 60000));
    setName("");
    setCategory("Study");
    setMood(undefined);
    setStartTime(start);
    setEndTime(end);
    setShowCategoryPicker(false);
    setShowMoodPicker(false);
    setTimeout(() => inputRef.current?.focus(), 200);
  }, [open, lastEndTime, baseDate]);

  // Auto-detect category, mood, and duration from name
  useEffect(() => {
    if (!name) return;
    const cat = detectCategory(name);
    if (cat) {
      setCategory(cat);
      setShowCategoryPicker(false);
    }
    const mo = detectMood(name);
    if (mo) {
      setMood(mo);
      setShowMoodPicker(false);
    }
    const dur = detectDuration(name);
    if (dur && !userEditedEnd.current) {
      const parsed = parseTime(startTime, baseDate);
      parsed.setMinutes(parsed.getMinutes() + dur);
      setEndTime(fmtTime(parsed));
    }
  }, [name, startTime, baseDate]);

  // Duration from time range
  const duration = useMemo(
    () => calcDuration(startTime, endTime, baseDate),
    [startTime, endTime, baseDate],
  );

  // Detect duration from name (supplementary)
  const detectedDuration = useMemo(() => (name ? detectDuration(name) : null), [name]);

  if (!open) return null;

  const submit = () => {
    if (!name.trim()) return;
    const base = new Date(baseDate);
    const ts = parseTime(startTime, base);
    const te = parseTime(endTime, base);
    if (te <= ts) te.setDate(te.getDate() + 1);
    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      category,
      duration: duration > 0 ? duration : undefined,
      mood,
      timestamp: ts.toISOString(),
      endTime: te.toISOString(),
      createdAt: new Date().toISOString(),
    });
    onClose();
  };

  const detectedCat = detectCategory(name);
  const detectedMo = detectMood(name);
  const showCatBadge = detectedCat && !showCategoryPicker && name.length > 0;
  const showMoodBadge = detectedMo && !showMoodPicker && name.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" role="dialog" aria-modal>
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-in fade-in"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-md rounded-t-3xl border-t bg-surface p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
        style={{ animation: "slideUp 320ms cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-border" />
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl">Log a moment</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 text-text-secondary hover:bg-accent-soft"
          >
            <X size={18} />
          </button>
        </div>

        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="What did you do?"
          className="w-full rounded-xl border bg-background px-4 py-3 text-base outline-none focus:border-accent"
        />

        <div className="mt-4">
          <Label>Time</Label>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex-1">
              <span className="text-[10px] text-text-secondary">Start</span>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="mt-0.5 w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
            <span className="mt-5 text-text-secondary">→</span>
            <div className="flex-1">
              <span className="text-[10px] text-text-secondary">End</span>
              <input
                type="time"
                value={endTime}
                onChange={(e) => {
                  userEditedEnd.current = true;
                  setEndTime(e.target.value);
                }}
                className="mt-0.5 w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </div>
          </div>
          <div className="mt-1.5 flex items-center gap-2 text-right text-sm font-medium text-text-secondary">
            <span>{formatDuration(duration)}</span>
            {detectedDuration && detectedDuration !== duration && (
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px]">
                ~{formatDuration(detectedDuration)} from name
              </span>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Label>Mood</Label>
          <div className="mt-2">
            {showMoodBadge ? (
              <div className="flex items-center gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-3xl">
                  {mood}
                </span>
                <button
                  onClick={() => setShowMoodPicker(true)}
                  className="text-xs text-text-secondary underline transition hover:text-accent"
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="flex gap-1.5">
                {MOODS.map((m) => {
                  const active = mood === m;
                  return (
                    <button
                      key={m}
                      onClick={() => setMood(active ? undefined : m)}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-xl transition"
                      style={{
                        backgroundColor: active ? "var(--accent-soft)" : "transparent",
                        border: active ? "1.5px solid var(--accent)" : "1.5px solid transparent",
                      }}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Label>Category</Label>
          <div className="mt-2">
            {showCatBadge ? (
              <div className="flex items-center gap-2">
                <span
                  className="inline-block rounded-full px-3.5 py-1.5 text-sm font-medium text-white"
                  style={{ backgroundColor: CATEGORY_COLORS[category] }}
                >
                  {category}
                </span>
                <button
                  onClick={() => setShowCategoryPicker(true)}
                  className="text-xs text-text-secondary underline transition hover:text-accent"
                >
                  Change
                </button>
              </div>
            ) : (
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 scrollbar-hide">
                {CATEGORIES.map((c) => {
                  const active = category === c;
                  const col = CATEGORY_COLORS[c];
                  return (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className="shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition"
                      style={{
                        backgroundColor: active ? col : "transparent",
                        color: active ? "#fff" : "var(--foreground)",
                        borderColor: active ? col : "var(--border)",
                      }}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={submit}
          disabled={!name.trim()}
          className="mt-6 w-full rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground transition active:scale-[0.98] disabled:opacity-40"
        >
          Log it
        </button>
        <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: none; } }`}</style>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
      {children}
    </label>
  );
}
```

### `src/components/tymeline/PaperEarnedNotification.tsx`

```tsx
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { PAPER_ICONS } from "@/lib/tymeline/papers";
import type { Paper } from "@/lib/tymeline/types";

interface QueuedPaper {
  paper: Paper;
  id: number;
}

export function PaperEarnedNotification() {
  const navigate = useNavigate();
  const [queue, setQueue] = useState<QueuedPaper[]>([]);
  const [current, setCurrent] = useState<QueuedPaper | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idRef = useRef(0);

  const dismiss = useCallback(() => {
    setCurrent(null);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  // Process queue: show next after 600ms gap
  useEffect(() => {
    if (current !== null) return;
    if (queue.length === 0) return;
    const next = queue[0];
    setQueue((prev) => prev.slice(1));
    setCurrent(next);
    try {
      window.navigator.vibrate?.([100, 50, 100]);
    } catch {
      /* no-op */
    }
    timerRef.current = setTimeout(dismiss, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, queue, dismiss]);

  // Listen for custom events
  useEffect(() => {
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ paper: Paper }>;
      const paper = ce.detail?.paper;
      if (!paper) return;
      idRef.current += 1;
      setQueue((prev) => [...prev, { paper, id: idRef.current }]);
    };
    window.addEventListener("tymeline:paper-earned", handler);
    return () => window.removeEventListener("tymeline:paper-earned", handler);
  }, []);

  const handleOpen = () => {
    dismiss();
    navigate({ to: "/collection" });
  };

  if (!current) return null;

  const icon = PAPER_ICONS[current.paper.type] ?? "📜";

  return (
    <div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-50 flex justify-center px-4">
      <button
        onClick={handleOpen}
        className="flex items-center gap-3 rounded-full border bg-surface px-5 py-3 shadow-lg transition active:scale-95"
        style={{
          animation:
            "notificationSlideUp 320ms cubic-bezier(0.16,1,0.3,1), notificationShake 400ms ease-in-out 320ms",
        }}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-serif text-sm text-foreground whitespace-nowrap">
          You earned <strong>{current.paper.title}</strong>!
        </span>
        <span className="text-xs font-medium text-accent">Open</span>
      </button>
      <style>{`
        @keyframes notificationSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes notificationShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          50% { transform: translateX(4px); }
          75% { transform: translateX(-4px); }
        }
      `}</style>
    </div>
  );
}
```

### `src/components/tymeline/TabBar.tsx`

```tsx
import { Link, useLocation } from "@tanstack/react-router";
import { Home, BarChart3, Sparkles, Layers } from "lucide-react";

const TABS = [
  { to: "/", label: "Timeline", icon: Home },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/summary", label: "Reflect", icon: Sparkles },
  { to: "/collection", label: "Papers", icon: Layers },
] as const;

export function TabBar() {
  const loc = useLocation();
  if (loc.pathname.startsWith("/settings") || loc.pathname.startsWith("/onboarding")) return null;
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-stretch justify-around px-2 pb-[env(safe-area-inset-bottom)]">
        {TABS.map((t) => {
          const active = t.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(t.to);
          const Icon = t.icon;
          return (
            <Link
              key={t.to}
              to={t.to}
              className="flex flex-1 flex-col items-center gap-1 py-3 text-xs transition-colors"
              style={{ color: active ? "var(--accent)" : "var(--text-secondary)" }}
            >
              <Icon size={20} strokeWidth={active ? 2.5 : 2} />
              <span style={{ fontWeight: active ? 600 : 500 }}>{t.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
```

### `src/components/tymeline/ThemeProvider.tsx`

```tsx
import { useEffect, type ReactNode } from "react";
import { useSettings } from "@/lib/tymeline/storage";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [settings] = useSettings();
  useEffect(() => {
    const apply = () => {
      const root = document.documentElement;
      const wantDark =
        settings.theme === "dark" ||
        (settings.theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      root.classList.toggle("dark", wantDark);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", wantDark ? "#141210" : "#FAF7F2");
    };
    apply();
    if (settings.theme === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      mql.addEventListener("change", apply);
      return () => mql.removeEventListener("change", apply);
    }
  }, [settings.theme]);
  return <>{children}</>;
}
```

### `src/components/ui/accordion.tsx`

```tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
```

### `src/components/ui/alert-dialog.tsx`

```tsx
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
```

### `src/components/ui/alert.tsx`

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
```

### `src/components/ui/aspect-ratio.tsx`

```tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
```

### `src/components/ui/avatar.tsx`

```tsx
"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
```

### `src/components/ui/badge.tsx`

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
```

### `src/components/ui/breadcrumb.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
```

### `src/components/ui/button.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

### `src/components/ui/calendar.tsx`

```tsx
"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day,
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("size-4", className)} {...props} />;
          }

          if (orientation === "right") {
            return <ChevronRightIcon className={cn("size-4", className)} {...props} />;
          }

          return <ChevronDownIcon className={cn("size-4", className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
```

### `src/components/ui/card.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

### `src/components/ui/carousel.tsx`

```tsx
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
```

### `src/components/ui/chart.tsx`

```tsx
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload
            .filter((item) => item.type !== "none")
            .map((item, index) => {
              const key = `${nameKey || item.name || item.dataKey || "value"}`;
              const itemConfig = getPayloadConfigFromPayload(config, item, key);
              const indicatorColor = color || item.payload.fill || item.color;

              return (
                <div
                  key={item.dataKey}
                  className={cn(
                    "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                    indicator === "dot" && "items-center",
                  )}
                >
                  {formatter && item?.value !== undefined && item.name ? (
                    formatter(item.value, item.name, item, index, item.payload)
                  ) : (
                    <>
                      {itemConfig?.icon ? (
                        <itemConfig.icon />
                      ) : (
                        !hideIndicator && (
                          <div
                            className={cn(
                              "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                              {
                                "h-2.5 w-2.5": indicator === "dot",
                                "w-1": indicator === "line",
                                "w-0 border-[1.5px] border-dashed bg-transparent":
                                  indicator === "dashed",
                                "my-0.5": nestLabel && indicator === "dashed",
                              },
                            )}
                            style={
                              {
                                "--color-bg": indicatorColor,
                                "--color-border": indicatorColor,
                              } as React.CSSProperties
                            }
                          />
                        )
                      )}
                      <div
                        className={cn(
                          "flex flex-1 justify-between leading-none",
                          nestLabel ? "items-end" : "items-center",
                        )}
                      >
                        <div className="grid gap-1.5">
                          {nestLabel ? tooltipLabel : null}
                          <span className="text-muted-foreground">
                            {itemConfig?.label || item.name}
                          </span>
                        </div>
                        {item.value && (
                          <span className="font-mono font-medium tabular-nums text-foreground">
                            {item.value.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className,
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
```

### `src/components/ui/checkbox.tsx`

```tsx
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
```

### `src/components/ui/collapsible.tsx`

```tsx
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
```

### `src/components/ui/command.tsx`

```tsx
"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
```

### `src/components/ui/context-menu.tsx`

```tsx
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
```

### `src/components/ui/dialog.tsx`

```tsx
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
```

### `src/components/ui/drawer.tsx`

```tsx
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
```

### `src/components/ui/dropdown-menu.tsx`

```tsx
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
```

### `src/components/ui/form.tsx`

```tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
```

### `src/components/ui/hover-card.tsx`

```tsx
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-hover-card-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
```

### `src/components/ui/input-otp.tsx`

```tsx
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName,
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
```

### `src/components/ui/input.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
```

### `src/components/ui/label.tsx`

```tsx
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
```

### `src/components/ui/menubar.tsx`

```tsx
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
```

### `src/components/ui/navigation-menu.tsx`

```tsx
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
```

### `src/components/ui/pagination.tsx`

```tsx
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("", className)} {...props} />,
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
```

### `src/components/ui/popover.tsx`

```tsx
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
```

### `src/components/ui/progress.tsx`

```tsx
"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
```

### `src/components/ui/radio-group.tsx`

```tsx
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
```

### `src/components/ui/resizable.tsx`

```tsx
import { GripVertical } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof Group>) => (
  <Group
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
}) => (
  <Separator
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
```

### `src/components/ui/scroll-area.tsx`

```tsx
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
```

### `src/components/ui/select.tsx`

```tsx
"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
```

### `src/components/ui/separator.tsx`

```tsx
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
```

### `src/components/ui/sheet.tsx`

```tsx
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
```

### `src/components/ui/sidebar.tsx`

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open],
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className,
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="group peer hidden text-sidebar-foreground md:block"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
          )}
        />
        <div
          className={cn(
            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className,
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          "relative flex w-full flex-1 flex-col bg-background",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className,
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="footer"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="content"
        className={cn(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="group"
        className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
        {...props}
      />
    );
  },
);
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  ),
);
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  ),
);
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring cursor-pointer transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ ...props }, ref) => <li ref={ref} {...props} />,
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
```

### `src/components/ui/skeleton.tsx`

```tsx
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-primary/10", className)} {...props} />;
}

export { Skeleton };
```

### `src/components/ui/slider.tsx`

```tsx
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
```

### `src/components/ui/sonner.tsx`

```tsx
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
```

### `src/components/ui/switch.tsx`

```tsx
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
```

### `src/components/ui/table.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
));
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
```

### `src/components/ui/tabs.tsx`

```tsx
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
```

### `src/components/ui/textarea.tsx`

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
```

### `src/components/ui/toggle-group.tsx`

```tsx
"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
```

### `src/components/ui/toggle.tsx`

```tsx
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
```

### `src/components/ui/tooltip.tsx`

```tsx
"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
```

### `src/routes/README.md`

```md
# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
is a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic — bare `$`, no curly braces) |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment) |
| `files/$.tsx` | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx` | layout route (renders children via `<Outlet />`) |
| `__root.tsx` | app shell — wraps every page; preserve `<Outlet />` |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.
```

### `src/routes/__root.tsx`

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "@/components/tymeline/ThemeProvider";
import { TabBar } from "@/components/tymeline/TabBar";
import { PaperEarnedNotification } from "@/components/tymeline/PaperEarnedNotification";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#FAF7F2" },
      { title: "Tymeline — Your time, your story" },
      {
        name: "description",
        content:
          "A private, local-first life timeline. Capture moments and reflect on how you spend your time.",
      },
      { property: "og:title", content: "Tymeline" },
      { property: "og:description", content: "A private, local-first life timeline." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="mx-auto min-h-screen max-w-md pb-24">
          <Outlet />
        </div>
        <TabBar />
        <PaperEarnedNotification />
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
```

### `src/routes/analytics.tsx`

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useActivities } from "@/lib/tymeline/storage";
import { CATEGORY_COLORS, CATEGORY_HEALTH, MOOD_SCORE } from "@/lib/tymeline/categories";
import type { Activity, ActivityCategory } from "@/lib/tymeline/types";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Cell,
} from "recharts";
import { format, startOfDay, startOfWeek, startOfMonth } from "date-fns";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Tymeline" },
      { name: "description", content: "See how you spend your time." },
    ],
  }),
  component: AnalyticsPage,
});

type Range = "today" | "week" | "month" | "all";
const RANGES: { id: Range; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "week", label: "Week" },
  { id: "month", label: "Month" },
  { id: "all", label: "All" },
];

function filterRange(activities: Activity[], range: Range): Activity[] {
  const now = new Date();
  let from: Date | null = null;
  if (range === "today") from = startOfDay(now);
  if (range === "week") from = startOfWeek(now, { weekStartsOn: 1 });
  if (range === "month") from = startOfMonth(now);
  return from ? activities.filter((a) => new Date(a.timestamp) >= from!) : activities;
}

interface BarData {
  category: string;
  idealHours: number;
  extraHours: number;
  totalMinutes: number;
  health: "under" | "ideal" | "over-ok" | "overdone";
}

function getBarColors(health: BarData["health"], baseColor: string) {
  switch (health) {
    case "under":
      return { ideal: "#A8D5A2", extra: "transparent" };
    case "ideal":
      return { ideal: "#4CAF50", extra: "transparent" };
    case "over-ok":
      return { ideal: "#A8D5A2", extra: darken(baseColor, 30) };
    case "overdone":
      return { ideal: "#A8D5A2", extra: "#C0392B" };
  }
}

function darken(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max((num >> 16) - amount, 0);
  const g = Math.max(((num >> 8) & 0xff) - amount, 0);
  const b = Math.max((num & 0xff) - amount, 0);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

function AnalyticsPage() {
  const [activities] = useActivities();
  const [range, setRange] = useState<Range>("week");
  const filtered = useMemo(() => filterRange(activities, range), [activities, range]);

  const barData = useMemo(() => {
    const m = new Map<string, number>();
    for (const a of filtered) {
      m.set(a.category, (m.get(a.category) ?? 0) + (a.duration ?? 30));
    }
    return Array.from(m.entries())
      .map(([cat, minutes]): BarData => {
        const catKey = cat as ActivityCategory;
        const health = CATEGORY_HEALTH[catKey];
        const idealMin = health?.ideal ?? 60;
        const maxMin = health?.max ?? 240;
        let healthStatus: BarData["health"];
        const ratio = minutes / idealMin;
        if (ratio < 0.9) healthStatus = "under";
        else if (ratio <= 1.1) healthStatus = "ideal";
        else if (minutes <= maxMin) healthStatus = "over-ok";
        else healthStatus = "overdone";
        return {
          category: cat,
          idealHours: Math.min(minutes, idealMin) / 60,
          extraHours: Math.max(minutes - idealMin, 0) / 60,
          totalMinutes: minutes,
          health: healthStatus,
        };
      })
      .sort((a, b) => b.idealHours + b.extraHours - (a.idealHours + a.extraHours));
  }, [filtered]);

  const moodTrend = useMemo(() => {
    const m = new Map<string, { sum: number; count: number }>();
    for (const a of filtered) {
      if (!a.mood) continue;
      const key = format(new Date(a.timestamp), "MMM d");
      const cur = m.get(key) ?? { sum: 0, count: 0 };
      cur.sum += MOOD_SCORE[a.mood] ?? 3;
      cur.count += 1;
      m.set(key, cur);
    }
    return Array.from(m.entries()).map(([date, { sum, count }]) => ({
      date,
      mood: +(sum / count).toFixed(2),
    }));
  }, [filtered]);

  const heatmap = useMemo(() => {
    const counts = new Array(24).fill(0);
    for (const a of filtered) counts[new Date(a.timestamp).getHours()]++;
    const max = Math.max(...counts, 1);
    return counts.map((c, h) => ({ hour: h, intensity: c / max, count: c }));
  }, [filtered]);

  const stats = useMemo(() => {
    const freq = new Map<string, number>();
    const moodFreq = new Map<string, number>();
    const byDay = new Map<string, number>();
    for (const a of filtered) {
      freq.set(a.name, (freq.get(a.name) ?? 0) + 1);
      if (a.mood) moodFreq.set(a.mood, (moodFreq.get(a.mood) ?? 0) + 1);
      const k = new Date(a.timestamp).toDateString();
      byDay.set(k, (byDay.get(k) ?? 0) + 1);
    }
    const top = (m: Map<string, number>) =>
      Array.from(m.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
    const longest = Array.from(byDay.entries()).sort((a, b) => b[1] - a[1])[0];
    return {
      total: filtered.length,
      topActivity: top(freq),
      topMood: top(moodFreq),
      longestDay: longest ? `${longest[1]} on ${format(new Date(longest[0]), "MMM d")}` : "—",
    };
  }, [filtered]);

  return (
    <div className="px-5 pt-6">
      <header className="mb-5">
        <h1 className="font-serif text-3xl text-foreground">How you spend time</h1>
        <p className="mt-1 text-sm text-text-secondary">Patterns in your moments</p>
      </header>

      <div className="-mx-5 mb-6 flex gap-2 overflow-x-auto px-5 scrollbar-hide">
        {RANGES.map((r) => {
          const active = range === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setRange(r.id)}
              className="shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition"
              style={{
                backgroundColor: active ? "var(--accent)" : "transparent",
                color: active ? "var(--accent-foreground)" : "var(--foreground)",
                borderColor: active ? "var(--accent)" : "var(--border)",
              }}
            >
              {r.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <EmptyChart />
      ) : (
        <>
          <Card title="Time by category">
            <div style={{ height: Math.max(180, barData.length * 40) }}>
              <ResponsiveContainer>
                <BarChart
                  data={barData}
                  layout="vertical"
                  margin={{ left: 12, right: 16, top: 4, bottom: 4 }}
                  stackOffset="sign"
                >
                  <CartesianGrid horizontal={false} stroke="var(--border)" />
                  <XAxis type="number" stroke="var(--text-secondary)" fontSize={11} />
                  <YAxis
                    type="category"
                    dataKey="category"
                    stroke="var(--text-secondary)"
                    fontSize={11}
                    width={86}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                    formatter={(v: number, name: string) => [
                      `${v.toFixed(1)}h`,
                      name === "idealHours" ? "Ideal" : "Extra",
                    ]}
                  />
                  <Bar dataKey="idealHours" stackId="a" animationDuration={700}>
                    {barData.map((d) => {
                      const cat = d.category as ActivityCategory;
                      const colors = getBarColors(d.health, CATEGORY_COLORS[cat] ?? "#78909C");
                      return <Cell key={d.category} fill={colors.ideal} />;
                    })}
                  </Bar>
                  <Bar
                    dataKey="extraHours"
                    stackId="a"
                    radius={[0, 8, 8, 0]}
                    animationDuration={700}
                  >
                    {barData.map((d) => {
                      const cat = d.category as ActivityCategory;
                      const colors = getBarColors(d.health, CATEGORY_COLORS[cat] ?? "#78909C");
                      return <Cell key={d.category} fill={colors.extra} />;
                    })}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-text-secondary">
              <span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#A8D5A2" }}
                />{" "}
                Under ideal
              </span>
              <span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#4CAF50" }}
                />{" "}
                Ideal
              </span>
              <span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: darken("#78909C", 30) }}
                />{" "}
                Over (ok)
              </span>
              <span>
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#C0392B" }}
                />{" "}
                Overdone
              </span>
            </div>
          </Card>

          {moodTrend.length > 1 && (
            <Card title="Mood over time">
              <div style={{ height: 180 }}>
                <ResponsiveContainer>
                  <LineChart data={moodTrend} margin={{ left: -8, right: 8, top: 8, bottom: 4 }}>
                    <CartesianGrid stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="date" stroke="var(--text-secondary)" fontSize={11} />
                    <YAxis domain={[1, 5]} stroke="var(--text-secondary)" fontSize={11} />
                    <Tooltip
                      contentStyle={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="mood"
                      stroke="var(--accent)"
                      strokeWidth={2.5}
                      dot={{ fill: "var(--accent)", r: 3 }}
                      animationDuration={700}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          )}

          <Card title="Active hours">
            <div className="grid grid-cols-6 gap-1.5">
              {heatmap.map((h) => (
                <div
                  key={h.hour}
                  className="flex aspect-square flex-col items-center justify-center rounded-md text-[10px] font-medium"
                  style={{
                    backgroundColor: `color-mix(in oklab, var(--accent) ${Math.round(h.intensity * 85) + 5}%, transparent)`,
                    color: h.intensity > 0.5 ? "#fff" : "var(--text-secondary)",
                  }}
                >
                  <span>{h.hour}</span>
                  {h.count > 0 && <span className="text-[8px] opacity-80">{h.count}</span>}
                </div>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Stat label="Total logged" value={String(stats.total)} />
            <Stat label="Top activity" value={stats.topActivity} />
            <Stat label="Top mood" value={stats.topMood} />
            <Stat label="Longest day" value={stats.longestDay} />
          </div>
        </>
      )}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-4 rounded-2xl border bg-surface p-4">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
        {title}
      </h3>
      {children}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-surface p-4">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
        {label}
      </div>
      <div className="mt-1 truncate font-serif text-lg text-foreground">{value}</div>
    </div>
  );
}

function EmptyChart() {
  return (
    <div className="mt-16 text-center text-text-secondary">
      <p className="font-serif text-xl">No data yet</p>
      <p className="mt-1 text-sm">Log activities to see your patterns emerge.</p>
    </div>
  );
}
```

### `src/routes/collection.tsx`

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { usePapers } from "@/lib/tymeline/storage";
import { paperGradient, PAPERS, PAPER_ICONS } from "@/lib/tymeline/papers";
import { format } from "date-fns";
import { X } from "lucide-react";
import type { Paper } from "@/lib/tymeline/types";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Papers — Tymeline" },
      {
        name: "description",
        content: "Your collected papers — small marks of meaningful moments.",
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const [papers] = usePapers();
  const [open, setOpen] = useState<Paper | null>(null);

  return (
    <div className="px-5 pt-6">
      <header className="mb-2">
        <h1 className="font-serif text-3xl text-foreground">Your Papers</h1>
        <p className="mt-1 text-sm text-text-secondary">A trophy cabinet of your journey</p>
      </header>

      <div className="mb-6">
        <div className="mb-1 flex items-center justify-between text-xs text-text-secondary">
          <span className="font-semibold">
            {papers.length} / {PAPERS.length} papers
          </span>
          <span>{Math.round((papers.length / PAPERS.length) * 100)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-accent transition-all duration-700"
            style={{ width: `${(papers.length / PAPERS.length) * 100}%` }}
          />
        </div>
      </div>

      {papers.length === 0 ? (
        <div className="mt-12 rounded-2xl border-2 border-dashed bg-surface/40 p-8 text-center">
          <div className="mb-2 text-3xl">🏆</div>
          <p className="font-serif text-lg text-foreground">No papers yet</p>
          <p className="mt-1 text-sm text-text-secondary">
            Log moments and reflect — papers find you as you go.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {papers.map((p) => {
            const icon = PAPER_ICONS[p.type] ?? "📜";
            return (
              <button
                key={p.id}
                onClick={() => setOpen(p)}
                className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl border p-5 text-center transition active:scale-95"
                style={{
                  background: paperGradient(p.id),
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/15" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <span className="block text-4xl drop-shadow">{icon}</span>
                  <h3 className="font-serif text-base leading-tight text-white drop-shadow">
                    {p.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-white/80">
                    {format(new Date(p.earnedAt), "MMM d, yyyy")}
                  </p>
                </div>
                <div
                  className="absolute inset-0 z-20 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
                    animation: "shimmer 2s ease-in-out infinite",
                  }}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Unearned papers */}
      {papers.length < PAPERS.length && (
        <div className="mt-10">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Still to earn ({PAPERS.length - papers.length})
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {PAPERS.filter((d) => !papers.some((p) => p.type === d.type)).map((d) => (
              <div
                key={d.type}
                className="flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-border bg-surface/20 p-5 text-center"
              >
                <span className="text-3xl opacity-40">🔒</span>
                <h3 className="font-serif text-base text-foreground/40">{d.title}</h3>
                <p className="text-[10px] text-text-secondary/60">{d.reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detail modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          role="dialog"
          aria-modal
        >
          <div
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />
          <div
            className="relative w-full max-w-xs overflow-hidden rounded-3xl border p-8 text-center"
            style={{
              background: paperGradient(open.id),
              animation: "popIn 280ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-3 top-3 rounded-full bg-white/20 p-1.5 text-white"
            >
              <X size={16} />
            </button>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20" />
            <div className="relative text-white">
              <div className="mb-4 text-8xl leading-none drop-shadow">
                {PAPER_ICONS[open.type] ?? "📜"}
              </div>
              <h2 className="font-serif text-3xl leading-tight drop-shadow">{open.title}</h2>
              <p className="mt-3 text-sm opacity-95">{open.reason}</p>
              <p className="mt-6 text-xs uppercase tracking-wider opacity-80">
                Earned {format(new Date(open.earnedAt), "MMMM d, yyyy")}
              </p>
              <p className="mt-2 font-serif text-lg italic opacity-90">Well earned!</p>
            </div>
            <style>{`@keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: none; } }`}</style>
          </div>
        </div>
      )}
    </div>
  );
}
```

### `src/routes/index.tsx`

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { Plus, Settings as SettingsIcon } from "lucide-react";
import {
  useActivities,
  usePapers,
  useSummaries,
  useSettings,
  useSkippedDays,
} from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import {
  rescheduleAllNotifications,
  scheduleRepeatReminder,
  setupNotificationChannel,
  requestNotificationPermission,
} from "@/lib/tymeline/notifications";
import { ActivityCard } from "@/components/tymeline/ActivityCard";
import { AddActivitySheet } from "@/components/tymeline/AddActivitySheet";
import { format, isToday, isYesterday, differenceInMinutes } from "date-fns";
import { toast } from "sonner";
import type { Activity } from "@/lib/tymeline/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tymeline — Your timeline" },
      { name: "description", content: "Your private daily activity timeline." },
    ],
  }),
  component: TimelinePage,
});

function formatGap(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.round(min / 60);
  return `${h} hour${h > 1 ? "s" : ""}`;
}

function dayLabel(day: string) {
  const d = new Date(day);
  if (isToday(d)) return "Today";
  if (isYesterday(d)) return "Yesterday";
  return format(d, "EEEE, MMM d");
}

function TimelinePage() {
  const [activities, setActivities] = useActivities();
  const [papers, setPapers] = usePapers();
  const [summaries] = useSummaries();
  const [settings] = useSettings();
  const [skippedDays, setSkippedDays] = useSkippedDays();
  const [open, setOpen] = useState(false);
  const [pendingDate, setPendingDate] = useState<Date | undefined>();

  // Redirect onboarding (client-side)
  useEffect(() => {
    if (settings && settings.onboarded === false && typeof window !== "undefined") {
      window.location.assign("/onboarding");
    }
  }, [settings]);

  // Notification channel setup
  useEffect(() => {
    setupNotificationChannel();
  }, []);

  // Permission request on first real use (post-onboarding)
  useEffect(() => {
    if (settings && settings.onboarded !== false && settings.notificationsEnabled !== false) {
      requestNotificationPermission().catch(() => {});
    }
  }, [settings]);

  const sorted = useMemo(
    () => [...activities].sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp)),
    [activities],
  );

  const groups = useMemo(() => {
    const map = new Map<string, typeof sorted>();
    for (const a of sorted) {
      const k = new Date(a.timestamp).toDateString();
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(a);
    }
    return Array.from(map.entries());
  }, [sorted]);

  // Compute all calendar days from earliest activity to today
  const allDays = useMemo(() => {
    if (sorted.length === 0 && skippedDays.length === 0) return [];
    const dates: string[] = [];
    const earliest = sorted.length > 0 ? new Date(sorted[sorted.length - 1].timestamp) : new Date();
    const end = new Date();
    const cur = new Date(earliest);
    // Normalize to date-only range so time-of-day doesn't break the loop
    cur.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    while (cur <= end) {
      dates.push(cur.toDateString());
      cur.setDate(cur.getDate() + 1);
    }
    return dates;
  }, [sorted, skippedDays]);

  const todayCount = activities.filter((a) => isToday(new Date(a.timestamp))).length;

  const onAdd = (activity: Activity) => {
    const next = [activity, ...activities];
    setActivities(next);
    const newPapers = evaluatePapers({
      activities: next,
      existing: papers,
      summariesCount: summaries.length,
    });
    if (newPapers.length) {
      setPapers([...papers, ...newPapers]);
      newPapers.forEach((p) => {
        window.dispatchEvent(new CustomEvent("tymeline:paper-earned", { detail: { paper: p } }));
      });
    }
    toast.success("Logged");
    setPendingDate(undefined);
    if (settings.notificationsEnabled !== false) {
      rescheduleAllNotifications(next, settings.name).catch(() => {});
      const isRepeat = activities.some(
        (a) => a.name.trim().toLowerCase() === activity.name.trim().toLowerCase(),
      );
      if (isRepeat) {
        scheduleRepeatReminder(activity.name).catch(() => {});
      }
    }
  };

  const onDelete = (id: string) => {
    setActivities(activities.filter((a) => a.id !== id));
  };

  const onSkipDay = (day: string) => {
    setSkippedDays([...skippedDays, day]);
  };

  const onLogForDay = (day: string) => {
    setPendingDate(new Date(day));
    setOpen(true);
  };

  const openSheet = () => {
    setPendingDate(undefined);
    setOpen(true);
  };

  // Build a map of day -> activities for quick lookup
  const dayMap = useMemo(() => {
    const m = new Map<string, typeof sorted>();
    for (const a of sorted) {
      const k = new Date(a.timestamp).toDateString();
      if (!m.has(k)) m.set(k, []);
      m.get(k)!.push(a);
    }
    return m;
  }, [sorted]);

  const skippedSet = useMemo(() => new Set(skippedDays), [skippedDays]);

  return (
    <div className="px-5 pt-6">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl text-accent leading-none">Tymeline</h1>
          <p className="mt-1 text-xs text-text-secondary">{format(new Date(), "EEEE, MMM d")}</p>
        </div>
        <Link
          to="/settings"
          aria-label="Settings"
          className="rounded-full border bg-surface p-2.5 text-text-secondary transition active:scale-95"
        >
          <SettingsIcon size={18} />
        </Link>
      </header>

      {sorted.length === 0 && allDays.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-6">
          {allDays.map((day) => {
            const dayActivities = dayMap.get(day);
            const isSkipped = skippedSet.has(day);

            // Actual day with activities
            if (dayActivities && dayActivities.length > 0) {
              return (
                <section key={day}>
                  <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    {dayLabel(day)}
                  </h2>
                  <div className="space-y-2.5">
                    {dayActivities.map((a, i, arr) => {
                      const prev = arr[i - 1];
                      const gap = prev
                        ? differenceInMinutes(new Date(prev.timestamp), new Date(a.timestamp))
                        : 0;
                      return (
                        <div key={a.id}>
                          {gap > 30 ? (
                            <div className="my-2 flex items-center gap-2 px-2 text-[10px] uppercase tracking-wider text-text-secondary">
                              <div className="h-px flex-1 bg-border" />
                              <span>~{formatGap(gap)} gap</span>
                              <div className="h-px flex-1 bg-border" />
                            </div>
                          ) : null}
                          <ActivityCard activity={a} index={i} onDelete={onDelete} />
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            }

            // Skipped day
            if (isSkipped) {
              return (
                <section key={day}>
                  <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    {dayLabel(day)}
                  </h2>
                  <p className="px-1 text-xs italic text-text-secondary">— Skipped</p>
                </section>
              );
            }

            // Pending day (no activities, not skipped)
            return (
              <section key={day}>
                <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {dayLabel(day)}
                </h2>
                <div className="rounded-2xl border-2 border-dashed border-border bg-surface/30 p-4 text-center">
                  <p className="text-sm text-text-secondary">
                    No moments logged — add one or skip this day
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <button
                      onClick={() => onLogForDay(day)}
                      className="rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-accent-foreground transition active:scale-95"
                    >
                      + Log now
                    </button>
                    <button
                      onClick={() => onSkipDay(day)}
                      className="rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-text-secondary transition active:scale-95"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      <button
        onClick={openSheet}
        aria-label="Log activity"
        className={`fixed bottom-24 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 transition active:scale-90 ${todayCount === 0 ? "pulse-ring" : ""}`}
      >
        <Plus size={26} strokeWidth={2.5} />
      </button>

      <AddActivitySheet
        open={open}
        onClose={() => {
          setOpen(false);
          setPendingDate(undefined);
        }}
        onAdd={onAdd}
        defaultDate={pendingDate}
        lastEndTime={
          !pendingDate || pendingDate.toDateString() === new Date().toDateString()
            ? (sorted[0]?.endTime ?? sorted[0]?.timestamp)
            : undefined
        }
      />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mt-20 flex flex-col items-center text-center px-6 float-soft">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft text-3xl">
        ✎
      </div>
      <h2 className="font-serif text-2xl text-foreground">A blank canvas</h2>
      <p className="mt-2 max-w-xs text-sm text-text-secondary">
        Your day is unwritten. Tap the orange button to capture your first moment.
      </p>
    </div>
  );
}
```

### `src/routes/onboarding.tsx`

```tsx
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSettings } from "@/lib/tymeline/storage";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
});

const SLIDES = [
  {
    title: "Your time, your story",
    body: "Tymeline is a quiet, private timeline of your moments. No streaks. No goals. Just you.",
  },
  {
    title: "No pressure, just capture",
    body: "Log what you did, how long, how you felt. Or skip the details. There's no wrong way.",
  },
  {
    title: "Reflect with AI",
    body: "Generate warm, conversational summaries of your weeks and months. Optional — turn it off in Settings.",
  },
];

function OnboardingPage() {
  const [settings, setSettings] = useSettings();
  const [i, setI] = useState(0);
  const [name, setName] = useState("");
  const [why, setWhy] = useState("");
  const [step, setStep] = useState<"slides" | "profile">("slides");
  const nav = useNavigate();

  // Safety guard: if already onboarded, redirect home
  useEffect(() => {
    if (settings.onboarded === true) {
      nav({ to: "/" });
    }
  }, [settings, nav]);

  const next = () => {
    if (i < SLIDES.length - 1) setI(i + 1);
    else setStep("profile");
  };
  const finish = () => {
    setSettings({ ...settings, name: name || undefined, why: why || undefined, onboarded: true });
    nav({ to: "/" });
  };

  return (
    <div className="flex min-h-screen flex-col px-6 pb-8 pt-16">
      {step === "slides" ? (
        <>
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-accent text-3xl text-accent-foreground">
              ✎
            </div>
            <h1 className="font-serif text-4xl leading-tight text-foreground">{SLIDES[i].title}</h1>
            <p className="mt-4 max-w-xs text-base text-text-secondary">{SLIDES[i].body}</p>
          </div>

          <div className="mb-6 flex justify-center gap-1.5">
            {SLIDES.map((_, idx) => (
              <div
                key={idx}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: idx === i ? 24 : 6,
                  backgroundColor: idx === i ? "var(--accent)" : "var(--border)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground active:scale-[0.98] transition"
          >
            {i < SLIDES.length - 1 ? "Next" : "Get started"}
          </button>
          <button onClick={finish} className="mt-2 py-2 text-sm text-text-secondary">
            Skip
          </button>
        </>
      ) : (
        <>
          <div className="flex-1">
            <h1 className="font-serif text-3xl text-foreground">A little about you</h1>
            <p className="mt-2 text-sm text-text-secondary">
              Both optional. You can change these later.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <label className="text-xs font-medium text-text-secondary">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1 w-full rounded-xl border bg-surface px-4 py-3 outline-none focus:border-accent"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-text-secondary">Why you track</label>
                <textarea
                  value={why}
                  onChange={(e) => setWhy(e.target.value)}
                  rows={3}
                  placeholder="To understand my days better…"
                  className="mt-1 w-full resize-none rounded-xl border bg-surface px-4 py-3 outline-none focus:border-accent"
                />
              </div>
            </div>
          </div>
          <button
            onClick={finish}
            className="rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground active:scale-[0.98] transition"
          >
            Begin
          </button>
        </>
      )}
    </div>
  );
}
```

### `src/routes/settings.tsx`

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import {
  useSettings,
  useActivities,
  usePapers,
  useSummaries,
  exportAll,
  importAll,
  clearAll,
} from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import {
  rescheduleAllNotifications,
  requestNotificationPermission,
  cancelAllTymelineNotifications,
} from "@/lib/tymeline/notifications";
import { ChevronLeft, Download, Upload, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Tymeline" },
      { name: "description", content: "Configure Tymeline." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const [settings, setSettings] = useSettings();
  const [activities] = useActivities();
  const [papers, setPapers] = usePapers();
  const [summaries] = useSummaries();
  const fileRef = useRef<HTMLInputElement>(null);

  const update = <K extends keyof typeof settings>(k: K, v: (typeof settings)[K]) =>
    setSettings({ ...settings, [k]: v });

  const onExport = () => {
    const data = exportAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tymeline-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    const newPapers = evaluatePapers({
      activities,
      existing: papers,
      summariesCount: summaries.length,
      didExport: true,
    });
    if (newPapers.length) setPapers([...papers, ...newPapers]);
    toast.success("Backup exported");
  };

  const onImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      importAll(data);
      const newPapers = evaluatePapers({
        activities: data.activities ?? [],
        existing: data.papers ?? [],
        summariesCount: (data.summaries ?? []).length,
        didImport: true,
      });
      if (newPapers.length) {
        importAll({ papers: [...(data.papers ?? []), ...newPapers] });
      }
      toast.success("Data imported");
    } catch {
      toast.error("Invalid backup file");
    }
  };

  const onClear = () => {
    if (confirm("Erase ALL Tymeline data? This cannot be undone.")) {
      clearAll();
      toast.success("All data cleared");
    }
  };

  return (
    <div className="px-5 pt-6">
      <header className="mb-6 flex items-center gap-3">
        <Link to="/" className="rounded-full border bg-surface p-2">
          <ChevronLeft size={18} />
        </Link>
        <h1 className="font-serif text-3xl">Settings</h1>
      </header>

      <Section title="Profile">
        <Field label="Name">
          <input
            value={settings.name ?? ""}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Optional"
            className="w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
        </Field>
        <Field label="Why I track">
          <textarea
            value={settings.why ?? ""}
            onChange={(e) => update("why", e.target.value)}
            placeholder="A line for yourself…"
            rows={2}
            className="w-full resize-none rounded-xl border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
        </Field>
      </Section>

      <Section title="AI Reflection">
        <ToggleRow
          label="Enable AI summaries"
          help="Uses Lovable AI to write reflective summaries. Off uses a local stats summary."
          value={settings.aiEnabled}
          onChange={(v) => update("aiEnabled", v)}
        />
      </Section>

      <Section title="Notifications">
        <ToggleRow
          label="Daily reminders"
          help="Morning, midday, and evening reminders to log your day."
          value={settings.notificationsEnabled ?? true}
          onChange={async (v) => {
            update("notificationsEnabled", v);
            if (v) {
              await requestNotificationPermission();
              rescheduleAllNotifications(activities, settings.name).catch(() => {});
            } else {
              cancelAllTymelineNotifications().catch(() => {});
            }
          }}
        />
      </Section>

      <Section title="Theme">
        <div className="grid grid-cols-3 gap-2">
          {(["system", "light", "dark"] as const).map((t) => {
            const active = settings.theme === t;
            return (
              <button
                key={t}
                onClick={() => update("theme", t)}
                className="rounded-xl border bg-surface py-2.5 text-sm capitalize transition"
                style={{
                  borderColor: active ? "var(--accent)" : "var(--border)",
                  color: active ? "var(--accent)" : "var(--foreground)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Data">
        <button
          onClick={onExport}
          className="flex w-full items-center justify-between rounded-xl border bg-surface px-4 py-3 text-sm"
        >
          <span className="flex items-center gap-3">
            <Download size={16} /> Export backup
          </span>
          <span className="text-xs text-text-secondary">{activities.length} items</span>
        </button>
        <button
          onClick={() => fileRef.current?.click()}
          className="mt-2 flex w-full items-center gap-3 rounded-xl border bg-surface px-4 py-3 text-sm"
        >
          <Upload size={16} /> Import backup
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          onChange={onImport}
          className="hidden"
        />
        <button
          onClick={onClear}
          className="mt-2 flex w-full items-center gap-3 rounded-xl border border-destructive/30 bg-surface px-4 py-3 text-sm text-destructive"
        >
          <Trash2 size={16} /> Clear all data
        </button>
      </Section>

      <Section title="About">
        <p className="text-sm text-text-secondary">Tymeline v0.1</p>
        <p className="mt-1 text-sm text-text-secondary">
          Built with care. No accounts. No cloud. Just you.
        </p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-medium text-text-secondary">{label}</div>
      {children}
    </label>
  );
}

function ToggleRow({
  label,
  help,
  value,
  onChange,
}: {
  label: string;
  help?: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border bg-surface px-4 py-3">
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium">{label}</div>
        {help && <div className="mt-0.5 text-xs text-text-secondary">{help}</div>}
      </div>
      <button
        onClick={() => onChange(!value)}
        role="switch"
        aria-checked={value}
        className="relative h-6 w-11 shrink-0 rounded-full transition"
        style={{ backgroundColor: value ? "var(--accent)" : "var(--border)" }}
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform"
          style={{ transform: value ? "translateX(22px)" : "translateX(2px)" }}
        />
      </button>
    </div>
  );
}
```

### `src/routes/summary.tsx`

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useRef } from "react";
import { useActivities, useSettings, useSummaries, usePapers } from "@/lib/tymeline/storage";
import { evaluatePapers } from "@/lib/tymeline/papers";
import { generateAISummary } from "@/lib/tymeline/ai.functions";
import { useServerFn } from "@tanstack/react-start";
import { MOOD_SCORE } from "@/lib/tymeline/categories";
import { startOfWeek, startOfMonth, format } from "date-fns";
import { Copy, Sparkles, Loader2, Download } from "lucide-react";
import { toast } from "sonner";
import type { SummaryContent, ActivityCategory } from "@/lib/tymeline/types";

export const Route = createFileRoute("/summary")({
  head: () => ({
    meta: [
      { title: "Reflect — Tymeline" },
      { name: "description", content: "Reflect on how you spent your time." },
    ],
  }),
  component: SummaryPage,
});

type Period = "week" | "month" | "all";

function filterByPeriod(activities: ReturnType<typeof useActivities>[0], period: Period) {
  if (period === "all") return activities;
  const from =
    period === "week" ? startOfWeek(new Date(), { weekStartsOn: 1 }) : startOfMonth(new Date());
  return activities.filter((a) => new Date(a.timestamp) >= from);
}

function buildLocalSummary(
  activities: ReturnType<typeof useActivities>[0],
  period: Period,
): string {
  if (activities.length === 0) {
    return "No activities logged for this period yet. Every journey begins with a single step — start capturing your moments to see meaningful patterns emerge over time.";
  }
  const totalMin = activities.reduce((s, a) => s + (a.duration ?? 30), 0);
  const totalHours = Math.round(totalMin / 60);
  const byCat = new Map<string, number>();
  for (const a of activities)
    byCat.set(a.category, (byCat.get(a.category) ?? 0) + (a.duration ?? 30));
  const sortedCats = Array.from(byCat.entries()).sort((a, b) => b[1] - a[1]);
  const topCat = sortedCats[0];
  const moods = activities.filter((a) => a.mood).map((a) => MOOD_SCORE[a.mood!] ?? 3);
  const avgMood = moods.length
    ? (moods.reduce((s, n) => s + n, 0) / moods.length).toFixed(1)
    : null;
  const freq = new Map<string, number>();
  for (const a of activities) freq.set(a.name, (freq.get(a.name) ?? 0) + 1);
  const mostFreq = Array.from(freq.entries()).sort((a, b) => b[1] - a[1])[0];
  const byDay = new Map<string, number>();
  for (const a of activities) {
    const d = new Date(a.timestamp).toDateString();
    byDay.set(d, (byDay.get(d) ?? 0) + 1);
  }
  const longestDay = Array.from(byDay.entries()).sort((a, b) => b[1] - a[1])[0];
  const totalDays = byDay.size;

  const periodLabel =
    period === "week" ? "this week" : period === "month" ? "this month" : "across all time";
  const dayRange = totalDays > 1 ? `over ${totalDays} different days` : "on a single day";

  const paras: string[] = [];

  // Opening paragraph
  paras.push(
    `Looking back ${periodLabel}, I see a story taking shape. You recorded ${activities.length} moment${activities.length > 1 ? "s" : ""} ${dayRange}, giving approximately ${totalHours} hour${totalHours > 1 ? "s" : ""} of your time a name and a place in memory. Each entry is a thread in the larger fabric of your days.`,
  );

  // Category breakdown
  if (sortedCats.length > 0) {
    const catLines = sortedCats.slice(0, 4).map(([cat, min], i) => {
      const pct = Math.round((min / totalMin) * 100);
      return `${cat} claimed ${pct}% of your logged time`;
    });
    const catStr = catLines.join(", ");
    const lastComma = catStr.lastIndexOf(", ");
    const formatted =
      lastComma > 0 ? catStr.slice(0, lastComma) + ", and " + catStr.slice(lastComma + 2) : catStr;
    paras.push(
      `Your time distributed across ${sortedCats.length} categor${sortedCats.length > 1 ? "ies" : "y"} — ${formatted}. ${topCat ? `${topCat[0]} was your dominant theme, accounting for the single largest share of your focus.` : ""}`,
    );
  }

  // Most frequent activity
  if (mostFreq && mostFreq[1] > 1) {
    paras.push(
      `A familiar rhythm emerges: "${mostFreq[0]}" appears ${mostFreq[1]} time${mostFreq[1] > 1 ? "s" : ""}, more than any other activity. This repetition suggests a steady habit or a recurring commitment woven into your routine.`,
    );
  }

  // Longest day
  if (longestDay && longestDay[1] > 1) {
    paras.push(
      `Your most eventful day held ${longestDay[1]} logged moment${longestDay[1] > 1 ? "s" : ""} — a rich and full span of hours. Days like these are worth noticing; they show what a full, engaged day looks like for you.`,
    );
  }

  // Mood reflection
  if (avgMood) {
    const moodDesc =
      Number(avgMood) >= 4
        ? "mostly bright and positive"
        : Number(avgMood) >= 3
          ? "balanced with steady moments"
          : "carrying some weight";
    const moodAdvice =
      Number(avgMood) >= 4
        ? "These positive states are worth protecting — notice what feeds them."
        : Number(avgMood) >= 3
          ? "The balanced stretches are where growth quietly happens."
          : "Even the heavier days are data, not verdicts — they reveal what matters enough to affect you.";
    paras.push(
      `On the emotional side, your average mood settled at ${avgMood} out of 5 — ${moodDesc}. ${moodAdvice}`,
    );
  } else {
    paras.push(
      `No mood data was recorded for this period. Adding a quick emotion marker to each entry paints a richer picture over time and reveals how different activities shape your state of mind.`,
    );
  }

  // Closing reflection
  paras.push(
    `Every moment you capture is an act of attention — a small pause to register that this mattered enough to remember. The patterns here are still emerging, and with each new entry the story becomes clearer. Keep going.`,
  );

  return paras.join(" ");
}

function SummaryPage() {
  const [activities] = useActivities();
  const [settings] = useSettings();
  const [summaries, setSummaries] = useSummaries();
  const [papers, setPapers] = usePapers();
  const [period, setPeriod] = useState<Period>("week");
  const [loading, setLoading] = useState(false);
  const aiFn = useServerFn(generateAISummary);
  const printRef = useRef<HTMLDivElement>(null);

  const scoped = useMemo(() => filterByPeriod(activities, period), [activities, period]);

  const generate = async () => {
    setLoading(true);
    try {
      let content: string;
      let isAI = false;
      if (settings.aiEnabled) {
        const res = await aiFn({
          data: {
            period,
            activities: scoped.map((a) => ({
              name: a.name,
              category: a.category,
              duration: a.duration,
              mood: a.mood,
              timestamp: a.timestamp,
            })),
          },
        });
        content = res.content;
        isAI = true;
      } else {
        content = buildLocalSummary(scoped, period);
      }
      const newSummary = {
        id: crypto.randomUUID(),
        period,
        generatedAt: new Date().toISOString(),
        content,
        isAI,
      };
      const next = [newSummary, ...summaries];
      setSummaries(next);
      const newPapers = evaluatePapers({
        activities,
        existing: papers,
        summariesCount: next.length,
      });
      if (newPapers.length) {
        setPapers([...papers, ...newPapers]);
        newPapers.forEach((p) => {
          window.dispatchEvent(new CustomEvent("tymeline:paper-earned", { detail: { paper: p } }));
        });
      }
    } catch (e) {
      toast.error((e as Error).message ?? "Couldn't generate summary");
    } finally {
      setLoading(false);
    }
  };

  const periodSummaries = summaries.filter((s) => s.period === period);
  const latest = periodSummaries[0];

  return (
    <div className="px-5 pt-6">
      <header className="mb-5">
        <h1 className="font-serif text-3xl text-foreground">Reflect</h1>
        <p className="mt-1 text-sm text-text-secondary">A quiet look back</p>
      </header>

      <div className="mb-5 grid grid-cols-3 gap-2">
        {(["week", "month", "all"] as Period[]).map((p) => {
          const active = period === p;
          return (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className="rounded-2xl border bg-surface p-3 text-center transition"
              style={{
                borderColor: active ? "var(--accent)" : "var(--border)",
                boxShadow: active ? "0 0 0 1px var(--accent) inset" : "none",
              }}
            >
              <div className="font-serif text-base capitalize text-foreground">{p}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-wider text-text-secondary">
                {p === "all" ? "All time" : `This ${p}`}
              </div>
            </button>
          );
        })}
      </div>

      {latest ? (
        <div ref={printRef} className="print-summary">
          <PaperCard summary={latest} />
          <button
            onClick={() => window.print()}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border bg-surface py-3 text-sm font-medium text-foreground transition active:scale-[0.98]"
          >
            <Download size={16} />
            Export as PDF
          </button>
          <p className="mt-1.5 text-center text-[10px] text-text-secondary">
            Opens your browser's print dialog — save as PDF.
          </p>
        </div>
      ) : loading ? (
        <ShimmerCard />
      ) : (
        <div className="rounded-2xl border-2 border-dashed bg-surface/40 p-8 text-center">
          <Sparkles className="mx-auto mb-2 text-accent" size={24} />
          <p className="font-serif text-lg text-foreground">Nothing to reflect on yet</p>
          <p className="mt-1 text-sm text-text-secondary">
            Tap below to {settings.aiEnabled ? "ask AI for" : "compose"} a thoughtful summary.
          </p>
        </div>
      )}

      <button
        onClick={generate}
        disabled={loading || scoped.length === 0}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 font-semibold text-accent-foreground transition active:scale-[0.98] disabled:opacity-40"
      >
        {loading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
        {loading ? "Reflecting…" : latest ? "Regenerate" : "Generate Summary"}
      </button>

      {periodSummaries.length > 1 && (
        <div className="mt-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Past reflections
          </h3>
          <div className="space-y-3">
            {periodSummaries.slice(1).map((s) => (
              <PaperCard key={s.id} summary={s} compact />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function EssayView({ content }: { content: SummaryContent }) {
  const sections: { key: keyof SummaryContent; label: string; color: string; bold?: boolean }[] = [
    { key: "what_you_did", label: "What you did", color: "var(--foreground)" },
    { key: "positives", label: "Positives", color: "#43A047" },
    { key: "negatives", label: "What drained you", color: "#FB8C00" },
    { key: "improvements_must", label: "Must improve", color: "#C0392B" },
    { key: "improvements_nice", label: "Nice to improve", color: "var(--text-secondary)" },
  ];
  return (
    <div className="space-y-4">
      {sections.map(({ key, label, color, bold }) => {
        const text = content[key];
        if (!text || text.trim().length === 0) return null;
        return (
          <div key={key}>
            <h4
              className="mb-1 text-[10px] font-semibold uppercase tracking-wider"
              style={{ color }}
            >
              {label}
            </h4>
            <p
              className="font-serif leading-relaxed text-foreground"
              style={{ fontWeight: bold ? 600 : 400 }}
            >
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function PaperCard({
  summary,
  compact,
}: {
  summary: {
    id: string;
    content: string | SummaryContent;
    generatedAt: string;
    isAI: boolean;
    period: string;
  };
  compact?: boolean;
}) {
  const copy = () => {
    const text =
      typeof summary.content === "string"
        ? summary.content
        : Object.values(summary.content as SummaryContent)
            .filter(Boolean)
            .join("\n\n");
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };

  return (
    <article
      className="paper-texture rounded-2xl border bg-surface p-5 shadow-sm"
      style={{ boxShadow: "0 1px 0 var(--border), 0 8px 24px -16px rgba(0,0,0,0.15)" }}
    >
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-text-secondary">
        <span>
          {summary.isAI ? "AI · " : ""}
          {summary.period} · {format(new Date(summary.generatedAt), "MMM d, h:mm a")}
        </span>
        <button
          onClick={copy}
          aria-label="Copy"
          className="rounded-full p-1.5 hover:bg-accent-soft hover:text-accent"
        >
          <Copy size={13} />
        </button>
      </div>

      {typeof summary.content === "string" ? (
        <p
          className={`font-serif text-foreground leading-relaxed ${compact ? "text-base" : "text-lg"}`}
        >
          {summary.content}
        </p>
      ) : (
        <div className={compact ? "text-base" : "text-lg"}>
          <EssayView content={summary.content as SummaryContent} />
        </div>
      )}
    </article>
  );
}

function ShimmerCard() {
  return (
    <div className="space-y-2 rounded-2xl border bg-surface p-5">
      {[100, 95, 92, 88, 70].map((w, i) => (
        <div key={i} className="h-3 animate-pulse rounded bg-border" style={{ width: `${w}%` }} />
      ))}
    </div>
  );
}
```
