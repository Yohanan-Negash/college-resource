import { ResourcePage } from '../../(components)/resource-page';

const introToDatabasesResources = {
  title: 'Introduction to Databases Resources',
  description: 'Understand the basics of databases and SQL.',
  resources: [
    {
      title: 'SQL Tutorial - W3Schools',
      description: 'Interactive SQL tutorial for beginners.',
      type: 'course',
      url: 'https://www.w3schools.com/sql/',
      duration: 'Self-paced',
    },
    {
      title: 'Database Design for Beginners',
      description: 'YouTube playlist on database design fundamentals.',
      type: 'video',
      url: 'https://www.youtube.com/playlist?list=PLqG356ExoxZVN7rC0KmMo0lvECK97VRZg',
      duration: '2 hours',
    },
    {
      title: 'Introduction to Databases - Stanford Online',
      description: 'Comprehensive course on database concepts.',
      type: 'course',
      url: 'https://online.stanford.edu/courses/soe-ydatabases-databases',
      duration: '11 weeks',
    },
    {
      title: 'SQLBolt',
      description: 'Interactive lessons and exercises to learn SQL.',
      type: 'course',
      url: 'https://sqlbolt.com/',
      duration: 'Self-paced',
    },
  ],
};

export default function IntroToDatabasesResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...introToDatabasesResources} />
    </div>
  );
}
