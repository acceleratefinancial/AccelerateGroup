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
  // Duplicate list once to achieve a seamless, continuous right-to-left loop (24 items total)
  const marqueeLenders = [...lenderList, ...lenderList];

  return (
    <section className="bg-[#071533] py-10 sm:py-12 lg:py-14 border-y border-slate-800 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        {/* Title with cyan accent */}
        <h3 className="text-center text-white text-base sm:text-xl lg:text-2xl font-bold tracking-wide">
          Access to <span className="text-[#00c5d6]">40+ lenders.</span>
        </h3>
      </div>

      {/* 1-Row Continuous Marquee running right to left */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-8 sm:before:w-20 md:before:w-36 before:bg-gradient-to-r before:from-[#071533] before:to-transparent before:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-8 sm:after:w-20 md:after:w-36 after:bg-gradient-to-l after:from-[#071533] after:to-transparent after:pointer-events-none">
        <div className="animate-marquee flex items-center gap-3 sm:gap-6 py-2">
          {marqueeLenders.map((lender, index) => (
            <div
              key={`${lender.name}-${index}`}
              className="bg-white rounded-xl shadow-xs border border-white/20 px-3 sm:px-5 py-2.5 sm:py-3 w-38 sm:w-52 h-14 sm:h-20 shrink-0 flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <Image
                src={lender.src}
                alt={`${lender.name} Logo`}
                width={lender.width}
                height={lender.height}
                loading="eager"
                priority={index < 12}
                className="max-h-7 sm:max-h-11 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
