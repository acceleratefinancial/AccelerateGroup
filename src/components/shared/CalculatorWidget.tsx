"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function CalculatorWidget() {
  // Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(30000);
  const [deposit, setDeposit] = useState<number>(0);
  const [termYears, setTermYears] = useState<number>(5);
  const [interestRate, setInterestRate] = useState<number>(6.99);
  const [frequency, setFrequency] = useState<"weekly" | "fortnightly" | "monthly">("weekly");

  // View State: 'calculator' | 'quote' | 'success'
  const [view, setView] = useState<"calculator" | "quote" | "success">("calculator");

  // Quote Form State
  const [assetType, setAssetType] = useState("Car / Vehicle");
  const [buyingFrom, setBuyingFrom] = useState("Licensed Dealer");
  const [assetCondition, setAssetCondition] = useState("Used");
  const [employmentStatus, setEmploymentStatus] = useState("Full-Time");
  const [residencyStatus, setResidencyStatus] = useState("Australian Citizen / Permanent Resident");
  const [creditHistory, setCreditHistory] = useState("Clean / Good Credit");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(true);

  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const widgetTopRef = useRef<HTMLDivElement>(null);

  // Amortization Calculations
  const calculation = useMemo(() => {
    const principal = Math.max(0, loanAmount - deposit);
    if (principal <= 0 || interestRate <= 0 || termYears <= 0) {
      return {
        payment: 0,
        totalInterest: 0,
        totalRepayment: 0,
        netFinance: principal,
      };
    }

    const annualRate = interestRate / 100;
    let periodsPerYear = 52;
    if (frequency === "fortnightly") periodsPerYear = 26;
    if (frequency === "monthly") periodsPerYear = 12;

    const periodicRate = annualRate / periodsPerYear;
    const totalPayments = termYears * periodsPerYear;

    const periodicPayment =
      principal *
      (periodicRate * Math.pow(1 + periodicRate, totalPayments)) /
      (Math.pow(1 + periodicRate, totalPayments) - 1);

    const totalRepayment = periodicPayment * totalPayments;
    const totalInterest = Math.max(0, totalRepayment - principal);

    return {
      payment: Math.round(periodicPayment),
      totalInterest: Math.round(totalInterest),
      totalRepayment: Math.round(totalRepayment),
      netFinance: principal,
    };
  }, [loanAmount, deposit, termYears, interestRate, frequency]);

  const frequencyLabel =
    frequency === "weekly" ? "week" : frequency === "fortnightly" ? "fortnight" : "month";

  // Navigation handlers
  const handleOpenQuote = () => {
    setView("quote");
    setFormError(null);
    widgetTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBackToCalculator = () => {
    setView("calculator");
    setFormError(null);
    widgetTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleResetCalculator = () => {
    setView("calculator");
    setFirstName("");
    setLastName("");
    setMobilePhone("");
    setEmailAddress("");
    setPostcode("");
    setFormError(null);
    widgetTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Quote Form Submission
  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const cleanFirst = firstName.trim();
    const cleanLast = lastName.trim();
    const cleanMobile = mobilePhone.trim();
    const cleanEmail = emailAddress.trim();
    const cleanPostcode = postcode.trim();

    if (!cleanFirst || !cleanLast || !cleanMobile || !cleanEmail || !cleanPostcode) {
      setFormError("Please fill in all required contact fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    const phoneDigits = cleanMobile.replace(/[^0-9]/g, "");
    if (phoneDigits.length < 8) {
      setFormError("Please enter a valid Australian contact phone number.");
      return;
    }

    if (!privacyConsent) {
      setFormError("Please confirm your agreement with the privacy consent.");
      return;
    }

    setIsSubmitting(true);

    // Simulate fast submission
    setTimeout(() => {
      setIsSubmitting(false);
      setView("success");
      widgetTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 600);
  };

  return (
    <div
      ref={widgetTopRef}
      className="w-full bg-white rounded-2xl border border-gray-200/80 shadow-2xl overflow-hidden text-[#06122d]"
    >
      {/* Top Banner Header with Official Accelerate Logo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-100 gap-4 bg-white">
        <div className="flex items-center gap-2">
          <Image
            src="/images/home/logo.png"
            alt="Accelerate Financial Solutions"
            width={220}
            height={52}
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </div>
        <div className="text-left sm:text-right">
          <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
            Interactive Finance Calculator
          </span>
          <span className="text-xs sm:text-[13px] font-semibold text-[#0082ca]">
            Fast, Flexible &amp; Transparent
          </span>
        </div>
      </div>

      {/* VIEW 1: CALCULATOR MAIN GRID */}
      {view === "calculator" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* LEFT PANEL: Inputs (7 cols on lg) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 bg-white">
            {/* 1. Loan Amount */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#06122d]">
                  Loan Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    min={1000}
                    max={200000}
                    step={1000}
                    value={loanAmount}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setLoanAmount(val);
                      if (deposit > val) setDeposit(val);
                    }}
                    className="w-36 text-right pr-3 pl-7 py-1.5 text-base sm:text-lg font-bold text-[#06122d] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none transition"
                  />
                </div>
              </div>
              <input
                type="range"
                min={1000}
                max={200000}
                step={1000}
                value={loanAmount}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setLoanAmount(val);
                  if (deposit > val) setDeposit(val);
                }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0082ca]"
              />
              <div className="flex justify-between text-xs font-semibold text-gray-400">
                <span>$1,000</span>
                <span>$100,000</span>
                <span>$200,000</span>
              </div>
            </div>

            {/* 2. Deposit Amount (Optional) */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#06122d]">
                  Deposit Amount (Optional)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    min={0}
                    max={loanAmount}
                    step={500}
                    value={deposit}
                    onChange={(e) =>
                      setDeposit(Math.min(loanAmount, Math.max(0, Number(e.target.value))))
                    }
                    className="w-36 text-right pr-3 pl-7 py-1.5 text-base sm:text-lg font-bold text-[#06122d] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none transition"
                  />
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={loanAmount}
                step={500}
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0082ca]"
              />
              <div className="flex justify-between text-xs font-semibold text-gray-400">
                <span>$0</span>
                <span>${loanAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* 3. Loan Term (Pill Selector 1 to 7 Years) */}
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#06122d] block">
                Loan Term (Years)
              </label>
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2 p-1 bg-slate-100 rounded-xl border border-gray-200">
                {[1, 2, 3, 4, 5, 6, 7].map((year) => {
                  const isActive = termYears === year;
                  return (
                    <button
                      key={year}
                      type="button"
                      onClick={() => setTermYears(year)}
                      className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#0082ca] text-white shadow-md shadow-[#0082ca]/30"
                          : "text-gray-600 hover:text-[#06122d] hover:bg-slate-200/60"
                      }`}
                    >
                      {year}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Interest Rate & Payment Frequency Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center pt-2">
              {/* Interest Rate */}
              <div className="sm:col-span-5 space-y-2">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#06122d] block">
                  Interest Rate (% p.a.)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={0.1}
                    max={30}
                    step={0.01}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full text-left pl-3 pr-8 py-2 text-base sm:text-lg font-bold text-[#06122d] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none transition"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm">
                    %
                  </span>
                </div>
              </div>

              {/* Payment Frequency */}
              <div className="sm:col-span-7 space-y-2">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#06122d] block">
                  Payment Frequency
                </label>
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl border border-gray-200">
                  {(["weekly", "fortnightly", "monthly"] as const).map((freq) => {
                    const isActive = frequency === freq;
                    const label =
                      freq === "weekly" ? "Weekly" : freq === "fortnightly" ? "Fortnightly" : "Monthly";
                    return (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFrequency(freq)}
                        className={`py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#0082ca] text-white shadow-md shadow-[#0082ca]/30"
                            : "text-gray-600 hover:text-[#06122d] hover:bg-slate-200/60"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Summary / Results Card (5 cols on lg) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#00205B] to-[#001640] p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative background glow elements */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#0082CA] opacity-20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#00C4B4] opacity-10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs uppercase font-bold tracking-widest text-[#33A0E2] block mb-1">
                  Your Estimated Repayments
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    ${calculation.payment.toLocaleString()}
                  </span>
                  <span className="text-base sm:text-lg font-medium text-gray-300">
                    / {frequencyLabel}
                  </span>
                </div>
              </div>

              <div className="h-px bg-white/15 my-4" />

              {/* Financial Summary Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Borrowed Principal:</span>
                  <span className="font-bold text-white text-sm sm:text-base">
                    ${loanAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Deposit Applied:</span>
                  <span className="font-bold text-white text-sm sm:text-base">
                    ${deposit.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Net Finance Amount:</span>
                  <span className="font-bold text-white text-sm sm:text-base">
                    ${calculation.netFinance.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Total Interest Payable:</span>
                  <span className="font-bold text-white text-sm sm:text-base">
                    ${calculation.totalInterest.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-gray-200 pt-2 border-t border-white/10">
                  <span className="font-semibold">Total Repayments:</span>
                  <span className="font-black text-[#00c5d6] text-base sm:text-lg">
                    ${calculation.totalRepayment.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* 2 Call To Action Buttons ("Đổi thành 2 nút") */}
            <div className="relative z-10 pt-6 space-y-3">
              {/* BUTTON 1: Get a Free Quote (Interactive Quote Flow) */}
              <button
                type="button"
                onClick={handleOpenQuote}
                className="w-full bg-[#0082CA] hover:bg-[#00c5d6] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-6 rounded-xl shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-3 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <FileText className="w-5 h-5" />
              </button>

              {/* BUTTON 2: Apply Now (External Ambition Cloud Link) */}
              <a
                href="https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-2 text-xs text-gray-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-4 h-4 text-[#00c5d6]" />
                  No impact on credit score
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-4 h-4 text-[#00c5d6]" />
                  Fast Online Process
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: GET A FREE QUOTE INTERACTIVE FORM */}
      {view === "quote" && (
        <div className="p-6 sm:p-8 lg:p-10 bg-white">
          {/* Top Navigation & Back Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-gray-100">
            <div>
              <button
                type="button"
                onClick={handleBackToCalculator}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0082ca] hover:text-[#00205B] transition-colors mb-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Calculator</span>
              </button>
              <h2 className="text-2xl sm:text-3xl font-black text-[#00205B] tracking-tight">
                Get Your Free Finance Quote
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Compare tailored options in 60 seconds with zero impact on your credit score.
              </p>
            </div>
          </div>

          {/* Pre-populated Summary Banner */}
          <div className="bg-gradient-to-r from-[#00205B] to-[#001640] text-white rounded-xl p-4 sm:p-5 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full sm:w-auto flex-1">
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#33A0E2] font-bold block">
                  Net Loan Amount
                </span>
                <span className="text-base sm:text-xl font-black">
                  ${calculation.netFinance.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#33A0E2] font-bold block">
                  Deposit
                </span>
                <span className="text-base sm:text-xl font-bold">
                  ${deposit.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#33A0E2] font-bold block">
                  Loan Term
                </span>
                <span className="text-base sm:text-xl font-bold">
                  {termYears} {termYears === 1 ? "Year" : "Years"}
                </span>
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#00c5d6] font-bold block">
                  Est. Repayment
                </span>
                <span className="text-base sm:text-xl font-black text-[#00c5d6]">
                  ${calculation.payment.toLocaleString()} / {frequencyLabel}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleBackToCalculator}
              className="text-xs font-bold uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white px-3.5 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
            >
              Edit Figures
            </button>
          </div>

          {/* Quote Form */}
          <form onSubmit={handleSubmitQuote} className="space-y-8" noValidate>
            {/* Section 1: Asset & Purchase Details */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#0082CA] text-white text-[11px] font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0082CA]">
                  Asset &amp; Purchase Details
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="assetTypeSelect"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    Asset / Loan Type *
                  </label>
                  <select
                    id="assetTypeSelect"
                    value={assetType}
                    onChange={(e) => setAssetType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  >
                    <option value="Car / Vehicle">Car / Vehicle</option>
                    <option value="Caravan / Camper">Caravan / Camper</option>
                    <option value="Boat / Marine">Boat / Marine</option>
                    <option value="Motorcycle">Motorcycle</option>
                    <option value="Commercial Equipment">Commercial Equipment</option>
                    <option value="Personal / Debt Consolidation">Personal / Debt Consolidation</option>
                    <option value="Home & Property">Home &amp; Property Loan</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="buyingFromSelect"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    Buying From *
                  </label>
                  <select
                    id="buyingFromSelect"
                    value={buyingFrom}
                    onChange={(e) => setBuyingFrom(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  >
                    <option value="Licensed Dealer">Licensed Dealer</option>
                    <option value="Private Seller">Private Seller</option>
                    <option value="Refinance / Existing Loan">Refinance / Existing Loan</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="assetConditionSelect"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    Asset Condition *
                  </label>
                  <select
                    id="assetConditionSelect"
                    value={assetCondition}
                    onChange={(e) => setAssetCondition(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  >
                    <option value="Used">Used</option>
                    <option value="Brand New">Brand New</option>
                    <option value="Demonstrator">Demonstrator</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Profile & Eligibility */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#0082CA] text-white text-[11px] font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0082CA]">
                  Your Profile
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="employmentSelect"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    Employment Status *
                  </label>
                  <select
                    id="employmentSelect"
                    value={employmentStatus}
                    onChange={(e) => setEmploymentStatus(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time / Casual">Part-Time / Casual</option>
                    <option value="Self-Employed / ABN">Self-Employed / ABN</option>
                    <option value="Pension / Other">Pension / Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="residencySelect"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    Residency Status *
                  </label>
                  <select
                    id="residencySelect"
                    value={residencyStatus}
                    onChange={(e) => setResidencyStatus(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  >
                    <option value="Australian Citizen / Permanent Resident">
                      Australian Citizen / Permanent Resident
                    </option>
                    <option value="Visa Holder">Visa Holder</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="creditHistorySelect"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    Credit History *
                  </label>
                  <select
                    id="creditHistorySelect"
                    value={creditHistory}
                    onChange={(e) => setCreditHistory(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  >
                    <option value="Clean / Good Credit">Clean / Good Credit</option>
                    <option value="Average / Minor Late Payments">Average / Minor Late Payments</option>
                    <option value="Defaults / Past Issues">Defaults / Past Credit Issues</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Contact Details */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-[#0082CA] text-white text-[11px] font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0082CA]">
                  Where Should We Send Your Quote?
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label
                    htmlFor="firstNameInput"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    First Name *
                  </label>
                  <input
                    id="firstNameInput"
                    type="text"
                    required
                    placeholder="e.g. Sarah"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastNameInput"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    Last Name *
                  </label>
                  <input
                    id="lastNameInput"
                    type="text"
                    required
                    placeholder="e.g. Jenkins"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobilePhoneInput"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    Mobile Phone *
                  </label>
                  <input
                    id="mobilePhoneInput"
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    value={mobilePhone}
                    onChange={(e) => setMobilePhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="emailAddressInput"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="emailAddressInput"
                    type="email"
                    required
                    placeholder="sarah@example.com.au"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postcodeInput"
                    className="block text-xs font-bold text-[#00205B] uppercase mb-1.5"
                  >
                    Postcode *
                  </label>
                  <input
                    id="postcodeInput"
                    type="text"
                    required
                    maxLength={4}
                    placeholder="e.g. 5000"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.replace(/[^0-9]/g, "").slice(0, 4))}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#00205B] bg-slate-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0082ca] focus:border-[#0082ca] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Form Error Banner */}
            {formError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium">
                {formError}
              </div>
            )}

            {/* Privacy Consent & Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-100">
              <label className="flex items-start gap-2.5 cursor-pointer max-w-xl">
                <input
                  type="checkbox"
                  checked={privacyConsent}
                  onChange={(e) => setPrivacyConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#0082CA] border-gray-300 rounded focus:ring-[#0082CA]"
                />
                <span className="text-xs text-gray-500 leading-relaxed">
                  I agree to Accelerate Financial Solutions contacting me regarding my finance quote
                  and acknowledge the Privacy Policy. This enquiry will{" "}
                  <strong className="text-gray-700">not</strong> affect my credit score.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-w-[220px] bg-[#0082CA] hover:bg-[#00205B] disabled:bg-slate-400 text-white font-extrabold text-sm sm:text-base uppercase tracking-wider py-3.5 px-8 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* VIEW 3: QUOTE CONFIRMATION SUCCESS SCREEN */}
      {view === "success" && (
        <div className="p-8 sm:p-12 bg-white text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="max-w-lg mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0082CA] flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00c5d6]" />
              Quote Request Received
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#00205B]">
              Thanks, {firstName || "there"}!
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              An Accelerate Financial Solutions broker is reviewing your tailored quote options and
              will be in touch shortly via{" "}
              <strong className="text-[#00205B] font-bold">
                {mobilePhone} &amp; {emailAddress}
              </strong>
              .
            </p>
          </div>

          {/* Summary Recap Card */}
          <div className="max-w-xl mx-auto bg-slate-50 border border-gray-200 rounded-xl p-5 text-left grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div>
              <span className="text-xs text-gray-400 font-semibold block">Asset Type</span>
              <span className="font-bold text-[#00205B]">{assetType}</span>
            </div>
            <div>
              <span className="text-xs text-gray-400 font-semibold block">Net Borrowed</span>
              <span className="font-bold text-[#00205B]">
                ${calculation.netFinance.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-xs text-gray-400 font-semibold block">Est. Repayment</span>
              <span className="font-bold text-[#0082CA]">
                ${calculation.payment.toLocaleString()} / {frequencyLabel}
              </span>
            </div>
          </div>

          {/* Next Steps Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#00205B] hover:bg-[#0082CA] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-7 rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Full Application</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={handleResetCalculator}
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl transition-colors cursor-pointer"
            >
              Return to Calculator
            </button>
          </div>
        </div>
      )}

      {/* Footer Disclaimer */}
      <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-100 text-[11px] sm:text-xs text-gray-500 leading-relaxed">
        <p>
          <strong className="text-gray-700">DISCLAIMER:</strong> This loan calculator is provided
          for general illustrative purposes only. It is not intended as a loan offer, official
          quote, or guarantee of finance approval. The estimated repayments calculated do not
          include potential lender fees, account keeping charges, or government duties that may
          apply. The actual interest rate and repayment amounts offered will depend on individual
          credit assessment, financial criteria, and lender approval.
        </p>
      </div>
    </div>
  );
}
