"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Trophy, RotateCcw, BookOpen } from "lucide-react";
import Link from "next/link";
import type { TestQuestion } from "@/data/html-test";

interface TestResultProps {
  questions: TestQuestion[];
  answers: (number | null)[];
  courseColor: string;
  title: string;
}

interface CategoryStat {
  total: number;
  correct: number;
}

export default function TestResult({ questions, answers, courseColor, title }: TestResultProps) {
  const correct = answers.filter((a, i) => a === questions[i].correct).length;
  const wrong = answers.filter((a, i) => a !== null && a !== questions[i].correct).length;
  const skipped = answers.filter((a) => a === null).length;
  const pct = Math.round((correct / questions.length) * 100);

  // Category breakdown
  const catStats: Record<string, CategoryStat> = {};
  questions.forEach((q, i) => {
    if (!catStats[q.category]) catStats[q.category] = { total: 0, correct: 0 };
    catStats[q.category].total++;
    if (answers[i] === q.correct) catStats[q.category].correct++;
  });

  const grade = pct >= 90 ? "A" : pct >= 75 ? "B" : pct >= 60 ? "C" : pct >= 45 ? "D" : "F";
  const gradeLabel =
    pct >= 90 ? "A'lo" : pct >= 75 ? "Yaxshi" : pct >= 60 ? "Qoniqarli" : pct >= 45 ? "Past" : "Juda past";
  const gradeColor =
    pct >= 90 ? "#059669" : pct >= 75 ? "#2250e8" : pct >= 60 ? "#b45309" : "#dc2626";

  const circumference = 2 * Math.PI * 54;
  const strokeDash = (pct / 100) * circumference;

  return (
    <div className="result-root">
      <motion.div
        className="result-card"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Hero */}
        <div className="result-hero">
          <Trophy size={20} className="result-trophy" style={{ color: gradeColor }} />
          <h1 className="result-title">{title} — Test natijasi</h1>
        </div>

        {/* Score ring + stats */}
        <div className="result-score-row">
          <div className="result-ring-wrap">
            <svg width="128" height="128" viewBox="0 0 128 128">
              <circle cx="64" cy="64" r="54" fill="none" stroke="var(--surface-3)" strokeWidth="8" />
              <motion.circle
                cx="64"
                cy="64"
                r="54"
                fill="none"
                stroke={gradeColor}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${circumference}`}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: circumference - strokeDash }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                transform="rotate(-90 64 64)"
              />
            </svg>
            <div className="result-ring-inner">
              <span className="result-pct" style={{ color: gradeColor }}>{pct}%</span>
              <span className="result-grade" style={{ color: gradeColor }}>{grade}</span>
            </div>
          </div>

          <div className="result-stat-col">
            <div className="result-stat result-stat--correct">
              <CheckCircle2 size={16} />
              <span className="result-stat-num">{correct}</span>
              <span className="result-stat-label">To'g'ri</span>
            </div>
            <div className="result-stat result-stat--wrong">
              <XCircle size={16} />
              <span className="result-stat-num">{wrong}</span>
              <span className="result-stat-label">Noto'g'ri</span>
            </div>
            <div className="result-stat result-stat--skip">
              <span className="result-stat-dash">—</span>
              <span className="result-stat-num">{skipped}</span>
              <span className="result-stat-label">O'tkazilgan</span>
            </div>
            <div className="result-grade-label" style={{ color: gradeColor }}>
              {gradeLabel}
            </div>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="result-cats">
          <h2 className="result-cats-title">Kategoriya bo'yicha</h2>
          <div className="result-cat-list">
            {Object.entries(catStats).map(([cat, stat], i) => {
              const catPct = Math.round((stat.correct / stat.total) * 100);
              const catColor = catPct >= 80 ? "#059669" : catPct >= 50 ? "#b45309" : "#dc2626";
              return (
                <motion.div
                  key={cat}
                  className="result-cat-row"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.25, ease: "easeOut" }}
                >
                  <span className="result-cat-name">{cat}</span>
                  <div className="result-cat-bar-wrap">
                    <motion.div
                      className="result-cat-bar-fill"
                      style={{ background: catColor }}
                      initial={{ width: 0 }}
                      animate={{ width: `${catPct}%` }}
                      transition={{ delay: 0.4 + i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span className="result-cat-score" style={{ color: catColor }}>
                    {stat.correct}/{stat.total}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Wrong answers review */}
        {wrong > 0 && (
          <div className="result-review">
            <h2 className="result-review-title">Xato javoblar</h2>
            <div className="result-review-list">
              {questions.map((q, i) => {
                const userAns = answers[i];
                if (userAns === null || userAns === q.correct) return null;
                return (
                  <div key={q.id} className="result-review-item">
                    <div className="result-review-q">
                      <span className="result-review-num">{i + 1}.</span>
                      <span dangerouslySetInnerHTML={{ __html: q.question }} />
                    </div>
                    {q.code && (
                      <pre className="result-review-code"><code>{q.code}</code></pre>
                    )}
                    <div className="result-review-answers">
                      <div className="result-review-ans result-review-ans--wrong">
                        <XCircle size={13} />
                        Sizning javob: <strong dangerouslySetInnerHTML={{ __html: q.options[userAns] }} />
                      </div>
                      <div className="result-review-ans result-review-ans--correct">
                        <CheckCircle2 size={13} />
                        To'g'ri javob: <strong dangerouslySetInnerHTML={{ __html: q.options[q.correct] }} />
                      </div>
                    </div>
                    <p className="result-review-exp" dangerouslySetInnerHTML={{ __html: q.explanation }} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="result-actions">
          <button
            onClick={() => window.location.reload()}
            className="result-btn result-btn--secondary"
          >
            <RotateCcw size={15} />
            Qayta urinish
          </button>
          <Link href="/kurs/html" className="result-btn result-btn--primary" style={{ background: courseColor }}>
            <BookOpen size={15} />
            Kursga qaytish
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
