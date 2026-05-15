export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface LessonSection {
  id: string;
  title: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  description: string;
  sections: LessonSection[];
  content: string; // HTML string rendered as prose
  codeExample: {
    title: string;
    code: string;
    language: string;
  };
  liveEditorDefault: string;
  notes: string[];
  commonMistakes: string[];
  practiceTask: string;
  quiz: QuizQuestion[];
}

export interface LessonGroup {
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  available: boolean;
  groups: LessonGroup[];
}
