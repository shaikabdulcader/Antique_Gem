import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import HelpSection from "@/components/HelpSection";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <main className="min-h-screen bg-light-bg selection:bg-primary selection:text-white">
            <Navbar />
            <ContactHero />
            <HelpSection />
            <Footer />
        </main>
    );
}

