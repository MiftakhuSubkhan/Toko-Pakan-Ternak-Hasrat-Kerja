import React from "react";
import { Tag, Truck, ShieldCheck, Store } from "lucide-react";

interface Feature {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: Tag,
    title: "Harga Tangan Pertama",
    description:
      "Pasokan langsung dari distributor pabrik untuk efisiensi modal dan keuntungan usaha ternak Anda.",
  },
  {
    id: 2,
    icon: Truck,
    title: "Armada Suplai Tonase",
    description:
      "Armada siap kirim pesanan partai besar langsung sampai ke depan pintu kandang Anda tepat waktu.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Jaminan Mutu Pabrikan",
    description:
      "Kualitas nutrisi pakan asli terstandar resmi, teruji aman, dan tersimpan baik di gudang.",
  },
  {
    id: 4,
    icon: Store,
    title: "Layanan Eceran & Grosir",
    description:
      "Bebas belanja kebutuhan sak eceran di toko fisik maupun suplai rutin skala kemitraan kios.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="tentang" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-slate-600 text-center mt-3 text-base md:text-lg max-w-3xl mx-auto whitespace-normal lg:whitespace-nowrap">
            Solusi pasokan pakan berkualitas, harga bersaing, dan armada kirim siap jalan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-start"
              >
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl w-fit mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
