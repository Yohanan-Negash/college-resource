import { ResourcePage } from '../../(components)/resource-page';

const basicDataStructuresResources = {
  title: 'Basic Data Structures',
  description:
    'Learn about fundamental data structures like arrays, lists, and dictionaries.',
  icon: 'Database',
  resources: [
    {
      title: 'Data Structures - GeeksforGeeks',
      description: 'Comprehensive tutorials on various data structures.',
      type: 'Documentation',
      url: 'https://www.geeksforgeeks.org/data-structures/',
      icon: 'FileText',
    },
    {
      title: 'Coursera: Data Structures and Algorithms Specialization',
      description: 'In-depth course on data structures and algorithms.',
      type: 'Course',
      url: 'https://www.coursera.org/specializations/data-structures-algorithms',
      duration: '8 months',
      icon: 'GraduationCap',
    },
    {
      title: 'Data Structures and Algorithms',
      description: 'A great video playlist on data structures and algorithms.',
      type: 'Video',
      url: 'https://www.youtube.com/playlist?list=PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H',
      duration: 'Self-paced',
      icon: 'Video',
    },
    {
      title: 'Visualgo',
      description:
        'Visualizing data structures and algorithms through animation.',
      type: 'Tool',
      url: 'https://visualgo.net/en',
      icon: 'Wrench',
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
