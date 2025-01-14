import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Rocket,
  Calendar,
  Globe,
  Clock,
  Heart,
  LightbulbIcon,
} from 'lucide-react';

export default function Hackathons() {
  const hackathonResources = [
    {
      name: 'Upcoming Hackathons',
      description: 'Find the latest hackathons that are open for registration.',
      icon: Rocket,
      url: 'https://devpost.com/hackathons?status=upcoming',
    },
    {
      name: 'Ongoing Hackathons',
      description: 'Discover hackathons that are currently in progress.',
      icon: Clock,
      url: 'https://devpost.com/hackathons?status=ongoing',
    },
    {
      name: 'Online Hackathons',
      description: 'Explore hackathons you can participate in from anywhere.',
      icon: Globe,
      url: 'https://devpost.com/hackathons?status=upcoming&online=true',
    },
    {
      name: 'Hackathon Calendar',
      description: 'View a calendar of upcoming hackathon events.',
      icon: Calendar,
      url: 'https://devpost.com/hackathons',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8 s'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold bg-clip-text text-primary'>
            Hackathon Hub
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Discover hackathons to boost your skills and build your portfolio.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <LightbulbIcon className='h-6 w-6 mr-2' />
            Why Participate in Hackathons?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Learn new technologies and skills in a short time',
              'Build impressive projects for your portfolio',
              'Network with other developers and potential employers',
              'Win prizes and gain recognition for your work',
              'Challenge yourself and boost your problem-solving abilities',
            ].map((item, index) => (
              <li key={index} className='flex items-start'>
                <ArrowRight className='h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-1' />
                <span className='text-gray-700 dark:text-gray-200'>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className='grid gap-8 md:grid-cols-2'>
        {hackathonResources.map((resource, index) => (
          <Card
            key={index}
            className='h-full transition-all duration-300 hover:shadow-lg'
          >
            <CardHeader>
              <div className='flex items-center space-x-2'>
                <resource.icon className='w-6 h-6 text-primary' />
                <CardTitle className='text-xl'>{resource.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className='mb-4'>
                {resource.description}
              </CardDescription>
              <Button asChild className='w-full'>
                <Link
                  href={resource.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Explore
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className='mt-8 shadow-lg hover:shadow-xl transition-shadow duration-300 '>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-pink-600 dark:text-pink-400'>
            <Heart className='h-6 w-6 mr-2' />
            Appreciating Devpost
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-gray-700 dark:text-gray-200 mb-4'>
            Devpost played a key role in our growth as developers. By
            participating in hackathons and exploring innovative projects, we
            learned how to build and ship ideas faster. The platform not only
            inspired us but also connected us with a global community of
            creators, fueling our motivation while building our app for new
            devs.
          </p>
          <Button
            asChild
            variant='outline'
            className='bg-gradient-to-r from-pink-500 to-red-500 text-white border-0 hover:from-pink-600 hover:to-red-600'
          >
            <Link
              href='https://devpost.com/about'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn More About Devpost
              <ArrowRight className='h-4 w-4 ml-2' />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
