import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="h-[100vh] flex justify-center items-center px-6">
        <div role="alert" className="alert alert-error">
            <p>Something went wrong</p>
            <pre>{error?.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    </div>
  );
}

export default function ErrorBoundaryUI({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
