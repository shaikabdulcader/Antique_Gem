"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative min-h-[550px] h-auto lg:h-[550px] w-full overflow-hidden flex items-center justify-center font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.webp"
                    alt="Contact Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 hero-overlay" />
            </div>

            <div className="mx-auto w-[90%] max-w-7xl px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full pt-28 pb-12 lg:pt-36">
                {/* Left Column: Intro Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white max-w-2xl"
                >
                    <p className="text-xl md:text-[22px] leading-[1.7] font-normal tracking-[0.3px] text-justify">
                        We believe buying a natural gemstone should feel clear, safe, and comfortable. Our specialists are available to guide you with honest advice and quick responses.
                    </p>
                </motion.div>

                {/* Right Column: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-6 lg:pl-32 text-white"
                >
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 fill-white text-white shrink-0" />
                        <span className="text-[18px] tracking-[0.5px]">+91 80560 98942</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-white shrink-0" />
                        <span className="text-[18px] tracking-[0.5px]">antiquegem@gmail.com</span>
                    </div>

                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 fill-white text-primary shrink-0 mt-1" />
                        <div className="text-[18px] leading-relaxed tracking-[0.5px]">
                            <p>245/78, Periya Nesavu</p>
                            <p>Street,</p>
                            <p>Kayalpatnam - 628 204</p>
                            <p>Thoothukudi</p>
                            <p>District, Tamilnadu, India.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

    );
}
