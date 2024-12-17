'use client';
import React from 'react';

const CompanyCarousel = () => {
    const companies = [
        { name: 'Meta' },
        { name: 'Google' },
        { name: 'Amazon' },
        { name: 'Microsoft' },
        { name: 'Apple' },
        { name: 'Tesla' },
        { name: 'Netflix' },
        { name: 'Twitter' },
        { name: 'Uber' },
        { name: 'Lyft' },
        { name: 'Airbnb' },
        { name: 'Slack' },
        { name: 'Shopify' },
    ];

    return (
        <>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-250px * ${companies.length}));
                    }
                }
            `}</style>

            <div className="mt-20 overflow-hidden">
                <div className="flex w-[calc(250px*28)] animate-[scroll_40s_linear_infinite]">
                    {/* First set */}
                    {companies.map((company) => (
                        <span key={company.name} className="w-[250px] text-4xl text-zinc-400 font-bold hover:text-zinc-200 transition-colors flex items-center justify-center">
                            {company.name}
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {companies.map((company) => (
                        <span key={`${company.name}-2`} className="w-[250px] text-4xl text-zinc-400 font-bold hover:text-zinc-200 transition-colors flex items-center justify-center">
                            {company.name}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CompanyCarousel;