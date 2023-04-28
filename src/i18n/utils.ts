import { defaultLanguage, supportedLanguages } from "./translations";

export interface TranslationDict {
  [lang: string]: {
    [key: string]: string;
  };
}

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  if (lang in supportedLanguages) return lang;
  return defaultLanguage;
}

export function changeLangRedirect(url: URL, lang: string): URL {
  let newUrl: URL = new URL(url);
  newUrl.pathname = url.pathname.replace(`/${getLangFromUrl(url)}`, `/${lang}`);
  return newUrl;
}

export function useTranslationDict(
  dict: TranslationDict,
  lang: string
): (key: string) => string {
  return function (key: string) {
    return (
      dict[lang][key] || dict[defaultLanguage][key] || `Unknown key: ${key}`
    );
  };
}
