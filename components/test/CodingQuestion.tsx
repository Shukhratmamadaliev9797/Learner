"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Columns2, Rows2 } from "lucide-react";
import type { TestQuestion } from "@/data/html-test";

interface Props {
  question: TestQuestion;
  onAnswer: (pass: boolean, result: { pass: boolean; message: string }) => void;
  answered: boolean | null;
  courseColor: string;
  code: string;
  onCodeChange: (val: string) => void;
  submittedResult: { pass: boolean; message: string } | null;
}

function runCheck(code: string, checkCode: string): { pass: boolean; message: string } {
  try {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    const doc = iframe.contentDocument!;
    doc.open();
    doc.write(code);
    doc.close();
    const checkFn = new Function(
      "document",
      `"use strict"; try { ${checkCode} } catch(e) { return { pass: false, message: e.message }; }`
    );
    const result = checkFn(doc);
    document.body.removeChild(iframe);
    return result || { pass: false, message: "Natija aniqlanmadi" };
  } catch (e) {
    return { pass: false, message: String(e) };
  }
}

export default function CodingQuestion({ question, onAnswer, answered, courseColor, code, onCodeChange, submittedResult }: Props) {
  const [preview, setPreview] = useState(code);
  const [layout, setLayout] = useState<"split" | "stack">("split");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setPreview(code), 500);
    return () => clearTimeout(t);
  }, [code]);

  useEffect(() => {
    if (submittedResult && !submittedResult.pass && solutionRef.current) {
      setTimeout(() => {
        solutionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 280);
    }
  }, [submittedResult]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = e.currentTarget;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const next = code.substring(0, start) + "  " + code.substring(end);
      onCodeChange(next);
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 2;
      });
    }
  };

  const handleSubmit = () => {
    if (!question.checkCode || submittedResult !== null) return;
    const res = runCheck(code, question.checkCode);
    onAnswer(res.pass, res);
  };

  const handleReset = () => {
    onCodeChange(question.starterCode ?? "");
  };

  const isCorrect = submittedResult?.pass === true;
  const isWrong = submittedResult !== null && !submittedResult.pass;
  const isSubmitted = submittedResult !== null;

  return (
    <div ref={wrapperRef}>
      {/* Editor box */}
      <div className="coding-q-root">
        {/* Toolbar */}
        <div className="coding-q-toolbar">
          <div className="coding-q-toolbar-left">
            <span className="coding-q-dot coding-q-dot--red" />
            <span className="coding-q-dot coding-q-dot--yellow" />
            <span className="coding-q-dot coding-q-dot--green" />
            <span className="coding-q-toolbar-label">HTML muharrir</span>
          </div>
          <div className="coding-q-toolbar-right">
            <button
              className="coding-q-tool-btn"
              onClick={() => setLayout(l => l === "split" ? "stack" : "split")}
              title="Ko'rinishni o'zgartirish"
            >
              {layout === "split" ? <Rows2 size={13} /> : <Columns2 size={13} />}
            </button>
            {!isSubmitted && (
              <button className="coding-q-tool-btn" onClick={handleReset} title="Boshlang'ichga qaytarish">
                <RotateCcw size={13} />
                Tiklash
              </button>
            )}
          </div>
        </div>

        {/* Editor + Preview */}
        <div className={`coding-q-panels ${layout === "stack" ? "coding-q-panels--stack" : "coding-q-panels--split"}`}>
          <div className="coding-q-editor-pane">
            <div className="coding-q-pane-header"><span>index.html</span></div>
            <textarea
              ref={textareaRef}
              value={code}
              onChange={e => { if (!isSubmitted) onCodeChange(e.target.value); }}
              onKeyDown={handleKeyDown}
              className={`coding-q-textarea ${isSubmitted ? "coding-q-textarea--locked" : ""}`}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              readOnly={isSubmitted}
            />
          </div>
          <div className="coding-q-preview-pane">
            <div className="coding-q-pane-header coding-q-pane-header--light"><span>Natija</span></div>
            <iframe srcDoc={preview} sandbox="allow-scripts" className="coding-q-iframe" title="HTML natijasi" />
          </div>
        </div>

        {/* Footer */}
        <div className="coding-q-footer">
          <AnimatePresence mode="wait">
            {submittedResult && (
              <motion.div
                key="status"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className={`coding-q-result ${isCorrect ? "coding-q-result--correct" : "coding-q-result--wrong"}`}
              >
                {isCorrect
                  ? <CheckCircle2 size={15} style={{ flexShrink: 0 }} />
                  : <XCircle size={15} style={{ flexShrink: 0 }} />}
                <span>{isCorrect ? "To'g'ri! Ajoyib!" : submittedResult!.message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            className="coding-q-check-btn"
            style={{
              background: isCorrect ? "#16a34a" : isWrong ? "#dc2626" : courseColor,
            }}
            onClick={handleSubmit}
            disabled={isSubmitted}
          >
            {isCorrect ? (
              <><CheckCircle2 size={15} /> Bajarildi!</>
            ) : isWrong ? (
              <><XCircle size={15} /> Xato</>
            ) : (
              "Tekshirish"
            )}
          </button>
        </div>
      </div>

      {/* Solution reveal — OUTSIDE coding-q-root so overflow:hidden doesn't clip it */}
      <AnimatePresence>
        {isWrong && question.solution && (
          <motion.div
            ref={solutionRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
            className="coding-q-solution-reveal"
          >
            <div className="coding-q-solution-label">
              <XCircle size={14} />
              To'g'ri yechim:
            </div>
            <pre className="coding-q-solution-code">{question.solution}</pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
