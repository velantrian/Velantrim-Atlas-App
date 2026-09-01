import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = "ru" | "en";
export type Copy = { ru: string; en: string };

type I18nState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const useI18n = create<I18nState>()(
  persist(
    (set) => ({
      lang: "ru",
      setLang: (lang) => set({ lang }),
    }),
    { name: "velantrim-atlas-lang" },
  ),
);

export function t(copy: Copy, lang: Lang): string {
  return copy[lang];
}
