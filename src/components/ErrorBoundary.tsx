import React, { useState, useEffect, ReactNode } from 'react';

interface Props {
  children: React.ReactNode;
  errorComponent: React.ReactNode
}

const ErrorBoundary: React.FC<Props> = ({ children,errorComponent }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleWindowError = (event: ErrorEvent) => {
      console.error('Unhandled error caught by error boundary:', event.error);
      setHasError(true);
    };

    window.addEventListener('error', handleWindowError);

    return () => {
      window.removeEventListener('error', handleWindowError);
    };
  }, []);

  if (hasError) {
    return errorComponent; // Render the errorComponent if there's an error
  }

  return <>{children}</>;
}

export default ErrorBoundary;
