import { ResourcePage } from '../../(components)/resource-page';

const basicAlgorithmsResources = {
  title: 'Basic Algorithms Resources',
  description: 'Learn about basic sorting and searching algorithms.',
  resources: [
    {
      title: 'Algorithms - Khan Academy',
      description: 'Free course on basic algorithms and data structures.',
      type: 'course',
      url: 'https://www.khanacademy.org/computing/computer-science/algorithms',
      duration: 'Self-paced',
    },
    {
      title: 'Sorting Algorithms Visualizations',
      description: 'Interactive visualizations of various sorting algorithms.',
      type: 'tool',
      url: 'https://www.sortvisualizer.com/',
    },
    {
      title: 'Introduction to Algorithms - MIT OpenCourseWare',
      description: 'Comprehensive course on algorithms from MIT.',
      type: 'course',
      url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
      duration: '12 weeks',
    },
    {
      title: 'Big-O Cheat Sheet',
      description: 'Quick reference for algorithm complexity analysis.',
      type: 'article',
      url: 'https://www.bigocheatsheet.com/',
    },
  ],
};

export default function BasicAlgorithmsResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...basicAlgorithmsResources} />
    </div>
  );
}
