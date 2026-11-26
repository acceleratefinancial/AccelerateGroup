import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import BlogFilterList from "@/components/blog/BlogFilterList";
import { getAllBlogPosts, getAllCategories } from "@/data/blogPosts";
import { Calculator, ArrowRight, PhoneCall, Sparkles, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Knowledge & Library | Accelerate Financial Solutions",
  description:
    "Expert articles and practical insights on commercial asset finance, home loan refinancing, electric vehicle novated leasing, and business equipment loans from our Beverley, South Australia brokerage team.",
};

// Set to true to hide old posts until new 2026 articles arrive
const HIDE_OLD_POSTS = true;

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="Financial Knowledge Library"
          eyebrow="Insights & Advice"
          description="Actionable guidance, tax strategies, and market updates from our senior finance brokers to help Australian families and businesses make smarter borrowing decisions."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog & Library" },
          ]}
        />

        {/* Blog Posts Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            {HIDE_OLD_POSTS ? (
              <div className="bg-white rounded-3xl p-8 sm:p-14 text-center max-w-3xl mx-auto border border-slate-200/80 shadow-md">
                <div className="w-16 h-16 rounded-2xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c5d6]/10 text-[#0082ca] mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#00c5d6]" />
                  Updating for 2026
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06122d] mb-4">
                  New Articles Coming Soon
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                  We are currently updating our financial library with fresh guides, rate analyses, and market insights for 2026. Please check back soon or explore our interactive tools below.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/calculator"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#00c5d6] text-white hover:bg-[#00b0c0] shadow-sm transition-all"
                  >
                    <Calculator className="w-4 h-4" />
                    Repayments Calculator
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#06122d] text-white hover:bg-[#071d49] transition-all"
                  >
                    Speak with a Broker
                  </Link>
                </div>
              </div>
            ) : (
              <BlogFilterList posts={posts} categories={categories} />
            )}
          </div>
        </section>

        {/* Bottom Call to Action Card */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071533] to-[#001e55] text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-700/60">
              <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#00c5d6]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c5d6]/20 text-[#00c5d6] mb-4">
                  Ready to Take Action?
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
                  Run the Numbers with Our Repayments Calculator and Speak to a Broker
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  Whether you are planning a vehicle upgrade, exploring a novated lease, our Adelaide team compares 40+ Australian lenders to structure the ideal loan for your situation.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/calculator"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#00c5d6] text-white hover:bg-[#00b0c0] shadow-md hover:shadow-lg transition-all"
                  >
                    <Calculator className="w-4 h-4" />
                    Interactive Calculator
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/apply-now"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-[#071533] hover:bg-slate-100 shadow-md transition-all"
                  >
                    Apply Online in 5 Mins
                  </Link>

                  <a
                    href="tel:0883481000"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-[#00c5d6]" />
                    Call (08) 8348 1000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
