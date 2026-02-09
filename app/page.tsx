import FadeIn from "@/components/animations/FadeIn";
import LetterRevealBlur from "@/components/animations/LetterRevealBlur";
import Parallax from "@/components/animations/Parallax";
import { textPresets, parallaxPresets } from "@/config/animationPresets";
import DynamicNavbar from "@/components/layout/DynamicNavbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { content } from "@/config/content";

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

export default function Home() {
  const { home } = content;

  // --- global styling ----
  const theme = {
    colors: {
      bg: "bg-[#e8dfd5]",
      primary: "text-[#292929]",
      secondary: "text-[#4a4a4a]",
      muted: "text-[#5a5a5a]",
      accent: "text-[#8b7355]",
      white: "text-white",
      border: "border-[#292929]/10",
    },
    fonts: {
      heading: cormorant.className,
      body: poppins.className,
    },
    text: {
      // Hero Sizes
      heroTitle: `text-5xl md:text-7xl leading-tight font-bold ${cormorant.className}`,
      heroSubtitle: `text-5xl md:text-7xl italic font-light ${cormorant.className}`,

      // Section Headers
      sectionHeading: `text-3xl md:text-4xl leading-tight font-bold ${cormorant.className}`,
      sectionSubtext: `font-light text-sm tracking-wide ${poppins.className}`,

      // Card/Item Headers
      cardTitle: `text-2xl font-bold ${cormorant.className}`,
      stepTitle: `text-lg font-bold ${cormorant.className}`,

      // Body Text
      bodyMain: `text-base font-light leading-relaxed ${poppins.className}`,
      bodySmall: `text-sm leading-relaxed ${poppins.className}`,

      // Small Labels/Tags
      label: `text-xs font-bold tracking-[0.2em] uppercase ${poppins.className}`,
      tag: `text-[10px] font-bold uppercase tracking-wider ${poppins.className}`,

      // Quote
      quote: `text-lg md:text-xl leading-relaxed italic ${cormorant.className}`,
    },

    components: {
      button: {
        base: `px-5 py-2 rounded-lg transition shadow-md font-medium text-sm ${poppins.className}`,
        primary: "bg-[#8b7355] text-white hover:bg-[#7a654a]",
        secondary:
          "bg-transparent text-[#292929] border border-[#292929]/20 hover:border-[#8b7355] hover:text-[#8b7355]",
        dark: "bg-[#292929] text-white hover:bg-gray-800",
      },
      pill: "inline-flex items-center gap-2 bg-[#f5f3f1]/50 border border-[#292929]/10 rounded-full px-3 py-1 hover:border-[#8b7355]/50 transition-colors",
      card: {
        feature: "relative group h-full",
        workflow:
          "relative bg-[#292929] border border-[#333] hover:border-[#8b7355]/50 p-8 rounded-2xl h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,115,85,0.1)] overflow-hidden",
      },
    },

    layout: {
      section: "py-20 relative overflow-hidden",
      sectionLarge: "py-24 md:py-32 relative",
      container: "max-w-7xl mx-auto px-6 relative z-10",
    },
  };

  // Framer animation inline force stylings
  const sectionHeaderInlineStyle = {
    fontFamily: '"Cormorant Garamond", "Cormorant Garamond Placeholder", serif',
    fontWeight: 700,
  };

  return (
    <main
      className={`min-h-screen ${theme.colors.bg} ${theme.colors.primary} selection:bg-[#8b7355] selection:text-white relative`}
    >
      <DynamicNavbar />

      {/* Hero Section */}
      <header
        className={`relative pt-32 pb-16 px-6 text-center overflow-hidden ${theme.colors.bg}`}
      >
        <Parallax
          {...parallaxPresets.layer1}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full opacity-30 pointer-events-none"
        >
          <div className="w-[600px] h-[600px] bg-[#f5f3f1] rounded-full blur-[100px] absolute -top-20 left-1/3 opacity-60" />
          <div className="w-[500px] h-[500px] bg-[#fff] rounded-full blur-[80px] absolute top-20 right-1/3 opacity-40" />
        </Parallax>

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn delay={0.3} blur={true}>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
              <div className={theme.components.pill}>
                <svg
                  className={`w-3.5 h-3.5 ${theme.colors.accent}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span className={`${theme.text.tag} ${theme.colors.secondary}`}>
                  {home.hero.tag1}
                </span>
              </div>

              <div className={theme.components.pill}>
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className={`${theme.text.tag} ${theme.colors.secondary}`}>
                  {home.hero.tag2}
                </span>
              </div>
            </div>
          </FadeIn>

          <div className="mb-6">
            <LetterRevealBlur
              className={`${theme.text.heroTitle} ${theme.colors.primary}`}
              {...textPresets.hero}
              style={sectionHeaderInlineStyle}
            >
              {home.hero.h1}
            </LetterRevealBlur>

            <LetterRevealBlur
              className={`${theme.text.heroSubtitle} ${theme.colors.accent} mt-1 block`}
              {...textPresets.hero}
              delay={0.4}
              style={{ ...sectionHeaderInlineStyle, fontWeight: 300 }}
            >
              {home.hero.h2}
            </LetterRevealBlur>
          </div>

          <FadeIn delay={1.0} blur={true}>
            <p
              className={`${theme.text.bodyMain} ${theme.colors.secondary} mb-8 max-w-2xl mx-auto`}
            >
              {home.hero.subtext}
            </p>
          </FadeIn>

          <FadeIn delay={1.2} threshold="100%" blur={true}>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
              <button
                className={`${theme.components.button.base} ${theme.components.button.primary}`}
              >
                {home.hero.btnPrimary}
              </button>
              <button
                className={`${theme.components.button.base} ${theme.components.button.secondary}`}
              >
                {home.hero.btnSecondary}
              </button>
            </div>
          </FadeIn>
        </div>

        <Parallax speed={0.1}>
          <div
            className={`max-w-5xl mx-auto mt-4 rounded-2xl overflow-hidden relative border ${theme.colors.border}`}
          >
            <div className="aspect-[21/9] bg-gradient-to-b from-gray-100 to-white flex items-center justify-center relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{ backgroundImage: `url('${home.hero.image}')` }}
              />
              <div className="absolute inset-0 bg-[#292929]/20 mix-blend-multiply" />
            </div>
          </div>
        </Parallax>
      </header>

      <section className={`${theme.colors.bg} ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <div className="flex flex-col md:flex-row items-stretch group">
            <div className="w-full md:w-1/2 md:pr-12 lg:pr-16 pb-10 md:pb-0 relative transition-opacity duration-700 md:group-hover:opacity-60 text-left">
              <FadeIn delay={0.2} direction="right" blur={true}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#292929]/30" />
                  <span className={`${theme.text.label} ${theme.colors.muted}`}>
                    {home.problemSolution.left.pill}
                  </span>
                </div>
                <h2
                  className={`${theme.text.sectionHeading} ${theme.colors.primary} mb-4`}
                >
                  {home.problemSolution.left.title}
                </h2>
                <p
                  className={`${theme.text.bodySmall} ${theme.colors.muted} max-w-sm`}
                >
                  {home.problemSolution.left.desc}
                </p>
              </FadeIn>
            </div>

            <div className="w-full h-[1px] md:w-[1px] md:h-auto bg-[#292929]/10 relative">
              <div className="absolute left-1/2 md:top-1/2 md:left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#8b7355] rotate-45" />
            </div>

            <div className="w-full md:w-1/2 md:pl-12 lg:pl-16 pt-10 md:pt-0 relative text-left md:text-right">
              <FadeIn delay={0.4} direction="left" blur={true}>
                <div className="flex items-center gap-3 mb-6 md:justify-end">
                  <span className="w-2 h-2 rounded-full bg-[#8b7355]" />
                  <span
                    className={`${theme.text.label} ${theme.colors.accent}`}
                  >
                    {home.problemSolution.right.pill}
                  </span>
                </div>
                <h2
                  className={`${theme.text.sectionHeading} ${theme.colors.primary} mb-4`}
                >
                  <span className={theme.colors.accent}>
                    {home.problemSolution.right.titleHighlight}
                  </span>{" "}
                  {home.problemSolution.right.title.replace(
                    home.problemSolution.right.titleHighlight,
                    "",
                  )}
                </h2>
                <p
                  className={`${theme.text.bodySmall} ${theme.colors.muted} max-w-sm md:ml-auto`}
                >
                  {home.problemSolution.right.desc}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className={`${theme.layout.sectionLarge} ${theme.colors.bg}`}>
        <div className={theme.layout.container}>
          <div
            className={`mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b ${theme.colors.border} pb-6`}
          >
            <div className="max-w-2xl">
              <LetterRevealBlur
                className={`${theme.text.sectionHeading} ${theme.colors.primary} mb-3`}
                {...textPresets.sectionTitle}
              >
                {home.products.header}
              </LetterRevealBlur>
              <FadeIn delay={0.4} blur={true}>
                <p
                  className={`${theme.text.sectionSubtext} ${theme.colors.muted}`}
                >
                  {home.products.subtext}
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {home.products.items.map((product, i) => (
              <FadeIn key={i} delay={i * 0.15} className="group cursor-none">
                <Link
                  href={product.href}
                  className="block relative group h-full"
                >
                  <div className="absolute -inset-6 bg-[#f5f3f1] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="flex items-start gap-0">
                    <div className="w-10 flex-shrink-0 pt-1">
                      <span
                        className={`text-[#292929]/40 text-lg font-bold group-hover:text-[#8b7355] transition-colors duration-300 ${cormorant.className}`}
                      >
                        {product.id}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`${theme.text.cardTitle} ${theme.colors.primary} mb-2 transition-transform duration-500 group-hover:translate-x-2 flex items-center gap-2`}
                      >
                        {product.title}
                        <span
                          className={`opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300 ${theme.colors.accent}`}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </h3>
                      <p
                        className={`${theme.text.bodySmall} ${theme.colors.muted} max-w-sm`}
                      >
                        {product.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={`${theme.colors.bg} ${theme.layout.sectionLarge}`}>
        <div className={theme.layout.container}>
          <div className={`mb-16 border-b ${theme.colors.border} pb-6`}>
            <div className="max-w-2xl">
              <LetterRevealBlur
                className={`${theme.text.sectionHeading} ${theme.colors.primary} mb-3`}
                {...textPresets.sectionTitle}
              >
                {home.features.header}
              </LetterRevealBlur>
              <FadeIn delay={0.4} blur={true}>
                <p
                  className={`${theme.text.sectionSubtext} ${theme.colors.muted}`}
                >
                  {home.features.subtext}
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {home.features.items.map((feature, i) => (
              <FadeIn key={i} delay={i * 0.15} className="group cursor-none">
                <div className={theme.components.card.feature}>
                  <div className="absolute -inset-6 bg-[#f5f3f1] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="flex items-start gap-0">
                    <div className="w-10 flex-shrink-0 pt-1">
                      <div className="text-[#292929]/30 group-hover:text-[#8b7355] transition-colors duration-500">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={feature.icon}
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`${theme.text.cardTitle} ${theme.colors.primary} mb-3 transition-transform duration-500 group-hover:translate-x-2`}
                      >
                        {feature.title}
                      </h3>
                      <ul className="space-y-3">
                        {feature.points.map((point, j) => (
                          <li
                            key={j}
                            className={`flex items-center gap-3 ${theme.text.bodySmall} ${theme.colors.muted}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4d2d0] group-hover:bg-[#8b7355] transition-colors duration-300" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className={`${theme.layout.sectionLarge} px-6 bg-[#292929] overflow-hidden`}
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8b7355]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className={theme.layout.container}>
          <Parallax speed={0.05}>
            <div className="text-center mb-24">
              <h2
                className={`text-4xl md:text-5xl font-medium text-white mb-6 ${cormorant.className}`}
              >
                <span className="inline-block mr-3">
                  <LetterRevealBlur delay={0.2} {...textPresets.sectionTitle}>
                    {home.workflow.header}
                  </LetterRevealBlur>
                </span>
                <span className={`italic ${theme.colors.accent} inline-block`}>
                  <LetterRevealBlur delay={0.4} {...textPresets.sectionTitle}>
                    {home.workflow.subHeader}
                  </LetterRevealBlur>
                </span>
              </h2>
              <FadeIn delay={0.6} blur={true}>
                <p
                  className={`text-gray-400 font-light text-sm max-w-xl mx-auto leading-relaxed ${poppins.className}`}
                >
                  {home.workflow.desc}
                </p>
              </FadeIn>
            </div>
          </Parallax>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <FadeIn
              delay={0.2}
              className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b7355]/30 to-transparent z-0"
              blur={true}
            >
              <div />
            </FadeIn>

            {home.workflow.steps.map((step, i) => (
              <FadeIn
                key={i}
                delay={0.3 + i * 0.3}
                className="relative z-10 h-full group cursor-none"
                blur={true}
              >
                <div className={theme.components.card.workflow}>
                  <div className="absolute -right-4 -bottom-8 text-8xl font-bold text-[#252525] opacity-50 group-hover:opacity-100 group-hover:text-[#2a2a2a] transition-all duration-500 select-none pointer-events-none">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 bg-[#252525] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#8b7355] transition-colors duration-500 relative z-10 shadow-lg shadow-black/50">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={step.icon}
                      />
                    </svg>
                  </div>
                  <div className="mb-3 relative z-10">
                    <LetterRevealBlur
                      className={`${theme.text.stepTitle} text-white`}
                      delay={0.5 + i * 0.3}
                    >
                      {step.title}
                    </LetterRevealBlur>
                  </div>
                  <FadeIn delay={0.6 + i * 0.3} blur={true}>
                    <p
                      className={`${theme.text.bodySmall} text-gray-500 group-hover:text-gray-400 transition-colors duration-300 relative z-10`}
                    >
                      {step.desc}
                    </p>
                  </FadeIn>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={`${theme.layout.section} bg-[#e8dfd5] px-6`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative bg-[#f5f3f1] rounded-2xl overflow-hidden border ${theme.colors.border}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <FadeIn
                className="p-8 md:p-12 flex flex-col justify-center relative z-10"
                blur={true}
              >
                <div className="text-5xl text-[#8b7355]/20 absolute top-6 left-6 font-serif leading-none">
                  “
                </div>
                <blockquote
                  className={`${theme.text.quote} ${theme.colors.primary} mb-6 relative z-10`}
                >
                  {home.testimonial.quote}
                </blockquote>
                <div className="flex items-center justify-between border-t border-gray-200 pt-5">
                  <div>
                    <h4
                      className={`font-bold ${theme.colors.primary} text-sm ${poppins.className}`}
                    >
                      {home.testimonial.author}
                    </h4>
                    <p
                      className={`text-xs ${theme.colors.secondary} ${poppins.className}`}
                    >
                      {home.testimonial.role}
                    </p>
                  </div>
                </div>
              </FadeIn>
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Parallax speed={-0.1} className="absolute inset-0 h-[120%]">
                  <img
                    alt="Professional lawyer"
                    className="w-full h-full object-cover object-top"
                    src={home.testimonial.image}
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f5f3f1]/50 md:to-[#f5f3f1]/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA/Early Access Section */}
      <section className={`${theme.layout.section} bg-[#e8dfd5] px-6`}>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <LetterRevealBlur
            className={`${theme.text.heroTitle} text-4xl md:text-5xl ${theme.colors.primary} mb-5`}
            {...textPresets.elegant}
          >
            {home.cta.header}
          </LetterRevealBlur>
          <FadeIn delay={0.4} blur={true}>
            <p
              className={`${theme.text.bodyMain} ${theme.colors.secondary} mb-8 max-w-2xl mx-auto`}
            >
              {home.cta.desc}
            </p>
          </FadeIn>
          <FadeIn delay={0.6} blur={true}>
            <div className="flex justify-center gap-4">
              <button
                className={`${theme.components.button.base} ${theme.components.button.dark} px-8`}
              >
                {home.cta.btn}
              </button>
            </div>
          </FadeIn>
        </div>
        <Parallax
          speed={0.2}
          className="absolute top-0 left-0 w-64 h-64 bg-[#f5f3f1] rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"
        >
          <div />
        </Parallax>
        <Parallax
          speed={0.3}
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#8b7355]/20 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"
        >
          <div />
        </Parallax>
      </section>

      <Footer />
    </main>
  );
}
