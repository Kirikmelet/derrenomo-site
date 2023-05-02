import {
  defaultLanguage,
  supportedLanguageKey,
  supportedLanguages,
} from "../i18n/translations";
import { getLangFromUrl } from "../i18n/utils";
import type { collections } from "./config";

export function generateBlogUrl(
  slug: string,
  collection: keyof typeof collections,
  baseUrl: URL
): URL {
  const [lang, ...path] = slug.split("/");
  return new URL(
    `${lang}/${collection}/${joinBlogSlug(path) || ""}`,
    new URL(import.meta.env.BASE_URL, baseUrl)
  );
}

export function joinBlogSlug(slug: string[]): string | undefined {
  return slug.join("/");
}

export function getBlogLang(slug: string): supportedLanguageKey {
  const [lang] = slug.split("/");
  if (lang in supportedLanguages) return lang as supportedLanguageKey;
  return defaultLanguage;
}
