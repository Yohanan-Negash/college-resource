/* eslint-disable react/no-unescaped-entities */
import { GraduationCap, Building, BookX } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <section className='mt-5 pt-23 pb-16'>
      {' '}
      {/* Increased vertical padding */}
      {/* Header Section - Keep center aligned */}
      <div className='text-center mb-16'>
        {' '}
        {/* Increased bottom margin */}
        <span className='font-ubuntu text-cyan-400 text-base font-medium mb-4 block'>
          {' '}
          {/* Increased text size and margin */}
          PROBLEM
        </span>
        <h2 className='font-ubuntu text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2'>
          Landing that first internship is hard
        </h2>
      </div>
      {/* Problems Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto px-6'>
        {' '}
        {/* Increased gaps and max-width */}
        {/* University Failure */}
        <div className='flex flex-col items-start text-left space-y-5'>
          {' '}
          {/* Added space between elements */}
          <div className='w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center'>
            {' '}
            {/* Increased icon container size */}
            <GraduationCap className='w-8 h-8 text-purple-500' />{' '}
            {/* Increased icon size */}
          </div>
          <h3 className='font-ubuntu text-white text-xl lg:text-2xl font-semibold'>
            {' '}
            {/* Increased text size */}
            Unclear Starting Point
          </h3>
          <p className='font-ubuntu text-gray-400 text-base lg:text-lg leading-relaxed'>
            {' '}
            {/* Increased text size and line height */}
            Many students don’t know where to begin—what programming language to learn first, how to build meaningful projects that showcase their skills,
            or where to find reliable resources for internships, resume writing, and interview preparation.
          </p>
        </div>
        {/* Lack of guidance */}
        <div className='flex flex-col items-start text-left space-y-5'>
          <div className='w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center'>
            <Building className='w-8 h-8 text-purple-500' />
          </div>
          <h3 className='font-ubuntu text-white text-xl lg:text-2xl font-semibold'>
            Lack of Guidance
          </h3>
          <p className='font-ubuntu text-gray-400 text-base lg:text-lg leading-relaxed'>
            Without access to experienced mentors or peers in tech, students often struggle to navigate the recruiting process,
            prepare for interviews, and build a competitive profile.
          </p>
        </div>
        {/* Hidden resources */}
        <div className='flex flex-col items-start text-left space-y-5'>
          <div className='w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center'>
            <BookX className='w-8 h-8 text-purple-500' />
          </div>
          <h3 className='font-ubuntu text-white text-xl lg:text-2xl font-semibold'>
            Hidden Career Resources
          </h3>
          <p className='font-ubuntu text-gray-400 text-base lg:text-lg leading-relaxed'>
            Many valuable opportunities coding challenges, networking events, and company sponsored programs aren’t widely advertised,
            leaving students unaware of crucial stepping stones to success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
