"use client";

import React from "react";
import SectionEyebrow from "@/components/shared/SectionEyebrow";
import FlipServiceCard from "@/components/shared/FlipServiceCard";
import { servicesRow1, servicesRow2 } from "@/data/servicesData";

export default function HomeServices() {
  return (
    <section className="py-20 lg:py-24 bg-white" id="services">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionEyebrow text="What We Offer" />

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#06122d] leading-tight">
            Finance Solutions Tailored To You
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3">
            Click any service card to view loan features, benefits, and tailored financing options.
          </p>
        </div>

        {/* Desktop 2 + 3 Arrangement */}
        {/* Row 1 – Exactly 2 cards (Personal Loans & Business Loans) */}
        <div className="max-w-[880px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {servicesRow1.map((service) => (
            <FlipServiceCard key={service.id} service={service} isRow1={true} />
          ))}
        </div>

        {/* Row 2 – Exactly 3 cards (Salary Packaging, Car Buying, Home Loans) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesRow2.map((service) => (
            <FlipServiceCard key={service.id} service={service} isRow1={false} />
          ))}
        </div>

        {/* Combined 100+ Years Of Experience */}
        <div className="text-center mt-14 pt-2">
          <p className="text-lg sm:text-xl font-bold text-[#06122d]">
            Combined{" "}
            <span className="text-[#00c5d6]">100+ Years Of Experience</span>
          </p>
        </div>
      </div>
    </section>
  );
}
