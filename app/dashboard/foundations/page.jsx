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
  Globe,
  Database,
  Server,
  Lock,
  Cpu,
} from 'lucide-react';
import Link from 'next/link';

const foundationTopics = [
  {
    title: 'Computer Science Fundamentals',
    description: 'Learn the core concepts of computer science',
    icon: Cpu,
    slug: 'computer-science-fundamentals',
  },
  {
    title: 'Programming Basics',
    description: 'Master the fundamentals of programming',
    icon: Code,
    slug: 'programming-basics',
  },
  {
    title: 'Data Structures and Algorithms',
    description: 'Understand essential data structures and algorithms',
    icon: Database,
    slug: 'data-structures-and-algorithms',
  },
  {
    title: 'Web Technologies',
    description: 'Learn how the web works',
    icon: Globe,
    slug: 'web-technologies',
  },
  {
    title: 'Networking Fundamentals',
    description: 'Understand computer networks and protocols',
    icon: Server,
    slug: 'networking-fundamentals',
  },
  {
    title: 'Cybersecurity Basics',
    description: 'Learn the fundamentals of cybersecurity',
    icon: Lock,
    slug: 'cybersecurity-basics',
  },
];

export default function FoundationsPage() {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-4xl font-bold mb-2'>Foundations</h1>
      <p className='text-xl text-muted-foreground mb-6'>
        Master the core concepts and skills to become a great programmer,
        regardless of your chosen specialization.
      </p>

      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {foundationTopics.map((topic, index) => (
          <Card key={index} className='flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <topic.icon className='h-6 w-6' />
                {topic.title}
              </CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent className='mt-auto'>
              <Button asChild className='w-full'>
                <Link
                  href={`/dashboard/foundations/${topic.slug}`}
                  className='flex items-center justify-center whitespace-nowrap'
                >
                  <span className='truncate'>Explore {topic.title}</span>
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
