import {
  defaultLanguage,
  supportedLanguageKey,
  supportedLanguages,
} from "./translations";

export type TranslationDict = Record<
  supportedLanguageKey,
  Record<string, string>
>;

export function getLangFromUrl(url: URL): supportedLanguageKey {
  const params = url.pathname.split("/");
  return (
    (params.filter(
      (f) => f in supportedLanguages
    )[0] as supportedLanguageKey) ?? defaultLanguage
  );
}

export function changeLangRedirect(url: URL, lang: supportedLanguageKey): URL {
  const oldLang = getLangFromUrl(url);
  return new URL(url.pathname.replace(`/${oldLang}`, `/${lang}`), url);
}

export function useTranslationDict(
  dict: TranslationDict,
  lang: supportedLanguageKey
): (key: keyof (typeof dict)[typeof defaultLanguage]) => string {
  return (key: keyof (typeof dict)[typeof defaultLanguage]) =>
    dict[lang][key] || dict[defaultLanguage][key] || `Unknown key: ${key}`;
}
