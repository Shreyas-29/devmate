import { create } from 'zustand';

type ActiveTestCaseIdState = {
    activeTestCaseId: number;
    setActiveTestCaseId: (id: number) => void;
};

export const useActiveTestCaseIdStore = create<ActiveTestCaseIdState>((set) => ({
    activeTestCaseId: 0,
    setActiveTestCaseId: (id: number) => set({ activeTestCaseId: id }),
}));
