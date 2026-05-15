"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface CourseContextType {
  completedLessons: string[];
  toggleComplete: (slug: string) => void;
}

const CourseContext = createContext<CourseContextType>({
  completedLessons: [],
  toggleComplete: () => {},
});

export function CourseProvider({
  courseSlug,
  children,
}: {
  courseSlug: string;
  children: React.ReactNode;
}) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(`completed-${courseSlug}`);
    if (stored) setCompletedLessons(JSON.parse(stored));
  }, [courseSlug]);

  const toggleComplete = (slug: string) => {
    setCompletedLessons((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      localStorage.setItem(`completed-${courseSlug}`, JSON.stringify(next));
      return next;
    });
  };

  return (
    <CourseContext.Provider value={{ completedLessons, toggleComplete }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  return useContext(CourseContext);
}
