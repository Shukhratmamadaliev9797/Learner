"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { getCourseBySlug } from "@/data/courses";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ComingSoonPage({ params }: Props) {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);

  return (
    <main className="flex-1 overflow-y-auto flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full text-center"
      >
        {/* Animated clock icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
          style={{ background: "var(--accent)" }}
        >
          <Clock size={36} style={{ color: "var(--primary)" }} />
        </motion.div>

        <h1 className="text-3xl font-extrabold mb-3" style={{ color: "var(--foreground)" }}>
          {course ? (
            <>
              <span style={{ color: "var(--primary)" }}>{course.title}</span> kursi
            </>
          ) : (
            "Kurs"
          )}{" "}
          tez orada!
        </h1>

        <p className="text-base mb-2" style={{ color: "var(--muted-foreground)" }}>
          Bu kurs hozirda ishlab chiqilmoqda.
        </p>
        <p className="text-sm mb-8" style={{ color: "var(--muted-foreground)" }}>
          {course?.description}
        </p>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8 text-sm font-medium border"
          style={{
            background: "var(--warning-light)",
            color: "var(--warning)",
            borderColor: "var(--warning)",
          }}
        >
          <span>⏳</span>
          Ishlab chiqilmoqda...
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/kurs/html/kirish"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            HTML kursini boshlash
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            <ArrowLeft size={15} />
            Bosh sahifaga qaytish
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
