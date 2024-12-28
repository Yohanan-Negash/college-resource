'use client';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const roadmaps = {
  'frontend-developer': {
    title: 'Frontend Developer Roadmap',
    description:
      'Master the skills needed to become a proficient frontend developer',
    stages: [
      {
        title: 'Fundamentals',
        skills: [
          {
            name: 'HTML',
            completed: false,
            resource: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
          },
          {
            name: 'CSS',
            completed: false,
            resource: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
          },
          {
            name: 'JavaScript',
            completed: false,
            resource: 'https://javascript.info/',
          },
          {
            name: 'Git',
            completed: false,
            resource: 'https://git-scm.com/book/en/v2',
          },
        ],
      },
      {
        title: 'Advanced CSS',
        skills: [
          {
            name: 'Flexbox',
            completed: false,
            resource: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
          },
          {
            name: 'Grid',
            completed: false,
            resource:
              'https://css-tricks.com/snippets/css/complete-guide-grid/',
          },
          {
            name: 'Responsive Design',
            completed: false,
            resource: 'https://web.dev/responsive-web-design-basics/',
          },
          {
            name: 'CSS Preprocessors (Sass/Less)',
            completed: false,
            resource: 'https://sass-lang.com/guide',
          },
        ],
      },
      {
        title: 'JavaScript Frameworks',
        skills: [
          {
            name: 'React',
            completed: false,
            resource: 'https://react.dev/learn',
          },
          {
            name: 'Vue.js',
            completed: false,
            resource: 'https://vuejs.org/guide/introduction.html',
          },
          {
            name: 'Angular',
            completed: false,
            resource: 'https://angular.io/tutorial',
          },
        ],
      },
      {
        title: 'State Management',
        skills: [
          {
            name: 'Redux',
            completed: false,
            resource: 'https://redux.js.org/introduction/getting-started',
          },
          {
            name: 'MobX',
            completed: false,
            resource: 'https://mobx.js.org/getting-started.html',
          },
          {
            name: 'Vuex',
            completed: false,
            resource: 'https://vuex.vuejs.org/',
          },
        ],
      },
      {
        title: 'Build Tools',
        skills: [
          {
            name: 'Webpack',
            completed: false,
            resource: 'https://webpack.js.org/concepts/',
          },
          {
            name: 'Babel',
            completed: false,
            resource: 'https://babeljs.io/docs/en/',
          },
          {
            name: 'ESLint',
            completed: false,
            resource: 'https://eslint.org/docs/user-guide/getting-started',
          },
        ],
      },
    ],
  },
  'backend-developer': {
    title: 'Backend Developer Roadmap',
    description:
      'Learn server-side programming, databases, and API development',
    stages: [
      {
        title: 'Programming Languages',
        skills: [
          {
            name: 'Python',
            completed: false,
            resource: 'https://docs.python.org/3/tutorial/',
          },
          {
            name: 'Java',
            completed: false,
            resource: 'https://dev.java/learn/',
          },
          {
            name: 'Node.js',
            completed: false,
            resource: 'https://nodejs.org/en/docs/guides/',
          },
        ],
      },
      {
        title: 'Databases',
        skills: [
          {
            name: 'SQL',
            completed: false,
            resource: 'https://www.w3schools.com/sql/',
          },
          {
            name: 'MongoDB',
            completed: false,
            resource: 'https://docs.mongodb.com/manual/tutorial/',
          },
          {
            name: 'PostgreSQL',
            completed: false,
            resource: 'https://www.postgresql.org/docs/current/tutorial.html',
          },
        ],
      },
      {
        title: 'API Development',
        skills: [
          {
            name: 'RESTful APIs',
            completed: false,
            resource: 'https://restfulapi.net/',
          },
          {
            name: 'GraphQL',
            completed: false,
            resource: 'https://graphql.org/learn/',
          },
          {
            name: 'Authentication',
            completed: false,
            resource: 'https://auth0.com/docs/',
          },
        ],
      },
    ],
  },
  'full-stack-developer': {
    title: 'Full Stack Developer Roadmap',
    description:
      'Combine frontend and backend skills to build complete web applications',
    stages: [
      {
        title: 'Frontend Skills',
        skills: [
          {
            name: 'HTML/CSS/JavaScript',
            completed: false,
            resource:
              'https://www.freecodecamp.org/learn/responsive-web-design/',
          },
          {
            name: 'React',
            completed: false,
            resource: 'https://react.dev/learn',
          },
          {
            name: 'Vue.js',
            completed: false,
            resource: 'https://vuejs.org/guide/introduction.html',
          },
        ],
      },
      {
        title: 'Backend Skills',
        skills: [
          {
            name: 'Node.js',
            completed: false,
            resource: 'https://nodejs.org/en/docs/guides/',
          },
          {
            name: 'Express.js',
            completed: false,
            resource: 'https://expressjs.com/en/starter/installing.html',
          },
          {
            name: 'Django',
            completed: false,
            resource: 'https://docs.djangoproject.com/en/3.2/intro/tutorial01/',
          },
        ],
      },
      {
        title: 'Database Management',
        skills: [
          {
            name: 'SQL',
            completed: false,
            resource: 'https://www.w3schools.com/sql/',
          },
          {
            name: 'MongoDB',
            completed: false,
            resource: 'https://docs.mongodb.com/manual/tutorial/',
          },
          {
            name: 'ORM/ODM',
            completed: false,
            resource: 'https://sequelize.org/master/',
          },
        ],
      },
    ],
  },
  'devops-engineer': {
    title: 'DevOps Engineer Roadmap',
    description: 'Explore CI/CD, containerization, and cloud technologies',
    stages: [
      {
        title: 'Version Control',
        skills: [
          {
            name: 'Git',
            completed: false,
            resource: 'https://git-scm.com/book/en/v2',
          },
          {
            name: 'GitHub/GitLab',
            completed: false,
            resource: 'https://docs.github.com/en/get-started',
          },
        ],
      },
      {
        title: 'Containerization',
        skills: [
          {
            name: 'Docker',
            completed: false,
            resource: 'https://docs.docker.com/get-started/',
          },
          {
            name: 'Kubernetes',
            completed: false,
            resource: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
          },
        ],
      },
      {
        title: 'CI/CD',
        skills: [
          {
            name: 'Jenkins',
            completed: false,
            resource: 'https://www.jenkins.io/doc/tutorials/',
          },
          {
            name: 'GitLab CI',
            completed: false,
            resource: 'https://docs.gitlab.com/ee/ci/',
          },
          {
            name: 'GitHub Actions',
            completed: false,
            resource: 'https://docs.github.com/en/actions',
          },
        ],
      },
    ],
  },
  'data-scientist': {
    title: 'Data Scientist Roadmap',
    description:
      'Dive into statistics, machine learning, and data visualization',
    stages: [
      {
        title: 'Programming',
        skills: [
          {
            name: 'Python',
            completed: false,
            resource: 'https://docs.python.org/3/tutorial/',
          },
          {
            name: 'R',
            completed: false,
            resource:
              'https://cran.r-project.org/doc/manuals/r-release/R-intro.html',
          },
        ],
      },
      {
        title: 'Statistics and Math',
        skills: [
          {
            name: 'Linear Algebra',
            completed: false,
            resource:
              'https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/',
          },
          {
            name: 'Probability',
            completed: false,
            resource: 'https://www.khanacademy.org/math/statistics-probability',
          },
        ],
      },
      {
        title: 'Machine Learning',
        skills: [
          {
            name: 'Supervised Learning',
            completed: false,
            resource:
              'https://scikit-learn.org/stable/supervised_learning.html',
          },
          {
            name: 'Unsupervised Learning',
            completed: false,
            resource:
              'https://scikit-learn.org/stable/unsupervised_learning.html',
          },
          {
            name: 'Deep Learning',
            completed: false,
            resource: 'https://www.deeplearning.ai/',
          },
        ],
      },
    ],
  },
  'mobile-app-developer': {
    title: 'Mobile App Developer Roadmap',
    description: 'Build native and cross-platform mobile applications',
    stages: [
      {
        title: 'Native Development',
        skills: [
          {
            name: 'Swift (iOS)',
            completed: false,
            resource: 'https://developer.apple.com/swift/',
          },
          {
            name: 'Kotlin (Android)',
            completed: false,
            resource: 'https://developer.android.com/kotlin',
          },
        ],
      },
      {
        title: 'Cross-Platform Development',
        skills: [
          {
            name: 'React Native',
            completed: false,
            resource: 'https://reactnative.dev/docs/getting-started',
          },
          {
            name: 'Flutter',
            completed: false,
            resource: 'https://flutter.dev/docs/get-started/install',
          },
        ],
      },
      {
        title: 'Mobile UI/UX',
        skills: [
          {
            name: 'Material Design',
            completed: false,
            resource: 'https://material.io/design',
          },
          {
            name: 'iOS Human Interface Guidelines',
            completed: false,
            resource:
              'https://developer.apple.com/design/human-interface-guidelines/',
          },
        ],
      },
    ],
  },
};

