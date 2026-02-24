
"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ValuesSection() {
    return (
        <section className="relative w-full py-24 bg-primary text-white overflow-hidden">
             {/* Background Overlay or Image logic if needed */}
             <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

            <div className="mx-auto w-[90%] max-w-4xl px-8 relative z-10 flex flex-col items-center gap-16">
                
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-6"
                >
                    <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        We believe buying a natural gemstone should feel clear, safe, and comfortable. 
                        Our specialists are available to guide you with honest advice and quick responses.
                    </p>
                </motion.div>

                {/* Contact Icons */}
                <div className="flex flex-col items-center md:flex-row md:justify-center gap-8 md:gap-16 w-full">
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-3 text-center"
                    >
                        <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                            <Phone className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm tracking-wide">+91 80560 98942</span>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center gap-3 text-center"
                    >
                        <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                             <Mail className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm tracking-wide">antiquegem@gmail.com</span>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center gap-3 text-center max-w-[200px]"
                    >
                        <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                            <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm tracking-wide leading-relaxed">
                            245/78, Periya Nesavu Street,
                            Kayalpatnam - 628 204 Thoothukudi District, Tamilnadu, India.
                        </span>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
