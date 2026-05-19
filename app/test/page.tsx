import Link from "next/link";

export const metadata = {
  title: "Testlar — Learner.uz",
  description: "HTML, CSS va JavaScript bilimlaringizni sinab ko'ring.",
};

const TESTS = [
  {
    slug: "html",
    title: "HTML",
    icon: "🌐",
    color: "#e34c26",
    bg: "rgba(227,76,38,0.08)",
    count: 100,
    description: "Tuzilish, elementlar, semantika, formalar va boshqalar",
  },
  {
    slug: "css",
    title: "CSS",
    icon: "🎨",
    color: "#2965f1",
    bg: "rgba(41,101,241,0.08)",
    count: 100,
    description: "Selektorlar, Box Model, Flexbox, Grid, animatsiya va boshqalar",
  },
  {
    slug: "js",
    title: "JavaScript",
    icon: "⚡",
    color: "#f7df1e",
    bg: "rgba(247,223,30,0.08)",
    count: 200,
    description: "O'zgaruvchilar, funksiyalar, DOM, async/await, OOP va boshqalar",
  },
];

export default function TestIndexPage() {
  return (
    <div className="test-index-root">
      <div className="test-index-inner">
        <h1 className="test-index-title">Testlar</h1>
        <p className="test-index-sub">Bilimlaringizni savollar bilan sinab ko&apos;ring</p>
        <div className="test-index-grid">
          {TESTS.map((t) => (
            <Link
              key={t.slug}
              href={`/test/${t.slug}`}
              className="test-index-card"
              style={{ "--tc": t.color, "--tbg": t.bg } as React.CSSProperties}
            >
              <span className="test-index-icon">{t.icon}</span>
              <div className="test-index-info">
                <span className="test-index-name">{t.title}</span>
                <span className="test-index-desc">{t.description}</span>
              </div>
              <span className="test-index-count">{t.count} savol</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
