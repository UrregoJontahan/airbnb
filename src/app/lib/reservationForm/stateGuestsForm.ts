import { create } from "zustand";

interface State {
    openFormGuests: boolean,
    adults: number,
    children: number,
    babys: number,
    pets: number,
    openCalendar:boolean,
    setOpenFormGuests: (value: boolean) => void;
    setAdults: (value: React.SetStateAction<number>) => void;
    setChildren: (value: React.SetStateAction<number>) => void;
    setBabys: (value: React.SetStateAction<number>) => void;
    setPets: (value: React.SetStateAction<number>) => void;
    setOpenCalendar:( click:boolean ) => void,
}

export const useStateGuestsForm = create<State>((set) => ({
    openFormGuests: false,
    adults: 1,
    children: 0,
    babys: 0,
    pets: 0,
    openCalendar:false,
    setOpenFormGuests: (value) => set({ openFormGuests: value }),
    setAdults: (value) => set((state) => ({ adults: typeof value === 'function' ? value(state.adults) : value })),
    setChildren: (value) => set((state) => ({ children: typeof value === 'function' ? value(state.children) : value })),
    setBabys: (value) => set((state) => ({ babys: typeof value === 'function' ? value(state.babys) : value })),
    setPets: (value) => set((state) => ({ pets: typeof value === 'function' ? value(state.pets) : value })),
    setOpenCalendar:(click) => set({openCalendar:click})
}));
