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
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Github,
  GitCommit,
  BookOpen,
  Video,
  ExternalLink,
  Clock,
} from 'lucide-react';

export default function VersionControlResourcesPage() {
  const foundationResources = [
    {
      title: 'Git Tutorial for Beginners',
      description: 'A simple tutorial for getting started with git.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=CvUiKWv2-C0',
      duration: '36 minutes',
      icon: Video,
    },
    {
      title: 'Git and GitHub for Beginners - Crash Course',
      description: 'Video tutorial on Git and GitHub basics.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
      duration: '1 hour',
      icon: Video,
    },
  ];

  const sections = [
    {
      title: 'Getting Started with GitHub Desktop',
      description:
        'Learn how to use GitHub Desktop, a user-friendly tool for version control.',
      icon: Github,
      resources: [
        {
          title: 'GitHub Desktop Tutorial for Beginners',
          description:
            'A comprehensive guide to using GitHub Desktop for beginners.',
          url: 'https://www.youtube.com/watch?v=RPagOAUx2SQ',
          duration: '22 minutes',
          type: 'Video',
          icon: Video,
        },
        {
          title: 'GitHub Desktop Documentation',
          description: 'Official documentation for GitHub Desktop.',
          url: 'https://docs.github.com/en/desktop',
          type: 'Documentation',
          icon: BookOpen,
        },
      ],
    },
    {
      title: 'Best Practices',
      description:
        'Learn how to write good commits, branch names, and pull requests.',
      icon: GitCommit,
      resources: [
        {
          title: 'How to Write a Git Commit Message',
          description:
            'A guide to writing clear and effective commit messages.',
          url: 'https://chris.beams.io/posts/git-commit/',
          type: 'Guide',
          icon: BookOpen,
        },
        {
          title: 'Naming Git Branches',
          description: 'Best practices for naming your Git branches.',
          url: 'https://github.com/itenium-be/Git-Tutorial/blob/master/Tutorial/20-naming-guidelines.md',
          type: 'Guide',
          icon: GitCommit,
        },
        {
          title: 'How to Write the Perfect Pull Request',
          description: 'Tips for creating effective pull requests.',
          url: 'https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/',
          type: 'Article',
          icon: Github,
        },
      ],
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Video':
        return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'Documentation':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'Guide':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'Article':
        return 'bg-green-500/10 text-green-600 dark:text-green-400';
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
              <GitCommit className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Version Control
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground ml-11'>
            Master version control with Git, GitHub, and GitHub Desktop. Learn
            how to contribute to open source projects.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <BookOpen className='h-6 w-6 text-yellow-500' />
            </div>
            Why Do We Need Version Control?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>
            Version control is a crucial skill for any software developer. It
            allows you to:
          </p>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Track changes in your code over time',
              'Collaborate with others on the same project',
              'Experiment with new features without breaking your main code',
              'Revert to previous versions if something goes wrong',
              'Showcase your work to potential employers',
            ].map((item, index) => (
              <li key={index} className='flex items-start group'>
                <ArrowRight className='h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5' />
                <span className='text-gray-700 dark:text-gray-200'>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-red-500/10'>
              <Video className='h-6 w-6 text-red-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Foundation Resources
            </CardTitle>
          </div>
          <CardDescription>
            Start with these comprehensive tutorials on Git and GitHub.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {foundationResources.map((resource, index) => (
              <Card
                key={index}
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
                        <resource.icon
                          className={`h-4 w-4 ${
                            getTypeColor(resource.type).split(' ')[1]
                          }`}
                        />
                      </div>
                      <CardTitle className='text-lg'>
                        {resource.title}
                      </CardTitle>
                    </div>
                    <Badge className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                  </div>
                  <CardDescription className='mt-2'>
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex-grow pt-0'>
                  {resource.duration && (
                    <div className='flex items-center text-sm text-muted-foreground mb-2'>
                      <Clock className='h-3.5 w-3.5 mr-1.5' />
                      Duration: {resource.duration}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button asChild className='w-full group'>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Watch Tutorial
                      <ExternalLink className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
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
                          <resource.icon
                            className={`h-4 w-4 ${
                              getTypeColor(resource.type).split(' ')[1]
                            }`}
                          />
                        </div>
                        <CardTitle className='text-lg'>
                          {resource.title}
                        </CardTitle>
                      </div>
                      <Badge className={getTypeColor(resource.type)}>
                        {resource.type}
                      </Badge>
                    </div>
                    <CardDescription className='mt-2'>
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='flex-grow pt-0'>
                    {resource.duration && (
                      <div className='flex items-center text-sm text-muted-foreground mb-2'>
                        <Clock className='h-3.5 w-3.5 mr-1.5' />
                        Duration: {resource.duration}
                      </div>
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
