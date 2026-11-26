"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { ServiceCardData } from "@/data/servicesData";

export type { ServiceCardData };

export default function FlipServiceCard({
  service,
  isRow1 = false,
}: {
  service: ServiceCardData;
  isRow1?: boolean;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`perspective-1000 w-full cursor-pointer select-none group ${
        isRow1 ? "h-[390px] sm:h-[420px]" : "h-[400px] sm:h-[430px]"
      }`}
      onClick={() => setIsFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
      aria-label={`Flip ${service.title} card for details`}
    >
      <div
        className={`relative w-full h-full duration-500 ease-out transform-style-3d transition-transform rounded-2xl ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
          {/* Card Top Image */}
          <div className="relative flex-1 w-full overflow-hidden bg-gray-100">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes={
                isRow1
                  ? "(max-width: 768px) 100vw, 440px"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
            />

            {/* Quick Flip Hint Badge */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[11px] font-bold text-gray-700 px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1 border border-gray-100/80">
              <RotateCcw className="w-3 h-3 text-[#00c5d6]" />
              <span>Tap to flip</span>
            </div>
          </div>

          {/* Card Bottom Details */}
          <div className="p-5 sm:p-6 bg-white border-t border-gray-50 flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0 pr-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#06122d] tracking-tight group-hover:text-[#00c5d6] transition-colors">
                {service.frontTitle}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-1 leading-relaxed">
                {service.frontDesc}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#00c5d6] shadow-xs shrink-0 group-hover:bg-[#00c5d6] group-hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* BACK FACE (Flipped) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-xl flex flex-col justify-between">
          <div>
            {/* Header with Title and Flip-back button */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#06122d] leading-snug">
                {service.title}
              </h3>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#00c5d6] hover:text-white text-slate-500 flex items-center justify-center transition-colors shrink-0"
                aria-label="Flip back"
                title="Flip back"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Cyan Eyebrow Subtitle */}
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00c5d6] mb-4">
              {service.backEyebrow}
            </p>

            {/* Feature Bullets with Cyan Checkmarks */}
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00c5d6] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-[13px] text-slate-600 font-medium leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Action Link */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <Link
              href={service.href}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#06122d] hover:text-[#00c5d6] transition-colors group/link"
            >
              <span>Explore Loan Options</span>
              <ArrowRight className="w-4 h-4 text-[#06122d] group-hover/link:text-[#00c5d6] group-hover/link:translate-x-1 transition-all" />
            </Link>
            <span className="text-[11px] text-slate-400 font-medium">Click to flip</span>
          </div>
        </div>
      </div>
    </div>
  );
}
