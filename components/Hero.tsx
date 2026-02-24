"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroBackground from "./HeroBackground";

export default function Hero() {
    return (
        <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-transparent">
            <HeroBackground alt="Hero Background" overlayColor="#000000A6" />

            <div className="mx-auto w-[90%] max-w-7xl px-8 h-full flex flex-col justify-center relative z-10 pt-[8vh] items-center md:items-start">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl text-white space-y-10 text-center md:text-left"
                >
                    <h1 className="hero-heading drop-shadow-2xl">
                        THERE’S ONE <br />
                        FOR EVERYONE
                    </h1>


                    <p className="text-lg md:text-xl font-normal leading-[1.6] tracking-normal text-white/90 max-w-2xl hidden md:block">
                        Discover the timeless elegance of nature's finest treasures, 
                        crafted for those who appreciate true luxury.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6">
                        <motion.a
                            href="#products-section"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-10 py-3.5 rounded-[30px] bg-white/10 border border-white/80 text-white text-base primary-button hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                        >
                            Get Started
                        </motion.a>
                    </div>
                </motion.div>
            </div>

        </section>

    );
}
