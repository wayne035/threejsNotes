import { create } from "zustand"

export const useBookToggle = create((set)=>({
    toggle : false,
    setToggle : ()=> set(s=>({toggle : !s.toggle}))
}))