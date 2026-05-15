"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import { getCourseBySlug } from "@/data/courses";
import { CourseProvider, useCourse } from "@/lib/course-context";

function CourseLayoutInner({ children }: { children: React.ReactNode }) {
  const params = useParams<{ courseSlug: string }>();
  const course = getCourseBySlug(params.courseSlug);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { completedLessons, toggleComplete } = useCourse();

  if (!course) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>Kurs topilmadi</h1>
          <p style={{ color: "var(--muted-foreground)" }}>Bunday kurs mavjud emas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen((v) => !v)}
        className="fixed bottom-4 left-4 z-30 p-2.5 rounded-xl border shadow-lg md:hidden"
        style={{ background: "var(--card)", borderColor: "var(--border)", color: "var(--muted-foreground)" }}
        aria-label={sidebarOpen ? "Yopish" : "Ochish"}
      >
        {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "var(--sidebar-width)", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="hidden md:block shrink-0 h-full border-r overflow-hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <Sidebar
              course={course}
              completedLessons={completedLessons}
              onToggleComplete={toggleComplete}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-20 bg-black/40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.22 }}
              className="fixed left-0 top-[var(--navbar-height)] bottom-0 z-30 md:hidden border-r overflow-hidden"
              style={{ width: "var(--sidebar-width)", background: "var(--background)", borderColor: "var(--border)" }}
            >
              <Sidebar
                course={course}
                completedLessons={completedLessons}
                onToggleComplete={toggleComplete}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toggle button desktop */}
      <button
        onClick={() => setSidebarOpen((v) => !v)}
        className="hidden md:flex fixed z-30 p-1.5 rounded-r-lg border border-l-0 shadow-sm top-1/2 -translate-y-1/2"
        style={{
          left: sidebarOpen ? "var(--sidebar-width)" : 0,
          background: "var(--card)",
          borderColor: "var(--border)",
          color: "var(--muted-foreground)",
          transition: "left 0.22s ease",
        }}
        aria-label="Sidebar toggle"
      >
        {sidebarOpen ? <PanelLeftClose size={14} /> : <PanelLeftOpen size={14} />}
      </button>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  const params = useParams<{ courseSlug: string }>();
  return (
    <CourseProvider courseSlug={params.courseSlug}>
      <CourseLayoutInner>{children}</CourseLayoutInner>
    </CourseProvider>
  );
}
