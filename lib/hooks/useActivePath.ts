import { usePathname } from 'next/navigation';

export function useActivePath() {
  const pathname = usePathname();

  return (path: string) => {
    if (path === '/dashboard' && pathname === '/dashboard') {
      return true;
    }
    if (path !== '/dashboard' && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };
}
