import { Language } from "@/types/language";
import { create } from "zustand";

interface LanguageStore {
    language: Language;
    setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    language: "javascript",
    setLanguage: (language: string | undefined) => set({ language: language as Language }),
}));
