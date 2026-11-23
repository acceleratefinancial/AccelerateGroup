import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import ExternalFormEmbed from "@/components/shared/ExternalFormEmbed";
import { ShieldCheck, Lock, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply Online Now – Accelerate Financial",
  description:
    "Submit your loan application securely online. Our team compares 40+ lenders to secure competitive rates and fast approvals.",
};

export default function ApplyNowPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="Apply Online Now"
          eyebrow="Secure Portal"
          description="Call us on 0883481000 or complete your digital application now. Our team compares 40+ lenders across Australia to deliver competitive finance solutions."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Apply Now" },
          ]}
        />

        {/* Form Container Section */}
        <section className="py-16 lg:py-24 bg-[#f8fafc]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Trust Badges Bar */}
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 text-center">
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-2xs">
                <Lock className="w-5 h-5 text-[#00c5d6] mx-auto mb-1.5" />
                <span className="block text-xs font-bold text-[#06122d]">SSL Encrypted</span>
                <span className="text-[11px] text-slate-500">Bank-grade security</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-2xs">
                <Clock className="w-5 h-5 text-[#00c5d6] mx-auto mb-1.5" />
                <span className="block text-xs font-bold text-[#06122d]">Fast Turnaround</span>
                <span className="text-[11px] text-slate-500">Prompt assessment</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-2xs">
                <Award className="w-5 h-5 text-[#00c5d6] mx-auto mb-1.5" />
                <span className="block text-xs font-bold text-[#06122d]">40+ Lenders</span>
                <span className="text-[11px] text-slate-500">Market-wide access</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#00c5d6] mx-auto mb-1.5" />
                <span className="block text-xs font-bold text-[#06122d]">Accredited</span>
                <span className="text-[11px] text-slate-500">Australian licensed</span>
              </div>
            </div>

            {/* Dedicated Responsive iframe Embed Component */}
            <div className="max-w-4xl mx-auto">
              <ExternalFormEmbed />
            </div>

            {/* Mobile QR Code Quick Scan Alternative */}
            <div className="max-w-4xl mx-auto mt-10 p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5 text-center sm:text-left">
                <div className="relative w-24 h-24 shrink-0 bg-white p-1 rounded-xl border border-gray-200 shadow-2xs">
                  <Image
                    src="/images/home/qr-apply.png"
                    alt="Scan to Apply on Mobile"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#06122d] mb-1">
                    Prefer to Apply on Your Mobile?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
                    Scan this QR code with your smartphone camera to open the application form directly on your mobile browser.
                  </p>
                </div>
              </div>

              <a
                href="https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-[#00c5d6] hover:bg-[#00b0c0] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition-all shadow-sm active:scale-95"
              >
                <span>Direct Link</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

