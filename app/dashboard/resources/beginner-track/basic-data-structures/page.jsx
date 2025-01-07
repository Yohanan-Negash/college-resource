import { ResourcePage } from '../../(components)/resource-page';

const basicDataStructuresResources = {
  title: 'Basic Data Structures Resources',
  description:
    'Learn about fundamental data structures like arrays, lists, and dictionaries.',
  resources: [
    {
      title: 'Data Structures - GeeksforGeeks',
      description: 'Comprehensive tutorials on various data structures.',
      type: 'documentation',
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
      title: 'Data Structures and Algorithms',
      description: 'A great video playlist on data structures and algorithms.',
      type: 'videos',
      url: 'https://www.youtube.com/playlist?list=PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H',
      duration: 'Self-paced',
    },
    {
      title: 'Visualgo',
      description:
        'Visualizing data structures and algorithms through animation.',
      type: 'tool',
      url: 'https://visualgo.net/en',
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
