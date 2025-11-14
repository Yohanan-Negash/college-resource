'use client';
import React from 'react';
import {Amazon, Google, Microsoft, GoldmanSachs, Oracle,
    WellsFargo, Citi, CapitalOne, AmericanExpress, Accenture, UsBank} from '../../components/ui/logo';

const CompanyCarousel = () => {
    const companies = [
        { name: 'Oracle', Logo: Oracle },
        { name: 'Amazon', Logo: Amazon },
        {name: 'WellsFargo', Logo: WellsFargo},
        { name: 'UsBank', Logo: UsBank },
        { name: 'GoldmanSachs', Logo: GoldmanSachs},
        { name: 'Citi', Logo: Citi },
        { name: 'Google', Logo: Google },
        {name: 'CapitalOne', Logo: CapitalOne},
        {name: 'Accenture', Logo: Accenture},
        {name: 'Microsoft', Logo: Microsoft},
        {name: 'AmericanExpress', Logo: AmericanExpress},
    ];

    return (
        <>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-150px * ${companies.length}));
                    }
                }
            `}</style>

            <div className="mt-20 overflow-hidden">
                <p className="text-center text-zinc-400 text-sm md:text-base mb-6 font-ubuntu max-w-2xl mx-auto px-4">
                    Resources and internships from these companies that we store and keep fresh
                </p>
                <div className="flex w-[calc(150px*22)] animate-[scroll_40s_linear_infinite]">
                    {/* First set */}
                    {companies.map((company) => (
                        <span
                            key={company.name}
                            className="w-[150px] px-4 text-zinc-400 hover:text-zinc-200 transition-colors flex items-center justify-center"
                        >
                            <company.Logo />
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {companies.map((company) => (
                        <span
                            key={`${company.name}-2`}
                            className="w-[150px] px-4 text-zinc-400 hover:text-zinc-200 transition-colors flex items-center justify-center"
                        >
                            <company.Logo />
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CompanyCarousel;