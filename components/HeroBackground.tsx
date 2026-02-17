"use client";

import Image from "next/image";

interface HeroBackgroundProps {
    alt?: string;
    overlayColor?: string; // e.g., "#520000D9" or "transparent"
}

export default function HeroBackground({ 
    alt = "Background Image", 
    overlayColor = "transparent" 
}: HeroBackgroundProps) {
    return (
        <div className="absolute inset-0 z-0">
            <Image
                src="/hero.webp"
                alt={alt}
                fill
                className="object-cover object-center"
                priority
            />
            {/* Overlay with inline style for 100% accuracy */}
            <div 
                className="absolute inset-0 transition-colors duration-500" 
                style={{ backgroundColor: overlayColor }}
            />
        </div>
    );
}
