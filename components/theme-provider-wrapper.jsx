'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from './theme-provider';

export function ThemeProviderWrapper({ children, ...props }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider {...props}>
      {/* This div prevents the flash of incorrect theme by hiding content until mounted */}
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </ThemeProvider>
  );
}
