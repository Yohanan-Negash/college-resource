import React from 'react';
import { FoundationTopicGuide } from '../(components)/FoundationTopicGuide';

const foundationTopics = {
  'computer-science-fundamentals': {
    title: 'Computer Science Fundamentals',
    description:
      'Master the core concepts of computer science, including algorithms, data structures, and computational thinking.',
    steps: [
      {
        title: 'Introduction to Computer Science',
        description:
          'Learn the basics of computer science and computational thinking.',
        completed: false,
        resources: [
          {
            name: 'CS50: Introduction to Computer Science',
            url: 'https://cs50.harvard.edu/x/2023/',
            type: 'course',
            duration: '11 weeks',
          },
          {
            name: 'Khan Academy: Computer Science',
            url: 'https://www.khanacademy.org/computing/computer-science',
            type: 'course',
          },
        ],
      },
      {
        title: 'Data Structures',
        description:
          'Understand fundamental data structures used in computer science.',
        completed: false,
        resources: [
          {
            name: 'MIT OpenCourseWare: Introduction to Algorithms',
            url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
            type: 'course',
            duration: '12 weeks',
          },
          {
            name: 'GeeksforGeeks: Data Structures',
            url: 'https://www.geeksforgeeks.org/data-structures/',
            type: 'article',
          },
        ],
      },
      {
        title: 'Algorithms',
        description: 'Learn about algorithm design and analysis.',
        completed: false,
        resources: [
          {
            name: 'Coursera: Algorithms Specialization',
            url: 'https://www.coursera.org/specializations/algorithms',
            type: 'course',
            duration: '4 months',
          },
          {
            name: 'VisuAlgo',
            url: 'https://visualgo.net/en',
            type: 'tool',
          },
        ],
      },
    ],
  },
  'programming-basics': {
    title: 'Programming Basics',
    description:
      'Master the fundamentals of programming, including syntax, control structures, and object-oriented concepts.',
    steps: [
      {
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming concepts and syntax.',
        completed: false,
        resources: [
          {
            name: 'freeCodeCamp: JavaScript Algorithms and Data Structures',
            url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
            type: 'course',
          },
          {
            name: 'Python for Everybody',
            url: 'https://www.py4e.com/',
            type: 'course',
            duration: '8 weeks',
          },
        ],
      },
      {
        title: 'Object-Oriented Programming',
        description:
          'Understand the principles of object-oriented programming.',
        completed: false,
        resources: [
          {
            name: 'Coursera: Object Oriented Programming in Java',
            url: 'https://www.coursera.org/learn/object-oriented-java',
            type: 'course',
            duration: '6 weeks',
          },
          {
            name: 'Real Python: Object-Oriented Programming in Python 3',
            url: 'https://realpython.com/python3-object-oriented-programming/',
            type: 'article',
          },
        ],
      },
      {
        title: 'Version Control',
        description: 'Learn how to use Git for version control.',
        completed: false,
        resources: [
          {
            name: 'GitHub Learning Lab',
            url: 'https://lab.github.com/',
            type: 'course',
          },
          {
            name: 'Atlassian Git Tutorial',
            url: 'https://www.atlassian.com/git/tutorials',
            type: 'article',
          },
        ],
      },
    ],
  },
  // Add more foundation topics here...
};

export default function FoundationTopicPage({ params }) {
  const topic = foundationTopics[params.slug];

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div className='container mx-auto p-6'>
      <FoundationTopicGuide {...topic} topicSlug={params.slug} />
    </div>
  );
}
