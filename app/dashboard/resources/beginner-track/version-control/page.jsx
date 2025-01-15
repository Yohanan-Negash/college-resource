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

export default function VersionControlResourcesPage() {
  const foundationResources = [
    {
      title: 'Git Tutorial for Beginners',
      description: 'A simple tutorial for getting started with git.',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=CvUiKWv2-C0',
      duration: '36 minutes',
    },
    {
      title: 'Git and GitHub for Beginners - Crash Course',
      description: 'Video tutorial on Git and GitHub basics.',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
      duration: '1 hour',
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
        },
        {
          title: 'GitHub Desktop Documentation',
          description: 'Official documentation for GitHub Desktop.',
          url: 'https://docs.github.com/en/desktop',
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
        },
        {
          title: 'Naming Git Branches',
          description: 'Best practices for naming your Git branches.',
          url: 'https://github.com/itenium-be/Git-Tutorial/blob/master/Tutorial/20-naming-guidelines.md',
        },
        {
          title: 'How to Write the Perfect Pull Request',
          description: 'Tips for creating effective pull requests.',
          url: 'https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/',
        },
      ],
    },
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
            Version Control
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Master version control with Git, GitHub, and GitHub Desktop. Learn
            how to contribute to open source projects.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Do We Need Version Control?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Version control is a crucial skill for any software developer. It
            allows you to:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Track changes in your code over time',
              'Collaborate with others on the same project',
              'Experiment with new features without breaking your main code',
              'Revert to previous versions if something goes wrong',
              'Showcase your work to potential employers',
            ].map((item, index) => (
              <li key={index} className='flex items-start'>
                <ArrowRight className='h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-1' />
                <span className='text-gray-700 dark:text-gray-200'>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <Video className='w-6 h-6 mr-2 text-primary' />
            Foundation Resources
          </CardTitle>
          <CardDescription>
            Start with these comprehensive tutorials on Git and GitHub.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {foundationResources.map((resource, index) => (
              <Card key={index} className='h-full flex flex-col'>
                <CardHeader>
                  <CardTitle className='text-lg'>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Duration: {resource.duration}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className='w-full'>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Watch Tutorial
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
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

      {/* <Card>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <BookOpen className='w-6 h-6 mr-2 text-primary' />
            Your Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Now that you have learned about version control and open source,
            here are some steps to get started:
          </p>
          <ol className='list-decimal pl-6 space-y-2'>
            <li>Install GitHub Desktop and create a GitHub account</li>
            <li>Create your first repository and make some commits</li>
            <li>Fork a repository and create your first pull request</li>
            <li>
              Use OpenSauced to find beginner-friendly open source projects
            </li>
            <li>Make your first open source contribution</li>
          </ol>
          <div className='mt-6'>
            <Button asChild>
              <Link
                href='https://opensauced.pizza/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Start Your Open Source Journey with OpenSauced
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}
