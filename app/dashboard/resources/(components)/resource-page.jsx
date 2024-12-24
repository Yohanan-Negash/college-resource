import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function ResourcePage({ title, description, resources }) {
  return (
    <div className='space-y-8'>
      <div className='space-y-2'>
        <h2 className='text-3xl font-bold tracking-tight'>{title}</h2>
        <p className='text-muted-foreground'>{description}</p>
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <Badge variant='outline'>{resource.type}</Badge>
                {resource.duration && (
                  <span className='text-sm text-muted-foreground'>
                    {resource.duration}
                  </span>
                )}
              </div>
              <CardTitle className='mt-2'>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className='w-full'>
                <a
                  href={resource.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Resource
                  <ExternalLink className='ml-2 h-4 w-4' />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='flex justify-end'>
        <Button asChild variant='outline'>
          <Link href='/dashboard/getting-started'>
            Back to Paths
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </Button>
      </div>
    </div>
  );
}
