'use client';

import { useState } from 'react';
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
  Code,
  Server,
  Smartphone,
  Database,
  ChevronDown,
  LightbulbIcon,
  Heart,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RoadmapsPage() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const careerPaths = [
    {
      title: 'Frontend Developer',
      description:
        'Specialize in creating user interfaces and experiences for web applications.',
      icon: Code,
      roadmapLink: 'https://roadmap.sh/frontend',
    },
    {
      title: 'Backend Developer',
      description:
        'Focus on server-side logic, databases, and application architecture.',
      icon: Server,
      roadmapLink: 'https://roadmap.sh/backend',
    },
    {
      title: 'Full Stack Developer',
      description:
        'Develop both client and server software, handling all aspects of web development.',
      icon: Database,
      roadmapLink: 'https://roadmap.sh/full-stack',
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
      <Card className='mb-8 '>
        <CardHeader>
          <CardTitle className='text-4xl font-bold bg-clip-text text-primary'>
            Tech Career Roadmaps
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Explore different career paths in tech and find comprehensive
            roadmaps to guide your learning journey.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <LightbulbIcon className='h-6 w-6 mr-2' />
            Why Follow These Roadmaps?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Get a clear path for learning and skill development',
              'Understand the technologies and concepts crucial for your chosen career',
              'Stay up-to-date with industry trends and best practices',
              'Identify gaps in your knowledge and fill them systematically',
              'Boost your confidence by tracking your progress along the roadmap',
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
        {careerPaths.map((path, index) => (
          <Card
            key={index}
            className='h-full transition-all duration-300 hover:shadow-lg'
          >
            <CardHeader>
              <div className='flex items-center space-x-2'>
                <path.icon className='w-6 h-6 text-primary' />
                <CardTitle className='text-xl'>{path.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className='mb-4'>
                {path.description}
              </CardDescription>
              <Button asChild className='w-full'>
                <Link
                  href={path.roadmapLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Roadmap
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}

        <Card className='h-full transition-all duration-300 hover:shadow-lg'>
          <CardHeader>
            <div className='flex items-center space-x-2'>
              <Smartphone className='w-6 h-6 text-primary' />
              <CardTitle className='text-xl'>Mobile Development</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className='mb-4'>
              Develop native mobile applications for iOS and Android platforms.
            </CardDescription>
            <Button
              onClick={() => setIsMobileExpanded(!isMobileExpanded)}
              className='w-full mb-4'
              variant='outline'
            >
              Choose Platform
              <motion.div
                animate={{ rotate: isMobileExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className='ml-2'
              >
                <ChevronDown className='h-4 w-4' />
              </motion.div>
            </Button>

            <AnimatePresence>
              {isMobileExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className='space-y-2'
                >
                  {mobileOptions.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button asChild className='w-full' variant='secondary'>
                        <Link
                          href={option.roadmapLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {option.title}
                          <ArrowRight className='ml-2 h-4 w-4' />
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>

      <Card className='mt-8 shadow-lg hover:shadow-xl transition-shadow duration-300 '>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-pink-600 dark:text-pink-400'>
            <Heart className='h-6 w-6 mr-2' />
            Appreciating roadmap.sh
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-gray-700 dark:text-gray-200 mb-4'>
            roadmap.sh has been a game-changer for us as we built our app for
            aspiring developers. Their open-source roadmaps provided clarity in
            our learning paths, helping us stay focused and productive. Their
            resources have been an essential guide in our journey, breaking down
            complex tech concepts into clear steps that made us better
            developers.
          </p>
          <Button
            asChild
            variant='outline'
            className='bg-gradient-to-r from-pink-500 to-red-500 text-white border-0 hover:from-pink-600 hover:to-red-600'
          >
            <Link
              href='https://roadmap.sh/about'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn More About roadmap.sh
              <ArrowRight className='h-4 w-4 ml-2' />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
