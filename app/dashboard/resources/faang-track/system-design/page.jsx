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
import { ArrowRight, Server, Database, Globe } from 'lucide-react';

export default function SystemDesignResourcesPage() {
  const foundationResources = [
    {
      title: 'System Design Interview',
      description:
        'A comprehensive guide to tackling system design questions in interviews.',
      type: 'Course',
      url: 'https://www.educative.io/courses/grokking-the-system-design-interview',
      duration: '20 hours',
    },
    {
      title: 'Designing Data-Intensive Applications',
      description:
        'Essential book for understanding the principles of scalable system design.',
      type: 'Book',
      url: 'https://dataintensive.net/',
      duration: 'Self-paced',
    },
    {
      title: 'System Design Primer',
      description:
        'GitHub repository with resources to learn how to design large-scale systems.',
      type: 'Resource',
      url: 'https://github.com/donnemartin/system-design-primer',
      duration: 'Self-paced',
    },
    {
      title: 'Web Application & Software Architecture 101',
      description:
        'Course covering the basics of web application and software architecture.',
      type: 'Course',
      url: 'https://www.educative.io/courses/web-application-software-architecture-101',
      duration: '10 hours',
    },
  ];

  const advancedResources = [
    {
      title: 'Grokking the System Design Interview',
      description:
        'Interactive course with real-world system design case studies.',
      type: 'Course',
      url: 'https://www.educative.io/courses/grokking-the-system-design-interview',
      duration: '15 hours',
    },
    {
      title: 'System Design: The complete course',
      description:
        'Comprehensive course covering all aspects of system design.',
      type: 'Course',
      url: 'https://www.algoexpert.io/systems/product',
      duration: '20+ hours',
    },
    {
      title: 'Distributed Systems for Practitioners',
      description:
        'Course on practical distributed systems concepts and technologies.',
      type: 'Course',
      url: 'https://www.educative.io/courses/distributed-systems-practitioners',
      duration: '12 hours',
    },
    {
      title: 'Designing Distributed Systems',
      description:
        'Book on patterns and paradigms for scalable, reliable services.',
      type: 'Book',
      url: 'https://www.oreilly.com/library/view/designing-distributed-systems/9781491983638/',
      duration: 'Self-paced',
    },
  ];

  const practicalResources = [
    {
      title: 'High Scalability',
      description:
        'Blog with case studies on how large-scale systems are designed.',
      type: 'Blog',
      url: 'http://highscalability.com/',
      duration: 'Ongoing',
    },
    {
      title: 'System Design Interview Questions',
      description:
        'Collection of system design interview questions with detailed solutions.',
      type: 'Practice',
      url: 'https://www.interviewbit.com/system-design-interview-questions/',
      duration: 'Self-paced',
    },
    {
      title: 'ByteByteGo',
      description:
        'Weekly newsletter and videos on system design concepts and case studies.',
      type: 'Newsletter',
      url: 'https://bytebytego.com/',
      duration: 'Ongoing',
    },
    {
      title: 'Awesome Scalability',
      description:
        'Curated list of resources on building scalable, reliable, and performant systems.',
      type: 'Resource',
      url: 'https://github.com/binhnguyennus/awesome-scalability',
      duration: 'Self-paced',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold text-primary'>
            System Design Resources
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Learn how to design scalable systems for large tech companies and
            tackle system design interviews.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Study System Design?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Understanding system design is crucial for software engineers,
            especially those aiming for senior roles. Here is why:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Design scalable and reliable software systems',
              'Essential for technical interviews at top tech companies',
              'Understand trade-offs in large-scale software architecture',
              'Improve problem-solving skills for complex scenarios',
              'Learn best practices for building distributed systems',
              'Prepare for senior and lead engineering roles',
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
            <Server className='w-6 h-6 mr-2 text-primary' />
            Foundation Resources
          </CardTitle>
          <CardDescription>
            Start with these comprehensive resources to build a strong
            foundation in system design.
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
            <Database className='w-6 h-6 mr-2 text-primary' />
            Advanced System Design
          </CardTitle>
          <CardDescription>
            Dive deeper into complex system design concepts and techniques.
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
            <Globe className='w-6 h-6 mr-2 text-primary' />
            Practical Resources
          </CardTitle>
          <CardDescription>
            Apply your knowledge with these practical resources and stay updated
            with industry trends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {practicalResources.map((resource, index) => (
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
