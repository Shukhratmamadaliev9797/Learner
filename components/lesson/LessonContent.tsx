"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AlertCircle,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Bookmark,
  XCircle,
  Pencil,
} from "lucide-react";
import type { Lesson } from "@/lib/types";
import CodeBlock from "./CodeBlock";
import LiveEditor from "./LiveEditor";
import Quiz from "./Quiz";

interface Props {
  lesson: Lesson;
  courseSlug: string;
  prevLesson: Lesson | null;
  nextLesson: Lesson | null;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.35 },
  }),
};

export default function LessonContent({
  lesson,
  courseSlug,
  prevLesson,
  nextLesson,
  isCompleted,
  onToggleComplete,
}: Props) {
  return (
    <motion.article
      key={lesson.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-[85%] mx-auto px-4 py-8 pb-20"
    >
      {/* Title area */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              {lesson.title}
            </h1>
            <p className="mt-1 text-sm" style={{ color: "var(--muted-foreground)" }}>
              {lesson.description}
            </p>
          </div>
          <motion.button
            whileTap={{ scale: 0.93 }}
            onClick={onToggleComplete}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shrink-0 transition-all border"
            style={
              isCompleted
                ? {
                    background: "var(--success-light)",
                    color: "var(--success)",
                    borderColor: "var(--success)",
                  }
                : {
                    background: "var(--card)",
                    color: "var(--muted-foreground)",
                    borderColor: "var(--border)",
                  }
            }
          >
            <CheckCircle2 size={15} />
            {isCompleted ? "Bajarildi!" : "Bajarildi deb belgilash"}
          </motion.button>
        </div>
      </motion.div>

      {/* Prose content */}
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="prose"
        dangerouslySetInnerHTML={{ __html: lesson.content }}
      />

      {/* Code Example */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
        <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "var(--foreground)" }}>
          Kod namunasi
        </h2>
        <CodeBlock
          code={lesson.codeExample.code}
          language={lesson.codeExample.language}
          title={lesson.codeExample.title}
        />
      </motion.div>

      {/* Live Editor */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
        <h2 className="text-xl font-bold mt-8 mb-1" style={{ color: "var(--foreground)" }}>
          Jonli muharrir
        </h2>
        <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>
          Kodni o'zgartiring va natijani darhol ko'ring:
        </p>
        <LiveEditor defaultCode={lesson.liveEditorDefault} />
      </motion.div>

      {/* Notes */}
      {lesson.notes.length > 0 && (
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
          <div
            className="rounded-xl border p-5 my-6"
            style={{ background: "var(--accent)", borderColor: "var(--primary)", borderLeftWidth: 4 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={16} style={{ color: "var(--primary)" }} />
              <span className="font-semibold text-sm" style={{ color: "var(--primary)" }}>
                Muhim eslatmalar
              </span>
            </div>
            <ul className="space-y-2">
              {lesson.notes.map((note, i) => (
                <li
                  key={i}
                  className="text-sm"
                  style={{ color: "var(--accent-foreground)" }}
                  dangerouslySetInnerHTML={{ __html: `• ${note}` }}
                />
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Common Mistakes */}
      {lesson.commonMistakes.length > 0 && (
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible">
          <div
            className="rounded-xl border p-5 my-6"
            style={{
              background: "var(--danger-light)",
              borderColor: "var(--danger)",
              borderLeftWidth: 4,
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <XCircle size={16} style={{ color: "var(--danger)" }} />
              <span className="font-semibold text-sm" style={{ color: "var(--danger)" }}>
                Ko'p uchraydigan xatolar
              </span>
            </div>
            <ul className="space-y-2">
              {lesson.commonMistakes.map((m, i) => (
                <li
                  key={i}
                  className="text-sm"
                  style={{ color: "var(--danger)" }}
                  dangerouslySetInnerHTML={{ __html: `❌ ${m}` }}
                />
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      {/* Practice Task */}
      <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible">
        <div
          className="rounded-xl border p-5 my-6"
          style={{
            background: "var(--success-light)",
            borderColor: "var(--success)",
            borderLeftWidth: 4,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Pencil size={16} style={{ color: "var(--success)" }} />
            <span className="font-semibold text-sm" style={{ color: "var(--success)" }}>
              Amaliy topshiriq
            </span>
          </div>
          <p
            className="text-sm"
            style={{ color: "var(--success)" }}
            dangerouslySetInnerHTML={{ __html: lesson.practiceTask }}
          />
        </div>
      </motion.div>

      {/* Quiz */}
      {lesson.quiz.length > 0 && (
        <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible">
          <Quiz questions={lesson.quiz} />
        </motion.div>
      )}

      {/* Prev / Next navigation */}
      <motion.div
        custom={8}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between gap-4 mt-12 pt-6 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        {prevLesson ? (
          <Link
            href={`/kurs/${courseSlug}/${prevLesson.slug}`}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all hover:border-[var(--primary)] hover:text-[var(--primary)] group"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>
              <span className="block text-xs opacity-60">Oldingi</span>
              {prevLesson.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link
            href={`/kurs/${courseSlug}/${nextLesson.slug}`}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all hover:border-[var(--primary)] hover:text-[var(--primary)] group text-right"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            <span>
              <span className="block text-xs opacity-60">Keyingi</span>
              {nextLesson.title}
            </span>
            <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <div
            className="px-4 py-3 rounded-xl text-sm font-medium text-center"
            style={{
              background: "var(--success-light)",
              color: "var(--success)",
            }}
          >
            🎉 Kurs tugadi! Tabriklaymiz!
          </div>
        )}
      </motion.div>
    </motion.article>
  );
}
