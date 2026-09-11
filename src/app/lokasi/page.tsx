import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Truck, MessageCircle, Navigation } from "lucide-react";

export const metadata = {
  title: "Lokasi Gudang & Kontak - Toko Pakan Hasrat Kerja",
  description:
    "Lokasi gudang fisik dan kontak Toko Pakan Hasrat Kerja di Senggrong, Andong, Boyolali. Melayani pembelian eceran langsung di toko dan pengiriman armada muatan tonase.",
};

export default function LokasiPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-1 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Lokasi Gudang &amp; Kontak
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Kunjungi gudang fisik kami di Senggrong, Andong, Boyolali atau hubungi admin untuk melakukan pemesanan.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="h-full flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">Alamat Gudang</h2>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Senggrong, Kecamatan Andong, Kabupaten Boyolali, Jawa Tengah
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200/60" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">Jam Operasional</h2>
                  <p className="mt-1 text-sm text-slate-900 font-semibold">
                    Senin - Sabtu: 07.30 - 17.00 WIB
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200/60" />

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-800">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">Akses Jalan Armada</h2>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    Lokasi strategis, dapat diakses mudah oleh armada pick-up, truk colt diesel, hingga truk tronton fuso.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="https://wa.me/6285718756267?text=Halo%20Toko%20Pakan%20Hasrat%20Kerja,%20saya%20ingin%20tanya%20arah%20lokasi%20dan%20stok%20gudang"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 w-full bg-[#1b5e20] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all duration-300 ease-out hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-900/25 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span>Hubungi Admin via WhatsApp</span>
            </Link>
          </div>

          <div className="h-full flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm">
            <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-slate-100">
              <iframe
                title="Peta Lokasi Toko Pakan Hasrat Kerja"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.748923159901!2d110.7812668!3d-7.382010099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a0d002c5fe5b1%3A0xd5e0058e162e5e91!2sToko%20Pakan%20Ternak%20%26%20Pertanian%20%22Hasrat%20Kerja%22!5e0!3m2!1sid!2sid!4v1789031040328!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0 border-0"
              />
            </div>

            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=Senggrong,+Andong,+Boyolali"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Navigation className="w-4 h-4 text-[#1b5e20]" />
              <span>Buka Petunjuk Arah di Google Maps</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
