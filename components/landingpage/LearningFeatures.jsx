import React, { useState, useEffect, useRef } from 'react';
import { BarChart2, BookOpen, Brain, LineChart } from 'lucide-react';

const LearningFeatures = ({ className }) => {
    const [activeSection, setActiveSection] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef(null);

    const features = [
        {
            title: "Editor",
            icon: BarChart2,
            description: "Create your own coding flashcards, or use our pre-built ones."
        },
        {
            title: "Review",
            icon: LineChart,
            description: "Flashcards purpose built for learning programming concepts."
        },
        {
            title: "Insights",
            icon: BookOpen,
            description: "Visualize your learning progress and track your performance."
        },
        {
            title: "Spaced Repetition",
            icon: Brain,
            description: "Study schedule based on your learning pace."
        }
    ];
    const SECTION_IMAGES = [
        {
            src: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/imga.webp?t=2025-01-17T01%3A35%3A42.284Z",
            alt: "Editor feature preview"
        },
        {
            src: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/imgb.webp?t=2025-01-17T01%3A36%3A20.118Z",
            alt: "Review feature preview"
        },
        {
            src: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/imgc.webp?t=2025-01-17T01%3A36%3A55.316Z",
            alt: "Insights feature preview"
        },
        {
            src: "https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/imga.webp?t=2025-01-17T01%3A35%3A42.284Z",
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

        if (carouselRef.current) {
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
        <div className="relative max-w-4xl mx-auto px-4">
            <div className="relative w-full aspect-video bg-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={SECTION_IMAGES[activeSection].src}
                        alt={SECTION_IMAGES[activeSection].alt}
                        className="w-full h-full object-cover transition-opacity duration-300"
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/90 to-transparent" />
            </div>
        </div>
    );

    return (
        <div className={`min-h-screen text-white p-4 xl:p-8 overflow-x-hidden ${className || ''}`}>
            <h1 className="text-xl xl:text-4xl font-bold text-center mb-8 xl:mb-16 px-4 bg-gradient-to-r from-yellow-200 to-pink-500 text-transparent bg-clip-text">
                Everything you need to learn efficiently
            </h1>

            {/* Desktop Layout */}
            <div className="hidden xl:block">
                <div className="max-w-7xl mx-auto px-4 mb-16">
                    <div className="grid grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={`desktop-${feature.title}`}
                                onClick={() => handleSectionClick(index)}
                                className={`flex flex-col items-center text-center group ${
                                    index === activeSection ? 'opacity-100' : 'opacity-70'
                                } transition-all duration-300 cursor-pointer hover:opacity-90`}
                            >
                                <FeatureContent
                                    feature={feature}
                                    index={index}
                                    activeSection={activeSection}
                                    getProgressForSection={getProgressForSection}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <PreviewSection/>
            </div>

            {/* Mobile Layout */}
            <div className="xl:hidden">
                <div className="mb-8">
                    <PreviewSection/>
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

const FeatureContent = ({feature, index, activeSection, getProgressForSection}) => (
    <div className="flex flex-col items-center w-full max-w-xs mx-auto min-h-[200px] justify-between">
        <div className="w-full xl:hidden mb-4 max-w-[200px]">
            <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-400 transition-all duration-300 ease-out"
                    style={{width: `${getProgressForSection(index)}%`}}
                />
            </div>
        </div>

        <div className="flex flex-col items-center">
            <div
                className="w-12 h-12 xl:w-16 xl:h-16 bg-purple-900/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-800/50 transition-colors">
                <feature.icon className="w-6 h-6 xl:w-8 xl:h-8 text-purple-400"/>
            </div>
            <h2 className="text-lg xl:text-xl font-bold mb-2">{feature.title}</h2>
            <p className="text-sm xl:text-base text-gray-400">{feature.description}</p>
        </div>

        <div className="hidden xl:block w-full xl:w-full max-w-[200px] mt-8">
            <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-400 transition-all duration-300 ease-out"
                    style={{width: `${getProgressForSection(index)}%`}}
                />
            </div>
        </div>
    </div>
);

export default LearningFeatures;