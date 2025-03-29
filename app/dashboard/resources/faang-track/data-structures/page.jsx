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
  BookOpen,
  GraduationCap,
  Database,
  Layers,
  GitBranch,
  ExternalLink,
  Clock,
  Video,
  FileText,
  Globe,
  Wrench,
  Dumbbell,
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
      icon: GraduationCap,
    },
    {
      title: 'Data Structures Easy to Advanced Course',
      description: 'Full course on data structures by William Fiset.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM',
      duration: '8 hours',
      icon: Video,
    },
    {
      title: 'Visualizing Data Structures and Algorithms',
      description:
        'Interactive visualizations of data structures and algorithms.',
      type: 'Tool',
      url: 'https://visualgo.net/en',
      duration: 'Self-paced',
      icon: Wrench,
    },
    {
      title: 'Data Structures in Python',
      description:
        'Article series explaining how to implement common data structures in Python.',
      type: 'Article',
      url: 'https://realpython.com/python-data-structures/',
      duration: 'Self-paced',
      icon: FileText,
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
      icon: GraduationCap,
    },
    {
      title: 'Data Structures and Algorithms Specialization',
      description:
        'Comprehensive specialization covering various data structures and algorithms.',
      type: 'Course',
      url: 'https://www.coursera.org/specializations/data-structures-algorithms',
      duration: '8 months',
      icon: GraduationCap,
    },
    {
      title: 'MIT OpenCourseWare: Advanced Data Structures',
      description: 'Advanced course on data structures from MIT.',
      type: 'Course',
      url: 'https://ocw.mit.edu/courses/6-851-advanced-data-structures-spring-2012/',
      duration: 'Self-paced',
      icon: GraduationCap,
    },
    {
      title: 'Grokking the Coding Interview: Patterns for Coding Questions',
      description:
        'Course focused on coding patterns for interviews, heavily utilizing data structures.',
      type: 'Course',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview',
      duration: '20 hours',
      icon: GraduationCap,
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
      icon: Dumbbell,
    },
    {
      title: 'HackerRank - Data Structures',
      description: 'Practice problems specifically focused on data structures.',
      type: 'Practice',
      url: 'https://www.hackerrank.com/domains/data-structures',
      duration: 'Self-paced',
      icon: Dumbbell,
    },
    {
      title: 'GeeksforGeeks - Data Structures',
      description:
        'Comprehensive collection of articles and practice problems on data structures.',
      type: 'Website',
      url: 'https://www.geeksforgeeks.org/data-structures/',
      duration: 'Self-paced',
      icon: Globe,
    },
    {
      title: 'Codewars',
      description:
        'Improve your skills by training with others on real code challenges.',
      type: 'Practice',
      url: 'https://www.codewars.com/',
      duration: 'Self-paced',
      icon: Dumbbell,
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Course':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'Video':
        return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'Tool':
        return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400';
      case 'Article':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
      case 'Practice':
        return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'Website':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
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
              <Database className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Data Structures Resources
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground ml-11'>
            Master the fundamental data structures used in tech interviews and
            software development.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <BookOpen className='h-6 w-6 text-yellow-500' />
            </div>
            Why Learn Data Structures?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>
            Understanding data structures is crucial for every programmer. Here
            is why:
          </p>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Efficiently organize and store data',
              'Optimize algorithm performance',
              'Essential for coding interviews',
              'Solve complex programming problems',
              'Fundamental to software engineering',
              'Improve overall code quality',
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
              <Database className='h-6 w-6 text-blue-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Foundation Resources
            </CardTitle>
          </div>
          <CardDescription>
            Start with these comprehensive courses and guides to build a strong
            foundation in data structures.
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
              Advanced Data Structures
            </CardTitle>
          </div>
          <CardDescription>
            Dive deeper into complex data structures and their applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {advancedResources.map((resource, index) => (
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
              <GitBranch className='h-6 w-6 text-green-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Practice Resources
            </CardTitle>
          </div>
          <CardDescription>
            Sharpen your data structures skills with these practice platforms
            and problem sets.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {practiceResources.map((resource, index) => (
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
                      Start Practicing
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
