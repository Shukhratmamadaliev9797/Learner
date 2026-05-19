"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Clock, ChevronRight, ChevronLeft, Flag } from "lucide-react";
import type { TestQuestion } from "@/data/html-test";
import TestResult from "./TestResult";

interface TestPageProps {
  questions: TestQuestion[];
  title: string;
  courseColor: string;
}

const TOTAL_TIME = 45 * 60; // 45 minutes in seconds

export default function TestPage({ questions, title, courseColor }: TestPageProps) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [finished, setFinished] = useState(false);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());

  const q = questions[current];

  const finish = useCallback(() => {
    setFinished(true);
  }, []);

  useEffect(() => {
    if (finished) return;
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(id); finish(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [finished, finish]);

  // Sync selected when navigating
  useEffect(() => {
    setSelected(answers[current]);
    setRevealed(answers[current] !== null);
  }, [current, answers]);

  const choose = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = idx;
      return next;
    });
  };

  const goNext = () => {
    if (current < questions.length - 1) setCurrent((c) => c + 1);
    else finish();
  };

  const goPrev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const toggleFlag = () => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(current)) next.delete(current);
      else next.add(current);
      return next;
    });
  };

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");
  const isLow = timeLeft < 120;

  const answeredCount = answers.filter((a) => a !== null).length;
  const progressPct = ((current + 1) / questions.length) * 100;

  if (finished) {
    return <TestResult questions={questions} answers={answers} courseColor={courseColor} title={title} />;
  }

  return (
    <div className="test-root">
      {/* Header bar */}
      <div className="test-header">
        <div className="test-header-left">
          <span className="test-course-badge" style={{ background: courseColor + "22", color: courseColor }}>
            {title}
          </span>
          <span className="test-progress-text">
            {current + 1} / {questions.length}
          </span>
        </div>

        <div className="test-header-center">
          <div className="test-progress-bar">
            <motion.div
              className="test-progress-fill"
              style={{ background: courseColor }}
              animate={{ width: `${progressPct}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <span className="test-answered-count">
            {answeredCount} ta javoblandi
          </span>
        </div>

        <div className="test-header-right">
          <div className={`test-timer ${isLow ? "test-timer--low" : ""}`}>
            <Clock size={14} />
            <span>{mm}:{ss}</span>
          </div>
          <button
            onClick={finish}
            className="test-finish-btn"
          >
            Tugatish
          </button>
        </div>
      </div>

      {/* Question area */}
      <div className="test-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="test-question-card"
          >
            {/* Question meta */}
            <div className="test-q-meta">
              <span className={`test-type-badge test-type-badge--${q.type}`}>
                {q.type === "nazariy" ? "Nazariy" : "Amaliy"}
              </span>
              <span className="test-category">{q.category}</span>
              <button
                onClick={toggleFlag}
                className={`test-flag-btn ${flagged.has(current) ? "test-flag-btn--active" : ""}`}
                aria-label="Belgilash"
              >
                <Flag size={14} />
              </button>
            </div>

            {/* Question text */}
            <h2 className="test-q-text" dangerouslySetInnerHTML={{ __html: q.question }} />

            {/* Code block */}
            {q.code && (
              <div className="test-code-block">
                <div className="test-code-dots" aria-hidden>
                  <span /><span /><span />
                </div>
                <pre className="test-code-pre"><code>{q.code}</code></pre>
              </div>
            )}

            {/* Options */}
            <div className="test-options">
              {q.options.map((opt, i) => {
                const isCorrect = i === q.correct;
                const isSelected = i === selected;
                let state: "default" | "correct" | "wrong" | "missed" = "default";
                if (revealed) {
                  if (isCorrect) state = "correct";
                  else if (isSelected && !isCorrect) state = "wrong";
                }

                return (
                  <motion.button
                    key={i}
                    onClick={() => choose(i)}
                    className={`test-option test-option--${state}`}
                    whileHover={!revealed ? { scale: 1.005 } : {}}
                    whileTap={!revealed ? { scale: 0.998 } : {}}
                    disabled={revealed}
                  >
                    <span className="test-option-letter">
                      {["A", "B", "C", "D"][i]}
                    </span>
                    <span className="test-option-text" dangerouslySetInnerHTML={{ __html: opt }} />
                    {revealed && state === "correct" && (
                      <CheckCircle2 size={18} className="test-option-icon test-option-icon--correct" />
                    )}
                    {revealed && state === "wrong" && (
                      <XCircle size={18} className="test-option-icon test-option-icon--wrong" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {revealed && (
                <motion.div
                  initial={{ opacity: 0, y: 8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 8, height: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={`test-explanation test-explanation--${selected === q.correct ? "correct" : "wrong"}`}
                >
                  <strong>{selected === q.correct ? "To'g'ri!" : "Noto'g'ri."}</strong>{" "}
                  <span dangerouslySetInnerHTML={{ __html: q.explanation }} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer nav */}
      <div className="test-footer">
        {/* Question dots — mini map */}
        <div className="test-dot-map">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`test-dot
                ${i === current ? "test-dot--current" : ""}
                ${answers[i] !== null && answers[i] === questions[i].correct ? "test-dot--correct" : ""}
                ${answers[i] !== null && answers[i] !== questions[i].correct ? "test-dot--wrong" : ""}
                ${flagged.has(i) ? "test-dot--flagged" : ""}
              `}
              style={i === current ? { background: courseColor } : {}}
              aria-label={`Savol ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="test-nav-btns">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="test-nav-btn test-nav-btn--prev"
          >
            <ChevronLeft size={16} />
            Oldingi
          </button>
          <button
            onClick={goNext}
            className="test-nav-btn test-nav-btn--next"
            style={{ background: courseColor }}
          >
            {current === questions.length - 1 ? "Yakunlash" : "Keyingi"}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
