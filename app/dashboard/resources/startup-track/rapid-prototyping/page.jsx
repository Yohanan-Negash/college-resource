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
  Zap,
  Lightbulb,
  PenTool,
  Layers,
  Repeat,
  Smartphone,
} from 'lucide-react';

export default function RapidPrototypingResourcesPage() {
  const foundationResources = [
    {
      title: 'Figma',
      description:
        'Collaborative interface design tool with prototyping features.',
      type: 'Tool',
      url: 'https://www.figma.com/',
      duration: 'Ongoing',
    },
    {
      title: 'Rapid Prototyping Course',
      description: 'Coursera course on rapid prototyping techniques.',
      type: 'Course',
      url: 'https://www.coursera.org/learn/high-fidelity-designs-prototype?action=enroll',
      duration: 'Self-paced',
    },
    {
      title: 'Mobile App Design in Figma',
      description: 'Step-by-step guide to designing mobile apps in Figma.',
      type: 'Course',
      url: 'https://www.udemy.com/course/mobile-app-design-in-figma-from-concept-to-prototype/?couponCode=NEWYEARCAREER',
      duration: 'Self-paced',
    },
    {
      title: 'Typography in UI Design',
      description: 'A great video on UI Design focusing on typography.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=9-oefwZ6Z74',
      duration: '12 minutes',
    },
  ];

  const designToolsResources = [
    {
      title: 'Adobe XD',
      description:
        'Vector-based user experience design tool for web and mobile apps.',
      type: 'Tool',
      url: 'https://www.adobe.com/products/xd.html',
      duration: 'Ongoing',
    },
    {
      title: 'Sketch',
      description:
        'Digital design platform for creating, prototyping, and collaborating.',
      type: 'Tool',
      url: 'https://www.sketch.com/',
      duration: 'Ongoing',
    },
  ];

  const prototypingTechniquesResources = [
    {
      title: 'Paper Prototyping',
      description: 'Learn the basics of paper prototyping for quick ideation.',
      type: 'Article',
      url: 'https://www.nngroup.com/articles/paper-prototyping/',
      duration: '10 minutes',
    },
    {
      title: 'Wireframing for Beginners',
      description: 'Introduction to wireframing techniques and best practices.',
      type: 'Tutorial',
      url: 'https://webdesign.tutsplus.com/articles/a-beginners-guide-to-wireframing--webdesign-7399',
      duration: '30 minutes',
    },
    {
      title: 'Interactive Prototyping with Figma',
      description: 'Learn how to create interactive prototypes using Figma.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=iBkXf6u8htI',
      duration: '20 minutes',
    },
  ];

  const userTestingResources = [
    {
      title: 'Introduction to User Testing',
      description:
        'Learn the basics of conducting user tests for your prototypes.',
      type: 'Article',
      url: 'https://www.usability.gov/how-to-and-tools/methods/usability-testing.html',
      duration: '15 minutes',
    },
    {
      title: 'Remote User Testing Tools',
      description:
        'Overview of tools for conducting remote user testing sessions.',
      type: 'Article',
      url: 'https://www.uxbooth.com/articles/the-best-tools-for-remote-usability-testing/',
      duration: '20 minutes',
    },
    {
      title: 'Analyzing User Feedback',
      description:
        'Learn how to analyze and act on user feedback from prototype testing.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=8JYjzLJ3Zw8',
      duration: '25 minutes',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold text-primary'>
            Rapid Prototyping
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Master the art of quickly building and iterating on product ideas.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Learn Rapid Prototyping?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Rapid prototyping is a crucial skill for developers and designers.
            Here is why it is important:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Quickly validate ideas and concepts',
              'Improve communication between team members and stakeholders',
              'Reduce development time and costs',
              'Identify and solve usability issues early in the design process',
              'Facilitate user testing and gather valuable feedback',
              'Enhance collaboration between designers and developers',
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
            <Lightbulb className='w-6 h-6 mr-2 text-primary' />
            Foundation Resources
          </CardTitle>
          <CardDescription>
            Start with these resources to build a strong foundation in rapid
            prototyping.
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
            <PenTool className='w-6 h-6 mr-2 text-primary' />
            Design Tools
          </CardTitle>
          <CardDescription>
            Explore popular design tools used for rapid prototyping.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {designToolsResources.map((resource, index) => (
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
            <Layers className='w-6 h-6 mr-2 text-primary' />
            Prototyping Techniques
          </CardTitle>
          <CardDescription>
            Learn various techniques for effective rapid prototyping.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {prototypingTechniquesResources.map((resource, index) => (
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
