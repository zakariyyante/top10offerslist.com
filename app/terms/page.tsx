import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-black text-white mb-8">Terms of Service</h1>
      <div className="prose prose-invert max-w-none text-white/70 space-y-6">
        <p>
          By accessing Top10OffersList.com, you agree to be bound by these Terms of Service and all applicable laws and regulations in the United Kingdom.
        </p>
        
        <h2 className="text-2xl font-bold text-white mt-12">1. Eligibility</h2>
        <p>
          You must be at least 18 years of age to use this website. By using this site, you represent and warrant that you meet this age requirement.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">2. Use of Content</h2>
        <p>
          The content on Top10OffersList.com is for informational purposes only. We do not provide gambling services ourselves. All betting activity takes place on the third-party sites we link to.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">3. Responsible Gambling</h2>
        <p>
          We promote responsible gambling. If you feel you have a gambling problem, we strongly urge you to seek help from organizations like{" "}
          <Link href="https://www.begambleaware.org" className="text-[#ff8c00] hover:underline" target="_blank">
            BeGambleAware
          </Link>{" "}
          or{" "}
          <Link href="https://www.gamstop.co.uk" className="text-[#ff8c00] hover:underline" target="_blank">
            GAMSTOP
          </Link>.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">4. Limitation of Liability</h2>
        <p>
          We are not liable for any losses incurred while gambling on third-party sites. Users are responsible for verifying the terms and conditions of any offer before participating.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">5. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of England and Wales.
        </p>
      </div>
    </div>
  );
}
