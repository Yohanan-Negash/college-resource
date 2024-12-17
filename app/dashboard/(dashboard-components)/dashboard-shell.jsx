import { cn } from '../../../lib/utils';

export function DashboardShell({ children, className, ...props }) {
  return (
    <div
      className={cn('container mx-auto p-4 sm:p-6 lg:p-8', className)}
      {...props}
    >
      {children}
    </div>
  );
}
