"use client";
import React from "react";
import { ContainerScroll } from "../ui/containerscrollanimation";
import CompanyCarousel from "../../components/landingpage/CompanyCarousel";
import Image from "next/image";

const HeroScroll = () => {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold bg-gradient-to-r from-yellow-200 to-pink-400 text-transparent bg-clip-text">
                            Never miss an Opportunity <br/>
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                150+ Internships
              </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src="https://kkpqypbvgqiygycagfey.supabase.co/storage/v1/object/public/video-image-storage/comparison-images-videos/Roadmaplight.png?t=2025-01-17T02%3A24%3A38.386Z"
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
            <CompanyCarousel/>
        </div>
    );
};

export default HeroScroll;