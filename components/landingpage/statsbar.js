import React from 'react';

const stats = [
    { number: '500+', label: 'Opportunities' },
    { number: '50+', label: 'Partner Companies' },
    { number: '1000+', label: 'Students' },
    { number: '24/7', label: 'Support' }
];

const StatsBar = ({ className }) => {
    return (
        <div className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 lg:p-10 bg-[#2A2D3E]/50 backdrop-blur-sm rounded-xl border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-500 ${className}`}>
            {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                        {stat.number}
                    </div>
                    <div className="text-sm lg:text-base text-zinc-400 mt-2 group-hover:text-zinc-300 transition-colors">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsBar;