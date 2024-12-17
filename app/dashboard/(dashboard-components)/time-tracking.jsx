import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Progress } from '../../../components/ui/progress';
import { Clock, Calendar, Target, Timer } from 'lucide-react';

export function TimeTracking({ className, ...props }) {
  const hoursToday = 4;
  const hoursThisWeek = 22;
  const weeklyGoal = 30;
  const focusTime = 120; // in minutes

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className='text-lg font-medium flex items-center gap-2'>
          <Clock className='h-5 w-5 text-indigo-500' />
          Time Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='flex items-center space-x-4'>
          <Timer className='h-5 w-5 text-yellow-500 dark:text-yellow-400' />
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium'>Today coding time</p>
            <Progress value={(hoursToday / 8) * 100} className='h-2' />
          </div>
          <span className='text-xl font-bold text-yellow-600 dark:text-yellow-400'>
            {hoursToday}h
          </span>
        </div>
        <div className='flex items-center space-x-4'>
          <Calendar className='h-5 w-5 text-pink-500 dark:text-pink-400' />
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium'>This week</p>
            <Progress
              value={(hoursThisWeek / weeklyGoal) * 100}
              className='h-2'
            />
          </div>
          <span className='text-xl font-bold text-pink-600 dark:text-pink-400'>
            {hoursThisWeek}h
          </span>
        </div>
        <div className='flex items-center space-x-4'>
          <Target className='h-5 w-5 text-cyan-500 dark:text-cyan-400' />
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium'>Weekly goal</p>
            <p className='text-xs text-muted-foreground'>
              {hoursThisWeek}/{weeklyGoal} hours
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <Clock className='h-5 w-5 text-teal-500 dark:text-teal-400' />
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium'>Focus time today</p>
            <p className='text-xs text-muted-foreground'>
              {Math.floor(focusTime / 60)}h {focusTime % 60}m
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
