import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/LenisScroll";
import PageLoader from "@/components/animations/PageLoader";
import CustomCursor from "@/components/animations/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
