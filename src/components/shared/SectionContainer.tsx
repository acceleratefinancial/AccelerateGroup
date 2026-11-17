import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "slate" | "navy";
}

export default function SectionContainer({
  children,
  className = "",
  id,
  bg = "white",
}: SectionContainerProps) {
  const bgClasses = {
    white: "bg-white text-[#333333]",
    slate: "bg-[#f8fafc] text-[#333333]",
    navy: "bg-[#06122d] text-white",
  };

  return (
    <section id={id} className={`py-16 lg:py-24 ${bgClasses[bg]} ${className}`}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

