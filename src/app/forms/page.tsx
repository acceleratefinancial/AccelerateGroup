import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionEyebrow from "@/components/shared/SectionEyebrow";
import {
  FileText,
  Download,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Forms – Accelerate Financial Solutions",
  description:
    "Official forms and downloads for Accelerate Financial Solutions: Credit Guide, Privacy Consent, and Application Form.",
};

const formsList = [
  {
    title: "Credit Guide",
    filename: "Credit-Guide.pdf",
    url: "https://acceleratefinancial.com.au/Forms/Credit-Guide.pdf",
    tag: "Statutory Disclosure",
    icon: ShieldCheck,
    description:
      "Essential information regarding our credit services, Australian Credit Licence obligations, fee structures, broker commissions, and dispute resolution procedures with the Australian Financial Complaints Authority (AFCA).",
    highlights: [
      "Australian Credit Licence details",
      "Broker duties & fee structure",
      "Internal & AFCA dispute procedures",
    ],
  },
  {
    title: "Privacy Consent",
    filename: "Privacy-Consent.pdf",
    url: "https://acceleratefinancial.com.au/Forms/Privacy-Consent.pdf",
    tag: "Privacy & Authorisation",
    icon: FileText,
    description:
      "Statutory privacy disclosure and consent authorisation allowing Accelerate Financial Solutions to collect, verify, and exchange your financial information with our panel of 40+ Australian lenders and credit reporting bodies.",
    highlights: [
      "Credit reporting body authorisation",
      "Lender panel data exchange",
      "Privacy Act 1988 compliance",
    ],
  },
  {
    title: "Application Form",
    filename: "Personal-Living-Exp.pdf",
    url: "https://acceleratefinancial.com.au/Forms/Personal-Living-Exp.pdf",
    tag: "Loan Application",
    icon: FileSpreadsheet,
    description:
      "Standard paper loan application and personal living expenses schedule required by lenders for comprehensive borrowing capacity calculations, affordability checks, and responsible lending assessment.",
    highlights: [
      "Personal & employment details",
      "Household living expenses schedule",
      "Assets & liabilities declaration",
    ],
  },
];

export default function FormsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="Forms"
          eyebrow="Official Documentation & Downloads"
          description="Access and download our official Credit Guide, Privacy Consent, and Application Form. Please contact our team if you need any additional information."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Forms" },
          ]}
        />

        {/* 3 Core Forms Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionEyebrow text="Documentation" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06122d] leading-tight mb-3">
                Official Brokerage Forms
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Download the 3 official compliance and application forms below.
              </p>
            </div>

            {/* 3-Column Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {formsList.map((form) => {
                const Icon = form.icon;
                return (
                  <div
                    key={form.title}
                    className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#00c5d6]/50 relative"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200/60">
                          {form.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold text-[#06122d] mb-3 group-hover:text-[#0082ca] transition-colors">
                        {form.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {form.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100">
                        {form.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#00c5d6] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div>
                      <a
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full h-12 px-5 rounded-xl font-bold text-sm bg-[#00c5d6] hover:bg-[#00b0c0] text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-98 whitespace-nowrap"
                      >
                        <Download className="w-4 h-4 shrink-0" />
                        <span>Download PDF</span>
                      </a>
                      <p className="text-[11px] text-center text-slate-400 mt-2">
                        PDF Document • Direct download
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Digital Application Option */}
        <section className="py-14 bg-[#f8fafc] border-t border-slate-200">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#071533] to-[#001e55] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-slate-700/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#00c5d6]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c5d6]/20 text-[#00c5d6] mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Prefer to Apply Online?
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    Digital Loan Application
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Instead of filling out a paper form, apply securely online in about 5 minutes with bank-level encryption and no upfront impact on your credit score.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                  <Link
                    href="/apply-now"
                    className="inline-flex items-center justify-center gap-2 bg-[#00c5d6] hover:bg-[#00b0c0] text-white text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95 text-center"
                  >
                    <span>Apply Online</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white text-xs font-semibold px-4 py-2.5 border border-slate-700 hover:border-slate-500 rounded-xl transition-colors text-center"
                  >
                    <span>Direct Portal Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Submission Guidelines & Contact */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <SectionEyebrow text="How to Submit" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06122d] mb-4">
                Submitting Completed Forms
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Completed and signed forms, along with any supporting documentation (payslips, bank statements, identification), can be sent directly to our processing team:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8">
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    By Email
                  </div>
                  <a
                    href="mailto:approvals@acceleratefinancial.com.au"
                    className="text-sm font-bold text-[#06122d] hover:text-[#00c5d6] break-all transition-colors"
                  >
                    approvals@acceleratefinancial.com.au
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    By Phone
                  </div>
                  <a
                    href="tel:0883481000"
                    className="text-sm font-bold text-[#06122d] hover:text-[#00c5d6] transition-colors"
                  >
                    (08) 8348 1000
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Office / Mail
                  </div>
                  <p className="text-sm font-bold text-[#06122d]">
                    113B Ledger Road, Beverley SA 5009
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
