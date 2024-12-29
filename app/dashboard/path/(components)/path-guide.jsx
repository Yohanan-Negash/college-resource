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
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const useProgress = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const storedProgress = localStorage.getItem('foundationProgress');
    if (storedProgress) {
      setProgress(JSON.parse(storedProgress));
    }
  }, []);

  const updateProgress = useCallback((topicSlug, completedSteps) => {
    setProgress((prevProgress) => {
      const newProgress = { ...prevProgress, [topicSlug]: completedSteps };
      localStorage.setItem('foundationProgress', JSON.stringify(newProgress));
      return newProgress;
    });
  }, []);

  return { progress, updateProgress };
};

export function PathGuide({ title, description, steps, pathSlug }) {
  const [currentSteps, setCurrentSteps] = useState(steps);
  const router = useRouter();
  const { progress, updateProgress } = useProgress();

  useEffect(() => {
    const storedProgress = progress[pathSlug] || [];
    const updatedSteps = steps.map((step, index) => ({
      ...step,
      completed: Array.isArray(storedProgress)
        ? storedProgress.includes(index)
        : false,
    }));
    setCurrentSteps(updatedSteps);
  }, [steps, pathSlug, progress]);

  const handleToggleStep = (index) => {
    setCurrentSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step, i) =>
        i === index ? { ...step, completed: !step.completed } : step
      );
      const completedIndices = updatedSteps
        .map((step, i) => (step.completed ? i : -1))
        .filter((i) => i !== -1);
      updateProgress(pathSlug, completedIndices);
      return updatedSteps;
    });
  };

  const calculateProgress = useCallback(() => {
    const completedSteps = currentSteps.filter((step) => step.completed).length;
    return Math.round((completedSteps / currentSteps.length) * 100);
  }, [currentSteps]);

  const [progressPercentage, setProgressPercentage] = useState(
    calculateProgress()
  );

  useEffect(() => {
    setProgressPercentage(calculateProgress());
  }, [currentSteps, calculateProgress]);

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
            Complete all steps to finish this path
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
              <p className='text-muted-foreground'>{step.description}</p>
              <div className='mt-4 flex justify-end'>
                <Button onClick={() => handleToggleStep(index)}>
                  {step.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                </Button>
                <Button variant='outline' className='ml-2' asChild>
                  <Link
                    href={`/dashboard/resources/${pathSlug}/${step.resourcePath}`}
                  >
                    View Resources
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
