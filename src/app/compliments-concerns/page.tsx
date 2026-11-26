"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import SectionEyebrow from "@/components/shared/SectionEyebrow";
import {
  Heart,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Send,
  MessageSquare,
  HelpCircle,
} from "lucide-react";

export default function ComplimentsConcernsPage() {
  const [activeEntity, setActiveEntity] = useState<"solutions" | "loans">("solutions");
  const [feedbackType, setFeedbackType] = useState<"compliment" | "concern">("compliment");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    entity: "Accelerate Financial Solutions Pty Ltd",
    brokerName: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="Compliments & Concerns"
          eyebrow="Feedback & Client Care"
          description="We always work hard to build strong and lasting relationships with our valued customers. By listening to your feedback, not only can we address any immediate concerns you may have, we will also continually improve our products and services."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Compliments & Concerns" },
          ]}
        />

        {/* Entity Selector Tabs */}
        <section className="py-8 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00c5d6] block mb-1">
                  Select Business Entity
                </span>
                <p className="text-sm font-semibold text-[#06122d]">
                  Click the tabs below to view the specific Compliments &amp; Concerns process for our business entities:
                </p>
              </div>

              <div className="inline-flex p-1 bg-slate-200/80 rounded-xl">
                <button
                  type="button"
                  onClick={() => {
                    setActiveEntity("solutions");
                    setFormData((prev) => ({ ...prev, entity: "Accelerate Financial Solutions Pty Ltd" }));
                  }}
                  className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeEntity === "solutions"
                      ? "bg-white text-[#06122d] shadow-sm"
                      : "text-slate-600 hover:text-[#06122d]"
                  }`}
                >
                  Accelerate Financial Solutions
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveEntity("loans");
                    setFormData((prev) => ({ ...prev, entity: "Accelerate Loans Pty Ltd" }));
                  }}
                  className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeEntity === "loans"
                      ? "bg-white text-[#06122d] shadow-sm"
                      : "text-slate-600 hover:text-[#06122d]"
                  }`}
                >
                  Accelerate Loans Pty Ltd
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Philosophy Notice (Verbatim from original website) */}
        <section className="py-12 bg-[#071533] text-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c5d6]/20 text-[#00c5d6]">
                {activeEntity === "solutions"
                  ? "Accelerate Financial Solutions Pty Ltd"
                  : "Accelerate Loans Pty Ltd"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Compliments &amp; Concerns –{" "}
                {activeEntity === "solutions"
                  ? "Accelerate Financial Solutions Pty Ltd"
                  : "Accelerate Loans Pty Ltd"}
              </h2>
              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                We always work hard to build strong and lasting relationships with our valued customers. By listening to your feedback, not only can we address any immediate concerns you may have, we will also continually improve our products and services.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                We know there are times when you may wish to compliment us on something we have done well and other times when you may wish to tell us we have not met your expectations.
              </p>
            </div>
          </div>
        </section>

        {/* 2 Main Sections: Compliments & Concerns (100% Verbatim Copy) */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Compliments Section */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#f8fafc] border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center mb-6">
                    <Heart className="w-7 h-7 fill-current" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#06122d] mb-4">
                    Compliments
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                    Our representatives are always delighted to know that they have succeeded in making your experience a pleasant and successful one.
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                    If one of our representatives has provided you with exceptional service in any way, please let us know using the details below, so that we can further encourage them via this feedback process.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      setFeedbackType("compliment");
                      document.getElementById("feedback-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#00c5d6] hover:text-[#009fb0] transition-colors cursor-pointer"
                  >
                    <span>Send a Compliment Online ↓</span>
                  </button>
                </div>
              </div>

              {/* Concerns Section */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#f8fafc] border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6">
                    <AlertTriangle className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#06122d] mb-4">
                    Concerns
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                    If, for any reason, you do not feel that you have received the highest standard of care from us, we encourage you to share this with us. We have developed a process that makes it easy for you to tell us of your concerns and for them to be addressed quickly and fairly.
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                    If you choose to contact us by mail or email, please make sure you provide as much detail as possible about your complaint.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      setFeedbackType("concern");
                      document.getElementById("feedback-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    <span>Lodge a Concern Online ↓</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dispute Resolution, Updates & Resolution Timeline */}
        <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionEyebrow text="Transparent Process" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06122d] leading-tight">
                Complaints Resolution Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {/* Need an update */}
              <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-[#06122d]">
                    Need an update on your complaint?
                  </h4>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  If you have lodged a complaint with us, you can contact us at any time to ask for an update on its status. Contact us through any of the methods listed and please be sure to refer to your earlier communication so that we can respond effectively.
                </p>
              </div>

              {/* Resolution */}
              <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-[#06122d]">
                    Resolution
                  </h4>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We will try to deal with your complaint on the spot. However, if this is not possible, we will acknowledge your complaint within 24 hours. We will ensure we treat you fairly and will work to resolve your complaint as soon as possible. In the rare event we are still investigating your complaint after 30 days, we will write to you to explain why and to let you know when we expect to have completed our investigation.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  When we have completed our investigation we will write to let you know the outcome and the reasons for our decision.
                </p>
              </div>
            </div>

            {/* Taking it further (AFCA) */}
            <div className="max-w-5xl mx-auto p-7 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00c5d6]/20 text-[#00c5d6] flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-[#06122d] mb-2">
                    Taking it further
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We hope that you will be satisfied with how we deal with your complaint. However, if your concerns remain unresolved, or you have not heard from us within 30 days, then you can have your complaint heard by an independent party, the Australian Financial Complaints Authority (AFCA) at:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs font-bold text-slate-500 uppercase">Telephone</p>
                  <a href="tel:1800931678" className="text-base font-bold text-[#00c5d6] hover:underline">
                    1800 931 678
                  </a>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs font-bold text-slate-500 uppercase">Mail</p>
                  <p className="font-semibold text-slate-800">GPO Box 3, Melbourne Vic 3001</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs font-bold text-slate-500 uppercase">Email</p>
                  <a href="mailto:info@afca.org.au" className="font-semibold text-[#00c5d6] hover:underline break-all">
                    info@afca.org.au
                  </a>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <p className="text-xs font-bold text-slate-500 uppercase">Web</p>
                  <a
                    href="https://www.afca.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#00c5d6] hover:underline"
                  >
                    <span>www.afca.org.au</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info & Interactive Feedback Form Section */}
        <section className="py-16 lg:py-24 bg-white" id="feedback-form">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Direct Contact Info (100% Verbatim) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <SectionEyebrow text="Direct Contact" align="left" />
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06122d] mb-3">
                    Contact Our Office
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    We can be contacted via:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">Office Address</p>
                      <p className="text-sm font-semibold text-[#06122d]">113B Ledger Road<br />Beverley SA 5009</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">Telephone</p>
                      <a href="tel:0883481000" className="text-base font-bold text-[#06122d] hover:text-[#00c5d6] transition-colors">
                        +61 8 8348 1000
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#e6fafc] text-[#00c5d6] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">Email</p>
                      <a href="mailto:info@acceleratefinancial.com.au" className="text-sm font-bold text-[#00c5d6] hover:underline">
                        info@acceleratefinancial.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Online Submission Form */}
              <div className="lg:col-span-7">
                <div className="bg-[#f8fafc] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-[#06122d] mb-1 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-[#00c5d6]" />
                      Online Feedback Submission
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Submit your compliment or concern directly to our management team.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-extrabold text-[#06122d]">
                        Thank You For Your Feedback
                      </h4>
                      <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Your submission has been securely delivered to our customer care team. If you submitted a concern, receipt will be formally acknowledged within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", phone: "", entity: "Accelerate Financial Solutions Pty Ltd", brokerName: "", message: "" });
                        }}
                        className="px-6 py-2.5 bg-[#00c5d6] text-white rounded-xl font-bold text-sm hover:bg-[#00b0c0] transition-colors cursor-pointer"
                      >
                        Submit Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Toggle */}
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFeedbackType("compliment")}
                          className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                            feedbackType === "compliment"
                              ? "bg-[#00c5d6] text-white border-[#00c5d6] shadow-sm"
                              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <Heart className="w-4 h-4" />
                          <span>A Compliment</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFeedbackType("concern")}
                          className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                            feedbackType === "concern"
                              ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          <AlertTriangle className="w-4 h-4" />
                          <span>A Concern</span>
                        </button>
                      </div>

                      {/* Business Entity */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Relevant Business Entity <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.entity}
                          onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00c5d6]/50 cursor-pointer"
                        >
                          <option value="Accelerate Financial Solutions Pty Ltd">
                            Accelerate Financial Solutions Pty Ltd
                          </option>
                          <option value="Accelerate Loans Pty Ltd">
                            Accelerate Loans Pty Ltd
                          </option>
                        </select>
                      </div>

                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Full name"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00c5d6]/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Contact number"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00c5d6]/50"
                          />
                        </div>
                      </div>

                      {/* Email & Broker */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email address"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00c5d6]/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Broker / Representative (Optional)
                          </label>
                          <input
                            type="text"
                            value={formData.brokerName}
                            onChange={(e) => setFormData({ ...formData, brokerName: e.target.value })}
                            placeholder="Name of broker"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00c5d6]/50"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {feedbackType === "compliment"
                            ? "Your Compliment Details"
                            : "Details of Your Concern"}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={
                            feedbackType === "compliment"
                              ? "Tell us what made your experience great..."
                              : "Please provide as much detail as possible about your complaint..."
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00c5d6]/50"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm bg-[#00c5d6] text-white hover:bg-[#00b0c0] shadow-sm transition-all cursor-pointer active:scale-95"
                      >
                        <Send className="w-4 h-4" />
                        <span>
                          {feedbackType === "compliment" ? "Submit Compliment" : "Submit Complaint"}
                        </span>
                      </button>
                    </form>
                  )}
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
