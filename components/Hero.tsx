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
                    src="/hero.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority

                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="mx-auto w-[90%] max-w-7xl px-8 h-full flex flex-col justify-center relative z-10 pt-[20vh]">
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl text-white space-y-10"
                >
                    <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl tracking-wide leading-tight drop-shadow-2xl uppercase">
                        THERE’S ONE <br />
                        FOR EVERYONE
                    </h1>

                    <motion.a
                        href="#products-section"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-12 py-4 rounded-full border border-white/80 text-white text-xl tracking-wide hover:bg-white/10 transition-all duration-300"
                    >
                        Get Started
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
