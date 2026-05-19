import type { Course } from "@/lib/types";
import { cssPart1Groups } from "./css-lessons-part1";
import { cssPart2Groups } from "./css-lessons-part2";
import { cssPart3Groups } from "./css-lessons-part3";
import { cssPart4Groups } from "./css-lessons-part4";
import { cssPart5Groups } from "./css-lessons-part5";
import { cssPart6Groups } from "./css-lessons-part6";
import { cssPart7Groups } from "./css-lessons-part7";
import { cssPropsGroup } from "./css-props";

export const cssCourse: Course = {
  id: "css",
  slug: "css",
  title: "CSS",
  description: "Veb-sahifalarni stillash sanati — beginner dan professional darajaga",
  color: "#264de4",
  icon: "🎨",
  available: true,
  groups: [
    ...cssPart1Groups,
    ...cssPart2Groups,
    ...cssPart3Groups,
    ...cssPart4Groups,
    ...cssPart5Groups,
    ...cssPart6Groups,
    ...cssPart7Groups,
    cssPropsGroup,
  ],
};
