"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isTentangKamiPage = pathname === "/tentang-kami";
  const shouldBeSolid = (!isHomePage && !isTentangKamiPage) || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Dokumentasi", href: "/dokumentasi" },
    { name: "Lokasi", href: "/lokasi" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldBeSolid
          ? "bg-[#1b5e20] backdrop-blur-md shadow-md border-b border-[#144718] py-3.5"
          : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white p-1.5 rounded-xl shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/logo-hk.png"
                alt="Logo Hasrat Kerja"
                width={36}
                height={36}
                priority
                className="h-9 w-9 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-black tracking-wide text-white drop-shadow-md block leading-tight group-hover:text-emerald-200 transition-colors">
                TOKO PAKAN HASRAT KERJA
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-emerald-300 drop-shadow block">
                Distributor Pakan Ternak &amp; Pertanian
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7 text-sm font-semibold text-white/90">
              {navLinks.map((link) => {
                const isActive = link.href.startsWith("/")
                  ? link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href)
                  : false;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`font-semibold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-emerald-300 after:transition-all after:duration-300 drop-shadow-sm hover:text-emerald-200 ${isActive
                          ? "text-emerald-200 after:w-full"
                          : "text-white hover:after:w-full after:w-0"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="https://wa.me/6285718756267?text=Halo%20Toko%20Pakan%20Hasrat%20Kerja,%20saya%20ingin%20tanya%20informasi%20pakan%20ternak"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-[#1b5e20] font-semibold text-sm px-5 py-2.5 rounded-full shadow-md transition-all duration-300 ease-out hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-[#1b5e20] transition-transform duration-300 group-hover:scale-110" />
              <span>Kontak</span>
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-emerald-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
              aria-expanded={isMobileMenuOpen}
              aria-label="Buka Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-emerald-300" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#1b5e20]/40 bg-[#1b5e20]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200 mt-3 rounded-b-2xl mx-2">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = link.href.startsWith("/")
                ? link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href)
                : false;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${isActive
                        ? "text-white bg-white/10 font-semibold"
                        : "text-white hover:text-emerald-200 hover:bg-black/20"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="pt-2">
            <Link
              href="https://wa.me/6285718756267?text=Halo%20Toko%20Pakan%20Hasrat%20Kerja,%20saya%20ingin%20tanya%20informasi%20pakan%20ternak"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group w-full flex items-center justify-center gap-2 bg-white text-[#1b5e20] py-3 px-4 rounded-xl font-bold text-center shadow-md transition-all duration-300 ease-out hover:bg-slate-100 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 text-[#1b5e20] transition-transform duration-300 group-hover:scale-110" />
              <span>Hubungi Kontak Kami</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
