import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { cowProducts } from "@/data/products";

export const metadata = {
  title: "Katalog Pakan Sapi (Halaman 2) - Toko Pakan Hasrat Kerja",
  description:
    "Pasokan konsentrat, pollard, dan bahan baku pakan sapi berkualitas tangan pertama. Melayani kebutuhan eceran sak hingga pengiriman armada tonase.",
};

const ITEMS_PER_PAGE = 6;

export default function ProdukHalaman2Page() {
  const totalProducts = cowProducts.length;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);
  const page2Products = cowProducts.slice(ITEMS_PER_PAGE, ITEMS_PER_PAGE * 2);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Katalog Pakan Sapi (Halaman 2)
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal max-w-4xl mx-auto px-4 whitespace-normal md:whitespace-nowrap overflow-hidden text-ellipsis">
          Pasokan konsentrat &amp; bahan pakan berkualitas untuk kebutuhan eceran sak hingga muatan armada tonase.
        </p>
      </section>

      <section className="flex-1 pb-16 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {page2Products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {page2Products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="relative w-full h-52 sm:h-56 bg-slate-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-emerald-800 font-bold text-[10px] px-2.5 py-1 rounded-full shadow-sm border border-emerald-100 flex items-center gap-1.5 z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      Eceran &amp; Grosir
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <h2 className="font-bold text-slate-900 text-base sm:text-lg line-clamp-1 group-hover:text-emerald-800 transition-colors">
                        {product.name}
                      </h2>

                      <div className="flex items-center justify-between text-xs text-slate-600 py-1.5 border-y border-slate-100 mt-2">
                        <span className="font-medium text-slate-700 flex items-center gap-1">
                          <span>⚖️</span> Kemasan: {product.packaging.replace(/^Sak\s*/i, "")}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Ready Gudang
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="py-1.5 px-3 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs font-semibold text-emerald-800 text-center">
                        Sistem Harga: Eceran &amp; Grosir Berbeda
                      </div>

                      <a
                        href={`https://wa.me/6285718756267?text=${encodeURIComponent(
                          `Halo Toko Pakan Hasrat Kerja, saya ingin tanya harga dan stok untuk produk ${product.name}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full bg-[#1b5e20] text-white font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all duration-300 ease-out hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-900/25 hover:-translate-y-0.5 active:scale-[0.98]"
                      >
                        <MessageCircle className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
                        <span>Tanya Harga &amp; Pesan</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200/80 max-w-xl mx-auto px-6">
              <span className="text-3xl mb-2 block">📦</span>
              <p className="text-slate-600 font-medium text-sm sm:text-base">
                Belum ada produk tambahan di halaman ini.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Produk baru dari gudang akan otomatis tampil di sini saat ditambahkan.
              </p>
            </div>
          )}

          <div className="mt-14 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Link
                href="/produk"
                className="px-4 h-10 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm flex items-center justify-center gap-1 shadow-sm transition-all"
              >
                <span>←</span>
                <span>Sebelumnya</span>
              </Link>
              <Link
                href="/produk"
                className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm flex items-center justify-center shadow-sm transition-all"
              >
                1
              </Link>
              <span className="w-10 h-10 rounded-xl bg-[#1b5e20] text-white font-bold text-sm flex items-center justify-center shadow-md">
                2
              </span>
            </div>

            <Link
              className="inline-flex items-center gap-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base py-3 px-7 rounded-xl shadow-sm transition-all"
              href="/produk"
            >
              <span>← Kembali ke Halaman 1</span>
            </Link>

            <p className="text-xs text-slate-500 font-medium">
              Menampilkan {page2Products.length} produk dari total {totalProducts} produk (Halaman 2 dari {totalPages})
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
