import PropTypes from 'prop-types';

export function ComingSoonFeatureTeaser({ icon: Icon, title }) {
  return (
    <div className='group relative overflow-hidden rounded-md p-2'>
      {/* Gradient background */}
      <div className='absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/5 opacity-75'></div>

      {/* Icon and title */}
      <div className='relative flex items-center gap-3 text-sm'>
        {Icon && <Icon className='h-4 w-4 text-secondary' />}
        <span className='font-medium text-secondary'>{title}</span>
      </div>

      {/* Hover overlay */}
      <div className='absolute inset-0 bg-secondary/10 opacity-0 transition-opacity group-hover:opacity-100'></div>
      <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100'>
        <span className='rounded-full bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground'>
          Coming Soon
        </span>
      </div>
    </div>
  );
}

ComingSoonFeatureTeaser.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

ComingSoonFeatureTeaser.defaultProps = {
  icon: null,
  title: 'Coming Soon',
};
