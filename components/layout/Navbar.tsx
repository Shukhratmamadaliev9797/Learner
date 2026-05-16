"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";

const COURSE_META: Record<string, { color: string; bg: string }> = {
  html:       { color: "#e34c26", bg: "rgba(227,76,38,0.12)"  },
  css:        { color: "#2965f1", bg: "rgba(41,101,241,0.12)" },
  javascript: { color: "#c9a800", bg: "rgba(201,168,0,0.12)"  },
  typescript: { color: "#3178c6", bg: "rgba(49,120,198,0.12)" },
  react:      { color: "#00b4d8", bg: "rgba(0,180,216,0.12)"  },
  nextjs:     { color: "#999",    bg: "rgba(160,160,160,0.1)" },
  nodejs:     { color: "#68a063", bg: "rgba(104,160,99,0.12)" },
  git:        { color: "#f05032", bg: "rgba(240,80,50,0.12)"  },
  sql:        { color: "#336791", bg: "rgba(51,103,145,0.12)" },
};

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="nav-root">
        <nav className="nav-inner">

          {/* Brand */}
          <Link href="/" className="nav-brand" onClick={() => setMobileOpen(false)}>
            <span className="nav-brand-grid" aria-hidden>
              <span /><span /><span /><span />
            </span>
            <span className="nav-brand-name">Learner</span>
          </Link>

          <span className="nav-sep" aria-hidden />

          {/* Course links — desktop */}
          <div className="nav-links" role="list">
            {courses.map((course) => {
              const isActive = pathname.startsWith(`/kurs/${course.slug}`);
              const meta = COURSE_META[course.slug];
              return (
                <Link
                  key={course.id}
                  role="listitem"
                  href={course.available ? `/kurs/${course.slug}` : `/tez-orada/${course.slug}`}
                  className={cn("nav-item", isActive && "nav-item--active")}
                  style={{
                    "--c": meta?.color ?? "var(--primary)",
                    "--bg": meta?.bg ?? "rgba(99,102,241,0.12)",
                  } as React.CSSProperties}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="nav-item-pill"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  <span className="nav-item-chip" aria-hidden />
                  <span className="nav-item-label">{course.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="nav-controls">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.85 }}
              className="nav-ctrl-btn"
              aria-label="Mavzuni o'zgartirish"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {theme === "dark" ? <Sun size={15} strokeWidth={1.75} /> : <Moon size={15} strokeWidth={1.75} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <button
              className="nav-ctrl-btn nav-mobile-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menyuni ochish/yopish"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "x" : "m"}
                  initial={{ opacity: 0, rotate: -15 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 15 }}
                  transition={{ duration: 0.14 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {mobileOpen ? <X size={15} strokeWidth={1.75} /> : <Menu size={15} strokeWidth={1.75} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="nav-mobile-backdrop"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="nav-mobile-drawer"
            >
              <div className="nav-mobile-grid">
                {courses.map((course) => {
                  const isActive = pathname.startsWith(`/kurs/${course.slug}`);
                  const meta = COURSE_META[course.slug];
                  return (
                    <Link
                      key={course.id}
                      href={course.available ? `/kurs/${course.slug}` : `/tez-orada/${course.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={cn("nav-mobile-card", isActive && "nav-mobile-card--active")}
                      style={{
                        "--c": meta?.color ?? "var(--primary)",
                        "--bg": meta?.bg ?? "rgba(99,102,241,0.12)",
                      } as React.CSSProperties}
                    >
                      <span className="nav-mobile-card-dot" aria-hidden />
                      <span className="nav-mobile-card-icon">{course.icon}</span>
                      <span className="nav-mobile-card-name">{course.title}</span>
                      {!course.available && (
                        <span className="nav-mobile-card-soon">soon</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
