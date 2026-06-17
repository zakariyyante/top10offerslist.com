import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-black text-white mb-8 font-orbitron uppercase tracking-tighter">
        COOKIE <span className="text-[#00bfa5]">POLICY</span>
      </h1>
      <div className="h-1 w-20 bg-[#ff8c00] mb-12" />
      
      <div className="prose prose-invert max-w-none text-white/70 space-y-8 font-medium leading-relaxed">
        <p>
          This Cookie Policy explains how Top10OffersList.com (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies when you visit our website.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-black text-white font-orbitron uppercase tracking-tight">What are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
          </p>

          <h2 className="text-2xl font-black text-white font-orbitron uppercase tracking-tight">How We Use Cookies</h2>
          <p>
            We use cookies for several reasons:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly.</li>
            <li><strong>Affiliate Tracking:</strong> We use cookies to track when you click on an affiliate link. This allows us to receive a commission from the betting operator.</li>
            <li><strong>Analytics:</strong> We use cookies to understand how visitors interact with our site, which helps us improve our content and user experience.</li>
          </ul>

          <h2 className="text-2xl font-black text-white font-orbitron uppercase tracking-tight">Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
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
