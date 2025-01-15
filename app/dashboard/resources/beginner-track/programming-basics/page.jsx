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
import { ArrowRight, Code, BookOpen, GraduationCap } from 'lucide-react';

export default function ProgrammingBasicsResourcesPage() {
  const foundationResources = [
    {
      title: 'Codecademy: Learn Python',
      description: 'Interactive course to learn Python programming.',
      type: 'Course',
      url: 'https://www.codecademy.com/learn/learn-python-3',
      duration: '25 hours',
    },
    {
      title: "CS50's Introduction to Programming with Python",
      description:
        "Harvard's renowned introductory course, now focused on Python.",
      type: 'Course',
      url: 'https://www.edx.org/course/cs50s-introduction-to-programming-with-python',
      duration: '10 weeks',
    },
    {
      title: 'freeCodeCamp: JavaScript Algorithms and Data Structures',
      description: 'Comprehensive course on JavaScript fundamentals.',
      type: 'Course',
      url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
      duration: 'Self-paced',
    },
    {
      title: 'MDN JavaScript Guide',
      description: 'Comprehensive guide to JavaScript programming.',
      type: 'Documentation',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      duration: 'Self-paced',
    },
  ];

  const pythonResources = [
    {
      title: 'Python.org Official Tutorial',
      description: 'The official Python tutorial for beginners.',
      type: 'Documentation',
      url: 'https://docs.python.org/3/tutorial/',
      duration: 'Self-paced',
    },
    {
      title: 'Real Python',
      description: 'In-depth articles, tutorials, and video courses on Python.',
      type: 'Website',
      url: 'https://realpython.com/',
      duration: 'Various',
    },
    {
      title: 'Python for Beginners - Full Course',
      description: 'Comprehensive Python course for beginners by freeCodeCamp.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=eWRfhZUzrAc',
      duration: '4 hours 26 minutes',
    },
    {
      title: 'Python Crash Course for Beginners',
      description: 'Quick and intensive Python crash course by Traversy Media.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=JJmcL1N2KQs',
      duration: '1 hour 30 minutes',
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
    },
    {
      title: 'Eloquent JavaScript',
      description: 'A modern introduction to programming with JavaScript.',
      type: 'Book',
      url: 'https://eloquentjavascript.net/',
      duration: 'Self-paced',
    },
    {
      title: 'JavaScript Tutorial for Beginners',
      description:
        'Complete JavaScript tutorial for beginners by Mosh Hamedani.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      duration: '1 hour',
    },
    {
      title: 'JavaScript Full Course for Beginners',
      description: 'Comprehensive JavaScript course by freeCodeCamp.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
      duration: '3 hours 26 minutes',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold text-primary'>
            Programming Basics
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Learn the fundamentals of programming with Python or JavaScript.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Learn Python or JavaScript?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Python and JavaScript are two of the most popular and versatile
            programming languages. Here is why we recommend starting with
            either:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Build web applications and servers',
              'Develop mobile and desktop applications',
              'Create powerful backend systems',
              'Explore data science and machine learning',
              'High demand in the job market',
              'Large, supportive communities',
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
            <Code className='w-6 h-6 mr-2 text-primary' />
            Foundation Resources
          </CardTitle>
          <CardDescription>
            Start with these comprehensive courses and guides to build a strong
            foundation in programming.
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

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <BookOpen className='w-6 h-6 mr-2 text-primary' />
            Additional Python Resources
          </CardTitle>
          <CardDescription>
            Dive deeper into Python with these excellent resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {pythonResources.map((resource, index) => (
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
            <BookOpen className='w-6 h-6 mr-2 text-primary' />
            Additional JavaScript Resources
          </CardTitle>
          <CardDescription>
            Enhance your JavaScript skills with these comprehensive resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {javascriptResources.map((resource, index) => (
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
