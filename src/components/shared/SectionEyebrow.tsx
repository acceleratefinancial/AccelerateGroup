import React from "react";

interface SectionEyebrowProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  align?: "center" | "left";
  color?: string;
  showRightDashes?: boolean;
}

export default function SectionEyebrow({
  children,
  text,
  className = "",
  align = "center",
  color = "#00c5d6",
  showRightDashes,
}: SectionEyebrowProps) {
  const content = text || children;
  const renderRight = showRightDashes !== undefined ? showRightDashes : align === "center";

  return (
    <div
      className={`inline-flex items-center mb-3 select-none ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
    >
      {/* Left double dashes: short dash (14px) + gap (6px) + long dash (24px) */}
      <div className="inline-flex items-center gap-1.5 mr-2.5 sm:mr-3 shrink-0">
        <span
          className="w-3.5 h-[3px] rounded-[1px] shrink-0"
          style={{ backgroundColor: color }}
        />
        <span
          className="w-6 h-[3px] rounded-[1px] shrink-0"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Eyebrow Label */}
      <span
        className="text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
        style={{ color }}
      >
        {content}
      </span>

      {/* Right double dashes: short dash (14px) + gap (6px) + long dash (24px) */}
      {renderRight && (
        <div className="inline-flex items-center gap-1.5 ml-2.5 sm:ml-3 shrink-0">
          <span
            className="w-3.5 h-[3px] rounded-[1px] shrink-0"
            style={{ backgroundColor: color }}
          />
          <span
            className="w-6 h-[3px] rounded-[1px] shrink-0"
            style={{ backgroundColor: color }}
          />
        </div>
      )}
    </div>
  );
}
