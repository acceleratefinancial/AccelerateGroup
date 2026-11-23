"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-24 bg-white" id="contact">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual card with photo background & white floating info card matching Image 6 */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden min-h-[460px] sm:min-h-[500px] flex items-center justify-center p-6 sm:p-10 bg-slate-900 shadow-lg">
            {/* Background Desk/Documents Photo */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/home/contact-bg.png"
                alt="Accelerate Financial Office"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#071533]/40" />
            </div>

            {/* Cyan Offset Backing Layer */}
            <div className="absolute w-[86%] sm:w-[82%] h-[82%] bg-[#00c5d6] rounded-2xl -rotate-2 z-10 opacity-90 shadow-md pointer-events-none" />

            {/* White Floating Contact Card (matches Image 6) */}
            <div className="relative z-20 w-[88%] sm:w-[84%] bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-cyan-400 bg-cyan-50 flex items-center justify-center text-[#00c5d6] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Address
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5 leading-relaxed">
                    113B Ledger Road, Beverley, <br />
                    South Australia 5009
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-cyan-400 bg-cyan-50 flex items-center justify-center text-[#00c5d6] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Quick Contact
                  </h4>
                  <a
                    href="tel:0883481000"
                    className="block text-xs sm:text-[13px] font-bold text-slate-700 hover:text-[#00c5d6] transition-colors mt-0.5"
                  >
                    (08) 8348 1000
                  </a>
                </div>
              </div>

              {/* Email - Updated to approvals@acceleratefinancial.com.au */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-cyan-400 bg-cyan-50 flex items-center justify-center text-[#00c5d6] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Email
                  </h4>
                  <a
                    href="mailto:approvals@acceleratefinancial.com.au"
                    className="block text-xs sm:text-[13px] font-medium text-slate-600 hover:text-[#00c5d6] transition-colors mt-0.5 break-all"
                  >
                    approvals@acceleratefinancial.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send Us A Message Form */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#06122d] mb-6">
              Send Us A Message
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#06122d] mb-2">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Your message has been delivered to our loan advisory team. One of our specialists will be in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#06122d] hover:bg-[#00c5d6] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-200 text-sm text-[#06122d] placeholder-gray-400 focus:bg-white focus:border-[#00c5d6] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-200 text-sm text-[#06122d] placeholder-gray-400 focus:bg-white focus:border-[#00c5d6] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-200 text-sm text-[#06122d] focus:bg-white focus:border-[#00c5d6] focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Subject
                    </option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Salary packaging">Salary packaging</option>
                    <option value="Car buying">Car buying</option>
                    <option value="Home loans">Home loans</option>
                    <option value="General enquiry">General enquiry</option>
                  </select>
                </div>

                <div>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write Message . . ."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-4 rounded-md bg-gray-50 border border-gray-200 text-sm text-[#06122d] placeholder-gray-400 focus:bg-white focus:border-[#00c5d6] focus:outline-none transition-all resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-md bg-[#071533] hover:bg-[#00c5d6] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
