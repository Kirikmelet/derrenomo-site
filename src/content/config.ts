import { z, defineCollection } from "astro:content";
import type { supportedLanguageKey } from "../i18n/translations";

const newsSection = z.enum([
  "national",
  "international",
  "political",
  "science",
  "health",
  "business",
]);

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    draft: z.boolean(),
    description: z.string().default("I am an article"),
    topics: z.array(z.string()),
  }),
});

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean(),
    author: z.string(),
    sections: newsSection.default("national"),
  }),
});

export const collections = { articles };
