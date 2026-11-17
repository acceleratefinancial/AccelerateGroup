import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/shared/SectionEyebrow";

// Row 1 – 2 cards: Personal, Business
const servicesRow1 = [
  {
    title: "Personal",
    image: "/images/home/service-personal.png",
    href: "/services#personal-details",
  },
  {
    title: "Business",
    image: "/images/home/service-business.png",
    href: "/services#business-details",
  },
];

// Row 2 – 3 cards: Salary Packaging, Car Buying, Home Loans
const servicesRow2 = [
  {
    title: "Salary Packaging",
    image: "/images/home/service-salary.png",
    href: "/services#salary-details",
  },
  {
    title: "Car Buying",
    image: "/images/home/service-car.png",
    href: "/services#car-details",
  },
  {
    title: "Home Loans",
    image: "/images/home/service-home.png",
    href: "/services#home-details",
  },
];

export default function HomeServices() {
  return (
    <section className="py-20 lg:py-24 bg-white" id="services">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionEyebrow text="What We Offer" />

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#06122d] leading-tight">
            We Provide Best Services <br />
            For Your Loan
          </h2>
        </div>

        {/* Desktop 2 + 3 Arrangement */}
        {/* Row 1 – Exactly 2 cards (Personal & Business) */}
        <div className="max-w-[880px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {servicesRow1.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 sm:h-64 lg:h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
              </div>
              <div className="p-5 sm:p-6 flex items-center justify-between bg-white">
                <h3 className="text-lg sm:text-xl font-bold text-[#06122d] group-hover:text-[#00c5d6] transition-colors">
                  {service.title}
                </h3>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#00c5d6] group-hover:bg-[#00c5d6] group-hover:text-white group-hover:border-[#00c5d6] transition-all shadow-2xs">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2 – Exactly 3 cards (Salary Packaging, Car Buying, Home Loans) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesRow2.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 sm:h-64 lg:h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-6 flex items-center justify-between bg-white">
                <h3 className="text-lg sm:text-xl font-bold text-[#06122d] group-hover:text-[#00c5d6] transition-colors">
                  {service.title}
                </h3>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#00c5d6] group-hover:bg-[#00c5d6] group-hover:text-white group-hover:border-[#00c5d6] transition-all shadow-2xs">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
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
