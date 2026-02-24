import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

// Footer.tsx
interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <footer 
            className={`text-white font-sans ${className || "pt-16 pb-8"}`}
            style={{ backgroundColor: '#520000' }}
        >
            <div className="mx-auto w-[90%] max-w-7xl px-8 flex flex-col md:flex-row justify-between gap-8 mb-8 items-start">
            
                {/* Quick Links */}
                <div className="flex flex-col space-y-4 w-full md:w-auto">
                    <h3 className="font-bold text-xl">Quick Links</h3>
                    <div className="flex flex-col space-y-2">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About", href: "/about" },
                            { name: "Contact us", href: "/contact" }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 w-full md:w-auto">
                    <h3 className="font-bold text-xl mb-4">Contact us</h3>
                     <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-white" />
                        <p className="tracking-normal">+91 80560 98942</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-white" />
                        <p className="tracking-normal">antiquegem@gmail.com</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-white shrink-0" />
                        <p className="leading-relaxed">
                            245/78, Periya Nesavu Street,<br/>
                            Kayalpatnam - 628 204 Thoothukudi<br/>
                            District, Tamilnadu, India.
                        </p>
                    </div>
                </div>

                 {/* Map - Hidden on mobile as per design implication or space saving */}
                <div className="hidden md:flex justify-end w-full md:w-auto">
                    <div className="w-full max-w-[240px] aspect-square rounded-lg overflow-hidden bg-gray-200">
                         <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.332857476834!2d78.11867169999999!3d8.5134707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b038626e0e29b11%3A0xe5f99222c5409549!2sKayalpattinam%2C%20Tamil%20Nadu%20628204!5e0!3m2!1sen!2sin!4v1707756181461!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Antique Gem Store Location"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </div>
            </div>

            {/* Divider & Copyright */}
            <div className="mx-auto w-[90%] max-w-7xl px-8">
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
                    <p>&copy; {new Date().getFullYear()} Antique Gem. All Right Reserved</p>
                    <div className="mt-4 md:mt-0">
                         <p>Made by <a href="https://pictaads.com/" target = "_blank"className="underline hover:text-white">Pictaads</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
