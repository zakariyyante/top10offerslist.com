import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-black text-white mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none text-white/70 space-y-6">
        <p>
          Welcome to Top10OffersList.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
        </p>
        
        <h2 className="text-2xl font-bold text-white mt-12">1. Information We Collect</h2>
        <p>
          We do not require users to register or provide personal information to browse our site. However, we may collect non-personal information such as your IP address, browser type, and pages visited to improve our service.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">2. Cookies</h2>
        <p>
          We use cookies to enhance your experience and track affiliate referrals. By using our site, you consent to our use of cookies in accordance with our Cookie Policy.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">3. Affiliate Disclosure</h2>
        <p>
          Top10OffersList.com is an affiliate marketing website. This means that when you click on links to betting brands on our site and make a deposit, we may receive a commission. This does not affect the cost to you or our editorial integrity.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">4. Third-Party Links</h2>
        <p>
          Our site contains links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to read the privacy policies of any site you visit.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us via our{" "}
          <Link href="/contact" className="text-[#ff8c00] hover:underline">
            Contact Us
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
