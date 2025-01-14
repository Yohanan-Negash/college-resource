'use client';
import React, { useState, useEffect } from 'react';
import BlogContent from '../../components/landingpage/blogcontent';
import WaitlistForm from '../../components/landingpage/waitlistform';
import { Toaster } from '../../components/ui/toaster';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const BlogPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleSubmit = (formData) => {
    setIsFormOpen(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#1C1F2E] to-[#2A2D3E] text-white overflow-hidden'>
      {/* Animated background */}
      <div className='fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none'>
        <motion.div
          className='absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20'
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50'
        style={{ scaleX }}
      />

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative'>
        <BlogContent onJoinWaitlist={() => setIsFormOpen(true)} />
      </main>

      {/* Centered CTA */}
      <motion.div
        className='fixed bottom-10 left-0 right-0 flex justify-center z-40'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button
          onClick={() => setIsFormOpen(true)}
          className='group px-14 font-bold py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center'
        >
          Join Waitlist
          <ChevronRight className='ml-2 group-hover:translate-x-1 transition-transform' />
        </button>
      </motion.div>

      <WaitlistForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmit}
      />
      <Toaster />
    </div>
  );
};

export default BlogPage;
