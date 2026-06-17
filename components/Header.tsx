"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#020a0a]/90 backdrop-blur-md border-b border-[#00bfa5]/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-48 h-12">
            <Image
              src="/logo.png"
              alt="Top10OffersList"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:text-[#00bfa5] transition-colors">Home</Link>
          <Link href="/disclosure" className="text-sm font-bold uppercase tracking-widest hover:text-[#00bfa5] transition-colors">Disclosure</Link>
          <Link href="#guide" className="text-sm font-bold uppercase tracking-widest hover:text-[#00bfa5] transition-colors">Guide</Link>
          <Link href="/about" className="text-sm font-bold uppercase tracking-widest hover:text-[#00bfa5] transition-colors">About</Link>
          <Link href="/contact" className="px-5 py-2 bg-[#00bfa5] text-black text-xs font-black uppercase tracking-tighter rounded hover:bg-[#ff8c00] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#051414] border-b border-[#00bfa5]/20 py-6 px-4 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/" className="text-lg font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/disclosure" className="text-lg font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Disclosure</Link>
          <Link href="#guide" className="text-lg font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>Guide</Link>
          <Link href="/about" className="text-lg font-bold uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="text-lg font-bold uppercase tracking-widest text-[#00bfa5]" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
