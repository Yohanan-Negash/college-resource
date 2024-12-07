import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Progress } from '../../../components/ui/progress';
import { Button } from '../../../components/ui/button';
import { PlusCircle, LucideGithub, Code2 } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    name: 'Personal Blog',
    tech: ['React', 'Next.js'],
    completion: 80,
    github: 'https://github.com/user/personal-blog',
  },
  {
    id: 2,
    name: 'Weather App',
    tech: ['JavaScript', 'API'],
    completion: 100,
    github: 'https://github.com/user/weather-app',
  },
  {
    id: 3,
    name: 'Task Manager',
    tech: ['React', 'Firebase'],
    completion: 60,
    github: 'https://github.com/user/task-manager',
  },
];

export function ProjectShowcase({ className, ...props }) {
  return (
    <Card className={className} {...props}>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-lg font-medium flex items-center gap-2'>
          <Code2 className='h-5 w-5 text-violet-500 dark:text-violet-400' />
          Your Projects
        </CardTitle>
        <Button variant='outline' size='sm'>
          <PlusCircle className='mr-2 h-4 w-4 text-emerald-500 dark:text-emerald-400' />
          Add Project
        </Button>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {PROJECTS.map((project) => (
            <div key={project.id} className='flex items-center space-x-4'>
              <div className='flex-1 space-y-1'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm font-medium'>{project.name}</h3>
                  <Badge
                    variant={
                      project.completion === 100 ? 'default' : 'secondary'
                    }
                    className='text-xs'
                  >
                    {project.completion}%
                  </Badge>
                </div>
                <Progress value={project.completion} className='h-1' />
                <div className='flex flex-wrap gap-1'>
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant='outline' className='text-xs'>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button variant='ghost' size='sm' asChild>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LucideGithub className='h-4 w-4 text-blue-500 dark:text-blue-400' />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
