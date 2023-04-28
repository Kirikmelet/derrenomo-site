interface SupportedLanguages {
  [key: string]: string;
}

export const supportedLanguages: SupportedLanguages = {
  en: "English",
  id: "Bahasa Indonesia",
  ja: "日本語",
  zh: "普通话",
  it: "Italiano",
} as const;

export const defaultLanguage = "en";
