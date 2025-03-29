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
  GitBranch,
  Zap,
  Network,
  ExternalLink,
  Clock,
  Video,
  FileText,
  Dumbbell,
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
      icon: Video,
    },
    {
      title: 'Introduction to Algorithms (CLRS)',
      description:
        'Comprehensive textbook covering a wide range of algorithms.',
      type: 'Book',
      url: 'https://mitpress.mit.edu/books/introduction-algorithms-third-edition',
      duration: 'Self-paced',
      icon: FileText,
    },
    {
      title: 'Algorithms Specialization',
      description:
        'Four-course series covering algorithms and data structures.',
      type: 'Course',
      url: 'https://www.coursera.org/specializations/algorithms',
      duration: '4 months',
      icon: GraduationCap,
    },
    {
      title: 'Algorithms, Part I',
      description:
        'Princeton University course on fundamental algorithms and data structures.',
      type: 'Course',
      url: 'https://www.coursera.org/learn/algorithms-part1',
      duration: '6 weeks',
      icon: GraduationCap,
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
      icon: GraduationCap,
    },
    {
      title: 'Graph Algorithms Explained',
      description:
        'Visual explanations and implementations of common graph algorithms.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=09_LlHjoEiY',
      duration: '6 hours',
      icon: Video,
    },
    {
      title: 'Advanced Algorithms and Complexity',
      description:
        'Course on advanced algorithm design and analysis techniques.',
      type: 'Course',
      url: 'https://www.coursera.org/learn/advanced-algorithms-and-complexity',
      duration: '5 weeks',
      icon: GraduationCap,
    },
    {
      title: "Competitive Programmer's Handbook",
      description: 'Comprehensive guide to competitive programming algorithms.',
      type: 'Book',
      url: 'https://cses.fi/book/book.pdf',
      duration: 'Self-paced',
      icon: FileText,
    },
  ];

  const practiceResources = [
    {
      title: 'LeetCode',
      description: 'Platform for practicing coding problems and algorithms.',
      type: 'Practice',
      url: 'https://leetcode.com/',
      duration: 'Self-paced',
      icon: Dumbbell,
    },
    {
      title: 'HackerRank - Algorithms',
      description: 'Practice problems specifically focused on algorithms.',
      type: 'Practice',
      url: 'https://www.hackerrank.com/domains/algorithms',
      duration: 'Self-paced',
      icon: Dumbbell,
    },
    {
      title: 'Codeforces',
      description: 'Competitive programming platform with regular contests.',
      type: 'Practice',
      url: 'https://codeforces.com/',
      duration: 'Self-paced',
      icon: Dumbbell,
    },
    {
      title: 'Project Euler',
      description:
        'Series of challenging mathematical/computer programming problems.',
      type: 'Practice',
      url: 'https://projecteuler.net/',
      duration: 'Self-paced',
      icon: Dumbbell,
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Course':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'Book':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
      case 'Video':
        return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'Practice':
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
              <GitBranch className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Algorithms Resources
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground ml-11'>
            Learn and practice essential algorithms for coding interviews and
            problem-solving.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <BookOpen className='h-6 w-6 text-yellow-500' />
            </div>
            Why Study Algorithms?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>
            Understanding algorithms is crucial for every programmer. Here is
            why:
          </p>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Solve complex problems efficiently',
              'Optimize code performance',
              'Essential for coding interviews',
              'Improve logical thinking and problem-solving skills',
              'Fundamental to computer science and software engineering',
              'Tackle real-world computational challenges',
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
            foundation in algorithms.
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
              <Zap className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Advanced Algorithm Topics
            </CardTitle>
          </div>
          <CardDescription>
            Dive deeper into complex algorithmic concepts and techniques.
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
              <Network className='h-6 w-6 text-green-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Practice Platforms
            </CardTitle>
          </div>
          <CardDescription>
            Sharpen your algorithm skills with these practice platforms and
            problem sets.
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
