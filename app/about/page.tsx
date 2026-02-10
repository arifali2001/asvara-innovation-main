import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import {
  Handshake,
  Lightbulb,
  Shield,
  Rocket,
  Users,
  Linkedin,
} from "lucide-react";
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

const IconMap: any = {
  Handshake: Handshake,
  Lightbulb: Lightbulb,
  Shield: Shield,
  Rocket: Rocket,
};

export default function AboutPage() {
  const { about } = content;

  // --- Global Styling Theme ---
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
      sectionSubtext: `font-light text-sm tracking-wide ${poppins.className}`,
      cardTitle: `text-2xl font-bold ${cormorant.className}`,
      bodyMain: `text-base font-light leading-relaxed ${poppins.className}`,
      bodySmall: `text-sm leading-relaxed ${poppins.className}`,
      label: `text-xs font-bold tracking-[0.2em] uppercase ${poppins.className}`,
      quote: `text-lg md:text-2xl leading-relaxed italic ${cormorant.className}`,
    },
    layout: {
      section: "py-20 relative overflow-hidden",
      sectionLarge: "py-24 md:py-32 relative",
      container: "max-w-7xl mx-auto px-6 relative z-10",
    },
  };

  return (
    <main
      className={`min-h-screen ${theme.colors.bg} ${theme.colors.primary} selection:bg-[#8b7355] selection:text-white relative`}
    >
      <DynamicNavbar />

      {/* hero section */}
      <header
        className={`relative pt-40 pb-20 px-6 text-center overflow-hidden ${theme.colors.bg}`}
      >
        <Parallax
          {...parallaxPresets.layer1}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-30 pointer-events-none"
        >
          <div className="w-[600px] h-[600px] bg-[#f5f3f1] rounded-full blur-[100px] absolute -top-20 right-1/4 opacity-60" />
        </Parallax>

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn delay={0.2} blur={true}>
            <span
              className={`${theme.text.label} ${theme.colors.accent} mb-4 block`}
            >
              {about.hero.label}
            </span>
          </FadeIn>

          <LetterRevealBlur
            className={`${theme.text.heroTitle} ${theme.colors.primary} mb-6`}
            {...textPresets.hero}
          >
            {about.hero.title}
          </LetterRevealBlur>

          <FadeIn delay={0.6} blur={true}>
            <p
              className={`${theme.text.bodyMain} ${theme.colors.secondary} max-w-2xl mx-auto`}
            >
              {about.hero.subtext}
            </p>
          </FadeIn>
        </div>
      </header>

      {/* Company Story & Mission*/}
      <section className={theme.layout.section}>
        <div className={theme.layout.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <FadeIn delay={0.2} direction="right" blur={true}>
                <h2 className={`${theme.text.sectionHeading} mb-6`}>
                  {about.story.heading} <br />
                  <span className={theme.colors.accent}>
                    {about.story.headingHighlight}
                  </span>
                </h2>
                <p
                  className={`${theme.text.bodyMain} ${theme.colors.muted} mb-6`}
                >
                  {about.story.p1}
                </p>
                <p className={`${theme.text.bodyMain} ${theme.colors.muted}`}>
                  {about.story.p2}
                </p>
              </FadeIn>
            </div>

            <div className="relative">
              <Parallax speed={0.12}>
                <div
                  className={`p-10 rounded-2xl ${theme.colors.cardBg} border ${theme.colors.border} relative group`}
                >
                  <div className="absolute top-8 left-8 text-6xl text-[#8b7355]/20 font-serif leading-none">
                    “
                  </div>
                  <blockquote
                    className={`${theme.text.quote} ${theme.colors.primary} relative z-10 mb-6 pt-4`}
                  >
                    {about.story.quote}
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-[1px] w-12 bg-[#8b7355]"></div>
                    <span
                      className={`${theme.text.label} ${theme.colors.muted}`}
                    >
                      {about.story.quoteLabel}
                    </span>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      {/*  Founders Sections */}
      <section className={`${theme.layout.sectionLarge}`}>
        <div className={theme.layout.container}>
          <div className="text-center mb-16">
            <LetterRevealBlur
              className={theme.text.sectionHeading}
              {...textPresets.sectionTitle}
            >
              {about.founders.header}
            </LetterRevealBlur>
            <FadeIn delay={0.4} blur={true}>
              <p
                className={`${theme.text.sectionSubtext} ${theme.colors.muted} mt-4`}
              >
                {about.founders.subtext}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {about.founders.list.map((founder, index) => (
              <FadeIn key={index} delay={index * 0.2} className="group">
                <div
                  className={`relative h-full bg-[#f5f3f1] border ${theme.colors.border} rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className="p-8">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#8b7355]/20 flex-shrink-0">
                        <Image
                          src={founder.image}
                          alt={founder.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h3
                          className={`${theme.text.cardTitle} ${theme.colors.primary}`}
                        >
                          {founder.name}
                        </h3>
                        <p
                          className={`${theme.text.bodySmall} ${theme.colors.accent} font-medium`}
                        >
                          {founder.title}
                        </p>
                        <Link
                          href={founder.link}
                          target="_blank"
                          className="inline-flex items-center gap-2 mt-2 text-xs font-bold uppercase tracking-wider text-[#5a5a5a] hover:text-[#0077b5] transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </Link>
                      </div>
                    </div>

                    <p
                      className={`${theme.text.bodySmall} ${theme.colors.muted}`}
                    >
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className={`${theme.layout.section} bg-[#292929] text-white`}>
        <div className={theme.layout.container}>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <FadeIn delay={0.2} blur={true}>
                <span
                  className={`${theme.text.label} text-[#8b7355] mb-4 block`}
                >
                  {about.culture.label}
                </span>
                <h2
                  className={`text-4xl font-bold ${cormorant.className} mb-6  text-white`}
                >
                  {about.culture.headline} <br />{" "}
                  {about.culture.headlineHighlight}
                </h2>
                <p
                  className={`text-gray-400 ${poppins.className} text-sm leading-relaxed`}
                >
                  {about.culture.desc}
                </p>
              </FadeIn>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {about.culture.values.map((val, i) => {
                const IconComponent = IconMap[val.icon] || Shield;
                return (
                  <FadeIn
                    key={i}
                    delay={0.4 + i * 0.1}
                    className="p-6 border border-white/10 rounded-xl hover:border-[#8b7355]/50 transition-colors group"
                  >
                    <IconComponent className="w-8 h-8 text-[#8b7355] mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3
                      className={`text-xl font-bold ${cormorant.className} mb-2`}
                    >
                      {val.title}
                    </h3>
                    <p className={`text-gray-400 text-sm ${poppins.className}`}>
                      {val.desc}
                    </p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA/Early Access Section*/}
      <section className={`${theme.layout.section} px-6`}>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <LetterRevealBlur
            className={`${theme.text.heroTitle} text-4xl md:text-5xl ${theme.colors.primary} mb-5`}
            {...textPresets.elegant}
          >
            {about.cta.header}
          </LetterRevealBlur>
          <FadeIn delay={0.4} blur={true}>
            <p
              className={`${theme.text.bodyMain} ${theme.colors.secondary} mb-8 max-w-lg mx-auto`}
            >
              {about.cta.desc}
            </p>
          </FadeIn>

          <FadeIn delay={0.6} blur={true}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/early-access">
                <button className="px-8 py-3 rounded-lg bg-[#8b7355] text-white hover:bg-[#7a654a] transition shadow-md font-medium text-sm flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Rocket className="w-4 h-4" />
                  {about.cta.btnPrimary}
                </button>
              </Link>
              <Link href="/careers">
                <button className="px-8 py-3 rounded-lg bg-transparent text-[#292929] border border-[#292929]/20 hover:border-[#8b7355] hover:text-[#8b7355] transition font-medium text-sm flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Users className="w-4 h-4" />
                  {about.cta.btnSecondary}
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
