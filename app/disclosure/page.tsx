import Link from "next/link";

export default function AffiliateDisclosure() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-black text-white mb-8 font-orbitron uppercase tracking-tighter">
        AFFILIATE <span className="text-[#00bfa5]">DISCLOSURE</span>
      </h1>
      <div className="h-1 w-20 bg-[#ff8c00] mb-12" />
      
      <div className="prose prose-invert max-w-none text-white/70 space-y-8 font-medium leading-relaxed">
        <section className="brand-card-bg p-8 rounded-3xl border-l-4 border-[#00bfa5]">
          <p className="text-lg">
            Top10OffersList.com is a professional review site that receives compensation from the companies whose products we review. We test each product thoroughly and give high marks to only the very best. We are independently owned and the opinions expressed here are our own.
          </p>
        </section>

        <div className="space-y-6">
          <h2 className="text-2xl font-black text-white font-orbitron uppercase tracking-tight">How We Make Money</h2>
          <p>
            To keep our service 100% free for users, we receive advertising compensation from the betting operators that are featured on this website. This compensation, also known as &quot;affiliate commission,&quot; is paid when a user clicks on a link and subsequently performs an action (such as signing up or making a deposit).
          </p>

          <h2 className="text-2xl font-black text-white font-orbitron uppercase tracking-tight">Editorial Integrity</h2>
          <p>
            While the compensation we receive may influence the positioning of brands on our site (such as their order in a list), it does not influence the factual information provided in our reviews. Our team of experts independently evaluates each operator based on strict criteria including licensing, security, payout speed, and bonus fairness.
          </p>

          <h2 className="text-2xl font-black text-white font-orbitron uppercase tracking-tight">User Responsibility</h2>
          <p>
            We encourage all users to read the terms and conditions of any betting site before signing up. Top10OffersList.com is not responsible for any losses incurred while gambling on third-party sites.
          </p>
        </div>

        <div className="pt-12 border-t border-white/10">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00bfa5] font-black uppercase tracking-widest hover:text-[#ff8c00] transition-colors">
            <span>←</span> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
