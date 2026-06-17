import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-orbitron uppercase tracking-tighter">
          CONTACT <span className="text-[#00bfa5]">US</span>
        </h1>
        <div className="h-1 w-20 bg-[#ff8c00] mx-auto mb-10" />
        <p className="text-lg text-white/40 font-medium leading-relaxed max-w-2xl mx-auto">
          Have a question or feedback? We&apos;d love to hear from you. Our team is here to help you with any inquiries regarding our reviews or betting offers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="brand-card-bg p-10 rounded-3xl border-l-4 border-[#00bfa5]">
          <h3 className="text-xl font-black text-white mb-6 font-orbitron uppercase tracking-tight">Email Support</h3>
          <p className="text-white/50 mb-8 font-bold text-sm uppercase tracking-wide">
            For general inquiries, partnership opportunities, or support, please reach out to us via email:
          </p>
          <a href="mailto:support@top10offerslist.com" className="text-2xl font-black text-[#00bfa5] hover:text-[#ff8c00] transition-colors break-all">
            support@top10offerslist.com
          </a>
        </div>

        <div className="brand-card-bg p-10 rounded-3xl border-l-4 border-[#ff8c00]">
          <h3 className="text-xl font-black text-white mb-6 font-orbitron uppercase tracking-tight">Operating Hours</h3>
          <p className="text-white/50 mb-4 font-bold text-sm uppercase tracking-wide">
            Monday - Friday: 9:00 AM - 6:00 PM GMT
          </p>
          <p className="text-white/50 mb-8 font-bold text-sm uppercase tracking-wide">
            Saturday - Sunday: Closed
          </p>
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-black">
            We aim to respond to all inquiries within 24-48 hours.
          </p>
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-[#00bfa5] font-black uppercase tracking-widest hover:text-[#ff8c00] transition-colors">
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}
