# Architecture Decision Log (ADR) – Accelerate Financial

This log records significant architectural and technical decisions made during the evolution of the Accelerate Financial Solutions website.

---

## ADR-001: Next.js App Router & Server Component First

- **Date**: 2026-11-11
- **Status**: Accepted
- **Context**: The application required fast initial page load, SEO indexing for financial services, and snappy navigation between 6 canonical pages.
- **Decision**: Adopt Next.js 16 App Router. Keep all page roots (`page.tsx`) as React Server Components, delegating interactivity only to leaf client components (`"use client"`).
- **Consequences**: Enables static prerendering of all 9 routes (compile time ~350ms), eliminates unnecessary client JS bundle weight, and ensures clean hydration.

---

## ADR-002: Multi-Page Expansion & Component Extraction

- **Date**: 2026-11-11
- **Status**: Accepted
- **Context**: The client requested expanding the single-page prototype into 6 full pages (`/`, `/about-us`, `/services`, `/calculator`, `/client-referral`, `/apply-now`) while maintaining visual consistency.
- **Decision**: Extract shared layout primitives (`<PageHero />`, `<Header />`, `<Footer />`, `<SectionEyebrow />`) into `src/components/shared/` and `src/components/layout/`. Re-use homepage sections across relevant subpages rather than duplicating code.
- **Consequences**: Single source of truth for navigation, typography, and section styling across all routes.

---

## ADR-003: In-House Standalone Calculator Widget

- **Date**: 2026-11-15
- **Status**: Accepted
- **Context**: The client provided a Gemini prompt and UI mockup (`image14.png`) for an interactive loan calculator. Previous implementations relied on placeholder containers awaiting external scripts.
- **Decision**: Implement an interactive, zero-dependency loan calculator directly in React/TypeScript (`CalculatorWidget.tsx`) using standard amortization formulas:
  $$PMT = P \times \frac{i(1+i)^N}{(1+i)^N - 1}$$
- **Consequences**:
  - Immediate availability without external network calls or tracking scripts.
  - Pixel-perfect alignment with `image14.png` from the design specification.
  - Real-time updates as user manipulates amount ($1K–$200K), deposit, term (1–7 yrs), rate, and frequency.

---

## ADR-004: Full-Color Partner Lender Showcase on Elevated White Cards

- **Date**: 2026-11-15
- **Status**: Accepted
- **Context**: White monochrome partner logos were previously invisible against white card backgrounds ("mất ảnh").
- **Decision**: Replace monochrome PNGs with official full-color logos extracted directly from the client's V3 docx specification (NAB red star, Liberty cyan/navy, Latitude blue, BOQ yellow/blue, Metro outline M, ANZ, AFS, Plenti). Display all 12 logos within uniform, elevated white cards with subtle hover scale.
- **Consequences**: Solves contrast/visibility issues across all screen resolutions; preserves authentic lender brand identities.

---

## ADR-005: Hybrid Digital Application Portal (Iframe + Mobile QR Code)

- **Date**: 2026-11-15
- **Status**: Accepted
- **Context**: The client uses Ambition Cloud (`https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h`) for credit assessments. Users visit on both desktop and mobile devices.
- **Decision**:
  - On desktop: Embed the Ambition Cloud form inside a responsive iframe with 256-bit SSL badges and an "Open in New Tab" fallback.
  - Alongside: Provide a high-contrast QR code (`qr-apply.png`) so visitors on desktop can scan with their smartphone camera to complete the application on mobile.
- **Consequences**: High conversion rate across desktop and mobile while maintaining security sandbox boundaries.
