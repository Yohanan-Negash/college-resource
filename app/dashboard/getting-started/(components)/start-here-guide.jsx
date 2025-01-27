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
    steps: [
      'Programming Basics',
      'Web Fundamentals',
      'Version Control',
      'Open Source',
    ],
    difficulty: 'Beginner',
  },
  {
    title: 'Startup Track',
    description: 'Build practical skills for startups',
    progress: 0,
    icon: Laptop,
    steps: [
      'Full-Stack Development',
      'Product Skills',
      'Rapid Prototyping',
      'Agile',
    ],
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
        <h2 className='text-3xl font-bold tracking-tight text-primary'>
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
            <CardContent className='flex flex-col justify-between h-[200px]'>
              <div
                className='overflow-y-auto pr-2'
                style={{ maxHeight: '150px' }}
              >
                {path.steps.map((step, index) => (
                  <div key={step} className='flex items-center gap-2 mb-2'>
                    <div className='flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-sm'>
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <Button
                className='w-full mt-4'
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
