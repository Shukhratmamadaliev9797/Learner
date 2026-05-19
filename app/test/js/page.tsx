import TestPage from "@/components/test/TestPage";
import { jsTestQuestions } from "@/data/js-test";

export const metadata = {
  title: "JavaScript Test — Learner.uz",
  description: "JavaScript bilimlaringizni 200 savol bilan sinab ko'ring.",
};

export default function JsTestPage() {
  return (
    <TestPage
      questions={jsTestQuestions}
      title="JavaScript"
      courseColor="#f7df1e"
    />
  );
}
