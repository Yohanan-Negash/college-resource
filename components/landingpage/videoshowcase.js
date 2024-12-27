import React from 'react';

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

const TextShowcase = () => {
    return (
        <div className="mb-20 px-4 md:px-8">
            <div className="relative w-full rounded-xl bg-gradient-to-t from-slate-800 via-slate-900 to-slate-800 p-6 sm:p-8 lg:p-12">
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <h2 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold text-transparent">
                        {showcaseContent.title}
                    </h2>

                    <div className="space-y-8">
                        {showcaseContent.sections.map((section, index) => (
                            <div key={index} className="text-left">
                                <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-white">
                                    {section.title}
                                </h3>
                                <p className="text-base sm:text-lg text-zinc-300">
                                    {section.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextShowcase;
