import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  initials: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    initials: "PJ",
    name: "Pak Joko",
    role: "Peternak Sapi Potong • Ampel",
    text: "Pasokan pollard dan konsentrat selalu tepat waktu. Kualitas pakan terjaga bikin bobot sapi stabil naik, armada kirimnya juga bisa langsung masuk kandang.",
  },
  {
    id: 2,
    initials: "MD",
    name: "Mas Danang",
    role: "Pemilik Kios Pakan • Andong",
    text: "Ambil grosir di Hasrat Kerja harganya masuk banget buat dijual lagi di kios. Barangnya komplet dan setiap datang sak selalu dalam kondisi rapi utuh.",
  },
  {
    id: 3,
    initials: "PS",
    name: "Pak Slamet",
    role: "Peternak Mandiri • Klego",
    text: "Beli eceran beberapa sak tetap dilayani ramah di toko. Penjelasannya jujur soal perbedaan pakan, harga juga sangat bersahabat buat peternak kecil.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Apa Kata Peternak?
          </h2>
          <p className="text-slate-600 mt-3 text-base md:text-lg max-w-2xl mx-auto whitespace-normal lg:whitespace-nowrap">
            Pengalaman nyata dari peternak mandiri hingga pemilik kios mitra kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-slate-700 text-base leading-relaxed italic mb-8">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
