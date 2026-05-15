"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronRight, CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course } from "@/lib/types";

interface Props {
  course: Course;
  completedLessons: string[];
  onToggleComplete: (lessonSlug: string) => void;
}

export default function Sidebar({ course, completedLessons, onToggleComplete }: Props) {
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
  const progress = totalLessons > 0 ? Math.round((completedLessons.length / totalLessons) * 100) : 0;

  return (
    <aside
      className="flex flex-col h-full"
      style={{ width: "var(--sidebar-width)", background: "var(--background)" }}
    >
      {/* Course header */}
      <div className="p-4 border-b shrink-0" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">{course.icon}</span>
          <div>
            <div className="font-bold text-sm" style={{ color: "var(--foreground)" }}>
              {course.title} Kursi
            </div>
            <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
              {completedLessons.length}/{totalLessons} dars bajarildi
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--muted)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "var(--primary)" }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div className="text-xs mt-1 text-right" style={{ color: "var(--muted-foreground)" }}>
          {progress}%
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-2 shrink-0 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="relative">
          <Search
            size={14}
            className="absolute left-2.5 top-1/2 -translate-y-1/2"
            style={{ color: "var(--muted-foreground)" }}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Darslarni qidirish..."
            className="w-full text-sm pl-8 pr-8 py-1.5 rounded-md outline-none"
            style={{
              background: "var(--muted)",
              color: "var(--foreground)",
              border: "1px solid var(--border)",
            }}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2"
              style={{ color: "var(--muted-foreground)" }}
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Lessons list */}
      <nav className="flex-1 overflow-y-auto py-2">
        {filtered.length === 0 && (
          <div className="px-4 py-8 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>
            Hech narsa topilmadi
          </div>
        )}
        {filtered.map((group) => {
          const isCollapsed = collapsed[group.title];
          return (
            <div key={group.title} className="mb-1">
              {/* Group header */}
              <button
                onClick={() =>
                  setCollapsed((prev) => ({ ...prev, [group.title]: !prev[group.title] }))
                }
                className="w-full flex items-center justify-between px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                style={{ color: "var(--muted-foreground)" }}
              >
                <span>{group.title}</span>
                {isCollapsed ? <ChevronRight size={13} /> : <ChevronDown size={13} />}
              </button>

              <AnimatePresence initial={false}>
                {!isCollapsed && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="overflow-hidden"
                  >
                    {group.lessons.map((lesson) => {
                      const href = `/kurs/${course.slug}/${lesson.slug}`;
                      const isActive = pathname === href;
                      const isDone = completedLessons.includes(lesson.slug);

                      return (
                        <motion.div
                          key={lesson.id}
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.1 }}
                        >
                          <Link
                            href={href}
                            className={cn(
                              "flex items-center gap-2 px-4 py-2 text-sm transition-all rounded-md mx-1",
                              isActive
                                ? "font-semibold"
                                : "hover:bg-[var(--muted)]"
                            )}
                            style={
                              isActive
                                ? {
                                    background: "var(--primary-light)",
                                    color: "var(--primary)",
                                  }
                                : { color: "var(--muted-foreground)" }
                            }
                          >
                            <span className="flex-1 leading-snug">{lesson.title}</span>
                            {isDone && (
                              <CheckCircle2 size={14} style={{ color: "var(--success)", flexShrink: 0 }} />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
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
