/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  ChevronRight,
  Code,
  Brain,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';

const featureCards = [
  {
    icon: Code,
    title: 'Hackathons',
    description:
      'Get access to the latest hackathons through carefully curated links to help you connect with peers and showcase your skills.',
  },
  {
    icon: Brain,
    title: 'Paths',
    description:
      'Choose from curated paths that help you navigate your unique tech journey.',
  },
  {
    icon: Briefcase,
    title: 'Internships',
    description:
      'Discover opportunities at top companies and kickstart your career journey, with links to internship prep resources to help you succeed.',
  },
  {
    icon: GraduationCap,
    title: 'Roadmaps',
    description:
      'Follow structured paths to guide your learning and career progression in tech.',
  },
];

const Hero = ({ onJoinWaitlist }) => {
  return (
    <div className='grid lg:grid-cols-2 gap-16 items-center'>
      <div className='space-y-10'>
        <h1 className='font-ubuntu text-5xl lg:text-7xl font-bold leading-tight'>
          Kickstart
          <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block'>
            Your Tech Journey
          </span>
        </h1>

        <p className='font-ubuntu text-zinc-300 text-lg lg:text-xl leading-relaxed'>
          Democratizing access to the best curated resources for CS students.
          From hackathons to internships, we provide the perfect starting point
          for your tech journey.
        </p>

        <div className='flex items-center space-x-4'>
          <button
            onClick={onJoinWaitlist}
            className='font-ubuntu group px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center'
          >
            Join Waitlist
            <ChevronRight className='ml-2 group-hover:translate-x-1 transition-transform' />
          </button>
          <Link
            href='/blog'
            className='font-ubuntu group px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-[#2A2D3E] to-zinc-800 border border-zinc-700/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center text-zinc-300 hover:text-white'
          >
            Learn More
            <ChevronRight className='ml-2 group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </div>

      {/* Stats/Features Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8'>
        <div className='space-y-6 lg:space-y-8 sm:mt-8'>
          {featureCards.slice(0, 2).map((feature, index) => (
            <div
              key={index}
              className='group bg-[#2A2D3E]/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer'
            >
              <feature.icon
                className='text-purple-400 mb-4 group-hover:scale-110 transition-transform'
                size={28}
              />
              <h3 className='font-ubuntu font-semibold text-xl mb-3 group-hover:text-purple-400 transition-colors'>
                {feature.title}
              </h3>
              <p className='font-ubuntu text-zinc-400 group-hover:text-zinc-300 transition-colors'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className='space-y-6 lg:space-y-8'>
          {featureCards.slice(2, 4).map((feature, index) => (
            <div
              key={index}
              className='group bg-[#2A2D3E]/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer'
            >
              <feature.icon
                className='text-purple-400 mb-4 group-hover:scale-110 transition-transform'
                size={28}
              />
              <h3 className='font-ubuntu font-semibold text-xl mb-3 group-hover:text-purple-400 transition-colors'>
                {feature.title}
              </h3>
              <p className='font-ubuntu text-zinc-400 group-hover:text-zinc-300 transition-colors'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
