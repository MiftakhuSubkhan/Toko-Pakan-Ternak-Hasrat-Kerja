"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Package,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Truck,
  CheckCircle2
} from "lucide-react";

interface Slide {
  id: number;
  src: string;
  image: string;
  alt: string;
  position: string;
}

const slides: Slide[] = [
  {
    id: 1,
    src: "/images/hero-1.jpeg",
    image: "/images/hero-1.jpeg",
    alt: "Gudang Toko Pakan Hasrat Kerja",
    position: "object-[76%_bottom] md:object-[center_85%]",
  },
  {
    id: 2,
    src: "/images/hero-3.jpeg",
    image: "/images/hero-3.jpeg",
    alt: "Toko Fisik Senggrong dan Pasokan Pakan Hasrat Kerja",
    position: "object-[76%_bottom] md:object-[center_85%]",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="beranda"
      className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 z-0 select-none">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                } transition-transform duration-10000`}
            >
              <Image
                src={slide.src || slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-[76%_bottom] md:object-[center_85%] w-full h-full"
                sizes="100vw"
                quality={90}
              />
            </div>
          );
        })}

        <div className="absolute inset-0 z-20 bg-black/25" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto pt-28 pb-10 px-5 md:pt-20 md:px-8 flex flex-col justify-start md:justify-center">
        <div className="max-w-xl md:max-w-3xl lg:max-w-4xl flex flex-col items-start text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-xl md:max-w-3xl drop-shadow-md text-left">
            <span className="block">Pusat Pasokan Pakan Ternak</span>
            <span className="block text-emerald-400">Eceran & Grosir Tonase</span>
          </h1>

          <p className="text-left ml-0 mr-auto mt-3 md:mt-4 mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 max-w-lg md:max-w-xl line-clamp-3 md:line-clamp-none leading-relaxed drop-shadow">
            Stok pakan pabrikan lengkap harga tangan pertama. Siap kirim armada tonase ke kandang komersial dan layani eceran di toko fisik.
          </p>

          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 mb-6 md:mb-8 w-full sm:w-auto">
            <Link
              href="https://wa.me/6285718756267"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#1b5e20] text-white text-base font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#1b5e20]/40 transition-all duration-300 ease-out hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-900/25 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span> Hubungi via WhatsApp</span>
            </Link>

            <Link
              href="/produk"
              className="group inline-flex items-center justify-center gap-2 border border-white/70 text-white text-base font-bold px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white hover:text-gray-900 hover:border-white hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Package className="w-5 h-5 text-emerald-300 group-hover:text-gray-900 transition-transform duration-300 group-hover:scale-110" />
              <span> Lihat Produk</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/20">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Harga Tangan Pertama</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-200">
              <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Siap Suplai Tonase</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-200 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pabrikan Terpercaya</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-8 bottom-6 z-30 items-center gap-2">
        <button
          onClick={prevSlide}
          aria-label="Slide sebelumnya"
          className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-sm shadow-md transition hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Slide berikutnya"
          className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 backdrop-blur-sm shadow-md transition hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
