import React, { useState, useEffect, useRef } from 'react';
import { BarChart2, BookOpen, Brain, LineChart } from 'lucide-react';

const TearningFeatures = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef(null);

    const features = [
        {
            title: "Tools & Resources",
            icon: BarChart2,
            description: "Create your own coding flashcards, or use our pre-built ones."
        },
        {
            title: "Internships",
            icon: LineChart,
            description: "Flashcards purpose built for learning programming concepts."
        },
        {
            title: "Foundations",
            icon: BookOpen,
            description: "Visualize your learning progress and track your performance."
        },
        {
            title: "Roadmaps",
            icon: Brain,
            description: "Study schedule based on your learning pace."
        }
    ];

    const SECTION_IMAGES = [
        {
            src: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images/imgb.webp?t=2025-01-02T05%3A06%3A07.283Z",
            alt: "Editor feature preview"
        },
        {
            src: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images/imga.webp?t=2025-01-02T05%3A05%3A49.208Z",
            alt: "Review feature preview"
        },
        {
            src: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images/imgb.webp?t=2025-01-02T05%3A06%3A07.283Z",
            alt: "Insights feature preview"
        },
        {
            src: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images/imga.webp?t=2025-01-02T05%3A05%3A49.208Z",
            alt: "Spaced Repetition feature preview"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current && window.innerWidth < 1280) {
                const scrollPosition = carouselRef.current.scrollLeft;
                const sectionWidth = carouselRef.current.scrollWidth / features.length;
                const newSection = Math.round(scrollPosition / sectionWidth);

                if (newSection !== activeSection) {
                    setActiveSection(newSection);
                    setProgress(0);
                    setIsAnimating(true);
                }
            }
        };

        carouselRef.current?.addEventListener('scroll', handleScroll);
        return () => carouselRef.current?.removeEventListener('scroll', handleScroll);
    }, [activeSection, features.length]);

    useEffect(() => {
        if (isAnimating) {
            const timer = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        setIsAnimating(false);
                        clearInterval(timer);
                        setTimeout(() => {
                            const nextSection = (activeSection + 1) % features.length;
                            setActiveSection(nextSection);

                            if (carouselRef.current && window.innerWidth < 1280) {
                                const sectionWidth = carouselRef.current.scrollWidth / features.length;
                                carouselRef.current.scrollTo({
                                    left: sectionWidth * nextSection,
                                    behavior: 'smooth'
                                });
                            }

                            setProgress(0);
                            setIsAnimating(true);
                        }, 500);
                        return 100;
                    }
                    return prev + 1;
                });
            }, 50);

            return () => clearInterval(timer);
        }
    }, [isAnimating, features.length, activeSection]);

    const getProgressForSection = (index) => {
        return index === activeSection ? progress : 0;
    };

    const handleSectionClick = (index) => {
        setProgress(0);
        setActiveSection(index);
        setIsAnimating(true);

        if (carouselRef.current && window.innerWidth < 1280) {
            const sectionWidth = carouselRef.current.scrollWidth / features.length;
            carouselRef.current.scrollTo({
                left: sectionWidth * index,
                behavior: 'smooth'
            });
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const PreviewSection = () => (
        <div className="relative h-full">
            <div className="container mx-auto max-w-3xl">
                <div className="sticky top-8 w-full h-[540px] overflow-hidden">
                    <div className="relative w-full h-full">
                        <img
                            src={SECTION_IMAGES[activeSection].src}
                            alt={SECTION_IMAGES[activeSection].alt}
                            className="w-full h-full object-contain transition-opacity duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen text-white p-4 xl:p-8 overflow-x-hidden">
            <h1 className="text-xl xl:text-4xl font-bold text-center mb-8 xl:mb-16 px-4">
                Everything you need to learn efficiently
            </h1>

            {/* Desktop Layout */}
            <div className="hidden xl:block">
                <div className="max-w-7xl mx-auto grid grid-cols-2">
                    {/* Left Column: Features */}
                    <div className="flex flex-col space-y-12">
                        {features.map((feature, index) => (
                            <div
                                key={`desktop-${feature.title}`}
                                onClick={() => handleSectionClick(index)}
                                className={`flex flex-col group cursor-pointer pr-6 ${
                                    index === activeSection ? 'opacity-100' : 'opacity-70'
                                } transition-all duration-300 hover:opacity-90`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center group-hover:bg-teal-800 transition-colors flex-shrink-0">
                                            <feature.icon className="w-8 h-8 text-purple-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
                                            <p className="text-base text-gray-400">{feature.description}</p>
                                        </div>
                                    </div>
                                    <div className="w-1 h-24 bg-gray-800 rounded-full overflow-hidden flex-shrink-0">
                                        <div
                                            className="w-full bg-gradient-to-b from-purple-500 to-pink-300 transition-all duration-300 ease-out"
                                            style={{ height: `${getProgressForSection(index)}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Preview */}
                    <div className="sticky top-8">
                        <PreviewSection />
                    </div>
                </div>
            </div>

            {/* Mobile Layout - Exactly as original */}
            <div className="xl:hidden">
                <div className="mb-8">
                    <PreviewSection />
                </div>

                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto snap-x snap-mandatory touch-pan-x no-scrollbar"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {features.map((feature, index) => (
                        <div
                            key={`mobile-${feature.title}`}
                            className="flex-none w-full snap-center px-4"
                            onClick={() => handleSectionClick(index)}
                        >
                            <div className={`flex flex-col items-center text-center ${
                                index === activeSection ? 'opacity-100' : 'opacity-70'
                            } transition-all duration-300`}>
                                <FeatureContent
                                    feature={feature}
                                    index={index}
                                    activeSection={activeSection}
                                    getProgressForSection={getProgressForSection}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FeatureContent = ({ feature, index, activeSection, getProgressForSection }) => (
    <div className="flex flex-col items-center w-full max-w-xs mx-auto min-h-[200px] justify-between">
        <div className="w-full xl:hidden mb-4 max-w-[200px]">
            <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-300 transition-all duration-300 ease-out"
                    style={{ width: `${getProgressForSection(index)}%` }}
                />
            </div>
        </div>

        <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-800 transition-colors">
                <feature.icon className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-lg font-bold mb-2">{feature.title}</h2>
            <p className="text-sm text-gray-400">{feature.description}</p>
        </div>
    </div>
);

export default TearningFeatures;