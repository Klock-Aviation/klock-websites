"use client";

import React from "react";

// ============================================================================
// TYPES
// ============================================================================

interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
  variant?: "default" | "highlight" | "dark" | "bordered";
}

interface LegalPageTemplateProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  effectiveDate?: string;
  sections: LegalSection[];
  showConsentBanner?: boolean;
  onAccept?: () => void;
  onDecline?: () => void;
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

/** 2/3/4-column responsive grid for organizing content */
export function ContentGrid({
  children,
  columns = 2,
  className = "",
}: {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const colsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${colsClass[columns]} gap-4 ${className}`}>
      {children}
    </div>
  );
}

/** Card component for info blocks */
export function ContentCard({
  title,
  children,
  variant = "light",
}: {
  title?: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "gold";
}) {
  const variantClasses = {
    light: "bg-white/5 border-white/10",
    dark: "bg-[#0D1B2A] border-[#1B2838]",
    gold: "bg-[#D7B46A]/10 border-[#D7B46A]/30",
  };

  return (
    <div className={`rounded-lg border p-4 ${variantClasses[variant]}`}>
      {title && (
        <h4 className="mb-2 text-sm font-semibold text-[#D7B46A]">{title}</h4>
      )}
      <div className="text-sm text-gray-300">{children}</div>
    </div>
  );
}

/** Item with gold left border accent */
export function BorderedItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-[#D7B46A] py-2 pl-4">
      <h4 className="mb-1 font-medium text-white">{title}</h4>
      <p className="text-sm text-gray-400">{children}</p>
    </div>
  );
}

/** Bullet point item */
export function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D7B46A]" />
      <span className="text-gray-300">{children}</span>
    </li>
  );
}

/** Bulleted list wrapper */
export function BulletList({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {children}
    </ul>
  );
}

// ============================================================================
// SECTION RENDERER
// ============================================================================

function SectionContent({ section }: { section: LegalSection }) {
  const baseClasses = "rounded-xl p-6 md:p-8";

  const variantClasses = {
    default: "bg-[#1B2838]",
    highlight: "bg-[#D7B46A]/10 border border-[#D7B46A]/30",
    dark: "bg-[#0D1B2A] border border-[#1B2838]",
    bordered: "border-2 border-[#D7B46A]/50 bg-transparent",
  };

  return (
    <section
      id={section.id}
      className={`${baseClasses} ${variantClasses[section.variant || "default"]}`}
    >
      <h2 className="mb-4 text-xl font-semibold text-[#D7B46A] md:text-2xl">
        {section.title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-gray-300">
        {section.content}
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT INFO (Klock Aviation - Kenya)
// ============================================================================

export function ContactInfo({ variant = "full" }: { variant?: "full" | "compact" }) {
  if (variant === "compact") {
    return (
      <div className="text-sm text-gray-400">
        <p>Klock Aviation Limited</p>
        <p>Email: info@klockaviation.com</p>
        <p>Phone: +254 725 332 222</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#D7B46A]/30 bg-[#D7B46A]/10 p-6">
      <h3 className="mb-4 text-lg font-semibold text-[#D7B46A]">Contact Us</h3>
      <div className="space-y-2 text-gray-300">
        <p>
          <span className="text-gray-400">Company:</span> Klock Aviation Limited
        </p>
        <p>
          <span className="text-gray-400">Address:</span> P.O. Box 2200-00606,
          Nairobi, Kenya
        </p>
        <p>
          <span className="text-gray-400">Email:</span>{" "}
          <a
            href="mailto:info@klockaviation.com"
            className="text-[#D7B46A] hover:underline"
          >
            info@klockaviation.com
          </a>
        </p>
        <p>
          <span className="text-gray-400">Phone:</span>{" "}
          <a href="tel:+254725332222" className="text-[#D7B46A] hover:underline">
            +254 725 332 222
          </a>
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// CONSENT BANNER
// ============================================================================

function ConsentBanner({
  onAccept,
  onDecline,
}: {
  onAccept?: () => void;
  onDecline?: () => void;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#1B2838] bg-[#0D1B2A]/95 p-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-gray-300 sm:text-left">
          We use cookies to enhance your experience. By continuing, you agree to
          our Cookie Policy.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onDecline}
            className="rounded-lg border border-gray-600 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
          >
            Decline
          </button>
          <button
            onClick={onAccept}
            className="rounded-lg bg-[#D7B46A] px-4 py-2 text-sm font-medium text-[#0D1B2A] transition-colors hover:bg-[#E8C97D]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN TEMPLATE
// ============================================================================

export default function LegalPageTemplate({
  title,
  subtitle,
  lastUpdated,
  effectiveDate,
  sections,
  showConsentBanner = false,
  onAccept,
  onDecline,
}: LegalPageTemplateProps) {
  return (
    <div className="min-h-screen bg-[#0D1B2A]">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-linear-to-br from-[#0D1B2A] via-[#1B2838] to-[#0D1B2A] py-16 md:py-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#D7B46A]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D7B46A]/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 font-[Playfair_Display] text-4xl font-bold text-white md:text-5xl lg:text-6xl lg:leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mb-6 max-w-2xl text-lg text-gray-400">{subtitle}</p>
          )}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span>
              <span className="text-[#D7B46A]">Last Updated:</span> {lastUpdated}
            </span>
            {effectiveDate && (
              <span>
                <span className="text-[#D7B46A]">Effective:</span>{" "}
                {effectiveDate}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Table of Contents */}
        <nav className="mb-12 rounded-xl border border-[#1B2838] bg-[#1B2838]/50 p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#D7B46A]">
            Table of Contents
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#D7B46A]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#D7B46A]/20 text-xs text-[#D7B46A]">
                    {index + 1}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <SectionContent key={section.id} section={section} />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12">
          <ContactInfo />
        </div>
      </div>

      {/* Consent Banner */}
      {showConsentBanner && (
        <ConsentBanner onAccept={onAccept} onDecline={onDecline} />
      )}
    </div>
  );
}

// Re-export types for consumers
export type { LegalSection, LegalPageTemplateProps };