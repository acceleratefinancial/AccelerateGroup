import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import CalculatorWidget from "@/components/shared/CalculatorWidget";
import { HelpCircle, CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Calculators – Accelerate Financial",
  description:
    "Interactive loan repayment and borrowing capacity calculators to help you plan your finance options with confidence.",
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="Financial Calculators"
          eyebrow="Interactive Tools"
          description="Get estimated repayments for different loan amounts, terms and repayment frequencies."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Calculator" },
          ]}
        />

        {/* Dedicated Calculator Widget Section */}
        <section className="py-16 lg:py-24 bg-[#f8fafc]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06122d] mb-3">
                Plan Your Repayments
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Use our interactive module to explore different loan amounts, terms, and repayment frequencies.
              </p>
            </div>

            {/* Reusable CalculatorWidget component container */}
            <div className="max-w-5xl mx-auto">
              <CalculatorWidget />
            </div>

            {/* Advisory Disclaimer */}
            <div className="max-w-5xl mx-auto mt-8 p-5 rounded-xl bg-white border border-gray-200/80 text-xs text-slate-500 flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Important Notice:</strong> Calculations and figures provided by financial calculators are illustrative estimates only and do not constitute an offer of credit or financial advice. Actual loan approval, interest rates, fees, and repayment schedules depend on individual applicant circumstances and lender assessment.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits / FAQ Section */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06122d] mb-4">
                Why Work With an Accelerate Broker?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Calculators provide an initial picture, but a dedicated broker tailors the optimal structure for your specific goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#06122d] mb-2">
                  Access to 40+ Lenders
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We look beyond standard bank rates to compare specialist lenders, non-bank alternatives, and competitive tiers.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-5">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#06122d] mb-2">
                  Protect Your Credit Score
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Avoid multiple credit enquiries. We pre-qualify and package your scenario before formal submission.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-5">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-[#06122d] mb-2">
                  End-to-End Management
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our brokers manage the whole journey from start to finish. Discovery, application, approval, settlement and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

