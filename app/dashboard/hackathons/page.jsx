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
import { Rocket, Calendar, Globe, MapPin, ExternalLink } from 'lucide-react';

export default function Hackathons() {
  const hackathonListings = [
    {
      name: 'HackMIT',
      url: 'https://hackmit.org',
      icon: Rocket,
      description:
        'MIT’s premier hackathon bringing together top talent worldwide.',
    },
    {
      name: 'HackNY',
      url: 'https://hackny.org',
      icon: Calendar,
      description:
        'Connecting technologists with New York’s thriving startup ecosystem.',
    },
    {
      name: 'Hack the North',
      url: 'https://hackthenorth.com',
      icon: Globe,
      description: 'Canada’s largest hackathon open to U.S. students.',
    },
    {
      name: 'Major League Hacking (MLH)',
      url: 'https://mlh.io',
      icon: MapPin,
      description: 'Global network of student hackathons and events.',
    },
    {
      name: 'TechTogether Boston',
      url: 'https://techtogether.io/boston',
      icon: Globe,
      description: 'An inclusive hackathon breaking stereotypes in tech.',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-4xl'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold'>Hackathon Hub</CardTitle>
          <CardDescription className='text-lg'>
            Discover hackathons happening across the U.S. and take your skills
            to the next level.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground'>
            Whether you’re looking to join your first hackathon or you’re a
            seasoned hacker, this hub will help you find the right event.
          </p>
        </CardContent>
      </Card>

      <Separator className='my-8' />

      <div className='grid gap-4 sm:grid-cols-2'>
        {hackathonListings.map((hackathon) => (
          <Card key={hackathon.name} className='overflow-hidden'>
            <CardContent className='p-0'>
              <Button
                variant='ghost'
                className='w-full h-full justify-start py-4 px-4 hover:bg-accent'
                asChild
              >
                <Link
                  href={hackathon.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='flex items-start space-x-4 w-full'>
                    <hackathon.icon className='h-5 w-5 mt-1 flex-shrink-0' />
                    <div className='flex-grow min-w-0'>
                      <div className='font-semibold truncate'>
                        {hackathon.name}
                      </div>
                      <div className='text-xs text-muted-foreground mt-1 line-clamp-2'>
                        {hackathon.description}
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
    </div>
  );
}
