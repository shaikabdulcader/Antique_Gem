"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Gem, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const textColor = scrolled ? "#520000" : "white";

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 mx-auto w-[90%] max-w-7xl">
            <div className="glass-nav rounded-[40px] px-8 py-4 flex items-center justify-between transition-all duration-300 relative">
                <Link href="/" className="flex items-center gap-2 group">
                    <Gem
                        className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: textColor }}
                    />
                    <span className="navbar-brand transition-colors duration-300" style={{ color: textColor }}>
                        ANTIQUE GEM
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-14">
                    {["Home", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className="navbar-item transition-colors duration-300"
                            style={{ color: textColor }}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 transition-colors duration-300"
                    style={{ color: textColor }}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-4 p-6 bg-primary border border-white/10 shadow-2xl rounded-[30px] flex flex-col items-center gap-6 md:hidden">
                        {["Home", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="text-white navbar-item hover:text-white/70 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
