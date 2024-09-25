import { create } from "zustand";

interface IMenuStore {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const useMenuStore = create<IMenuStore>((set) => ({
  visible: false,
  setVisible: (visible) => set({ visible }),
}));
