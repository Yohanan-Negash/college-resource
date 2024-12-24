import { ResourcePage } from '../../(components)/resource-page';

const webFundamentalsResources = {
  title: 'Web Fundamentals Resources',
  description:
    'Understand the basics of HTML, CSS, and JavaScript for web development.',
  resources: [
    {
      title: 'MDN: Getting started with the Web',
      description: "Beginner's guide to web development by Mozilla.",
      type: 'article',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web',
    },
    {
      title: 'freeCodeCamp: Responsive Web Design',
      description: 'Learn HTML and CSS with practical projects.',
      type: 'course',
      url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
      duration: '300 hours',
    },
    {
      title: 'W3Schools',
      description:
        'Comprehensive tutorials and references for web technologies.',
      type: 'article',
      url: 'https://www.w3schools.com/',
    },
    {
      title: 'Interneting Is Hard',
      description: 'Friendly web development tutorials for complete beginners.',
      type: 'article',
      url: 'https://www.internetingishard.com/',
    },
  ],
};

export default function WebFundamentalsResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...webFundamentalsResources} />
    </div>
  );
}
