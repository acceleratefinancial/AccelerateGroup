# Accelerate Financial – Blog & Content Generation Guide

This guide documents the architecture of the Blog & Knowledge Library system (`/blog` and `/blog/[slug]`) and provides a streamlined workflow to generate and publish new finance articles.

---

## 1. Architecture Overview

- **Listing Page**: `src/app/blog/page.tsx`
  - Prerendered static page with SEO metadata.
  - Interactive category filtering (Asset Finance, Property Finance, Vehicle & Equipment, Salary Packaging, Commercial Finance).
  - Search bar matching article titles, excerpts, tags, and authors.
  - Featured article showcase card.
- **Dynamic Post Detail**: `src/app/blog/[slug]/page.tsx`
  - Full static prerendering via `generateStaticParams()` (compatible with Next.js static export).
  - Dynamic SEO metadata via `generateMetadata()`.
  - Rich typography layout, key takeaways callout, section-by-section breakdown, callout cards (tips, highlights, warnings), bullet lists, author bio card, and desktop sticky sidebar with quick Repayment Calculator & Ambition Cloud Apply Now links.
- **Data Source**: `src/data/blogPosts.ts`
  - Typed TypeScript data collection with helper functions:
    - `getAllBlogPosts()`
    - `getBlogPostBySlug(slug)`
    - `getAllCategories()`
    - `getRelatedPosts(slug, limit)`

---

## 2. Structure of a BlogPost Object

```typescript
export interface BlogPost {
  slug: string; // e.g. "asset-finance-cashflow-tips" (used in /blog/[slug])
  title: string; // Catchy, SEO-optimized title
  subtitle?: string; // Descriptive lead paragraph
  excerpt: string; // 1-2 sentence preview for cards & meta description
  category: "Asset Finance" | "Property Finance" | "Vehicle & Equipment" | "Salary Packaging" | "Commercial Finance";
  date: string; // e.g. "October 14, 2024"
  isoDate: string; // "YYYY-MM-DD" for schema and chronological sorting
  readTime: string; // e.g. "5 min read"
  coverImage: string; // Path in public/images/
  coverImageAlt: string; // Accessible image description
  author: {
    name: string; // "Andrew Hopkins" | "David Manou" | "Laurence Camporeale"
    role: string; // e.g. "Director & Senior Finance Broker"
    avatar: string; // e.g. "/images/andrew-hoppy-hopkins.jpg"
    email?: string; // approvals@acceleratefinancial.com.au
  };
  tags: string[]; // ["Cash Flow", "SME", "Chattel Mortgage"]
  featured?: boolean; // Set true for prominent hero card on /blog
  keyTakeaways?: string[]; // 3-4 bullet points highlighted in a cyan card
  sections: {
    heading?: string; // H2 section title
    subheading?: string; // Optional H3
    paragraphs: string[]; // Text paragraphs
    callout?: {
      type: "tip" | "highlight" | "warning";
      title?: string;
      text: string;
    };
    bullets?: string[]; // Bulleted lists
  }[];
}
```

---

## 3. How to Add a New Post

1. Open `src/data/blogPosts.ts`.
2. Append a new object to the `BLOG_POSTS` array following the interface above.
3. Choose an existing image from `public/images/` (e.g. `busy-working-cafe-slider.jpg`, `family-moving-into-new-home-slider.jpg`, `young-woman-with-new-car-slider.jpg`, `agri-business-slider.jpg`) or add a new `.jpg`/`.png` image to `public/images/`.
4. Run `npm run build` to verify the new page is generated statically.

---

## 4. Prompt Template for Generating New Content via AI

Copy and paste the prompt below into Gemini, Claude, or ChatGPT to generate ready-to-use TypeScript blog post objects:

```text
Act as a senior Australian finance broker writing an educational, SEO-optimized article for Accelerate Financial Solutions (an established brokerage based in Beverley, South Australia with 20+ years of experience and access to 40+ lenders).

Topic: [INSERT TOPIC HERE - e.g., "Chattel Mortgage vs Equipment Lease for Small Construction Businesses in 2025"]

Target Audience: Australian small business owners, home buyers, or salary earners.
Tone: Authoritative, practical, compliant with ASIC/NCCP guidelines, avoiding hype or unrealistic promises.
Key Elements to Include:
- Concrete Australian figures (e.g. instant asset write-off thresholds, typical term lengths, LVR benchmarks).
- Real-world advantages of using an independent broker with 40+ lenders over walking into a single bank branch.
- Practical key takeaways for the reader.

Please output the result strictly as a valid TypeScript object conforming to the BlogPost interface below:

{
  slug: "...",
  title: "...",
  subtitle: "...",
  excerpt: "...",
  category: "Commercial Finance", // Choose from: Asset Finance, Property Finance, Vehicle & Equipment, Salary Packaging, Commercial Finance
  date: "...",
  isoDate: "2025-XX-XX",
  readTime: "X min read",
  coverImage: "/images/busy-working-cafe-slider.jpg",
  coverImageAlt: "...",
  author: {
    name: "Andrew Hopkins",
    role: "Director & Commercial Finance Specialist",
    avatar: "/images/andrew-hoppy-hopkins.jpg",
    email: "approvals@acceleratefinancial.com.au"
  },
  tags: ["...", "..."],
  featured: false,
  keyTakeaways: [
    "...",
    "..."
  ],
  sections: [
    {
      heading: "...",
      paragraphs: [
        "...",
        "..."
      ],
      callout: {
        type: "tip", // or "highlight" or "warning"
        title: "...",
        text: "..."
      },
      bullets: [
        "...",
        "..."
      ]
    }
  ]
}
```
