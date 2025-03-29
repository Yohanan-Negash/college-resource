import React from 'react';
import { ChevronRight } from 'lucide-react';
import BorderBeam from '../ui/borderbeam';
import Link from 'next/link';

const ctaContent = {
  title: 'Time-Sensitive Opportunity',
  description:
    "Be one of the first 1000 students to gain early access to our revolutionary platform. As an early user, you'll receive:",
  benefits: [
    {
      title: 'Lifetime Free Access',
      description: 'Get permanent access to new features at no cost',
    },
    {
      title: 'Priority Support',
      description:
        'We have a built in support feature for you to submit bug reports and app improvements.',
    },
    {
      title: 'Early Feature Access',
      description: 'Be the first to try new tools and features',
    },
  ],
  buttonText: 'Get Started',
  // footnote: 'Only 100 beta spots available - Join now to secure your place',
};

const FinalCTA = ({ onJoinWaitlist }) => {
  return (
    <div className='mt-20 mb-20'>
      <div className='text-center'>
        <h2 className='font-ubuntu text-4xl font-bold pb-2 mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
          {ctaContent.title}
        </h2>
        <p className='font-ubuntu text-zinc-300 mb-8 max-w-3xl mx-auto'>
          {ctaContent.description}
        </p>
        <div className='grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10'>
          {ctaContent.benefits.map((benefit, index) => (
            <div
              key={index}
              className='relative bg-[#2A2D3E]/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50'
            >
              <BorderBeam
                size={200}
                duration={10}
                delay={0}
                colorFrom='#FFD700' // Bright gold
                colorTo='#FFA500' // Orange
                borderWidth={1.5}
              />
              <h3 className='font-ubuntu font-semibold mb-2 text-white'>
                {benefit.title}
              </h3>
              <p className='font-ubuntu text-zinc-300 text-sm'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <Link
          href='/login'
          className='font-ubuntu group px-10 py-5 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto max-w-72 '
        >
          {ctaContent.buttonText}
          <ChevronRight className='ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform' />
        </Link>
        <p className='font-ubuntu text-sm text-zinc-400 mt-4'>
          {ctaContent.footnote}
        </p>
      </div>
    </div>
  );
};

export default FinalCTA;
