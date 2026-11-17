import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative bg-[#071533] overflow-hidden">
      {/* Subtle radial glow background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00c5d6]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[560px] lg:min-h-[600px] py-12 lg:py-0 gap-8 lg:gap-4">
          {/* Left Text Column */}
          <div className="lg:col-span-6 z-10 text-white pt-4 lg:pt-0">
            {/* Note: Redundant Accelerate Financial text/line removed as per Change 3 */}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.12] tracking-tight mb-6">
              Smart Finance <br />
              Solutions For Your <br />
              Future
            </h1>

            {/* Subheading / Description */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl mb-8">
              Tailored mortgage, vehicle, and business loans with competitive rates and expert advice to reach your goals faster.
            </p>

            {/* Standardized Apply Now Button (matches top-right header button style) */}
            <div>
              <Link
                href="/apply-now"
                className="inline-flex items-center gap-2 bg-[#00c5d6] hover:bg-[#00b0c0] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 sm:px-6 py-2.5 sm:py-3 rounded-md transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[460px] lg:h-[560px] w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full h-full max-h-[540px] overflow-hidden rounded-2xl lg:rounded-none">
              <Image
                src="/images/home/hero-family.png"
                alt="Accelerate Financial Solutions - Happy Family"
                fill
                priority
                className="object-cover lg:object-contain object-center lg:object-right"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Soft left gradient fade into navy background */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#071533] to-transparent pointer-events-none" />
              <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#071533] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
