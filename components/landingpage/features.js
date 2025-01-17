import React from 'react';
import {
    Linkedin,
    Calendar,
    Code,
    Users,
    GraduationCap,
    FileText
} from 'lucide-react';

const features = [
    {
        title: "LinkedIn Made Easy",
        description: "We'll guide you step by step to create a standout LinkedIn profile and set meaningful connections.",
        icon: <Linkedin className="w-8 h-8 text-purple-400" />
    },
    {
        title: "Pre-Internship Events",
        description: "Gain insider access to exclusive first- and second-year programs hosted by Fortune 500 companies.",
        icon: <Calendar className="w-8 h-8 text-purple-400" />
    },
    {
        title: "Hackathons & Competitions",
        description: "Build, collaborate, and showcase your technical skills while growing your professional network.",
        icon: <Code className="w-8 h-8 text-purple-400" />
    },
    {
        title: "Recruitment Summits",
        description: "Attend gatherings designed to connect you with hiring managers and industry insiders.",
        icon: <Users className="w-8 h-8 text-purple-400" />
    },
    {
        title: "Skill-Building Bootcamps",
        description: "Level up with free or company-sponsored programs that sharpen your skills and prep you for success.",
        icon: <GraduationCap className="w-8 h-8 text-purple-400" />
    },
    {
        title: "Application & Networking Tools",
        description: "Get resume templates, LinkedIn optimization tips, and direct insights on building a professional presence.",
        icon: <FileText className="w-8 h-8 text-purple-400" />
    }
];

const Features = ({ className }) => {
    return (
        <div className={`mt-20 ${className || ''}`}>
            <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-yellow-200 to-pink-400 bg-clip-text text-transparent">Your Complete Success Toolkit</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-[#2A2D3E]/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all">
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-zinc-300">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;