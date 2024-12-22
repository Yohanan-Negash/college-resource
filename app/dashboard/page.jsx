import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-4xl font-bold mb-6'>
        Welcome to Your Tech Career Hub
      </h1>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <Card>
          <CardHeader>
            <CardTitle>Start Your Journey</CardTitle>
            <CardDescription>
              Choose your career path and get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className='w-full'>
              <Link href='/dashboard/getting-started'>
                Start Here
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Foundations</CardTitle>
            <CardDescription>
              Master the fundamentals of programming and computer science
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className='w-full'>
              <Link href='/dashboard/foundations'>
                Build Your Foundation
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Explore Roadmaps</CardTitle>
            <CardDescription>View detailed career roadmaps</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className='w-full'>
              <Link href='/dashboard/roadmaps'>
                View Roadmaps
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Hackathons</CardTitle>
            <CardDescription>Find and join exciting hackathons</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className='w-full'>
              <Link href='/dashboard/hackathons'>
                Explore Hackathons
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Internship Opportunities</CardTitle>
            <CardDescription>
              Discover internships at top tech companies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className='w-full'>
              <Link href='/dashboard/internships'>
                Find Internships
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tools & Resources</CardTitle>
            <CardDescription>Access curated learning materials</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className='w-full'>
              <Link href='/dashboard/tools'>
                Explore Resources
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
