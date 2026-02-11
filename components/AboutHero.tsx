"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center font-montserrat">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="About Hero Background"
                    fill
                    className="object-cover"
                    priority

                />
                <div className="absolute inset-0 bg-gradient-to-b from-maroon/90 via-maroon/70 to-maroon/90 mix-blend-multiply opacity-90" />
            </div>

            <div className="mx-auto w-[90%] max-w-7xl px-8 relative z-10 flex flex-col justify-center h-full pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl space-y-8"
                >
                    <p className="text-white text-[20px] leading-[36px] font-normal tracking-normal text-justify drop-shadow-md">
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
