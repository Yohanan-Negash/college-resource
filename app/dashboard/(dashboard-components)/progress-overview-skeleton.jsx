import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Skeleton } from '../../../components/ui/skeleton';
import { BarChart } from 'lucide-react';

export function ProgressOverviewSkeleton({ className, ...props }) {
  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className='text-lg font-medium flex items-center gap-2'>
          <BarChart className='h-5 w-5 text-blue-500' />
          Your Progress
        </CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className='flex flex-col items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-lg'
            >
              <Skeleton className='h-8 w-8 rounded-full mb-2' />
              <Skeleton className='h-6 w-16 mb-1' />
              <Skeleton className='h-4 w-12' />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
