import React from 'react'
import FeatureSection from "../ui/feature-section"

const features = [
    {
        step: 'Step 1',
        title: 'Learn the Basics',
        content: 'Start your Web3 journey by learning the basics of blockchain.',
        image: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/Roadmaplight.png?t=2025-01-17T02%3A24%3A38.386Z"
    },
    {
        step: 'Step 2',
        title: 'Deep Dive',
        content: 'Dive deep into blockchain fundamentals and smart contract development.',
        image: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/Roadmaplight.png?t=2025-01-17T02%3A24%3A38.386Z"
    },
    {
        step: 'Step 3',
        title: 'Build Projects',
        content: 'Graduate with hands-on Web3 experience through building decentralized applications.',
        image: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/Roadmaplight.png?t=2025-01-17T02%3A24%3A38.386Z"
    },
]

const FeatureDemo = () => {
    return (
        <div className="my-24">
            <FeatureSection
                features={features}
                title={
                    <>
                        <span
                            className="font-ubuntu text-cyan-400 text-base font-medium mb-4 block"> {/* Increased text size and margin */}
                            HOW IT WORKS
                        </span>
                        <h2 className="font-ubuntu text-white text-5xl font-bold mb-4">
                            Get Started in 3 Simple Steps
                        </h2>
                    </>
                }
                autoPlayInterval={4000}
                imageHeight="h-[500px]"
            />
        </div>
    )
}

export default FeatureDemo