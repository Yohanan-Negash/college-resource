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
  Globe,
  Layers,
  Database,
  Server,
  Cloud,
  BookOpen,
  FileText,
  Video,
  GraduationCap,
  ExternalLink,
  Clock,
  Code,
  Wrench,
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
      icon: GraduationCap,
    },
    {
      title: 'Full Stack Open',
      description:
        'Deep dive into modern web development with React, Node.js, and more.',
      type: 'Course',
      url: 'https://fullstackopen.com/en/',
      duration: 'Self-paced',
      icon: GraduationCap,
    },
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive resource for web technologies documentation.',
      type: 'Documentation',
      url: 'https://developer.mozilla.org/en-US/',
      duration: 'Self-paced',
      icon: FileText,
    },
    {
      title: 'FreeCodeCamp Full Stack Development Video',
      description:
        'Comprehensive video course covering full stack web development.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
      duration: '12 hours',
      icon: Video,
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
      icon: GraduationCap,
    },
    {
      title: 'Vue.js Documentation',
      description: 'Official Vue.js documentation and guide.',
      type: 'Documentation',
      url: 'https://vuejs.org/guide/introduction.html',
      duration: 'Self-paced',
      icon: FileText,
    },
  ];

  const backEndResources = [
    {
      title: 'Node.js Crash Course',
      description: 'Quick introduction to Node.js for beginners.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
      duration: '1 hour 30 minutes',
      icon: Video,
    },
    {
      title: 'Django for Beginners',
      description: 'Learn Django, a high-level Python web framework.',
      type: 'Book',
      url: 'https://djangoforbeginners.com/',
      duration: 'Self-paced',
      icon: BookOpen,
    },
    {
      title: 'Express.js for Beginners',
      description: 'Build a backend REST API with Express.js.',
      type: 'Video',
      url: 'https://www.youtube.com/playlist?list=PL0Zuz27SZ-6P4vnjQ_PJ5iRYsqJkQhtUu',
      duration: 'Self-paced',
      icon: Video,
    },
  ];

  const databaseResources = [
    {
      title: 'SQL Tutorial',
      description: 'Comprehensive SQL tutorial for beginners.',
      type: 'Tutorial',
      url: 'https://www.w3schools.com/sql/',
      duration: 'Self-paced',
      icon: Wrench,
    },
    {
      title: 'MongoDB University',
      description: 'Free online courses for learning MongoDB.',
      type: 'Course',
      url: 'https://university.mongodb.com/',
      duration: 'Various',
      icon: GraduationCap,
    },
    {
      title: 'PostgreSQL Tutorial',
      description:
        'Learn PostgreSQL, a powerful, open source object-relational database system.',
      type: 'Tutorial',
      url: 'https://www.postgresqltutorial.com/',
      duration: 'Self-paced',
      icon: Wrench,
    },
  ];

  const deploymentResources = [
    {
      title: 'Deploy a React App with Vercel',
      description: 'Learn how to deploy a React application using Vercel.',
      type: 'Tutorial',
      url: 'https://vercel.com/guides/deploying-react-with-vercel',
      duration: '30 minutes',
      icon: Wrench,
    },
    {
      title: 'Heroku Deployment Guide',
      description: 'Official guide for deploying applications on Heroku.',
      type: 'Documentation',
      url: 'https://devcenter.heroku.com/categories/deployment',
      duration: 'Self-paced',
      icon: FileText,
    },
    {
      title: 'Docker Crash Course',
      description: 'Quick introduction to Docker for beginners.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo',
      duration: '2 hours',
      icon: Video,
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Course':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'Documentation':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'Video':
        return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'Book':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
      case 'Tutorial':
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
              <Code className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Full-Stack Development
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground ml-11'>
            Learn to build complete web applications from front to back.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <BookOpen className='h-6 w-6 text-yellow-500' />
            </div>
            Why Learn Full-Stack Development?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>
            Full-stack development is a valuable skill set that allows you to
            build and maintain entire web applications. Here is why it is worth
            learning:
          </p>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Create complete web applications independently',
              'Understand both client-side and server-side technologies',
              'Improve collaboration with different teams',
              'Increase job opportunities and earning potential',
              'Gain flexibility to work on various parts of a project',
              'Develop a holistic understanding of web development',
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
            <div className='p-2 rounded-md bg-blue-500/10'>
              <Globe className='h-6 w-6 text-blue-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Foundation Resources
            </CardTitle>
          </div>
          <CardDescription>
            Start with these comprehensive resources to build a strong
            foundation in full-stack development.
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
                  <div className='flex items-center text-sm text-muted-foreground mb-2'>
                    <Clock className='h-3.5 w-3.5 mr-1.5' />
                    Duration: {resource.duration}
                  </div>
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

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-purple-500/10'>
              <Layers className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Front-End Development
            </CardTitle>
          </div>
          <CardDescription>
            Master the client-side technologies with these front-end development
            resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {frontEndResources.map((resource, index) => (
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
                  <div className='flex items-center text-sm text-muted-foreground mb-2'>
                    <Clock className='h-3.5 w-3.5 mr-1.5' />
                    Duration: {resource.duration}
                  </div>
                </CardContent>
                <CardFooter className='mt-auto'>
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

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-green-500/10'>
              <Server className='h-6 w-6 text-green-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Back-End Development
            </CardTitle>
          </div>
          <CardDescription>
            Learn server-side programming with these back-end development
            resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {backEndResources.map((resource, index) => (
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
                  <div className='flex items-center text-sm text-muted-foreground mb-2'>
                    <Clock className='h-3.5 w-3.5 mr-1.5' />
                    Duration: {resource.duration}
                  </div>
                </CardContent>
                <CardFooter className='mt-auto'>
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

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-amber-500/10'>
              <Database className='h-6 w-6 text-amber-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Database Technologies
            </CardTitle>
          </div>
          <CardDescription>
            Explore different database systems and learn how to work with data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {databaseResources.map((resource, index) => (
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
                  <div className='flex items-center text-sm text-muted-foreground mb-2'>
                    <Clock className='h-3.5 w-3.5 mr-1.5' />
                    Duration: {resource.duration}
                  </div>
                </CardContent>
                <CardFooter className='mt-auto'>
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

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-indigo-500/10'>
              <Cloud className='h-6 w-6 text-indigo-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Deployment and DevOps
            </CardTitle>
          </div>
          <CardDescription>
            Learn how to deploy your applications and understand basic DevOps
            practices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {deploymentResources.map((resource, index) => (
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
                  <div className='flex items-center text-sm text-muted-foreground mb-2'>
                    <Clock className='h-3.5 w-3.5 mr-1.5' />
                    Duration: {resource.duration}
                  </div>
                </CardContent>
                <CardFooter className='mt-auto'>
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
    </div>
  );
}
