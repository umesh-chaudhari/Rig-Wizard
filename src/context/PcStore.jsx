import { create } from "zustand";

export const usePcBuilderStore = create((set) => ({
  cpu: null,
  setCpu: (cpu) => set({ cpu }),

  gpu: null,
  setGpu: (gpu) => set({ gpu }),

  ram: null,
  setRam: (ram) => set({ ram }),

  storage: null,
  setStorage: (storage) => set({ storage }),

  powerSupply: null,
  setPowerSupply: (powerSupply) => set({ powerSupply }),

  pcCase: null,
  setPcCase: (pcCase) => set({ pcCase }),

  motherboard: null,
  setMotherboard: (motherboard) => set({ motherboard }),

  cooler: null,
  setCooler: (cooler) => set({ cooler }),

  resetParts: () =>
    set({
      cpu: null,
      gpu: null,
      cooler: null,
      motherboard: null,
      pcCase: null,
      powerSupply: null,
      storage: null,
      ram: null,
    }),
}));
