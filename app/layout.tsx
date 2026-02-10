import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/LenisScroll";
import CustomCursor from "@/components/animations/CustomCursor";
import GrainOverlay from "@/components/ui/grainderOverlay";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asvara Innovation",
  description: "Legal Eagle on board",
  icons: {
    icon: "/logo-hex.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <GrainOverlay />
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
