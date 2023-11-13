import { Cursor } from '@/types/cursor';
import { create } from 'zustand';

type CursorBlinkingStore = {
    cursor: Cursor;
    setCursor: (cursor: string) => void;
};

export const cursorBlinkingStore = create<CursorBlinkingStore>((set) => ({
    cursor: "expand",
    setCursor: (cursor: string | undefined) => set({ cursor: cursor as Cursor }),
}));