export default function RoadmapPage({ params }) {
  const roadmap = roadmaps[params.slug];

  if (!roadmap) {
    return <div>Roadmap not found</div>;
  }

  const [skills, setSkills] = useState(
    roadmap.stages.flatMap((stage) => stage.skills)
  );

  const totalSkills = skills.length;
  const completedSkills = skills.filter((skill) => skill.completed).length;
  const progress = (completedSkills / totalSkills) * 100;

  const toggleSkill = (skillIndex) => {
    const updatedSkills = [...skills];
    updatedSkills[skillIndex].completed = !updatedSkills[skillIndex].completed;
    setSkills(updatedSkills);
  };

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-4xl font-bold mb-2'>{roadmap.title}</h1>
      <p className='text-xl text-muted-foreground mb-6'>
        {roadmap.description}
      </p>

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
          <CardDescription>Track your learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex justify-between mb-2'>
            <span>Overall Completion</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className='w-full' />
        </CardContent>
      </Card>

      <div className='space-y-8'>
        {roadmap.stages.map((stage, stageIndex) => (
          <Card key={stageIndex}>
            <CardHeader>
              <CardTitle>{stage.title}</CardTitle>
              <CardDescription>Master these skills to progress</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='grid gap-2 sm:grid-cols-2 md:grid-cols-3'>
                {stage.skills.map((skill, skillIndex) => {
                  const globalSkillIndex =
                    roadmap.stages
                      .slice(0, stageIndex)
                      .reduce((sum, s) => sum + s.skills.length, 0) +
                    skillIndex;
                  return (
                    <li key={skillIndex} className='flex items-center gap-2'>
                      <Button
                        variant='ghost'
                        size='sm'
                        className='p-0'
                        onClick={() => toggleSkill(globalSkillIndex)}
                      >
                        {skills[globalSkillIndex].completed ? (
                          <CheckCircle2 className='h-5 w-5 text-green-500' />
                        ) : (
                          <Circle className='h-5 w-5 text-muted-foreground' />
                        )}
                      </Button>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className='cursor-help'>{skill.name}</span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Click to learn more about {skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      {skills[globalSkillIndex].completed && (
                        <Badge variant='secondary' className='ml-auto'>
                          Completed
                        </Badge>
                      )}
                      <Link
                        href={skill.resource}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Button variant='ghost' size='sm' className='p-1'>
                          <ExternalLink className='h-4 w-4' />
                        </Button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
