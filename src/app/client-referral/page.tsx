import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionEyebrow from "@/components/shared/SectionEyebrow";
import HomeReviews from "@/components/home/HomeReviews";
import ReferralForm from "@/components/referral/ReferralForm";
import { PhoneCall, Mail, ArrowRight, Gift } from "lucide-react";

export const metadata: Metadata = {
  title: "Easy Referral – Accelerate Financial",
  description:
    "Introduce friends, family, or colleagues to Accelerate Financial. Our way of saying thanks with exceptional lending outcomes and referral rewards.",
};

const referralSteps = [
  {
    step: "01",
    title: "Introduce Your Referral",
    desc: "Complete the simple referral form below with your contact's details or share our direct application link.",
  },
  {
    step: "02",
    title: "Expert Broker Review",
    desc: "Our senior brokers reach out, compare 40+ lenders, and tailor the most competitive solution.",
  },
  {
    step: "03",
    title: "Settlement & Reward",
    desc: "When their loan successfully settles, we reward you as our way of saying thank you for your trust.",
  },
];

export default function ClientReferralPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="Easy Referral"
          eyebrow="Our Way Of Saying Thanks"
          description="At Accelerate Financial, word of mouth is our greatest compliment. Introduce friends, family, or business associates and receive $100 gift card of your choice."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Easy Referral" },
          ]}
        />

        {/* 3 Step Process: How does it work? */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <SectionEyebrow text="Easy Introduction" />
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#06122d] leading-tight mb-4">
                How Does It Work?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Referring someone to Accelerate Financial is fast, hassle-free, and rewarding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {referralSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00c5d6]/30 hover:shadow-lg transition-all relative flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#06122d] text-[#00c5d6] text-lg font-black flex items-center justify-center mb-6">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#06122d] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Referral Submission Form Section */}
        <section className="py-20 bg-[#f8fafc] border-t border-slate-200/70" id="referral-form">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
              <div className="text-center mb-10">
                <div className="w-14 h-14 rounded-2xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-7 h-7" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06122d] mb-2">
                  Submit a Client Referral
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                  Provide your contact details along with your referral&apos;s information. Referral phone is mandatory so we can connect promptly.
                </p>
              </div>

              {/* Interactive Referral Form */}
              <ReferralForm />

              {/* Direct Application Link Alternative */}
              <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                <p className="text-xs sm:text-sm text-slate-500 mb-3">
                  Prefer your referral to apply directly online?
                </p>
                <a
                  href="https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#00c5d6] hover:text-[#009fb0] transition-colors"
                >
                  <span>Share our direct application portal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Terms & Conditions Notice */}
              <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 leading-relaxed">
                <h5 className="font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Terms &amp; Conditions
                </h5>
                <p>
                  Referral rewards are payable upon full settlement of eligible settled finance contracts. The referrer must have obtained consent from the referred party prior to submitting their personal contact details. Normal lending criteria, fees, terms, and lender approval conditions apply.
                </p>
              </div>

              {/* Direct Partner Contacts */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#00c5d6]" />
                  <span>Direct Line: (08) 8348 1000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00c5d6]" />
                  <span>approvals@acceleratefinancial.com.au</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <HomeReviews />
      </main>

      <Footer />
    </div>
  );
}
