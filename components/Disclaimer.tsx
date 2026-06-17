import Link from "next/link";

export default function Disclaimer() {
  return (
    <div className="bg-[#051414] border-y border-[#00bfa5]/10 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="flex items-center gap-3 bg-red-600/10 px-4 py-2 rounded-lg border border-red-600/20">
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-xs">
            18+
          </div>
          <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">Adults Only</span>
        </div>
        <p className="text-[11px] text-white/40 max-w-4xl font-medium leading-relaxed">
          Gamble Responsibly. Betting should be entertainment, not a source of income. If you need support, visit{" "}
          <Link href="https://www.begambleaware.org" className="text-[#00bfa5] hover:text-[#ff8c00] font-bold underline decoration-[#00bfa5]/30" target="_blank">
            BeGambleAware.org
          </Link>
          . Helpline: <span className="text-white font-black">0808 8020 133</span>. All featured brands are UKGC licensed.
        </p>
      </div>
    </div>
  );
}
