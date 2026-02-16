"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.webp"
                    alt="About Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 hero-overlay" />
            </div>

            <div className="mx-auto w-[90%] max-w-7xl px-8 relative z-10 flex flex-col justify-center h-full pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl space-y-8"
                >
                    <p className="text-white text-xl md:text-[22px] leading-[1.7] font-normal tracking-[0.3px] text-justify drop-shadow-md">
                        Welcome to <span className="font-bold">Antique Gem</span>, a global destination to buy natural gemstones online 
                        with complete confidence. We specialize in premium quality, ethically sourced, 
                        lab-certified gemstones, trusted by customers, collectors, astrologers, jewellers, 
                        and investors around the world.
                    </p>
                </motion.div>
            </div>
        </section>

    );
}
