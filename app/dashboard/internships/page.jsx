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
  Code,
  Rocket,
  Users,
  Globe,
  Search,
  Monitor,
  ExternalLink,
  Terminal,
} from 'lucide-react';

export default function Internships() {
  const internshipPlatforms = [
    {
      name: 'Handshake',
      url: 'https://joinhandshake.com',
      icon: Users,
      description: 'Find internships and jobs exclusively for students.',
    },
    {
      name: 'WayUp',
      url: 'https://www.wayup.com',
      icon: Rocket,
      description: 'Internships at startups and top companies.',
    },
    {
      name: 'Glassdoor',
      url: 'https://www.glassdoor.com',
      icon: Monitor,
      description: 'Search for internships and view company reviews.',
    },
    {
      name: 'Idealist',
      url: 'https://www.idealist.org',
      icon: Globe,
      description: 'Find internships in nonprofits.',
    },
  ];

  const preparationResources = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com',
      icon: Monitor,
      description: 'Practice coding problems for tech interviews.',
    },
    {
      name: 'Resume Worded',
      url: 'https://resumeworded.com',
      icon: Briefcase,
      description: 'Improve resumes and LinkedIn profiles.',
    },
    {
      name: 'Pramp',
      url: 'https://www.pramp.com',
      icon: Rocket,
      description: 'Free mock interviews for technical roles.',
    },
    {
      name: 'Interviewing.io',
      url: 'https://www.interviewing.io',
      icon: Users,
      description: 'Anonymous mock interviews with engineers.',
    },
    {
      name: 'Grokking the Coding Interview',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview',
      icon: Search,
      description: 'Master interview patterns with this popular course.',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com',
      icon: Terminal,
      description: 'Practice coding challenges & prep for interviews.',
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/',
      icon: Code,
      description: 'Tutorials, coding problems, and CS concepts.',
    },
  ];

  const InternshipSection = ({ title, description, resources }) => (
    <Card className='mb-8'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4 sm:grid-cols-2'>
          {resources.map((resource) => (
            <Card key={resource.name} className='overflow-hidden'>
              <CardContent className='p-0'>
                <Button
                  variant='ghost'
                  className='w-full h-full justify-start py-4 px-4 hover:bg-accent'
                  asChild
                >
                  <Link
                    href={resource.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='flex items-start space-x-4 w-full'>
                      <resource.icon className='h-5 w-5 mt-1 flex-shrink-0' />
                      <div className='flex-grow min-w-0'>
                        <div className='font-semibold truncate'>
                          {resource.name}
                        </div>
                        <div className='text-xs text-muted-foreground mt-1 line-clamp-2'>
                          {resource.description}
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
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>
            Internship Resources
          </CardTitle>
          <CardDescription className='text-lg'>
            Find your next internship opportunity with these curated resources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground'>
            Whether you are looking for internships or preparing for interviews,
            these resources will help you succeed.
          </p>
        </CardContent>
      </Card>

      <InternshipSection
        title='Top Internship Platforms'
        description='Explore these platforms for internship opportunities across industries.'
        resources={internshipPlatforms}
      />
      <Separator className='my-8' />
      <InternshipSection
        title='Preparation Resources'
        description='Get ready for interviews and improve your skills with these tools.'
        resources={preparationResources}
      />
    </div>
  );
}
