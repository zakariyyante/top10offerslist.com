import Link from "next/link";
import AboutSection from "@/components/About";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-orbitron uppercase tracking-tighter">
          ABOUT <span className="text-[#00bfa5]">US</span>
        </h1>
        <div className="h-1 w-20 bg-[#ff8c00] mx-auto mb-10" />
        <p className="text-lg text-white/40 font-medium leading-relaxed max-w-3xl mx-auto">
          We are a team of betting experts dedicated to providing the most accurate, up-to-date information on UK betting sites. Our mission is to help you find the best offers while ensuring a safe and responsible gambling experience.
        </p>
      </div>
      
      <AboutSection />
      
      <div className="container mx-auto px-4 py-24 max-w-4xl text-center">
        <h2 className="text-2xl font-black text-white font-orbitron uppercase tracking-tight mb-8">Our Commitment</h2>
        <p className="text-white/60 mb-12 leading-relaxed">
          Every site featured on Top10OffersList.com is fully licensed by the UK Gambling Commission. we never compromise on safety, and we only recommend sites that meet our rigorous standards for security, fairness, and customer support.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-[#00bfa5] font-black uppercase tracking-widest hover:text-[#ff8c00] transition-colors">
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}
