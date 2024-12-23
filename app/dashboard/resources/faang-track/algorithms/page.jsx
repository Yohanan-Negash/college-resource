import { ResourcePage } from '../../(components)/resource-page';

const algorithmsResources = {
  title: 'Algorithms Resources',
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
    {
      title: 'Dynamic Programming Mastery',
      description:
        'In-depth course on mastering dynamic programming techniques.',
      type: 'course',
      url: 'https://example.com/dynamic-programming',
      duration: '12 hours',
    },
    {
      title: 'Graph Algorithms Explained',
      description:
        'Visual explanations and implementations of common graph algorithms.',
      type: 'video',
      url: 'https://example.com/graph-algorithms',
      duration: '6 hours',
    },
  ],
};

export default function AlgorithmsResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...algorithmsResources} />
    </div>
  );
}
