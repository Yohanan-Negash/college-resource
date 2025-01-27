import React from 'react';

const storyContent = {
  title: 'The Story Behind PhazeOne',
  paragraphs: [
    "We've seen it countless times: brilliant CS students, armed with perfect GPAs and impressive technical skills, struggling to break into their dream companies. The problem isn't their abilities—it's the disconnect between academic excellence and industry expectations.",
    "In today's competitive tech landscape, many computer science students find themselves overwhelmed by the sheer volume of applications and the elusive nature of meaningful connections. Traditional methods often lead to frustration and missed opportunities, leaving students questioning their career prospects.",
    "That's why we created PhazeOne—a platform born from real experiences and designed to bridge the gap between academic achievement and industry success.",
  ],
};

const Story = () => {
  return (
    <div className='bg-[#2A2D3E]/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700/50 mb-8'>
      <h2 className='text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
        {storyContent.title}
      </h2>
      <div className='space-y-4 text-lg text-zinc-300'>
        {storyContent.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === storyContent.paragraphs.length - 1
                ? 'font-medium text-white'
                : ''
            }
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Story;
