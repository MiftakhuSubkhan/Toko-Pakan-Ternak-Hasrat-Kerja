import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  availability: string;
  image: string;
  waText: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Pollard Gandum Cap Angsa",
    category: "Bogasari",
    description:
      "Dedak gandum murni berprotein tinggi dan kaya serat alami. Pilihan utama untuk ransum sapi potong, sapi perah, dan ternak ruminansia guna memacu bobot harian.",
    availability: "Kemasan Sak 50kg • Siap Suplai Tonase",
    image: "/images/PU-1 (1).jpeg",
    waText:
      "Halo Admin Toko Pakan Hasrat Kerja, saya ingin menanyakan harga dan ketersediaan stok Pollard Gandum Cap Angsa (50kg).",
  },
  {
    id: 2,
    name: "Bran Pollard Cilacap",
    category: "Manunggal Perkasa",
    description:
      "Pakan bekatul gandum bermutu terstandar pabrikan Cilacap. Tekstur remah kering dengan palatabilitas tinggi yang sangat disukai ternak ruminansia dan unggas.",
    availability: "Kemasan Sak 50kg • Siap Suplai Tonase",
    image: "/images/PU-1 (2).jpeg",
    waText:
      "Halo Admin Toko Pakan Hasrat Kerja, saya ingin menanyakan harga dan ketersediaan stok Bran Pollard Manunggal Perkasa (50kg).",
  },
  {
    id: 3,
    name: "Wheat Bran Sriboga Daun",
    category: "Sriboga",
    description:
      "Dedak gandum berkualitas ekspor hasil penggilingan PT Sriboga Flour Mill. Kandungan serat cerna optimal untuk menjaga kesehatan rumen dan metabolisme susu sapi.",
    availability: "Kemasan Sak 50kg • Siap Suplai Tonase",
    image: "/images/PU-1 (3).jpeg",
    waText:
      "Halo Admin Toko Pakan Hasrat Kerja, saya ingin menanyakan harga dan ketersediaan stok Wheat Bran Sriboga Daun (50kg).",
  },
  {
    id: 4,
    name: "Bran Gandum Cap Kepala Kuda",
    category: "Bogasari",
    description:
      "Pakan olahan sampingan gandum berdaya cerna tinggi. Efektif sebagai bahan baku pengisi konsentrat mandiri untuk mengoptimalkan efisiensi biaya ransum pakan.",
    availability: "Kemasan Sak 50kg • Siap Suplai Tonase",
    image: "/images/PU-1 (4).jpeg",
    waText:
      "Halo Admin Toko Pakan Hasrat Kerja, saya ingin menanyakan harga dan ketersediaan stok Bran Gandum Cap Kepala Kuda (50kg).",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="produk" className="bg-slate-50 border-b border-slate-200/80 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full text-xs font-bold tracking-wide inline-block">
            KATALOG PILIHAN
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Produk Pakan Unggulan
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Pakan berkualitas terstandar pabrikan untuk peternak rakyat hingga kemitraan komersial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="relative h-52 w-full shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors mb-2 min-h-[3rem] line-clamp-2">
                  {product.name}
                </h3>

                <p className="line-clamp-3 min-h-[4.5rem] text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-auto pt-4 space-y-3">
                  <div className="h-10 flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{product.availability}</span>
                  </div>

                  <Link
                    href="/produk"
                    className="group w-full py-2.5 px-4 rounded-xl font-semibold text-sm text-white bg-emerald-700 transition-all duration-300 ease-out hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-900/25 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/produk"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#1b5e20] bg-white border border-[#1b5e20]/40 shadow-sm transition-all duration-300 ease-out hover:bg-slate-100 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span>Lihat Semua Produk</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
