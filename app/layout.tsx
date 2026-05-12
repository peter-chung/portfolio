import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import {
  Lilita_One, // yes
  Titan_One, // yes
  Cherry_Bomb_One, // yes
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// To try a different font, change only this one line:
const heroFont = Lilita_One({
  // const heroFont = Titan_One({
  // const heroFont = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "Peter Chung | Software Engineer",
  description:
    "Software engineer building full-stack web applications. Check out my projects, experience, and get in touch.",
  openGraph: {
    title: "Peter Chung | Software Engineer",
    description:
      "Software engineer building full-stack web applications. Check out my projects, experience, and get in touch.",
    type: "website",
    siteName: "Peter Chung",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Chung | Software Engineer",
    description:
      "Software engineer building full-stack web applications. Check out my projects, experience, and get in touch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        heroFont.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
