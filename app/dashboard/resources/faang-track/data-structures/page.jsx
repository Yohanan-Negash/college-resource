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
  Code,
  BookOpen,
  GraduationCap,
  Database,
  Layers,
  GitBranch,
} from 'lucide-react';

export default function DataStructuresResourcesPage() {
  const foundationResources = [
    {
      title: 'Introduction to Data Structures',
      description:
        'A comprehensive video course covering basic to advanced data structures.',
      type: 'Course',
      url: 'https://www.coursera.org/learn/data-structures',
      duration: '10 hours',
    },
    {
      title: 'Data Structures Easy to Advanced Course',
      description: 'Full course on data structures by William Fiset.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM',
      duration: '8 hours',
    },
    {
      title: 'Visualizing Data Structures and Algorithms',
      description:
        'Interactive visualizations of data structures and algorithms.',
      type: 'Tool',
      url: 'https://visualgo.net/en',
      duration: 'Self-paced',
    },
    {
      title: 'Data Structures in Python',
      description:
        'Article series explaining how to implement common data structures in Python.',
      type: 'Article',
      url: 'https://realpython.com/python-data-structures/',
      duration: 'Self-paced',
    },
  ];

  const advancedResources = [
    {
      title: 'Advanced Data Structures',
      description:
        'Deep dive into complex data structures like Red-Black trees and B-trees.',
      type: 'Course',
      url: 'https://www.edx.org/course/advanced-data-structures',
      duration: '8 weeks',
    },
    {
      title: 'Data Structures and Algorithms Specialization',
      description:
        'Comprehensive specialization covering various data structures and algorithms.',
      type: 'Course',
      url: 'https://www.coursera.org/specializations/data-structures-algorithms',
      duration: '8 months',
    },
    {
      title: 'MIT OpenCourseWare: Advanced Data Structures',
      description: 'Advanced course on data structures from MIT.',
      type: 'Course',
      url: 'https://ocw.mit.edu/courses/6-851-advanced-data-structures-spring-2012/',
      duration: 'Self-paced',
    },
    {
      title: 'Grokking the Coding Interview: Patterns for Coding Questions',
      description:
        'Course focused on coding patterns for interviews, heavily utilizing data structures.',
      type: 'Course',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview',
      duration: '20 hours',
    },
  ];

  const practiceResources = [
    {
      title: 'LeetCode',
      description:
        'Platform for preparing technical coding interviews with a focus on data structures.',
      type: 'Practice',
      url: 'https://leetcode.com/',
      duration: 'Self-paced',
    },
    {
      title: 'HackerRank - Data Structures',
      description: 'Practice problems specifically focused on data structures.',
      type: 'Practice',
      url: 'https://www.hackerrank.com/domains/data-structures',
      duration: 'Self-paced',
    },
    {
      title: 'GeeksforGeeks - Data Structures',
      description:
        'Comprehensive collection of articles and practice problems on data structures.',
      type: 'Website',
      url: 'https://www.geeksforgeeks.org/data-structures/',
      duration: 'Self-paced',
    },
    {
      title: 'Codewars',
      description:
        'Improve your skills by training with others on real code challenges.',
      type: 'Practice',
      url: 'https://www.codewars.com/',
      duration: 'Self-paced',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold text-primary'>
            Data Structures Resources
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Master the fundamental data structures used in tech interviews and
            software development.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Learn Data Structures?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Understanding data structures is crucial for every programmer. Here
            is why:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Efficiently organize and store data',
              'Optimize algorithm performance',
              'Essential for coding interviews',
              'Solve complex programming problems',
              'Fundamental to software engineering',
              'Improve overall code quality',
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
            <Database className='w-6 h-6 mr-2 text-primary' />
            Foundation Resources
          </CardTitle>
          <CardDescription>
            Start with these comprehensive courses and guides to build a strong
            foundation in data structures.
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
            Advanced Data Structures
          </CardTitle>
          <CardDescription>
            Dive deeper into complex data structures and their applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {advancedResources.map((resource, index) => (
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
            Practice Resources
          </CardTitle>
          <CardDescription>
            Sharpen your data structures skills with these practice platforms
            and problem sets.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {practiceResources.map((resource, index) => (
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
                      Start Practicing
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
