import React from 'react';
import Story from './story';

const StorySection = ({ className }) => {
    return (
        <div className={`mb-16 ${className}`}>
            <Story />
        </div>
    );
};

export default StorySection;