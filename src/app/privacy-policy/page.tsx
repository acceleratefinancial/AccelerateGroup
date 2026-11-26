"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import {
  ShieldCheck,
  Lock,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Database,
  Eye,
  AlertCircle,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState<"solutions" | "loans">("solutions");

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333] antialiased">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          title="Privacy Policy"
          eyebrow="Compliance & Data Protection"
          description="We take the privacy and confidentiality of our clients very seriously. Read the complete policies governing how personal and financial information is handled across our business entities."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />

        {/* Tab Selection Section */}
        <section className="py-10 bg-[#f8fafc] border-b border-slate-200">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00c5d6] block mb-1">
                  Select Business Entity
                </span>
                <p className="text-sm font-semibold text-[#06122d]">
                  Click the links below to view the specific Privacy Policies related to our business entities:
                </p>
              </div>

              <div className="inline-flex p-1 bg-slate-200/80 rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveTab("solutions")}
                  className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "solutions"
                      ? "bg-white text-[#06122d] shadow-sm"
                      : "text-slate-600 hover:text-[#06122d]"
                  }`}
                >
                  Accelerate Financial Solutions
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("loans")}
                  className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "loans"
                      ? "bg-white text-[#06122d] shadow-sm"
                      : "text-slate-600 hover:text-[#06122d]"
                  }`}
                >
                  Accelerate Loans Pty Ltd
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Main Content Column (col-span-8) */}
              <div className="lg:col-span-8 space-y-10">
                {activeTab === "solutions" ? (
                  /* ===================================================
                     ACCELERATE FINANCIAL SOLUTIONS PTY LTD (100% VERBATIM)
                     =================================================== */
                  <article className="space-y-8 animate-fadeIn">
                    <div className="border-b border-slate-100 pb-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c5d6]/10 text-[#0082ca] mb-3">
                        <ShieldCheck className="w-4 h-4 text-[#00c5d6]" />
                        Official Policy
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06122d]">
                        Privacy Policy – Accelerate Financial Solutions Pty Ltd
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-sm mt-2">
                        Governed by the Privacy Act 1988 (Cth) and National Privacy Principles.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-cyan-50/60 border border-cyan-100 text-slate-800 text-sm sm:text-base leading-relaxed">
                      <strong>We recognise that your privacy is very important and we are committed to protecting personal information provided by you to us. We are bound by the Privacy Act 1988 the National Privacy Principles which cover the following areas in relation to personal information:</strong>
                    </div>

                    {/* Data Flow */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xl font-bold text-[#06122d] flex items-center gap-2">
                        <Database className="w-5 h-5 text-[#00c5d6]" />
                        Data Flow
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We will not send any personal information about you overseas unless you consent to this, or we reasonably believe that the other country has privacy laws substantially similar to our own, or we provide the information as part of the products and services we provide. Our website contains a number of links to other websites, including the websites of our commercial partners. When this occurs be sure to check the privacy policy of those websites as we are not responsible for privacy practices of those other parties.
                      </p>
                    </div>

                    {/* Collection */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d] flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#00c5d6]" />
                        Collection
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We collect and hold personal information about our applicants for finance and customers, including their personal details, employment information and financial background. Our main purposes for collecting that personal information include assessing or varying the credit facilities for which they may apply, to facilitate direct marketing of financial and household products and services offered by us or by an organisation that we are associated with, research and product development, and any purpose related to those other purposes.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We will only collect personal information from you that is necessary for one or more of our functions and activities. We will only collect personal information from you by lawful and fair means, without being unreasonably intrusive, such as when you complete a loan application form or other document concerning your application to us for finance.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        At or before the time we collect personal information from you we will take reasonable steps to inform you why we are collecting that personal information, who else we might disclose that personal information to and what will happen if you do not provide personal information to us. Where reasonable and practicable, we will only collect personal information about you, from you. Note that we will obtain background information about you from credit reference agencies.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Wherever it is lawful and practicable, we will give you the option of not identifying yourself or not providing personal information when entering transactions with us. However, in most cases, if you do not provide the full and complete information we request we will be unable to process your application for finance. Once we hold personal information we will take reasonable steps to keep it accurate, complete and up-to-date.
                      </p>
                    </div>

                    {/* Use and Disclosure */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d] flex items-center gap-2">
                        <Eye className="w-5 h-5 text-[#00c5d6]" />
                        Use and Disclosure
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We will only use your personal information for the main purposes we told you it was needed for, except where you give us express or implied consent to use that personal information for another purpose, where the other purpose is related to the main purpose or you would reasonably expect us to use the personal information for another purpose, or where it is permitted or required by law, or we reasonably believe it is necessary on health or public safety grounds to use the personal information for another purpose. Also, we will not adopt as our own any identifiers that you may provide to us such as TFNs, Medicare numbers, etc.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        In order to fulfil the purposes set out above we may share your personal information with our related companies and third parties with whom we have a business relationship, for example to:
                      </p>
                      <ul className="space-y-2 text-sm sm:text-base text-slate-700 pl-4 list-none">
                        <li><strong>(i)</strong> our funders, account holders and operators, credit reporting agencies, introducers, valuers, debt collection agencies, government authorities,</li>
                        <li><strong>(ii)</strong> organisations involved in processing (including card and PIN producers), managing, insuring or funding credit facilities,</li>
                        <li><strong>(iii)</strong> organisations to whom we outsource functions such as mailing and printing houses, and specialist advisers such as accountants and solicitors (both yours and ours), and</li>
                        <li><strong>(iv)</strong> our associated organisations for the purpose of direct marketing household products and services to meet your needs (other than your credit information).</li>
                      </ul>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
                        You accept that not all recipients of your information may have privacy policies equivalent to Accelerate’s, but despite this you still consent to the disclosure of your personal information for the purposes we have stated above. In relation to direct marketing, you may tell us at any time you do not wish to receive any further direct marketing materials – if you do, we will stop sending you such materials.
                      </p>
                    </div>

                    {/* Access & Correction */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d] flex items-center gap-2">
                        <Lock className="w-5 h-5 text-[#00c5d6]" />
                        Access &amp; Correction
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        If you ask, we will tell you what personal information we hold about you, and what we do with it. We will facilitate access to you by allowing an inspection of your personal information in person, or by providing copies or a summary of relevant documents, depending on what is most appropriate in the circumstances, following receipt of your request. Any charge we make for providing access will be reasonable.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        If you can show us that the personal information is inaccurate, we will take reasonable steps to correct it. Note that we need not provide access to personal information in several types of situation, for example where a request is frivolous, or where to provide access would pose a threat to health or public safety, unreasonably interfere with another person’s privacy, or be a breach of the law. If we refuse access we will advise you of our reasons for doing so.
                      </p>
                    </div>

                    {/* Security */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d] flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#00c5d6]" />
                        Security
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We will take reasonable steps to protect personal information from misuse and loss, and destroy or permanently de-identify personal information we no longer need. You can also help us keep your personal information secure by ensuring that any password you use on the web site is kept strictly confidential, and by logging off when you have finished using a shared computer. Accelerate will not be responsible for any access or change made to your personal information occurring as a result of you disclosing your password to a third party, or through any unauthorised access.
                      </p>
                    </div>

                    {/* Cookies */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d]">
                        Cookies
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        When you visit our website, details may be recorded about your visit, such as time and date, your server address, pages accessed, time spent and type of browser. We may use cookies to identify your browser so that next time you visit our website we remember your log in details. A cookie is a small file which remains on your computer and contains information enabling our website to recognise your browser. If you do not wish to use cookies, you can adjust the settings on your browser to reject cookies or notify you when they are being used.
                      </p>
                    </div>

                    {/* Complaints Resolution */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d] flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-[#00c5d6]" />
                        Complaints Resolution
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We are committed to providing loan applicants, customers, and other parties whose personal information we hold, a fair and responsible system for the handling of their complaints.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        If at any time you have any complaints in relation to privacy, please contact our Privacy Officer at one of the points referred to below. We will seek to address any concerns that you have through our complaints handling processes, but if you wish to take matters further you may refer your concerns to the Office of the Federal Privacy Commissioner.
                      </p>
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 mt-3 space-y-2 text-sm">
                        <p className="font-bold text-[#06122d]">Our Privacy Officer may be contacted on:</p>
                        <p className="text-slate-700">113B Ledger Road, Beverley SA 5009</p>
                        <p>
                          <a href="tel:0883481000" className="text-[#00c5d6] font-bold hover:underline">
                            Tel +61 8 8348 1000
                          </a>
                        </p>
                        <p>
                          <a href="mailto:info@acceleratefinancial.com.au" className="text-[#00c5d6] font-bold hover:underline">
                            Email info@acceleratefinancial.com.au
                          </a>
                        </p>
                      </div>
                    </div>
                  </article>
                ) : (
                  /* ===================================================
                     ACCELERATE LOANS PTY LTD (100% VERBATIM)
                     =================================================== */
                  <article className="space-y-8 animate-fadeIn">
                    <div className="border-b border-slate-100 pb-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00c5d6]/10 text-[#0082ca] mb-3">
                        <ShieldCheck className="w-4 h-4 text-[#00c5d6]" />
                        Official Policy
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06122d]">
                        Privacy Policy – Accelerate Loans Pty Ltd
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-sm mt-2">
                        Committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth).
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-cyan-50/60 border border-cyan-100 text-slate-800 text-sm sm:text-base leading-relaxed">
                      <strong>At Accelerate Loans Pty Ltd, we are committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth). This Privacy Policy describes our current policies and practices in relation to the handling and use of personal information.</strong>
                    </div>

                    {/* Section 1 */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xl font-bold text-[#06122d]">
                        What information do we collect and how do we use it?
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We will ask you for personal information when we assist you with your finance. We use the information you provide to advise about and assist with your credit needs. We only provide your information to the companies with whom you choose to deal (and their representatives).
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We also use your information to send you requested product information and to enable us to manage your ongoing relationship with us e.g. invoicing, client surveys etc. We may do so by mail or electronically unless you tell us that you do not wish to receive electronic communications.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We may occasionally notify you about promotions, new services and special offers, events or articles we think will be of interest to you. We may send you regular updates by email or by post. If you would rather not receive this information, email or write to us.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We may also use your information internally to help us improve our services and help resolve any problems.
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d]">
                        What if you don’t provide some information to us?
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        If you don’t provide us with full information, we can’t properly advise or assist you with your credit needs.
                      </p>
                    </div>

                    {/* Section 3 */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d]">
                        How do we hold and protect your information?
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We strive to maintain the reliability, accuracy, completeness and currency of the personal information we hold and to protect its privacy and security. We keep personal information only for as long as is reasonably necessary for the purpose for which it was collected or to comply with any applicable legal or ethical reporting or document retention requirements.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We hold the information we collect from you in our digital Customer Registration System that is securely monitored by our Aggregator Connective Credit Services Pty Ltd ABN 51 143 651 496.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We ensure that your information is safe by taking all reasonable steps to protect personal information from misuse and loss, and by destroying or permanently de-identify personal information we no longer need.
                      </p>
                    </div>

                    {/* Section 4 */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d]">
                        Will we disclose the information we collect to anyone?
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We do not sell, trade, or rent your personal information to others.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We may need to provide your information to our credit licensee e.g. for administration and supervision activities, contractors who supply services to us e.g. to handle mailings on our behalf, or to other companies in the event of a corporate sale, merger, re-organisation, dissolution or similar event. However, we will do our best to ensure that they protect your information in the same way that we do.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We may also provide your information to others if we are required to do so by law or under some unusual other circumstances which the Privacy Act permits.
                      </p>
                    </div>

                    {/* Section 5 */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d]">
                        How can you check, update or change the information we are holding?
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Upon receipt of your written request and enough information to allow us to identify the information, we will disclose to you the personal information we hold about you. We will also correct, amend or delete any personal information that we agree is inaccurate.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        If you wish to access or correct your personal information please write to:
                      </p>
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-sm">
                        <p className="font-bold text-[#06122d]">Accelerate Loans Pty Ltd</p>
                        <p className="text-slate-700">113B Ledger Road, Beverley SA 5009</p>
                        <p><a href="tel:0883481000" className="text-[#00c5d6] font-bold hover:underline">Tel +61 8 8348 1000</a></p>
                        <p><a href="mailto:info@acceleratefinancial.com.au" className="text-[#00c5d6] font-bold hover:underline">Email info@acceleratefinancial.com.au</a></p>
                      </div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                        We do not charge for receiving a request for access to personal information or for complying with a correction request. We do not charge for providing access to personal information.
                      </p>
                    </div>

                    {/* Section 6 */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d]">
                        Your consent
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        By asking us to assist with your credit needs, you consent to the collection and use of the information you have provided to us for the purposes described above.
                      </p>
                    </div>

                    {/* Section 7 */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d]">
                        Tell us what you think
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        We welcome your questions and comments about privacy. If you have any concerns or complaints, please contact:
                      </p>
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-sm">
                        <p className="font-bold text-[#06122d]">Accelerate Loans Pty Ltd</p>
                        <p className="text-slate-700">113B Ledger Road, Beverley SA 5009</p>
                        <p><a href="tel:0883481000" className="text-[#00c5d6] font-bold hover:underline">Tel +61 8 8348 1000</a></p>
                        <p><a href="mailto:info@acceleratefinancial.com.au" className="text-[#00c5d6] font-bold hover:underline">Email info@acceleratefinancial.com.au</a></p>
                      </div>
                    </div>

                    {/* Section 8 */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h3 className="text-xl font-bold text-[#06122d]">
                        Complaints
                      </h3>
                      <p className="font-bold text-slate-800 text-sm sm:text-base">
                        Internal Dispute Resolution
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        If you do have a complaint, please let us know by email, because if we don’t know about it we can’t fix it. You may also contact us by email addressed to: The Complaints Officer at <a href="mailto:info@acceleratefinancial.com.au" className="text-[#00c5d6] font-bold hover:underline">info@acceleratefinancial.com.au</a>
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Please make sure you include as much information as you can.
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        You should explain the details of your complaint as clearly as you can. You must do this in writing. When we receive a complaint, we will attempt to resolve it promptly.
                      </p>
                    </div>
                  </article>
                )}
              </div>

              {/* Sidebar Column (col-span-4) */}
              <div className="lg:col-span-4 space-y-6">
                {/* Related Documents Widget */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h4 className="text-base font-bold text-[#06122d] mb-4 pb-2 border-b border-slate-200">
                    Related Compliance Links
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a
                        href="/forms"
                        className="flex items-center justify-between text-slate-700 hover:text-[#00c5d6] transition-colors font-medium group"
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#00c5d6]" />
                          Forms &amp; Documents
                        </span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/compliments-concerns"
                        className="flex items-center justify-between text-slate-700 hover:text-[#00c5d6] transition-colors font-medium group"
                      >
                        <span className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#00c5d6]" />
                          Compliments &amp; Concerns
                        </span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://acceleratefinancial.com.au/Forms/Privacy-Consent.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-slate-700 hover:text-[#00c5d6] transition-colors font-medium group"
                      >
                        <span className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 text-[#00c5d6]" />
                          Privacy Consent (PDF)
                        </span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Secure Application CTA */}
                <div className="bg-gradient-to-br from-[#071533] to-[#001e55] rounded-2xl p-6 text-white shadow-md border border-slate-700/60">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#00c5d6]/20 text-[#00c5d6] mb-3">
                    <Lock className="w-3.5 h-3.5" />
                    256-Bit Encrypted
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Ready to Apply?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    Your financial data is protected with bank-grade encryption across our secure online application.
                  </p>
                  <a
                    href="/apply-now"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-[#00c5d6] text-white hover:bg-[#00b0c0] shadow-sm transition-all"
                  >
                    Start Digital Application
                  </a>
                </div>

                {/* Office Direct Contacts Card */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-600">
                  <h5 className="font-bold text-[#06122d] uppercase tracking-wider text-xs">
                    Office Contacts
                  </h5>
                  <div className="flex items-start gap-2 pt-1">
                    <MapPin className="w-4 h-4 text-[#00c5d6] shrink-0 mt-0.5" />
                    <span>113B Ledger Road, Beverley SA 5009</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#00c5d6] shrink-0" />
                    <a href="tel:0883481000" className="hover:text-[#00c5d6] font-semibold">
                      (08) 8348 1000
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00c5d6] shrink-0" />
                    <a href="mailto:info@acceleratefinancial.com.au" className="hover:text-[#00c5d6] break-all">
                      info@acceleratefinancial.com.au
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
