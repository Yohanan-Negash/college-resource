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
  'data-structures-and-algorithms': {
    title: 'Data Structures and Algorithms',
    description:
      'Understand essential data structures and algorithms for efficient problem-solving.',
    steps: [
      {
        title: 'Basic Data Structures',
        description:
          'Learn about fundamental data structures like arrays, linked lists, stacks, and queues.',
        completed: false,
        resources: [
          {
            name: 'Coursera: Data Structures and Algorithms Specialization',
            url: 'https://www.coursera.org/specializations/data-structures-algorithms',
            type: 'course',
            duration: '8 months',
          },
          {
            name: 'HackerRank: Data Structures',
            url: 'https://www.hackerrank.com/domains/data-structures',
            type: 'practice',
          },
        ],
      },
      {
        title: 'Advanced Data Structures',
        description:
          'Explore more complex data structures like trees, graphs, and hash tables.',
        completed: false,
        resources: [
          {
            name: 'MIT OpenCourseWare: Advanced Data Structures',
            url: 'https://ocw.mit.edu/courses/6-851-advanced-data-structures-spring-2012/',
            type: 'course',
            duration: '12 weeks',
          },
          {
            name: 'GeeksforGeeks: Advanced Data Structures',
            url: 'https://www.geeksforgeeks.org/advanced-data-structures/',
            type: 'article',
          },
        ],
      },
      {
        title: 'Algorithm Design and Analysis',
        description:
          'Learn techniques for designing efficient algorithms and analyzing their complexity.',
        completed: false,
        resources: [
          {
            name: 'Stanford: Algorithms: Design and Analysis',
            url: 'https://online.stanford.edu/courses/soe-ycsalgorithms1-algorithms-design-and-analysis-part-1',
            type: 'course',
            duration: '6 weeks',
          },
          {
            name: 'LeetCode',
            url: 'https://leetcode.com/',
            type: 'practice',
          },
        ],
      },
    ],
  },
  'web-technologies': {
    title: 'Web Technologies',
    description:
      'Learn how the web works, including client-side and server-side technologies.',
    steps: [
      {
        title: 'HTML and CSS Basics',
        description:
          'Master the fundamentals of HTML and CSS for web development.',
        completed: false,
        resources: [
          {
            name: 'MDN Web Docs: HTML',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            type: 'documentation',
          },
          {
            name: 'freeCodeCamp: Responsive Web Design',
            url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
            type: 'course',
          },
        ],
      },
      {
        title: 'JavaScript and DOM Manipulation',
        description:
          'Learn JavaScript and how to interact with the Document Object Model.',
        completed: false,
        resources: [
          {
            name: 'Eloquent JavaScript',
            url: 'https://eloquentjavascript.net/',
            type: 'book',
          },
          {
            name: 'JavaScript30',
            url: 'https://javascript30.com/',
            type: 'course',
            duration: '30 days',
          },
        ],
      },
      {
        title: 'Backend Development and APIs',
        description:
          'Understand server-side programming and how to create APIs.',
        completed: false,
        resources: [
          {
            name: 'Node.js Documentation',
            url: 'https://nodejs.org/en/docs/',
            type: 'documentation',
          },
          {
            name: 'freeCodeCamp: APIs and Microservices',
            url: 'https://www.freecodecamp.org/learn/apis-and-microservices/',
            type: 'course',
          },
        ],
      },
    ],
  },
  'networking-fundamentals': {
    title: 'Networking Fundamentals',
    description:
      'Understand computer networks and protocols essential for web development.',
    steps: [
      {
        title: 'Introduction to Computer Networks',
        description:
          'Learn the basics of computer networking and the OSI model.',
        completed: false,
        resources: [
          {
            name: 'Coursera: The Bits and Bytes of Computer Networking',
            url: 'https://www.coursera.org/learn/computer-networking',
            type: 'course',
            duration: '4 weeks',
          },
          {
            name: 'Computerphile: Networking Videos',
            url: 'https://www.youtube.com/playlist?list=PLzH6n4zXuckpKAj1_88VS-8Z6yn9zX_P6',
            type: 'video',
          },
        ],
      },
      {
        title: 'TCP/IP and HTTP',
        description: 'Understand the TCP/IP protocol suite and how HTTP works.',
        completed: false,
        resources: [
          {
            name: 'MDN Web Docs: HTTP',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
            type: 'documentation',
          },
          {
            name: 'Wireshark: Network Protocol Analyzer',
            url: 'https://www.wireshark.org/',
            type: 'tool',
          },
        ],
      },
      {
        title: 'Network Security',
        description:
          'Learn about common network security threats and protection mechanisms.',
        completed: false,
        resources: [
          {
            name: 'Coursera: Network Security & Database Vulnerabilities',
            url: 'https://www.coursera.org/learn/network-security-database-vulnerabilities',
            type: 'course',
            duration: '4 weeks',
          },
          {
            name: 'OWASP Top Ten',
            url: 'https://owasp.org/www-project-top-ten/',
            type: 'article',
          },
        ],
      },
    ],
  },
  'cybersecurity-basics': {
    title: 'Cybersecurity Basics',
    description:
      'Learn the fundamentals of cybersecurity to protect web applications and user data.',
    steps: [
      {
        title: 'Introduction to Cybersecurity',
        description:
          'Understand the basics of cybersecurity and common threats.',
        completed: false,
        resources: [
          {
            name: 'Coursera: Introduction to Cyber Security Specialization',
            url: 'https://www.coursera.org/specializations/intro-cyber-security',
            type: 'course',
            duration: '4 months',
          },
          {
            name: 'NIST Cybersecurity Framework',
            url: 'https://www.nist.gov/cyberframework',
            type: 'article',
          },
        ],
      },
      {
        title: 'Web Application Security',
        description:
          'Learn about common web application vulnerabilities and how to prevent them.',
        completed: false,
        resources: [
          {
            name: 'OWASP Web Security Testing Guide',
            url: 'https://owasp.org/www-project-web-security-testing-guide/',
            type: 'documentation',
          },
          {
            name: 'Hack The Box',
            url: 'https://www.hackthebox.eu/',
            type: 'practice',
          },
        ],
      },
      {
        title: 'Cryptography Fundamentals',
        description:
          'Understand basic cryptographic concepts and their applications in web security.',
        completed: false,
        resources: [
          {
            name: 'Coursera: Cryptography I',
            url: 'https://www.coursera.org/learn/crypto',
            type: 'course',
            duration: '7 weeks',
          },
          {
            name: 'Crypto101',
            url: 'https://www.crypto101.io/',
            type: 'book',
          },
        ],
      },
    ],
  },
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
