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
      title: 'Rapid Prototyping Course',
      description: 'Coursera course on rapid prototyping techniques.',
      type: 'course',
      url: 'https://www.coursera.org/learn/high-fidelity-designs-prototype?action=enroll',
      duration: 'Self-paced',
    },
    {
      title: 'Mobile App Design in Figma',
      description:
        'You have to pay for this course but it is worth it. If your are interested in a step-by-step guide to designing mobile apps in Figma, this course is for you.',
      type: 'course',
      url: 'https://www.udemy.com/course/mobile-app-design-in-figma-from-concept-to-prototype/?couponCode=NEWYEARCAREER',
      duration: 'Self-paced',
    },
    {
      title: 'Typography',
      description: 'A great video on UI Design that you need to watch.',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=9-oefwZ6Z74',
      duration: '12 minutes',
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
