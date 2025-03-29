'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Code,
  Rocket,
  Users,
  PenToolIcon as Tool,
  Trophy,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resources = [
    {
      title: 'Start Your Journey',
      description: 'Take the first step towards your dream tech career',
      icon: Rocket,
      href: '/dashboard/getting-started',
      primary: true,
    },
    {
      title: 'Explore Roadmaps',
      description: 'View detailed career roadmaps',
      icon: Code,
      href: '/dashboard/roadmaps',
    },
    {
      title: 'Upcoming Hackathons',
      description: 'Find and join exciting hackathons',
      icon: Trophy,
      href: '/dashboard/hackathons',
    },
    {
      title: 'Internship Opportunities',
      description: 'Discover internships at top tech companies',
      icon: Users,
      href: '/dashboard/internships',
    },
    {
      title: 'Tools & Resources',
      description:
        'Access curated tools and resources that will improve your development experience.',
      icon: Tool,
      href: '/dashboard/tools',
    },
  ];

  // Staggered card animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  if (!mounted) return null;

  return (
    <div className='min-h-screen bg-background relative overflow-hidden'>
      {/* Decorative elements */}
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse-slow'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-pink-500/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse-slow'></div>

      <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='text-center mb-16'
        >
          <div className='inline-block relative mb-2'>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'reverse',
              }}
            >
              <Sparkles className='w-8 h-8 text-purple-400 absolute -top-6 -right-6' />
            </motion.div>
            <h1 className='text-5xl font-extrabold tracking-tight sm:text-6xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Welcome to PhazeOne!
            </h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='text-xl text-muted-foreground max-w-3xl mx-auto'
          >
            Enjoy a collection of carefully curated resources, handpicked to
            help you succeed in your developer journey and achieve your career
            goals.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
        >
          {resources.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip open={item.primary && activeCard === null}>
                <TooltipTrigger asChild>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <Card
                      className={`h-full flex flex-col transition-all duration-300 shadow-xl relative ${
                        item.primary
                          ? 'ring-2 ring-primary shadow-purple-500/30 dark:shadow-purple-500/30'
                          : 'shadow-purple-500/10 dark:shadow-purple-500/10 hover:shadow-purple-500/20 dark:hover:shadow-purple-500/20'
                      }`}
                    >
                      {/* Subtle gradient border effect */}
                      <div
                        className={`absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 pointer-events-none ${
                          activeCard === index ? 'opacity-100' : ''
                        }`}
                      >
                        <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 animate-gradient-x'></div>
                      </div>

                      <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                          <div
                            className={`p-2 rounded-md ${
                              item.primary ? 'bg-primary/10' : 'bg-muted'
                            }`}
                          >
                            <item.icon
                              className={`w-5 h-5 flex-shrink-0 ${
                                item.primary
                                  ? 'text-primary'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          </div>
                          <span>{item.title}</span>
                        </CardTitle>
                        <CardDescription className='mt-2'>
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className='mt-auto pt-0'>
                        <Button
                          asChild
                          className={`w-full group ${
                            item.primary ? 'bg-primary hover:bg-primary/90' : ''
                          }`}
                        >
                          <Link
                            href={item.href}
                            className='flex items-center justify-center'
                          >
                            {item.primary ? 'Get Started' : 'Explore'}
                            <span
                              className={`ml-2 transition-transform duration-300 ${
                                item.primary
                                  ? 'group-hover:translate-x-1'
                                  : 'group-hover:translate-x-1'
                              }`}
                            >
                              {item.primary ? (
                                <ChevronRight className='h-4 w-4' />
                              ) : (
                                <ArrowRight className='h-4 w-4' />
                              )}
                            </span>
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </TooltipTrigger>
                {item.primary && (
                  <TooltipContent
                    sideOffset={5}
                    className='animate-in fade-in-50 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
                  >
                    <p>Start here to kickstart your tech journey!</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className='mt-16 text-center'
        >
          <p className='text-xl text-muted-foreground'>
            Thank you for joining thousands of aspiring developers who are
            accelerating their careers with our platform. Your journey to
            success starts here!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
