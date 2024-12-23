'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Code,
  Database,
  BarChart,
  GitMerge,
  PenTool,
  Smartphone,
  Cpu,
  Gamepad,
} from 'lucide-react';

export default function Roadmaps() {
  const roadmaps = [
    {
      title: 'Frontend Development',
      description:
        'Master HTML, CSS, JavaScript, and popular frontend frameworks.',
      icon: Code,
      url: '/roadmaps/frontend',
      resources: [
        {
          name: 'Frontend Masters',
          url: 'https://frontendmasters.com/',
          type: 'Course Platform',
        },
        {
          name: 'MDN Web Docs',
          url: 'https://developer.mozilla.org/en-US/',
          type: 'Documentation',
        },
        {
          name: 'CSS-Tricks',
          url: 'https://css-tricks.com/',
          type: 'Blog & Tutorials',
        },
      ],
    },
    {
      title: 'Backend Development',
      description:
        'Learn server-side programming, databases, and API development.',
      icon: Database,
      url: '/roadmaps/backend',
      resources: [
        {
          name: 'Backend Roadmap',
          url: 'https://roadmap.sh/backend',
          type: 'Learning Path',
        },
        {
          name: 'Node.js Documentation',
          url: 'https://nodejs.org/en/docs/',
          type: 'Documentation',
        },
        {
          name: 'PostgreSQL Tutorial',
          url: 'https://www.postgresqltutorial.com/',
          type: 'Tutorial',
        },
      ],
    },
    {
      title: 'Full-Stack Development',
      description:
        'Combine frontend and backend skills to build complete web applications.',
      icon: BarChart,
      url: '/roadmaps/fullstack',
      resources: [
        {
          name: 'Full-Stack Roadmap',
          url: 'https://roadmap.sh/full-stack',
          type: 'Learning Path',
        },
        {
          name: 'The Odin Project',
          url: 'https://www.theodinproject.com/',
          type: 'Course',
        },
        {
          name: 'freeCodeCamp',
          url: 'https://www.freecodecamp.org/',
          type: 'Course Platform',
        },
      ],
    },
    {
      title: 'DevOps',
      description:
        'Master the practices of DevOps, including CI/CD, containerization, and cloud services.',
      icon: GitMerge,
      url: '/roadmaps/devops',
      resources: [
        {
          name: 'DevOps Roadmap',
          url: 'https://roadmap.sh/devops',
          type: 'Learning Path',
        },
        {
          name: 'Docker Get Started',
          url: 'https://docs.docker.com/get-started/',
          type: 'Documentation',
        },
        {
          name: 'Kubernetes Basics',
          url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
          type: 'Tutorial',
        },
      ],
    },
    {
      title: 'UI/UX Design',
      description:
        'Learn design principles, user research, and prototyping tools.',
      icon: PenTool,
      url: '/roadmaps/ui-ux-design',
      resources: [
        {
          name: 'Interaction Design Foundation',
          url: 'https://www.interaction-design.org/',
          type: 'Course Platform',
        },
        {
          name: 'UX Mastery',
          url: 'https://uxmastery.com/',
          type: 'Blog & Tutorials',
        },
        {
          name: 'Google UX Design Course',
          url: 'https://www.coursera.org/professional-certificates/google-ux-design',
          type: 'Course',
        },
      ],
    },
    {
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications.',
      icon: Smartphone,
      url: '/roadmaps/mobile-development',
      resources: [
        {
          name: 'Android Developers',
          url: 'https://developer.android.com/courses',
          type: 'Course Platform',
        },
        {
          name: 'iOS Developer Road Map',
          url: 'https://github.com/BohdanOrlov/iOS-Developer-Roadmap',
          type: 'GitHub Repository',
        },
        {
          name: 'React Native Documentation',
          url: 'https://reactnative.dev/docs/getting-started',
          type: 'Documentation',
        },
      ],
    },
    {
      title: 'Data Science & AI',
      description:
        'Explore data analysis, machine learning, and artificial intelligence.',
      icon: Cpu,
      url: '/roadmaps/data-science-ai',
      resources: [
        {
          name: 'Data Science Dojo',
          url: 'https://datasciencedojo.com/',
          type: 'Course Platform',
        },
        {
          name: 'Kaggle Learn',
          url: 'https://www.kaggle.com/learn',
          type: 'Tutorials & Datasets',
        },
        { name: 'Fast.ai', url: 'https://www.fast.ai/', type: 'Course' },
      ],
    },
    {
      title: 'Game Development',
      description:
        'Create games using popular engines and programming languages.',
      icon: Gamepad,
      url: '/roadmaps/game-development',
      resources: [
        {
          name: 'Unity Learn',
          url: 'https://learn.unity.com/',
          type: 'Course Platform',
        },
        {
          name: 'Unreal Engine Documentation',
          url: 'https://docs.unrealengine.com/',
          type: 'Documentation',
        },
        {
          name: 'Game Dev.tv',
          url: 'https://www.gamedev.tv/',
          type: 'Course Platform',
        },
      ],
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>
            Tech Career Roadmaps
          </CardTitle>
          <CardDescription className='text-lg'>
            Explore curated learning paths for various tech careers. Each
            roadmap provides a step-by-step guide to help you achieve your
            goals.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {roadmaps.map((roadmap) => (
          <Card key={roadmap.title} className='flex flex-col'>
            <CardHeader>
              <div className='flex items-center space-x-4'>
                <div className='p-2 bg-primary/10 rounded-full'>
                  <roadmap.icon className='h-6 w-6 text-primary' />
                </div>
                <CardTitle className='text-xl'>{roadmap.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className='flex-grow'>
              <p className='text-muted-foreground mb-4'>
                {roadmap.description}
              </p>
              <h4 className='font-semibold mb-2'>Key Resources:</h4>
              <ul className='list-disc list-inside space-y-1 text-sm text-muted-foreground mb-4'>
                {roadmap.resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline'
                    >
                      {resource.name}
                    </Link>
                    <span className='text-xs ml-1'>({resource.type})</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardContent className='pt-0'>
              <Button asChild className='w-full'>
                <Link href={roadmap.url}>
                  Explore Roadmap <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
