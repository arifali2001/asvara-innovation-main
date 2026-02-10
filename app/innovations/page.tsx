import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { content } from "@/config/content";

import DynamicNavbar from "@/components/layout/DynamicNavbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import LetterRevealBlur from "@/components/animations/LetterRevealBlur";
import Parallax from "@/components/animations/Parallax";
import { textPresets, parallaxPresets } from "@/config/animationPresets";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function InnovationsPage() {
  const { innovations } = content;

  // --- Global theme configs ---
  const theme = {
    colors: {
      bg: "bg-[#e8dfd5]",
      primary: "text-[#292929]",
      secondary: "text-[#4a4a4a]",
      muted: "text-[#5a5a5a]",
      accent: "text-[#8b7355]",
      border: "border-[#292929]/10",
      cardBg: "bg-[#f5f3f1]",
    },
    text: {
      heroTitle: `text-5xl md:text-7xl leading-tight font-bold ${cormorant.className}`,
      sectionHeading: `text-3xl md:text-4xl leading-tight font-bold ${cormorant.className}`,
      cardTitle: `text-2xl font-bold ${cormorant.className}`,
      bodyMain: `text-base font-light leading-relaxed ${poppins.className}`,
      bodySmall: `text-sm leading-relaxed ${poppins.className}`,
      label: `text-xs font-bold tracking-[0.2em] uppercase ${poppins.className}`,
    },
    layout: {
      section: "py-20 relative overflow-hidden",
      container: "max-w-7xl mx-auto px-6 relative z-10",
    },
  };

  return (
    <main
      className={`min-h-screen ${theme.colors.bg} ${theme.colors.primary} selection:bg-[#8b7355] selection:text-white relative`}
    >
      <DynamicNavbar />

      <header
        className={`relative pt-40 pb-20 px-6 text-center overflow-hidden ${theme.colors.bg}`}
      >
        <Parallax
          {...parallaxPresets.layer1}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-30 pointer-events-none"
        >
          <div className="w-[800px] h-[800px] bg-[#f5f3f1] rounded-full blur-[120px] absolute -top-40 left-1/4 opacity-50" />
        </Parallax>

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn delay={0.2} blur={true}>
            <span
              className={`${theme.text.label} ${theme.colors.accent} mb-4 block`}
            >
              {innovations.hero.label}
            </span>
          </FadeIn>

          <LetterRevealBlur
            className={`${theme.text.heroTitle} ${theme.colors.primary} mb-6`}
            {...textPresets.hero}
          >
            {innovations.hero.title}
          </LetterRevealBlur>

          <FadeIn delay={0.6} blur={true}>
            <p
              className={`${theme.text.bodyMain} ${theme.colors.secondary} max-w-2xl mx-auto`}
            >
              {innovations.hero.subtext}
            </p>
          </FadeIn>
        </div>
      </header>

      <section className={`${theme.layout.section} pt-0`}>
        <div className={theme.layout.container}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.items.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.15} className="h-full">
                <Link href={item.href} className="group block h-full">
                  <div
                    className={`
                      relative h-full flex flex-col 
                      ${theme.colors.cardBg} border ${theme.colors.border} 
                      rounded-2xl overflow-hidden 
                      /* Removed all hover transforms/shadows to fix cropping */
                    `}
                  >
                    <div className="relative h-64 w-full bg-[#e3ded9] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />

                      <FadeIn
                        delay={0.2}
                        threshold="100%"
                        className="absolute top-4 left-4 z-10"
                      >
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#8b7355] shadow-sm border border-[#8b7355]/10">
                          {item.category}
                        </span>
                      </FadeIn>
                    </div>

                    <div className="p-8 flex flex-col flex-grow relative z-10 bg-[#f5f3f1]">
                      <FadeIn delay={0.3} threshold="100%">
                        <div className="flex items-center gap-4 text-[10px] text-[#8b7355]/80 font-medium uppercase tracking-widest mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {item.readTime}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-[#8b7355]/30" />
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {item.date}
                          </span>
                        </div>
                      </FadeIn>

                      <div className="mb-3">
                        <LetterRevealBlur
                          className={`${theme.text.cardTitle} ${theme.colors.primary} block`}
                          delay={0.4}
                        >
                          {item.title}
                        </LetterRevealBlur>
                      </div>

                      <FadeIn
                        delay={0.5}
                        threshold="100%"
                        className="flex-grow mb-6"
                      >
                        <p
                          className={`${theme.text.bodySmall} ${theme.colors.muted}`}
                        >
                          {item.description}
                        </p>
                      </FadeIn>

                      <FadeIn delay={0.6} threshold="100%">
                        <div className="flex items-center text-sm font-medium text-[#292929] transition-transform duration-300 group-hover:translate-x-1">
                          Learn more{" "}
                          <ArrowRight className="w-4 h-4 ml-2 text-[#8b7355] transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
