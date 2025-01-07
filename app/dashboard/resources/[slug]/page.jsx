import { ResourcePage } from '../(components)/resource-page';

const resourcesData = {
  'data-structures': {
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
    ],
  },
  algorithms: {
    title: 'Algorithm Resources',
    description:
      'Learn and practice essential algorithms for coding interviews and problem-solving.',
    resources: [
      {
        title: 'Algorithm Design and Analysis',
        description:
          'Video lectures on algorithm design techniques and complexity analysis.',
        type: 'video',
        url: 'https://example.com/algorithm-design-video',
        duration: '8 hours',
      },
      {
        title: 'LeetCode Premium',
        description: 'Platform for practicing coding problems and algorithms.',
        type: 'tool',
        url: 'https://leetcode.com/premium',
      },
      {
        title: 'Introduction to Algorithms (CLRS)',
        description:
          'Comprehensive textbook covering a wide range of algorithms.',
        type: 'article',
        url: 'https://example.com/clrs-textbook',
      },
    ],
  },
  // Add more resources for other steps...
};

export default function ResourcesPage({ params }) {
  const resources = resourcesData[params.slug];

  if (!resources) {
    return <div>Resources not found</div>;
  }

  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...resources} />
    </div>
  );
}
