import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ShareButton from "@/components/blog/ShareButton";
import BlogCard from "@/components/blog/BlogCard";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
} from "@/data/blogPosts";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowRight,
  AlertCircle,
  Lightbulb,
  Info,
  Calculator,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Accelerate Financial",
    };
  }

  return {
    title: `${post.title} | Accelerate Financial Solutions`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          alt: post.coverImageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Article Header & Hero Banner */}
        <section className="relative bg-[#06122d] text-white pt-12 pb-16 lg:pb-24 border-b border-slate-800 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00c5d6]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-10 w-[350px] h-[350px] bg-[#001e62]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-[#00c5d6] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#00c5d6] transition-colors">
                    Blog & Library
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </li>
                <li className="text-[#00c5d6] font-medium truncate max-w-xs sm:max-w-md">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c5d6] text-white">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <Calendar className="w-4 h-4 text-[#00c5d6]" />
                {post.date}
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-4 h-4 text-[#00c5d6]" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-5 max-w-4xl uppercase">
              {post.title}
            </h1>

            {/* Subtitle / Excerpt Lead */}
            {post.subtitle && (
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mb-8 font-normal">
                {post.subtitle}
              </p>
            )}

            {/* Action Bar & Share button */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-end max-w-4xl">
              <ShareButton title={post.title} />
            </div>
          </div>
        </section>

        {/* Article Body + Sidebar Layout */}
        <section className="py-12 sm:py-16">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              {/* Main Content Column (lg:col-span-8) */}
              <article className="lg:col-span-8 space-y-8">
                {/* Featured Cover Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-900 aspect-video w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 768px"
                  />
                </div>

                {/* Main Article Content Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-8 text-slate-700">
                  {/* Brochure Editorial Title & Subtitle matching the PDF */}
                  <div className="text-center pb-8 border-b border-slate-100">
                    <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#123259] uppercase tracking-tight leading-tight mb-3">
                      {post.title}
                    </h1>
                    {post.subtitle && (
                      <p className="text-slate-800 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        {post.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Sections */}
                  {post.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      {section.heading && (
                        <div className="pt-4">
                          <h2 className="w-full block bg-[#123259] text-white px-4 py-2 rounded-xs font-bold text-base sm:text-[17px] shadow-xs">
                            {section.heading}
                          </h2>
                        </div>
                      )}

                      {section.subheading && (
                        <h3 className="text-base sm:text-lg font-extrabold text-[#123259] pt-1">
                          {section.subheading}
                        </h3>
                      )}

                      {section.paragraphs.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base leading-relaxed text-[#334155]"
                        >
                          {para}
                        </p>
                      ))}

                      {/* Section Inline Image */}
                      {section.image && (
                        <div className="relative rounded-2xl overflow-hidden shadow-md my-6 aspect-[16/9] w-full bg-slate-100">
                          <Image
                            src={section.image}
                            alt={section.imageAlt || section.heading || "Article image"}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 768px"
                          />
                        </div>
                      )}

                      {/* Callout box */}
                      {section.callout && (
                        <div
                          className={`p-5 rounded-xl border text-xs sm:text-sm my-4 ${
                            section.callout.type === "warning"
                              ? "bg-amber-50 border-amber-200 text-amber-900"
                              : section.callout.type === "tip"
                              ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                              : "bg-blue-50 border-blue-200 text-blue-950"
                          }`}
                        >
                          <div className="flex items-center gap-2 font-bold mb-1.5">
                            {section.callout.type === "warning" ? (
                              <AlertCircle className="w-4 h-4 text-amber-600" />
                            ) : section.callout.type === "tip" ? (
                              <Lightbulb className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Info className="w-4 h-4 text-blue-600" />
                            )}
                            <span>{section.callout.title || "Note"}</span>
                          </div>
                          <p className="leading-relaxed">{section.callout.text}</p>
                        </div>
                      )}

                      {/* Bullets */}
                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="space-y-2.5 my-3 pl-1">
                          {section.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700"
                            >
                              <span className="text-[#123259] font-bold text-base leading-none select-none mt-0.5">•</span>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {/* Key Takeaways Box (styled identically to PDF Key Takeaway section) */}
                  {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                    <div className="pt-4 space-y-3">
                      <div className="w-full block bg-[#123259] text-white px-4 py-2 rounded-xs font-bold text-base sm:text-[17px] shadow-xs">
                        Key takeaway
                      </div>
                      <div className="space-y-3 pt-1">
                        {post.keyTakeaways.map((takeaway, i) => (
                          <p
                            key={i}
                            className="text-sm sm:text-base leading-relaxed text-[#334155]"
                          >
                            {takeaway}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Companion Checklist / Planning Guide */}
                  {post.companionChecklist && (
                    <div className="my-8 p-5 sm:p-6 bg-[#f8fafc] border-l-4 border-[#123259] rounded-r-2xl border-y border-r border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                      <div className="space-y-1.5 max-w-xl">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                          Contact us to read
                        </span>
                        <h4 className="text-base sm:text-lg font-extrabold text-[#123259] leading-snug">
                          ‘{post.companionChecklist.title}’
                        </h4>
                        {post.companionChecklist.calloutText && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                            {post.companionChecklist.calloutText}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full sm:w-auto">
                        <Link
                          href="/#contact"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#00c5d6] text-white hover:bg-[#00b0c0] shadow-sm transition-all"
                        >
                          <span>Request Document</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href="tel:0883481000"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white border border-slate-300 text-[#123259] hover:bg-slate-50 transition-all"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-[#00c5d6]" />
                          <span>(08) 8348 1000</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Statutory Disclaimer */}
                  {post.disclaimer && (
                    <div className="pt-6 border-t border-slate-200 text-center">
                      <p className="text-[11px] sm:text-xs text-slate-400 italic leading-relaxed max-w-3xl mx-auto">
                        {post.disclaimer}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                        Tags:
                      </span>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>


              </article>

              {/* Sidebar Column (lg:col-span-4) */}
              <aside className="lg:col-span-4 space-y-6">
                {/* Quick Repayment Calculator Widget CTA */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#00c5d6]/10 flex items-center justify-center text-[#0082ca] mb-4">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#071533] mb-2">
                    Estimate Your Repayments
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    Adjust loan amounts ($1K–$200K), interest rates, and loan terms in real time with our loan calculator.
                  </p>
                  <Link
                    href="/calculator"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#00c5d6] text-white hover:bg-[#00b0c0] shadow-sm transition-all"
                  >
                    Open Repayments Calculator
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Ambition Cloud Apply Now Card */}
                <div className="bg-gradient-to-br from-[#071533] to-[#001e55] rounded-2xl p-6 text-white shadow-md border border-slate-700/60">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#00c5d6]/20 text-[#00c5d6] mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Secure Digital Application
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    Get Pre-Approved Online
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    Fast 5-minute digital application processed directly through our secure Ambition Cloud portal with 40+ lending options.
                  </p>
                  <Link
                    href="/apply-now"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-white text-[#071533] hover:bg-slate-100 shadow-sm transition-all"
                  >
                    Start Digital Application
                    <ArrowRight className="w-4 h-4 text-[#0082ca]" />
                  </Link>
                </div>

                {/* Direct Broker Contact Card */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-sm font-bold text-[#071533] mb-3">
                    Need Immediate Advice?
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Our Beverly-based brokers are available Monday to Friday to answer questions about borrowing capacity, vehicle procurement, or commercial structuring.
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 font-semibold text-slate-700">
                      <PhoneCall className="w-3.5 h-3.5 text-[#00c5d6]" />
                      <a href="tel:0883481000" className="hover:text-[#0082ca]">
                        (08) 8348 1000
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail className="w-3.5 h-3.5 text-[#00c5d6]" />
                      <a
                        href="mailto:approvals@acceleratefinancial.com.au"
                        className="hover:text-[#0082ca] truncate"
                      >
                        approvals@acceleratefinancial.com.au
                      </a>
                    </div>
                    <div className="flex items-start gap-2 text-slate-500 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#00c5d6] shrink-0 mt-0.5" />
                      <span>113B Ledger Road, Beverley SA 5009</span>
                    </div>
                  </div>
                </div>

                {/* Related Articles List in Sidebar */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                    <h3 className="text-sm font-bold text-[#071533] mb-4 pb-2 border-b border-slate-100">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((rel) => (
                        <div key={rel.slug} className="group">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#00c5d6]">
                            {rel.category}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-[#071533] group-hover:text-[#0082ca] transition-colors leading-snug line-clamp-2 mt-0.5">
                            <Link href={`/blog/${rel.slug}`}>
                              {rel.title}
                            </Link>
                          </h4>
                          <span className="text-[11px] text-slate-400 mt-1 block">
                            {rel.readTime}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00c5d6] block mb-1">
                    Keep Reading
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071533]">
                    More Financial Guides & Articles
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#0082ca] hover:text-[#00c5d6] transition-colors shrink-0"
                >
                  View All Articles
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <BlogCard key={rel.slug} post={rel} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
