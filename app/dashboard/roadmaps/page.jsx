'use client';

import { useState } from 'react';
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
  Server,
  Smartphone,
  Database,
  ChevronDown,
  LightbulbIcon,
  Heart,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function RoadmapsPage() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const careerPaths = [
    {
      title: 'Frontend Developer',
      description:
        'Specialize in creating user interfaces and experiences for web applications.',
      icon: Code,
      roadmapLink: 'https://roadmap.sh/frontend',
      color: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Backend Developer',
      description:
        'Focus on server-side logic, databases, and application architecture.',
      icon: Server,
      roadmapLink: 'https://roadmap.sh/backend',
      color: 'bg-green-500/10',
      iconColor: 'text-green-500',
    },
    {
      title: 'Full Stack Developer',
      description:
        'Develop both client and server software, handling all aspects of web development.',
      icon: Database,
      roadmapLink: 'https://roadmap.sh/full-stack',
      color: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
    },
  ];

  const mobileOptions = [
    {
      title: 'Android Development',
      description: 'Build native applications for Android devices.',
      roadmapLink: 'https://roadmap.sh/android',
    },
    {
      title: 'iOS Development',
      description: "Create native applications for Apple's iOS platform.",
      roadmapLink: 'https://roadmap.sh/ios',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Tech Career Roadmaps
          </CardTitle>
          <CardDescription className='text-lg text-muted-foreground'>
            Explore different career paths in tech and find comprehensive
            roadmaps to guide your learning journey.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <LightbulbIcon className='h-6 w-6 text-yellow-500' />
            </div>
            Why Follow These Roadmaps?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Get a clear path for learning and skill development',
              'Understand the technologies and concepts crucial for your chosen career',
              'Stay up-to-date with industry trends and best practices',
              'Identify gaps in your knowledge and fill them systematically',
              'Boost your confidence by tracking your progress along the roadmap',
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
        {careerPaths.map((path, index) => (
          <Card
            key={path.title}
            className='h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300'
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <CardHeader>
              <div className='flex items-center space-x-3'>
                <div className={`p-2 rounded-md ${path.color}`}>
                  <path.icon className={`w-6 h-6 ${path.iconColor}`} />
                </div>
                <CardTitle className='text-xl'>{path.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className='flex-grow'>
              <CardDescription className='mb-4 text-muted-foreground'>
                {path.description}
              </CardDescription>
            </CardContent>
            <CardFooter className='pt-0'>
              <Button asChild className='w-full group'>
                <Link
                  href={path.roadmapLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Roadmap
                  <ExternalLink className='h-4 w-4 ml-2' />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}

        <Card
          className='h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300'
          onMouseEnter={() => setActiveCard('mobile')}
          onMouseLeave={() => setActiveCard(null)}
        >
          <CardHeader>
            <div className='flex items-center space-x-3'>
              <div className='p-2 rounded-md bg-orange-500/10'>
                <Smartphone className='w-6 h-6 text-orange-500' />
              </div>
              <CardTitle className='text-xl'>Mobile Development</CardTitle>
            </div>
          </CardHeader>
          <CardContent className='flex-grow'>
            <CardDescription className='mb-4 text-muted-foreground'>
              Develop native mobile applications for iOS and Android platforms.
            </CardDescription>
            <Button
              onClick={() => setIsMobileExpanded(!isMobileExpanded)}
              className='w-full mb-4'
              variant='outline'
            >
              Choose Platform
              <ChevronDown
                className={`h-4 w-4 ml-2 transition-transform duration-200 ${
                  isMobileExpanded ? 'rotate-180' : ''
                }`}
              />
            </Button>

            <AnimatePresence>
              {isMobileExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className='space-y-3'
                >
                  {mobileOptions.map((option, index) => (
                    <Button
                      key={index}
                      asChild
                      className='w-full'
                      variant='secondary'
                    >
                      <Link
                        href={option.roadmapLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {option.title}
                        <ExternalLink className='h-4 w-4 ml-2' />
                      </Link>
                    </Button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>

      <Card className='mt-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 border border-pink-200 dark:border-pink-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <div className='p-2 rounded-md bg-pink-500/10 mr-2'>
              <Heart className='h-6 w-6 text-pink-500' />
            </div>
            <span className='bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent'>
              Appreciating roadmap.sh
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground mb-6'>
            roadmap.sh has been a game-changer for us as we built our app for
            aspiring developers. Their open-source roadmaps provided clarity in
            our learning paths, helping us stay focused and productive. Their
            resources have been an essential guide in our journey, breaking down
            complex tech concepts into clear steps that made us better
            developers.
          </p>
          <Button
            asChild
            className='w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600'
          >
            <Link
              href='https://roadmap.sh/about'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn More About roadmap.sh
              <ExternalLink className='h-4 w-4 ml-2' />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
