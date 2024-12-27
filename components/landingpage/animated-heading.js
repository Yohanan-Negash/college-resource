'use client';
import React, { useState, useEffect } from 'react';

const AnimatedHeading = ({ className }) => {
    const [mainText, setMainText] = useState('');
    const fullText = 'No More Gatekeeping';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setMainText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Speed of typing

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={className}>
            <div className="max-w-[90%] mx-auto p-4 text-center">
                <div className="antialiased">
                    <span className="text-transparent bg-clip-text text-heading font-bold bg-heading-gradient drop-shadow-heading inline-block relative">
                        {mainText}
                        <span className="animate-blink ml-1">|</span>
                    </span>
                </div>

                <div className="text-subheading mt-4 text-white">
                    <span>Made</span>{' '}
                    <span>for</span>{' '}
                    <span>students</span>{' '}
                    <span>by</span>{' '}
                    <span>students</span>
                </div>
            </div>
        </div>
    );
};

export default AnimatedHeading;