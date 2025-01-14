'use client';
import React, { useState } from 'react';
import BlogContent from '../../components/landingpage/blogcontent';
import WaitlistForm from '../../components/landingpage/waitlistform';
import { Toaster } from '../../components/ui/toaster';

const BlogPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleSubmit = (formData) => {
        setIsFormOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1C1F2E] to-[#2A2D3E] text-white overflow-hidden">
            {/* Background */}
            <div
                className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"
            />
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative">
                <BlogContent onJoinWaitlist={() => setIsFormOpen(true)} />
            </main>

            <WaitlistForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleSubmit}
            />
            <Toaster />
        </div>
    );
};

export default BlogPage;