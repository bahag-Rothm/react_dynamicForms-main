import { create, SetState } from "zustand";

interface Page {
    currentPage: number;
    inc: () => void;
    dec: () => void;
}

export const useStore = create<Page>((set: SetState<Page>) => ({
    currentPage: 1,
    inc: () =>
        set((state) => ({
            ...state,
            currentPage: state.currentPage + 1,
        })),
    dec: () =>
        set((state) => ({
            ...state,
            currentPage: state.currentPage - 1,
        })),
}));
