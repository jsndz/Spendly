import { create } from "zustand";

interface AuthState {
  name: string | null;
  email: string | null;
  setAuth: (name: string, email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  name: null,
  email: null,

  setAuth: (name, email) => {
    set({ name, email });
  },

  logout: () => {
    set({ name: null, email: null });
  },
}));
