'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Separator } from '../../../components/ui/separator';
import {
  LinkedinIcon,
  Briefcase,
  Building,
  Search,
  Rocket,
  Coffee,
  Code,
  Zap,
  ExternalLink,
} from 'lucide-react';

export default function JobSearch() {
  const generalJobBoards = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com',
      icon: LinkedinIcon,
      description: 'Network and find job opportunities globally.',
    },
    {
      name: 'Indeed',
      url: 'https://www.indeed.com',
      icon: Briefcase,
      description: 'A large job search engine with diverse listings.',
    },
    {
      name: 'ZipRecruiter',
      url: 'https://www.ziprecruiter.com',
      icon: Search,
      description: 'AI-powered platform for job seekers.',
    },
    {
      name: 'Lensa',
      url: 'https://lensa.com',
      icon: Building,
      description: 'AI-matched job recommendations.',
    },
    {
      name: 'TechCareers',
      url: 'https://www.techcareers.com',
      icon: Code,
      description: 'Tech-focused job board.',
    },
  ];

  const startupJobBoards = [
    {
      name: 'Wellfound (formerly AngelList)',
      url: 'https://wellfound.com',
      icon: Rocket,
      description: 'Explore startup jobs and connect with investors.',
    },
    {
      name: 'Startup Jobs',
      url: 'https://startup.jobs',
      icon: Coffee,
      description: 'Find roles at growing startups.',
    },
    {
      name: 'VentureLoop',
      url: 'https://www.ventureloop.com',
      icon: Zap,
      description: 'Jobs at venture-backed companies.',
    },
  ];

  const JobBoardSection = ({ title, description, boards }) => (
    <Card className='mb-8'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4 sm:grid-cols-2'>
          {boards.map((board) => (
            <Card key={board.name} className='overflow-hidden'>
              <CardContent className='p-0'>
                <Button
                  variant='ghost'
                  className='w-full h-full justify-start py-4 px-4 hover:bg-accent'
                  asChild
                >
                  <Link
                    href={board.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='flex items-start space-x-4 w-full'>
                      <board.icon className='h-5 w-5 mt-1 flex-shrink-0' />
                      <div className='flex-grow min-w-0'>
                        <div className='font-semibold truncate'>
                          {board.name}
                        </div>
                        <div className='text-xs text-muted-foreground mt-1 line-clamp-2'>
                          {board.description}
                        </div>
                      </div>
                      <ExternalLink className='h-4 w-4 mt-1 flex-shrink-0 opacity-50' />
                    </div>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className='container mx-auto p-6 max-w-4xl'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>
            Job Search Resources
          </CardTitle>
          <CardDescription className='text-lg'>
            Finding a job as a sophomore can feel overwhelming. We have curated
            a list of job boards to help you land your next opportunity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground'>
            Whether you are looking for general job postings or exploring
            startup careers, we have got your back!
          </p>
        </CardContent>
      </Card>

      <JobBoardSection
        title='General Job Boards'
        description='These platforms offer a wide range of job opportunities across various industries and company sizes.'
        boards={generalJobBoards}
      />
      <Separator className='my-8' />
      <JobBoardSection
        title='Startup Job Boards'
        description='These specialized platforms focus on opportunities within the startup ecosystem, perfect for those seeking innovative and fast-paced environments.'
        boards={startupJobBoards}
      />
    </div>
  );
}
