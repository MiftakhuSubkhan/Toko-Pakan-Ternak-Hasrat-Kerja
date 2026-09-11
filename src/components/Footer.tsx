import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, MessageCircle, Clock, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#144818] text-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-1.5 rounded-xl shadow-md flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo-hk.png"
                  alt="Logo Hasrat Kerja"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg leading-tight">
                  TOKO PAKAN
                </span>
                <span className="text-emerald-300 font-black text-lg leading-tight">
                  HASRAT KERJA
                </span>
              </div>
            </div>

            <p className="text-emerald-100/90 text-sm leading-relaxed mb-5">
              Pusat pasokan pakan ternak berkualitas pabrikan langsung dari distributor resmi. Melayani pengiriman skala tonase maupun eceran langsung di toko.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 text-xs px-3 py-1 rounded-full">
              <Truck className="w-3.5 h-3.5 shrink-0 text-emerald-300" />
              <span>Armada Pengiriman Siap Kirim</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-emerald-100/80 hover:text-white transition-colors inline-block"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/produk"
                  className="text-emerald-100/80 hover:text-white transition-colors inline-block"
                >
                  Produk Unggulan
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-emerald-100/80 hover:text-white transition-colors inline-block"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/dokumentasi"
                  className="text-emerald-100/80 hover:text-white transition-colors inline-block"
                >
                  Dokumentasi
                </Link>
              </li>
              <li>
                <Link
                  href="/lokasi"
                  className="text-emerald-100/80 hover:text-white transition-colors inline-block"
                >
                  Lokasi Toko
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">
              Produk
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              <li className="hover:text-white transition-colors">
                Bran Pollard cilacap
              </li>
              <li className="hover:text-white transition-colors">
                Bran Kepala Kuda
              </li>
              <li className="hover:text-white transition-colors">
                Bran Daun Sriboga
              </li>
              <li className="hover:text-white transition-colors">
                Brand Pollard Tongkat Emas
              </li>
              <li className="hover:text-white transition-colors">
                Bran Cap Angsa
              </li>
              <li className="hover:text-white transition-colors">
                Pelet Wilmar
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-base mb-4">
              Kontak Kami
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
                <span className="text-emerald-100/80 leading-snug">
                  Senggrong, Kec. Andong, Kab. Boyolali, Jawa Tengah
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                <a
                  href="https://wa.me/6285718756267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-100/80 hover:text-white transition-colors"
                >
                  +62 857-1875-6267
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-300 shrink-0" />
                <span className="text-emerald-100/80">
                  Senin - Sabtu: 07.30 – 17.00 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-emerald-200/80 font-medium">
            &copy; 2026 Toko Pakan Hasrat Kerja. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
