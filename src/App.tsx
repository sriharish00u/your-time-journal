import React, { type ReactNode } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/tymeline/ThemeProvider";
import { TabBar } from "@/components/tymeline/TabBar";
import { PaperEarnedNotification } from "@/components/tymeline/PaperEarnedNotification";
import { Toaster } from "sonner";
import { TimelinePage } from "./routes/index";
import { AnalyticsPage } from "./routes/analytics";
import { CollectionPage } from "./routes/collection";
import { OnboardingPage } from "./routes/onboarding";
import { SettingsPage } from "./routes/settings";
import { SummaryPage } from "./routes/summary";

function NotFoundPage() {
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

function ErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
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
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

class ErrorBoundary extends React.Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error) {
    console.error(error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error!}
          reset={() => this.setState({ hasError: false, error: null })}
        />
      );
    }
    return this.props.children;
  }
}

function Layout() {
  return (
    <div className="mx-auto min-h-screen max-w-md pb-24">
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary fallback={null}>
      <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<TimelinePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <TabBar />
        <PaperEarnedNotification />
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
