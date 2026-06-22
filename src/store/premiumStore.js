import { create } from 'zustand';

export const usePremiumStore = create((set) => ({
  loading: false,
  error: null,
  data: null,
  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
