'use client';
import React, { useState, useEffect } from 'react';
import Hero from '../components/landingpage/hero';
import Features from '../components/landingpage/features';
import AnimatedHeading from '../components/landingpage/animated-heading';
import CompanyCarousel from '../components/landingpage/CompanyCarousel';
import StorySection from '../components/landingpage/storysection';
import VideoShowcase from '../components/landingpage/videoshowcase';
import Comparison from '../components/landingpage/comparison';
import FinalCTA from '../components/landingpage/finalcta';
import FAQ from '../components/landingpage/faq';
import AIImpact from '../components/landingpage/aiimpact';
import WaitlistForm from '../components/landingpage/waitlistform';
import Navigation from '../components/landingpage/navigation';
import { Toaster } from '../components/ui/toaster';

const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        const elements = document.querySelectorAll('.animate-in');
        elements.forEach((el) => {
            el.classList.add('animate-in');
        });
    }, []);

    const handleSubmit = (formData) => {
        setIsFormOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1C1F2E] to-[#2A2D3E] text-white overflow-hidden">
            {/* Background */}
            <div
                className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"/>

            <Navigation classaName="mb-8"/>
            <AnimatedHeading className="mb-2"/>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative">
                <Hero onJoinWaitlist={() => setIsFormOpen(true)}/>
                <StorySection className="mt-24 mb-8"/>
                <VideoShowcase/>
                <Comparison/>
                <AIImpact />
                <Features/>
                <CompanyCarousel/>
                <FinalCTA onJoinWaitlist={() => setIsFormOpen(true)}/>
                <FAQ/>
            </main>

            <WaitlistForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleSubmit}
            />
            <Toaster/>
        </div>
    );
};

export default Home;