import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Lightbulb,
  Server,
  GitBranch,
  Cloud,
  BookOpen,
  FileText,
  Video,
  GraduationCap,
  ExternalLink,
  Clock,
  Code,
  Wrench,
} from 'lucide-react';

export default function DevOpsBasicsResourcesPage() {
  const foundationResources = [
    {
      title: 'DevOps Roadmap',
      description: 'Comprehensive guide to becoming a DevOps engineer.',
      type: 'Article',
      url: 'https://roadmap.sh/devops',
      duration: '1 hour',
      icon: FileText,
    },
    {
      title: 'Introduction to DevOps',
      description: 'edX course on DevOps practices and principles.',
      type: 'Course',
      url: 'https://www.edx.org/learn/devops/ibm-devops-basics-for-everyone',
      duration: '3 - 4 weeks',
      icon: GraduationCap,
    },
    {
      title: 'What is DevOps?',
      description: 'A comprehensive explanation of DevOps by AWS.',
      type: 'Article',
      url: 'https://aws.amazon.com/devops/what-is-devops/',
      duration: '20 minutes',
      icon: FileText,
    },
    {
      title: 'DevOps for Beginners',
      description: 'YouTube playlist covering DevOps basics.',
      type: 'Video Series',
      url: 'https://www.youtube.com/playlist?list=PLy7NrYWoggjwPggqtFsI_zMAwvG0SqYCb',
      duration: '2 hours',
      icon: Video,
    },
  ];

  const containerizationResources = [
    {
      title: 'Docker Getting Started',
      description: 'Official Docker documentation for beginners.',
      type: 'Course',
      url: 'https://docs.docker.com/get-started/',
      duration: 'Self-paced',
      icon: GraduationCap,
    },
    {
      title: 'Docker Crash Course',
      description: 'Quick introduction to Docker concepts and commands.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=pTFZFxd4hOI',
      duration: '1 hour',
      icon: Video,
    },
    {
      title: 'Docker Compose Tutorial',
      description:
        'Learn how to use Docker Compose for multi-container applications.',
      type: 'Tutorial',
      url: 'https://docs.docker.com/compose/gettingstarted/',
      duration: '30 minutes',
      icon: Wrench,
    },
  ];

  const cicdResources = [
    {
      title: 'GitHub Actions',
      description: 'Learn about CI/CD with GitHub Actions.',
      type: 'Article',
      url: 'https://docs.github.com/en/actions',
      duration: '1 hour',
      icon: FileText,
    },
    {
      title: 'Jenkins Tutorial',
      description: 'Getting started with Jenkins for CI/CD.',
      type: 'Tutorial',
      url: 'https://www.jenkins.io/doc/tutorials/',
      duration: '2 hours',
      icon: Wrench,
    },
    {
      title: 'GitLab CI/CD',
      description: 'Introduction to GitLab CI/CD pipelines.',
      type: 'Documentation',
      url: 'https://docs.gitlab.com/ee/ci/',
      duration: '1 hour',
      icon: FileText,
    },
  ];

  const infrastructureAsCodeResources = [
    {
      title: 'Terraform Getting Started',
      description: 'Learn the basics of Infrastructure as Code with Terraform.',
      type: 'Tutorial',
      url: 'https://learn.hashicorp.com/collections/terraform/aws-get-started',
      duration: '2 hours',
      icon: Wrench,
    },
    {
      title: 'Ansible for Beginners',
      description: 'Introduction to Ansible for configuration management.',
      type: 'Course',
      url: 'https://www.ansible.com/resources/webinars-training/introduction-to-ansible',
      duration: '1 hour',
      icon: GraduationCap,
    },
    {
      title: 'AWS CloudFormation Tutorial',
      description: 'Getting started with AWS CloudFormation for IaC.',
      type: 'Tutorial',
      url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/GettingStarted.html',
      duration: '1 hour',
      icon: Wrench,
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Article':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      case 'Course':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'Video':
      case 'Video Series':
        return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'Tutorial':
        return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'Documentation':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400';
      default:
        return 'bg-gray-500/10 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center gap-3'>
            <div className='p-2 rounded-md bg-purple-500/10'>
              <Code className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              DevOps Basics
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground ml-11'>
            Understand the fundamentals of DevOps practices for efficient
            development and deployment.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <BookOpen className='h-6 w-6 text-yellow-500' />
            </div>
            Why Learn DevOps?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700 dark:text-gray-300'>
            DevOps is crucial for modern software development and operations.
            Here is why it is important:
          </p>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Faster development and deployment cycles',
              'Improved collaboration between development and operations teams',
              'Increased reliability and stability of applications',
              'Better scalability and resource management',
              'Enhanced security practices throughout the development lifecycle',
              'Continuous improvement and faster problem resolution',
            ].map((item, index) => (
              <li key={index} className='flex items-start group'>
                <ArrowRight className='h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5' />
                <span className='text-gray-700 dark:text-gray-200'>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-blue-500/10'>
              <Lightbulb className='h-6 w-6 text-blue-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Foundation Resources
            </CardTitle>
          </div>
          <CardDescription>
            Start with these resources to build a strong foundation in DevOps
            principles and practices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {foundationResources.map((resource, index) => (
              <Card
                key={index}
                className='h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.1)] dark:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300'
              >
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-2'>
                      <div
                        className={`p-1.5 rounded-md ${
                          getTypeColor(resource.type).split(' ')[0]
                        }`}
                      >
                        <resource.icon
                          className={`h-4 w-4 ${
                            getTypeColor(resource.type).split(' ')[1]
                          }`}
                        />
                      </div>
                      <CardTitle className='text-lg'>
                        {resource.title}
                      </CardTitle>
                    </div>
                    <Badge className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                  </div>
                  <CardDescription className='mt-2'>
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex-grow pt-0'>
                  <div className='flex items-center text-sm text-muted-foreground mb-2'>
                    <Clock className='h-3.5 w-3.5 mr-1.5' />
                    Duration: {resource.duration}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className='w-full group'>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Explore Resource
                      <ExternalLink className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-purple-500/10'>
              <Server className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Containerization
            </CardTitle>
          </div>
          <CardDescription>
            Learn about containerization, a key concept in DevOps for consistent
            application deployment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {containerizationResources.map((resource, index) => (
              <Card
                key={index}
                className='h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.1)] dark:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300'
              >
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-2'>
                      <div
                        className={`p-1.5 rounded-md ${
                          getTypeColor(resource.type).split(' ')[0]
                        }`}
                      >
                        <resource.icon
                          className={`h-4 w-4 ${
                            getTypeColor(resource.type).split(' ')[1]
                          }`}
                        />
                      </div>
                      <CardTitle className='text-lg'>
                        {resource.title}
                      </CardTitle>
                    </div>
                    <Badge className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                  </div>
                  <CardDescription className='mt-2'>
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex-grow pt-0'>
                  <div className='flex items-center text-sm text-muted-foreground mb-2'>
                    <Clock className='h-3.5 w-3.5 mr-1.5' />
                    Duration: {resource.duration}
                  </div>
                </CardContent>
                <CardFooter className='mt-auto'>
                  <Button asChild className='w-full group'>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Explore Resource
                      <ExternalLink className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-green-500/10'>
              <GitBranch className='h-6 w-6 text-green-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              CI/CD (Continuous Integration/Continuous Deployment)
            </CardTitle>
          </div>
          <CardDescription>
            Explore CI/CD practices and tools for automating software delivery
            processes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {cicdResources.map((resource, index) => (
              <Card
                key={index}
                className='h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.1)] dark:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300'
              >
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-2'>
                      <div
                        className={`p-1.5 rounded-md ${
                          getTypeColor(resource.type).split(' ')[0]
                        }`}
                      >
                        <resource.icon
                          className={`h-4 w-4 ${
                            getTypeColor(resource.type).split(' ')[1]
                          }`}
                        />
                      </div>
                      <CardTitle className='text-lg'>
                        {resource.title}
                      </CardTitle>
                    </div>
                    <Badge className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                  </div>
                  <CardDescription className='mt-2'>
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex-grow pt-0'>
                  <div className='flex items-center text-sm text-muted-foreground mb-2'>
                    <Clock className='h-3.5 w-3.5 mr-1.5' />
                    Duration: {resource.duration}
                  </div>
                </CardContent>
                <CardFooter className='mt-auto'>
                  <Button asChild className='w-full group'>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Explore Resource
                      <ExternalLink className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-amber-500/10'>
              <Cloud className='h-6 w-6 text-amber-500' />
            </div>
            <CardTitle className='text-2xl font-bold'>
              Infrastructure as Code (IaC)
            </CardTitle>
          </div>
          <CardDescription>
            Learn about managing and provisioning infrastructure through code.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {infrastructureAsCodeResources.map((resource, index) => (
              <Card
                key={index}
                className='h-full flex flex-col shadow-[0_0_15px_rgba(139,92,246,0.1)] dark:shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300'
              >
                <CardHeader className='pb-2'>
                  <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-2'>
                      <div
                        className={`p-1.5 rounded-md ${
                          getTypeColor(resource.type).split(' ')[0]
                        }`}
                      >
                        <resource.icon
                          className={`h-4 w-4 ${
                            getTypeColor(resource.type).split(' ')[1]
                          }`}
                        />
                      </div>
                      <CardTitle className='text-lg'>
                        {resource.title}
                      </CardTitle>
                    </div>
                    <Badge className={getTypeColor(resource.type)}>
                      {resource.type}
                    </Badge>
                  </div>
                  <CardDescription className='mt-2'>
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex-grow pt-0'>
                  <div className='flex items-center text-sm text-muted-foreground mb-2'>
                    <Clock className='h-3.5 w-3.5 mr-1.5' />
                    Duration: {resource.duration}
                  </div>
                </CardContent>
                <CardFooter className='mt-auto'>
                  <Button asChild className='w-full group'>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Explore Resource
                      <ExternalLink className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
