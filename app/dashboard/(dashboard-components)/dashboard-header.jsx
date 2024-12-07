import { cn } from '../../../lib/utils';
import { Code, Rocket } from 'lucide-react';

export function DashboardHeader({ heading, text, children }) {
  return (
    <div className='flex flex-col space-y-2 md:space-y-4 mb-8'>
      <div className='flex items-center space-x-2'>
        <div className='p-2 bg-primary rounded-full'>
          <Code className='h-6 w-6 text-primary-foreground' />
        </div>
        <h1 className='text-3xl font-bold tracking-tight'>{heading}</h1>
      </div>
      {text && (
        <div className='flex items-center space-x-2 text-muted-foreground'>
          <Rocket className='h-4 w-4' />
          <p className='text-lg'>{text}</p>
        </div>
      )}
      {children}
    </div>
  );
}
