import { create } from 'zustand';

interface LanguageState {
    language: string;
    setLanguage: (language: string) => void;
}

export enum LanguageEnum {
    EN = "en",
    DE = "de",
    SL = "sl"
}

export const useLanguageState = create<LanguageState>((set, get) => ({
    language: "en",
    setLanguage: (language) => set({ language })
}));
