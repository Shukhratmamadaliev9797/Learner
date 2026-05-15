import { redirect } from "next/navigation";
import { getCourseBySlug, getAllLessons } from "@/data/courses";

interface Props {
  params: Promise<{ courseSlug: string }>;
}

export default async function CoursePage({ params }: Props) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);

  if (!course || !course.available) {
    redirect(`/tez-orada/${courseSlug}`);
  }

  const lessons = getAllLessons(courseSlug);
  if (lessons.length > 0) {
    redirect(`/kurs/${courseSlug}/${lessons[0].slug}`);
  }

  return (
    <div className="p-8 text-center">
      <h1 style={{ color: "var(--foreground)" }}>Darslar topilmadi</h1>
    </div>
  );
}
