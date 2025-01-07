import { ResourcePage } from '../../(components)/resource-page';

const versionControlResources = {
  title: 'Version Control Resources',
  description:
    'Master Git and GitHub for managing your code and collaborating with others.',
  resources: [
    {
      title: 'Git Tutorial for Beginners',
      description: 'A simple tutorial for getting started with git.',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=CvUiKWv2-C0',
      duration: '36 minutes',
    },
    {
      title: 'Git and GitHub for Beginners - Crash Course',
      description: 'Video tutorial on Git and GitHub basics.',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
      duration: '1 hour',
    },
  ],
};

export default function VersionControlResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...versionControlResources} />
    </div>
  );
}
