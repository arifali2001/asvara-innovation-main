"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";

// The Style is AI Generated. We need to make it according to our design scheme
// Sandy will be working on this, prolly
export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#e1dfdd] relative overflow-hidden pt-24 pb-8 border-t border-[#292929]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b7355]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-24">
          <FadeIn delay={0.1} blur={true}>
            <h2
              className="text-4xl md:text-6xl font-medium leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Ready to modernize <br />
              <span className="text-[#8b7355] italic">
                your legal practice?
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg text-sm leading-relaxed">
              Join forward-thinking law firms and enterprises using Asvara to
              automate intelligence and secure their future.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-[#292929] pt-16 mb-24">
          <FadeIn delay={0.1} blur={true}>
            <h4 className="text-white font-bold mb-6 text-sm">Products</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/innovations/pleadsmart"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  PleadSmart
                </Link>
              </li>
              <li>
                <Link
                  href="/innovations/docbare"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  DocBare
                </Link>
              </li>
              <li>
                <Link
                  href="/innovations/aicourt"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  AI Court Room
                </Link>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} blur={true}>
            <h4 className="text-white font-bold mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  Careers{" "}
                  <span className="bg-[#8b7355]/20 text-[#8b7355] text-[10px] px-1.5 py-0.5 rounded ml-2">
                    HIRING
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.3} blur={true}>
            <h4 className="text-white font-bold mb-6 text-sm">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/innovations"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  Innovations
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.4} blur={true}>
            <h4 className="text-white font-bold mb-6 text-sm">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-mono mb-8">
              <li>
                <a
                  href="mailto:hello@asvara.in"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  hello@asvara.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#8b7355] transition-colors"
                >
                  +91 987 654 3210
                </a>
              </li>
            </ul>

            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/asvara.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#292929] flex items-center justify-center text-gray-400 hover:bg-[#8b7355] hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://x.com/AsvaraInno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#292929] flex items-center justify-center text-gray-400 hover:bg-[#8b7355] hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.5}
          blur={true}
          className="flex flex-col md:flex-row justify-between items-center border-t border-[#292929] pt-8 text-xs text-gray-600"
        >
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link
              href="/policies/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/policies/terms"
              className="hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <p>© 2026 Asvara Innovations. All rights reserved.</p>
        </FadeIn>
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
