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
  GitBranch,
  Zap,
  Network,
} from 'lucide-react';

export default function AlgorithmsResourcesPage() {
  const foundationResources = [
    {
      title: 'Algorithm Design and Analysis',
      description:
        'Video lectures on algorithm design techniques and complexity analysis.',
      type: 'Video',
      url: 'https://www.coursera.org/learn/algorithm-design-analysis',
      duration: '8 hours',
    },
    {
      title: 'Introduction to Algorithms (CLRS)',
      description:
        'Comprehensive textbook covering a wide range of algorithms.',
      type: 'Book',
      url: 'https://mitpress.mit.edu/books/introduction-algorithms-third-edition',
      duration: 'Self-paced',
    },
    {
      title: 'Algorithms Specialization',
      description:
        'Four-course series covering algorithms and data structures.',
      type: 'Course',
      url: 'https://www.coursera.org/specializations/algorithms',
      duration: '4 months',
    },
    {
      title: 'Algorithms, Part I',
      description:
        'Princeton University course on fundamental algorithms and data structures.',
      type: 'Course',
      url: 'https://www.coursera.org/learn/algorithms-part1',
      duration: '6 weeks',
    },
  ];

  const advancedResources = [
    {
      title: 'Dynamic Programming Mastery',
      description:
        'In-depth course on mastering dynamic programming techniques.',
      type: 'Course',
      url: 'https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews',
      duration: '12 hours',
    },
    {
      title: 'Graph Algorithms Explained',
      description:
        'Visual explanations and implementations of common graph algorithms.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=09_LlHjoEiY',
      duration: '6 hours',
    },
    {
      title: 'Advanced Algorithms and Complexity',
      description:
        'Course on advanced algorithm design and analysis techniques.',
      type: 'Course',
      url: 'https://www.coursera.org/learn/advanced-algorithms-and-complexity',
      duration: '5 weeks',
    },
    {
      title: "Competitive Programmer's Handbook",
      description: 'Comprehensive guide to competitive programming algorithms.',
      type: 'Book',
      url: 'https://cses.fi/book/book.pdf',
      duration: 'Self-paced',
    },
  ];

  const practiceResources = [
    {
      title: 'LeetCode',
      description: 'Platform for practicing coding problems and algorithms.',
      type: 'Practice',
      url: 'https://leetcode.com/',
      duration: 'Self-paced',
    },
    {
      title: 'HackerRank - Algorithms',
      description: 'Practice problems specifically focused on algorithms.',
      type: 'Practice',
      url: 'https://www.hackerrank.com/domains/algorithms',
      duration: 'Self-paced',
    },
    {
      title: 'Codeforces',
      description: 'Competitive programming platform with regular contests.',
      type: 'Practice',
      url: 'https://codeforces.com/',
      duration: 'Self-paced',
    },
    {
      title: 'Project Euler',
      description:
        'Series of challenging mathematical/computer programming problems.',
      type: 'Practice',
      url: 'https://projecteuler.net/',
      duration: 'Self-paced',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold text-primary'>
            Algorithms Resources
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Learn and practice essential algorithms for coding interviews and
            problem-solving.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Study Algorithms?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Understanding algorithms is crucial for every programmer. Here is
            why:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Solve complex problems efficiently',
              'Optimize code performance',
              'Essential for coding interviews',
              'Improve logical thinking and problem-solving skills',
              'Fundamental to computer science and software engineering',
              'Tackle real-world computational challenges',
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
            foundation in algorithms.
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
            <Zap className='w-6 h-6 mr-2 text-primary' />
            Advanced Algorithm Topics
          </CardTitle>
          <CardDescription>
            Dive deeper into complex algorithmic concepts and techniques.
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
            <Network className='w-6 h-6 mr-2 text-primary' />
            Practice Platforms
          </CardTitle>
          <CardDescription>
            Sharpen your algorithm skills with these practice platforms and
            problem sets.
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
