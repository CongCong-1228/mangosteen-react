import { create } from "zustand";

interface LocalStore {
  hasReadWelcomes: boolean;
  setHasReadWelcomes: (hasReadWelcome: boolean) => void;
}

export const useLocalStore = create<LocalStore>((set) => ({
  hasReadWelcomes: localStorage.getItem("hasReadWelcomes") === "yes",
  setHasReadWelcomes: (hasReadWelcomes: boolean) => {
    const result = hasReadWelcomes ? "yes" : "no";
    localStorage.setItem("hasReadWelcomes", result);
    set({ hasReadWelcomes: result === "yes" });
  },
}));
