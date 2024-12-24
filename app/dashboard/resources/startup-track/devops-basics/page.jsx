import { ResourcePage } from '../../(components)/resource-page';

const devopsBasicsResources = {
  title: 'DevOps Basics Resources',
  description:
    'Understand the fundamentals of DevOps practices for efficient development and deployment.',
  resources: [
    {
      title: 'DevOps Roadmap',
      description: 'Comprehensive guide to becoming a DevOps engineer.',
      type: 'article',
      url: 'https://roadmap.sh/devops',
    },
    {
      title: 'Docker Getting Started',
      description: 'Official Docker documentation for beginners.',
      type: 'course',
      url: 'https://docs.docker.com/get-started/',
      duration: 'Self-paced',
    },
    {
      title: 'GitHub Actions',
      description: 'Learn about CI/CD with GitHub Actions.',
      type: 'article',
      url: 'https://docs.github.com/en/actions',
    },
    {
      title: 'Introduction to DevOps',
      description: 'edX course on DevOps practices and principles.',
      type: 'course',
      url: 'https://www.edx.org/course/introduction-to-devops',
      duration: '6 weeks',
    },
  ],
};

export default function DevOpsBasicsResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...devopsBasicsResources} />
    </div>
  );
}
