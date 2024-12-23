import { ResourcePage } from '../../(components)/resource-page';

const systemDesignResources = {
  title: 'System Design Resources',
  description: 'Learn how to design scalable systems for large tech companies.',
  resources: [
    {
      title: 'System Design Interview',
      description:
        'A comprehensive guide to tackling system design questions in interviews.',
      type: 'course',
      url: 'https://example.com/system-design-interview',
      duration: '20 hours',
    },
    {
      title: 'Designing Data-Intensive Applications',
      description:
        'Essential book for understanding the principles of scalable system design.',
      type: 'article',
      url: 'https://example.com/ddia-book',
    },
    {
      title: 'High Scalability',
      description:
        'Blog with case studies on how large-scale systems are designed.',
      type: 'article',
      url: 'http://highscalability.com/',
    },
    {
      title: 'System Design Primer',
      description:
        'GitHub repository with resources to learn how to design large-scale systems.',
      type: 'tool',
      url: 'https://github.com/donnemartin/system-design-primer',
    },
    {
      title: 'Grokking the System Design Interview',
      description:
        'Interactive course with real-world system design case studies.',
      type: 'course',
      url: 'https://example.com/grokking-system-design',
      duration: '15 hours',
    },
  ],
};

export default function SystemDesignResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...systemDesignResources} />
    </div>
  );
}
