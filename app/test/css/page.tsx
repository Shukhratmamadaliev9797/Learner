import TestPage from "@/components/test/TestPage";
import { cssTestQuestions } from "@/data/css-test";

export const metadata = {
  title: "CSS Test — Learner.uz",
  description: "CSS bilimlaringizni 100 savol bilan sinab ko'ring.",
};

export default function CssTestPage() {
  return (
    <TestPage
      questions={cssTestQuestions}
      title="CSS"
      courseColor="#2965f1"
    />
  );
}
