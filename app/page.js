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
        <div className="min-h-screen text-white overflow-hidden bg-black">
            {/* Navigation */}
            <div className="bg-black">
                <Navigation/>
            </div>

            {/* Hero Section */}
            <div className="bg-black py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation animation="fade">
                        <Hero onJoinWaitlist={() => setIsFormOpen(true)}/>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Hero Video Section */}
            <div className="bg-black py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation animation="fade">
                        <HeroVideo/>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Problem Statement Section */}
            <div className="bg-black py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation animation="fade">
                        <ProblemStatementDemo/>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Features section */}
            <div className="bg-zinc-900 py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation animation="fade">
                        <Features className="mb-12"/>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Feature Demo Section */}
            <div className="bg-black py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation animation="fade">
                        <FeatureDemo/>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Hero Scroll Section */}
            <div className="bg-black py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation animation="fade">
                        <HeroScroll/>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation animation="fade">
                        <FinalCTA onJoinWaitlist={() => setIsFormOpen(true)}/>
                    </ScrollAnimation>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation animation="fade">
                        <FAQ/>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-black py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <ScrollAnimation animation="fade">
                        <Footer/>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Modals */}
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