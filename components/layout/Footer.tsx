"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond, Poppins } from "next/font/google";

// Un-decided FONTS, lol
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Global Content object
const FOOTER_CONTENT = {
  hero: {
    headline: "Ready to modernize",
    headlineHighlight: "your legal practice?",
    subtext:
      "Join forward-thinking law firms and enterprises using Asvara to automate intelligence and secure their future.",
  },
  columns: [
    {
      title: "Products",
      links: [
        { name: "PleadSmart", href: "/innovations/pleadsmart" },
        { name: "DocBare", href: "/innovations/docbare" },
        { name: "AI Court Room", href: "/innovations/aicourt" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers", badge: "HIRING" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blogs" },
        { name: "Innovations", href: "/innovations" },
        { name: "Help Center", href: "/help" },
      ],
    },
  ],
  contact: {
    title: "Get in Touch",
    email: "hello@asvara.in",
    phone: "+91 987 654 3210",
  },
  socials: {
    title: "Follow Us",
    links: [
      {
        name: "Instagram",
        href: "https://instagram.com/asvara.ai",
        iconPath:
          "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        viewBox: "0 0 448 512",
      },
      {
        name: "X (Twitter)",
        href: "https://x.com/AsvaraInno",
        iconPath:
          "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
        viewBox: "0 0 512 512",
      },
    ],
  },
  legal: {
    privacy: { name: "Privacy Policy", href: "/policies/privacy" },
    terms: { name: "Terms of Service", href: "/policies/terms" },
    copyright: "© 2026 Asvara Innovations. All rights reserved.",
  },
  credits: {
    textPre: "Made with",
    textPost: "in Lucknow by",
    name: "Arif",
    link: "https://arifali.vercel.app/",
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#e1dfdd] relative overflow-hidden pt-24 pb-8 border-t border-[#292929]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b7355]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-24">
          <FadeIn delay={0.1} blur={true}>
            <h2
              className={`text-4xl md:text-6xl font-medium leading-[1.1] mb-6 ${cormorant.className}`}
            >
              {FOOTER_CONTENT.hero.headline} <br />
              <span className="text-[#8b7355] italic">
                {FOOTER_CONTENT.hero.headlineHighlight}
              </span>
            </h2>
            <p
              className={`text-gray-400 max-w-lg text-sm leading-relaxed ${poppins.className}`}
            >
              {FOOTER_CONTENT.hero.subtext}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-[#292929] pt-16 mb-24">
          {FOOTER_CONTENT.columns.map((column, colIndex) => (
            <FadeIn key={colIndex} delay={0.1 * (colIndex + 1)} blur={true}>
              <h4
                className={`text-white font-bold mb-6 text-sm ${poppins.className}`}
              >
                {column.title}
              </h4>
              <ul
                className={`space-y-4 text-sm text-gray-400 ${poppins.className}`}
              >
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-[#8b7355] transition-colors"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="bg-[#8b7355]/20 text-[#8b7355] text-[10px] px-1.5 py-0.5 rounded ml-2 font-medium">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}

          <FadeIn delay={0.4} blur={true}>
            <h4
              className={`text-white font-bold mb-6 text-sm ${poppins.className}`}
            >
              {FOOTER_CONTENT.contact.title}
            </h4>
            <ul
              className={`space-y-4 text-sm text-gray-400 font-mono mb-8 ${poppins.className}`}
            >
              <li>
                <a
                  href={`mailto:${FOOTER_CONTENT.contact.email}`}
                  className="hover:text-[#8b7355] transition-colors"
                >
                  {FOOTER_CONTENT.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${FOOTER_CONTENT.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-[#8b7355] transition-colors"
                >
                  {FOOTER_CONTENT.contact.phone}
                </a>
              </li>
            </ul>

            <h4
              className={`text-white font-bold mb-4 text-xs uppercase tracking-wider ${poppins.className}`}
            >
              {FOOTER_CONTENT.socials.title}
            </h4>
            <div className="flex gap-4">
              {FOOTER_CONTENT.socials.links.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#292929] flex items-center justify-center text-gray-400 hover:bg-[#8b7355] hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox={social.viewBox}
                  >
                    <path d={social.iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.5}
          blur={true}
          className={`flex flex-col md:flex-row justify-between items-center border-t border-[#292929] pt-8 text-xs text-gray-600 ${poppins.className}`}
        >
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link
              href={FOOTER_CONTENT.legal.privacy.href}
              className="hover:text-gray-300 transition-colors"
            >
              {FOOTER_CONTENT.legal.privacy.name}
            </Link>
            <Link
              href={FOOTER_CONTENT.legal.terms.href}
              className="hover:text-gray-300 transition-colors"
            >
              {FOOTER_CONTENT.legal.terms.name}
            </Link>
          </div>
          <p>{FOOTER_CONTENT.legal.copyright}</p>
        </FadeIn>

        {/* --- CREDIT SECTION: Obviously I'll be removing before released. HAHAHAHA --- */}
        <div
          className={`mt-8 flex justify-center items-center text-[10px] text-gray-600 tracking-wide opacity-70 hover:opacity-100 transition-opacity duration-300 ${poppins.className}`}
        >
          <span>{FOOTER_CONTENT.credits.textPre}</span>
          <span className="mx-1 text-[#8b7355] animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </span>
          <span>{FOOTER_CONTENT.credits.textPost}</span>
          <a
            href={FOOTER_CONTENT.credits.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-bold text-gray-500 hover:text-[#8b7355] transition-colors border-b border-transparent hover:border-[#8b7355]"
          >
            {FOOTER_CONTENT.credits.name}
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center overflow-hidden pointer-events-none opacity-[0.03] absolute bottom-[-10vw] left-0 select-none">
        <Image
          src="/asvara-white.svg"
          alt="Asvara Watermark"
          width={1500}
          height={400}
          className="w-[90vw] object-contain"
        />
      </div>
    </footer>
  );
}
