import React from 'react';
import { Code, Brain, Briefcase, GraduationCap } from 'lucide-react';
import BorderBeam from '../ui/borderbeam';

const features = [
  {
    title: 'Hackathons',
    description:
      'Get access to the latest hackathons through carefully curated links to help you connect with peers and showcase your skills.',
    icon: <Code className='w-8 h-8 text-purple-400' />,
  },
  {
    title: 'Paths',
    description:
      'Choose from curated paths that help you navigate your unique tech journey.',
    icon: <Brain className='w-8 h-8 text-purple-400' />,
  },
  {
    title: 'Internships',
    description:
      'Discover opportunities at top companies and kickstart your career journey, with links to internship prep resources to help you succeed.',
    icon: <Briefcase className='w-8 h-8 text-purple-400' />,
  },
  {
    title: 'Roadmaps',
    description:
      'Follow structured paths to guide your learning and career progression in tech.',
    icon: <GraduationCap className='w-8 h-8 text-purple-400' />,
  },
];

const Features = ({ className }) => {
  return (
    <div className={`mt-20 ${className || ''} relative`}>
      <span className='font-ubuntu text-cyan-400 text-center font-medium mb-4 block'>
        SOLUTION
      </span>
      <h2 className='font-ubuntu text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
        Your Complete Success Toolkit
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative bg-[#2A2D3E]/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all ${
              index === features.length - 1 && features.length % 3 === 1
                ? 'lg:col-start-2'
                : ''
            }`}
          >
            <BorderBeam
              size={1300}
              duration={20}
              delay={0}
              colorFrom='#FFD700'
              colorTo='#FFA500'
              borderWidth={1.5}
            />
            <div className='mb-4'>{feature.icon}</div>
            <h3 className='font-ubuntu text-xl font-semibold mb-3 text-white'>
              {feature.title}
            </h3>
            <p className='font-ubuntu text-zinc-300'>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className='absolute top-0 right-0 w-1/3 h-full bg-purple-200/10 rounded-full blur-3xl hidden lg:block'></div>
    </div>
  );
};

export default Features;
