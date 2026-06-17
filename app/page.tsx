import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import Disclaimer from "@/components/Disclaimer";
import About from "@/components/About";
import MobileModal from "@/components/MobileModal";
import { brands } from "@/app/data/brands";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = typeof params.gclid === "string" ? params.gclid : undefined;

  return (
    <div className="flex flex-col min-h-screen bg-[#020a0a]">
      <Suspense>
        <MobileModal />
      </Suspense>
      
      <Hero />
      
      <section id="brands" className="py-32 relative">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(0,191,165,0.05),transparent_40%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-[#00bfa5]" />
                <span className="text-[10px] font-black text-[#00bfa5] uppercase tracking-[0.4em]">Verified Rankings</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-orbitron uppercase tracking-tighter">
                TOP 10 <span className="text-[#00bfa5]">UK</span> OPERATORS
              </h2>
              <p className="text-white/40 font-bold text-sm uppercase tracking-widest leading-relaxed">
                Our engine analyzed 50+ licensed operators using 20+ data points to identify the current market leaders.
              </p>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-[10px] text-white/20 uppercase tracking-[0.3em] mb-3 font-black">Data Refresh</div>
              <div className="inline-flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-[#00bfa5]/20">
                <span className="w-2 h-2 rounded-full bg-[#ff8c00] animate-pulse" />
                <span className="text-white font-black text-xs uppercase tracking-[0.2em]">JUNE 2026</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {brands.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                rank={index + 1} 
                gclid={gclid} 
              />
            ))}
          </div>
        </div>
      </section>

      <Disclaimer />
      
      <About />
      
      <section id="guide" className="py-32 bg-[#010505] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00bfa5]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-orbitron uppercase tracking-tighter">THE METHODOLOGY</h2>
            <div className="h-1 w-20 bg-[#00bfa5] mx-auto mb-10" />
            <p className="text-lg text-white/40 font-medium leading-relaxed max-w-3xl mx-auto">
              We don&apos;t just list sites; we stress-test them. Our 24-hour verification cycle ensures every brand on this list maintains the highest standards of security and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {[
              { val: "50+", label: "SITES AUDITED" },
              { val: "100%", label: "UKGC COMPLIANT" },
              { val: "24H", label: "PAYOUT TARGET" }
            ].map((stat, i) => (
              <div key={i} className="brand-card-bg p-8 rounded-2xl text-center group hover:border-[#00bfa5]/50 transition-colors">
                <div className="text-[#00bfa5] text-5xl font-black mb-3 font-orbitron group-hover:text-[#ff8c00] transition-colors">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
