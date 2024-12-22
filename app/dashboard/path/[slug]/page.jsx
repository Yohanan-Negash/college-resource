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
        title: 'Product Skills',
        description: 'Develop product thinking and user-centric design skills.',
        completed: false,
        resourcePath: 'product-skills',
      },
      {
        title: 'Rapid Prototyping',
        description:
          'Master the art of quickly building and iterating on product ideas.',
        completed: false,
        resourcePath: 'rapid-prototyping',
      },
      {
        title: 'Agile Methodologies',
        description:
          'Learn about Agile and Scrum practices commonly used in startups.',
        completed: false,
        resourcePath: 'agile-methodologies',
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
        title: 'Basic Data Structures',
        description:
          'Learn about fundamental data structures like arrays, lists, and dictionaries.',
        completed: false,
        resourcePath: 'basic-data-structures',
      },
      {
        title: 'Introduction to Databases',
        description: 'Understand the basics of databases and SQL.',
        completed: false,
        resourcePath: 'intro-to-databases',
      },
      {
        title: 'Basic Algorithms',
        description: 'Learn about basic sorting and searching algorithms.',
        completed: false,
        resourcePath: 'basic-algorithms',
      },
    ],
  },
};

export default function PathPage({ params }) {
  const path = pathData[params.slug];

  if (!path) {
    return <div>Path not found</div>;
  }

  return (
    <div className='container mx-auto p-6'>
      <PathGuide {...path} pathSlug={params.slug} />
    </div>
  );
}
