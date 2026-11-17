import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionEyebrow from "@/components/shared/SectionEyebrow";
import HomeLenders from "@/components/home/HomeLenders";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Loan Services – Accelerate Financial",
  description:
    "Explore tailored personal, business, car buying, salary packaging, and home loan solutions from Accelerate Financial.",
};

// Row 1 – 2 cards: Personal, Business
const servicesRow1 = [
  {
    title: "Personal",
    image: "/images/home/service-personal.png",
    href: "#personal-details",
    description: "Flexible personal lending solutions structured to support your life milestones with competitive rates.",
  },
  {
    title: "Business",
    image: "/images/home/service-business.png",
    href: "#business-details",
    description: "Commercial loans and equipment finance to fund growth, working capital, and operational expansion.",
  },
];

// Row 2 – 3 cards: Salary Packaging, Car Buying, Home Loans
const servicesRow2 = [
  {
    title: "Salary Packaging",
    image: "/images/home/service-salary.png",
    href: "#salary-details",
    description: "Maximize your take-home pay and tax efficiencies with compliant vehicle and salary packaging.",
  },
  {
    title: "Car Buying",
    image: "/images/home/service-car.png",
    href: "#car-details",
    description: "Expert vehicle procurement and tailored vehicle finance without dealership markups.",
  },
  {
    title: "Home Loans",
    image: "/images/home/service-home.png",
    href: "#home-details",
    description: "Residential mortgages, refinancing, and investment property loans compared across 40+ lenders.",
  },
];

const serviceDetails = [
  {
    id: "personal-details",
    title: "Personal Loans",
    tagline: "Tailored finance for your personal goals",
    points: [
      "Competitive fixed and variable rate options",
      "Debt consolidation to streamline monthly payments",
      "Transparent terms with no hidden fees",
      "Fast turnaround times and dedicated broker support",
    ],
    ctaHref: "/apply-now",
  },
  {
    id: "business-details",
    title: "Commercial & Business Lending",
    tagline: "Funding to grow and scale your operations",
    points: [
      "Working capital and cashflow support",
      "Plant, machinery, and commercial equipment finance",
      "Commercial property purchase and development loans",
      "Custom structuring aligned with your business cash cycle",
    ],
    ctaHref: "/apply-now",
  },
  {
    id: "salary-details",
    title: "Salary Packaging & Novated Leases",
    tagline: "Tax-effective vehicle and asset packaging",
    points: [
      "Novated leasing options for new, used, and electric vehicles",
      "Pre-tax salary deductions to maximize net income",
      "Comprehensive fleet discount access",
      "Simple employer-friendly administration",
    ],
    ctaHref: "/apply-now",
  },
  {
    id: "car-details",
    title: "Car Buying Solutions",
    tagline: "Tender-based car procurement and finance",
    points: [
      "Wholesale fleet pricing through our national dealer network",
      "Complete negotiation handled on your behalf",
      "Flexible consumer and commercial vehicle loan options",
      "Trade-in assistance and door-to-door delivery",
    ],
    ctaHref: "/apply-now",
  },
  {
    id: "home-details",
    title: "Home & Property Loans",
    tagline: "Mortgages made simple and competitive",
    points: [
      "First home buyer guidance and grant assistance",
      "Mortgage refinancing for better rates and cash out",
      "Property investment structuring and portfolio review",
      "Comparison across major banks and specialist non-bank lenders",
    ],
    ctaHref: "/apply-now",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="Our Services"
          eyebrow="What We Offer"
          description="Specialized finance solutions tailored to your individual and commercial goals. We compare 40+ lenders to secure competitive rates and flexible loan structures."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />

        {/* Main 2 + 3 Services Showcase (matching homepage exact design) */}
        <section className="py-20 lg:py-24 bg-white" id="services-grid">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionEyebrow text="Comprehensive Lending" />

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
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#06122d] group-hover:text-[#00c5d6] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#00c5d6] group-hover:bg-[#00c5d6] group-hover:text-white group-hover:border-[#00c5d6] transition-all shadow-2xs shrink-0 ml-4">
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
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#06122d] group-hover:text-[#00c5d6] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#00c5d6] group-hover:bg-[#00c5d6] group-hover:text-white group-hover:border-[#00c5d6] transition-all shadow-2xs shrink-0 ml-4">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Extensible Service Details Section (Clean modular section for future client content expansion) */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/70" id="service-details">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#06122d] mb-4">
                Service Details &amp; Solutions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Detailed breakdowns of our specialized finance options. Each loan scenario is individually analyzed by our licensed brokers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceDetails.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#06122d] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#00c5d6] uppercase tracking-wider mb-5">
                      {item.tagline}
                    </p>

                    <ul className="space-y-3 mb-6 text-sm text-slate-600">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#00c5d6] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href={item.ctaHref}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#06122d] hover:text-[#00c5d6] transition-colors"
                    >
                      <span>Explore Loan Options</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By 40+ Lenders Bar */}
        <HomeLenders />

        {/* Call to action */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06122d] mb-4">
              Ready to Accelerate Your Loan?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Submit your inquiry online or speak directly with an accredited finance broker.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/apply-now"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00c5d6] hover:bg-[#00b0c0] text-white text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-md transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <span>Apply Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/apply-now"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#06122d] hover:bg-[#071d49] text-white text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-md transition-all shadow-sm active:scale-95"
              >
                <span>Talk to a Broker</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
