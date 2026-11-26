import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionEyebrow from "@/components/shared/SectionEyebrow";
import { FileText, Download, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Forms & Downloads – Accelerate Financial Solutions",
  description:
    "Access Accelerate Financial Solutions credit guides, privacy consent documentation, and digital application forms.",
};

const pdfForms = [
  {
    title: "Credit Guide",
    desc: "Contains essential information about our credit services, licensing, dispute resolution (AFCA), and broker obligations.",
    url: "https://acceleratefinancial.com.au/Forms/Credit-Guide.pdf",
    tag: "Required Disclosure",
  },
  {
    title: "Privacy Consent",
    desc: "Our client privacy and consent form ensuring full transparency in how your personal and financial information is handled.",
    url: "https://acceleratefinancial.com.au/Forms/Privacy-Consent.pdf",
    tag: "Privacy & Compliance",
  },
  {
    title: "Personal Living Expenses Form",
    desc: "Living expenses and household budget schedule for loan assessment and lender affordability checks.",
    url: "https://acceleratefinancial.com.au/Forms/Personal-Living-Exp.pdf",
    tag: "Assessment Form",
  },
];

export default function FormsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="Forms & Documents"
          eyebrow="Compliance & Downloads"
          description="Access our Credit Guide, Privacy Consent documents, and our new digital loan application form."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Forms" },
          ]}
        />

        {/* Featured: New Digital Application Form */}
        <section className="py-16 lg:py-20 bg-[#f8fafc]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#071533] to-[#001e55] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-700/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#00c5d6]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c5d6]/20 text-[#00c5d6] mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  Recommended • Fast Online Process
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                  Digital Loan Application Form
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Save time by completing our new digital application directly online. Securely submit your details in approximately 5 minutes with zero physical paperwork required.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00c5d6] shrink-0" />
                    <span>No impact on credit score</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00c5d6] shrink-0" />
                    <span>40+ lenders compared</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00c5d6] shrink-0" />
                    <span>Bank-grade 256-bit encryption</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/apply-now"
                    className="inline-flex items-center gap-2 bg-[#00c5d6] hover:bg-[#00b0c0] text-white text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
                  >
                    <span>Start Online Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm font-semibold px-4 py-3 border border-slate-700 hover:border-slate-500 rounded-xl transition-colors"
                  >
                    <span>Direct Ambition Cloud Link</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PDF Documents Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionEyebrow text="Documentation" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06122d] leading-tight mb-3">
                Downloadable Forms &amp; Guides
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Download official PDF copies of our disclosure documents, credit guides, and living expense schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pdfForms.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#06122d] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-slate-50 hover:bg-[#00c5d6] text-slate-700 hover:text-white border border-slate-200 hover:border-[#00c5d6] transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
