'use client';
import React from 'react';
import { HeroVideoDialog } from '../../components/ui/herovideodialog';

const HeroVideo = ({ youtubeUrl, thumbnailUrl, className }) => {
  return (
    <div className={`relative max-w-3xl mx-auto ${className || ''}`}>
      <div className='relative w-full pt-3'>
        {/* Main video container with borders only on top and sides */}
        <div className='relative w-full overflow-hidden rounded-t-xl border-t border-l border-r border-zinc-700/50'>
          <HeroVideoDialog
            className='block w-full'
            animationStyle='from-center'
            videoSrc={youtubeUrl}
            thumbnailSrc={'/dashboard_video.gif'}
            thumbnailAlt='Hero Video'
          />

          {/* Thinner, more concentrated gradient overlay at the bottom */}
          <div
            className='absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent pointer-events-none'
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)',
              height: '60px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
