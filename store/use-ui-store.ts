"use client";

import { create } from "zustand";

type UIState = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
  searchQuery: "",
  setSearchQuery: (value) => set({ searchQuery: value }),
}));
