import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionEyebrow from "@/components/shared/SectionEyebrow";
import HomeTeam from "@/components/home/HomeTeam";
import HomeWhyChooseUs from "@/components/home/HomeWhyChooseUs";
import {
  MapPin,
  Building2,
  Star,
  CheckCircle2,
  Trophy,
  Heart,
  Users2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us – Accelerate Financial Solutions",
  description:
    "Proudly South Australian owned and operated since 2006. Meet Accelerate Financial Solutions—your trusted, multi-award-nominated finance brokers in Adelaide.",
};

const whyChoosePillars = [
  {
    title: "100% South Australian Owned & Operated",
    desc: "We live and work in Adelaide. We understand the local market, South Australian industries, and what matters most to our clients.",
    icon: MapPin,
  },
  {
    title: "Access to 40+ Lenders",
    desc: "We aren't tied to a single bank. We compare hundreds of loan products to find competitive rates and structures that genuinely fit your budget.",
    icon: Building2,
  },
  {
    title: "5-Star Local Reputation",
    desc: "Backed by hundreds of 5-star Google reviews, our business is built on repeat clients, word-of-mouth referrals, and long-term relationships built on trust.",
    icon: Star,
  },
  {
    title: "End-to-End Support",
    desc: "Our dedicated brokers and support staff handle the entire application process, keeping you informed at every step.",
    icon: CheckCircle2,
  },
];

const communityPillars = [
  {
    title: "Award-Recognised Community Leadership",
    desc: "Finalist for the Social Impact & Change Maker Award and Best Small Business at the City of Charles Sturt Business Recognition Awards, as well as a finalist for Best Community Engagement Program at the Better Business Awards.",
    icon: Trophy,
    badge: "Awards & Recognition",
  },
  {
    title: "Supporting Local Adelaide Sport",
    desc: "We are passionate supporters of grassroots clubs across Adelaide, including serving as a proud Diamond Partner of the Oakdale Netball Club and supporting the Woodville-West Torrens Football Club (Eagles).",
    icon: Heart,
    badge: "Grassroots Sports",
  },
  {
    title: "Backing Local Families & Charities",
    desc: "Through ongoing sponsorships, fundraising initiatives, and local partnerships across the western suburbs and greater Adelaide, our team is committed to helping our community thrive both on and off the field.",
    icon: Users2,
    badge: "Community Care",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="About Us"
          eyebrow="Who We Are"
          description="Proudly South Australian owned and operated since 2006. Meet Accelerate Financial Solutions—your trusted, multi-award-nominated finance brokers in Adelaide."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* Section 1: Our Story / 20 Years Journey */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <SectionEyebrow text="Our Heritage" />
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#06122d] leading-tight mb-6">
                Two Decades of Trusted Local Brokering
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6">
                Founded in 2006 by Managing Director Andrew Hopkins (&ldquo;Hoppy&rdquo;), Accelerate
                Financial Solutions is a proudly South Australian owned and operated finance
                brokerage in Adelaide.
              </p>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-left sm:text-center">
                <p>
                  For two decades, we have operated on a simple promise: to deliver{" "}
                  <strong className="font-bold italic">
                    fast, friendly, and hassle-free finance solutions
                  </strong>{" "}
                  tailored to everyday South Australians and local
                  businesses. With over 100 years of combined industry experience across our team and
                  access to a panel of more than 40 leading lenders, we take the stress out of
                  borrowing by doing all the legwork for you—from comparing interest rates to
                  managing paperwork right through to settlement.
                </p>
                <p className="font-medium text-[#06122d]">
                  Whether you are buying your first home in the suburbs, upgrading the family car, or
                  expanding a local business, you won&apos;t find a friendlier or more dedicated team
                  to help you reach your financial goals faster.
                </p>
              </div>
            </div>

            {/* Why Choose Accelerate Financial Solutions? (4 Pillars) */}
            <div className="pt-6">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06122d]">
                  Why Choose Accelerate Financial Solutions?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChoosePillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#00c5d6]/30 hover:shadow-lg transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-5">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold text-[#06122d] mb-3 leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Community Involvement (New Section from V5) */}
        <section className="py-20 lg:py-24 bg-[#071533] text-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <SectionEyebrow text="Community & Impact" />
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white leading-tight mb-6">
                Our Community Involvement: <br className="hidden sm:inline" />
                Investing Back Into South Australia
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                At Accelerate Financial Solutions, we believe a great local business should actively
                support the community that supports it. Giving back isn&apos;t just an afterthought
                for us—it is a core part of who we are.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                We are proud to be recognised across the industry and our local council for our
                commitment to social impact and grassroots initiatives, including:
              </p>
            </div>

            {/* 3 Community Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {communityPillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-7 sm:p-8 rounded-2xl bg-[#0c1f44] border border-cyan-500/20 shadow-xl flex flex-col justify-between hover:border-[#00c5d6]/50 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#00c5d6]/20 text-[#00c5d6] flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#00c5d6] bg-[#00c5d6]/10 px-3 py-1 rounded-full border border-[#00c5d6]/20">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: Our Awesome Team */}
        <HomeTeam />

        {/* Section 4: Head Office Showcase & Contact */}
        <HomeWhyChooseUs />

        {/* Section 5: Bottom Call To Action */}
        <section className="py-16 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06122d] mb-4">
              Ready to Discuss Your Financing Needs?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Reach out to our team of dedicated Adelaide finance brokers today for personalised loan advice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/apply-now"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00c5d6] hover:bg-[#00b0c0] text-white text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-md transition-all shadow-sm hover:shadow-md active:scale-95"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#06122d] hover:bg-[#071d49] text-white text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-md transition-all shadow-sm active:scale-95"
              >
                <span>Contact Our Office</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
