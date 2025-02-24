import React from 'react';
import FeatureSection from '../ui/feature-section';

const features = [
  {
    step: 'Step 1',
    title: 'Learn the Basics',
    content: 'Start your Web3 journey by learning the basics of blockchain.',
    image:
      'https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/Roadmaplight.png?t=2025-01-17T02%3A24%3A38.386Z',
  },
  {
    step: 'Step 2',
    title: 'Deep Dive',
    content:
      'Dive deep into blockchain fundamentals and smart contract development.',
    image:
      'https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/Roadmaplight.png?t=2025-01-17T02%3A24%3A38.386Z',
  },
  {
    step: 'Step 3',
    title: 'Build Projects',
    content:
      'Graduate with hands-on Web3 experience through building decentralized applications.',
    image:
      'https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/Roadmaplight.png?t=2025-01-17T02%3A24%3A38.386Z',
  },
];

const FeatureDemo = () => {
  return (
    <div className=''>
      <FeatureSection
        features={features}
        subtitle='HOW IT WORKS'
        title='Get Started in 3 Simple Steps'
        titleColor='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
        autoPlayInterval={4000}
        imageHeight='h-[500px]'
      />
    </div>
  );
};

export default FeatureDemo;
