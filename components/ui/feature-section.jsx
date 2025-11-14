'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import BorderBeam from './borderbeam';

const FeatureSection = ({
  features,
  className,
  title,
  subtitle, // Added subtitle to props
  autoPlayInterval = 3000,
  imageHeight = 'h-[400px]',
  titleColor,
}) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn('p-8 md:p-12', className)}>
      <div className='max-w-7xl mx-auto w-full'>
        {/* Center container for title and subtitle only */}
        <div className='text-center mb-12'>
          <span className='font-ubuntu text-cyan-400 text-base font-medium mb-4 block'>
            {subtitle}
          </span>
          <h2
            className={`font-ubuntu text-5xl font-extrabold pb-2 mb-10 text-center ${titleColor}`}
          >
            {title}
          </h2>
        </div>

        <div className='flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10'>
          <div className='order-2 md:order-1 space-y-6'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  'relative bg-[#2A2D3E]/50 backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 cursor-pointer',
                  index === currentFeature
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/20 scale-[1.02]'
                    : 'border-zinc-700/50 hover:border-purple-500/30'
                )}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
                onClick={() => setCurrentFeature(index)}
              >
                {index === currentFeature && (
                  <BorderBeam
                    size={200}
                    duration={10}
                    delay={0}
                    colorFrom='#FFD700'
                    colorTo='#FFA500'
                    borderWidth={1.5}
                  />
                )}
                <div className='flex items-start gap-4'>
                  <motion.div
                    className={cn(
                      'w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-all',
                      index === currentFeature
                        ? 'bg-purple-500/20 border-purple-500 text-purple-400 scale-110'
                        : 'bg-zinc-800/50 border-zinc-700 text-zinc-500'
                    )}
                  >
                    {index <= currentFeature ? (
                      <span className='font-ubuntu text-lg font-bold'>✓</span>
                    ) : (
                      <span className='font-ubuntu text-lg font-semibold'>
                        {index + 1}
                      </span>
                    )}
                  </motion.div>

                  <div className='flex-1 space-y-2'>
                    <h3
                      className={cn(
                        'font-ubuntu text-xl md:text-2xl font-semibold transition-colors',
                        index === currentFeature ? 'text-white' : 'text-zinc-400'
                      )}
                    >
                      {feature.title || feature.step}
                    </h3>
                    <p
                      className={cn(
                        'font-ubuntu text-sm md:text-base leading-relaxed transition-colors',
                        index === currentFeature
                          ? 'text-zinc-300'
                          : 'text-zinc-500'
                      )}
                    >
                      {feature.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              'order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-xl border transition-all duration-300 bg-[#2A2D3E]/30',
              'border-purple-500/50 shadow-lg shadow-purple-500/20'
            )}
          >
            <BorderBeam
              size={200}
              duration={10}
              delay={0}
              colorFrom='#FFD700'
              colorTo='#FFA500'
              borderWidth={1.5}
            />
            <AnimatePresence mode='wait'>
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className='absolute inset-0 rounded-lg overflow-hidden'
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className='w-full h-full object-cover transition-transform transform'
                        width={1000}
                        height={500}
                      />
                      <div className='absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent' />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
