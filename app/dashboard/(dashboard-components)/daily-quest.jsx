'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Sparkles, CheckCircle } from 'lucide-react';

const QUESTS = [
  'Implement a new feature',
  'Solve a coding challenge',
  'Contribute to open-source',
  'Write a technical blog post',
  'Pair program for 1 hour',
];

export function DailyQuest({ className, ...props }) {
  const [quest, setQuest] = useState(null);
  const [completed, setCompleted] = useState(false);

  const selectNewQuest = () => {
    setQuest(QUESTS[Math.floor(Math.random() * QUESTS.length)]);
    setCompleted(false);
  };

  useEffect(() => {
    selectNewQuest();
  }, []);

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle className='text-lg font-medium flex items-center'>
          <Sparkles className='mr-2 h-5 w-5 text-yellow-500' />
          Daily Quest
        </CardTitle>
      </CardHeader>
      <CardContent>
        {quest && (
          <div className='space-y-4'>
            <p className='text-sm'>{quest}</p>
            <Button
              onClick={() => setCompleted((prev) => !prev)}
              variant={completed ? 'outline' : 'default'}
              className='w-full text-sm'
            >
              {completed ? (
                <>
                  <CheckCircle className='mr-2 h-4 w-4' />
                  Completed
                </>
              ) : (
                'Mark as Complete'
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
