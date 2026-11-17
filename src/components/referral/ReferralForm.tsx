"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, ArrowRight, ShieldCheck } from "lucide-react";

export default function ReferralForm() {
  const [formData, setFormData] = useState({
    yourName: "",
    yourPhone: "",
    yourEmail: "",
    referralName: "",
    referralPhone: "",
    referralEmail: "",
    loanType: "Personal Loan",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 sm:p-12 text-center animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold text-[#06122d] mb-2">
          Thank You for Your Referral!
        </h4>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          We have received the referral details. Our broker team will reach out promptly to assist them with their finance requirements.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              yourName: "",
              yourPhone: "",
              yourEmail: "",
              referralName: "",
              referralPhone: "",
              referralEmail: "",
              loanType: "Personal Loan",
              notes: "",
            });
          }}
          className="inline-flex items-center gap-2 bg-[#00c5d6] hover:bg-[#00b0c0] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-md transition-all shadow-sm cursor-pointer"
        >
          <span>Submit Another Referral</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Section 1: Your Details */}
      <div className="bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100 space-y-4">
        <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#06122d] flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#00c5d6] text-white text-xs flex items-center justify-center">1</span>
          <span>Your Details (The Referrer)</span>
        </h4>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.yourName}
            onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00c5d6]/50 focus:border-[#00c5d6] bg-white text-[#06122d]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              Your Phone <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.yourPhone}
              onChange={(e) => setFormData({ ...formData, yourPhone: e.target.value })}
              placeholder="0400 000 000"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00c5d6]/50 focus:border-[#00c5d6] bg-white text-[#06122d]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              Your Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.yourEmail}
              onChange={(e) => setFormData({ ...formData, yourEmail: e.target.value })}
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00c5d6]/50 focus:border-[#00c5d6] bg-white text-[#06122d]"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Referral Details */}
      <div className="bg-slate-50/70 p-5 sm:p-6 rounded-xl border border-slate-100 space-y-4">
        <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#06122d] flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#00c5d6] text-white text-xs flex items-center justify-center">2</span>
          <span>Referral Contact Details</span>
        </h4>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
            Referral Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.referralName}
            onChange={(e) => setFormData({ ...formData, referralName: e.target.value })}
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00c5d6]/50 focus:border-[#00c5d6] bg-white text-[#06122d]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              Referral Phone <span className="text-rose-500">* (Mandatory)</span>
            </label>
            <input
              type="tel"
              required
              value={formData.referralPhone}
              onChange={(e) => setFormData({ ...formData, referralPhone: e.target.value })}
              placeholder="0411 222 333"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00c5d6]/50 focus:border-[#00c5d6] bg-white text-[#06122d]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              Referral Email <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              value={formData.referralEmail}
              onChange={(e) => setFormData({ ...formData, referralEmail: e.target.value })}
              placeholder="jane@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00c5d6]/50 focus:border-[#00c5d6] bg-white text-[#06122d]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
            Finance Requirement / Notes <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="E.g. Looking for vehicle finance or home mortgage advice..."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#00c5d6]/50 focus:border-[#00c5d6] bg-white text-[#06122d] resize-none"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Information handled with strict Australian privacy standards.</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00c5d6] hover:bg-[#00b0c0] text-white text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Submit Referral</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
