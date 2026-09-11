import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, ShieldCheck, Warehouse, Truck, BadgeDollarSign } from "lucide-react";

export const metadata = {
  title: "Tentang Kami - Toko Pakan Hasrat Kerja",
  description:
    "Distributor dan suplier pakan ternak berkualitas di Boyolali. Menyediakan konsentrat, pollard gandum, dan bahan baku pakan sapi dari pabrikan tangan pertama.",
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "Kualitas Segel Pabrik Resmi",
    desc: "Setiap produk yang kami sediakan bersumber langsung dari pabrikan atau distributor resmi — kemasan tersegel, nutrisi terjaga, tanpa campur tangan perantara.",
  },
  {
    icon: Warehouse,
    title: "Stok Rutin Siaga Gudang",
    desc: "Gudang kami selalu dijaga ketersediaannya. Rotasi stok dilakukan secara berkala agar pakan yang sampai ke tangan peternak tetap segar dan bermutu optimal.",
  },
  {
    icon: BadgeDollarSign,
    title: "Harga Fleksibel Ecer & Skala Tonase",
    desc: "Kami melayani mulai dari 1 sak eceran hingga pengiriman muatan armada tonase. Harga disesuaikan dengan volume pembelian agar efisiensi ransum pakan Anda terjaga.",
  },
  {
    icon: Truck,
    title: "Armada Pengiriman Siap Antar",
    desc: "Dilengkapi armada pengiriman sendiri yang siap mengantarkan pakan langsung ke kandang Anda — menghemat waktu, tenaga, dan biaya logistik tambahan.",
  },
];

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="relative min-h-[480px] sm:min-h-[520px] w-full flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/tentang-kami (1).png"
          alt="Operasional Gudang Toko Pakan Hasrat Kerja"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Tentang Toko Pakan Hasrat Kerja
          </h1>
          <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Dedikasi kami menyediakan pakan konsentrat, pollard gandum, dan bahan baku ternak berkualitas tinggi —
            melayani kebutuhan eceran sak hingga distribusi armada tonase langsung ke kandang Anda.
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
                  Profil Usaha
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-5">
                  Suplai Pakan dari Sumber<br className="hidden sm:block" /> Tangan Pertama
                </h2>
                <div className="space-y-4 text-justify text-slate-600 leading-relaxed text-sm sm:text-base">
                  <p>
                    <strong className="text-slate-900 font-semibold">Toko Pakan Hasrat Kerja</strong> beroperasi di Senggrong, Kecamatan Andong, Boyolali — melayani peternak sapi penggemukan, sapi perah, dan ruminansia di wilayah Boyolali dan sekitarnya sejak bertahun-tahun.
                  </p>
                  <p>
                    Kami menjalin hubungan langsung dengan pabrikan dan distributor resmi — memangkas rantai pasok agar harga lebih efisien dan kualitas nutrisi tetap terjaga di setiap sak yang keluar dari gudang kami.
                  </p>
                  <p>
                    Stok gudang kami selalu dijaga secara rutin. Baik peternak skala rumah tangga yang membutuhkan beberapa sak, maupun pengusaha ternak yang memerlukan muatan armada penuh — kami siap melayani dengan sistem harga yang transparan dan pengiriman langsung ke lokasi kandang.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "100+", label: "Produk Pakan Tersedia" },
                  { value: "Tonase", label: "Kapasitas Suplai Armada" },
                  { value: "Harian", label: "Rotasi Stok Gudang" },
                  { value: "Boyolali", label: "Pusat Distribusi Utama" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-center"
                  >
                    <span className="text-2xl sm:text-3xl font-black text-[#1b5e20] leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="border-t border-slate-200/70 mb-16" />

          <section className="mb-16">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
                Komitmen Kami
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                4 Pilar Keunggulan Layanan
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex gap-4 p-6 rounded-2xl border border-slate-200/80 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1b5e20]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-1.5 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="bg-[#1b5e20] rounded-2xl px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug mb-2">
                  Butuh Konsultasi Kebutuhan Pakan?
                </h3>
                <p className="text-emerald-100/80 text-sm sm:text-base max-w-xl">
                  Tim kami siap membantu Anda menentukan jenis, takaran, dan jadwal suplai pakan yang paling efisien untuk ternak Anda. Hubungi kami sekarang tanpa biaya konsultasi.
                </p>
              </div>
              <Link
                href="https://wa.me/6285718756267?text=Halo%20Toko%20Pakan%20Hasrat%20Kerja%2C%20saya%20ingin%20konsultasi%20kebutuhan%20pakan%20ternak."
                target="_blank"
                rel="noopener noreferrer"
                className="group shrink-0 inline-flex items-center gap-2 bg-white text-[#1b5e20] font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md transition-all duration-300 ease-out hover:bg-slate-100 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-[#1b5e20] transition-transform duration-300 group-hover:scale-110" />
                <span>Pesan &amp; Konsultasi via WhatsApp</span>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
