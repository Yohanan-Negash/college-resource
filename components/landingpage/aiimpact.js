import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const aiImpactContent = {
    title: "The AI Revolution in Tech Careers",
    challenges: [
        "AI is transforming job requirements faster than ever",
        "Traditional skills alone are no longer enough",
        "Competition for AI-enhanced roles is intensifying"
    ],
    advantages: [
        "Learn to leverage AI tools for job search and interviews",
        "Stay ahead with AI-focused project recommendations",
        "Access curated AI resources and training materials"
    ]
};

const AIImpact = () => {
    return (
        <div className="bg-[#2A2D3E]/80 backdrop-blur-sm p-8 rounded-xl border border-blue-500/30 mt-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {aiImpactContent.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-xl font-semibold mb-3">Challenges</h4>
                    <ul className="space-y-3 text-zinc-300">
                        {aiImpactContent.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                                <XCircle className="w-5 h-5 text-red-400 mr-2 mt-1 flex-shrink-0" />
                                <span>{challenge}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-3">Our AI Advantage</h4>
                    <ul className="space-y-3 text-zinc-300">
                        {aiImpactContent.advantages.map((advantage, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                                <span>{advantage}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AIImpact;