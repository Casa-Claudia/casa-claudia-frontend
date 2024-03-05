import { create } from 'zustand';

interface reviewState {
    name: string;
    setName: (name: string) => void;
    rating: number;
    setRating: (rating: number) => void;
    review: string;
    setReview: (review: string) => void;
}

export const useReviewState  = create<reviewState>((set, get) => ({
    name: '',
    setName: (name) => set({ name }),
    rating: 0,
    setRating: (rating) => set({ rating }),
    review: '',
    setReview: (review) => set({ review }),
}));