import React from "react";
import { MessageCircle } from "lucide-react";

export default function CtaWhatsApp() {
  return (
    <section className="w-full bg-[#1b5e20] text-white py-6 md:py-8 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-left w-full md:w-auto">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/30">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg md:text-xl text-white leading-tight">
              Butuh Konsultasi atau Pesan Sekarang?
            </h3>
            <p className="text-sm text-slate-200 mt-0.5">
              Tim kami siap membantu kebutuhan pakan ternak Anda.
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/6285718756267?text=Halo%20Toko%20Pakan%20Hasrat%20Kerja,%20saya%20ingin%20konsultasi%20dan%20tanya%20stok%20pakan"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1b5e20] font-semibold text-sm rounded-lg shadow-sm transition-all duration-300 ease-out hover:bg-slate-100 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] shrink-0 w-full md:w-auto"
        >
          <MessageCircle className="w-4 h-4 text-[#1b5e20] transition-transform duration-300 group-hover:scale-110" />
          <span>Hubungi via WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
