"use client";
import React from "react";

export function ShineBorder({
                                borderRadius = 8,
                                borderWidth = 1,
                                duration = 14,
                                color = "#000000",
                                className,
                                children,
                            }) {
    return (
        <div
            style={{
                "--border-radius": `${borderRadius}px`,
            }}
            className={`relative rounded-[--border-radius] ${className || ""}`} // Removed default sizing classes
        >
            <div
                style={{
                    "--border-width": `${borderWidth}px`,
                    "--border-radius": `${borderRadius}px`,
                    "--duration": `${duration}s`,
                    "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    "--background-radial-gradient": `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(",") : color},transparent,transparent)`,
                }}
                className="absolute inset-0 before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine"
            />
            {children}
        </div>
    );
}