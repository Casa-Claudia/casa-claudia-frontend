import { create } from 'zustand';

interface CheckoutState {
  range: [Date, Date];
  setRange: (range: [Date, Date]) => void;
}

export const useCheckoutState = create<CheckoutState>((set) => ({
  range: [new Date(), new Date()],
  setRange: (range) => set({ range }),
}));
