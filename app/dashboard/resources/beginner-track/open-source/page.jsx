import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Github,
  GitCommit,
  BookOpen,
  Users,
  Video,
} from 'lucide-react';

export default function OpenSourceResourcesPage() {
  const sections = [
    {
      title: 'Open Source Contributions',
      description:
        'Learn about open source and make your first ever open source contribution.',
      icon: Users,
      resources: [
        {
          title: 'Introduction to Open Source',
          description: 'Learn what open source is and why it matters.',
          url: 'https://opensource.guide/how-to-contribute/',
        },
        {
          title: 'OpenSauced',
          description:
            'Find open source projects to contribute to and track your progress.',
          url: 'https://opensauced.pizza/',
        },
        {
          title: 'First Contributions Repository',
          description:
            'A hands-on tutorial to make your first open source contribution.',
          url: 'https://github.com/firstcontributions/first-contributions',
        },
        {
          title: 'First Contributions Site',
          description:
            'Another hub of open source projects you can contribute to.',
          url: 'https://firstcontributions.github.io/',
        },
      ],
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold text-primary'>
            Open Source
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Learn about open source and make your first contribution to a
            project.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Should We Make An Open Source Contribution?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Contributing to open source is a valuable experience for any an
            aspiring software developer. It allows you to:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Gain real-world experience by working on actual projects',
              'Collaborate with experienced developers and learn from them',
              'Build a portfolio of work that showcases your skills',
              'Improve your coding skills through peer reviews and feedback',
              'Network with professionals and potential employers',
              'Stand out from other beginners by demonstrating your initiative, commitment & contributions',
              'Make a real-life impact by contributing to projects that are used by people worldwide',
            ].map((item, index) => (
              <li key={index} className='flex items-start'>
                <ArrowRight className='h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-1' />
                <span className='text-gray-700 dark:text-gray-200'>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {sections.map((section, index) => (
        <Card key={index} className='mb-8'>
          <CardHeader>
            <div className='flex items-center space-x-2'>
              <section.icon className='w-6 h-6 text-primary' />
              <CardTitle className='text-2xl font-bold'>
                {section.title}
              </CardTitle>
            </div>
            <CardDescription>{section.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-2'>
              {section.resources.map((resource, resourceIndex) => (
                <Card key={resourceIndex} className='h-full flex flex-col'>
                  <CardHeader>
                    <CardTitle className='text-lg'>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className='flex-grow'>
                    {resource.duration && (
                      <p className='text-sm text-muted-foreground mb-2'>
                        Duration: {resource.duration}
                      </p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button asChild className='w-full'>
                      <Link
                        href={resource.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Explore Resource
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
