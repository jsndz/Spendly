import { create } from "zustand"

type ThemeState = {
  theme: "light" | "dark"
  toggle: () => void
  init: () => void
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",

  init: () => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const theme = saved ?? (prefersDark ? "dark" : "light")

    document.documentElement.classList.toggle("dark", theme === "dark")
    set({ theme })
  },

  toggle: () => {
    const next = get().theme === "dark" ? "light" : "dark"
    document.documentElement.classList.toggle("dark", next === "dark")
    localStorage.setItem("theme", next)
    set({ theme: next })
  },
}))