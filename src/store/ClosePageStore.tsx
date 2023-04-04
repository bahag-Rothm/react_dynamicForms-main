import { create, SetState } from "zustand";

interface Page {
    currentPage: boolean;
    togglePage: () => void;
}

export const useStoreClose = create<Page>((set: SetState<Page>) => ({
    currentPage: false,
    togglePage: () =>
        set((state) => ({
            ...state,
            currentPage: !state.currentPage,
        })),
}));
