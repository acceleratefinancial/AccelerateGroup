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
  return (
    <section className="bg-[#071533] py-14 lg:py-16 border-y border-slate-800">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title matching Image 3 with cyan accent */}
        <h3 className="text-center text-white text-lg sm:text-xl lg:text-2xl font-bold tracking-wide mb-10">
          Trusted By <span className="text-[#00c5d6]">40+ Lenders</span>
        </h3>

        {/* Clean white cards to showcase full-color lender logos clearly on navy background */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {lenderList.map((lender) => (
            <div
              key={lender.name}
              className="bg-white rounded-xl shadow-xs border border-white/20 p-3 sm:p-4 h-16 sm:h-20 flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-300"
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
