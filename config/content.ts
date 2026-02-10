// config/content.ts

export const content = {
  // --- Global / Layout ---
  brand: {
    name: "Asvara",
    tagline: "Legal Intelligence Reimagined",
    logoAlt: "Asvara Logo",
  },

  navbar: {
    links: [
      { name: "Home", href: "/" },
      { name: "Innovations", href: "/innovations" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blogs", href: "/blogs" },
      { name: "About", href: "/about" },
    ],
  },

  footer: {
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
      phoneDisplay: "+91 987 654 3210",
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
  },

  // --- Pages ---

  home: {
    hero: {
      tag1: "Legal Eagle On Board",
      tag2: "Funded by Google",
      h1: "Revolutionizing",
      h2: "Legal Intelligence",
      subtext:
        "Cutting-edge AI solutions empowering legal professionals, law firms, and enterprises to work smarter and achieve more.",
      btnPrimary: "Get Started",
      btnSecondary: "Explore Products",
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2072&auto=format&fit=crop",
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
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop",
    },
    cta: {
      header: "Join the future of legal work",
      desc: "Experience the power of Asvara Innovation today.",
      btn: "Request Access",
    },
  },

  contact: {
    title: "Contact Us",
    subtext: "Get in touch with our team",
  },

  documentation: {
    title: "Documentation",
    subtext: "SAMPLE",
  },

  about: {
    hero: {
      label: "Who We Are",
      title: "About Asvara",
      subtext:
        "Revolutionizing legal practice with AI-powered research, drafting, & simulation.",
    },
    story: {
      heading: "Legal expertise meets",
      headingHighlight: "artificial intelligence.",
      p1: "At Asvara, we are driven by the belief that the future of legal services lies at the intersection of deep legal expertise and cutting-edge technology.",
      p2: "Founded with a shared vision to revolutionize legal research, drafting, and decision-making in India and beyond, our mission is to build intelligent tools that empower legal professionals, institutions, and enterprises to work smarter, faster, and more confidently.",
      quote:
        "Every tool we build is the result of rigorous legal reasoning, iterative design, and hands-on technical validation.",
      quoteLabel: "Mission Statement",
    },
    founders: {
      header: "Meet Our Founders",
      subtext: "Complementary strengths in Law & Technology",
      list: [
        {
          name: "Sajal Anand",
          title: "Lawyer & Chief Legal Architect",
          bio: "Sajal leads legal, strategic, and data architecture at Asvara. With deep insight into case law, litigation workflows, and compliance, he curates legal datasets, designs argument frameworks, and embeds ethical reasoning into our models.",
          image: "/team/sajal.png",
          link: "https://www.linkedin.com/in/sajal-anand-508993215/",
        },
        {
          name: "Rajat Balyan",
          title: "Co-Founder, Director & CTO",
          bio: "Rajat oversees the technology stack, architecture, and ML development. He ensures our platforms are robust, scalable, and secure—powering PleadSmart, Docbare, and AI Court Room with performance and precision.",
          image: "/team/rajat.png",
          link: "https://www.linkedin.com/in/rajat-balyan/",
        },
      ],
    },
    culture: {
      label: "Our Culture",
      headline: "Driven by",
      headlineHighlight: "Collaboration.",
      desc: "We don't believe in building technology for its own sake—we are here to solve real-world legal problems. Our team operates on principles of transparency, ownership, and empathy.",
      values: [
        {
          icon: "Handshake",
          title: "Collaboration",
          desc: "We build together, valuing every perspective.",
        },
        {
          icon: "Lightbulb",
          title: "Curiosity",
          desc: "We question, explore, and innovate relentlessly.",
        },
        {
          icon: "Shield",
          title: "Ownership",
          desc: "We take initiative and deliver with integrity.",
        },
        {
          icon: "Rocket",
          title: "Impact",
          desc: "Democratizing legal intelligence for everyone.",
        },
      ],
    },
    cta: {
      header: "Join the Movement",
      desc: "Be the first to try our AI legal tools. Request early access or join our team to shape the future of law.",
      btnPrimary: "Get Early Access",
      btnSecondary: "Join Our Team",
    },
  },
};
