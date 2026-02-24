"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const products = [
    { id: 1, name: "Royal Sapphire", image: "/products/blue_sapphire.webp" },
    { id: 2, name: "Imperial Ruby", image: "/products/Star Rubies.webp" },
    { id: 3, name: "Green Tsavorite", image: "/products/Tsavorite.webp" },
    { id: 4, name: "Yellow Sapphire", image: "/products/yellow_sapphire.webp" },
    { id: 5, name: "Purple Sapphire", image: "/products/Purple Sapphire.webp" },
    { id: 6, name: "Gomed (Hessonite)", image: "/products/Gomed.webp" },
    { id: 7, name: "Pink Sapphire", image: "/products/Pink Sapphire.webp" },
    { id: 8, name: "Alexandrite", image: "/products/Alexandrite.webp" },
    { id: 9, name: "Blue Star Sapphire", image: "/products/Blue Star.webp" },
    { id: 10, name: "Cat's Eye (Chrysoberyl)", image: "/products/Cat’s Eye.webp" },
    { id: 11, name: "Moonstone", image: "/products/Moonstone.webp" },
    { id: 12, name: "Orange Sapphire", image: "/products/Orange Sapphire.webp" },
    { id: 13, name: "White Sapphire", image: "/products/White Sapphire.webp" },
    { id: 14, name: "Burmese Ruby", image: "/products/red_sapphire.webp" },
];


export default function ProductGrid() {
    const [showAll, setShowAll] = useState(false);

    const displayedProducts = showAll ? products : products.slice(0, 8);

    return (
        <section id="products-section" className="bg-light-bg py-12 md:py-24">
            <div className="mx-auto w-[90%] max-w-7xl px-8">
                <h2 className="text-center text-primary section-title mb-16 px-4">
                    Our Products
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                                <div className="relative aspect-square rounded-[20px] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] bg-transparent md:bg-white md:soft-shadow">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-105"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                                    />
                                </div>


                                <h3 className="mt-6 text-center text-text-secondary product-name">
                                    {product.name}
                                </h3>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-12 py-4 bg-primary text-white rounded-[30px] hover:bg-primary-dark transition-colors duration-300 text-base primary-button shadow-lg hover:shadow-xl"
                    >
                        {showAll ? "See Less" : "See More"}
                    </button>
                </div>
            </div>
        </section>

    );
}

