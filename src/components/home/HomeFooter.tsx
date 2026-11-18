import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function HomeFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06122d] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block relative w-[220px] h-[52px]">
              <Image
                src="/images/home/footer-logo.png"
                alt="Accelerate Financial"
                fill
                className="object-contain object-left"
              />
            </Link>

            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-sm">
              Accelerate Financial provides specialized mortgage, vehicle, and commercial finance structuring with competitive rates and seasoned advisory across Australia.
            </p>

            <div className="space-y-2 text-xs sm:text-[13px] text-slate-300 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00c5d6] shrink-0 mt-0.5" />
                <span>113B Ledger Road, Beverley, SA 5009</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00c5d6] shrink-0" />
                <a href="tel:0883481000" className="hover:text-[#00c5d6] transition-colors">
                  (08) 8348 1000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00c5d6] shrink-0" />
                <a href="mailto:approvals@acceleratefinancial.com.au" className="hover:text-[#00c5d6] transition-colors">
                  approvals@acceleratefinancial.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Explore (col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 inline-block">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/" className="hover:text-[#00c5d6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#00c5d6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#00c5d6] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-[#00c5d6] transition-colors">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/client-referral" className="hover:text-[#00c5d6] transition-colors">
                  Client Referral
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00c5d6] transition-colors">
                  Blog & Library
                </Link>
              </li>
              <li>
                <Link href="/apply-now" className="hover:text-[#00c5d6] transition-colors text-[#00c5d6] font-semibold">
                  Apply Now →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Loan Services (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 inline-block">
              Loan Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/services#personal-details" className="hover:text-[#00c5d6] transition-colors">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link href="/services#business-details" className="hover:text-[#00c5d6] transition-colors">
                  Commercial &amp; Business
                </Link>
              </li>
              <li>
                <Link href="/services#salary-details" className="hover:text-[#00c5d6] transition-colors">
                  Salary Packaging
                </Link>
              </li>
              <li>
                <Link href="/services#car-details" className="hover:text-[#00c5d6] transition-colors">
                  Car Buying Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#home-details" className="hover:text-[#00c5d6] transition-colors">
                  Home &amp; Property Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Actions (col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 inline-block">
              Quick Actions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/calculator" className="hover:text-[#00c5d6] transition-colors">
                  Repayment Calculator
                </Link>
              </li>
              <li>
                <Link href="/client-referral" className="hover:text-[#00c5d6] transition-colors">
                  Refer a Client
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#00c5d6] transition-colors">
                  Leave a Message
                </Link>
              </li>
              <li>
                <Link href="/apply-now" className="hover:text-[#00c5d6] transition-colors text-[#00c5d6] font-semibold">
                  Start Online Application →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Google Map Preview (col-span-2) */}
          <div className="lg:col-span-2">
            <a
              href="https://maps.google.com/?q=113B+Ledger+Road+Beverley+South+Australia+5009"
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-xl overflow-hidden border border-slate-700 bg-slate-800/50 shadow-md"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/home/footer-map.png"
                  alt="Accelerate Head Office Map Location"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#00c5d6]/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-2 text-center bg-slate-900/90 text-[11px] font-semibold text-slate-300 group-hover:text-[#00c5d6] transition-colors">
                View on Google Maps
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          {/* Social Icons on Left */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/acceleratefinancial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00c5d6] text-white flex items-center justify-center transition-colors shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00c5d6] text-white flex items-center justify-center transition-colors shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00c5d6] text-white flex items-center justify-center transition-colors shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#00c5d6] text-white flex items-center justify-center transition-colors shadow-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Copyright Right */}
          <p>© Copyright {currentYear} Accelerate Group</p>
        </div>
      </div>
    </footer>
  );
}

