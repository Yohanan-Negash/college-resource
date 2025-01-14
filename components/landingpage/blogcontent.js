/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';

const blogContent = {
  title:
    'The Hidden Path to Tech Success: Why CS Students Are Struggling and How to Beat the Odds',
  sections: [
    {
      title: 'The AI Revolution: Friend or Foe?',
      content:
        "Let's address the elephant in the room: artificial intelligence. By 2025, a staggering 90% of jobs will be disrupted by generative AI. This isn't just another tech buzzword; it's a tidal wave reshaping the entire job market. For CS students, this means the skills you're learning today might be obsolete tomorrow. The fear is real, and it's justified.\n\nBut here's the kicker: AI won't replace programmers entirely. Instead, it's transforming the nature of tech jobs. The question is, are you prepared for this shift?",
    },
    {
      title: 'The Ivy League Advantage: A Rigged Game?',
      content:
        "If you're not attending a top-tier university, you might feel like you're already behind. And you're not wrong. The harsh reality is that Ivy League graduates often have a significant edge in the job market. They benefit from extensive alumni networks, on-campus recruiting events, and name recognition that opens doors effortlessly.\n\nBut don't let this discourage you. Remember, success stories often come from unexpected places. The key is knowing how to level the playing field.",
    },
    {
      title: "The University Failure: What They're Not Teaching You",
      content:
        "Let's be brutally honest: most universities are failing their CS students. They're stuck teaching outdated curricula that don't align with real-world industry needs. While you're cramming for exams on theoretical concepts, employers are looking for practical skills and project experience.\n\nThe result? Thousands of CS graduates are entering the job market woefully unprepared. It's a recipe for disappointment and missed opportunities.",
    },
    {
      title: "The Regret Factor: Don't Be That Graduate",
      content:
        "Picture this: It's 2026, and you've just graduated. You're sending out hundreds of applications, but the silence is deafening. No callbacks, no interviews. That's when it hits you – all those opportunities you missed in college because you didn't know they existed.\n\nThis isn't a hypothetical scenario. It's the harsh reality for countless CS graduates who didn't take the right steps during their university years. The regret of not building the right skills, not attending the right events, not making the right connections – it's a heavy burden to bear.",
    },
    {
      title: "The Formula for Success: What You're Missing",
      content:
        "Here's the truth: it's not just about your GPA or how well you can solve LeetCode problems. Those things matter, but they're just the tip of the iceberg. What really sets successful candidates apart is their ability to navigate the hidden landscape of tech recruitment.\n\nDid you know that roughly 20% of an average employee's time is spent on repetitive administrative tasks? AI is taking over these roles, which means you need to focus on high-value skills that machines can't replicate.",
    },
    {
      title: 'The Light at the End of the Tunnel',
      content:
        "But don't despair – there's hope. We've cracked the code, and we're here to share it with you. Our comprehensive app is designed to guide you through the maze of tech recruitment, from your freshman year all the way to landing that six-figure job.\n\nWe'll show you how to:\n- Build a killer LinkedIn profile that attracts recruiters\n- Access exclusive pre-internship events at top companies\n- Master the skills that AI can't replace\n- Create projects that make your portfolio stand out\n- Network effectively with industry insiders\n\nDon't let the fear of missing out paralyze you. Don't become another statistic in the sea of unemployed CS graduates. Take control of your future now.",
    },
    {
      title: 'The solution: Never miss an opportunity',
      content:
        "Remember, in the world of tech, information is power. And we're here to empower you.",
    },
  ],
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
        In the ever-evolving landscape of technology, computer science students
        face an increasingly daunting challenge: landing that coveted internship
        or dream job. As we step into 2025, the tech industry is undergoing
        seismic shifts, leaving many aspiring developers feeling lost and
        overwhelmed. But fear not – there's a way to navigate this treacherous
        terrain, and I'm here to show you how.
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
              {paragraph}
            </motion.p>
          ))}
        </motion.section>
      ))}
    </motion.article>
  );
};

export default BlogContent;
