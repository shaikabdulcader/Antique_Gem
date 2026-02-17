"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroBackground from "./HeroBackground";

export default function AboutHero() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
            <HeroBackground alt="About Hero Background" overlayColor="#520000D9" />

            <div className="mx-auto w-[90%] max-w-7xl px-8 relative z-10 flex flex-col items-center justify-center h-full pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-5xl text-center"
                >
                    <p className="text-white text-[20px] md:text-[30px] leading-[1.4] md:leading-[55px] font-normal tracking-normal drop-shadow-md">
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
