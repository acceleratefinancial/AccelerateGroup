"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export default function CalculatorWidget() {
  const [loanAmount, setLoanAmount] = useState<number>(30000);
  const [deposit, setDeposit] = useState<number>(0);
  const [termYears, setTermYears] = useState<number>(5);
  const [interestRate, setInterestRate] = useState<number>(6.99);
  const [frequency, setFrequency] = useState<"weekly" | "fortnightly" | "monthly">("weekly");

  // Calculations
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

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200/80 shadow-2xl overflow-hidden text-[#06122d]">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-100 gap-4 bg-white">
        <div className="relative w-44 sm:w-52 h-10 sm:h-12">
          <Image
            src="/images/home/logo.png"
            alt="Accelerate Financial Solutions"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        <div className="text-left sm:text-right">
          <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
            Interactive Finance Calculator
          </span>
          <span className="text-xs sm:text-[13px] font-semibold text-[#0082ca]">
            Fast, Flexible &amp; Transparent
          </span>
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left Inputs Column */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          {/* 1. Loan Amount */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#06122d]">
                Loan Amount
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-[#0082ca]/40 focus-within:border-[#0082ca] transition-all">
                <span className="text-slate-500 font-semibold mr-1.5 text-sm">$</span>
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
                  className="w-24 text-right font-bold text-sm sm:text-base text-[#06122d] bg-transparent focus:outline-none"
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
            <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1">
              <span>$1,000</span>
              <span>$100,000</span>
              <span>$200,000</span>
            </div>
          </div>

          {/* 2. Deposit Amount (Optional) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#06122d]">
                Deposit Amount (Optional)
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-[#0082ca]/40 focus-within:border-[#0082ca] transition-all">
                <span className="text-slate-500 font-semibold mr-1.5 text-sm">$</span>
                <input
                  type="number"
                  min={0}
                  max={loanAmount}
                  step={500}
                  value={deposit}
                  onChange={(e) => setDeposit(Math.min(loanAmount, Math.max(0, Number(e.target.value))))}
                  className="w-24 text-right font-bold text-sm sm:text-base text-[#06122d] bg-transparent focus:outline-none"
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
            <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1">
              <span>$0</span>
              <span>${loanAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* 3. Loan Term (Years) */}
          <div>
            <label className="block text-xs sm:text-sm font-bold uppercase tracking-wide text-[#06122d] mb-2.5">
              Loan Term (Years)
            </label>
            <div className="grid grid-cols-7 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((year) => {
                const isActive = termYears === year;
                return (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setTermYears(year)}
                    className={`py-2.5 text-sm sm:text-base font-bold rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#0082ca] text-white shadow-md shadow-[#0082ca]/30"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Interest Rate & Payment Frequency Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
            {/* Interest Rate */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wide text-[#06122d] mb-2">
                Interest Rate (% P.A.)
              </label>
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#0082ca]/40 focus-within:border-[#0082ca] transition-all">
                <input
                  type="number"
                  min={1}
                  max={30}
                  step={0.01}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full font-bold text-sm sm:text-base text-[#06122d] bg-transparent focus:outline-none"
                />
                <span className="text-slate-500 font-semibold ml-1.5 text-sm">%</span>
              </div>
            </div>

            {/* Payment Frequency */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wide text-[#06122d] mb-2">
                Payment Frequency
              </label>
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-lg">
                {(["weekly", "fortnightly", "monthly"] as const).map((freq) => {
                  const isActive = frequency === freq;
                  const label = freq === "weekly" ? "Weekly" : freq === "fortnightly" ? "Fortnightly" : "Monthly";
                  return (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setFrequency(freq)}
                      className={`py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#0082ca] text-white shadow-xs"
                          : "text-slate-600 hover:text-[#06122d]"
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

        {/* Right Output Summary (Navy Card Matching image14.png) */}
        <div className="lg:col-span-5 bg-[#001e55] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">
              Your Estimated Repayments
            </span>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                ${calculation.payment.toLocaleString()}
              </span>
              <span className="text-base sm:text-lg text-slate-300 font-medium">
                / {frequencyLabel}
              </span>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-3 pt-4 border-t border-blue-900/60 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Borrowed Principal:</span>
                <span className="font-bold text-white">${loanAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Deposit Applied:</span>
                <span className="font-bold text-white">${deposit.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Net Finance Amount:</span>
                <span className="font-bold text-white">${calculation.netFinance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Total Interest Payable:</span>
                <span className="font-bold text-white">${calculation.totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-200 pt-2 border-t border-blue-900/60 font-semibold">
                <span>Total Repayments:</span>
                <span className="font-black text-[#00e5c9] text-base sm:text-lg">
                  ${calculation.totalRepayment.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <a
              href="https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0082ca] hover:bg-[#0092e0] text-white text-sm sm:text-base font-bold uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-95 group cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center justify-center gap-4 text-[11px] sm:text-xs text-slate-300 mt-4">
              <div className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>No impact on credit score</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Fast Online Process</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-gray-100 text-[11px] text-slate-500 leading-relaxed">
        <strong>DISCLAIMER:</strong> This loan calculator is provided for general illustrative purposes only. It is not intended as a loan offer, official quote, or guarantee of finance approval. The estimated repayments calculated do not include potential lender fees, account keeping charges, or government duties that may apply. The actual interest rate and repayment amounts offered will depend on individual credit assessment, financial criteria, and lender approval.
      </div>
    </div>
  );
}
