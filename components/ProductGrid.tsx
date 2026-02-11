"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
    { id: 1, name: "Royal Sapphire", image: "/products/blue_sapphire.png" },
    { id: 2, name: "Imperial Ruby", image: "/products/Star Rubies.png" },
    { id: 3, name: "Green Tsavorite", image: "/products/Tsavorite.png" },
    { id: 4, name: "Yellow Sapphire", image: "/products/yellow_sapphire.png" },
    { id: 5, name: "Purple Sapphire", image: "/products/Purple Sapphire.png" },
    { id: 6, name: "Gomed (Hessonite)", image: "/products/Gomed.png" },
    { id: 7, name: "Pink Sapphire", image: "/products/Pink Sapphire.png" },
    { id: 8, name: "Alexandrite", image: "/products/Alexandrite.png" },
    { id: 9, name: "Blue Star Sapphire", image: "/products/Blue Star.png" },
    { id: 10, name: "Cat's Eye (Chrysoberyl)", image: "/products/Cat’s Eye.png" },
    { id: 11, name: "Moonstone", image: "/products/Moonstone.png" },
    { id: 12, name: "Orange Sapphire", image: "/products/Orange Sapphire.png" },
    { id: 13, name: "White Sapphire", image: "/products/White Sapphire.png" },
    { id: 14, name: "Burmese Ruby", image: "/products/red_sapphire.png" },
];

export default function ProductGrid() {
    const [showAll, setShowAll] = useState(false);

    const displayedProducts = showAll ? products : products.slice(0, 8);

    return (
        <section id="products-section" className="bg-light-grey py-12 md:py-24">
            <div className="mx-auto w-[90%] max-w-7xl px-8">
                <h2 className="text-center text-maroon font-heading text-3xl tracking-widest uppercase mb-16">
                    Our Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence>
                        {displayedProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-square rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:-translate-y-2 bg-white">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                                <h3 className="mt-6 text-center text-[#333333] font-medium tracking-wide">
                                    {product.name}
                                </h3>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-12 py-4 bg-maroon text-white rounded-full hover:bg-maroon-dark transition-colors duration-300 text-lg tracking-wider shadow-lg hover:shadow-xl"
                    >
                        {showAll ? "See Less" : "See More"}
                    </button>
                </div>
            </div>
        </section>
    );
}

