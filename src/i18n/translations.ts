interface SupportedLanguages {
  [key: string]: string;
}

export type supportedLanguageKey = "en" | "id" | "ja" | "zh" | "it";

export const supportedLanguages: Record<supportedLanguageKey, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  ja: "日本語",
  zh: "普通话",
  it: "Italiano",
} as const;

export const defaultLanguage: supportedLanguageKey = "en" as const;
