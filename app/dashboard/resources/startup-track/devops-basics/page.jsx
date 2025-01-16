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
import {
  ArrowRight,
  Zap,
  Lightbulb,
  Server,
  GitBranch,
  Cloud,
} from 'lucide-react';

export default function DevOpsBasicsResourcesPage() {
  const foundationResources = [
    {
      title: 'DevOps Roadmap',
      description: 'Comprehensive guide to becoming a DevOps engineer.',
      type: 'Article',
      url: 'https://roadmap.sh/devops',
      duration: '1 hour',
    },
    {
      title: 'Introduction to DevOps',
      description: 'edX course on DevOps practices and principles.',
      type: 'Course',
      url: 'https://www.edx.org/learn/devops/ibm-devops-basics-for-everyone?index=product&queryID=91bbc27fd76a2103e7fd0bc67a6b31ef&position=2&results_level=first-level-results&term=devops&objectID=course-63ca4f1d-411a-451c-acd6-697e100dc144&campaign=DevOps+Basics+for+Everyone&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch',
      duration: '3 - 4 weeks',
    },
    {
      title: 'What is DevOps?',
      description: 'A comprehensive explanation of DevOps by AWS.',
      type: 'Article',
      url: 'https://aws.amazon.com/devops/what-is-devops/',
      duration: '20 minutes',
    },
    {
      title: 'DevOps for Beginners',
      description: 'YouTube playlist covering DevOps basics.',
      type: 'Video Series',
      url: 'https://www.youtube.com/playlist?list=PLy7NrYWoggjwPggqtFsI_zMAwvG0SqYCb',
      duration: '2 hours',
    },
  ];

  const containerizationResources = [
    {
      title: 'Docker Getting Started',
      description: 'Official Docker documentation for beginners.',
      type: 'Course',
      url: 'https://docs.docker.com/get-started/',
      duration: 'Self-paced',
    },
    {
      title: 'Docker Crash Course',
      description: 'Quick introduction to Docker concepts and commands.',
      type: 'Video',
      url: 'https://www.youtube.com/watch?v=pTFZFxd4hOI',
      duration: '1 hour',
    },
    {
      title: 'Docker Compose Tutorial',
      description:
        'Learn how to use Docker Compose for multi-container applications.',
      type: 'Tutorial',
      url: 'https://docs.docker.com/compose/gettingstarted/',
      duration: '30 minutes',
    },
  ];

  const cicdResources = [
    {
      title: 'GitHub Actions',
      description: 'Learn about CI/CD with GitHub Actions.',
      type: 'Article',
      url: 'https://docs.github.com/en/actions',
      duration: '1 hour',
    },
    {
      title: 'Jenkins Tutorial',
      description: 'Getting started with Jenkins for CI/CD.',
      type: 'Tutorial',
      url: 'https://www.jenkins.io/doc/tutorials/',
      duration: '2 hours',
    },
    {
      title: 'GitLab CI/CD',
      description: 'Introduction to GitLab CI/CD pipelines.',
      type: 'Documentation',
      url: 'https://docs.gitlab.com/ee/ci/',
      duration: '1 hour',
    },
  ];

  const infrastructureAsCodeResources = [
    {
      title: 'Terraform Getting Started',
      description: 'Learn the basics of Infrastructure as Code with Terraform.',
      type: 'Tutorial',
      url: 'https://learn.hashicorp.com/collections/terraform/aws-get-started',
      duration: '2 hours',
    },
    {
      title: 'Ansible for Beginners',
      description: 'Introduction to Ansible for configuration management.',
      type: 'Course',
      url: 'https://www.ansible.com/resources/webinars-training/introduction-to-ansible',
      duration: '1 hour',
    },
    {
      title: 'AWS CloudFormation Tutorial',
      description: 'Getting started with AWS CloudFormation for IaC.',
      type: 'Tutorial',
      url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/GettingStarted.html',
      duration: '1 hour',
    },
  ];

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold text-primary'>
            DevOps Basics
          </CardTitle>
          <CardDescription className='text-lg text-gray-600 dark:text-gray-300'>
            Understand the fundamentals of DevOps practices for efficient
            development and deployment.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            Why Learn DevOps?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            DevOps is crucial for modern software development and operations.
            Here is why it is important:
          </p>
          <ul className='list-none pl-5 space-y-2'>
            {[
              'Faster development and deployment cycles',
              'Improved collaboration between development and operations teams',
              'Increased reliability and stability of applications',
              'Better scalability and resource management',
              'Enhanced security practices throughout the development lifecycle',
              'Continuous improvement and faster problem resolution',
            ].map((item, index) => (
              <li key={index} className='flex items-start'>
                <ArrowRight className='h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-1' />
                <span className='text-gray-700 dark:text-gray-200'>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <Lightbulb className='w-6 h-6 mr-2 text-primary' />
            Foundation Resources
          </CardTitle>
          <CardDescription>
            Start with these resources to build a strong foundation in DevOps
            principles and practices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {foundationResources.map((resource, index) => (
              <Card key={index} className='h-full flex flex-col'>
                <CardHeader>
                  <CardTitle className='text-lg'>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Type: {resource.type}
                  </p>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Duration: {resource.duration}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className='w-full'>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Explore Resource
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <Server className='w-6 h-6 mr-2 text-primary' />
            Containerization
          </CardTitle>
          <CardDescription>
            Learn about containerization, a key concept in DevOps for consistent
            application deployment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {containerizationResources.map((resource, index) => (
              <Card key={index} className='h-full flex flex-col'>
                <CardHeader>
                  <CardTitle className='text-lg'>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Type: {resource.type}
                  </p>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Duration: {resource.duration}
                  </p>
                </CardContent>
                <CardFooter className='mt-auto'>
                  <Button asChild className='w-full'>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Explore Resource
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <GitBranch className='w-6 h-6 mr-2 text-primary' />
            CI/CD (Continuous Integration/Continuous Deployment)
          </CardTitle>
          <CardDescription>
            Explore CI/CD practices and tools for automating software delivery
            processes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {cicdResources.map((resource, index) => (
              <Card key={index} className='h-full flex flex-col'>
                <CardHeader>
                  <CardTitle className='text-lg'>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Type: {resource.type}
                  </p>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Duration: {resource.duration}
                  </p>
                </CardContent>
                <CardFooter className='mt-auto'>
                  <Button asChild className='w-full'>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Explore Resource
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center'>
            <Cloud className='w-6 h-6 mr-2 text-primary' />
            Infrastructure as Code (IaC)
          </CardTitle>
          <CardDescription>
            Learn about managing and provisioning infrastructure through code.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4 md:grid-cols-2'>
            {infrastructureAsCodeResources.map((resource, index) => (
              <Card key={index} className='h-full flex flex-col'>
                <CardHeader>
                  <CardTitle className='text-lg'>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Type: {resource.type}
                  </p>
                  <p className='text-sm text-muted-foreground mb-2'>
                    Duration: {resource.duration}
                  </p>
                </CardContent>
                <CardFooter className='mt-auto'>
                  <Button asChild className='w-full'>
                    <Link
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Explore Resource
                      <ArrowRight className='ml-2 h-4 w-4' />
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
