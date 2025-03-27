export function ComingSoonFeatureTeaser({ icon: Icon, title }) {
  return (
    <div
      className='group relative overflow-hidden rounded-md p-2 transition-all duration-300 ease-in-out data-[collapsible=icon]:p-1 data-[collapsible=icon]:w-8 data-[collapsible=icon]:h-8'
      data-collapsible='auto'
    >
      {/* Gradient background */}
      <div className='absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/5 opacity-75'></div>

      {/* Icon and title */}
      <div className='relative flex items-center gap-3 text-sm group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:h-full'>
        {Icon && <Icon className='h-4 w-4 text-secondary' aria-hidden='true' />}
        <span className='font-medium text-secondary group-data-[collapsible=icon]:hidden'>
          {title}
        </span>
      </div>

      {/* Hover overlay for expanded state only */}
      <div className='absolute inset-0 bg-secondary/10 opacity-0 transition-opacity group-hover:opacity-100 group-data-[collapsible=icon]:hidden'></div>
      <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 group-data-[collapsible=icon]:hidden'>
        <span className='rounded-full bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground'>
          Coming Soon
        </span>
      </div>

      {/* Hidden text for screen readers */}
      <span className='sr-only'>{title} - Coming Soon</span>
    </div>
  );
}
