import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Rocket, FileSearch } from "lucide-react";
import { content } from "@/config/content";

// Components
import DynamicNavbar from "@/components/layout/DynamicNavbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import LetterRevealBlur from "@/components/animations/LetterRevealBlur";
import Parallax from "@/components/animations/Parallax";
import ScrollTextReveal from "@/components/animations/ScrollTextReveal";
import { textPresets, parallaxPresets } from "@/config/animationPresets";
import { theme } from "@/config/theme";
import { cormorant, poppins } from "@/config/fonts";

export default function DocBarePage() {
  const data = content.innovations.pages.docbare;

  return (
    <main
      className={`min-h-screen ${theme.colors.bg} ${theme.colors.primary} selection:bg-[#8b7355] selection:text-white relative`}
    >
      <DynamicNavbar />

      <header className="relative pt-40 pb-20 px-6 overflow-hidden">
        <Parallax
          {...parallaxPresets.layer1}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-30 pointer-events-none"
        >
          <div className="w-[600px] h-[600px] bg-[#8b7355] rounded-full blur-[150px] absolute -top-20 right-0 opacity-40" />
        </Parallax>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <FadeIn delay={0.1}>
            <Link
              href="/innovations"
              className={`inline-flex items-center gap-2 ${theme.text.label} ${theme.colors.muted} hover:text-[#8b7355] transition-colors mb-8`}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Innovations
            </Link>
          </FadeIn>

          <FadeIn delay={0.2} blur={true}>
            <span
              className={`${theme.text.label} ${theme.colors.accent} mb-4 block`}
            >
              {data.hero.label}
            </span>
          </FadeIn>

          <LetterRevealBlur
            className={`${theme.text.heroTitle} ${theme.colors.primary} mb-6`}
            {...textPresets.hero}
          >
            {data.hero.title}
          </LetterRevealBlur>

          <FadeIn delay={0.4} blur={true}>
            <p
              className={`text-2xl md:text-3xl ${cormorant.className} ${theme.colors.secondary} mb-8`}
            >
              {data.hero.subtitle}
            </p>
          </FadeIn>

          <FadeIn
            delay={0.6}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#292929]/5 mt-12 bg-[#dcd5cc]"
          >
            <Image
              src={data.hero.image}
              alt="DocBare Interface"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#e8dfd5]/80 via-transparent to-transparent opacity-50" />
          </FadeIn>
        </div>
      </header>

      <section className={theme.layout.section}>
        <div className={theme.layout.container}>
          <div
            className={`${theme.text.bodyMain} ${theme.colors.primary} text-justify`}
          >
            <ScrollTextReveal className="leading-[1.8]">
              {data.intro}
            </ScrollTextReveal>
          </div>
        </div>
      </section>

      <section className={`${theme.layout.section} pt-0`}>
        <div className={theme.layout.container}>
          <FadeIn
            delay={0.2}
            threshold="80%"
            className={`p-8 md:p-12 rounded-2xl ${theme.colors.cardBg} border ${theme.colors.border}`}
          >
            <h3
              className={`${theme.text.subHeading} mb-6 border-b ${theme.colors.border} pb-4 flex items-center gap-3`}
            >
              <FileSearch className="w-6 h-6 text-[#8b7355]" />
              Core Capabilities
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8b7355] mt-1 flex-shrink-0" />
                  <span
                    className={`${theme.text.bodyMain} ${theme.colors.secondary} text-base`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className={`${theme.layout.section} pt-0`}>
        <div className={theme.layout.container}>
          <div className="space-y-32">
            {data.sections.map((section, index) => (
              <div key={index} className="group">
                <FadeIn threshold="80%">
                  <h2
                    className={`${theme.text.sectionHeading} ${theme.colors.primary} mb-6 group-hover:text-[#8b7355] transition-colors duration-300`}
                  >
                    {section.title}
                  </h2>
                  <div className={`h-[1px] w-20 bg-[#8b7355] mb-8`} />
                </FadeIn>

                <div
                  className={`${theme.text.bodyMain} ${theme.colors.primary}`}
                >
                  <ScrollTextReveal className="leading-[1.8]">
                    {section.content}
                  </ScrollTextReveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn threshold="80%">
            <h2 className={`${theme.text.sectionHeading} mb-6`}>
              Ready to secure your contracts?
            </h2>
            <p className={`${theme.text.bodyMain} mb-10`}>
              Experience the precision of DocBare today.
            </p>
            <Link href="/early-access">
              <button className="px-10 py-4 rounded-full bg-[#292929] text-white hover:bg-[#8b7355] transition-all shadow-xl font-medium text-base flex items-center justify-center gap-2 mx-auto">
                <Rocket className="w-5 h-5" />
                Get Early Access
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
