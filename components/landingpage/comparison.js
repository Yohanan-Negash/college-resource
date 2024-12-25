import React from 'react';
import Image from 'next/image';
import { XCircle, CheckCircle } from 'lucide-react';

const comparisonData = {
    warning: "🚨 Warning: 73% of CS graduates struggle to land their dream tech job. Don't be one of them.",
    sections: {
        struggling: {
            title: "Struggling Students",
            points: [
                "Applying everywhere with no strategy",
                "Missing crucial networking opportunities",
                "Focusing only on GPA and leetcode"
            ]
        },
        successful: {
            title: "Successful Students",
            points: [
                "Strategic approach to applications",
                "Strong industry connections",
                "Well-rounded portfolio beyond academics"
            ]
        }
    }
};

const Comparison = () => {
    return (
        <>
            {/* Urgency Banner */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-4 rounded-xl mb-12 border border-red-500/30 backdrop-blur-sm">
                <p className="text-center text-lg font-medium">{comparisonData.warning}</p>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Struggling Students */}
                <div className="bg-red-500/10 backdrop-blur-sm p-6 rounded-xl border border-red-500/30">
                    <div className="flex items-center mb-4">
                        <XCircle className="w-8 h-8 text-red-400 mr-3" />
                        <h3 className="text-xl font-bold">{comparisonData.sections.struggling.title}</h3>
                    </div>
                    <div className="relative mb-6">
                        <Image
                            src="/api/placeholder/400/320"
                            alt="Struggling student"
                            width={400}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                    <ul className="space-y-3 text-zinc-300">
                        {comparisonData.sections.struggling.points.map((point, index) => (
                            <li key={index} className="flex items-center">
                                <XCircle className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Successful Students */}
                <div className="bg-green-500/10 backdrop-blur-sm p-6 rounded-xl border border-green-500/30">
                    <div className="flex items-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                        <h3 className="text-xl font-bold">{comparisonData.sections.successful.title}</h3>
                    </div>
                    <div className="relative mb-6">
                        <Image
                            src="/api/placeholder/400/320"
                            alt="Successful student"
                            width={400}
                            height={200}
                            className="rounded-lg"
                        />
                    </div>
                    <ul className="space-y-3 text-zinc-300">
                        {comparisonData.sections.successful.points.map((point, index) => (
                            <li key={index} className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Comparison;