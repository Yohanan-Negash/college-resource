import React from 'react';
import FeatureSection from '../ui/feature-section';

const features = [
  {
    step: 'Step 1',
    title: 'Hackathons',
    content:
      'Get access to the latest hackathons through carefully curated links to help you connect with peers and showcase your skills.',
    image:
      'https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/Roadmaplight.png?t=2025-01-17T02%3A24%3A38.386Z',
  },
  {
    step: 'Step 2',
    title: 'Paths',
    content:
      'Choose from curated paths that help you navigate your unique tech journey.',
    image:
      'https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/Roadmaplight.png?t=2025-01-17T02%3A24%3A38.386Z',
  },
  {
    step: 'Step 4',
    title: 'Roadmaps',
    content:
      'Follow structured paths to guide your learning and career progression in tech.',
    image:
      'https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/Roadmaplight.png?t=2025-01-17T02%3A24%3A38.386Z',
  },
];

const FeatureDemo = () => {
  return (
    <div className=''>
      <FeatureSection
        features={features}
        subtitle='SOLUTION'
        title='A Complete Toolkit'
        titleColor='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
        autoPlayInterval={4000}
        imageHeight='h-[500px]'
      />
    </div>
  );
};

export default FeatureDemo;
