'use client';
import React, { useState } from 'react';
import Hero from '../components/landingpage/hero';
import Features from '../components/landingpage/features';
import FinalCTA from '../components/landingpage/finalcta';
import FAQ from '../components/landingpage/faq';
import WaitlistForm from '../components/landingpage/waitlistform';
import Navigation from '../components/landingpage/navigation';
import Footer from '../components/landingpage/footer';
import HeroScroll from '../components/landingpage/heroscroll';
import HeroVideo from '../components/landingpage/herovideo';
import FeatureDemo from "../components/landingpage/feature-demo";
import ProblemStatementDemo from "../components/landingpage/problem-demo";
import { Toaster } from '../components/ui/toaster';
import ScrollAnimation from '../components/ui/scrollanimation';

const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleSubmit = (formData) => {
        setIsFormOpen(false);
    };

    return (
        <div className="min-h-screen text-white overflow-hidden">
            {/* Black background section with navigation and initial content */}
            <div className="bg-black">
                <Navigation/>

                {/* Initial Content */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative">
                    <ScrollAnimation animation="fade">
                        <Hero onJoinWaitlist={() => setIsFormOpen(true)}/>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade">
                        <HeroVideo/>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade">
                        <ProblemStatementDemo/>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade">
                        <Features className="mb-12"/>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade">
                        <FeatureDemo/>
                    </ScrollAnimation>
                </div>
            </div>
            {/* Black background section */}
            <div className="bg-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative">
                    <ScrollAnimation animation="fade">
                        <HeroScroll/>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade">
                        <FinalCTA onJoinWaitlist={() => setIsFormOpen(true)}/>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade">
                        <FAQ/>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade">
                        <Footer/>
                    </ScrollAnimation>
                </div>
            </div>

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