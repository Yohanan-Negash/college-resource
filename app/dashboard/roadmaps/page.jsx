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
    <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>
        Tech Career Roadmaps
      </h1>
      <p className='text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto'>
        Explore different career paths in tech and find comprehensive roadmaps
        to guide your learning journey.
      </p>

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

      <div className='mt-16 text-center'>
        <p className='text-lg text-muted-foreground mb-4'>
          These roadmaps are provided by{' '}
          <Link href='https://roadmap.sh' className='underline text-purple-500'>
            roadmap.sh
          </Link>
          , an open-source project dedicated to creating comprehensive guides
          for various technology paths. We highly recommend checking out their
          resources to gain a detailed understanding of the tech landscape.
        </p>
      </div>
    </div>
  );
}
