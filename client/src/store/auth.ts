import { create } from "zustand";

interface AuthState {
  name: string | null;
  email: string | null;
  token: string | null;
  setAuth: (name: string, email: string, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  name: null,
  email: null,
  token: null,

  setAuth: (name, email, token) => {
    localStorage.setItem("token", token);
    set({ name, email, token });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ name: null, email: null , token: null });
  },
}));
