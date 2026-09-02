import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeId = "lab" | "paper" | "crystal" | "desk";

export const themes: { id: ThemeId; ru: string; en: string }[] = [
  { id: "lab", ru: "Лаб", en: "Lab" },
  { id: "paper", ru: "Бумага", en: "Paper" },
  { id: "crystal", ru: "Кристалл", en: "Crystal" },
  { id: "desk", ru: "Стол", en: "Desk" },
];

type ThemeState = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
};

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "lab",
      setTheme: (theme) => set({ theme }),
    }),
    { name: "velantrim-atlas-theme" },
  ),
);
