"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import SectionEyebrow from "@/components/shared/SectionEyebrow";

const tabContent = [
  {
    id: "integrity",
    label: "Integrity First",
    desc: "We build long term relationships based on trust, integrity, and client success. Our transparent approach ensures you receive straightforward guidance every step of the way.",
  },
  {
    id: "customer",
    label: "Customer Focused",
    desc: "Your financial wellbeing is our highest priority. We take the time to understand your unique circumstances to deliver tailored solutions that fit your lifestyle and future plans.",
  },
  {
    id: "expertise",
    label: "Industry Expertise",
    desc: "With over 100 years of combined financial experience, our seasoned brokers navigate lender policies and market shifts to negotiate the best possible terms for you.",
  },
];

export default function HomeWhyChooseUs() {
  const [activeTab, setActiveTab] = useState("integrity");
  const currentTab = tabContent.find((t) => t.id === activeTab) || tabContent[0];

  return (
    <section className="py-20 lg:py-24 bg-[#071533] text-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
          {/* Left Text & Interactive Tabs */}
          <div className="lg:col-span-6">
            {/* Tag Badge */}
            <SectionEyebrow text="Why Choose Us" align="left" />

            {/* Heading - Corrected to Happy Snaps as per Change 7 */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight mb-6">
              Happy Snaps
            </h2>

            {/* Pill Tabs */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6">
              {tabContent.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#00c5d6] text-white shadow-md shadow-cyan-900/40"
                        : "bg-[#0f244c] hover:bg-[#163366] text-slate-300 border border-slate-700/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 min-h-[56px]">
              {currentTab.desc}
            </p>

            {/* Call Us Any Time Box */}
            <div className="inline-flex items-center gap-4 bg-[#0c1f44] border border-cyan-500/20 px-6 py-4 rounded-2xl shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#00c5d6] flex items-center justify-center text-white shrink-0 shadow-md">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                  Call Us Any Time
                </span>
                <a
                  href="tel:0883481000"
                  className="text-lg sm:text-xl font-extrabold text-white hover:text-[#00c5d6] transition-colors"
                >
                  (08) 8348 1000
                </a>
              </div>
            </div>
          </div>

          {/* Right Image: Accelerate Headquarters Building */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-[#0c1f44] aspect-[4/3] w-full">
              <Image
                src="/images/home/why-choose-building.png"
                alt="Accelerate Group Office Building"
                fill
                className="object-cover hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071533]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

