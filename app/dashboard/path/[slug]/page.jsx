import { PathGuide } from '../(components)/path-guide';

const pathData = {
  'faang-track': {
    title: 'FAANG Track',
    description:
      'Prepare for big tech companies with a focus on algorithms, data structures, and system design.',
    steps: [
      {
        title: 'Data Structures',
        description:
          'Master fundamental data structures used in tech interviews.',
        completed: false,
        resourcePath: 'data-structures',
      },
      {
        title: 'Algorithms',
        description:
          'Learn and practice essential algorithms for coding interviews.',
        completed: false,
        resourcePath: 'algorithms',
      },
      {
        title: 'System Design',
        description:
          'Understand how to design scalable systems for large tech companies.',
        completed: false,
        resourcePath: 'system-design',
      },
    ],
  },
  'startup-track': {
    title: 'Startup Track',
    description:
      'Build practical skills for thriving in fast-paced startup environments.',
    steps: [
      {
        title: 'Full-Stack Development',
        description:
          'Learn to build complete web applications from front to back.',
        completed: false,
        resourcePath: 'full-stack-development',
      },
      {
        title: 'Rapid Prototyping',
        description:
          'Master the art of quickly building and iterating on product ideas.',
        completed: false,
        resourcePath: 'rapid-prototyping',
      },
      {
        title: 'DevOps Basics',
        description:
          'Understand the fundamentals of DevOps practices for efficient development and deployment.',
        completed: false,
        resourcePath: 'devops-basics',
      },
    ],
  },
  'beginner-track': {
    title: 'Beginner Track',
    description:
      'Start your tech journey with fundamental programming and web development skills.',
    steps: [
      {
        title: 'Programming Basics',
        description:
          'Learn the fundamentals of programming with Python or JavaScript.',
        completed: false,
        resourcePath: 'programming-basics',
      },
      {
        title: 'Web Fundamentals',
        description:
          'Understand the basics of HTML, CSS, and JavaScript for web development.',
        completed: false,
        resourcePath: 'web-fundamentals',
      },
      {
        title: 'Version Control',
        description:
          'Master Git and GitHub for managing your code and collaborating with others.',
        completed: false,
        resourcePath: 'version-control',
      },
      {
        title: 'Open Source',
        description:
          'Learn how to contribute to open source projects and make a real-world impact while building your skills.',
        completed: false,
        resourcePath: 'open-source',
      },
    ],
  },
};

export default async function PathPage({ params }) {
  const awaitParams = await params;
  const path = pathData[awaitParams.slug];

  if (!path) {
    return <div>Path not found</div>;
  }

  return (
    <div className='container mx-auto p-6'>
      <PathGuide {...path} pathSlug={awaitParams.slug} />
    </div>
  );
}
