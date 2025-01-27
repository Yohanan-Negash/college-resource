'use client';
import React from 'react';
import Link from 'next/link';

const Navigation = ({ className }) => {
  return (
    <nav className={`p-6 lg:p-8 relative ${className}`}>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <Link href='/'>
          <div className='font-ubuntu text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer'>
            PhazeOne
          </div>
        </Link>
        <div className='flex items-center space-x-2 bg-[#2A2D3E]/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm lg:text-base border border-purple-500/20 hover:border-purple-500/40 transition-colors'>
          <div className='h-2 w-2 bg-green-400 rounded-full animate-pulse'></div>
          <span className='font-ubuntu text-zinc-300'>Coming Soon</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
