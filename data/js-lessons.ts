import type { Course } from "@/lib/types";
import { jsPart1Groups } from "./js-lessons-part1";
import { jsPart2Groups } from "./js-lessons-part2";
import { jsPart3Groups } from "./js-lessons-part3";
import { jsPart4Groups } from "./js-lessons-part4";
import { jsPart5Groups } from "./js-lessons-part5";
import { jsPart6Groups } from "./js-lessons-part6";
import { jsPart7Groups } from "./js-lessons-part7";

export const jsCourse: Course = {
  id: "javascript",
  slug: "javascript",
  title: "JavaScript",
  description: "0 dan professional darajaga — zamonaviy JS to'liq kursi",
  color: "#f7df1e",
  icon: "⚡",
  available: true,
  groups: [
    ...jsPart1Groups,
    ...jsPart2Groups,
    ...jsPart3Groups,
    ...jsPart4Groups,
    ...jsPart5Groups,
    ...jsPart6Groups,
    ...jsPart7Groups,
  ],
};
