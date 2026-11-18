"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

export default function HomeNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Calculator", href: "/calculator" },
    { label: "Blog", href: "/blog" },
    { label: "Client Referral", href: "/client-referral" },
    { label: "Contact Us", href: "/#contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/#contact") {
      return false;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isApplyActive = pathname === "/apply-now" || pathname.startsWith("/apply-now");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[80px] sm:min-h-[90px] lg:min-h-[105px] py-2 gap-2 sm:gap-4">
          {/* Logo - Sized properly for mobile, desktop scaled to ~360px */}
          <Link href="/" className="flex items-center group shrink-0 py-1">
            <div className="relative w-[170px] sm:w-[240px] lg:w-[320px] xl:w-[360px] h-[46px] sm:h-[62px] lg:h-[78px] xl:h-[86px]">
              <Image
                src="/images/home/logo.png"
                alt="Accelerate Financial"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 640px) 170px, (max-width: 1024px) 260px, 360px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[16px] xl:text-[17px] font-bold tracking-tight transition-colors whitespace-nowrap relative py-1.5 ${
                    active
                      ? "text-[#00c5d6]"
                      : "text-gray-800 hover:text-[#00c5d6]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00c5d6] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Apply Now Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href="/apply-now"
              className={`inline-flex items-center gap-2 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 sm:px-6 py-2.5 sm:py-3 rounded-md transition-all shadow-sm hover:shadow-md active:scale-95 ${
                isApplyActive
                  ? "bg-[#009fb0] ring-2 ring-[#00c5d6]/50 shadow-md"
                  : "bg-[#00c5d6] hover:bg-[#00b0c0]"
              }`}
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Action Buttons & Menu Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0 relative z-20">
            <Link
              href="/apply-now"
              className="sm:hidden inline-flex items-center gap-1 bg-[#00c5d6] text-white text-[11px] font-bold uppercase px-2.5 py-1.5 rounded-md shrink-0"
            >
              <span>Apply</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 sm:p-2.5 text-gray-700 hover:text-[#00c5d6] transition-colors focus:outline-hidden cursor-pointer touch-manipulation select-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 bg-white animate-fadeIn relative z-30">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-base font-bold transition-colors flex items-center justify-between ${
                      active
                        ? "bg-[#e6fafc] text-[#00c5d6]"
                        : "text-gray-800 hover:text-[#00c5d6] hover:bg-gray-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#00c5d6]" />}
                  </Link>
                );
              })}
              <div className="pt-3 px-3">
                <Link
                  href="/apply-now"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#00c5d6] hover:bg-[#00b0c0] text-white text-sm font-bold uppercase tracking-wider py-3 rounded-md transition-colors shadow-sm"
                >
                  <span>Apply Online Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
