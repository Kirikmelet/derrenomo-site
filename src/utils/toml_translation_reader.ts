import { parse } from "smol-toml";
import type { TomlPrimitive } from "smol-toml/dist/util";
import type { supportedLanguageKey } from "../i18n/translations";

export function parseTranslationFile(fileContents: String): Record<string, TomlPrimitive> {
  return parse(fileContents.toString());
}

export async function readTranslationFile(fileUrl: URL): Promise<String> {
  return await (await fetch(fileUrl)).text();
}

export function useTranslationDict(dict: Record<string, TomlPrimitive>, lang: supportedLanguageKey): (key: string) => string {
  return (key: string): string => {
    return dict[key][lang as keyof TomlPrimitive] || dict[key]["en" as keyof TomlPrimitive] || `[THIS NEEDS TO BE FIXED! ${key}]`;
  }
}
