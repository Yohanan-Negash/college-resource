'use client';

import React from 'react';
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
import { ArrowRight, BookOpen, Laptop, Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const paths = [
  {
    title: 'Beginner Track',
    description: 'Start your tech journey here',
    progress: 0,
    icon: BookOpen,
    steps: ['Programming Basics', 'Web Fundamentals', 'Version Control'],
    difficulty: 'Beginner',
  },
  {
    title: 'Startup Track',
    description: 'Build practical skills for startups',
    progress: 0,
    icon: Laptop,
    steps: ['Full-Stack Development', 'Product Skills', 'Rapid Prototyping'],
    difficulty: 'Intermediate',
  },
  {
    title: 'FAANG Track',
    description: 'Prepare for big tech companies',
    progress: 0,
    icon: Building2,
    steps: ['Data Structures', 'Algorithms', 'System Design'],
    difficulty: 'Advanced',
  },
];

export function StartHereGuide() {
  const router = useRouter();

  const handleStartPath = (pathTitle) => {
    router.push(
      `/dashboard/path/${pathTitle.toLowerCase().replace(/\s+/g, '-')}`
    );
  };

  return (
    <div className='space-y-8'>
      <div className='space-y-2'>
        <h2 className='text-3xl font-bold tracking-tight'>
          Start Your Tech Journey Here!
        </h2>
        <p className='text-muted-foreground'>
          Choose your path based on your goals and experience level.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        {paths.map((path) => (
          <Card key={path.title} className='relative overflow-hidden'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <path.icon className='h-8 w-8 text-primary' />
                <Badge
                  variant={
                    path.difficulty === 'Beginner'
                      ? 'secondary'
                      : path.difficulty === 'Intermediate'
                      ? 'default'
                      : 'destructive'
                  }
                >
                  {path.difficulty}
                </Badge>
              </div>
              <CardTitle>{path.title}</CardTitle>
              <CardDescription>{path.description}</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                {path.steps.map((step, index) => (
                  <div key={step} className='flex items-center gap-2'>
                    <div className='flex h-6 w-6 items-center justify-center rounded-full border text-sm'>
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <div className='space-y-2'>
                <div className='flex justify-between text-sm'>
                  <span>Progress</span>
                  <span>{path.progress}%</span>
                </div>
                <Progress value={path.progress} />
              </div>
              <Button
                className='w-full'
                onClick={() => handleStartPath(path.title)}
              >
                Start This Path
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
