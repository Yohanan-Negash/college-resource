import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Briefcase,
  Code,
  Rocket,
  Users,
  Globe,
  Search,
  Monitor,
  ExternalLink,
  Terminal,
  BriefcaseIcon,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';

export default function Internships() {
  const internshipPlatforms = [
    {
      name: 'Handshake',
      url: 'https://joinhandshake.com',
      icon: Users,
      description: 'Find internships and jobs exclusively for students.',
      color: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
    },
    {
      name: 'WayUp',
      url: 'https://www.wayup.com',
      icon: Rocket,
      description: 'Internships at startups and top companies.',
      color: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
    },
    {
      name: 'Glassdoor',
      url: 'https://www.glassdoor.com',
      icon: Monitor,
      description: 'Search for internships and view company reviews.',
      color: 'bg-green-500/10',
      iconColor: 'text-green-500',
    },
    {
      name: 'Idealist',
      url: 'https://www.idealist.org',
      icon: Globe,
      description: 'Find internships in nonprofits.',
      color: 'bg-teal-500/10',
      iconColor: 'text-teal-500',
    },
  ];

  const preparationResources = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com',
      icon: Code,
      description: 'Practice coding problems for tech interviews.',
      color: 'bg-orange-500/10',
      iconColor: 'text-orange-500',
    },
    {
      name: 'Resume Worded',
      url: 'https://resumeworded.com',
      icon: Briefcase,
      description: 'Improve resumes and LinkedIn profiles.',
      color: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
    },
    {
      name: 'Pramp',
      url: 'https://www.pramp.com',
      icon: Rocket,
      description: 'Free mock interviews for technical roles.',
      color: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
    },
    {
      name: 'Interviewing.io',
      url: 'https://www.interviewing.io',
      icon: Users,
      description: 'Anonymous mock interviews with engineers.',
      color: 'bg-green-500/10',
      iconColor: 'text-green-500',
    },
    {
      name: 'Grokking the Coding Interview',
      url: 'https://www.educative.io/courses/grokking-the-coding-interview',
      icon: Search,
      description: 'Master interview patterns with this popular course.',
      color: 'bg-indigo-500/10',
      iconColor: 'text-indigo-500',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com',
      icon: Terminal,
      description: 'Practice coding challenges & prep for interviews.',
      color: 'bg-emerald-500/10',
      iconColor: 'text-emerald-500',
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/',
      icon: Code,
      description: 'Tutorials, coding problems, and CS concepts.',
      color: 'bg-teal-500/10',
      iconColor: 'text-teal-500',
    },
  ];

  const InternshipSection = ({
    title,
    description,
    resources,
    icon: Icon,
    sectionColor,
    sectionIconColor,
  }) => (
    <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
      <CardHeader>
        <div className='flex items-center space-x-3'>
          <div
            className={`p-2 rounded-md ${sectionColor || 'bg-purple-500/10'}`}
          >
            <Icon
              className={`h-6 w-6 ${sectionIconColor || 'text-purple-500'}`}
            />
          </div>
          <CardTitle className='text-2xl font-bold'>{title}</CardTitle>
        </div>
        <CardDescription className='mt-2'>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4 sm:grid-cols-2'>
          {resources.map((resource) => (
            <Card
              key={resource.name}
              className='overflow-hidden transition-all duration-200 hover:shadow-[0_0_10px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_10px_rgba(139,92,246,0.15)]'
            >
              <CardContent className='p-0'>
                <Button
                  variant='ghost'
                  className='w-full h-full justify-start py-4 px-4 hover:bg-accent group'
                  asChild
                >
                  <Link
                    href={resource.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='flex items-start space-x-4 w-full'>
                      <div className={`p-1.5 rounded-md ${resource.color}`}>
                        <resource.icon
                          className={`h-4 w-4 ${resource.iconColor}`}
                        />
                      </div>
                      <div className='flex-grow min-w-0'>
                        <div className='font-semibold truncate'>
                          {resource.name}
                        </div>
                        <div className='text-xs text-muted-foreground mt-1 line-clamp-2'>
                          {resource.description}
                        </div>
                      </div>
                      <ExternalLink className='h-4 w-4 mt-1 flex-shrink-0 opacity-50 transition-transform duration-300 group-hover:translate-x-1' />
                    </div>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className='container mx-auto p-6 max-w-100'>
      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)]'>
        <CardHeader>
          <div className='flex items-center space-x-3'>
            <div className='p-2 rounded-md bg-purple-500/10'>
              <GraduationCap className='h-6 w-6 text-purple-500' />
            </div>
            <CardTitle className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Internship Resources
            </CardTitle>
          </div>
          <CardDescription className='text-lg text-muted-foreground mt-2'>
            Whether you are looking for internships or preparing for interviews,
            these resources will help you succeed.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-yellow-200 dark:border-yellow-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
            <div className='p-2 rounded-md bg-yellow-500/10 mr-2'>
              <BriefcaseIcon className='h-6 w-6 text-yellow-500' />
            </div>
            Why Pursue Pathway & Leadership programs?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='list-none pl-5 space-y-3'>
            {[
              'Gain real-world experience in a professional setting',
              'Apply theoretical knowledge to practical projects',
              'Expand your professional network and mentorship opportunities',
              'Enhance your resume with hands-on experience',
              'Discover career paths and industry insights early on',
            ].map((item, index) => (
              <li key={index} className='flex items-start'>
                <ArrowRight className='h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5' />
                <span className='text-gray-700 dark:text-gray-200'>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* New Internship Database Section */}
      <Card className='mb-8 shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-shadow duration-300 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-blue-200 dark:border-blue-900/30'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center text-blue-600 dark:text-blue-400'>
            <div className='p-2 rounded-md bg-blue-500/10 mr-2'>
              <Search className='h-6 w-6 text-blue-500' />
            </div>
            Explore Our Pathway & Leadership programs
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='prose dark:prose-invert'>
            <p className='text-gray-700 dark:text-gray-200'>
              Access our curated collection of Pathway & Leadership programs
              hosted by top companies, specifically tailored for college
              students at every stage of their academic journey.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-6'>
              <div className='bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg shadow-sm'>
                <h3 className='text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400'>
                  Early Career Opportunities
                </h3>
                <ul className='space-y-2'>
                  <li className='flex items-center'>
                    <ArrowRight className='h-4 w-4 mr-2 text-blue-500' />
                    <span className='text-gray-700 dark:text-gray-200'>
                      First-year student programs
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <ArrowRight className='h-4 w-4 mr-2 text-blue-500' />
                    <span className='text-gray-700 dark:text-gray-200'>
                      Sophomore-specific programs
                    </span>
                  </li>
                </ul>
              </div>

              <div className='bg-white/80 dark:bg-gray-800/80 p-4 rounded-lg shadow-sm'>
                <h3 className='text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400'>
                  Advanced Placements
                </h3>
                <ul className='space-y-2'>
                  <li className='flex items-center'>
                    <ArrowRight className='h-4 w-4 mr-2 text-blue-500' />
                    <span className='text-gray-700 dark:text-gray-200'>
                      All year opportunities
                    </span>
                  </li>
                  <li className='flex items-center'>
                    <ArrowRight className='h-4 w-4 mr-2 text-blue-500' />
                    <span className='text-gray-700 dark:text-gray-200'>
                      Specialized roles
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='bg-blue-100/80 dark:bg-gray-700/80 p-4 rounded-lg mb-6 shadow-sm'>
              <h3 className='text-lg font-semibold mb-2 flex items-center text-blue-700 dark:text-blue-300'>
                <Rocket className='h-5 w-5 mr-2' />
                Featured Opportunities
              </h3>
              <p className='text-sm text-gray-700 dark:text-gray-300'>
                Discover top-tier Diversity, Pathway, and Leadership Programs
                from Fortune 500 companies, leading tech startups, and
                innovative research institutions.
              </p>
            </div>
          </div>

          <div className='flex justify-center'>
            <Link href='/dashboard/internships/tables'>
              <Button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 shadow-[0_0_10px_rgba(59,130,246,0.3)]'>
                <Search className='h-5 w-5 mr-2' />
                <span>Browse All Programs</span>
                <ArrowRight className='h-5 w-5 ml-2' />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <InternshipSection
        title='Top Internship Platforms'
        description='Explore these platforms for internship opportunities across industries.'
        resources={internshipPlatforms}
        icon={Globe}
        sectionColor='bg-blue-500/10'
        sectionIconColor='text-blue-500'
      />

      <Separator className='my-8' />

      <InternshipSection
        title='Preparation Resources'
        description='Get ready for interviews and improve your skills with these tools.'
        resources={preparationResources}
        icon={Code}
        sectionColor='bg-orange-500/10'
        sectionIconColor='text-orange-500'
      />
    </div>
  );
}
