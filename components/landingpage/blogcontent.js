/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

const blogContent = {
  title: 'From Zero to Tech Pro: Navigating Your Early SWE Journey',
  sections: [
    {
      title: "The Struggle is Real (But We've Got Your Back)",
      content:
        'Remember when you first learned to ride a bike? That wobbly feeling, the fear of falling, but also the excitement of freedom? ' +
        "That's pretty much what starting your tech journey feels like. You're probably thinking:\n\n\"Which programming language should I learn first?" +
        '"\n\n "How do I build a project that doesn\'t scream \'newbie\'?"\n\n "Where are all these internships hiding?' +
        "\"\n\nTrust me, we've all been there. It's like trying to solve a Rubik's cube blindfolded while riding a unicycle." +
        " But here's the secret: everyone starts somewhere, and with the right guidance, you can totally rock this!",
    },
    {
      title: 'Your Tech Toolkit: More Than Just Coding',
      content:
        "Sure, coding is important, but there's so much more to becoming a tech superstar. Let's break it down:\n\n**1. " +
        "Hack Your Way to Success 🏆**\nHackathons are like the ultimate playground for tech enthusiasts. They're not just about coding; " +
        "they're about teamwork, problem-solving, and pizza (lots of pizza). Plus, they look great on your resume!\n\n**2. " +
        'Choose Your Own Adventure 🗺️**\nRemember those "Choose Your Own Adventure" books? Well, your tech journey is kinda like that. ' +
        '' +
        "Whether you're into frontend, backend, or mobile development, there's a path for you. The key is to explore and find what truly excites you.\n\n**3. " +
        'Roadmap to Success 🚀**\nHaving a roadmap is like having a GPS for your career. It helps you navigate the twists and turns of the tech world without ending up in a digital dead-end.',
    },
    {
      title: 'The Secret Sauce: Building Your Tech Profile',
      content:
        "Here's where the magic happens. To land that internship, you need to stand out. How? Glad you asked!" +
        "\n\n1. **GitHub is Your New BFF**: Showcase your projects, even the small ones. It's like Instagram for coders!\n\n2. " +
        '**Network Like a Boss**: attend meetups (virtual ones count too!). You never know who might lead you to your dream internship.\n\n3. ' +
        '**Blog About It**: Share your learning journey. It shows passion and helps others. Win-win!',
    },
    {
      title: 'The PhazeOne Promise: Your Launchpad to Success',
      content:
        "We're not just another platform; we're your tech career co-pilot. With PhazeOne, you get:" +
        '\n\n - Curated resources that actually make sense (streamline your learning!)\n\n - A community of like-minded ' +
        'tech enthusiasts (find valuable peer support!)\n\n - Insider tips on those elusive internship opportunities (maximize your internship potential!)',
    },
    {
      title: 'Want to kickstart your tech journey?',
      content:
        "While it's true every tech journey starts somewhere, you don't have to start from scratch. " +
        'PhazeOne provides a curated launchpad of resources and insights to help you take that crucial first step. \n\n The first 100 people who signed up for the beta waitlist will receive free lifetime access to the platform!',
    },
  ],
};

// Helper function to format text with bold elements
const formatTextWithBold = (text) => {
  if (!text.includes('**')) return text;

  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.substring(2, part.length - 2);
      return (
        <span key={index} className='font-bold'>
          {boldText}
        </span>
      );
    }
    return part;
  });
};

const BlogContent = ({ onJoinWaitlist }) => {
  return (
    <motion.article
      className='prose prose-lg prose-invert mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className='text-3xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight text-center pb-2'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {blogContent.title}
      </motion.h1>

      <motion.p
        className='text-lg md:text-xl text-gray-300 mb-12 leading-relaxed text-center font-light pb-2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Feeling overwhelmed by where to start your Software Engineering journey?
        You're not alone. If you're a high school senior or early college
        student trying to figure it all out, you're in the right place. Let's
        talk about taking those first steps and landing that first internship.
      </motion.p>

      {blogContent.sections.map((section, index) => (
        <motion.section
          key={index}
          className='mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * (index + 3), duration: 0.5 }}
        >
          <motion.h2 className='text-2xl md:text-3xl font-bold mb-6 text-gray-100 relative overflow-hidden group'>
            <span className='relative z-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2'>
              {section.title}
            </span>
            <motion.div
              className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 pb-2'
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.h2>
          {section.content.split('\n\n').map((paragraph, pIndex) => (
            <motion.p
              key={pIndex}
              className='text-gray-300 mb-6 leading-relaxed text-lg pb-2'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (pIndex + 1), duration: 0.3 }}
            >
              {formatTextWithBold(paragraph)}
            </motion.p>
          ))}
        </motion.section>
      ))}
    </motion.article>
  );
};

export default BlogContent;
