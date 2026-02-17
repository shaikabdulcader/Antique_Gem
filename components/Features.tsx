import Image from "next/image";

const features = [
    { icon: "/vector/image.webp", label: "100% Natural Stones" },
    { icon: "/vector/image (1).webp", label: "International Certification" },
    { icon: "/vector/image (2).webp", label: "Expert Consultation" },
    { icon: "/vector/image (3).webp", label: "Fast Global Shipping" },
];

export default function Features() {
    return (
        <section className="bg-primary py-16 w-full">
            <div className="mx-auto w-[90%] max-w-7xl px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center items-start">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 group">
                            <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={feature.icon}
                                    alt={feature.label}
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className="text-white font-medium text-[20px] md:text-[25px] leading-[1.2] md:leading-[50px] tracking-normal drop-shadow-sm max-w-[280px]">
                                {feature.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
