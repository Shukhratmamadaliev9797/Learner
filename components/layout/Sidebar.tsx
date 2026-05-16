"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course } from "@/lib/types";

interface Props {
  course: Course;
  completedLessons: string[];
  onToggleComplete: (lessonSlug: string) => void;
}

export default function Sidebar({ course, completedLessons }: Props) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    if (!search.trim()) return course.groups;
    const q = search.toLowerCase();
    return course.groups
      .map((g) => ({
        ...g,
        lessons: g.lessons.filter(
          (l) =>
            l.title.toLowerCase().includes(q) ||
            l.description.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.lessons.length > 0);
  }, [search, course.groups]);

  const totalLessons = course.groups.reduce((acc, g) => acc + g.lessons.length, 0);
  const doneLessons = completedLessons.length;
  const progress = totalLessons > 0 ? (doneLessons / totalLessons) * 100 : 0;

  return (
    <aside className="sb-root">
      {/* ── Header ─────────────────────────── */}
      <div className="sb-head">
        <div className="sb-head-top">
          <span className="sb-head-icon">{course.icon}</span>
          <div>
            <p className="sb-head-title">{course.title}</p>
            <p className="sb-head-sub">
              <span style={{ color: "var(--primary)" }}>{doneLessons}</span>
              /{totalLessons} bajarildi
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="sb-progress">
          <div className="sb-progress-track">
            <motion.div
              className="sb-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="sb-progress-label">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* ── Search ─────────────────────────── */}
      <div className="sb-search-wrap">
        <div className="sb-search-box">
          <Search size={13} className="sb-search-ico" strokeWidth={2} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Dars qidirish..."
            className="sb-search-inp"
            spellCheck={false}
          />
          <AnimatePresence>
            {search && (
              <motion.button
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.12 }}
                onClick={() => setSearch("")}
                className="sb-search-clear"
                aria-label="Tozalash"
              >
                <X size={11} strokeWidth={2.5} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Lesson list ────────────────────── */}
      <nav className="sb-nav" aria-label="Darslar">
        {filtered.length === 0 && (
          <p className="sb-empty">Topilmadi</p>
        )}

        {filtered.map((group) => {
          const isOpen = !collapsed[group.title];
          const groupTotal = group.lessons.length;
          const groupDone = group.lessons.filter((l) =>
            completedLessons.includes(l.slug)
          ).length;

          return (
            <div key={group.title} className="sb-group">
              {/* Group header */}
              <button
                className="sb-group-hd"
                onClick={() =>
                  setCollapsed((p) => ({ ...p, [group.title]: isOpen }))
                }
                aria-expanded={isOpen}
              >
                <span className="sb-group-name">{group.title}</span>
                <span className="sb-group-badge">
                  {groupDone > 0 && (
                    <span className="sb-group-done-ct">{groupDone}/</span>
                  )}
                  {groupTotal}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 0 : -90 }}
                  transition={{ duration: 0.2 }}
                  className="sb-group-arrow"
                >
                  <ChevronDown size={12} strokeWidth={2.5} />
                </motion.span>
              </button>

              {/* Lessons */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <ul className="sb-lesson-list">
                      {group.lessons.map((lesson, idx) => {
                        const href = `/kurs/${course.slug}/${lesson.slug}`;
                        const isActive = pathname === href;
                        const isDone = completedLessons.includes(lesson.slug);

                        return (
                          <li key={lesson.id} className="sb-lesson-item">
                            <Link
                              href={href}
                              className={cn(
                                "sb-lesson",
                                isActive && "sb-lesson--active",
                                isDone && !isActive && "sb-lesson--done"
                              )}
                            >
                              {isActive && (
                                <motion.span
                                  layoutId="sb-active"
                                  className="sb-lesson-bg"
                                  transition={{ type: "spring", stiffness: 480, damping: 42 }}
                                />
                              )}

                              {/* Status indicator */}
                              <span className="sb-lesson-status">
                                {isDone ? (
                                  <CheckCircle2
                                    size={13}
                                    className="sb-done-icon"
                                    strokeWidth={2}
                                  />
                                ) : (
                                  <span
                                    className={cn(
                                      "sb-lesson-num",
                                      isActive && "sb-lesson-num--active"
                                    )}
                                  >
                                    {idx + 1}
                                  </span>
                                )}
                              </span>

                              <span className="sb-lesson-text">{lesson.title}</span>

                              {isActive && (
                                <span className="sb-active-bar" aria-hidden />
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
