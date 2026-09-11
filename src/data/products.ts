export interface Product {
  id: number;
  name: string;
  packaging: string;
  stock: string;
  priceNote: string;
  image: string;
}

export const cowProducts: Product[] = [
  {
    id: 1,
    name: "Pollard Gandum Cap Angsa",
    packaging: "Sak 50 kg",
    stock: "Ready Gudang",
    priceNote: "Sistem Harga: Eceran & Grosir Berbeda",
    image: "/images/PU-1 (1).jpg",
  },
  {
    id: 2,
    name: "Brand Pollard Cilacap",
    packaging: "Sak 50 kg",
    stock: "Ready Gudang",
    priceNote: "Sistem Harga: Eceran & Grosir Berbeda",
    image: "/images/PU-1 (2).jpg",
  },
  {
    id: 3,
    name: "Wheat Bran Daun Sriboga",
    packaging: "Sak 50 kg",
    stock: "Ready Gudang",
    priceNote: "Sistem Harga: Eceran & Grosir Berbeda",
    image: "/images/PU-1 (3).jpg",
  },
  {
    id: 4,
    name: "Bran Kepala Kuda",
    packaging: "Sak 50 kg",
    stock: "Ready Gudang",
    priceNote: "Sistem Harga: Eceran & Grosir Berbeda",
    image: "/images/PU-1 (4).jpg",
  },
  {
    id: 5,
    name: "Pelet Wilmar",
    packaging: "Sak 45 kg",
    stock: "Ready Gudang",
    priceNote: "Sistem Harga: Eceran & Grosir Berbeda",
    image: "/images/pelet-wilmar(1).jpg",
  },
  {
    id: 6,
    name: "Pollard Tongkat Emas",
    packaging: "Sak 50 kg",
    stock: "Ready Gudang",
    priceNote: "Sistem Harga: Eceran & Grosir Berbeda",
    image: "/images/tongkat-emas(1).png",
  },
];
