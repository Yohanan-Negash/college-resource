import { ResourcePage } from '../../(components)/resource-page';

const dataStructuresResources = {
  title: 'Data Structures Resources',
  description:
    'Master the fundamental data structures used in tech interviews and software development.',
  resources: [
    {
      title: 'Introduction to Data Structures',
      description:
        'A comprehensive video course covering basic to advanced data structures.',
      type: 'course',
      url: 'https://example.com/data-structures-course',
      duration: '10 hours',
    },
    {
      title: 'Visualizing Data Structures',
      description:
        'Interactive tool to visualize how different data structures work.',
      type: 'tool',
      url: 'https://example.com/data-structure-visualizer',
    },
    {
      title: 'Data Structures in Python',
      description:
        'Article series explaining how to implement common data structures in Python.',
      type: 'article',
      url: 'https://example.com/python-data-structures',
    },
    {
      title: 'Advanced Data Structures',
      description:
        'Deep dive into complex data structures like Red-Black trees and B-trees.',
      type: 'video',
      url: 'https://example.com/advanced-data-structures',
      duration: '8 hours',
    },
    {
      title: 'Data Structures for Coding Interviews',
      description:
        'Practice problems focusing on data structures commonly asked in coding interviews.',
      type: 'course',
      url: 'https://example.com/interview-data-structures',
      duration: '15 hours',
    },
  ],
};

export default function DataStructuresResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...dataStructuresResources} />
    </div>
  );
}
