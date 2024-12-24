'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  GitMerge,
  Code,
  Database,
  Cloud,
  Terminal,
  PenTool,
  Users,
  Briefcase,
  MessageSquare,
  ExternalLink,
  DollarSign,
} from 'lucide-react';

export default function ToolsAndResources() {
  const categories = [
    {
      title: 'Version Control',
      description:
        'Tools for managing code versions and collaborating with others.',
      items: [
        {
          name: 'Git',
          url: 'https://git-scm.com/',
          icon: GitMerge,
          description: 'Distributed version control system.',
          type: 'Tool',
          source: 'Git',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/',
          icon: GitMerge,
          description:
            'Web-based hosting service for version control using Git.',
          type: 'Platform',
          source: 'GitHub',
        },
        {
          name: 'GitLab',
          url: 'https://about.gitlab.com/',
          icon: GitMerge,
          description: 'Web-based DevOps lifecycle tool.',
          type: 'Platform',
          source: 'GitLab',
        },
        {
          name: 'GitHub Desktop',
          url: 'https://desktop.github.com/',
          icon: GitMerge,
          description: 'Simplified Git workflow with a user-friendly GUI.',
          type: 'Tool',
          source: 'GitHub',
        },
        {
          name: 'GitKraken',
          url: 'https://www.gitkraken.com/',
          icon: GitMerge,
          description: 'Powerful Git GUI client for Windows, Mac & Linux.',
          type: 'Tool',
          source: 'Axosoft',
        },
      ],
    },
    {
      title: 'Development Tools',
      description: 'Essential tools for coding and development.',
      items: [
        {
          name: 'Visual Studio Code',
          url: 'https://code.visualstudio.com/',
          icon: Code,
          description: 'Lightweight but powerful source code editor.',
          type: 'Tool',
          source: 'Microsoft',
        },
        {
          name: 'JetBrains IDEs',
          url: 'https://www.jetbrains.com/',
          icon: Code,
          description: 'Intelligent IDEs for various programming languages.',
          type: 'Tool',
          source: 'JetBrains',
        },
        {
          name: 'Postman',
          url: 'https://www.postman.com/',
          icon: Code,
          description: 'API development and testing tool.',
          type: 'Tool',
          source: 'Postman',
        },
      ],
    },
    {
      title: 'Hosting & Deployment',
      description: 'Platforms for hosting and deploying your applications.',
      items: [
        {
          name: 'Vercel',
          url: 'https://vercel.com/',
          icon: Cloud,
          description: 'Platform for static and serverless deployment.',
          type: 'Platform',
          source: 'Vercel',
        },
        {
          name: 'Netlify',
          url: 'https://www.netlify.com/',
          icon: Cloud,
          description:
            'All-in-one platform for automating modern web projects.',
          type: 'Platform',
          source: 'Netlify',
        },
        {
          name: 'Heroku',
          url: 'https://www.heroku.com/',
          icon: Cloud,
          description: 'Cloud platform for deploying and running apps.',
          type: 'Platform',
          source: 'Salesforce',
        },
      ],
    },
    {
      title: 'Containerization & Orchestration',
      description: 'Tools for containerizing and managing applications.',
      items: [
        {
          name: 'Docker',
          url: 'https://www.docker.com/',
          icon: Database,
          description:
            'Platform for developing, shipping, and running applications in containers.',
          type: 'Tool',
          source: 'Docker',
        },
        {
          name: 'Kubernetes',
          url: 'https://kubernetes.io/',
          icon: Database,
          description:
            'Open-source system for automating deployment, scaling, and management of containerized applications.',
          type: 'Tool',
          source: 'CNCF',
        },
      ],
    },
    {
      title: 'Free Cloud Credits & Resources',
      description:
        'Platforms offering free credits or tiers for cloud services.',
      items: [
        {
          name: 'AWS Free Tier',
          url: 'https://aws.amazon.com/free/',
          icon: DollarSign,
          description:
            'Free tier with 12 months of free services and always-free products.',
          type: 'Cloud Platform',
          source: 'Amazon Web Services',
        },
        {
          name: 'Google Cloud Free Program',
          url: 'https://cloud.google.com/free',
          icon: DollarSign,
          description:
            '$300 in free credits for new customers and 20+ always-free products.',
          type: 'Cloud Platform',
          source: 'Google Cloud',
        },
        {
          name: 'Microsoft Azure Free Account',
          url: 'https://azure.microsoft.com/en-us/free/',
          icon: DollarSign,
          description:
            '12 months of free services, $200 credit, and 25+ always-free services.',
          type: 'Cloud Platform',
          source: 'Microsoft Azure',
        },
        {
          name: 'DigitalOcean Free Trial',
          url: 'https://try.digitalocean.com/freetrial/',
          icon: DollarSign,
          description: '$200 in free credits over 60 days for new users.',
          type: 'Cloud Platform',
          source: 'DigitalOcean',
        },
        {
          name: 'IBM Cloud Free Tier',
          url: 'https://www.ibm.com/cloud/free',
          icon: DollarSign,
          description:
            'Free tier with no time limits and 30-day free trial with $200 credit.',
          type: 'Cloud Platform',
          source: 'IBM Cloud',
        },
      ],
    },
    {
      title: 'Often Overlooked Skills',
      description: 'Essential skills that complement technical abilities.',
      items: [
        {
          name: 'Technical Writing',
          url: 'https://developers.google.com/tech-writing',
          icon: PenTool,
          description:
            'Learn to write clear and effective technical documentation.',
          type: 'Course',
          source: 'Google',
        },
        {
          name: 'Command Line Proficiency',
          url: 'https://www.codecademy.com/learn/learn-the-command-line',
          icon: Terminal,
          description: 'Master essential command line skills for developers.',
          type: 'Course',
          source: 'Codecademy',
        },
        {
          name: 'Soft Skills for Developers',
          url: 'https://www.coursera.org/learn/developer-soft-skills',
          icon: Users,
          description:
            'Enhance your communication and collaboration abilities.',
          type: 'Course',
          source: 'Coursera',
        },
        {
          name: 'Time Management for Programmers',
          url: 'https://medium.com/better-programming/time-management-techniques-for-programmers-d7f9f33a7d62',
          icon: Briefcase,
          description: 'Improve your productivity and work-life balance.',
          type: 'Article',
          source: 'Medium',
        },
        {
          name: 'Code Review Best Practices',
          url: 'https://google.github.io/eng-practices/review/',
          icon: MessageSquare,
          description: 'Learn how to conduct effective code reviews.',
          type: 'Guide',
          source: 'Google',
        },
      ],
    },
  ];

  const Section = ({ title, description, items }) => (
    <Card className='mb-8'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4 sm:grid-cols-2'>
          {items.map((item) => (
            <Card key={item.name} className='overflow-hidden'>
              <CardContent className='p-0'>
                <Button
                  variant='ghost'
                  className='w-full h-full justify-start py-4 px-4 hover:bg-accent'
                  asChild
                >
                  <Link
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='flex items-start space-x-4 w-full'>
                      <item.icon className='h-5 w-5 mt-1 flex-shrink-0' />
                      <div className='flex-grow min-w-0'>
                        <div className='font-semibold truncate'>
                          {item.name}
                        </div>
                        <div className='text-xs text-muted-foreground mt-1 line-clamp-2'>
                          {item.description}
                        </div>
                        <div className='text-xs text-muted-foreground mt-1'>
                          {item.type} • {item.source}
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
            Tools & Resources
          </CardTitle>
          <CardDescription className='text-lg'>
            Explore essential tools, platforms, and skills for modern software
            development, including free cloud resources.
          </CardDescription>
        </CardHeader>
      </Card>

      {categories.map((category) => (
        <Section
          key={category.title}
          title={category.title}
          description={category.description}
          items={category.items}
        />
      ))}
    </div>
  );
}
