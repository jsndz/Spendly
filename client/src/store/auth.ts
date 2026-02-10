import type { User } from "@/types/types";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user:User) => set({ user }),
}));