"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { content } from "@/config/content";

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

export default function Footer() {
  const { footer } = content;

  return (
    <footer className="bg-[#121212] text-[#e1dfdd] relative overflow-hidden pt-24 pb-8 border-t border-[#292929]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b7355]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-24">
          <FadeIn delay={0.1} blur={true}>
            <h2
              className={`text-4xl md:text-6xl font-medium leading-[1.1] mb-6 ${cormorant.className}`}
            >
              {footer.hero.headline} <br />
              <span className="text-[#8b7355] italic">
                {footer.hero.headlineHighlight}
              </span>
            </h2>
            <p
              className={`text-gray-400 max-w-lg text-sm leading-relaxed ${poppins.className}`}
            >
              {footer.hero.subtext}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-[#292929] pt-16 mb-24">
          {footer.columns.map((column, colIndex) => (
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
              {footer.contact.title}
            </h4>
            <ul
              className={`space-y-4 text-sm text-gray-400 font-mono mb-8 ${poppins.className}`}
            >
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="hover:text-[#8b7355] transition-colors"
                >
                  {footer.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-[#8b7355] transition-colors"
                >
                  {footer.contact.phone}
                </a>
              </li>
            </ul>

            <h4
              className={`text-white font-bold mb-4 text-xs uppercase tracking-wider ${poppins.className}`}
            >
              {footer.socials.title}
            </h4>
            <div className="flex gap-4">
              {footer.socials.links.map((social, i) => (
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
              href={footer.legal.privacy.href}
              className="hover:text-gray-300 transition-colors"
            >
              {footer.legal.privacy.name}
            </Link>
            <Link
              href={footer.legal.terms.href}
              className="hover:text-gray-300 transition-colors"
            >
              {footer.legal.terms.name}
            </Link>
          </div>
          <p>{footer.legal.copyright}</p>
        </FadeIn>

        {/* --- CREDIT SECTION --- */}
        <div
          className={`mt-8 flex justify-center items-center text-[10px] text-gray-600 tracking-wide opacity-70 hover:opacity-100 transition-opacity duration-300 ${poppins.className}`}
        >
          <span>{footer.credits.textPre}</span>
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
          <span>{footer.credits.textPost}</span>
          <a
            href={footer.credits.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-bold text-gray-500 hover:text-[#8b7355] transition-colors border-b border-transparent hover:border-[#8b7355]"
          >
            {footer.credits.name}
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
