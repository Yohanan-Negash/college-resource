'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Rocket,
  Book,
  Users,
  PenToolIcon as Tool,
  Trophy,
} from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resources = [
    {
      title: 'Start Your Journey',
      description: 'Choose your career path and get started',
      icon: Rocket,
      href: '/dashboard/getting-started',
    },
    {
      title: 'Foundations',
      description:
        'Master the fundamentals of programming and computer science',
      icon: Book,
      href: '/dashboard/foundations',
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

  if (!mounted) return null;

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-5xl font-extrabold tracking-tight sm:text-6xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Welcome to Your Tech Career Hub
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Enjoy a collection of carefully curated resources, handpicked to
            help you succeed in your developer journey and achieve your career
            goals.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
        >
          {resources.map((item, index) => (
            <Card
              key={index}
              className='h-full transition-all duration-300 hover:shadow-lg'
            >
              <CardHeader>
                <CardTitle className='flex items-center space-x-2'>
                  <item.icon className='w-6 h-6 text-primary' />
                  <span>{item.title}</span>
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className='w-full'>
                  <Link href={item.href}>
                    Explore
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className='mt-16 text-center'>
          <p className='text-xl text-muted-foreground'>
            Thank you for joining thousands of aspiring developers who are
            accelerating their careers with our platform. Your journey to
            success starts here!
          </p>
        </div>
      </div>
    </div>
  );
}
