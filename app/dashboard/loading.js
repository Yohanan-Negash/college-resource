'use client';

import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-background text-foreground'>
      <Loader className='animate-spin text-primary w-16 h-16' />
    </div>
  );
}
