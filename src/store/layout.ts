import { create } from "zustand";

interface LayoutStore {
    layoutPosition: number;
    resetLayoutPosition: () => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
    layoutPosition: 50,
    resetLayoutPosition: () => set({ layoutPosition: 50 }),
}));