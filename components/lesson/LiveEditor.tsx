"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Copy, Check, Columns2, Rows2 } from "lucide-react";

interface Props {
  defaultCode: string;
}

export default function LiveEditor({ defaultCode }: Props) {
  const [code, setCode] = useState(defaultCode);
  const [preview, setPreview] = useState(defaultCode);
  const [layout, setLayout] = useState<"split" | "stack">("split");
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setPreview(code), 400);
    return () => clearTimeout(timer);
  }, [code]);

  const handleReset = () => setCode(defaultCode);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = e.currentTarget;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(newCode);
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 2;
      });
    }
  };

  return (
    <div
      className="rounded-xl border overflow-hidden my-6"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b text-xs font-medium"
        style={{
          background: "var(--muted)",
          borderColor: "var(--border)",
          color: "var(--muted-foreground)",
        }}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Jonli muharrir
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLayout(layout === "split" ? "stack" : "split")}
            className="p-1.5 rounded hover:bg-[var(--border)] transition-colors"
            title="Tartibni o'zgartirish"
          >
            {layout === "split" ? <Rows2 size={14} /> : <Columns2 size={14} />}
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-[var(--border)] transition-colors flex items-center gap-1"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Nusxalandi" : "Nusxa"}
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded hover:bg-[var(--border)] transition-colors flex items-center gap-1"
          >
            <RotateCcw size={14} />
            Tiklash
          </button>
        </div>
      </div>

      {/* Editor + Preview */}
      <div className={`flex ${layout === "stack" ? "flex-col" : "flex-row"}`} style={{ minHeight: 520 }}>
        {/* Editor pane */}
        <div
          className={`${layout === "stack" ? "w-full" : "w-1/2"} flex flex-col border-r`}
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="px-3 py-1 text-xs font-medium border-b"
            style={{
              background: "#0f172a",
              color: "#64748b",
              borderColor: "#1e293b",
            }}
          >
            HTML
          </div>
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            className="flex-1 resize-none p-4 text-sm leading-relaxed outline-none font-mono"
            style={{
              background: "#0f172a",
              color: "#e2e8f0",
              minHeight: layout === "stack" ? 380 : 480,
            }}
          />
        </div>

        {/* Preview pane */}
        <div className={`${layout === "stack" ? "w-full" : "w-1/2"} flex flex-col`}>
          <div
            className="px-3 py-1 text-xs font-medium border-b"
            style={{
              background: "var(--muted)",
              color: "var(--muted-foreground)",
              borderColor: "var(--border)",
            }}
          >
            Natija
          </div>
          <iframe
            srcDoc={preview}
            sandbox="allow-scripts"
            className="flex-1 w-full"
            style={{
              background: "#ffffff",
              minHeight: layout === "stack" ? 380 : 480,
            }}
            title="HTML natijasi"
          />
        </div>
      </div>
    </div>
  );
}
