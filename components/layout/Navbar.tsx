"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Search, Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeCourse = courses.find((c) => pathname.startsWith(`/kurs/${c.slug}`));

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "var(--background)",
          borderColor: "var(--border)",
          height: "var(--navbar-height)",
        }}
      >
        <div className="flex items-center h-full px-4 gap-4 max-w-[1600px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg shrink-0" style={{ color: "var(--primary)" }}>
            <BookOpen size={22} />
            <span>Learner</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 overflow-x-auto">
            {courses.map((course) => {
              const isActive = pathname.startsWith(`/kurs/${course.slug}`);
              return (
                <Link
                  key={course.id}
                  href={course.available ? `/kurs/${course.slug}` : `/tez-orada/${course.slug}`}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-150",
                    isActive
                      ? "text-white"
                      : "hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  )}
                  style={
                    isActive
                      ? { background: "var(--primary)" }
                      : {}
                  }
                >
                  {course.title}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 ml-auto">
            {/* Theme toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--muted-foreground)" }}
              aria-label="Mavzuni o'zgartirish"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: "var(--muted-foreground)" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menyuni ochish"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[var(--navbar-height)] left-0 right-0 z-40 border-b p-4 md:hidden"
            style={{ background: "var(--background)", borderColor: "var(--border)" }}
          >
            <div className="flex flex-col gap-1">
              {courses.map((course) => {
                const isActive = pathname.startsWith(`/kurs/${course.slug}`);
                return (
                  <Link
                    key={course.id}
                    href={course.available ? `/kurs/${course.slug}` : `/tez-orada/${course.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-all",
                      isActive
                        ? "text-white"
                        : "text-[var(--muted-foreground)]"
                    )}
                    style={isActive ? { background: "var(--primary)" } : {}}
                  >
                    {course.icon} {course.title}
                    {!course.available && (
                      <span className="ml-2 text-xs opacity-60">Tez orada</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
