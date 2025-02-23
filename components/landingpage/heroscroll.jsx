'use client';
import React from 'react';
import CompanyCarousel from '../../components/landingpage/CompanyCarousel';
import Image from 'next/image';

const HeroScroll = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-ubuntu text-2xl text-center text-cyan-300'>
          Never miss an Opportunity <br />
          <span className='font-ubuntu text-4xl md:text-6xl font-bold mt-4 block leading-none bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4'>
            150+ Internships
          </span>
        </h1>
        <Image
          src='https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/internship_screenshot.png'
          alt='Hero'
          width={1400}
          height={720}
          className='mx-auto rounded-2xl object-cover h-full object-left-top'
          draggable={false}
        />
      </div>
      <CompanyCarousel />
    </div>
  );
};

export default HeroScroll;
