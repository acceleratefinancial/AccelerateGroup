"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, ChevronLeft, ChevronRight, Camera } from "lucide-react";
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

const happySnaps = [
  {
    src: "/images/home/happy-snap-1.jpg",
    alt: "Excited client celebrating new vehicle delivery at Accelerate Financial",
    caption: "Pure excitement!",
  },
  {
    src: "/images/home/happy-snap-2.jpg",
    alt: "Smiling family with their two young daughters receiving their new vehicle",
    caption: "Family-ready!",
  },
  {
    src: "/images/home/happy-snap-3.jpg",
    alt: "Dave Manou with client celebrating new commercial 4x4 ute handover",
    caption: "Work-ready!",
  },
  {
    src: "/images/home/happy-snap-4.jpg",
    alt: "Delighted client with new luxury SUV and gold delivery bow",
    caption: "Stunning new vehicle delivery!",
  },
  {
    src: "/images/home/happy-snap-5.jpg",
    alt: "Proud client celebrating new red vehicle delivery in showroom",
    caption: "Keys handed over!",
  },
  {
    src: "/images/home/happy-snap-6.jpg",
    alt: "Young client and Andrew Hoppy Hopkins celebrating new 4WD handover",
    caption: "New 4WD handover!",
  },
  {
    src: "/images/home/happy-snap-7.jpg",
    alt: "Couple and broker with new white SUV in modern delivery studio",
    caption: "Showroom perfection!",
  },
  {
    src: "/images/home/happy-snap-8.jpg",
    alt: "Clients with new blue vehicle delivery outside Accelerate Financial office",
    caption: "Handover day at our office!",
  },
  {
    src: "/images/home/happy-snap-9.jpg",
    alt: "Client celebrating with arms raised next to new metallic red vehicle",
    caption: "All smiles!",
  },
  {
    src: "/images/home/happy-snap-10.jpg",
    alt: "Smiling couple with Andrew Hoppy Hopkins next to new white vehicle",
    caption: "New car day!",
  },
  {
    src: "/images/home/happy-snap-11.jpg",
    alt: "Delighted couple holding car keys next to new vehicle in showroom",
    caption: "Keys in hand!",
  },
  {
    src: "/images/home/happy-snap-12.jpg",
    alt: "Client smiling with Andrew Hoppy Hopkins in front of Accelerate office",
    caption: "Another happy driver!",
  },
  {
    src: "/images/home/happy-snap-13.jpg",
    alt: "Family celebrating new vehicle delivery with Andrew Hoppy Hopkins",
    caption: "A proud family moment!",
  },
  {
    src: "/images/home/happy-snap-14.jpg",
    alt: "Andrew Hoppy Hopkins celebrating with clients and community partners",
    caption: "Proud community connections!",
  },
  {
    src: "/images/home/happy-snap-15.jpg",
    alt: "Couple standing proudly next to their new vehicle on delivery day",
    caption: "Ready for the road!",
  },
  {
    src: "/images/home/happy-snap-16.jpg",
    alt: "Couple with brand new Isuzu ute and red bow in delivery bay",
    caption: "Brand new ute delivery!",
  },
  {
    src: "/images/home/happy-snap-17.jpg",
    alt: "Festive celebration and vehicle delivery at Accelerate Financial",
    caption: "Spreading holiday cheer!",
  },
  {
    src: "/images/home/happy-snap-18.jpg",
    alt: "Young couple celebrating new vehicle delivery with Andrew Hoppy Hopkins",
    caption: "Thrilled clients celebrating!",
  },
];

export default function HomeWhyChooseUs() {
  const [activeTab, setActiveTab] = useState("integrity");
  const [currentSnapIndex, setCurrentSnapIndex] = useState(0);

  const currentTab = tabContent.find((t) => t.id === activeTab) || tabContent[0];

  const nextSnap = () => {
    setCurrentSnapIndex((prev) => (prev + 1) % happySnaps.length);
  };

  const prevSnap = () => {
    setCurrentSnapIndex((prev) => (prev - 1 + happySnaps.length) % happySnaps.length);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#071533] text-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
          {/* Left Text & Interactive Tabs */}
          <div className="lg:col-span-6">
            {/* Tag Badge */}
            <SectionEyebrow text="Why Choose Us" align="left" />

            {/* Heading */}
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

          {/* Right: Stacked Photo Cards with Arrows (Happy Snaps) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[440px] aspect-[4/4.6] sm:aspect-[4/4.3] mx-auto flex items-center justify-center select-none py-4">
              {happySnaps.map((snap, index) => {
                // Calculate distance from active snap
                const offset =
                  (index - currentSnapIndex + happySnaps.length) % happySnaps.length;

                // Only render top 3 items for performance and clean stack appearance
                if (offset > 2) return null;

                // Stack styling: offset 0 is front, offset 1 is behind tilted right, offset 2 is behind tilted left
                const zIndex = 30 - offset * 10;
                let transformStyle = "scale-100 rotate-0 translate-x-0 translate-y-0";
                let opacityStyle = "opacity-100";

                if (offset === 1) {
                  transformStyle = "scale-95 rotate-3 translate-x-3 translate-y-2";
                  opacityStyle = "opacity-90";
                } else if (offset === 2) {
                  transformStyle = "scale-90 -rotate-3 -translate-x-3 translate-y-4";
                  opacityStyle = "opacity-80";
                }

                return (
                  <div
                    key={snap.src}
                    onClick={nextSnap}
                    style={{ zIndex }}
                    className={`absolute inset-0 bg-white rounded-2xl p-2.5 sm:p-3 shadow-2xl transition-all duration-500 ease-out cursor-pointer hover:shadow-cyan-500/20 ${transformStyle} ${opacityStyle}`}
                    role="button"
                    aria-label={`View snap ${index + 1}`}
                  >
                    <div className="relative w-full h-[82%] sm:h-[84%] rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center">
                      <Image
                        src={snap.src}
                        alt={snap.alt}
                        fill
                        className="object-contain p-1"
                        sizes="(max-width: 640px) 90vw, 440px"
                        priority={index === 0}
                      />
                      {offset === 0 && (
                        <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Camera className="w-3 h-3 text-[#00c5d6]" />
                          <span>
                            {currentSnapIndex + 1} / {happySnaps.length}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="h-[18%] sm:h-[16%] flex items-center px-2 pt-1 text-slate-800">
                      <p className="text-xs sm:text-[13px] font-bold line-clamp-2 leading-tight text-[#071533]">
                        {snap.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slider Navigation Arrows & Dot Indicators */}
            <div className="flex items-center justify-between w-full max-w-[460px] mt-6 px-2 gap-3">
              {/* Dots */}
              <div className="flex items-center flex-wrap gap-1 sm:gap-1.5 max-w-[280px] sm:max-w-[340px]">
                {happySnaps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSnapIndex(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === currentSnapIndex
                        ? "w-5 sm:w-6 bg-[#00c5d6]"
                        : "w-1.5 sm:w-2 bg-slate-600 hover:bg-slate-500"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSnap}
                  className="w-10 h-10 rounded-full border border-slate-700 bg-[#0c1f44] hover:bg-[#00c5d6] hover:border-[#00c5d6] text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSnap}
                  className="w-10 h-10 rounded-full border border-slate-700 bg-[#0c1f44] hover:bg-[#00c5d6] hover:border-[#00c5d6] text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
