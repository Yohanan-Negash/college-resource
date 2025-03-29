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
  Server,
  Database,
  Globe,
  BookOpen,
  GraduationCap,
  FileText,
  Newspaper,
  Dumbbell,
  ExternalLink,
  Clock,
  Layers,
} from 'lucide-react';

export default function SystemDesignResourcesPage() {
  const foundationResources = [
    {
      title: 'System Design Interview',
      description:
        'A comprehensive guide to tackling system design questions in interviews.',
      type: 'Course',
      url: 'https://www.educative.io/courses/grokking-the-system-design-interview',
      duration: '20 hours',
      icon: GraduationCap,
    },
    {
      title: 'Designing Data-Intensive Applications',
      description:
        'Essential book for understanding the principles of scalable system design.',
      type: 'Book',
      url: 'https://dataintensive.net/',
      duration: 'Self-paced',
      icon: BookOpen,
    },
    {
      title: 'System Design Primer',
      description:
        'GitHub repository with resources to learn how to design large-scale systems.',
      type: 'Resource',
      url: 'https://github.com/donnemartin/system-design-primer',
      duration: 'Self-paced',
      icon: FileText,
    },
    {
      title: 'Web Application & Software Architecture 101',
      description:
        'Course covering the basics of web application and software architecture.',
      type: 'Course',
      url: 'https://www.educative.io/courses/web-application-software-architecture-101',
      duration: '10 hours',
      icon: GraduationCap,
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
      icon: GraduationCap,
    },
    {
      title: 'System Design: The complete course',
      description:
        'Comprehensive course covering all aspects of system design.',
      type: 'Course',
      url: 'https://www.algoexpert.io/systems/product',
      duration: '20+ hours',
      icon: GraduationCap,
    },
    {
      title: 'Distributed Systems for Practitioners',
      description:
        'Course on practical distributed systems concepts and technologies.',
      type: 'Course',
      url: 'https://www.educative.io/courses/distributed-systems-practitioners',
      duration: '12 hours',
      icon: GraduationCap,
    },
    {
      title: 'Designing Distributed Systems',
      description:
        'Book on patterns and paradigms for scalable, reliable services.',
      type: 'Book',
      url: 'https://www.oreilly.com/library/view/designing-distributed-systems/9781491983638/',
      duration: 'Self-paced',
      icon: BookOpen,
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
      icon: Newspaper,
    },
    {
      title: 'System Design Interview Questions',
      description:
        'Collection of system design interview questions with detailed solutions.',
      type: 'Practice',
      url: 'https://www.interviewbit.com/system-design-interview-questions/',
      duration: 'Self-paced',
      icon: Dumbbell,
    },
    {
      title: 'ByteByteGo',
      description:
        'Weekly newsletter and videos on system design concepts and case studies.',
      type: 'Newsletter',
      url: 'https://bytebytego.com/',
      duration: 'Ongoing',
      icon: Newspaper,
    },
    {
      title: 'Awesome Scalability',
      description:
        'Curated list of resources on building scalable, reliable, and performant systems.',
      type: 'Resource',
      url: 'https://github.com/binhnguyennus/awesome-scalability',
      duration: 'Self-paced',
      icon: FileText,
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Course':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'Book':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
      case 'Resource':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'Blog':
        return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'Newsletter':
        return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'Practice':
        return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400';
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
              <Layers className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              System Design Resources
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground ml-11'>
            Learn how to design scalable systems for large tech companies and
            tackle system design interviews.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <BookOpen className='h-6 w-6 text-yellow-500' />
            </div>
            Why Study System Design?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>
            Understanding system design is crucial for software engineers,
            especially those aiming for senior roles. Here is why:
          </p>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Design scalable and reliable software systems',
              'Essential for technical interviews at top tech companies',
              'Understand trade-offs in large-scale software architecture',
              'Improve problem-solving skills for complex scenarios',
              'Learn best practices for building distributed systems',
              'Prepare for senior and lead engineering roles',
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
              <Server className='h-6 w-6 text-blue-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Foundation Resources
            </CardTitle>
          </div>
          <CardDescription>
            Start with these comprehensive resources to build a strong
            foundation in system design.
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
              <Database className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Advanced System Design
            </CardTitle>
          </div>
          <CardDescription>
            Dive deeper into complex system design concepts and techniques.
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
              <Globe className='h-6 w-6 text-green-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Practical Resources
            </CardTitle>
          </div>
          <CardDescription>
            Apply your knowledge with these practical resources and stay updated
            with industry trends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {practicalResources.map((resource, index) => (
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
