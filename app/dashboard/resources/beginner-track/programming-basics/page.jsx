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
  Code,
  BookOpen,
  GraduationCap,
  ExternalLink,
  Clock,
  FileText,
  Video,
  Globe,
} from 'lucide-react';

export default function ProgrammingBasicsResourcesPage() {
  const foundationResources = [
    {
      title: 'Codecademy: Learn Python',
      description: 'Interactive course to learn Python programming.',
      type: 'Course',
      url: 'https://www.codecademy.com/learn/learn-python-3',
      duration: '25 hours',
      icon: GraduationCap,
    },
    {
      title: "CS50's Introduction to Programming with Python",
      description:
        "Harvard's renowned introductory course, now focused on Python.",
      type: 'Course',
      url: 'https://www.edx.org/course/cs50s-introduction-to-programming-with-python',
      duration: '10 weeks',
      icon: GraduationCap,
    },
    {
      title: 'freeCodeCamp: JavaScript Algorithms and Data Structures',
      description: 'Comprehensive course on JavaScript fundamentals.',
      type: 'Course',
      url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
      duration: 'Self-paced',
      icon: GraduationCap,
    },
    {
      title: 'MDN JavaScript Guide',
      description: 'Comprehensive guide to JavaScript programming.',
      type: 'Documentation',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      duration: 'Self-paced',
      icon: FileText,
    },
  ];

  const pythonResources = [
    {
      title: 'Python.org Official Tutorial',
      description: 'The official Python tutorial for beginners.',
      type: 'Documentation',
      url: 'https://docs.python.org/3/tutorial/',
      duration: 'Self-paced',
      icon: FileText,
    },
    {
      title: 'Real Python',
      description: 'In-depth articles, tutorials, and video courses on Python.',
      type: 'Website',
      url: 'https://realpython.com/',
      duration: 'Various',
      icon: Globe,
    },
    {
      title: 'Python for Beginners - Full Course',
      description: 'Comprehensive Python course for beginners by freeCodeCamp.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=eWRfhZUzrAc',
      duration: '4 hours 26 minutes',
      icon: Video,
    },
    {
      title: 'Python Crash Course for Beginners',
      description: 'Quick and intensive Python crash course by Traversy Media.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=JJmcL1N2KQs',
      duration: '1 hour 30 minutes',
      icon: Video,
    },
  ];

  const javascriptResources = [
    {
      title: 'JavaScript.info',
      description:
        'Modern JavaScript Tutorial: simple, but detailed explanations with examples and tasks.',
      type: 'Website',
      url: 'https://javascript.info/',
      duration: 'Self-paced',
      icon: Globe,
    },
    {
      title: 'Eloquent JavaScript',
      description: 'A modern introduction to programming with JavaScript.',
      type: 'Book',
      url: 'https://eloquentjavascript.net/',
      duration: 'Self-paced',
      icon: FileText,
    },
    {
      title: 'JavaScript Tutorial for Beginners',
      description:
        'Complete JavaScript tutorial for beginners by Mosh Hamedani.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      duration: '1 hour',
      icon: Video,
    },
    {
      title: 'JavaScript Full Course for Beginners',
      description: 'Comprehensive JavaScript course by freeCodeCamp.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
      duration: '3 hours 26 minutes',
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
      case 'Website':
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
              Programming Basics
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground ml-11'>
            Learn the fundamentals of programming with Python or JavaScript.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <GraduationCap className='h-6 w-6 text-yellow-500' />
            </div>
            Why Learn Python or JavaScript?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>
            Python and JavaScript are two of the most popular and versatile
            programming languages. Here is why we recommend starting with
            either:
          </p>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Build web applications and servers',
              'Develop mobile and desktop applications',
              'Create powerful backend systems',
              'Explore data science and machine learning',
              'High demand in the job market',
              'Large, supportive communities',
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
              <Code className='h-6 w-6 text-blue-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Foundation Resources
            </CardTitle>
          </div>
          <CardDescription>
            Start with these comprehensive courses and guides to build a strong
            foundation in programming.
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
                    <CardTitle className='text-lg'>{resource.title}</CardTitle>
                    <Badge className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
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

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-green-500/10'>
              <BookOpen className='h-6 w-6 text-green-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Additional Python Resources
            </CardTitle>
          </div>
          <CardDescription>
            Dive deeper into Python with these excellent resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {pythonResources.map((resource, index) => (
              <Card
                key={index}
                className='h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.1)] dark:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300'
              >
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <CardTitle className='text-lg'>{resource.title}</CardTitle>
                    <Badge className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
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
              <BookOpen className='h-6 w-6 text-amber-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Additional JavaScript Resources
            </CardTitle>
          </div>
          <CardDescription>
            Enhance your JavaScript skills with these comprehensive resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {javascriptResources.map((resource, index) => (
              <Card
                key={index}
                className='h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.1)] dark:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300'
              >
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <CardTitle className='text-lg'>{resource.title}</CardTitle>
                    <Badge className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
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
