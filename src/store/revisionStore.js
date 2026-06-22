import { create } from 'zustand';

export const useRevisionStore = create((set) => ({
  loading: false,
  error: null,
  data: null,
  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
