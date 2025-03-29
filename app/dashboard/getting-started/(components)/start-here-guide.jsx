'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  BookOpen,
  Laptop,
  Building2,
  Sparkles,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const paths = [
  {
    title: 'Beginner Track',
    description: 'Start your tech journey here',
    progress: 0,
    icon: BookOpen,
    steps: [
      'Programming Basics',
      'Web Fundamentals',
      'Version Control',
      'Open Source',
    ],
    difficulty: 'Beginner',
    color: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
  },
  {
    title: 'Startup Track',
    description: 'Build practical skills for startups',
    progress: 0,
    icon: Laptop,
    steps: [
      'Full-Stack Development',
      'Product Skills',
      'Rapid Prototyping',
      'Agile',
    ],
    difficulty: 'Intermediate',
    color: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    title: 'FAANG Track',
    description: 'Prepare for big tech companies',
    progress: 0,
    icon: Building2,
    steps: ['Data Structures', 'Algorithms', 'System Design'],
    difficulty: 'Advanced',
    color: 'bg-destructive/10',
    iconColor: 'text-destructive',
  },
];

export function StartHereGuide() {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState(null);

  const handleStartPath = (pathTitle) => {
    router.push(
      `/dashboard/path/${pathTitle.toLowerCase().replace(/\s+/g, '-')}`
    );
  };

  // Animation variants
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

  const stepVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <div className='space-y-8 bg-background'>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='space-y-2'
      >
        <div className='flex items-center gap-2'>
          <h2 className='text-lg font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Start Your Tech Journey Here!
          </h2>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'reverse',
            }}
          >
            <Sparkles className='h-6 w-6 text-primary' />
          </motion.div>
        </div>
        <p className='text-muted-foreground'>
          Choose your path based on your goals and experience level.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='grid gap-6 md:grid-cols-3'
      >
        {paths.map((path, pathIndex) => (
          <motion.div
            key={path.title}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            onMouseEnter={() => setActiveCard(pathIndex)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <Card
              className={`relative overflow-hidden h-full flex flex-col ${
                activeCard === pathIndex
                  ? 'shadow-[0_0_25px_rgba(139,92,246,0.25)] dark:shadow-[0_0_25px_rgba(139,92,246,0.25)]'
                  : 'shadow-[0_0_15px_rgba(139,92,246,0.1)] dark:shadow-[0_0_15px_rgba(139,92,246,0.1)]'
              }`}
            >
              {/* Animated border effect for active card */}
              {activeCard === pathIndex && (
                <div className='absolute inset-0 rounded-lg overflow-hidden pointer-events-none'>
                  <div
                    className='absolute inset-0 rounded-lg'
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)',
                      backgroundSize: '200% 100%',
                      animation: 'shine 2s infinite linear',
                    }}
                  ></div>
                </div>
              )}

              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div className={`p-2 rounded-md ${path.color}`}>
                    <path.icon className={`h-6 w-6 ${path.iconColor}`} />
                  </div>
                  <Badge
                    variant={
                      path.difficulty === 'Beginner'
                        ? 'secondary'
                        : path.difficulty === 'Intermediate'
                        ? 'default'
                        : 'destructive'
                    }
                    className='transition-all duration-300 hover:scale-105'
                  >
                    {path.difficulty}
                  </Badge>
                </div>
                <CardTitle className='mt-2'>{path.title}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent className='flex-grow'>
                <div
                  className='overflow-y-auto pr-2 space-y-3'
                  style={{ maxHeight: '150px' }}
                >
                  {path.steps.map((step, index) => (
                    <motion.div
                      custom={index}
                      variants={stepVariants}
                      initial='hidden'
                      animate='visible'
                      key={step}
                      className='flex items-center gap-3 group'
                    >
                      <div
                        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-sm transition-colors duration-300 ${
                          activeCard === pathIndex ? path.color : 'bg-muted/30'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className='transition-colors duration-300 group-hover:text-primary'>
                        {step}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className='pt-0'>
                <Button
                  className='w-full group'
                  onClick={() => handleStartPath(path.title)}
                >
                  Start This Path
                  <span className='ml-2 transition-transform duration-300 group-hover:translate-x-1'>
                    <ArrowRight className='h-4 w-4' />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
