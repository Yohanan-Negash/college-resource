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
  Cloud,
  Terminal,
  PenTool,
  Users,
  MessageSquare,
  ExternalLink,
  DollarSign,
  Wrench,
} from 'lucide-react';

export default function ToolsAndResources() {
  const categories = [
    {
      title: 'Version Control',
      description:
        'Tools for managing code versions and collaborating with others.',
      icon: GitMerge,
      color: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
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
      ],
    },
    {
      title: 'Development Tools',
      description: 'Essential tools for coding and development.',
      icon: Code,
      color: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
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
      icon: Cloud,
      color: 'bg-green-500/10',
      iconColor: 'text-green-500',
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
        {
          name: 'FlyIo',
          url: 'https://fly.io',
          icon: Cloud,
          description:
            'Platform for deploying full-stack applications and databases close to your users.',
          type: 'Platform',
          source: 'Vercel',
        },
      ],
    },
    {
      title: 'Free Cloud Credits & Resources',
      description:
        'Platforms offering free credits or tiers for cloud services.',
      icon: DollarSign,
      color: 'bg-emerald-500/10',
      iconColor: 'text-emerald-500',
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
      ],
    },
    {
      title: 'Often Overlooked Skills',
      description: 'Essential skills that complement technical abilities.',
      icon: PenTool,
      color: 'bg-orange-500/10',
      iconColor: 'text-orange-500',
      items: [
        {
          name: 'Technical Writing Guide',
          url: 'https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/',
          icon: PenTool,
          description: 'Learn to write clear documentation and READMEs.',
          type: 'Guide',
          source: 'Write the Docs',
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
          name: 'Developer Communication',
          url: 'https://www.coursera.org/learn/developer-career-communication',
          icon: Users,
          description: 'Master communication skills for software developers.',
          type: 'Course',
          source: 'Coursera',
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

  const Section = ({
    title,
    description,
    icon: Icon,
    color,
    iconColor,
    items,
  }) => (
    <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
      <CardHeader>
        <div className='flex items-center space-x-3'>
          <div className={`p-2 rounded-md ${color}`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
          <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
        </div>
        <CardDescription className='mt-2'>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4 sm:grid-cols-2'>
          {items.map((item) => (
            <Card
              key={item.name}
              className='overflow-hidden transition-all duration-200 hover:shadow-[0_0_10px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_10px_rgba(139,92,246,0.15)]'
            >
              <CardContent className='p-0'>
                <Button
                  variant='ghost'
                  className='w-full h-full justify-start py-4 px-4 hover:bg-accent group'
                  asChild
                >
                  <Link
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='flex items-start space-x-4 w-full'>
                      <item.icon className='h-5 w-5 mt-1 flex-shrink-0 text-primary' />
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
                      <ExternalLink className='h-4 w-4 mt-1 flex-shrink-0 opacity-50 transition-transform duration-300 group-hover:translate-x-1' />
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
      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-purple-500/10'>
              <Wrench className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Tools & Resources
            </CardTitle>
          </div>
          <CardDescription className='text-lg mt-2'>
            Discover powerful free tools, platforms, and resources we have
            handpicked to help you build amazing projects without spending a
            dime. Whether you are working on hobby projects, sharpening your
            skills, or just starting out, these essentials will give you a head
            start in modern software development.
          </CardDescription>
        </CardHeader>
      </Card>

      {categories.map((category) => (
        <Section
          key={category.title}
          title={category.title}
          description={category.description}
          icon={category.icon}
          color={category.color}
          iconColor={category.iconColor}
          items={category.items}
        />
      ))}
    </div>
  );
}
