import Link from "next/link";

export default function About() {
  return (
    <section className="py-32 bg-[#020a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_50%,rgba(0,191,165,0.03),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-orbitron uppercase tracking-tighter">
            OUR <span className="text-[#00bfa5]">RATING</span> ENGINE
          </h2>
          <div className="h-1 w-24 bg-[#ff8c00] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="brand-card-bg p-10 rounded-3xl relative group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-20 h-20 text-[#00bfa5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4 font-orbitron">
              <span className="w-10 h-10 rounded-xl bg-[#00bfa5]/10 flex items-center justify-center text-[#00bfa5]">01</span>
              EXPERT ANALYSIS
            </h3>
            <ul className="space-y-5">
              {[
                "Deep-dive into UKGC licensing status",
                "Real-money withdrawal speed verification",
                "Hidden T&C and bonus requirement audits",
                "Cross-platform mobile performance stress tests",
                "Live customer support response benchmarking"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white/50 group/item">
                  <span className="text-[#00bfa5] font-black mt-1 group-hover/item:text-[#ff8c00] transition-colors">»</span>
                  <span className="text-sm font-bold uppercase tracking-wider">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="brand-card-bg p-10 rounded-3xl border-l-4 border-[#ff8c00] relative group">
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4 font-orbitron">
              <span className="w-10 h-10 rounded-xl bg-[#ff8c00]/10 flex items-center justify-center text-[#ff8c00]">02</span>
              SAFE PLAY
            </h3>
            <p className="text-white/40 mb-10 leading-relaxed font-bold text-sm uppercase tracking-wide">
              We prioritize your safety above all else. Betting is a form of entertainment, and we only partner with operators who provide robust self-exclusion and limit-setting tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="https://www.gamstop.co.uk" 
                className="px-6 py-3 bg-white/5 hover:bg-[#ff8c00] hover:text-black border border-white/10 rounded-xl text-[10px] font-black text-white transition-all uppercase tracking-[0.2em]"
                target="_blank"
              >
                GAMSTOP
              </Link>
              <Link 
                href="https://www.begambleaware.org" 
                className="px-6 py-3 bg-white/5 hover:bg-[#00bfa5] hover:text-black border border-white/10 rounded-xl text-[10px] font-black text-white transition-all uppercase tracking-[0.2em]"
                target="_blank"
              >
                BEGAMBLEAWARE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
