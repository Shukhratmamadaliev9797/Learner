import type { Metadata } from "next";
import { Inter_Tight, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Learner.uz — Dasturlashni o'zbek tilida o'rganing",
  description:
    "HTML, CSS, JavaScript, React va boshqa texnologiyalarni o'zbek tilida interaktiv tarzda o'rganing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uz"
      className={`${interTight.variable} ${dmMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="h-full flex flex-col antialiased overflow-hidden">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
