'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import {
  Book,
  Code,
  GitMerge,
  Users,
  BarChart,
  ExternalLink,
  Database,
} from 'lucide-react';

export default function SkillsAndResources() {
  const programmingLanguages = [
    {
      name: 'Python',
      url: 'https://www.freecodecamp.org/learn',
      icon: Code,
      description:
        'Beginner-friendly and versatile for automation, data science, and more.',
    },
    {
      name: 'JavaScript',
      url: 'https://javascript.info/',
      icon: Code,
      description: 'Essential for building modern web applications.',
    },
    {
      name: 'SQL',
      url: 'https://www.w3schools.com/sql/',
      icon: Database,
      description: 'Learn to query and manage databases efficiently.',
    },
    {
      name: 'Java',
      url: 'https://www.udemy.com/course/java-programming-tutorial-for-beginners/',
      icon: Code,
      description: 'A must-know language for backend and mobile development.',
    },
    {
      name: 'C++',
      url: 'https://www.learncpp.com/',
      icon: Code,
      description: 'Ideal for competitive programming and system design.',
    },
  ];

  const toolsAndSoftware = [
    {
      name: 'Git & GitHub',
      url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
      icon: GitMerge,
      description: 'Version control and collaboration made easy.',
    },
    {
      name: 'VS Code',
      url: 'https://code.visualstudio.com/',
      icon: Code,
      description: 'Powerful code editor for all programming needs.',
    },
    {
      name: 'Docker',
      url: 'https://docker.com/',
      icon: Database,
      description: 'Containerize applications & manage deployments.',
    },
    {
      name: 'AWS Free Tier',
      url: 'https://aws.amazon.com/free/',
      icon: Database,
      description: 'Learn cloud services and hosting basics.',
    },
  ];

  const learningPaths = [
    {
      name: 'Frontend Development',
      url: 'https://frontendmasters.com/',
      icon: Code,
      description: 'Learn HTML, CSS, JavaScript & frameworks.',
    },
    {
      name: 'Backend Development',
      url: 'https://roadmap.sh/backend',
      icon: Database,
      description: 'Master server-side coding and APIs.',
    },
    {
      name: 'Full-Stack Development',
      url: 'https://roadmap.sh/full-stack',
      icon: BarChart,
      description: 'Combine frontend and backend skills.',
    },
    {
      name: 'Data Science & AI',
      url: 'https://datasciencedojo.com/',
      icon: BarChart,
      description: 'Analyze data and explore machine learning.',
    },
    {
      name: 'DevOps',
      url: 'https://roadmap.sh/devops',
      icon: GitMerge,
      description: 'Build CI/CD pipelines and deploy software.',
    },
    {
      name: 'Mobile App Development',
      url: 'https://developer.android.com/courses',
      icon: Code,
      description: 'Create apps for Android and iOS.',
    },
    {
      name: 'Blockchain Development',
      url: 'https://ethereum.org/en/developers/',
      icon: Database,
      description: 'Build smart contracts and block chain apps.',
    },
    {
      name: 'Game Development',
      url: 'https://learn.unity.com/',
      icon: Code,
      description: 'Design games with Unity or Unreal.',
    },
    {
      name: 'UI/UX Design',
      url: 'https://www.interaction-design.org/',
      icon: Book,
      description: 'Learn design principles and workflows.',
    },
  ];

  const Section = ({ title, description, items }) => (
    <Card className='mb-8'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4 sm:grid-cols-2'>
          {items.map((item) => (
            <Card key={item.name} className='overflow-hidden'>
              <CardContent className='p-0'>
                <Button
                  variant='ghost'
                  className='w-full h-full justify-start py-4 px-4 hover:bg-accent'
                  asChild
                >
                  <Link
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='flex items-start space-x-4 w-full'>
                      <item.icon className='h-5 w-5 mt-1 flex-shrink-0' />
                      <div className='flex-grow min-w-0'>
                        <div className='font-semibold truncate'>
                          {item.name}
                        </div>
                        <div className='text-xs text-muted-foreground mt-1 line-clamp-2'>
                          {item.description}
                        </div>
                      </div>
                      <ExternalLink className='h-4 w-4 mt-1 flex-shrink-0 opacity-50' />
                    </div>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className='container mx-auto p-6 max-w-4xl'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>
            Skills & Resources
          </CardTitle>
          <CardDescription className='text-lg'>
            Your go-to hub for learning programming languages, tools, and
            essential skills.
          </CardDescription>
        </CardHeader>
      </Card>

      <Section
        title='Programming Languages'
        description='Start learning the most in-demand languages today.'
        items={programmingLanguages}
      />

      <Section
        title='Learning Paths'
        description='Follow curated paths to master key skills step-by-step.'
        items={learningPaths}
      />

      <Section
        title='Tools & Software'
        description='Explore essential tools for modern development.'
        items={toolsAndSoftware}
      />
    </div>
  );
}
