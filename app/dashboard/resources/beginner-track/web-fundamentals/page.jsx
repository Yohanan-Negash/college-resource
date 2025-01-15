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
  Globe,
  Layers,
  Paintbrush,
} from 'lucide-react';

export default function WebFundamentalsResourcesPage() {
  const foundationResources = [
    {
      title: 'MDN: Getting started with the Web',
      description: "Beginner's guide to web development by Mozilla.",
      type: 'Documentation',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web',
      duration: 'Self-paced',
    },
    {
      title: 'freeCodeCamp: Responsive Web Design',
      description: 'Learn HTML and CSS with practical projects.',
      type: 'Course',
      url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
      duration: 'Self-paced',
    },
    {
      title: 'W3Schools',
      description:
        'Comprehensive tutorials and references for web technologies.',
      type: 'Documentation',
      url: 'https://www.w3schools.com/',
      duration: 'Self-paced',
    },
  ];

  const htmlResources = [
    {
      title: 'HTML Crash Course For Absolute Beginners',
      description: 'Quick introduction to HTML by Traversy Media.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
      duration: '1 hour',
    },
    {
      title: 'HTML Full Course - Build a Website Tutorial',
      description: 'Comprehensive HTML course by freeCodeCamp.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
      duration: '2 hours',
    },
  ];

  const cssResources = [
    {
      title: 'CSS Crash Course For Absolute Beginners',
      description: 'Quick introduction to CSS by Traversy Media.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=yfoY53QXEnI',
      duration: '1 hour 25 minutes',
    },
    {
      title: 'CSS Tutorial - Zero to Hero (Complete Course)',
      description: 'In-depth CSS course by freeCodeCamp.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc',
      duration: '6 hours 18 minutes',
    },
  ];

  const javascriptResources = [
    {
      title: 'JavaScript Tutorial for Beginners',
      description: 'Comprehensive JavaScript tutorial by Mosh Hamedani.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      duration: '1 hour',
    },
    {
      title: 'Learn JavaScript - Full Course for Beginners',
      description: 'Complete JavaScript course by freeCodeCamp.',
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
            Web Fundamentals
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Understand the basics of HTML, CSS, and JavaScript for web
            development.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Learn Web Fundamentals?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Understanding web fundamentals is crucial for anyone interested in
            web development or software engineering. Here is why:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Build the foundation for all web development',
              'Create interactive and responsive websites',
              'Understand how the web works',
              'Essential for front-end and full-stack development',
              'High demand in the job market',
              'Gateway to advanced web technologies and frameworks',
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
            Start with these comprehensive guides and courses to build a strong
            foundation in web development.
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
            <Code className='w-6 h-6 mr-2 text-primary' />
            HTML Resources
          </CardTitle>
          <CardDescription>
            Learn the structure of web pages with these HTML tutorials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {htmlResources.map((resource, index) => (
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
                      Watch Tutorial
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
            <Paintbrush className='w-6 h-6 mr-2 text-primary' />
            CSS Resources
          </CardTitle>
          <CardDescription>
            Master the styling of web pages with these CSS tutorials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {cssResources.map((resource, index) => (
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
                      Watch Tutorial
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
            JavaScript Resources
          </CardTitle>
          <CardDescription>
            Learn to add interactivity to your web pages with these JavaScript
            tutorials.
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
                      Watch Tutorial
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
