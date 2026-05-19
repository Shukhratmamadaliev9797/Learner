import TestPage from "@/components/test/TestPage";
import { htmlTestQuestions } from "@/data/html-test";

export const metadata = {
  title: "HTML Test — Learner.uz",
  description: "HTML bilimlaringizni 100 savol bilan sinab ko'ring.",
};

export default function HtmlTestPage() {
  return (
    <TestPage
      questions={htmlTestQuestions}
      title="HTML"
      courseColor="#e34c26"
    />
  );
}
