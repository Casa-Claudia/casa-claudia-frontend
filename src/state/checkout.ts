import { create } from 'zustand';

interface CheckoutState {
  range: [Date, Date];
  setRange: (range: [Date, Date]) => void;
  price: number;
  setPrice: (price: number) => void;
  discountCode: string;
  setDiscountCode: (discountCode: string) => void;
  discountPercent: number;
  setDiscountPercent: (discountPercent: number) => void;
  resetDiscount: () => void;
}

export const useCheckoutState = create<CheckoutState>((set) => ({
  range: [new Date(), new Date()],
  setRange: (range) => set({ range }),
  price: 0,
  setPrice: (price) => set({ price }),
  discountCode: '',
  setDiscountCode: (discountCode) => set({ discountCode }),
  discountPercent: 0,
  setDiscountPercent: (discountPercent) => set({ discountPercent }),
  resetDiscount: () => set({ discountCode: '', discountPercent: 0 }),
}));
