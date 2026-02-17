import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-light-bg selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <ProductGrid />
      <Footer />
    </main>
  );
}

