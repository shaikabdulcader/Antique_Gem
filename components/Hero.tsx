"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.webp"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Brand Red Overlay */}
                <div className="absolute inset-0 hero-overlay" />
            </div>

            <div className="mx-auto w-[90%] max-w-7xl px-8 h-full flex flex-col justify-center relative z-10 pt-[10vh]">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl text-white space-y-10 text-left"
                >
                    <h1 className="font-display text-4xl sm:text-5xl md:text-[64px] font-semibold tracking-[3px] leading-[1.1] drop-shadow-2xl uppercase">
                        THERE’S ONE <br />
                        FOR EVERYONE
                    </h1>

                    <p className="text-xl md:text-[22px] font-normal leading-[1.7] tracking-[0.3px] text-white/90 max-w-2xl">
                        Discover the timeless elegance of nature's finest treasures, 
                        crafted for those who appreciate true luxury.
                    </p>

                    <div className="flex flex-wrap text-left gap-6">
                        <motion.a
                            href="#products-section"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-12 py-4 rounded-[30px] bg-white/10 border border-white/80 text-white text-lg font-medium tracking-wide hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                        >
                            Get Started
                        </motion.a>
                    </div>
                </motion.div>
            </div>

        </section>

    );
}
