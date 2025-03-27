'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from './theme-provider';

export function ThemeProviderWrapper({ children, ...props }) {
  // Use this state to track if we're in the browser
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // On the server or during hydration, render without theme context
  if (!mounted) {
    return <>{children}</>;
  }

  // Once mounted on the client, render with theme context
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
