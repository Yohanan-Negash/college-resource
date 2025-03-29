'use client';

import { useState, useEffect, useCallback } from 'react';
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
  CheckCircle,
  Circle,
  ArrowRight,
  Trophy,
  BookOpen,
  Sparkles,
  Star,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Layers,
  ArrowLeft,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const useProgress = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const storedProgress = localStorage.getItem('foundationProgress');
    if (storedProgress) {
      setProgress(JSON.parse(storedProgress));
    }
  }, []);

  const updateProgress = useCallback((topicSlug, completedSteps) => {
    setProgress((prevProgress) => {
      const newProgress = { ...prevProgress, [topicSlug]: completedSteps };
      localStorage.setItem('foundationProgress', JSON.stringify(newProgress));
      return newProgress;
    });
  }, []);

  return { progress, updateProgress };
};

export function PathGuide({ title, description, steps, pathSlug }) {
  const [currentSteps, setCurrentSteps] = useState(steps);
  const [activeStep, setActiveStep] = useState(null);
  const [showCompletionEffect, setShowCompletionEffect] = useState(false);
  const router = useRouter();
  const { progress, updateProgress } = useProgress();

  useEffect(() => {
    const storedProgress = progress[pathSlug] || [];
    const updatedSteps = steps.map((step, index) => ({
      ...step,
      completed: Array.isArray(storedProgress)
        ? storedProgress.includes(index)
        : false,
    }));
    setCurrentSteps(updatedSteps);
  }, [steps, pathSlug, progress]);

  const handleToggleStep = (index) => {
    const isCompleting = !currentSteps[index].completed;

    setCurrentSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step, i) =>
        i === index ? { ...step, completed: !step.completed } : step
      );
      const completedIndices = updatedSteps
        .map((step, i) => (step.completed ? i : -1))
        .filter((i) => i !== -1);
      updateProgress(pathSlug, completedIndices);

      // Check if all steps are now completed
      const allCompleted = updatedSteps.every((step) => step.completed);
      if (allCompleted && isCompleting) {
        setShowCompletionEffect(true);
        setTimeout(() => setShowCompletionEffect(false), 5000);
      }

      return updatedSteps;
    });
  };

  const calculateProgress = useCallback(() => {
    const completedSteps = currentSteps.filter((step) => step.completed).length;
    return Math.round((completedSteps / currentSteps.length) * 100);
  }, [currentSteps]);

  const [progressPercentage, setProgressPercentage] = useState(
    calculateProgress()
  );

  useEffect(() => {
    setProgressPercentage(calculateProgress());
  }, [currentSteps, calculateProgress]);

  const getProgressColor = (percentage) => {
    if (percentage < 25) return 'bg-red-500';
    if (percentage < 50) return 'bg-orange-500';
    if (percentage < 75) return 'bg-yellow-500';
    if (percentage < 100) return 'bg-blue-500';
    return 'bg-gradient-to-r from-green-400 to-emerald-500';
  };

  const getNextIncompleteStep = () => {
    const index = currentSteps.findIndex((step) => !step.completed);
    return index >= 0 ? index : null;
  };

  return (
    <div className='space-y-8 relative'>
      {/* Celebration effect when all steps are completed */}
      <AnimatePresence>
        {showCompletionEffect && (
          <motion.div
            className='fixed inset-0 pointer-events-none z-50 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='absolute inset-0 bg-black/30 backdrop-blur-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className='bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.5)] text-white text-center max-w-md z-10'
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
            >
              <div className='flex justify-center items-center mb-4'>
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    rotate: [0, 360, 720, 1080],
                    scale: [0.5, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    times: [0, 0.6, 0.9, 1],
                    type: 'spring',
                    bounce: 0.5,
                  }}
                  className='flex justify-center'
                >
                  <Trophy className='h-16 w-16 text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.7)]' />
                </motion.div>
              </div>
              <h2 className='text-2xl font-bold mb-2'>Path Completed!</h2>
              <p className='mb-4'>
                Congratulations! You&apos;ve completed all steps in this
                learning path.
              </p>
              <div className='flex justify-center space-x-2 mb-6'>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, type: 'spring' }}
                  >
                    <Star className='h-6 w-6 text-yellow-300 fill-yellow-300' />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className='space-y-2'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='p-2 rounded-md bg-purple-500/10'>
              <BookOpen className='h-6 w-6 text-purple-500' />
            </div>
            <h2 className='text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              {title}
            </h2>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='outline'
                  size='sm'
                  className='border-zinc-200 dark:border-zinc-800 hover:bg-purple-500/10 hover:text-purple-500 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300'
                  onClick={() => router.push('/dashboard/getting-started')}
                >
                  <ArrowLeft className='mr-1.5 h-4 w-4' />
                  All Paths
                </Button>
              </TooltipTrigger>
              <TooltipContent>Return to path selection</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className='text-muted-foreground ml-11'>{description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className='shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/40 transition-all duration-300'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <CardTitle className='flex items-center gap-2'>
                <Trophy className='h-5 w-5 text-purple-500' />
                Your Progress
              </CardTitle>
              <Badge
                variant={progressPercentage === 100 ? 'default' : 'outline'}
                className={
                  progressPercentage === 100
                    ? 'bg-green-500 hover:bg-green-600'
                    : ''
                }
              >
                {progressPercentage === 100 ? (
                  <span className='flex items-center gap-1'>
                    <CheckCircle2 className='h-3.5 w-3.5' />
                    Completed
                  </span>
                ) : (
                  <span className='flex items-center gap-1'>
                    <Clock className='h-3.5 w-3.5' />
                    In Progress
                  </span>
                )}
              </Badge>
            </div>
            <CardDescription>
              Complete all steps to finish this path and earn your achievement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <div className='flex justify-between text-sm'>
                <span>Overall Completion</span>
                <span
                  className={
                    progressPercentage === 100 ? 'font-bold text-green-500' : ''
                  }
                >
                  {progressPercentage}%
                </span>
              </div>
              <div className='h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden'>
                <motion.div
                  className={`h-full rounded-full ${getProgressColor(
                    progressPercentage
                  )}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>
          </CardContent>
          {getNextIncompleteStep() !== null && (
            <CardFooter className='border-t border-zinc-200 dark:border-zinc-800 pt-4'>
              <div className='w-full'>
                <p className='text-sm text-muted-foreground mb-2'>
                  Continue your journey:
                </p>
                <Button
                  variant='outline'
                  className='w-full justify-between hover:bg-purple-500/10 hover:text-purple-500 group'
                  onClick={() => setActiveStep(getNextIncompleteStep())}
                >
                  <span>
                    Next: {currentSteps[getNextIncompleteStep()]?.title}
                  </span>
                  <ChevronRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Button>
              </div>
            </CardFooter>
          )}
        </Card>
      </motion.div>

      <div className='space-y-4'>
        {currentSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className={
              activeStep === index ? 'ring-2 ring-purple-500 rounded-lg' : ''
            }
          >
            <Card
              className={`transition-all duration-300 ${
                step.completed
                  ? 'shadow-[0_0_15px_rgba(74,222,128,0.15)] dark:shadow-[0_0_15px_rgba(74,222,128,0.15)] border-green-200 dark:border-green-900/30'
                  : 'shadow-[0_0_15px_rgba(139,92,246,0.1)] dark:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]'
              }`}
            >
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <CardTitle className='flex items-center gap-2'>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleToggleStep(index)}
                      className='cursor-pointer'
                    >
                      {step.completed ? (
                        <CheckCircle className='h-5 w-5 text-green-500 transition-all duration-300' />
                      ) : (
                        <Circle className='h-5 w-5 text-muted-foreground transition-all duration-300' />
                      )}
                    </motion.div>
                    <span
                      className={
                        step.completed
                          ? 'text-green-600 dark:text-green-400'
                          : ''
                      }
                    >
                      {step.title}
                    </span>
                    {step.completed && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 15,
                        }}
                      >
                        <Sparkles className='h-4 w-4 text-yellow-500' />
                      </motion.div>
                    )}
                  </CardTitle>
                  <Badge
                    variant={step.completed ? 'default' : 'outline'}
                    className={
                      step.completed ? 'bg-green-500 hover:bg-green-600' : ''
                    }
                  >
                    {step.completed ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>{step.description}</p>
                <div className='mt-4 flex flex-wrap gap-2 justify-end'>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => handleToggleStep(index)}
                          variant={step.completed ? 'outline' : 'default'}
                          className={
                            step.completed
                              ? 'border-green-200 dark:border-green-900/30 hover:bg-red-500/10 hover:text-red-500 hover:border-red-200 transition-colors duration-300'
                              : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300'
                          }
                        >
                          {step.completed ? (
                            <span className='flex items-center'>
                              <XCircle className='mr-1.5 h-4 w-4' />
                              Mark as Incomplete
                            </span>
                          ) : (
                            <span className='flex items-center'>
                              <CheckCircle2 className='mr-1.5 h-4 w-4' />
                              Mark as Complete
                            </span>
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {step.completed
                          ? 'Remove this step from your completed items'
                          : 'Mark this step as completed to track your progress'}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Button
                    variant='outline'
                    className='hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-200 dark:hover:border-blue-800 group transition-all duration-300'
                    asChild
                  >
                    <Link
                      href={`/dashboard/resources/${pathSlug}/${step.resourcePath}`}
                    >
                      View Resources
                      <ArrowRight className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className='flex justify-center mt-12'>
        <Button
          variant='outline'
          className='border-zinc-200 dark:border-zinc-800 hover:bg-purple-500/10 hover:text-purple-500 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group'
          onClick={() => router.push('/dashboard/getting-started')}
        >
          <Layers className='mr-2 h-4 w-4' />
          Switch Learning Path
          <ArrowRight className='ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1' />
        </Button>
      </div>
    </div>
  );
}
