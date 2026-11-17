# Changelog – Accelerate Financial Solutions

All notable changes to the Accelerate Financial Solutions website project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.0.0] - 2026-11-15

### Added
- **Interactive Finance Calculator**: Built a custom loan calculation widget matching `image14.png` in [`CalculatorWidget.tsx`](file:///Volumes/Data/work/accelerate/src/components/shared/CalculatorWidget.tsx) with live amortization math, sliders ($1K–$200K), loan term selector (1–7 yrs), frequency toggle (weekly/fortnightly/monthly), and direct Ambition Cloud apply link.
- **Client Referral Module**: Added interactive [`ReferralForm.tsx`](file:///Volumes/Data/work/accelerate/src/components/referral/ReferralForm.tsx) on `/client-referral` with mandatory phone validation, optional email, success screen, and referral terms.
- **Mobile QR Code Apply**: Integrated `qr-apply.png` on the `/apply-now` page for mobile phone scanning alongside the secure iframe.
- **Full-Color Partner Lender Logos**: Extracted and integrated 12 official full-color logos from the client V3 document (NAB, Liberty, Latitude, Macquarie, BOQ Finance, Plenti, Metro, ANZ, AFS, Westpac, Pepper Money, Suncorp).
- **Engineering Guidelines & Memory**: Created `GEMINI.md`, `.agents/rules/project-rules.md`, and `.agents/skills/accelerate-website/SKILL.md` for AI agent governance and developer onboarding.

### Changed
- **Header Navigation**: Increased font size to `text-[16px] xl:text-[17px] font-bold text-gray-800` and updated tabs to include `Contact Us` anchor link.
- **Lender Logo Contrast**: Replaced white monochrome PNGs with high-contrast colored assets, resolving the white-on-white missing logo issue.
- **Codebase Clean-Up**: Removed all legacy placeholder cards, orphaned images, and obsolete imports. Achieved 0 ESLint warnings, 0 TypeScript errors, and 351ms static build time.

---

## [2.0.0] - 2026-11-11

### Added
- **Multi-Page Architecture**: Expanded single-page prototype into 6 canonical routes: `/`, `/about-us`, `/services`, `/calculator`, `/client-referral`, `/apply-now`.
- **Reusable Layout Primitives**: Extracted `PageHero`, `PageContainer`, `SectionContainer`, and `SectionEyebrow` (`-- TITLE --` pattern).
- **Clean Architecture Purge**: Removed 17 obsolete route directories and 13 unused legacy components.

### Changed
- **Logo Size**: Scaled desktop header logo by 200% (`w-[360px] h-[86px]`) using high-res vector-crisp PNG.
- **Services Layout**: Restructured services on homepage and `/services` to strict 2 + 3 grid (Personal & Business top; Salary Packaging, Car Buying, Home Loans bottom).
- **Team Layout**: Restructured team into 4 Leadership (Hoppy, Dave, Rhianna, Bianca) + 6 Brokers.
- **Why Choose Us**: Corrected heading from "Happy Naps" to "Happy Snaps".
- **Contact Email**: Updated support email to `approvals@acceleratefinancial.com.au`.

---

## [1.0.0] - 2026-09-14

### Added
- Initial project scaffolding with Next.js 16 and Tailwind CSS.
- Basic homepage sections, hero banner, and static lender list.
