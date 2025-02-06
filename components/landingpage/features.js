import React from 'react';
import {
    Linkedin,
    Calendar,
    Code,
    Users,
    GraduationCap,
    FileText
} from 'lucide-react';
import BorderBeam from '../ui/borderbeam';

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
            <span className="font-ubuntu text-cyan-400 text-center font-medium mb-4 block">
                SOLUTION
            </span>
            <h2 className="font-ubuntu text-5xl font-extrabold mb-10 text-center text-white">
                Your Complete Success Toolkit
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="relative bg-[#2A2D3E]/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all"
                    >
                        <BorderBeam
                            size={1300}
                            duration={20}
                            delay={0}
                            colorFrom="#FFD700"
                            colorTo="#FFA500"
                            borderWidth={1.5}
                        />
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="font-ubuntu text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                        <p className="font-ubuntu text-zinc-300">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;