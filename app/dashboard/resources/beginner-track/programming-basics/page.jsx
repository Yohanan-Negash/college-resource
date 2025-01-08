import { ResourcePage } from '../../(components)/resource-page';

const programmingBasicsResources = {
  title: 'Programming Basics Resources',
  description:
    'Learn the fundamentals of programming with Python or JavaScript.',
  resources: [
    {
      title: 'Codecademy: Learn Python',
      description: 'Interactive course to learn Python programming.',
      type: 'course',
      url: 'https://www.codecademy.com/learn/learn-python-3',
      duration: '25 hours',
    },
    {
      title: "CS50's Introduction to Programming with Python",
      description:
        "Harvard's renowned introductory course, now focused on Python.",
      type: 'course',
      url: 'https://www.edx.org/course/cs50s-introduction-to-programming-with-python',
      duration: '10 weeks',
    },
    {
      title: 'freeCodeCamp: JavaScript Algorithms and Data Structures',
      description: 'Comprehensive course on JavaScript fundamentals.',
      type: 'course',
      url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
      duration: 'Self-paced',
    },

    {
      title: 'MDN JavaScript Guide',
      description: 'Comprehensive guide to JavaScript programming.',
      type: 'documentation',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    },
  ],
};

export default function ProgrammingBasicsResourcesPage() {
  return (
    <div className='container mx-auto p-6'>
      <ResourcePage {...programmingBasicsResources} />
    </div>
  );
}
