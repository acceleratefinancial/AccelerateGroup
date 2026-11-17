"use client";

import React, { useState } from "react";
import { FileText, Lock, PhoneCall, Mail, CheckCircle2, ExternalLink } from "lucide-react";

interface ExternalFormEmbedProps {
  /**
   * The external application form URL to embed via iframe.
   * If omitted, falls back to process.env.NEXT_PUBLIC_APPLY_FORM_URL or fallback UI.
   */
  formUrl?: string;
  title?: string;
  minHeight?: string;
}

export default function ExternalFormEmbed({
  formUrl = process.env.NEXT_PUBLIC_APPLY_FORM_URL || "https://acceleratefinancial.ambitioncloud.com.au/s/vv0dxrqg8h",
  title = "Accelerate Financial Online Application Form",
  minHeight = "800px",
}: ExternalFormEmbedProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // If a valid form URL is configured, render the responsive iframe with action header
  if (formUrl && formUrl.trim().length > 0) {
    return (
      <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden relative">
        {/* Top Control Bar with Open in New Tab option */}
        <div className="bg-[#06122d] text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
            <Lock className="w-4 h-4 text-[#00c5d6]" />
            <span>Secure Application Portal</span>
          </div>

          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00c5d6] hover:text-[#00e1f4] hover:underline transition-colors"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Loading Overlay */}
        {!iframeLoaded && (
          <div className="absolute inset-0 top-[45px] bg-white flex flex-col items-center justify-center p-8 z-10">
            <div className="w-12 h-12 border-3 border-slate-200 border-t-[#00c5d6] rounded-full animate-spin mb-4" />
            <p className="text-sm font-semibold text-slate-700">
              Loading secure application form...
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Encrypted with 256-bit SSL protection
            </p>
          </div>
        )}

        {/* Responsive Embed iframe with security sandbox */}
        <iframe
          src={formUrl}
          title={title}
          className="w-full border-0 block"
          style={{ minHeight }}
          scrolling="auto"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-downloads"
          allow="camera; microphone; geolocation"
          onLoad={() => setIframeLoaded(true)}
        />
      </div>
    );
  }

  // Fallback state when external form URL is pending from client
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-[#06122d] text-white p-6 sm:p-8 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00c5d6]/20 border border-[#00c5d6]/40 flex items-center justify-center text-[#00c5d6]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Secure Application Portal
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Accelerate Financial digital loan submission
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00c5d6]/10 border border-[#00c5d6]/30 text-[#00c5d6] text-xs font-semibold self-start sm:self-auto">
            <Lock className="w-3.5 h-3.5" />
            <span>256-Bit SSL Encrypted</span>
          </div>
        </div>
      </div>

      {/* Body Container */}
      <div className="p-6 sm:p-8 lg:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#e6fafc] border border-[#00c5d6]/30 text-[#00c5d6] flex items-center justify-center mx-auto mb-6 shadow-xs">
            <FileText className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-[#06122d] mb-3">
            Online Application Form Container
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            This page is configured with a responsive iframe container ready to embed the client&apos;s custom application form.
            Simply configure the form URL via the <code className="bg-slate-100 text-[#06122d] px-2 py-0.5 rounded text-xs font-mono font-bold">NEXT_PUBLIC_APPLY_FORM_URL</code> environment variable or pass <code className="bg-slate-100 text-[#06122d] px-2 py-0.5 rounded text-xs font-mono font-bold">formUrl</code> prop.
          </p>

          {/* Checklist of what applicants should prepare */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 text-left mb-8">
            <h4 className="text-sm font-bold text-[#06122d] uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00c5d6]" />
              <span>Recommended Information to Prepare</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c5d6]" />
                <span>Valid Government ID (Passport / Drivers Licence)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c5d6]" />
                <span>Recent Payslips or Tax Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c5d6]" />
                <span>Assets &amp; Liabilities Statement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c5d6]" />
                <span>Details of Proposed Loan / Asset</span>
              </div>
            </div>
          </div>

          {/* Direct Contact Alternative while form URL is configured */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs sm:text-sm text-slate-500">
            <span className="font-semibold text-slate-700">Need Immediate Support?</span>
            <div className="flex items-center gap-4">
              <a
                href="tel:0883481000"
                className="inline-flex items-center gap-1.5 text-[#00c5d6] hover:underline font-bold"
              >
                <PhoneCall className="w-4 h-4" />
                <span>(08) 8348 1000</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="mailto:approvals@acceleratefinancial.com.au"
                className="inline-flex items-center gap-1.5 text-[#00c5d6] hover:underline font-bold"
              >
                <Mail className="w-4 h-4" />
                <span>approvals@acceleratefinancial.com.au</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
