import { create } from 'zustand';

type ResultStoreState = {
    result: string | any;
    setResult: (result: string | any) => void;
};

export const useResultStore = create<ResultStoreState>((set) => ({
    result: '',
    setResult: (result) => set({ result }),
}));
