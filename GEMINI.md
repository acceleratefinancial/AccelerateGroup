# GEMINI.md – Accelerate Financial Solutions Project Memory

This file serves as the persistent architectural memory, domain context, and development guidelines for Antigravity and any AI coding assistant working on this codebase.

---

## 1. Project Context & Business Domain

- **Client**: Accelerate Financial Solutions (Beverley, South Australia).
- **Core Business**: Established Australian finance brokerage (20+ years experience) providing consumer and commercial finance structuring:
  - Personal Loans
  - Commercial & Business Finance
  - Salary Packaging & Novated Leases
  - Car Buying & Vehicle Procurement
  - Residential Mortgages & Refinancing
- **Contact & Support**:
  - Support Email: `approvals@acceleratefinancial.com.au`
  - Direct Phone: `(08) 8348 1000`
  - Address: `113B Ledger Road, Beverley, South Australia 5009`
- **Application Portal**: Ambition Cloud secure link:
  `https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h`

---

## 2. Canonical Website Architecture

The project has been refactored from a legacy prototype into a clean 6-page multi-page Next.js App Router architecture:

1. **`/` (Home)**:
   - Primary landing page preserving all core visual sections.
   - Header with doubled-size logo (`w-[360px] h-[86px]`), bold navigation tabs, and cyan `APPLY NOW` CTA.
   - Hero section with headline and matching `Apply Now` button.
   - Services grid arranged in strict **2 + 3 desktop layout** (Top: Personal & Business; Bottom: Salary Packaging, Car Buying, Home Loans).
   - "How It Works" 4-step journey.
   - "Happy Snaps" interactive tabs with office photo.
   - "Our Awesome Team" with strict **4 + 6 arrangement**:
     - Row 1 (Leadership): Hoppy (Director), Dave (Director), Rhianna (BDM Leader), Bianca (Team Leader).
     - Row 2 (Brokers): Laurence, Stef, Stuart, Kayla, Taylor, Broker Specialist (all titled "Broker").
   - "Trusted By 40+ Lenders" showcasing 12 full-color partner logos on elevated white cards.
   - Interactive contact form with support email `approvals@acceleratefinancial.com.au`.

2. **`/about-us` (About Us)**:
   - 20+ years history, core pillars (Integrity First, 40+ Lenders, Advisory Advisory), Awesome Team, and office contact.

3. **`/services` (Services)**:
   - Full services catalog with 2+3 cards linking smoothly to comprehensive service breakdown sections.
   - 4-step loan workflow and client reviews.

4. **`/calculator` (Calculator)**:
   - Standalone interactive finance loan calculator implemented directly in [`CalculatorWidget.tsx`](file:///Volumes/Data/work/accelerate/src/components/shared/CalculatorWidget.tsx).
   - Real-time loan amortization math: Loan Amount ($1K–$200K), Deposit, Term (1–7 yrs), Rate (default 6.99%), Frequency (Weekly, Fortnightly, Monthly).
   - Direct Apply Now integration.

5. **`/client-referral` (Client Referral)**:
   - Partner & client referral portal with "Our way of saying thanks" blurb, 3-step workflow, and interactive [`ReferralForm.tsx`](file:///Volumes/Data/work/accelerate/src/components/referral/ReferralForm.tsx) (mandatory phone, optional email).

6. **`/apply-now` (Apply Now)**:
   - Embedded responsive iframe for the Ambition Cloud digital application form.
   - QR code card (`qr-apply.png`) enabling mobile phone camera scanning.

---

## 3. Technology Stack & Important Invariants

- **Next.js Version**: 16.3.5 (Turbopack).
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";` in `src/app/globals.css`).
  - *Note on Tailwind v4*: Do not combine conflicting background classes in strings (e.g. `bg-white bg-slate-900`); ensure static classes do not precede dynamic overrides.
- **Brand Color Palette**:
  - `Cyan`: `#00c5d6` (hover: `#00b0c0`, active: `#009fb0`)
  - `Accent Blue`: `#0082ca`
  - `Dark Navy`: `#071533` / `#001e55`
  - `Deep Slate`: `#06122d`
  - `Background White/Light`: `#ffffff`, `#f8fafc`, `#f1f5f9`
- **Section Eyebrow Convention**:
  - All section subtitles use `<SectionEyebrow text="..." align="center"|"left" />` which renders `-- TEXT --` with cyan accent dashes.
- **Lender Logos Rule**:
  - All 12 partner cards in `HomeLenders.tsx` must use full-color assets.
  - Never render monochrome white logos on white cards without proper contrast.

---

## 4. Quality Checklist for Any Change

1. `npm run lint` must return 0 errors, 0 warnings.
2. `npx tsc --noEmit` must return 0 type errors.
3. `npm run build` must compile all 9 static routes cleanly.
4. No temporary test files, orphan routes, or hardcoded fictional financial claims.
