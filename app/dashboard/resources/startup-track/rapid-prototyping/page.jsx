import { ResourcePage } from '../../(components)/resource-page';

const rapidPrototypingResources = {
  title: 'Rapid Prototyping Resources',
  description:
    'Master the art of quickly building and iterating on product ideas.',
  resources: [
    {
      title: 'Figma',
      description:
        'Collaborative interface design tool with prototyping features.',
      type: 'tool',
      url: 'https://www.figma.com/',
    },
    {
      title: 'Adobe XD',
      description:
        'UI/UX design and collaboration tool with prototyping capabilities.',
      type: 'tool',
      url: 'https://www.adobe.com/products/xd.html',
    },
    {
      title: 'InVision',
      description:
        'Digital product design platform for prototyping and collaboration.',
      type: 'tool',
      url: 'https://www.invisionapp.com/',
    },
    {
      title: 'Rapid Prototyping Course',
      description: 'Coursera course on rapid prototyping techniques.',
      type: 'course',
      url: 'https://www.coursera.org/learn/rapid-prototyping',
      duration: '4 weeks',
    },
  ],
};

export default function RapidPrototypingResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...rapidPrototypingResources} />
    </div>
  );
}
