import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
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
