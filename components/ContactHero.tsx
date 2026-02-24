"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import HeroBackground from "./HeroBackground";

export default function ContactHero() {
    return (
        <section className="relative min-h-[85vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
            <HeroBackground alt="Contact Hero Background" overlayColor="#520000D9" />

            <div className="mx-auto w-[90%] max-w-7xl px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center h-full pt-40 pb-20 md:pt-20 md:pb-0">
                {/* Left Column: Intro Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white max-w-2xl text-center lg:text-left"
                >
                    <p className="text-white font-normal text-[22px] md:text-[30px] leading-[1.6] md:leading-[65px] tracking-normal">
                        We believe buying a natural gemstone should feel clear, safe, and comfortable. Our specialists are available to guide you with honest advice and quick responses.
                    </p>
                </motion.div>

                {/* Right Column: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center lg:items-start w-full text-white"
                >
                    <div className="flex flex-col gap-6 items-start text-left">
                        <div className="flex items-center gap-6">
                            <Phone className="w-8 h-8 fill-white text-white shrink-0" />
                            <span className="text-[20px] tracking-[0.5px] font-normal">+91 80560 98942</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <Mail className="w-8 h-8 text-white shrink-0" />
                            <span className="text-[20px] tracking-[0.5px] font-normal">antiquegem@gmail.com</span>
                        </div>

                        <div className="flex items-start gap-6">
                            <MapPin className="w-8 h-8 fill-white text-white shrink-0 mt-1" />
                            <div className="text-[20px] leading-relaxed tracking-[0.5px] font-normal">
                                <p>245/78, Periya Nesavu Street,</p>
                                <p>Kayalpatnam - 628 204 Thoothukudi</p>
                                <p>District, Tamilnadu, India.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

    );
}
