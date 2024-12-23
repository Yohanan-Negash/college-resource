import { ResourcePage } from '../../(components)/resource-page';

const fullStackResources = {
  title: 'Full-Stack Development Resources',
  description: 'Learn to build complete web applications from front to back.',
  resources: [
    {
      title: 'The Odin Project',
      description:
        'Free full stack curriculum covering JavaScript, Ruby on Rails, and more.',
      type: 'course',
      url: 'https://www.theodinproject.com/',
      duration: 'Self-paced',
    },
    {
      title: 'Full Stack Open',
      description:
        'Deep dive into modern web development with React, Node.js, and more.',
      type: 'course',
      url: 'https://fullstackopen.com/en/',
      duration: 'Self-paced',
    },
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive resource for web technologies documentation.',
      type: 'article',
      url: 'https://developer.mozilla.org/en-US/',
    },
    {
      title: 'FreeCodeCamp Full Stack Development Video',
      description:
        'Comprehensive video course covering full stack web development.',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
      duration: '12 hours',
    },
  ],
};

export default function FullStackResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...fullStackResources} />
    </div>
  );
}
