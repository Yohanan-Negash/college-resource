import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Flame } from 'lucide-react';

export function CodingStreak({ className, ...props }) {
  const streakDays = 7;
  const longestStreak = 14;

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Flame className='h-5 w-5 text-orange-500' />
          Coding Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-center'>
          <div className='text-5xl font-bold text-orange-500 mb-2'>
            {streakDays}
          </div>
          <p className='text-xl font-semibold'>Days in a row</p>
          <p className='text-sm text-muted-foreground mt-1'>
            Longest streak: {longestStreak} days
          </p>
        </div>
        <div className='mt-4 flex justify-center space-x-1'>
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full ${
                i < streakDays ? 'bg-orange-500' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
