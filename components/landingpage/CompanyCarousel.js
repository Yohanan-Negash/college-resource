'use client';
import React from 'react';
import {AtlassianLogo, Dropbox, Amazon} from '../../components/ui/logo';

const CompanyCarousel = () => {
    const companies = [
        { name: 'Atlassian', Logo: AtlassianLogo },
        { name: 'Amazon', Logo: Amazon },
        { name: 'Dropbox', Logo: Dropbox },
        // Add more as you get the SVGs
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
                        <span key={company.name} className="w-[250px] text-zinc-400 hover:text-zinc-200 transition-colors flex items-center justify-center">
                            <company.Logo />
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {companies.map((company) => (
                        <span key={`${company.name}-2`} className="w-[250px] text-zinc-400 hover:text-zinc-200 transition-colors flex items-center justify-center">
                            <company.Logo />
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CompanyCarousel;