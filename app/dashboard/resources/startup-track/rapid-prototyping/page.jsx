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
  Zap,
  Lightbulb,
  PenTool,
  Layers,
  BookOpen,
  FileText,
  Video,
  GraduationCap,
  ExternalLink,
  Clock,
  Wrench,
  Users,
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
      icon: Wrench,
    },
    {
      title: 'Rapid Prototyping Course',
      description: 'Coursera course on rapid prototyping techniques.',
      type: 'Course',
      url: 'https://www.coursera.org/learn/high-fidelity-designs-prototype?action=enroll',
      duration: 'Self-paced',
      icon: GraduationCap,
    },
    {
      title: 'Mobile App Design in Figma',
      description: 'Step-by-step guide to designing mobile apps in Figma.',
      type: 'Course',
      url: 'https://www.udemy.com/course/mobile-app-design-in-figma-from-concept-to-prototype/?couponCode=NEWYEARCAREER',
      duration: 'Self-paced',
      icon: GraduationCap,
    },
    {
      title: 'Typography in UI Design',
      description: 'A great video on UI Design focusing on typography.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=9-oefwZ6Z74',
      duration: '12 minutes',
      icon: Video,
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
      icon: Wrench,
    },
    {
      title: 'Sketch',
      description:
        'Digital design platform for creating, prototyping, and collaborating.',
      type: 'Tool',
      url: 'https://www.sketch.com/',
      duration: 'Ongoing',
      icon: Wrench,
    },
  ];

  const prototypingTechniquesResources = [
    {
      title: 'Paper Prototyping',
      description: 'Learn the basics of paper prototyping for quick ideation.',
      type: 'Article',
      url: 'https://www.nngroup.com/articles/paper-prototyping/',
      duration: '10 minutes',
      icon: FileText,
    },
    {
      title: 'Wireframing for Beginners',
      description: 'Introduction to wireframing techniques and best practices.',
      type: 'Tutorial',
      url: 'https://webdesign.tutsplus.com/articles/a-beginners-guide-to-wireframing--webdesign-7399',
      duration: '30 minutes',
      icon: FileText,
    },
    {
      title: 'Interactive Prototyping with Figma',
      description: 'Learn how to create interactive prototypes using Figma.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=iBkXf6u8htI',
      duration: '20 minutes',
      icon: Video,
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
      icon: FileText,
    },
    {
      title: 'Remote User Testing Tools',
      description:
        'Overview of tools for conducting remote user testing sessions.',
      type: 'Article',
      url: 'https://www.uxbooth.com/articles/the-best-tools-for-remote-usability-testing/',
      duration: '20 minutes',
      icon: FileText,
    },
    {
      title: 'Analyzing User Feedback',
      description:
        'Learn how to analyze and act on user feedback from prototype testing.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=8JYjzLJ3Zw8',
      duration: '25 minutes',
      icon: Video,
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Course':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'Tool':
        return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'Video':
        return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'Article':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
      case 'Tutorial':
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
              <Zap className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Rapid Prototyping
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground ml-11'>
            Master the art of quickly building and iterating on product ideas.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <BookOpen className='h-6 w-6 text-yellow-500' />
            </div>
            Why Learn Rapid Prototyping?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>
            Rapid prototyping is a crucial skill for developers and designers.
            Here is why it is important:
          </p>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Quickly validate ideas and concepts',
              'Improve communication between team members and stakeholders',
              'Reduce development time and costs',
              'Identify and solve usability issues early in the design process',
              'Facilitate user testing and gather valuable feedback',
              'Enhance collaboration between designers and developers',
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
              <Lightbulb className='h-6 w-6 text-blue-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Foundation Resources
            </CardTitle>
          </div>
          <CardDescription>
            Start with these resources to build a strong foundation in rapid
            prototyping.
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
              <PenTool className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>Design Tools</CardTitle>
          </div>
          <CardDescription>
            Explore popular design tools used for rapid prototyping.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {designToolsResources.map((resource, index) => (
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
              <Layers className='h-6 w-6 text-green-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Prototyping Techniques
            </CardTitle>
          </div>
          <CardDescription>
            Learn various techniques for effective rapid prototyping.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {prototypingTechniquesResources.map((resource, index) => (
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
            <div className='p-2 rounded-md bg-amber-500/10'>
              <Users className='h-6 w-6 text-amber-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>User Testing</CardTitle>
          </div>
          <CardDescription>
            Learn how to test your prototypes with real users and gather
            valuable feedback.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {userTestingResources.map((resource, index) => (
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
