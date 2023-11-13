import { create } from "zustand";

interface FontSizeStore {
    fontSize: number;
    setFontSize: (fontSize: number) => void;
}

export const useFontSizeStore = create<FontSizeStore>((set) => ({
    fontSize: 14,
    setFontSize: (fontSize: number) => set({ fontSize }),
}));