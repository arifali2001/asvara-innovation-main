import FadeIn from "@/components/animations/FadeIn";
import LetterRevealBlur from "@/components/animations/LetterRevealBlur";
import Parallax from "@/components/animations/Parallax";
import { textPresets, parallaxPresets } from "@/config/animationPresets";
import DynamicNavbar from "@/components/layout/DynamicNavbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Cormorant_Garamond, Poppins } from "next/font/google";

// Un-decided FONTS, lol
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

// Global Content object
const CONTENT = {
  hero: {
    tag1: "Legal Eagle On Board",
    tag2: "Funded by Google",
    h1: "Revolutionizing",
    h2: "Legal Intelligence",
    subtext:
      "Cutting-edge AI solutions empowering legal professionals, law firms, and enterprises to work smarter and achieve more.",
    btnPrimary: "Get Started",
    btnSecondary: "Explore Products",
  },
  problemSolution: {
    left: {
      pill: "The Challenge",
      title: "Legal research is a fragmented bottleneck.",
      desc: "Scattered tools and manual data entry force professionals to waste valuable time searching instead of strategizing.",
    },
    right: {
      pill: "The Solution",
      title: "Asvara. Integrated intelligence.",
      titleHighlight: "Asvara.",
      desc: "Our AI ecosystem unifies research, drafting, and simulation into one seamless flow, turning data into decision-making power instantly.",
    },
  },
  products: {
    header: "Our Products",
    subtext: "Comprehensive tools for the modern legal practice",
    items: [
      {
        id: "01.",
        title: "PleadSmart",
        desc: "AI-powered legal assistant for research, drafting, and argument building.",
        href: "/innovations/pleadsmart",
      },
      {
        id: "02.",
        title: "DocBare",
        desc: "AI-powered contract & draft analyzer for clause-by-clause legal review.",
        href: "/innovations/docbare",
      },
      {
        id: "03.",
        title: "AI Court Room",
        desc: "Virtual courtroom to simulate trials, test arguments, and predict outcomes.",
        href: "/innovations/aicourt",
      },
    ],
  },
  features: {
    header: "Key Features & Benefits",
    subtext: "Why leading firms choose Asvara",
    items: [
      {
        title: "Semantic Search",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        points: ["Retrieve statutes in <2s", "Contextual understanding"],
      },
      {
        title: "Auto-Drafting",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        points: ["Instant contract generation", "Smart clause library"],
      },
      {
        title: "Court Simulation",
        icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
        points: ["Simulate legal arguments", "Predict case outcomes"],
      },
    ],
  },
  workflow: {
    header: "Workflow",
    subHeader: "Reimagined",
    desc: "From raw data to actionable legal intelligence in four seamless steps.",
    steps: [
      {
        id: "01",
        title: "Ingestion",
        desc: "Securely upload case files, statutes, and internal precedents.",
        icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
      },
      {
        id: "02",
        title: "Processing",
        desc: "Our AI structures unstructured data and identifies key legal entities.",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      },
      {
        id: "03",
        title: "Drafting",
        desc: "Generate citations, arguments, and contracts instantly.",
        icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      },
      {
        id: "04",
        title: "Strategy",
        desc: "Visualize outcomes and collaborate on final case strategy.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
    ],
  },
  testimonial: {
    quote:
      "Asvara Innovation has transformed our workflow. The accuracy of PleadSmart in finding case law is unmatched, and the drafting tools have cut our preparation time in half. It feels like having a senior partner available 24/7.",
    author: "Rajesh Kumar",
    role: "Senior Advocate, High Court",
  },
  cta: {
    header: "Join the future of legal work",
    desc: "Experience the power of Asvara Innovation today.",
    btn: "Request Access",
  },
};

export default function Home() {
  const sectionHeaderStyle = {
    fontFamily: '"Cormorant Garamond", "Cormorant Garamond Placeholder", serif',
    fontWeight: 700,
  };

  const buttonBaseClass = `px-5 py-2 rounded-lg transition shadow-md font-medium text-sm ${poppins.className}`;

  return (
    <main className="min-h-screen bg-[#e8dfd5] text-[#292929] selection:bg-[#8b7355] selection:text-white relative">
      <DynamicNavbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-16 px-6 text-center overflow-hidden bg-[#e8dfd5]">
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
              <div className="inline-flex items-center gap-2 bg-[#f5f3f1]/50 border border-[#292929]/10 rounded-full px-3 py-1 hover:border-[#8b7355]/50 transition-colors">
                <svg
                  className="w-3.5 h-3.5 text-[#8b7355]"
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
                <span
                  className={`text-[10px] font-bold text-[#4a4a4a] uppercase tracking-wider ${poppins.className}`}
                >
                  {CONTENT.hero.tag1}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#f5f3f1]/50 border border-[#292929]/10 rounded-full px-3 py-1 hover:border-[#8b7355]/50 transition-colors">
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
                <span
                  className={`text-[10px] font-bold text-[#4a4a4a] uppercase tracking-wider ${poppins.className}`}
                >
                  {CONTENT.hero.tag2}
                </span>
              </div>
            </div>
          </FadeIn>

          <div className="mb-6">
            <LetterRevealBlur
              className={`text-5xl md:text-7xl text-[#292929] leading-tight font-bold ${cormorant.className}`}
              {...textPresets.hero}
              style={sectionHeaderStyle}
            >
              {CONTENT.hero.h1}
            </LetterRevealBlur>

            <LetterRevealBlur
              className={`block text-5xl md:text-7xl italic font-light text-[#8b7355] mt-1 ${cormorant.className}`}
              {...textPresets.hero}
              delay={0.4}
              style={{ ...sectionHeaderStyle, fontWeight: 300 }}
            >
              {CONTENT.hero.h2}
            </LetterRevealBlur>
          </div>

          <FadeIn delay={1.0} blur={true}>
            <p
              className={`text-base text-[#4a4a4a] mb-8 max-w-2xl mx-auto font-light leading-relaxed ${poppins.className}`}
            >
              {CONTENT.hero.subtext}
            </p>
          </FadeIn>

          <FadeIn delay={1.2} threshold="100%" blur={true}>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
              <button
                className={`${buttonBaseClass} bg-[#8b7355] text-white hover:bg-[#7a654a]`}
              >
                {CONTENT.hero.btnPrimary}
              </button>
              <button
                className={`${buttonBaseClass} bg-transparent text-[#292929] border border-[#292929]/20 hover:border-[#8b7355] hover:text-[#8b7355]`}
              >
                {CONTENT.hero.btnSecondary}
              </button>
            </div>
          </FadeIn>
        </div>

        <Parallax speed={0.1}>
          <div className="max-w-5xl mx-auto mt-4 rounded-2xl overflow-hidden relative border border-[#292929]/10">
            <div className="aspect-[21/9] bg-gradient-to-b from-gray-100 to-white flex items-center justify-center relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2072&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-[#292929]/20 mix-blend-multiply" />
            </div>
          </div>
        </Parallax>
      </header>

      {/* Problem & Solution Section */}
      <section className="bg-[#e8dfd5] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-stretch group">
            <div className="w-full md:w-1/2 md:pr-12 lg:pr-16 pb-10 md:pb-0 relative transition-opacity duration-700 md:group-hover:opacity-60 text-left">
              <FadeIn delay={0.2} direction="right" blur={true}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#292929]/30" />
                  <span
                    className={`text-xs font-bold tracking-[0.2em] uppercase text-[#5a5a5a] ${poppins.className}`}
                  >
                    {CONTENT.problemSolution.left.pill}
                  </span>
                </div>
                <h2
                  className={`text-3xl text-[#292929] mb-4 leading-tight font-bold ${cormorant.className}`}
                >
                  {CONTENT.problemSolution.left.title}
                </h2>
                <p
                  className={`text-sm text-[#5a5a5a] leading-relaxed max-w-sm ${poppins.className}`}
                >
                  {CONTENT.problemSolution.left.desc}
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
                    className={`text-xs font-bold tracking-[0.2em] uppercase text-[#8b7355] ${poppins.className}`}
                  >
                    {CONTENT.problemSolution.right.pill}
                  </span>
                </div>
                <h2
                  className={`text-3xl text-[#292929] mb-4 leading-tight font-bold ${cormorant.className}`}
                >
                  <span className="text-[#8b7355]">
                    {CONTENT.problemSolution.right.titleHighlight}
                  </span>{" "}
                  {CONTENT.problemSolution.right.title.replace(
                    CONTENT.problemSolution.right.titleHighlight,
                    "",
                  )}
                </h2>
                <p
                  className={`text-sm text-[#5a5a5a] leading-relaxed max-w-sm md:ml-auto ${poppins.className}`}
                >
                  {CONTENT.problemSolution.right.desc}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-24 bg-[#e8dfd5] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#292929]/10 pb-6">
            <div className="max-w-2xl">
              <LetterRevealBlur
                className={`text-3xl md:text-4xl text-[#292929] mb-3 leading-tight font-bold ${cormorant.className}`}
                {...textPresets.sectionTitle}
              >
                {CONTENT.products.header}
              </LetterRevealBlur>
              <FadeIn delay={0.4} blur={true}>
                <p
                  className={`text-[#5a5a5a] font-light text-sm tracking-wide ${poppins.className}`}
                >
                  {CONTENT.products.subtext}
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {CONTENT.products.items.map((product, i) => (
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
                        className={`text-2xl text-[#292929] mb-2 transition-transform duration-500 group-hover:translate-x-2 flex items-center gap-2 font-bold ${cormorant.className}`}
                      >
                        {product.title}
                        <span className="opacity-100 translate-x-0 md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300 text-[#8b7355]">
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
                        className={`text-sm text-[#5a5a5a] leading-tight max-w-sm ${poppins.className}`}
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
      <section className="bg-[#e8dfd5] py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 border-b border-[#292929]/10 pb-6">
            <div className="max-w-2xl">
              <LetterRevealBlur
                className={`text-3xl md:text-4xl text-[#292929] mb-3 leading-tight font-bold ${cormorant.className}`}
                {...textPresets.sectionTitle}
              >
                {CONTENT.features.header}
              </LetterRevealBlur>
              <FadeIn delay={0.4} blur={true}>
                <p
                  className={`text-[#5a5a5a] font-light text-sm tracking-wide ${poppins.className}`}
                >
                  {CONTENT.features.subtext}
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {CONTENT.features.items.map((feature, i) => (
              <FadeIn key={i} delay={i * 0.15} className="group cursor-none">
                <div className="relative group h-full">
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
                        className={`text-2xl text-[#292929] mb-3 transition-transform duration-500 group-hover:translate-x-2 font-bold ${cormorant.className}`}
                      >
                        {feature.title}
                      </h3>

                      <ul className="space-y-3">
                        {feature.points.map((point, j) => (
                          <li
                            key={j}
                            className={`flex items-center gap-3 text-sm text-[#5a5a5a] leading-tight ${poppins.className}`}
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
      <section className="py-32 px-6 bg-[#292929] relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#8b7355]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Parallax speed={0.05}>
            <div className="text-center mb-24">
              <h2
                className={`text-4xl md:text-5xl font-medium text-white mb-6 ${cormorant.className}`}
              >
                <span className="inline-block mr-3">
                  <LetterRevealBlur delay={0.2} {...textPresets.sectionTitle}>
                    {CONTENT.workflow.header}
                  </LetterRevealBlur>
                </span>
                <span className="italic text-[#8b7355] inline-block">
                  <LetterRevealBlur delay={0.4} {...textPresets.sectionTitle}>
                    {CONTENT.workflow.subHeader}
                  </LetterRevealBlur>
                </span>
              </h2>
              <FadeIn delay={0.6} blur={true}>
                <p
                  className={`text-gray-400 font-light text-sm max-w-xl mx-auto leading-relaxed ${poppins.className}`}
                >
                  {CONTENT.workflow.desc}
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

            {CONTENT.workflow.steps.map((step, i) => (
              <FadeIn
                key={i}
                delay={0.3 + i * 0.3}
                className="relative z-10 h-full group cursor-none"
                blur={true}
              >
                <div className="relative bg-[#292929] border border-[#333] hover:border-[#8b7355]/50 p-8 rounded-2xl h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(139,115,85,0.1)] overflow-hidden">
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
                      className={`text-lg font-bold text-white ${cormorant.className}`}
                      delay={0.5 + i * 0.3}
                    >
                      {step.title}
                    </LetterRevealBlur>
                  </div>
                  <FadeIn delay={0.6 + i * 0.3} blur={true}>
                    <p
                      className={`text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300 relative z-10 ${poppins.className}`}
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
      <section className="py-20 px-6 bg-[#e8dfd5]">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#f5f3f1] rounded-2xl overflow-hidden border border-[#292929]/10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <FadeIn
                className="p-8 md:p-12 flex flex-col justify-center relative z-10"
                blur={true}
              >
                <div className="text-5xl text-[#8b7355]/20 absolute top-6 left-6 font-serif leading-none">
                  “
                </div>
                <blockquote
                  className={`text-lg md:text-xl text-[#292929] leading-relaxed mb-6 relative z-10 italic ${cormorant.className}`}
                >
                  {CONTENT.testimonial.quote}
                </blockquote>
                <div className="flex items-center justify-between border-t border-gray-200 pt-5">
                  <div>
                    <h4
                      className={`font-bold text-[#292929] text-sm ${poppins.className}`}
                    >
                      {CONTENT.testimonial.author}
                    </h4>
                    <p
                      className={`text-xs text-[#4a4a4a] ${poppins.className}`}
                    >
                      {CONTENT.testimonial.role}
                    </p>
                  </div>
                </div>
              </FadeIn>
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Parallax speed={-0.1} className="absolute inset-0 h-[120%]">
                  <img
                    alt="Professional lawyer"
                    className="w-full h-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f5f3f1]/50 md:to-[#f5f3f1]/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-[#e8dfd5]">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <LetterRevealBlur
            className={`text-4xl md:text-5xl text-[#292929] mb-5 ${cormorant.className}`}
            {...textPresets.elegant}
          >
            {CONTENT.cta.header}
          </LetterRevealBlur>
          <FadeIn delay={0.4} blur={true}>
            <p
              className={`text-[#4a4a4a] text-base mb-8 max-w-2xl mx-auto ${poppins.className}`}
            >
              {CONTENT.cta.desc}
            </p>
          </FadeIn>
          <FadeIn delay={0.6} blur={true}>
            <div className="flex justify-center gap-4">
              <button
                className={`${buttonBaseClass} bg-[#292929] text-white hover:bg-gray-800 px-8`}
              >
                {CONTENT.cta.btn}
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
