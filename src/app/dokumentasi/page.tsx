"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Play, X } from "lucide-react";

export interface DocumentationItem {
  id: number;
  title: string;
  category: "Bongkar Muat" | "Pengiriman Armada" | "Stok Gudang";
  location: string;
  type: "video" | "image";
  src: string;
}

const galleryItems: DocumentationItem[] = [
  {
    id: 1,
    title: "Muat Pasokan Pakan dari Truk Ekspedisi",
    category: "Bongkar Muat",
    location: "Gudang Senggrong, Andong, Boyolali",
    type: "image",
    src: "/images/muat 4.jpeg",
  },
  {
    id: 2,
    title: "Bongkar Muatan di Gudang",
    category: "Bongkar Muat",
    location: "Gudang Senggrong, Andong, Boyolali",
    type: "video",
    src: "/images/bongkar 2.mp4",
  },
  {
    id: 3,
    title: "Bongkar Muatan di Gudang",
    category: "Bongkar Muat",
    location: "Gudang Senggrong, Andong, Boyolali",
    type: "video",
    src: "/images/bongkar-1.mp4",
  },
  {
    id: 4,
    title: "Stok pakan di gudang",
    category: "Stok Gudang",
    location: "Gudang Senggrong, Andong, Boyolali",
    type: "image",
    src: "/images/muat 8.jpeg",
  },
  {
    id: 5,
    title: "Muat pasokan barang untuk pelanggan",
    category: "Bongkar Muat",
    location: "Gudang Senggrong, Andong, Boyolali",
    type: "video",
    src: "/images/muat 7.mp4",
  },
  {
    id: 6,
    title: "Muat pasokan barang untuk pelanggan",
    category: "Bongkar Muat",
    location: "Gudang Senggrong, Andong, Boyolali",
    type: "video",
    src: "/images/muat 6.mp4",
  },
  {
    id: 7,
    title: "Armada siap kirim ke pelanggan",
    category: "Pengiriman Armada",
    location: "Boyolali & Sekitarnya",
    type: "image",
    src: "/images/kirim 1.jpeg",
  },
  {
    id: 8,
    title: "Bongkar di tempat pelanggan",
    category: "Pengiriman Armada",
    location: "Boyolali & Sekitarnya",
    type: "image",
    src: "/images/kirim 2.jpeg",
  },
  {
    id: 9,
    title: "Sampai tujuan pelanggan",
    category: "Pengiriman Armada",
    location: "Boyolali & Sekitarnya",
    type: "image",
    src: "/images/kirim 3.jpeg",
  },
  {
    id: 10,
    title: "Muat pasokan barang untuk pelanggan",
    category: "Bongkar Muat",
    location: "Gudang Senggrong, Andong, Boyolali",
    type: "video",
    src: "/images/muat 9.mp4",
  },
  {
    id: 11,
    title: "Bongkar di tempat pelanggan",
    category: "Pengiriman Armada",
    location: "Boyolali & Sekitarnya",
    type: "image",
    src: "/images/kirim 4.jpeg",
  },
  {
    id: 12,
    title: "Otw ke tempat pelanggan",
    category: "Pengiriman Armada",
    location: "Boyolali & Sekitarnya",
    type: "video",
    src: "/images/kirim 5.mp4",
  },
];

const categories = ["Semua", "Bongkar Muat", "Pengiriman Armada", "Stok Gudang"] as const;

export default function DokumentasiPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [selectedMedia, setSelectedMedia] = useState<DocumentationItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMedia(null);
      }
    };

    if (selectedMedia) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMedia]);

  const filteredItems =
    activeCategory === "Semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-1 pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Dokumentasi &amp; Galeri Operasional
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Bukti nyata aktivitas distribusi pakan ternak harian Toko Pakan Hasrat Kerja.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 ${isActive
                    ? "bg-[#1b5e20] text-white font-semibold shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group bg-slate-900 cursor-pointer"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}

              <span className="absolute top-3 left-3 z-10 bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                {item.category}
              </span>

              {item.type === "video" && (
                <span className="absolute top-3 right-3 z-10 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-emerald-400/30">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  Video
                </span>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 pointer-events-none">
                <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h3>
                <div className="mt-1.5 text-xs text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedMedia(null)}
            aria-label="Tutup pratinjau"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "video" ? (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl mx-auto"
              />
            ) : (
              <div className="relative max-h-[75vh] max-w-4xl w-full h-[60vh]">
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            )}

            <div className="mt-4 text-center text-white px-4 max-w-2xl">
              <h3 className="text-lg sm:text-xl font-bold leading-snug drop-shadow-md">
                {selectedMedia.title}
              </h3>
              <div className="mt-1.5 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{selectedMedia.location}</span>
                </span>
                <span>•</span>
                <span className="text-emerald-300 font-medium">{selectedMedia.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
