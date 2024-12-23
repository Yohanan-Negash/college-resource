import { ResourcePage } from '../../(components)/resource-page';

const productSkillsResources = {
  title: 'Product Skills Resources',
  description: 'Develop product thinking and user-centric design skills.',
  resources: [
    {
      title: 'Product School',
      description: 'Free product management resources and webinars.',
      type: 'course',
      url: 'https://productschool.com/free-product-management-resources/',
      duration: 'Various',
    },
    {
      title: 'Interaction Design Foundation',
      description: 'UX design courses and literature.',
      type: 'course',
      url: 'https://www.interaction-design.org/',
      duration: 'Self-paced',
    },
    {
      title: 'Product Hunt',
      description: 'Platform to discover and stay updated with new products.',
      type: 'tool',
      url: 'https://www.producthunt.com/',
    },
    {
      title: 'The Lean Startup by Eric Ries',
      description: 'Book on building and scaling startups efficiently.',
      type: 'article',
      url: 'http://theleanstartup.com/',
    },
  ],
};

export default function ProductSkillsResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...productSkillsResources} />
    </div>
  );
}
