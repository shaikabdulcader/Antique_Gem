
"use client";

import { motion } from "framer-motion";

export default function WelcomeSection() {
    return (
        <section className="relative w-full py-24 bg-primary overflow-hidden flex items-center justify-center">
             {/* Background Overlay or Image logic if needed */}
             <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

            <div className="mx-auto w-[90%] max-w-4xl px-8 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl md:text-3xl font-light">
                        Welcome to <span className="font-bold">Antique Gem</span>,
                    </h2>
                    
                    <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                        a global destination to buy natural gemstones online with complete confidence. 
                        We specialize in premium quality, ethically sourced, lab-certified gemstones, 
                        trusted by customers, collectors, astrologers, jewellers, and investors around the world.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
