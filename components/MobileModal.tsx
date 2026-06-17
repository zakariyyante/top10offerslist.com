"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { brands } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Image from "next/image";

export default function MobileModal() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const gclid = searchParams.get("gclid");

  useEffect(() => {
    const mobileBrands = brands.filter((b) => b.isMobile);
    if (gclid && mobileBrands.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(true);
    }
  }, [gclid]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter((b) => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-[#020a0a] overflow-y-auto">
      <div className="min-h-screen flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-[110] bg-[#020a0a]/95 backdrop-blur-md border-b border-[#00bfa5]/20 p-4 flex justify-between items-center">
          <div className="relative w-32 h-8">
            <Image src="/logo.png" alt="Logo" fill className="object-contain object-left" />
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#00bfa5] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 flex-grow max-w-2xl mx-auto w-full">
          <div className="text-center mb-12 pt-6">
            <div className="inline-block px-4 py-1 rounded-full bg-[#ff8c00]/10 border border-[#ff8c00]/20 text-[10px] font-black text-[#ff8c00] uppercase tracking-[0.3em] mb-6">
              MOBILE EXCLUSIVE
            </div>
            <h2 className="text-3xl font-black text-white mb-4 font-orbitron uppercase tracking-tighter">ELITE MOBILE APPS</h2>
            <p className="text-white/40 text-sm font-bold uppercase tracking-wider">Top-tier UK betting optimized for your device.</p>
          </div>

          <div className="grid gap-8 mb-16">
            {mobileBrands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} rank={index + 1} gclid={gclid || undefined} />
            ))}
          </div>

          {/* Modal Disclaimer */}
          <div className="brand-card-bg rounded-2xl p-6 border-l-4 border-red-600 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-black text-white">18+</span>
              <span className="text-white font-black text-xs uppercase tracking-widest">RESPONSIBLE PLAY</span>
            </div>
            <p className="text-[10px] text-white/30 leading-relaxed font-bold uppercase tracking-tighter">
              Bettors must be 18+. T&Cs apply to all offers. Visit BeGambleAware.org for professional support and guidance.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#010505] border-t border-[#00bfa5]/10 p-10 text-center">
          <span className="text-[9px] text-white/10 font-black uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} TOP10OFFERSLIST.COM
          </span>
        </div>
      </div>
    </div>
  );
}
