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
  ExternalLink,
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
          icon: BookOpen,
          type: 'Guide',
        },
        {
          title: 'OpenSauced',
          description:
            'Find open source projects to contribute to and track your progress.',
          url: 'https://opensauced.pizza/',
          icon: Github,
          type: 'Platform',
        },
        {
          title: 'First Contributions Repository',
          description:
            'A hands-on tutorial to make your first open source contribution.',
          url: 'https://github.com/firstcontributions/first-contributions',
          icon: GitCommit,
          type: 'Tutorial',
        },
        {
          title: 'First Contributions Site',
          description:
            'Another hub of open source projects you can contribute to.',
          url: 'https://firstcontributions.github.io/',
          icon: Github,
          type: 'Resource',
        },
      ],
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Guide':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'Platform':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'Tutorial':
        return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'Resource':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
      default:
        return 'bg-gray-500/10 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center gap-3'>
            <div className='p-2 rounded-md bg-purple-500/10'>
              <Github className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Open Source
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground ml-11'>
            Learn about open source and make your first contribution to a
            project.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <BookOpen className='h-6 w-6 text-yellow-500' />
            </div>
            Why Should We Make An Open Source Contribution?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>
            Contributing to open source is a valuable experience for any an
            aspiring software developer. It allows you to:
          </p>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Gain real-world experience by working on actual projects',
              'Collaborate with experienced developers and learn from them',
              'Build a portfolio of work that showcases your skills',
              'Improve your coding skills through peer reviews and feedback',
              'Network with professionals and potential employers',
              'Stand out from other beginners by demonstrating your initiative, commitment & contributions',
              'Make a real-life impact by contributing to projects that are used by people worldwide',
            ].map((item, index) => (
              <li key={index} className='flex items-start group'>
                <ArrowRight className='h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5' />
                <span className='text-gray-700 dark:text-gray-200'>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {sections.map((section, index) => (
        <Card
          key={index}
          className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'
        >
          <CardHeader>
            <div className='flex items-center space-x-3'>
              <div className='p-2 rounded-md bg-purple-500/10'>
                <section.icon className='h-6 w-6 text-purple-500' />
              </div>
              <CardTitle className='text-2xl font-bold'>
                {section.title}
              </CardTitle>
            </div>
            <CardDescription>{section.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-2'>
              {section.resources.map((resource, resourceIndex) => (
                <Card
                  key={resourceIndex}
                  className='h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.1)] dark:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300'
                >
                  <CardHeader className='pb-2'>
                    <div className='flex justify-between items-start'>
                      <div className='flex items-center gap-2'>
                        <div
                          className={`p-1.5 rounded-md ${
                            getTypeColor(resource.type).split(' ')[0]
                          }`}
                        >
                          {resource.icon && (
                            <resource.icon
                              className={`h-4 w-4 ${
                                getTypeColor(resource.type).split(' ')[1]
                              }`}
                            />
                          )}
                        </div>
                        <CardTitle className='text-lg'>
                          {resource.title}
                        </CardTitle>
                      </div>
                      {resource.type && (
                        <div
                          className={`text-xs px-2 py-1 rounded-full ${getTypeColor(
                            resource.type
                          )}`}
                        >
                          {resource.type}
                        </div>
                      )}
                    </div>
                    <CardDescription className='mt-2'>
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='flex-grow pt-0'>
                    {resource.duration && (
                      <p className='text-sm text-muted-foreground mb-2'>
                        Duration: {resource.duration}
                      </p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button asChild className='w-full group'>
                      <Link
                        href={resource.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Explore Resource
                        <ExternalLink className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
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
