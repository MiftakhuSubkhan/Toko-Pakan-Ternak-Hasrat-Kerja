import React from "react";
import Script from "next/script";
import { Star, MessageSquarePlus, ExternalLink } from "lucide-react";

// Ganti [MASUKKAN_ID_WIDGET_KAMU] dengan ID widget dari Elfsight Anda (contoh: "1a2b3c4d-...")
// atau definisikan melalui environment variable NEXT_PUBLIC_ELFSIGHT_REVIEW_WIDGET_ID
const ELFSIGHT_WIDGET_ID =
  process.env.NEXT_PUBLIC_ELFSIGHT_REVIEW_WIDGET_ID || "[MASUKKAN_ID_WIDGET_KAMU]";

// Link profil Google Maps Toko Pakan Ternak "Hasrat Kerja" untuk menulis ulasan langsung
const GOOGLE_MAPS_REVIEW_URL =
  "https://www.google.com/maps/place/Toko+Pakan+Ternak+%26+Pertanian+%22Hasrat+Kerja%22/@-7.3820101,110.7812668,17z";

export default function Testimonials() {
  const isDefaultId = ELFSIGHT_WIDGET_ID === "[MASUKKAN_ID_WIDGET_KAMU]";

  return (
    <section
      id="testimoni"
      className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
    >
      {/* Script Elfsight dimuat secara asynchronous & non-blocking */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header Bagian Testimoni */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Google Reviews Terverifikasi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Apa Kata Peternak?
          </h2>
          <p className="text-slate-600 mt-3 text-base md:text-lg max-w-2xl mx-auto">
            Ulasan asli langsung dari peternak mandiri dan mitra toko pakan kami di Google Maps.
          </p>
        </div>

        {/* Notifikasi panduan jika ID widget belum diganti */}
        {isDefaultId && (
          <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-900 text-sm shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-semibold flex items-center gap-1.5">
                <span>⚙️ Status Widget Elfsight:</span>
                <span className="text-xs bg-amber-200/80 px-2 py-0.5 rounded font-mono text-amber-950 font-bold">
                  ID Placeholder
                </span>
              </p>
              <p className="text-xs text-amber-800 mt-1">
                Ganti{" "}
                <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-amber-950 font-bold">
                  [MASUKKAN_ID_WIDGET_KAMU]
                </code>{" "}
                di file{" "}
                <code className="font-mono text-amber-950">
                  src/components/Testimonials.tsx
                </code>{" "}
                atau via env{" "}
                <code className="font-mono text-amber-950">
                  NEXT_PUBLIC_ELFSIGHT_REVIEW_WIDGET_ID
                </code>{" "}
                untuk mengaktifkan tampilan widget ulasan live.
              </p>
            </div>
            <a
              href="https://elfsight.com/google-reviews-widget/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-950 bg-amber-200 hover:bg-amber-300 px-3 py-1.5 rounded-lg transition-colors shrink-0"
            >
              <span>Dashboard Elfsight</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}

        {/* Wadah Widget Otomatis dengan Min-Height untuk mencegah Layout Shift (CLS) */}
        <div className="mt-10 min-h-[380px] w-full flex flex-col justify-center">
          <div
            className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
            data-elfsight-app-lazy
          >
            {/* Fallback & Skeleton Loading Card (ditampilkan saat script sedang memuat atau jika ID belum aktif) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-4 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400 opacity-70"
                        />
                      ))}
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="h-3.5 bg-slate-200 rounded w-full"></div>
                      <div className="h-3.5 bg-slate-200 rounded w-5/6"></div>
                      <div className="h-3.5 bg-slate-200 rounded w-3/4"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0"></div>
                    <div className="flex-1 space-y-1.5">
                      <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                      <div className="h-2.5 bg-slate-100 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tombol CTA Tulis Ulasan Pengalaman Anda */}
        <div className="mt-12 text-center">
          <a
            href={GOOGLE_MAPS_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300/80 transition-all shadow-sm hover:shadow active:scale-[0.98]"
          >
            <MessageSquarePlus className="w-4 h-4 text-emerald-700" />
            <span>Tulis Ulasan Pengalaman Anda di Google Maps</span>
          </a>
          <p className="text-xs text-slate-500 mt-2">
            Ulasan Anda sangat berarti bagi perkembangan pelayanan toko kami.
          </p>
        </div>
      </div>
    </section>
  );
}
