"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Zap, Trophy } from "lucide-react";
import { courses } from "@/data/courses";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4 },
  }),
};

export default function HomePage() {
  return (
    <main className="flex-1 overflow-y-auto">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "var(--primary)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: "#8b5cf6" }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{ background: "var(--accent)", color: "var(--primary)", borderColor: "var(--primary)" }}
            >
              🇺🇿 O&apos;zbek tilida bepul ta&apos;lim
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6" style={{ color: "var(--foreground)" }}>
              Dasturlashni<br />
              <span style={{ color: "var(--primary)" }}>o&apos;zbek tilida</span><br />
              o&apos;rganing
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--muted-foreground)" }}>
              HTML, CSS, JavaScript va boshqa texnologiyalarni interaktiv darslar, jonli kod muharriri va quizlar orqali o&apos;rganing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/kurs/html/kirish"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                Hoziroq boshlash
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/kurs/html"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all hover:border-[var(--primary)] hover:text-[var(--primary)]"
                style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
              >
                <BookOpen size={16} />
                Kurs haqida
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 border-y" style={{ borderColor: "var(--border)", background: "var(--muted)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <Code2 size={20} />, title: "Jonli muharrir", desc: "Kodni yozing va natijani darhol ko'ring" },
            { icon: <Zap size={20} />, title: "Interaktiv quizlar", desc: "Har bir dars oxirida bilimni tekshiring" },
            { icon: <Trophy size={20} />, title: "Taraqqiyot", desc: "Bajarilgan darslarni kuzating" },
          ].map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-start gap-3 p-4 rounded-xl border"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="p-2 rounded-lg shrink-0" style={{ background: "var(--accent)", color: "var(--primary)" }}>
                {f.icon}
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{f.title}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{f.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses grid */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Mavjud kurslar</h2>
            <p style={{ color: "var(--muted-foreground)" }}>Professional darajadagi kurslar, o&apos;zbek tilida</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
              >
                <Link
                  href={course.available ? `/kurs/${course.slug}` : `/tez-orada/${course.slug}`}
                  className="block p-5 rounded-xl border transition-all hover:shadow-lg group"
                  style={{ background: "var(--card)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{course.icon}</span>
                    {course.available ? (
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "var(--success-light)", color: "var(--success)" }}>Mavjud</span>
                    ) : (
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "var(--muted)", color: "var(--muted-foreground)" }}>Tez orada</span>
                    )}
                  </div>
                  <h3 className="font-bold text-base mb-1 group-hover:text-[var(--primary)] transition-colors" style={{ color: "var(--foreground)" }}>{course.title}</h3>
                  <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>{course.description}</p>
                  {course.available && (
                    <div className="flex items-center gap-1 mt-3 text-xs font-medium" style={{ color: "var(--primary)" }}>
                      O&apos;rganish <ArrowRight size={12} />
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
