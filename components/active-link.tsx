'use client';

import Link from 'next/link';
import { useActivePath } from '@/lib/hooks/useActivePath';
import { cn } from '../lib/utils';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ActiveLink({ href, children, className }: ActiveLinkProps) {
  const isActive = useActivePath();

  return (
    <Link
      href={href}
      className={cn(
        className,
        isActive(href) && 'bg-sidebar-accent text-sidebar-accent-foreground'
      )}
    >
      {children}
    </Link>
  );
}
