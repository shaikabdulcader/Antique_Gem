import { Gem, Award, UserCheck, Truck } from "lucide-react";

const features = [
    { icon: Gem, label: "100% Natural Stones" },
    { icon: Award, label: "International Certification" },
    { icon: UserCheck, label: "Expert Consultation" },
    { icon: Truck, label: "Fast Global Shipping" },
];

export default function Features() {
    return (
        <section className="bg-primary py-16 w-full">
            <div className="mx-auto w-[90%] max-w-7xl px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 group">
                            <feature.icon className="w-12 h-12 text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-transform duration-300 group-hover:scale-110" />
                            <span className="text-white font-medium tracking-[0.5px] text-sm md:text-base drop-shadow-sm uppercase">
                                {feature.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
