/* eslint-disable react/no-unescaped-entities */
import { GraduationCap, Building, BookX } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <section className='pt-20 pb-12'>
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
        <h2 className='font-ubuntu text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Landing that first internship is hard
        </h2>
      </div>
      {/* Problems Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-6'>
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
            The University Failure
          </h3>
          <p className='font-ubuntu text-gray-400 text-base lg:text-lg leading-relaxed'>
            {' '}
            {/* Increased text size and line height */}
            Most universities are failing their CS students with outdated
            curricula that don't align with real-world industry needs.
          </p>
        </div>
        {/* Ivy League Advantage */}
        <div className='flex flex-col items-start text-left space-y-5'>
          <div className='w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center'>
            <Building className='w-8 h-8 text-purple-500' />
          </div>
          <h3 className='font-ubuntu text-white text-xl lg:text-2xl font-semibold'>
            Ivy League Advantage
          </h3>
          <p className='font-ubuntu text-gray-400 text-base lg:text-lg leading-relaxed'>
            Non-top-tier university students lack access to extensive alumni
            networks and recruiting events that open doors effortlessly.
          </p>
        </div>
        {/* Missing Opportunities */}
        <div className='flex flex-col items-start text-left space-y-5'>
          <div className='w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center'>
            <BookX className='w-8 h-8 text-purple-500' />
          </div>
          <h3 className='font-ubuntu text-white text-xl lg:text-2xl font-semibold'>
            Missing Opportunities
          </h3>
          <p className='font-ubuntu text-gray-400 text-base lg:text-lg leading-relaxed'>
            Students miss crucial career-advancing opportunities because they
            don't know they exist or how to access them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
