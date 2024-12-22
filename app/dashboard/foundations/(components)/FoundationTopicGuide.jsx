'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Implement useProgress hook
const useProgress = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    // Load progress from localStorage on component mount
    const storedProgress = localStorage.getItem('foundationProgress');
    if (storedProgress) {
      setProgress(JSON.parse(storedProgress));
    }
  }, []);

  const updateProgress = useCallback((topicSlug, completedSteps) => {
    setProgress((prevProgress) => {
      const newProgress = { ...prevProgress, [topicSlug]: completedSteps };
      // Save progress to localStorage
      localStorage.setItem('foundationProgress', JSON.stringify(newProgress));
      return newProgress;
    });
  }, []);

  return { progress, updateProgress };
};

export function FoundationTopicGuide({ title, description, steps, topicSlug }) {
  const [currentSteps, setCurrentSteps] = useState(steps);
  const { progress, updateProgress } = useProgress();

  useEffect(() => {
    const storedProgress = progress[topicSlug] || 0;
    const updatedSteps = steps.map((step, index) => ({
      ...step,
      completed: index < storedProgress,
    }));
    setCurrentSteps(updatedSteps);
  }, [steps, topicSlug, progress]);

  const handleCompleteStep = (index) => {
    const updatedSteps = [...currentSteps];
    updatedSteps[index].completed = true;
    setCurrentSteps(updatedSteps);
    const completedSteps = updatedSteps.filter((step) => step.completed).length;
    updateProgress(topicSlug, completedSteps);
  };

  const progressPercentage = Math.round(
    (currentSteps.filter((step) => step.completed).length /
      currentSteps.length) *
      100
  );

  return (
    <div className='space-y-8'>
      <div className='space-y-2'>
        <h2 className='text-3xl font-bold tracking-tight'>{title}</h2>
        <p className='text-muted-foreground'>{description}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
          <CardDescription>
            Complete all steps to master this foundation topic
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-2'>
            <div className='flex justify-between text-sm'>
              <span>Overall Completion</span>
              <span>{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} />
          </div>
        </CardContent>
      </Card>

      <div className='space-y-4'>
        {currentSteps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <CardTitle className='flex items-center gap-2'>
                  {step.completed ? (
                    <CheckCircle className='h-5 w-5 text-green-500' />
                  ) : (
                    <Circle className='h-5 w-5 text-muted-foreground' />
                  )}
                  {step.title}
                </CardTitle>
                <Badge variant={step.completed ? 'secondary' : 'outline'}>
                  {step.completed ? 'Completed' : 'In Progress'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground mb-4'>{step.description}</p>
              <h4 className='font-semibold mb-2'>Resources:</h4>
              <ul className='list-disc list-inside mb-4 space-y-2'>
                {step.resources.map((resource, idx) => (
                  <li key={idx} className='flex items-center'>
                    <span className='mr-2'>{resource.name}</span>
                    <Badge variant='outline' className='mr-2'>
                      {resource.type}
                    </Badge>
                    {resource.duration && (
                      <span className='text-sm text-muted-foreground mr-2'>
                        {resource.duration}
                      </span>
                    )}
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary hover:underline inline-flex items-center'
                    >
                      <ExternalLink className='h-4 w-4 mr-1' />
                      Open
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='flex justify-end'>
                {!step.completed && (
                  <Button onClick={() => handleCompleteStep(index)}>
                    Mark as Complete
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
