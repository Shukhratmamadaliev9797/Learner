import type { Course } from "@/lib/types";
import { htmlCourse } from "./html-lessons";

export const courses: Course[] = [
  htmlCourse,
  {
    id: "css",
    slug: "css",
    title: "CSS",
    description: "Veb-sahifalarni stillash sanati",
    color: "#264de4",
    icon: "🎨",
    available: false,
    groups: [],
  },
  {
    id: "javascript",
    slug: "javascript",
    title: "JavaScript",
    description: "Veb-sahifalarni interaktiv qilish",
    color: "#f7df1e",
    icon: "⚡",
    available: false,
    groups: [],
  },
  {
    id: "typescript",
    slug: "typescript",
    title: "TypeScript",
    description: "JavaScript ning typed versiyasi",
    color: "#3178c6",
    icon: "🔷",
    available: false,
    groups: [],
  },
  {
    id: "react",
    slug: "react",
    title: "React",
    description: "Zamonaviy UI kutubxonasi",
    color: "#61dafb",
    icon: "⚛️",
    available: false,
    groups: [],
  },
  {
    id: "nextjs",
    slug: "nextjs",
    title: "Next.js",
    description: "React asosidagi full-stack framework",
    color: "#000000",
    icon: "▲",
    available: false,
    groups: [],
  },
  {
    id: "nodejs",
    slug: "nodejs",
    title: "Node.js",
    description: "Server-side JavaScript",
    color: "#339933",
    icon: "🟢",
    available: false,
    groups: [],
  },
  {
    id: "git",
    slug: "git",
    title: "Git",
    description: "Versiyalarni boshqarish tizimi",
    color: "#f05032",
    icon: "🌿",
    available: false,
    groups: [],
  },
  {
    id: "sql",
    slug: "sql",
    title: "SQL",
    description: "Ma'lumotlar bazasi tili",
    color: "#336791",
    icon: "🗄️",
    available: false,
    groups: [],
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getLessonBySlug(courseSlug: string, lessonSlug: string) {
  const course = getCourseBySlug(courseSlug);
  if (!course) return null;
  for (const group of course.groups) {
    const lesson = group.lessons.find((l) => l.slug === lessonSlug);
    if (lesson) return lesson;
  }
  return null;
}

export function getAllLessons(courseSlug: string) {
  const course = getCourseBySlug(courseSlug);
  if (!course) return [];
  return course.groups.flatMap((g) => g.lessons);
}

export function getAdjacentLessons(courseSlug: string, lessonSlug: string) {
  const all = getAllLessons(courseSlug);
  const idx = all.findIndex((l) => l.slug === lessonSlug);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
