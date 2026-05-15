"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from "lucide-react";
import type { QuizQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  questions: QuizQuestion[];
}

export default function Quiz({ questions }: Props) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = optIdx;
      return next;
    });
  };

  const handleSubmit = () => {
    if (answers.some((a) => a === null)) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
  };

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.correct).length
    : 0;

  return (
    <div
      className="rounded-xl border p-6 my-6"
      style={{ background: "var(--muted)", borderColor: "var(--border)" }}
    >
      <div className="flex items-center gap-2 mb-5">
        <HelpCircle size={18} style={{ color: "var(--primary)" }} />
        <h3 className="font-bold text-base" style={{ color: "var(--foreground)" }}>
          Bilimni tekshiring
        </h3>
      </div>

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const selected = answers[qIdx];
          const isCorrect = submitted && selected === q.correct;
          const isWrong = submitted && selected !== null && selected !== q.correct;

          return (
            <div key={qIdx}>
              <p
                className="font-medium mb-3 text-sm"
                style={{ color: "var(--foreground)" }}
                dangerouslySetInnerHTML={{ __html: `${qIdx + 1}. ${q.question}` }}
              />
              <div className="space-y-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selected === optIdx;
                  const isCorrectOpt = submitted && optIdx === q.correct;
                  const isWrongSel = submitted && isSelected && !isCorrect;

                  return (
                    <motion.button
                      key={optIdx}
                      whileTap={{ scale: submitted ? 1 : 0.99 }}
                      onClick={() => handleSelect(qIdx, optIdx)}
                      className={cn(
                        "w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all",
                        !submitted && isSelected && "border-[var(--primary)]",
                        !submitted && !isSelected && "hover:border-[var(--primary)] hover:bg-[var(--accent)]",
                        isCorrectOpt && "border-[var(--success)] bg-[var(--success-light)]",
                        isWrongSel && "border-[var(--danger)] bg-[var(--danger-light)]"
                      )}
                      style={{
                        borderColor:
                          isCorrectOpt
                            ? "var(--success)"
                            : isWrongSel
                            ? "var(--danger)"
                            : isSelected && !submitted
                            ? "var(--primary)"
                            : "var(--border)",
                        color: "var(--foreground)",
                        background:
                          isCorrectOpt
                            ? "var(--success-light)"
                            : isWrongSel
                            ? "var(--danger-light)"
                            : isSelected && !submitted
                            ? "var(--accent)"
                            : "var(--card)",
                      }}
                    >
                      <span className="flex items-center gap-2">
                        {isCorrectOpt && <CheckCircle2 size={15} style={{ color: "var(--success)", flexShrink: 0 }} />}
                        {isWrongSel && <XCircle size={15} style={{ color: "var(--danger)", flexShrink: 0 }} />}
                        <span dangerouslySetInnerHTML={{ __html: opt }} />
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence>
                {isWrong && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm px-3 py-2 rounded-lg"
                    style={{
                      background: "var(--warning-light)",
                      color: "var(--warning)",
                      border: "1px solid var(--warning)",
                    }}
                  >
                    💡 <span dangerouslySetInnerHTML={{ __html: q.explanation }} />
                  </motion.div>
                )}
                {isCorrect && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm px-3 py-2 rounded-lg"
                    style={{
                      background: "var(--success-light)",
                      color: "var(--success)",
                      border: "1px solid var(--success)",
                    }}
                  >
                    ✅ To'g'ri! <span dangerouslySetInnerHTML={{ __html: q.explanation }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-3">
        {!submitted ? (
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleSubmit}
            disabled={answers.some((a) => a === null)}
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-40"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            Javoblarni tekshirish
          </motion.button>
        ) : (
          <>
            <div
              className="px-4 py-2 rounded-lg text-sm font-semibold"
              style={{
                background: score === questions.length ? "var(--success-light)" : "var(--warning-light)",
                color: score === questions.length ? "var(--success)" : "var(--warning)",
              }}
            >
              {score}/{questions.length} to'g'ri
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                background: "var(--muted)",
                color: "var(--muted-foreground)",
                border: "1px solid var(--border)",
              }}
            >
              <RotateCcw size={14} />
              Qayta urinish
            </button>
          </>
        )}
      </div>
    </div>
  );
}
