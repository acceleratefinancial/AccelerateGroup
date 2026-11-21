import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionEyebrow from "@/components/shared/SectionEyebrow";
import HomeLenders from "@/components/home/HomeLenders";
import FlipServiceCard from "@/components/shared/FlipServiceCard";
import { servicesRow1, servicesRow2 } from "@/data/servicesData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Loan Services – Accelerate Financial Solutions",
  description:
    "Compare loans across 40+ lenders with Accelerate Financial Solutions in Adelaide. Expert brokers for Personal Loans, Business Loans, Salary Packaging, Car Buying & Home Loans.",
};

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
      "Pre-tax salary deductions to maximise net income",
      "Comprehensive fleet discount access",
      "Simple employer-friendly administration",
    ],
    ctaHref: "/apply-now",
  },
  {
    id: "car-details",
    title: "Car Buying Solutions",
    tagline: "Expert car procurement and finance",
    points: [
      "Wholesale fleet pricing through our national dealer network",
      "Complete negotiation handled on your behalf",
      "Flexible consumer and commercial vehicle loan options",
      "Trade-in assistance and end to end service",
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
          description="Compare loans across 40+ lenders with Accelerate Financial Solutions in Adelaide. Expert brokers for Personal Loans, Business Loans, Salary Packaging, Car Buying & Home Loans."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />

        {/* Main 2 + 3 Services Showcase (matching homepage exact design) */}
        <section className="py-20 lg:py-24 bg-white" id="services-grid">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionEyebrow text="Tailored Finance" />

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#06122d] leading-tight mb-4">
                Tailored Finance Solutions for Every Stage of Life
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With hundreds of loan products on the market, finding the right one shouldn&apos;t
                feel overwhelming. At Accelerate Financial Solutions, our Adelaide-based brokers
                compare options across more than 40 banks and specialist lenders to secure
                competitive rates and flexible terms tailored to your personal or commercial goals.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 font-medium">
                Click any service card below to view loan features, benefits, and tailored financing options.
              </p>
            </div>

            {/* Desktop 2 + 3 Arrangement */}
            {/* Row 1 – Exactly 2 cards (Personal & Business) */}
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
                Detailed breakdowns of our specialised finance options. Each loan scenario is individually analysed by our licensed brokers.
              </p>
            </div>

            {/* Desktop 2 + 3 Arrangement matching Tailored Finance Solutions */}
            {/* Row 1 – Exactly 2 cards (Personal Loans & Business Loans) */}
            <div className="max-w-[880px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
              {serviceDetails.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#06122d] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#00c5d6] uppercase tracking-wider mb-5">
                      {item.tagline}
                    </p>

                    <ul className="space-y-3 mb-6 text-sm text-slate-600">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#00c5d6] shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href={item.ctaHref}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#06122d] hover:text-[#00c5d6] transition-colors group/link"
                    >
                      <span>Explore Loan Options</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 – Exactly 3 cards (Salary Packaging, Car Buying, Home Loans) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {serviceDetails.slice(2, 5).map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#06122d] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#00c5d6] uppercase tracking-wider mb-5">
                      {item.tagline}
                    </p>

                    <ul className="space-y-3 mb-6 text-sm text-slate-600">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#00c5d6] shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href={item.ctaHref}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#06122d] hover:text-[#00c5d6] transition-colors group/link"
                    >
                      <span>Explore Loan Options</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
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
