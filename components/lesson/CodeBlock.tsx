"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

interface Props {
  code: string;
  language?: string;
  title?: string;
}

// Token types for HTML syntax highlighting
type Token = { type: "comment" | "tag" | "attr" | "string" | "text"; value: string };

function tokenizeHTML(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < code.length) {
    // HTML comment
    if (code.startsWith("<!--", i)) {
      const end = code.indexOf("-->", i + 4);
      const val = end === -1 ? code.slice(i) : code.slice(i, end + 3);
      tokens.push({ type: "comment", value: val });
      i += val.length;
      continue;
    }

    // Tag open < or </
    if (code[i] === "<") {
      const end = code.indexOf(">", i);
      if (end === -1) {
        tokens.push({ type: "text", value: code.slice(i) });
        break;
      }
      const tagContent = code.slice(i, end + 1);
      // Tokenize inside the tag
      const innerTokens = tokenizeTagContent(tagContent);
      tokens.push(...innerTokens);
      i = end + 1;
      continue;
    }

    // Plain text — collect until next <
    const next = code.indexOf("<", i);
    const val = next === -1 ? code.slice(i) : code.slice(i, next);
    if (val) tokens.push({ type: "text", value: val });
    i = next === -1 ? code.length : next;
  }

  return tokens;
}

function tokenizeTagContent(tag: string): Token[] {
  // tag is like: <div class="foo"> or </div> or <br/>
  const tokens: Token[] = [];
  let i = 0;
  const len = tag.length;

  // Opening bracket
  tokens.push({ type: "tag", value: tag[0] }); // <
  i = 1;

  // Optional closing slash
  if (tag[i] === "/") {
    tokens.push({ type: "tag", value: "/" });
    i++;
  }

  // Tag name
  let name = "";
  while (i < len && /[\w\-\.]/.test(tag[i])) { name += tag[i++]; }
  if (name) tokens.push({ type: "tag", value: name });

  // Attributes
  while (i < len) {
    const ch = tag[i];

    // Closing > or />
    if (ch === ">" || (ch === "/" && tag[i + 1] === ">")) {
      tokens.push({ type: "tag", value: tag.slice(i) });
      break;
    }

    // Whitespace
    if (/\s/.test(ch)) {
      tokens.push({ type: "text", value: ch });
      i++;
      continue;
    }

    // Attribute name
    let attrName = "";
    while (i < len && /[^\s=>/]/.test(tag[i])) { attrName += tag[i++]; }
    if (attrName) tokens.push({ type: "attr", value: attrName });

    // = sign
    if (tag[i] === "=") {
      tokens.push({ type: "text", value: "=" });
      i++;

      // Quoted value
      const quote = tag[i];
      if (quote === '"' || quote === "'") {
        let val = quote;
        i++;
        while (i < len && tag[i] !== quote) { val += tag[i++]; }
        val += tag[i] ?? "";
        i++;
        tokens.push({ type: "string", value: val });
      }
    }
  }

  return tokens;
}

const TOKEN_COLORS: Record<Token["type"], string> = {
  comment: "#64748b",
  tag: "#f472b6",
  attr: "#38bdf8",
  string: "#86efac",
  text: "#e2e8f0",
};

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function syntaxHighlight(code: string): string {
  const tokens = tokenizeHTML(code);
  return tokens
    .map((t) => {
      const color = TOKEN_COLORS[t.type];
      const escaped = escape(t.value);
      if (t.type === "text") return escaped;
      const style = t.type === "comment" ? `color:${color};font-style:italic` : `color:${color}`;
      return `<span style="${style}">${escaped}</span>`;
    })
    .join("");
}

export default function CodeBlock({ code, language = "html", title }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="rounded-xl overflow-hidden border my-4"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2 text-xs font-medium"
        style={{ background: "#0f172a", color: "#94a3b8" }}
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
          {title && <span className="ml-2">{title}</span>}
        </div>
        <div className="flex items-center gap-3">
          <span className="uppercase opacity-60">{language}</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleCopy}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <Check size={13} />
                <span>Nusxalandi!</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Nusxa olish</span>
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Code */}
      <pre
        className="overflow-x-auto p-4 text-sm leading-relaxed"
        style={{ background: "#0f172a", color: "#e2e8f0" }}
      >
        <code
          dangerouslySetInnerHTML={{ __html: syntaxHighlight(code) }}
        />
      </pre>
    </div>
  );
}
