import create from "zustand";

// create store with zustand
const useCounterStore = create((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  double: () => set((state) => ({ count: state.count * 2 })),
}));

export default useCounterStore;
