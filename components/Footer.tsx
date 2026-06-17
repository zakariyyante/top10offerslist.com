import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#010505] border-t border-[#00bfa5]/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <Link href="/" className="relative w-64 h-16 mb-6">
            <Image
              src="/logo.png"
              alt="Top10OffersList"
              fill
              className="object-contain"
            />
          </Link>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#00bfa5] to-transparent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-5">
            <h4 className="text-[#00bfa5] font-black uppercase text-[10px] tracking-[0.3em]">Navigation</h4>
            <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold">Home</Link>
            <Link href="/disclosure" className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold">Disclosure</Link>
            <Link href="#guide" className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold">Review Guide</Link>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-[#00bfa5] font-black uppercase text-[10px] tracking-[0.3em]">Legal Info</h4>
            <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold">Privacy</Link>
            <Link href="/terms" className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold">Terms</Link>
            <Link href="/cookies" className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold">Cookies</Link>
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <h4 className="text-[#00bfa5] font-black uppercase text-[10px] tracking-[0.3em]">Compliance</h4>
            <p className="text-xs text-white/30 leading-relaxed font-medium">
              Top10OffersList.com is an independent review hub. We operate as an affiliate and may receive compensation from the brands featured. Our mission is to provide transparent, expert-led data to UK bettors. We are fully compliant with UKGC regulations and advocate for responsible gambling at all times.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 py-10 border-y border-white/5 mb-10">
          <div className="flex items-center gap-2 grayscale opacity-30 hover:opacity-100 transition-all cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-[10px]">18+</div>
            <span className="text-[10px] text-white font-black tracking-widest">ADULTS ONLY</span>
          </div>
          <div className="relative w-32 h-8 grayscale opacity-30 hover:opacity-100 transition-all cursor-pointer">
            <Image src="/gambleaware.png" alt="BeGambleAware" fill className="object-contain" />
          </div>
          <div className="relative w-32 h-8 grayscale opacity-30 hover:opacity-100 transition-all cursor-pointer">
            <Image src="/gamestop.png" alt="GamStop" fill className="object-contain" />
          </div>
          <div className="relative w-32 h-8 grayscale opacity-30 hover:opacity-100 transition-all cursor-pointer">
            <Image src="/gamcare.png" alt="GamCare" fill className="object-contain" />
          </div>
        </div>

        <div className="text-center text-[9px] text-white/10 font-black uppercase tracking-[0.5em]">
          © {year} TOP10OFFERSLIST.COM • ELITE BETTING REVIEWS
        </div>
      </div>
    </footer>
  );
}
