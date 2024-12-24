import { ResourcePage } from '../../(components)/resource-page';

const agileMethodologiesResources = {
  title: 'Agile Methodologies Resources',
  description:
    'Learn about Agile and Scrum practices commonly used in startups.',
  resources: [
    {
      title: 'Scrum Guide',
      description: 'The official Scrum Guide by Scrum.org.',
      type: 'article',
      url: 'https://www.scrumguides.org/scrum-guide.html',
    },
    {
      title: 'Agile 101',
      description: 'Introduction to Agile methodologies by Agile Alliance.',
      type: 'article',
      url: 'https://www.agilealliance.org/agile101/',
    },
    {
      title: 'Atlassian Agile Coach',
      description: 'Comprehensive guide to Agile practices and principles.',
      type: 'course',
      url: 'https://www.atlassian.com/agile',
      duration: 'Self-paced',
    },
    {
      title: 'Trello',
      description: 'Project management tool often used for Agile workflows.',
      type: 'tool',
      url: 'https://trello.com/',
    },
  ],
};

export default function AgileMethodologiesResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...agileMethodologiesResources} />
    </div>
  );
}
