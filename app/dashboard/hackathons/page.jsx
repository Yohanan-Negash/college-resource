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
  Rocket,
  Calendar,
  Globe,
  Clock,
  Heart,
  LightbulbIcon,
  ExternalLink,
  Trophy,
} from 'lucide-react';

export default function Hackathons() {
  const hackathonResources = [
    {
      name: 'Upcoming Hackathons',
      description: 'Find the latest hackathons that are open for registration.',
      icon: Rocket,
      url: 'https://devpost.com/hackathons?status%5B%5D=upcoming',
      color: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
    },
    {
      name: 'Open Hackathons',
      description: 'Discover hackathons that are currently in open right now.',
      icon: Clock,
      url: 'https://devpost.com/hackathons?status%5B%5D=open',
      color: 'bg-green-500/10',
      iconColor: 'text-green-500',
    },
    {
      name: 'Online Hackathons',
      description: 'Explore hackathons you can participate in from anywhere.',
      icon: Globe,
      url: 'https://devpost.com/hackathons?challenge_type%5B%5D=online',
      color: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
    },
    {
      name: 'Hackathon Calendar',
      description: 'View a list of hackathon events.',
      icon: Calendar,
      url: 'https://devpost.com/hackathons',
      color: 'bg-orange-500/10',
      iconColor: 'text-orange-500',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-purple-500/10'>
              <Trophy className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Hackathon Hub
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground mt-2'>
            Discover hackathons to boost your skills and build your portfolio.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <LightbulbIcon className='h-6 w-6 text-yellow-500' />
            </div>
            Why Participate in Hackathons?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Learn new technologies and skills in a short time',
              'Build impressive projects for your portfolio',
              'Network with other developers and potential employers',
              'Win prizes and gain recognition for your work',
              'Challenge yourself and boost your problem-solving abilities',
            ].map((item, index) => (
              <li key={index} className='flex items-start group'>
                <ArrowRight className='h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5' />
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
            className='h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300'
          >
            <CardHeader>
              <div className='flex items-center space-x-3'>
                <div className={`p-2 rounded-md ${resource.color}`}>
                  <resource.icon className={`w-6 h-6 ${resource.iconColor}`} />
                </div>
                <CardTitle className='text-xl'>{resource.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className='flex-grow'>
              <CardDescription className='mb-4 text-muted-foreground'>
                {resource.description}
              </CardDescription>
            </CardContent>
            <CardFooter className='pt-0'>
              <Button asChild className='w-full group'>
                <Link
                  href={resource.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Explore
                  <ExternalLink className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className='mt-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 border border-pink-200 dark:border-pink-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <div className='p-2 rounded-md bg-pink-500/10 mr-2'>
              <Heart className='h-6 w-6 text-pink-500' />
            </div>
            <span className='bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent'>
              Appreciating Devpost
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground mb-6'>
            Devpost played a key role in our growth as developers. By
            participating in hackathons and exploring innovative projects, we
            learned how to build and ship ideas faster. The platform not only
            inspired us but also connected us with a global community of
            creators, fueling our motivation while building our app for new
            devs.
          </p>
          <Button
            asChild
            className='w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600'
          >
            <Link
              href='https://devpost.com/about'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn More About Devpost
              <ExternalLink className='h-4 w-4 ml-2' />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
