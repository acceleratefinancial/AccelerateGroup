import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionEyebrow from "@/components/shared/SectionEyebrow";
import HomeTeam from "@/components/home/HomeTeam";
import HomeWhyChooseUs from "@/components/home/HomeWhyChooseUs";
import { ShieldCheck, Compass, Users2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – Accelerate Financial",
  description:
    "Learn about Accelerate Financial, our client-first approach to finance, and our experienced team of finance brokers and directors.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="About Us"
          eyebrow="Who We Are"
          description="Accelerate Financial provides specialized mortgage, vehicle, and commercial finance structuring with competitive rates and seasoned advisory across Australia."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* Section 1: Mission & Principles Skeleton */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionEyebrow text="Our Approach" />
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#06122d] leading-tight mb-4">
                Tailored Finance Solutions Built Around You
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you are securing your first home, growing a commercial enterprise, or upgrading equipment, our team works with you to navigate the lending landscape and secure competitive outcomes.
              </p>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00c5d6]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#06122d] mb-3">
                  Integrity First
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We build long-term relationships based on transparent communication, clear expectations, and client success.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00c5d6]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#06122d] mb-3">
                  Extensive Lender Access
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  With access to 40+ Australian lenders, we compare options across the market to structure finance that fits your goals.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00c5d6]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-6">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#06122d] mb-3">
                  Experienced Advisory
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our brokers manage the application, paperwork, and negotiation from initial inquiry through settlement and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Awesome Team (Reusing exact team section from homepage design) */}
        <HomeTeam />

        {/* Section 3: Head Office Showcase & Contact (Reusing Why Choose Us) */}
        <HomeWhyChooseUs />

        {/* Section 4: Bottom Call To Action */}
        <section className="py-16 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06122d] mb-4">
              Ready to Discuss Your Financing Needs?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Reach out to our team of dedicated finance brokers today for personalized loan advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/apply-now"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00c5d6] hover:bg-[#00b0c0] text-white text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-md transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#06122d] hover:bg-[#071d49] text-white text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-md transition-all shadow-sm active:scale-95"
              >
                <span>Contact Our Office</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

