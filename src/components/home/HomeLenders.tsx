import React from "react";
import Image from "next/image";

// Full-color original lender logo assets from the client's V3 design document & repository
const lenderList = [
  { name: "NAB", src: "/images/home/lender-nab.png", width: 120, height: 42 },
  { name: "Macquarie", src: "/images/home/lender-macquarie.png", width: 120, height: 40 },
  { name: "BOQ Finance", src: "/images/home/lender-boq.png", width: 120, height: 38 },
  { name: "Liberty", src: "/images/home/lender-liberty.png", width: 120, height: 38 },
  { name: "Latitude", src: "/images/home/lender-latitude.png", width: 120, height: 38 },
  { name: "AFS", src: "/images/home/lender-afs.png", width: 120, height: 40 },
  { name: "Plenti", src: "/images/home/lender-plenti.png", width: 110, height: 38 },
  { name: "Metro", src: "/images/home/lender-metro.png", width: 115, height: 38 },
  { name: "ANZ", src: "/images/home/lender-anz.png", width: 115, height: 40 },
  { name: "Westpac", src: "/images/Westpac-Logo-CMYK.JPG", width: 120, height: 32 },
  { name: "Pepper Money", src: "/images/Pepper-Money-logo.JPG", width: 110, height: 42 },
  { name: "Suncorp", src: "/images/Suncorp_Hor_CMYK.jpg", width: 120, height: 35 },
];

export default function HomeLenders() {
  // Two identical halves (each containing 2 sets of logos) for a seamless 1-row loop on all resolutions
  const singleHalf = [...lenderList, ...lenderList];
  const marqueeLenders = [...singleHalf, ...singleHalf];

  return (
    <section className="bg-[#071533] py-12 lg:py-14 border-y border-slate-800 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        {/* Title with cyan accent */}
        <h3 className="text-center text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">
          Trusted By <span className="text-[#00c5d6]">40+ Lenders</span>
        </h3>
      </div>

      {/* 1-Row Continuous Marquee running right to left */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 sm:before:w-28 md:before:w-44 before:bg-gradient-to-r before:from-[#071533] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 sm:after:w-28 md:after:w-44 after:bg-gradient-to-l after:from-[#071533] after:to-transparent">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
          {marqueeLenders.map((lender, index) => (
            <div
              key={`${lender.name}-${index}`}
              className="bg-white rounded-xl shadow-xs border border-white/20 px-4 sm:px-5 py-3 w-44 sm:w-52 h-16 sm:h-20 shrink-0 flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <Image
                src={lender.src}
                alt={`${lender.name} Logo`}
                width={lender.width}
                height={lender.height}
                className="max-h-9 sm:max-h-11 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
