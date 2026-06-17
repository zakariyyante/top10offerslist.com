"use client";

import Image from "next/image";
import { Brand } from "@/app/data/brands";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: Brand;
  rank: number;
  gclid?: string;
}

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => void;
  }
}

export default function BrandCard({ brand, rank, gclid }: BrandCardProps) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    if (url.endsWith("=")) return `${url}${gclidValue}`;
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}clickid=${gclidValue}`;
  };

  const finalUrl = buildUrl(brand.url, gclid);

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    track("Brand Click", { brand: brand.name });
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    }
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      onClick={handleAction}
      className="brand-card-bg relative group cursor-pointer transition-all hover:translate-y-[-4px] hover:tech-glow rounded-2xl overflow-hidden flex flex-col h-full"
    >
      {/* Rank Badge */}
      <div className="absolute top-0 left-0 w-12 h-12 bg-[#00bfa5] flex items-center justify-center z-10 rounded-br-2xl">
        <span className="text-black font-black text-xl font-orbitron">{rank}</span>
      </div>
      
      {/* Decorative Shimmer */}
      <div className="absolute inset-0 shimmer-fast pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-8 flex flex-col h-full relative z-20">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full h-24 bg-white/5 rounded-xl p-4 flex items-center justify-center border border-white/5 group-hover:border-[#00bfa5]/30 transition-colors">
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain p-4"
            />
          </div>
          
          <div className="mt-6 flex items-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-white font-orbitron leading-none">{brand.rating.toFixed(1)}</span>
              <span className="text-[10px] text-[#00bfa5] font-bold tracking-widest uppercase mt-1">Rating</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="flex flex-col">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-3 h-3 ${i < Math.floor(brand.rating / 2) ? "text-[#ff8c00] fill-[#ff8c00]" : "text-white/10 fill-white/10"}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[9px] text-white/30 uppercase tracking-tighter mt-1">{brand.votes} verified votes</span>
            </div>
          </div>
        </div>

        <div className="flex-grow text-center mb-8">
          <h3 className="text-white font-black text-xl mb-4 font-orbitron uppercase tracking-tight group-hover:text-[#00bfa5] transition-colors">
            {brand.name}
          </h3>
          <div className="bg-[#00bfa5]/5 border border-[#00bfa5]/20 rounded-xl p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#00bfa5]" />
            <p className="text-white font-bold text-sm leading-tight uppercase tracking-wide">
              {brand.bonus}
            </p>
          </div>
        </div>

        <button 
          className="w-full py-5 bg-[#00bfa5] hover:bg-[#ff8c00] text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(0,191,165,0.2)] hover:shadow-[0_0_25px_rgba(255,140,0,0.3)] active:scale-95"
        >
          CLAIM OFFER
        </button>
        
        <p className="text-[9px] text-white/20 mt-4 text-center leading-tight uppercase tracking-tighter">
          T&Cs Apply • 18+ Only • New Customers
        </p>
      </div>
    </div>
  );
}
