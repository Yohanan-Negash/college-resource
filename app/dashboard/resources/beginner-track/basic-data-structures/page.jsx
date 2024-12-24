import { ResourcePage } from '../../(components)/resource-page';

const basicDataStructuresResources = {
  title: 'Basic Data Structures Resources',
  description:
    'Learn about fundamental data structures like arrays, lists, and dictionaries.',
  resources: [
    {
      title: 'Data Structures - GeeksforGeeks',
      description: 'Comprehensive tutorials on various data structures.',
      type: 'article',
      url: 'https://www.geeksforgeeks.org/data-structures/',
    },
    {
      title: 'Coursera: Data Structures and Algorithms Specialization',
      description: 'In-depth course on data structures and algorithms.',
      type: 'course',
      url: 'https://www.coursera.org/specializations/data-structures-algorithms',
      duration: '8 months',
    },
    {
      title: 'Visualgo',
      description:
        'Visualizing data structures and algorithms through animation.',
      type: 'tool',
      url: 'https://visualgo.net/en',
    },
    {
      title: 'Python Data Structures Tutorial',
      description: 'Tutorial on built-in data structures in Python.',
      type: 'article',
      url: 'https://docs.python.org/3/tutorial/datastructures.html',
    },
  ],
};

export default function BasicDataStructuresResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...basicDataStructuresResources} />
    </div>
  );
}
