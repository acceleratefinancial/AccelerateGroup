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
              Accelerate Financial provides specialised personal and business loans with competitive rates and repayments across Australia
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
                  Business Loans
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
                  Home Loans
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

          {/* Column 5: Google Map Preview (A bit bigger, no text) */}
          <div className="lg:col-span-4 md:col-span-2 pt-2">
            <a
              href="https://maps.google.com/?q=113B+Ledger+Road+Beverley+South+Australia+5009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View office location on Google Maps"
              className="block group rounded-xl overflow-hidden border border-slate-700/80 bg-slate-800/50 shadow-md max-w-[320px] hover:border-[#00c5d6]/60 transition-all"
            >
              <div className="relative aspect-[16/10] w-full min-h-[150px]">
                <Image
                  src="/images/home/footer-map.png"
                  alt="Accelerate Head Office Map Location"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#00c5d6]/5 group-hover:bg-transparent transition-colors" />
              </div>
            </a>
          </div>
        </div>

        {/* Industry Accreditation & Compliance Badges */}
        <div className="pt-8 pb-6 border-b border-slate-800/80 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {/* AFCA */}
          <div className="relative h-8 sm:h-9 w-28 sm:w-32 opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src="/images/compliance/afca-white.png"
              alt="Australian Financial Complaints Authority (AFCA) Member"
              fill
              className="object-contain"
            />
          </div>

          {/* FBAA */}
          <div className="relative h-8 sm:h-9 w-28 sm:w-32 opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src="/images/compliance/fbaa.png"
              alt="Finance Brokers Association of Australia (FBAA) Member"
              fill
              className="object-contain"
            />
          </div>

          {/* I CHOOSE SA */}
          <div className="relative h-9 sm:h-11 w-9 sm:w-11 opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src="/images/compliance/ichoosesa.png"
              alt="I Choose SA Proud Supporter"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Bar: Facebook Circle & Copyright Links matching current website */}
        <div className="pt-8 flex flex-col items-center justify-center text-center space-y-4 text-xs text-slate-400">
          {/* Facebook Circle Icon matching current website */}
          <a
            href="https://www.facebook.com/acceleratefinancial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-slate-500/80 hover:bg-[#00c5d6] text-white flex items-center justify-center transition-all shadow-md hover:scale-105"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>

          {/* Copyright Text & Links */}
          <div className="text-xs sm:text-[13px] text-slate-400 font-normal">
            Copyright Accelerate Group {currentYear} |{" "}
            <a
              href="https://acceleratefinancial.com.au/privacy-policies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00c5d6] transition-colors"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="https://acceleratefinancial.com.au/compliments-concerns"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00c5d6] transition-colors"
            >
              Compliments &amp; Concerns
            </a>{" "}
            |{" "}
            <Link
              href="/forms"
              className="hover:text-[#00c5d6] transition-colors"
            >
              Forms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

