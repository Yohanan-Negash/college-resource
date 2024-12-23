import { ResourcePage } from '../../(components)/resource-page';

const versionControlResources = {
  title: 'Version Control Resources',
  description:
    'Master Git and GitHub for managing your code and collaborating with others.',
  resources: [
    {
      title: 'Git - The Simple Guide',
      description: 'A simple guide for getting started with git.',
      type: 'article',
      url: 'https://rogerdudler.github.io/no-get-started/',
    },
    {
      title: 'GitHub Learning Lab',
      description: 'Interactive courses to learn Git and GitHub.',
      type: 'course',
      url: 'https://lab.github.com/',
      duration: 'Self-paced',
    },
    {
      title: 'Atlassian Git Tutorial',
      description: 'Comprehensive Git tutorial by Atlassian.',
      type: 'article',
      url: 'https://www.atlassian.com/git/tutorials',
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
