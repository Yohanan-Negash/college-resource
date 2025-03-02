/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

const blogContent = {
  title:
    'PhazeOne: Guiding Freshmen and Sophomores Through the Foundations of Tech Careers',
  sections: [
    {
      title: 'Introduction',
      content:
        'Embarking on a Sofware Engineering (SWE) journey in your freshman or sophomore year is both exciting and filled with questions. ' +
        'At PhazeOne, we recognize the unique challenges early-stage students face and are dedicated to providing tailored resources to set you on the path to success.',
    },
    {
      title: 'Understanding the Early Challenges',
      // Updated content for the "Understanding the Early Challenges" section
      content:
        "As a first or second-year SWE student, you're likely facing several common challenges that make securing that first internship particularly difficult:" +
        '\n\n**Navigating the Starting Line:** You may feel overwhelmed about where to begin. Choosing the right programming language to learn first, ' +
        'figuring out how to build meaningful projects that showcase your skills, and finding reliable resources for internships and resume preparation are often unclear.' +
        '\n\n**Limited Access to Opportunities:** Without established professional networks, you probably find it challenging to discover industry events, coding competitions, ' +
        "or mentorship programs. These connections are crucial for enhancing your profile and opening doors to opportunities that aren't visible through standard job boards.\n\n**Hidden Career Resources:** " +
        "Many valuable opportunities remain hidden from view. Company-sponsored programs, specialized networking events, and early-career initiatives often aren't widely advertised, leaving you unaware of these crucial stepping stones " +
        'that could accelerate your path to success.',
    },
    {
      title: 'PhazeOne: Your Foundational Toolkit',
      content:
        'To support you, PhazeOne offers:\n\n**Curated Learning Paths:** Personalized recommendations on programming languages and project ideas aligned with current industry trends, ' +
        'helping you build a strong foundation.\n\n**Access to Exclusive Opportunities:** Information on internships, workshops, and events specifically designed for underclassmen to gain practical ' +
        'experience.\n\n**Comprehensive Career Resources:** Guidance on crafting compelling resumes, preparing for technical interviews, and building a professional online presence from the outset.',
    },
    {
      title: 'Empowering Your Early Success',
      content:
        "By leveraging PhazeOne's resources, you can:\n\n**Establish a Strong Foundation:** Gain clarity on where to begin and how to progress effectively in your SWE career.\n\n**Expand Your Network:" +
        '** Connect with peers, mentors, and industry professionals who can provide valuable insights and opportunities.\n\n**Stay Informed:** Keep abreast of emerging trends and opportunities that align with your career aspirations.' +
        '\n\nAt PhazeOne, we believe that with the right support and resources, every SWE student can achieve their professional goals. Let us be your partner in this journey toward securing that essential first internship and beyond.',
    },
  ],
};

// Helper function to format text with bold elements
const formatTextWithBold = (text) => {
  if (!text.includes('**')) return text;

  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Extract the text between ** and **
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
      className={`prose prose-lg prose-invert mx-auto`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className='text-3xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight text-center'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {blogContent.title}
      </motion.h1>

      <motion.p
        className='text-lg md:text-xl text-gray-300 mb-12 leading-relaxed text-center font-light'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        In the ever-evolving landscape of technology, software engineering
        students face an increasingly daunting challenge: landing that coveted
        internship or dream job. As we step into 2025, the tech industry is
        undergoing seismic shifts, leaving many aspiring developers feeling lost
        and overwhelmed. But fear not – there's a way to navigate this
        treacherous terrain, and I'm here to show you how.
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
            <span className='relative z-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              {section.title}
            </span>
            <motion.div
              className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500'
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.h2>
          {section.content.split('\n\n').map((paragraph, pIndex) => (
            <motion.p
              key={pIndex}
              className='text-gray-300 mb-6 leading-relaxed text-lg'
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
