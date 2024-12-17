"use client"

import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Brain, Briefcase, GraduationCap } from 'lucide-react';
import CompanyCarousel from '../components/landingpage/CompanyCarousel';
import WaitlistForm from '../components/landingpage/waitlistform';
import { Toaster } from "../components/ui/toaster"

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll('.animate-in');
    elements.forEach(el => {
      el.classList.add('animate-in');
    });
  }, []);

  const handleSubmit = (formData) => {
    // Here you'll handle the form submission
    console.log('Form submitted:', formData);
    setIsFormOpen(false);
  };

  return (
      <html lang="en">
      <body>
      <div className="min-h-screen bg-gradient-to-b from-[#1C1F2E] to-[#2A2D3E] text-white overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"/>

        {/* Navigation */}
        <nav className="p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
              CollegeResource
            </div>
            <div className="flex items-center space-x-2 bg-[#2A2D3E]/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm lg:text-base border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-zinc-300">Coming Soon</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Path to
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                    Tech Success
                  </span>
              </h1>

              <p className="text-zinc-300 text-lg lg:text-xl leading-relaxed">
                Democratizing access to career-advancing opportunities for all tech students. From hackathons to internships, we&apos;re your one-stop platform for landing that dream tech role.
              </p>

              {/* Updated Waitlist Button */}
              <div className="flex items-center space-x-4">
                <button
                    onClick={() => setIsFormOpen(true)}
                    className="group px-8 py-4 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 flex items-center"
                >
                  Join Waitlist
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Stats/Features Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6 lg:space-y-8 sm:mt-8">
                <div className="group bg-[#2A2D3E]/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer">
                  <Code className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-purple-400 transition-colors">Hackathons</h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Connect with peers and showcase your skills through exciting challenges</p>
                </div>

                <div className="group bg-[#2A2D3E]/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer">
                  <Brain className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-purple-400 transition-colors">Skills</h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Access curated learning resources and development opportunities</p>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-8">
                <div className="group bg-[#2A2D3E]/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer">
                  <Briefcase className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-purple-400 transition-colors">Internships</h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Find opportunities at top companies and start your career journey</p>
                </div>

                <div className="group bg-[#2A2D3E]/50 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer">
                  <GraduationCap className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-purple-400 transition-colors">Career Growth</h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">Build your path to success with mentorship and guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 lg:p-10 bg-[#2A2D3E]/50 backdrop-blur-sm rounded-xl border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-500">
            {[
              { number: '500+', label: 'Opportunities' },
              { number: '50+', label: 'Partner Companies' },
              { number: '1000+', label: 'Students' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-zinc-400 mt-2 group-hover:text-zinc-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
            ))}
          </div>
          <CompanyCarousel />
        </main>

        {/* Waitlist Form */}
        <WaitlistForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            onSubmit={handleSubmit}
        />
      </div>
      <Toaster />
      </body>
      </html>
  );
};

export default Home;

