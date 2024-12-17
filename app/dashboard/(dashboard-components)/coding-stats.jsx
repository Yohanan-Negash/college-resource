import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Progress } from '../../../components/ui/progress';
import { Clock, Code, Coffee } from 'lucide-react';

export function CodingStats({ className, ...props }) {
  const hoursThisWeek = 14;
  const linesOfCode = 1200;
  const coffeeConsumed = 9;

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className='text-lg font-medium'>Coding Stats</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='flex items-center space-x-4'>
          <Clock className='h-4 w-4 text-muted-foreground' />
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium'>Hours this week</p>
            <Progress value={(hoursThisWeek / 40) * 100} className='h-2' />
          </div>
          <span className='text-xl font-bold'>{hoursThisWeek}</span>
        </div>
        <div className='flex items-center space-x-4'>
          <Code className='h-4 w-4 text-muted-foreground' />
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium'>Lines of code</p>
            <Progress value={(linesOfCode / 2000) * 100} className='h-2' />
          </div>
          <span className='text-xl font-bold'>{linesOfCode}</span>
        </div>
        <div className='flex items-center space-x-4'>
          <Coffee className='h-4 w-4 text-muted-foreground' />
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium'>Coffee consumed</p>
            <Progress value={(coffeeConsumed / 20) * 100} className='h-2' />
          </div>
          <span className='text-xl font-bold'>{coffeeConsumed}</span>
        </div>
      </CardContent>
    </Card>
  );
}
