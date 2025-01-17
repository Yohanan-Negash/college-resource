"use client";
import React from "react";
import { motion, useScroll, useInView } from "framer-motion";

const ScrollAnimation = ({ children, className, animation = "fade" }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const animations = {
        fade: {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
        },
        slideRight: {
            initial: { opacity: 0, x: -100 },
            animate: { opacity: 1, x: 0 },
        },
        slideLeft: {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
        },
        scaleUp: {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
        },
        stagger: {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
        }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={animations[animation].initial}
            animate={isInView ? animations[animation].animate : animations[animation].initial}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};
export default ScrollAnimation;