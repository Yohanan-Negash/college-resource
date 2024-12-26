import React, { useEffect, useRef } from 'react';

const showcaseContent = {
    title: "Securing Your Future",
    sections: [
        {
            title: "Never Miss an Opportunity",
            description: "Stay ahead with our smart notification system. We'll send timely reminders for events, internships, and full-time role applications—because timing is everything in the tech industry."
        },
        {
            title: "Submit Applications That Get Noticed",
            description: "Use our expert-designed templates to make sure your applications are not only submitted but seen by the right people. We'll show you how to bypass the ATS and get your resume in front of actual humans."
        }
    ]
};

const VideoShowcase = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleError = (e) => {
            console.error('Error loading video:', e);
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('error', handleError);
            return () => videoElement.removeEventListener('error', handleError);
        }
    }, []);

    return (
        <div className="mb-20">
            <div className="relative w-full overflow-hidden rounded-xl pt-[56.25%]">
                <div className="absolute inset-0 bg-slate-800 bg-opacity-90">
                    <video
                        ref={videoRef}
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                    >
                        <source src="../../marketing.mp4" type="video/mp4"/>
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <div className="max-w-3xl space-y-6">
                                <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
                                    {showcaseContent.title}
                                </h2>

                                <div className="space-y-8">
                                    {showcaseContent.sections.map((section, index) => (
                                        <div key={index}>
                                            <h3 className="mb-3 text-2xl font-semibold text-white">
                                                {section.title}
                                            </h3>
                                            <p className="text-lg text-zinc-300">
                                                {section.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoShowcase;