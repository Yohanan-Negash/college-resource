'use client';
import React from 'react';
import { HeroVideoDialog } from '../../components/ui/herovideodialog';
import { ShineBorder } from '../../components/ui/shineborder';

const HeroVideo = ({ youtubeUrl, thumbnailUrl, className }) => {
  return (
    <div className={`relative pt-16 ${className || ''}`}>
      <ShineBorder
        borderRadius={20}
        borderWidth={2}
        duration={10}
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        className='w-full h-full p-1 bg-transparent' // Minimal padding, transparent background
      >
        <div className='w-full h-full'>
          {' '}
          {/* Wrapper to maintain original dimensions */}
          <HeroVideoDialog
            className='block w-full h-full'
            animationStyle='from-center'
            videoSrc={youtubeUrl}
            thumbnailSrc={
              'https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/dashboard_video.gif'
            }
            thumbnailAlt='Hero Video'
          />
        </div>
      </ShineBorder>
    </div>
  );
};

export default HeroVideo;
