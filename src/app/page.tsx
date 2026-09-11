import React from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CtaWhatsApp from "@/components/CtaWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <HeroSlider />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <CtaWhatsApp />
      </main>

      <Footer />
    </div>
  );
}
