"use client";

import { motion } from "framer-motion";

// Reverted to match user design screenshot
export default function Mission() {
    return (
        <section className="bg-light-bg py-16">
            <div className="mx-auto w-[90%] max-w-7xl px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-primary section-title mb-12 text-center">
                        OUR MISSION:
                    </h2>

                    <div className="space-y-8 text-text-dark font-normal text-[20px] md:text-[27.03px] leading-[1.2] md:leading-[100%] tracking-normal text-justify">
                        <p>
                            To make purchasing real, untreated gemstones transparent, secure, and accessible, no matter where you live.
                        </p>
                        <p>
                            In an industry where trust matters more than price, we focus on authenticity, education, and long-term relationships. Every gem we offer is carefully evaluated for origin, clarity, color, cut, carat weight, and treatments before it reaches our catalogue.
                        </p>
                        <p>
                            From the mine to international gemological laboratories, and finally to your hands, each step is verified and documented.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>

    );
}
