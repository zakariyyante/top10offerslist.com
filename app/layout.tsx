import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

const GA_MEASUREMENT_ID = "AW-18039163248"; // Updated with user's ID
const CONVERSION_LABEL = "XXXXXXXXXXXX"; // Replace with actual label if provided

export const metadata: Metadata = {
  title: "Top 10 Betting Sites UK | Best Bonuses & Reviews 2026",
  description: "Expert reviews of the top 10 betting sites in the UK. Find the best bonuses, rapid payouts, and licensed operators.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${orbitron.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  // window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': '${GA_MEASUREMENT_ID}/${CONVERSION_LABEL}',
                  'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-[#0f0720] text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
