'use client';
import React from 'react';
import CompanyCarousel from '../../components/landingpage/CompanyCarousel';
import Image from 'next/image';
import { ShineBorder } from '../../components/ui/shineborder';

const HeroScroll = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <h1 className='font-ubuntu text-2xl text-center text-cyan-300 pb-2'>
          Pathway & Leadership programs <br />
        <span className='font-ubuntu text-4xl md:text-6xl font-bold mt-4 block leading-none bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2 mb-2'>
          150+ Opportunities
        </span>
      </h1>
      <ShineBorder
        borderRadius={20}
        borderWidth={2}
        duration={10}
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        className='w-full h-full p-1 bg-transparent'
      >
        <div className='flex flex-col items-center justify-center'>
          <Image
            src='https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/internship_screenshot.png'
            alt='Hero'
            width={1400}
            height={720}
            className='mx-auto rounded-2xl object-cover h-full object-left-top'
            draggable={false}
          />
        </div>
      </ShineBorder>
      <CompanyCarousel />
    </div>
  );
};

export default HeroScroll;
