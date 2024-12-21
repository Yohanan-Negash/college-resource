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

const roadmaps = [
  {
    title: 'Frontend Developer',
    description: 'Master HTML, CSS, JavaScript, and modern frontend frameworks',
    slug: 'frontend-developer',
  },
  {
    title: 'Backend Developer',
    description:
      'Learn server-side programming, databases, and API development',
    slug: 'backend-developer',
  },
  {
    title: 'Full Stack Developer',
    description:
      'Combine frontend and backend skills to build complete web applications',
    slug: 'full-stack-developer',
  },
  {
    title: 'DevOps Engineer',
    description: 'Explore CI/CD, containerization, and cloud technologies',
    slug: 'devops-engineer',
  },
  {
    title: 'Data Scientist',
    description:
      'Dive into statistics, machine learning, and data visualization',
    slug: 'data-scientist',
  },
  {
    title: 'Mobile App Developer',
    description: 'Build native and cross-platform mobile applications',
    slug: 'mobile-app-developer',
  },
];

export default function RoadmapsPage() {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-4xl font-bold mb-6'>Tech Career Roadmaps</h1>
      <p className='text-xl text-muted-foreground mb-8'>
        Choose a roadmap to guide your learning journey and career progression
        in tech.
      </p>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {roadmaps.map((roadmap) => (
          <Card key={roadmap.slug}>
            <CardHeader>
              <CardTitle>{roadmap.title}</CardTitle>
              <CardDescription>{roadmap.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className='w-full'>
                <Link href={`/roadmaps/${roadmap.slug}`}>
                  View Roadmap
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
