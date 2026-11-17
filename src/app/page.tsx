import React from "react";
import type { Metadata } from "next";
import HomeNavbar from "@/components/home/HomeNavbar";
import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import HomeLenders from "@/components/home/HomeLenders";
import HomeProcess from "@/components/home/HomeProcess";
import HomeWhyChooseUs from "@/components/home/HomeWhyChooseUs";
import HomeReviews from "@/components/home/HomeReviews";
import HomeTeam from "@/components/home/HomeTeam";
import HomeContact from "@/components/home/HomeContact";
import HomeFooter from "@/components/home/HomeFooter";

export const metadata: Metadata = {
  title: "Accelerate Financial – Smart Finance Solutions For Your Future",
  description:
    "Tailored mortgage, vehicle, and business loans with competitive rates and expert advice to reach your goals faster.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      {/* Sticky Main Navigation with Accelerate logo & Apply Now CTA */}
      <HomeNavbar />

      {/* Main content sections exactly matching design */}
      <main className="flex-1">
        {/* 1. Hero: Smart Finance Solutions For Your Future */}
        <HomeHero />

        {/* 2. What We Offer: We Provide Best Services For Your Loan */}
        <HomeServices />

        {/* 3. Trusted By 40+ Lenders */}
        <HomeLenders />

        {/* 4. How It Works: Accelerate Your Journey */}
        <HomeProcess />

        {/* 5. Why Choose Us: Happy Snaps & Head Office Showcase */}
        <HomeWhyChooseUs />

        {/* 6. Google Reviews: Excellent (1,347 reviews) */}
        <HomeReviews />

        {/* 7. Expert Advisors: Our Awesome Team (9 members) */}
        <HomeTeam />

        {/* 8. Leave Us A Message & Address info */}
        <HomeContact />
      </main>

      {/* 9. Modern Deep Navy Footer */}
      <HomeFooter />
    </div>
  );
}
