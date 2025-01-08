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
      url: 'https://www.edx.org/learn/devops/ibm-devops-basics-for-everyone?index=product&queryID=91bbc27fd76a2103e7fd0bc67a6b31ef&position=2&results_level=first-level-results&term=devops&objectID=course-63ca4f1d-411a-451c-acd6-697e100dc144&campaign=DevOps+Basics+for+Everyone&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch',
      duration: '3 - 4 weeks',
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
