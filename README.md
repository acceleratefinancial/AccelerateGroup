# Accelerate Financial Solutions

A modern, responsive, high-performance multi-page website for **Accelerate Financial Solutions**, an established Australian finance brokerage specializing in vehicle loans, equipment finance, novated leases, commercial lending, and home mortgages.

Built with **Next.js 16 (App Router + Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🌟 Key Features & Pages

The application is structured around 6 canonical routes sharing a unified design system and reusable component architecture:

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero section, 2+3 services grid, interactive "Happy Snaps" tabs, 4+6 leadership & brokers team, full-color lender showcase, and contact form. |
| **About Us** | `/about-us` | Company overview, 20+ years established history, core pillars (Integrity First, 40+ Lenders, Advisory), team showcase, and inquiry channels. |
| **Services** | `/services` | Comprehensive overview of the 5 core loan offerings (Personal, Business, Salary Packaging, Car Buying, Home Loans) with interactive detail jumps and loan workflow. |
| **Calculator** | `/calculator` | Custom interactive loan calculator with real-time amortization math, weekly/fortnightly/monthly schedules, deposit input, and direct loan application CTA. |
| **Client Referral** | `/client-referral` | Dedicated partner and client referral portal featuring a 3-step workflow, validated submission form (mandatory phone), and referral terms. |
| **Apply Now** | `/apply-now` | Secure online application portal embedding the Ambition Cloud digital form via responsive iframe with 256-bit SSL encryption and mobile QR code quick-scan. |

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React Server Components)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) (strict mode enabled)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter & Formatter**: [ESLint](https://eslint.org/) (Next.js core-web-vitals configuration)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher (see `.nvmrc`)
- **Package Manager**: `npm` (v10+ recommended)

### Installation

Clone the repository and install project dependencies:

```bash
git clone https://gitlab.com/boat-group/accelerate.git
cd accelerate
npm install
```

### Running Locally

Start the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build & Static Export

Generate an optimized production build:

```bash
npm run build
```

To preview the built application locally:

```bash
npm run start
```

---

## 📂 Project Structure

```
accelerate/
├── .agents/                      # Antigravity agent skills, memory & rules
│   ├── rules/
│   │   └── project-rules.md     # Workspace coding guidelines and design tokens
│   └── skills/
│       └── accelerate-website/  # Operational runbook skill for future development
├── docs/                         # Architecture logs & changelogs
│   ├── CHANGELOG.md             # Version history & iteration milestones
│   └── DECISION_LOG.md          # Architectural decision records (ADR)
├── public/                       # Static public assets
│   └── images/
│       ├── home/                # High-res logos, team photos, lender marks
│       └── ...                  # Original marketing and provider assets
├── src/
│   ├── app/                     # Next.js App Router (6 canonical pages)
│   │   ├── about-us/page.tsx
│   │   ├── apply-now/page.tsx
│   │   ├── calculator/page.tsx
│   │   ├── client-referral/page.tsx
│   │   ├── services/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx             # Homepage
│   │   └── globals.css          # Tailwind CSS root imports
│   └── components/
│       ├── home/                # Homepage section components
│       │   ├── HomeContact.tsx
│       │   ├── HomeFooter.tsx
│       │   ├── HomeHero.tsx
│       │   ├── HomeLenders.tsx   # 12 full-color partner lender logos
│       │   ├── HomeNavbar.tsx    # Header & responsive mobile drawer
│       │   ├── HomeProcess.tsx   # 4-step journey workflow
│       │   ├── HomeReviews.tsx   # Client testimonials
│       │   ├── HomeServices.tsx  # 2+3 service cards layout
│       │   ├── HomeTeam.tsx      # 4 Leadership + 6 Brokers team grid
│       │   └── HomeWhyChooseUs.tsx # "Happy Snaps" tabs & building photo
│       ├── layout/              # Shared header and footer wrappers
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       ├── referral/            # Dedicated referral module components
│       │   └── ReferralForm.tsx  # Interactive referral form with validation
│       └── shared/              # Reusable UI primitives across pages
│           ├── CalculatorWidget.tsx  # Interactive finance loan calculator
│           ├── ExternalFormEmbed.tsx # Iframe embed with mobile QR code
│           ├── PageContainer.tsx
│           ├── PageHero.tsx
│           ├── SectionContainer.tsx
│           └── SectionEyebrow.tsx    # Branded double-dash eyebrow indicator
├── GEMINI.md                     # Agent context & repository memory
├── package.json
└── tsconfig.json
```

---

## 🎨 Design System & Brand Identity

- **Primary Brand Colors**:
  - `Accelerate Cyan`: `#00c5d6` (buttons, active tabs, accent lines)
  - `Accelerate Blue`: `#0082ca` (calculator interactive controls, links)
  - `Dark Navy`: `#071533` / `#001e55` (hero background, lender bar, calculator summary)
  - `Deep Slate`: `#06122d` (primary headings, dark text)
  - `Slate Tint`: `#f8fafc` / `#e6fafc` (card backgrounds, active pill highlights)
- **Typography**: Clean sans-serif system with high contrast and explicit font-weight scale (`font-bold` to `font-extrabold`).
- **Section Eyebrow Pattern**: Centered or aligned subtitle flanked by horizontal double-dashes (`-- TITLE --`) using the shared `<SectionEyebrow text="..." />` component.

---

## ⚙️ Configuration & Environment Variables

| Variable | Default Value | Description |
|---|---|---|
| `NEXT_PUBLIC_APPLY_FORM_URL` | `https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h` | External Ambition Cloud application portal URL embedded in the Apply Now page and calculator CTA. |

---

## 🧪 Code Quality & Verification

Run linter and TypeScript compiler checks:

```bash
# Run ESLint rules
npm run lint

# Run TypeScript type check
npx tsc --noEmit

# Run full production build
npm run build
```

---

## 📄 License & Ownership

Copyright © 2026 **Accelerate Financial Solutions**. All rights reserved.
