"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getLessonBySlug, getAdjacentLessons } from "@/data/courses";
import { useCourse } from "@/lib/course-context";
import LessonContent from "@/components/lesson/LessonContent";

interface Props {
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}

export default function LessonPage({ params }: Props) {
  const { courseSlug, lessonSlug } = use(params);
  const lesson = getLessonBySlug(courseSlug, lessonSlug);
  const { completedLessons, toggleComplete } = useCourse();

  if (!lesson) notFound();

  const { prev, next } = getAdjacentLessons(courseSlug, lessonSlug);
  const isCompleted = completedLessons.includes(lessonSlug);

  return (
    <LessonContent
      lesson={lesson}
      courseSlug={courseSlug}
      prevLesson={prev}
      nextLesson={next}
      isCompleted={isCompleted}
      onToggleComplete={() => toggleComplete(lessonSlug)}
    />
  );
}
