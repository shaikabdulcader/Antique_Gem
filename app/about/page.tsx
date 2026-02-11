import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <main className="min-h-screen bg-light-grey selection:bg-maroon selection:text-white">
            <Navbar />
            <AboutHero />
            <Mission />
            <Footer />
        </main>
    );
}
