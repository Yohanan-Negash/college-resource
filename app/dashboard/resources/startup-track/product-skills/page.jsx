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
  Lightbulb,
  Users,
  TrendingUp,
  Zap,
  Target,
  Compass,
} from 'lucide-react';

export default function ProductSkillsResourcesPage() {
  const foundationResources = [
    {
      title: 'Product School',
      description: 'Free product management resources and webinars.',
      type: 'Course',
      url: 'https://productschool.com/free-product-management-resources/',
      duration: 'Various',
    },
    {
      title: 'Interaction Design Foundation',
      description: 'UX design courses and literature.',
      type: 'Course',
      url: 'https://www.interaction-design.org/',
      duration: 'Self-paced',
    },
    {
      title: 'Product Hunt',
      description: 'Platform to discover and stay updated with new products.',
      type: 'Tool',
      url: 'https://www.producthunt.com/',
      duration: 'Ongoing',
    },
    {
      title: 'The Lean Startup by Eric Ries',
      description: 'Book on building and scaling startups efficiently.',
      type: 'Book',
      url: 'http://theleanstartup.com/',
      duration: 'Self-paced',
    },
  ];

  const productManagementResources = [
    {
      title: 'Product Management 101',
      description:
        'Comprehensive introduction to product management principles.',
      type: 'Course',
      url: 'https://www.udacity.com/course/product-manager-nanodegree--nd036',
      duration: '4 months',
    },
    {
      title: 'Mind the Product',
      description: 'Blog and community for product managers.',
      type: 'Blog',
      url: 'https://www.mindtheproduct.com/',
      duration: 'Ongoing',
    },
    {
      title: 'Product Plan',
      description: 'Resources and guides for product roadmapping.',
      type: 'Tool',
      url: 'https://www.productplan.com/resources/',
      duration: 'Self-paced',
    },
  ];

  const userExperienceResources = [
    {
      title: 'UX Mastery',
      description: 'Articles, resources, and courses on UX design.',
      type: 'Website',
      url: 'https://uxmastery.com/',
      duration: 'Self-paced',
    },
    {
      title: 'Google UX Design Professional Certificate',
      description: 'Comprehensive UX design course by Google.',
      type: 'Course',
      url: 'https://www.coursera.org/professional-certificates/google-ux-design',
      duration: '6 months',
    },
    {
      title: 'A List Apart',
      description: 'Articles on web design, development, and best practices.',
      type: 'Blog',
      url: 'https://alistapart.com/',
      duration: 'Ongoing',
    },
  ];

  const marketResearchResources = [
    {
      title: 'Google Trends',
      description: 'Tool for exploring search trends and consumer interests.',
      type: 'Tool',
      url: 'https://trends.google.com/trends/',
      duration: 'Ongoing',
    },
    {
      title: 'SurveyMonkey',
      description: 'Platform for creating and analyzing surveys.',
      type: 'Tool',
      url: 'https://www.surveymonkey.com/',
      duration: 'Ongoing',
    },
    {
      title: 'Market Research Techniques',
      description: 'Course on fundamental market research methods.',
      type: 'Course',
      url: 'https://www.edx.org/course/market-research',
      duration: '6 weeks',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold text-primary'>
            Product Skills
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Develop product thinking and user-centric design skills.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Develop Product Skills?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            Product skills are crucial for creating successful software and
            applications. Here is why they are important:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Understand user needs and create solutions that address them',
              'Improve decision-making in product development',
              'Enhance collaboration between technical and non-technical teams',
              'Increase the chances of building successful, user-friendly products',
              'Develop a holistic view of the product lifecycle',
              'Gain valuable skills for entrepreneurship and innovation',
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
            <Compass className='w-6 h-6 mr-2 text-primary' />
            Foundation Resources
          </CardTitle>
          <CardDescription>
            Start with these resources to build a strong foundation in product
            skills.
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
            <Target className='w-6 h-6 mr-2 text-primary' />
            Product Management
          </CardTitle>
          <CardDescription>
            Learn about product management principles and practices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {productManagementResources.map((resource, index) => (
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
            <Users className='w-6 h-6 mr-2 text-primary' />
            User Experience (UX) Design
          </CardTitle>
          <CardDescription>
            Explore resources on creating user-centered designs and experiences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {userExperienceResources.map((resource, index) => (
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
            <TrendingUp className='w-6 h-6 mr-2 text-primary' />
            Market Research
          </CardTitle>
          <CardDescription>
            Learn how to conduct market research and understand user needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {marketResearchResources.map((resource, index) => (
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
