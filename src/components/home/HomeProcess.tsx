import React from "react";
import Image from "next/image";
import SectionEyebrow from "@/components/shared/SectionEyebrow";

interface StepItem {
  step: string;
  title: string;
  desc: string;
  image: string;
}

const steps: StepItem[] = [
  {
    step: "step 01",
    title: "Discovery",
    desc: "Contact us to discuss your goals and financial needs.",
    image: "/images/home/journey_step_1.png",
  },
  {
    step: "step 02",
    title: "Easy Application",
    desc: "Our team manages all paperwork and negotiations.",
    image: "/images/home/journey_step_2.png",
  },
  {
    step: "step 03",
    title: "Loan Strategy",
    desc: "We compare 40+ lenders to find your best rate options.",
    image: "/images/home/journey_step_3.png",
  },
  {
    step: "step 04",
    title: "Approval & Settlement",
    desc: "Secure your funds with confidence and ongoing support.",
    image: "/images/home/journey_step_4.png",
  },
];

export default function HomeProcess() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <SectionEyebrow text="How It Works" />

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#06122d] leading-tight tracking-tight">
            Accelerate Your Journey
          </h2>
        </div>

        {/* 4 Steps Grid with aligned horizontal workflow layout on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative z-10 flex flex-col items-center group transition-transform duration-300"
            >
              {/* Graphic container with exact original design illustration */}
              <div className="w-full max-w-[260px] mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={item.image}
                  alt={`${item.step} - ${item.title}`}
                  width={260}
                  height={192}
                  className="w-full h-auto object-contain mx-auto select-none pointer-events-none"
                  priority
                />
              </div>

              {/* Title & Description left-aligned matching ribbon width */}
              <div className="w-full max-w-[250px] text-left">
                <h3 className="text-xl font-bold text-[#06122d] mb-2 group-hover:text-[#00c5d6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#555555] text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
