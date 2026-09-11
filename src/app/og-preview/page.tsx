import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, CheckCheck, Globe, Eye } from "lucide-react";

export const metadata = {
  title: "Simulasi Open Graph Preview - Toko Pakan Hasrat Kerja",
  description: "Pengujian visual kartu Open Graph dan Social Media Cards.",
};

export default function OgPreviewPage() {
  const ogData = {
    image: "/images/hero-3.jpeg",
    title: "Toko Pakan Hasrat Kerja | Distributor Pakan Ternak Boyolali",
    description:
      "Pusat pasokan pakan ternak eceran & grosir tonase di Senggrong, Andong, Boyolali. Melayani pengiriman armada tonase dan eceran sak.",
    url: "tokopakanhasratkerja.com",
    fullUrl: "https://tokopakanhasratkerja.com",
  };

  return (
    <div className="bg-slate-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <Share2 className="w-7 h-7 text-emerald-600" />
              Simulasi Pratinjau Open Graph (OG)
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Visualisasi tampilan kartu saat link dibagikan di WhatsApp, Facebook, LinkedIn, dan Twitter / X.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-2 rounded-xl text-xs font-semibold">
            <Eye className="w-4 h-4 text-emerald-600" />
            <span>OG Tags Valid (1200x630)</span>
          </div>
        </div>

        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#25D366]"></span>
              <h2 className="font-bold text-slate-900 text-lg">1. Pratinjau WhatsApp (Chat Bubble)</h2>
            </div>
            <span className="text-xs text-slate-400 font-medium">WhatsApp Web / Android / iOS</span>
          </div>

          <div className="p-6 bg-[#efeae2] rounded-xl flex justify-end">
            <div className="max-w-sm w-full bg-[#d9fdd3] text-slate-800 rounded-2xl rounded-tr-sm shadow-md overflow-hidden border border-[#c4eabf]/60">
              <div className="px-3 pt-2.5 pb-1.5 text-xs text-slate-700">
                <p className="mb-1 text-slate-800 font-medium">
                  Rekomendasi toko pakan ternak lengkap di Boyolali:
                </p>
                <span className="text-[#027eb5] underline break-all font-mono">
                  {ogData.fullUrl}
                </span>
              </div>

              <div className="bg-[#e7fedb] border-t border-[#cce8c5] overflow-hidden">
                <div className="relative w-full h-44 bg-slate-200">
                  <Image
                    src={ogData.image}
                    alt={ogData.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 bg-[#e7fedb]">
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-0.5">
                    {ogData.url}
                  </p>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                    {ogData.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {ogData.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-1 px-3 py-1.5 text-[10px] text-slate-500">
                <span>12.45</span>
                <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#1877F2]"></span>
              <h2 className="font-bold text-slate-900 text-lg">2. Pratinjau Facebook / LinkedIn (Large Card)</h2>
            </div>
            <span className="text-xs text-slate-400 font-medium">Aspek Rasio 1.91 : 1</span>
          </div>

          <div className="p-4 sm:p-6 bg-slate-50 rounded-xl flex justify-center">
            <div className="max-w-lg w-full bg-white rounded-xl border border-slate-300 shadow-sm overflow-hidden transition hover:shadow-md">
              <div className="relative w-full aspect-[1.91/1] bg-slate-200">
                <Image
                  src={ogData.image}
                  alt={ogData.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3.5 bg-slate-100/90 border-t border-slate-200">
                <p className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1 font-semibold">
                  <Globe className="w-3 h-3" />
                  {ogData.url}
                </p>
                <h3 className="text-base font-bold text-slate-900 mt-1 leading-snug line-clamp-1">
                  {ogData.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {ogData.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-900"></span>
              <h2 className="font-bold text-slate-900 text-lg">3. Pratinjau Twitter / X (Summary Large Image)</h2>
            </div>
            <span className="text-xs text-slate-400 font-medium">summary_large_image</span>
          </div>

          <div className="p-4 sm:p-6 bg-slate-50 rounded-xl flex justify-center">
            <div className="max-w-lg w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="relative w-full aspect-[2/1] bg-slate-200">
                <Image
                  src={ogData.image}
                  alt={ogData.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                  {ogData.url}
                </div>
              </div>

              <div className="p-3.5">
                <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-1">
                  {ogData.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {ogData.description}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Globe className="w-3 h-3" />
                  <span>{ogData.url}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-slate-900 text-slate-200 p-6 rounded-2xl shadow-sm border border-slate-800">
          <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
            <span>💻</span>
            <span>Spesifikasi Metadata yang Terpasang di &lt;head&gt;</span>
          </h3>
          <div className="space-y-1.5 font-mono text-xs overflow-x-auto text-emerald-400 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
            <p className="text-slate-400">&lt;!-- Open Graph / Facebook --&gt;</p>
            <p>&lt;meta property=&quot;og:type&quot; content=&quot;website&quot; /&gt;</p>
            <p>&lt;meta property=&quot;og:url&quot; content=&quot;{ogData.fullUrl}&quot; /&gt;</p>
            <p>&lt;meta property=&quot;og:title&quot; content=&quot;{ogData.title}&quot; /&gt;</p>
            <p>&lt;meta property=&quot;og:description&quot; content=&quot;{ogData.description}&quot; /&gt;</p>
            <p>&lt;meta property=&quot;og:image&quot; content=&quot;{ogData.fullUrl}{ogData.image}&quot; /&gt;</p>
            <p className="pt-2 text-slate-400">&lt;!-- Twitter --&gt;</p>
            <p>&lt;meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; /&gt;</p>
            <p>&lt;meta name=&quot;twitter:title&quot; content=&quot;Toko Pakan Hasrat Kerja&quot; /&gt;</p>
            <p>&lt;meta name=&quot;twitter:image&quot; content=&quot;{ogData.fullUrl}{ogData.image}&quot; /&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
