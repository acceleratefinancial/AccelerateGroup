import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SectionEyebrow from "@/components/shared/SectionEyebrow";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({
  title,
  eyebrow,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }, { label: title }],
}: PageHeroProps) {
  return (
    <section className="relative bg-[#06122d] text-white py-16 lg:py-20 overflow-hidden border-b border-slate-800">
      {/* Subtle Background Glows matching brand style */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#00c5d6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[300px] h-[300px] bg-[#001e62]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumb Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-400">
                {breadcrumbs.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <li key={crumb.label} className="flex items-center gap-2">
                      {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />}
                      {crumb.href && !isLast ? (
                        <Link
                          href={crumb.href}
                          className="hover:text-[#00c5d6] transition-colors"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-[#00c5d6] font-medium" aria-current="page">
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {/* Eyebrow */}
          {eyebrow && <SectionEyebrow text={eyebrow} align="left" />}

          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-tight tracking-tight mb-4">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-slate-300 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

