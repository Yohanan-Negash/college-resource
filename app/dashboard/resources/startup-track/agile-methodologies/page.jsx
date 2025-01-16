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
  Zap,
  Lightbulb,
  Users,
  GitBranch,
  Repeat,
  BarChart,
} from 'lucide-react';

export default function AgileMethodologiesResourcesPage() {
  const foundationResources = [
    {
      title: 'Scrum Guide',
      description: 'The official Scrum Guide by Scrum.org.',
      type: 'Article',
      url: 'https://www.scrumguides.org/scrum-guide.html',
      duration: '30 minutes',
    },
    {
      title: 'Agile 101',
      description: 'Introduction to Agile methodologies by Agile Alliance.',
      type: 'Article',
      url: 'https://www.agilealliance.org/agile101/',
      duration: '45 minutes',
    },
    {
      title: 'Atlassian Agile Coach',
      description: 'Comprehensive guide to Agile practices and principles.',
      type: 'Course',
      url: 'https://www.atlassian.com/agile',
      duration: 'Self-paced',
    },
    {
      title: 'Trello',
      description: 'Project management tool often used for Agile workflows.',
      type: 'Tool',
      url: 'https://trello.com/',
      duration: 'Ongoing',
    },
  ];

  const scrumResources = [
    {
      title: 'Scrum Master Certification',
      description:
        'Official Scrum Master certification course by Scrum Alliance.',
      type: 'Course',
      url: 'https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster',
      duration: '2-day course',
    },
    {
      title: 'Scrum Ceremonies Explained',
      description:
        'Detailed explanation of Scrum ceremonies and their importance.',
      type: 'Article',
      url: 'https://www.atlassian.com/agile/scrum/ceremonies',
      duration: '20 minutes',
    },
    {
      title: 'Product Backlog Management',
      description:
        'Learn how to effectively manage a product backlog in Scrum.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=502ILHjX9EE',
      duration: '15 minutes',
    },
  ];

  const kanbanResources = [
    {
      title: 'Kanban Guide',
      description: 'Comprehensive guide to Kanban methodology.',
      type: 'Article',
      url: 'https://kanban.university/kanban-guide/',
      duration: '30 minutes',
    },
    {
      title: 'Kanban vs Scrum',
      description: 'Comparison of Kanban and Scrum methodologies.',
      type: 'Article',
      url: 'https://www.atlassian.com/agile/kanban/kanban-vs-scrum',
      duration: '15 minutes',
    },
    {
      title: 'Implementing Kanban',
      description: 'Step-by-step guide to implementing Kanban in your team.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=R8dYLbJiTUE',
      duration: '20 minutes',
    },
  ];

  const agileToolsResources = [
    {
      title: 'JIRA',
      description: 'Popular project management tool for Agile teams.',
      type: 'Tool',
      url: 'https://www.atlassian.com/software/jira',
      duration: 'Ongoing',
    },
    {
      title: 'Asana',
      description: 'Flexible project management tool with Agile features.',
      type: 'Tool',
      url: 'https://asana.com/',
      duration: 'Ongoing',
    },
    {
      title: 'GitLab',
      description: 'DevOps platform with built-in Agile project management.',
      type: 'Tool',
      url: 'https://about.gitlab.com/',
      duration: 'Ongoing',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold text-primary'>
            Agile Methodologies
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Learn about Agile and Scrum practices commonly used in startups and
            software development teams.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Learn Agile Methodologies?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Agile methodologies are essential for modern software development.
            Here is why they are important:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Improve team collaboration and communication',
              'Increase project flexibility and adaptability',
              'Deliver value to customers more quickly',
              'Enhance product quality through iterative development',
              'Reduce project risks and increase transparency',
              'Align development efforts with business goals',
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
            <Lightbulb className='w-6 h-6 mr-2 text-primary' />
            Foundation Resources
          </CardTitle>
          <CardDescription>
            Start with these resources to build a strong foundation in Agile
            methodologies.
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
                    Type: {resource.type}
                  </p>
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

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <Users className='w-6 h-6 mr-2 text-primary' />
            Scrum Framework
          </CardTitle>
          <CardDescription>
            Dive deeper into Scrum, one of the most popular Agile frameworks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {scrumResources.map((resource, index) => (
              <Card key={index} className='h-full flex flex-col'>
                <CardHeader>
                  <CardTitle className='text-lg'>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Type: {resource.type}
                  </p>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Duration: {resource.duration}
                  </p>
                </CardContent>
                <CardFooter className='mt-auto'>
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

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <GitBranch className='w-6 h-6 mr-2 text-primary' />
            Kanban Method
          </CardTitle>
          <CardDescription>
            Explore Kanban, another popular Agile methodology.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {kanbanResources.map((resource, index) => (
              <Card key={index} className='h-full flex flex-col'>
                <CardHeader>
                  <CardTitle className='text-lg'>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Type: {resource.type}
                  </p>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Duration: {resource.duration}
                  </p>
                </CardContent>
                <CardFooter className='mt-auto'>
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

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <BarChart className='w-6 h-6 mr-2 text-primary' />
            Agile Tools
          </CardTitle>
          <CardDescription>
            Discover popular tools used in Agile project management.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {agileToolsResources.map((resource, index) => (
              <Card key={index} className='h-full flex flex-col'>
                <CardHeader>
                  <CardTitle className='text-lg'>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Type: {resource.type}
                  </p>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Duration: {resource.duration}
                  </p>
                </CardContent>
                <CardFooter className='mt-auto'>
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
    </div>
  );
}
