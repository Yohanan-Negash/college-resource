/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Hero = ({ onJoinWaitlist }) => {
  return (
    <div className='items-center justify-center text-center py-2'>
      <div className='space-y-6 lg:space-y-8 max-w-3xl mx-auto px-4'>
        <h1 className='font-ubuntu text-5xl lg:text-6xl font-bold leading-tight'>
          Kickstart
          <span className='font-ubuntu bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block pb-2'>
            Your Tech Journey
          </span>
        </h1>

        <p className='font-ubuntu text-zinc-400 text-lg lg:text-xl leading-relaxed'>
          Democratizing access to the best curated resources for Software
          Engineering students. From hackathons to internships, we provide the
          perfect starting point for your tech journey.
        </p>

        <div className='flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2'>
          <Link
            href='/login'
            className='font-ubuntu group px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center text-sm'
          >
            Sign Up/Login
            <ChevronRight className='ml-1 w-6 h-6 group-hover:translate-x-1 transition-transform' />
          </Link>
          <Link
            href='/blog'
            className='font-ubuntu group px-8 py-4 rounded-lg font-medium bg-zinc-900 border border-zinc-700/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center text-zinc-400 hover:text-white text-sm'
          >
            Learn More
            <ChevronRight className='ml-1 w-6 h-6 group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
