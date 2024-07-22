import { create } from "zustand";

interface StateMap {
    showMap:boolean,
    setShowMap: (click:boolean) => void,
}

export const stateMap = create<StateMap>((set:any) => ({
    showMap:false,
    setShowMap: (click)=> set({showMap: click})
}))