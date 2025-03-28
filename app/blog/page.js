'use client';
import { useState } from 'react';
import BlogContent from '../../components/landingpage/blogcontent';
import WaitlistForm from '../../components/landingpage/waitlistform';
import { Toaster } from '../../components/ui/toaster';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
    <div className='min-h-screen bg-black text-white overflow-hidden'>
      {/* Animated background */}
      <div className='fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none'>
        <motion.div
          className='absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20'
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
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
      <main className='w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative'>
        <BlogContent onJoinWaitlist={() => setIsFormOpen(true)} />
      </main>

      {/* Centered CTA */}
      <motion.div
        className='fixed bottom-6 sm:bottom-10 left-0 right-0 flex justify-center z-40 px-4'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          href='/login'
          className='group w-3/5 sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center text-white hover:text-white text-sm sm:text-base'
        >
          Get Started
          <ChevronRight className='ml-1 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform' />
        </Link>
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
