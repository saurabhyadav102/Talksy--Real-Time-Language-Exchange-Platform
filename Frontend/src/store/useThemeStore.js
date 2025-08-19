import { create } from 'zustand'

export const useThemeStore= create((set) => ({
  theme:localStorage.getItem("Talksy-Theme")||"forest",
  setTheme:(theme)=>{
    localStorage.setItem("Talksy-Theme",theme)
    set({theme})},

}))
