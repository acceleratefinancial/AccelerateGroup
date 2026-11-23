"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionEyebrow from "@/components/shared/SectionEyebrow";

const reviews = [
  {
    name: "Jon",
    date: "2 weeks ago",
    avatarBg: "bg-blue-600",
    initial: "J",
    text: "Absolutely outstanding service. I have not had a broker work so hard for me, and get the finance I required at good rates. Thank you Bianca 😊",
  },
  {
    name: "Rebecca",
    date: "2 weeks ago",
    avatarBg: "bg-purple-600",
    initial: "R",
    text: "We had such a great experience with Accelerate Financial Solutions while organising finance for our new-to-us car. From start to finish, the team were proactive, incredibly helpful and efficient throughout the entire process. Communication was fantastic, they kept everything moving along and made what can sometimes be a daunting process feel easy and stress-free. Special mention to Dan!",
  },
  {
    name: "Mikaylah",
    date: "2 weeks ago",
    avatarBg: "bg-emerald-600",
    initial: "M",
    text: "Scott Allanson has been amazing from the beginning through to the end. I was recommended Scott by a good family friend and I would recommend Scott to anyone looking for a stress free, quick and easy loan.",
  },
  {
    name: "Steve",
    date: "3 weeks ago",
    avatarBg: "bg-amber-600",
    initial: "S",
    text: "Big thanks to Dan for all his help in getting me the finance for my new bike. Dan's professional help made it easy to understand and he helped me through every process. Two thumbs up, I would highly recommend Dan to help you for your financial solutions.",
  },
  {
    name: "Scott",
    date: "1 month ago",
    avatarBg: "bg-indigo-600",
    initial: "S",
    text: "Absolute pleasure to work with Dan. Made it seamless and even after care was great. Highly recommend Accelerate Financial to anyone seeking competitive vehicle and personal loans!",
  },
  {
    name: "Antonia",
    date: "1 month ago",
    avatarBg: "bg-rose-600",
    initial: "A",
    text: "My experience with Accelerate was fantastic. Dan helped me with my loan and made my husband a happy customer. Would recommend him and Accelerate to anyone that needs help, fantastic people to deal with!",
  },
  {
    name: "sarge502",
    date: "3 weeks ago",
    avatarBg: "bg-teal-600",
    initial: "S",
    text: "Dan was very helpful in helping sort finances for a new car. Very quick and thorough, highly recommend Accelerate Financial Solutions.",
  },
  {
    name: "Corey",
    date: "2 months ago",
    avatarBg: "bg-cyan-600",
    initial: "C",
    text: "Hoppy and the Accelerate team made our car buying and finance completely seamless. They secured a fantastic rate and had the keys ready without any dealership hassle. Couldn't recommend them more!",
  },
];

// Multi-color Google Logo SVG
function GoogleWordmark() {
  return (
    <svg className="h-6 w-auto" viewBox="0 0 272 92" fill="none">
      <path
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#EA4335"
      />
      <path
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#FBBC05"
      />
      <path
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13.01v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.45zm-8.82 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.44 12.35 13.44 6.63 0 11.84-5.71 11.84-13.44z"
        fill="#4285F4"
      />
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
      <path
        d="M262.02 54.49l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.99 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.91-6.14zm-19.66-8.07l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
        fill="#EA4335"
      />
      <path
        d="M35.29 41.41V30.93h31.91c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.23 9.66C16.14 68.28 0 52.99 0 34.14 0 15.29 16.14 0 35.29 0c10.42 0 17.72 4.08 23.27 9.38l-7.39 7.39c-4.03-3.78-9.49-6.72-15.88-6.72-12.01 0-21.76 9.75-21.76 21.76 0 12.01 9.75 21.76 21.76 21.76 7.73 0 12.18-3.11 15-5.92 2.35-2.35 3.95-5.63 4.54-10.16H35.29z"
        fill="#4285F4"
      />
    </svg>
  );
}

// Google "G" Logo Icon
function GoogleGIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function HomeReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const displayedReviews = [
    ...reviews.slice(currentIndex),
    ...reviews.slice(0, currentIndex),
  ].slice(0, 3);

  return (
    <section className="py-20 lg:py-24 bg-[#f8fafc]" id="testimonials">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Rating Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <SectionEyebrow text="Client Reviews" />

          <a
            href="https://www.google.com/search?q=accelerate+financial+adelaide"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center p-3 rounded-2xl hover:bg-white/80 transition-all duration-300"
            title="Read Accelerate Financial 5-star reviews on Google"
          >
            {/* Rating Number & 5 Stars */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#06122d] tracking-tight">
                5.0
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 sm:w-6 h-5 sm:h-6 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>

            <p className="text-slate-600 text-sm font-medium mb-2.5">
              Based on{" "}
              <span className="font-bold text-[#06122d]">360+ Google reviews</span>
            </p>

            {/* Google Wordmark & Link */}
            <div className="flex items-center gap-2">
              <GoogleWordmark />
              <span className="text-xs font-semibold text-[#00c5d6] group-hover:underline flex items-center gap-1">
                Read all reviews →
              </span>
            </div>
          </a>
        </div>

        {/* Carousel & Cards Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={prevReview}
            aria-label="Previous Review"
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-gray-600 hover:text-[#00c5d6] hover:border-[#00c5d6] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextReview}
            aria-label="Next Review"
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-gray-600 hover:text-[#00c5d6] hover:border-[#00c5d6] transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 3 Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {displayedReviews.map((rev) => (
              <div
                key={rev.name}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top user row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-base shadow-xs`}
                      >
                        {rev.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-[#06122d] leading-snug">
                          {rev.name}
                        </h4>
                        <span className="text-xs text-slate-400">
                          {rev.date}
                        </span>
                      </div>
                    </div>
                    {/* Google G Icon */}
                    <div className="p-1">
                      <GoogleGIcon />
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                {/* Verified Customer Badge */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-[#00c5d6] font-semibold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified Customer
                  </span>
                  <span className="text-[11px] text-slate-400">Google Review</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Arrows & Indicator */}
          <div className="flex sm:hidden items-center justify-between mt-6 px-2">
            <span className="text-xs font-semibold text-slate-500">
              Review {currentIndex + 1} of {reviews.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevReview}
                aria-label="Previous Review"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center text-gray-700 active:bg-gray-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                aria-label="Next Review"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-xs flex items-center justify-center text-gray-700 active:bg-gray-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
