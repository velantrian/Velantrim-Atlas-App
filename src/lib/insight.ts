import { create } from "zustand";

export type Insight = {
  title: string;
  body: string;
};

type InsightState = {
  current: Insight | null;
  show: (insight: Insight) => void;
  clear: () => void;
};

export const useInsight = create<InsightState>()((set) => ({
  current: null,
  show: (insight) => set({ current: insight }),
  clear: () => set({ current: null }),
}));
