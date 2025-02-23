/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
    </div>
  );
};

export default Hero;
