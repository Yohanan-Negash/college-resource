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
  Globe,
  Layers,
  Database,
  Server,
  Cloud,
} from 'lucide-react';

export default function FullStackDevelopmentResourcesPage() {
  const foundationResources = [
    {
      title: 'The Odin Project',
      description:
        'Free full stack curriculum covering JavaScript, Ruby on Rails, and more.',
      type: 'Course',
      url: 'https://www.theodinproject.com/',
      duration: 'Self-paced',
    },
    {
      title: 'Full Stack Open',
      description:
        'Deep dive into modern web development with React, Node.js, and more.',
      type: 'Course',
      url: 'https://fullstackopen.com/en/',
      duration: 'Self-paced',
    },
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive resource for web technologies documentation.',
      type: 'Documentation',
      url: 'https://developer.mozilla.org/en-US/',
      duration: 'Self-paced',
    },
    {
      title: 'FreeCodeCamp Full Stack Development Video',
      description:
        'Comprehensive video course covering full stack web development.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
      duration: '12 hours',
    },
  ];

  const frontEndResources = [
    {
      title: 'React - Full Beginner Course',
      description:
        'Learn modern React basics in the most interactive, hands-on way possible in the full course for beginners.',
      type: 'Course',
      url: 'https://www.youtube.com/watch?v=x4rFhThSX04',
      duration: '48 hours',
    },
    {
      title: 'Vue.js Documentation',
      description: 'Official Vue.js documentation and guide.',
      type: 'Documentation',
      url: 'https://vuejs.org/guide/introduction.html',
      duration: 'Self-paced',
    },
  ];

  const backEndResources = [
    {
      title: 'Node.js Crash Course',
      description: 'Quick introduction to Node.js for beginners.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
      duration: '1 hour 30 minutes',
    },
    {
      title: 'Django for Beginners',
      description: 'Learn Django, a high-level Python web framework.',
      type: 'Book',
      url: 'https://djangoforbeginners.com/',
      duration: 'Self-paced',
    },
    {
      title: 'Express.js for Beginners',
      description: 'Build a backend REST API with Express.js.',
      type: 'Videos',
      url: 'https://www.youtube.com/playlist?list=PL0Zuz27SZ-6P4vnjQ_PJ5iRYsqJkQhtUu',
      duration: 'Self-paced',
    },
  ];

  const databaseResources = [
    {
      title: 'SQL Tutorial',
      description: 'Comprehensive SQL tutorial for beginners.',
      type: 'Tutorial',
      url: 'https://www.w3schools.com/sql/',
      duration: 'Self-paced',
    },
    {
      title: 'MongoDB University',
      description: 'Free online courses for learning MongoDB.',
      type: 'Course',
      url: 'https://university.mongodb.com/',
      duration: 'Various',
    },
    {
      title: 'PostgreSQL Tutorial',
      description:
        'Learn PostgreSQL, a powerful, open source object-relational database system.',
      type: 'Tutorial',
      url: 'https://www.postgresqltutorial.com/',
      duration: 'Self-paced',
    },
  ];

  const deploymentResources = [
    {
      title: 'Deploy a React App with Vercel',
      description: 'Learn how to deploy a React application using Vercel.',
      type: 'Tutorial',
      url: 'https://vercel.com/guides/deploying-react-with-vercel',
      duration: '30 minutes',
    },
    {
      title: 'Heroku Deployment Guide',
      description: 'Official guide for deploying applications on Heroku.',
      type: 'Documentation',
      url: 'https://devcenter.heroku.com/categories/deployment',
      duration: 'Self-paced',
    },
    {
      title: 'Docker Crash Course',
      description: 'Quick introduction to Docker for beginners.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
      duration: '2 hours',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold text-primary'>
            Full-Stack Development
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Learn to build complete web applications from front to back.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Learn Full-Stack Development?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Full-stack development is a valuable skill set that allows you to
            build and maintain entire web applications. Here is why it is worth
            learning:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Create complete web applications independently',
              'Understand both client-side and server-side technologies',
              'Improve collaboration with different teams',
              'Increase job opportunities and earning potential',
              'Gain flexibility to work on various parts of a project',
              'Develop a holistic understanding of web development',
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
            <Globe className='w-6 h-6 mr-2 text-primary' />
            Foundation Resources
          </CardTitle>
          <CardDescription>
            Start with these comprehensive resources to build a strong
            foundation in full-stack development.
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
            <Layers className='w-6 h-6 mr-2 text-primary' />
            Front-End Development
          </CardTitle>
          <CardDescription>
            Master the client-side technologies with these front-end development
            resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {frontEndResources.map((resource, index) => (
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
            <Server className='w-6 h-6 mr-2 text-primary' />
            Back-End Development
          </CardTitle>
          <CardDescription>
            Learn server-side programming with these back-end development
            resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {backEndResources.map((resource, index) => (
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
            <Database className='w-6 h-6 mr-2 text-primary' />
            Database Technologies
          </CardTitle>
          <CardDescription>
            Explore different database systems and learn how to work with data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {databaseResources.map((resource, index) => (
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
            <Cloud className='w-6 h-6 mr-2 text-primary' />
            Deployment and DevOps
          </CardTitle>
          <CardDescription>
            Learn how to deploy your applications and understand basic DevOps
            practices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {deploymentResources.map((resource, index) => (
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
