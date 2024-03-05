import { create } from 'zustand';

interface CheckoutState {
  range: [Date, Date];
  setRange: (range: [Date, Date]) => void;
  price: number;
  setPrice: (price: number) => void;
}

export const useCheckoutState = create<CheckoutState>((set, get) => ({
  range: [new Date(), new Date()],
  setRange: (range) => set({ range }),
  price: 0,
  setPrice: (price) => set({ price }),
}));
