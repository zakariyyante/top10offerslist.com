export default function Hero() {
  const year = new Date().getFullYear();

  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-[#020a0a]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(0,191,165,0.1),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#ff8c00]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-[#00bfa5]/20 mb-10 backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bfa5] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00bfa5]"></span>
          </span>
          <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
            UK&apos;s #1 {year} Betting Authority
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] font-orbitron">
          THE <span className="text-[#00bfa5]">TOP 10</span> <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00bfa5] to-[#ff8c00]">OFFERS LIST</span>
        </h1>

        <p className="text-lg md:text-2xl text-white/50 mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
          Elite-tier betting sites, hand-picked by experts. <br className="hidden md:block"/>
          Access exclusive bonuses and rapid-fire payouts today.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { label: "UKGC LICENSED", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { label: "EXPERT REVIEWS", icon: "M5 13l4 4L19 7" },
            { label: "FAST WITHDRAWALS", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00bfa5]/50 transition-colors">
                <svg className="w-6 h-6 text-[#00bfa5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <span className="text-[10px] font-black text-white/40 tracking-widest uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
