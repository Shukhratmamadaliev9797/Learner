import type { LessonGroup } from "@/lib/types";
import { cssLayoutProps } from "./css-props-layout";
import { cssTypographyProps } from "./css-props-typography";
import { cssVisualProps } from "./css-props-visual";
import { cssMiscProps } from "./css-props-misc";

export const cssPropsGroup: LessonGroup = {
  title: "CSS Xususiyatlari Ro'yxati",
  lessons: [
    ...cssLayoutProps,
    ...cssTypographyProps,
    ...cssVisualProps,
    ...cssMiscProps,
  ],
};
