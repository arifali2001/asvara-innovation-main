import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import {
  CheckCircle2,
  ArrowLeft,
  Rocket,
  Scale,
  Gavel,
  FileText,
  Users,
} from "lucide-react";
import { content } from "@/config/content";

// Components
import DynamicNavbar from "@/components/layout/DynamicNavbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import LetterRevealBlur from "@/components/animations/LetterRevealBlur";
import Parallax from "@/components/animations/Parallax";
import ScrollTextReveal from "@/components/animations/ScrollTextReveal";
import { textPresets, parallaxPresets } from "@/config/animationPresets";

// Fonts
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

export default function AICourtPage() {
  const data = content.innovations.pages.aicourt;

  // --- global theme config ---
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
      subHeading: `text-xl md:text-2xl font-semibold ${cormorant.className}`,
      cardTitle: `text-lg font-bold ${cormorant.className}`,
      bodyMain: `text-lg font-semibold leading-relaxed ${poppins.className}`,
      label: `text-xs font-bold tracking-[0.2em] uppercase ${poppins.className}`,
    },
    layout: {
      section: "py-20 relative",
      container: "max-w-4xl mx-auto px-6 relative z-10",
    },
  };

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
              alt="AI Court Room Interface"
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
          <FadeIn threshold="80%">
            <h2 className={`${theme.text.sectionHeading} mb-8`}>
              {data.howItWorks.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {data.howItWorks.roles.map((role, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl ${theme.colors.cardBg} border ${theme.colors.border} flex items-center gap-3`}
                >
                  <Users className="w-5 h-5 text-[#8b7355]" />
                  <span className="font-medium text-[#292929]">{role}</span>
                </div>
              ))}
            </div>

            <p
              className={`${theme.text.bodyMain} ${theme.colors.secondary} mb-6`}
            >
              {data.howItWorks.description}
            </p>

            <div
              className={`p-8 rounded-2xl ${theme.colors.cardBg} border ${theme.colors.border}`}
            >
              <ul className="space-y-4">
                {data.howItWorks.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8b7355] text-white text-xs font-bold mt-1">
                      {i + 1}
                    </span>
                    <span
                      className={`${theme.text.bodyMain} ${theme.colors.secondary}`}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={`${theme.layout.section} pt-0`}>
        <div className={theme.layout.container}>
          <FadeIn threshold="80%">
            <h2 className={`${theme.text.sectionHeading} mb-12`}>
              {data.coreFeatures.title}
            </h2>
            <div className="space-y-12">
              {data.coreFeatures.items.map((feature, i) => (
                <div key={i} className="group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-[#8b7355]/10 text-[#8b7355] mt-1">
                      <Gavel className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className={`${theme.text.subHeading} mb-3 group-hover:text-[#8b7355] transition-colors`}
                      >
                        {feature.title}
                      </h3>
                      <ul className="space-y-3">
                        {feature.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8b7355] mt-2.5 opacity-60" />
                            <span
                              className={`${theme.text.bodyMain} ${theme.colors.muted} text-base`}
                            >
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {i !== data.coreFeatures.items.length - 1 && (
                    <div
                      className={`h-[1px] w-full ${theme.colors.border} mt-8 ml-14`}
                    />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        className={`${theme.layout.section} bg-[#292929] text-[#e8dfd5]`}
      >
        <div className={theme.layout.container}>
          <FadeIn threshold="80%">
            <h2
              className={`text-3xl md:text-4xl leading-tight font-bold ${cormorant.className} mb-12`}
            >
              {data.useCases.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.useCases.items.map((useCase, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl border border-white/10 hover:border-[#8b7355]/50 transition-colors bg-white/5"
                >
                  <h3 className={`${theme.text.cardTitle} text-[#8b7355] mb-3`}>
                    {useCase.title}
                  </h3>
                  <p
                    className={`text-gray-400 font-light ${poppins.className}`}
                  >
                    {useCase.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className={theme.layout.section}>
        <div className={theme.layout.container}>
          <div
            className={`${theme.text.bodyMain} ${theme.colors.primary} text-justify`}
          >
            <ScrollTextReveal className="leading-[1.8]">
              {data.conclusion}
            </ScrollTextReveal>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn threshold="80%">
            <h2 className={`${theme.text.sectionHeading} mb-6`}>
              Ready to resolve disputes smarter?
            </h2>
            <p className={`${theme.text.bodyMain} mb-10`}>
              Experience the future of litigation with AI Court Room.
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
