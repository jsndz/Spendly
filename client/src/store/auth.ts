import { create } from "zustand";

interface AuthState {
  name: string | null;
  email: string | null;
  id: number | null;
  setAuth: (name: string, email: string, id: number) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  name: null,
  email: null,
  id: null,

  setAuth: (name, email, id) => {
    set({ name, email, id });
  },

  logout: () => {
    set({ name: null, email: null, id: null });
  },
}));
