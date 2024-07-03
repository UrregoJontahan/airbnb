import create from 'zustand';

interface State {
  openWhere: boolean;
  openArrive: boolean;
  openExit:boolean;
  showSuggestions: boolean;
  showExitButton: boolean;
  exploreDestinations:boolean;
  arrivalDate: Date | null;
  departureDate: Date | null;
  address: string;
  mode: boolean;
  closed:Boolean;
  openDates:Boolean;
  openMonths:Boolean;
  openFlex:Boolean;
  openReservation:Boolean;
  showReservationPlace:boolean,
  openPanelSearch:boolean,
  openFormNumberPeople:boolean,
  noShow:boolean,
  setOpenWhere: (open: boolean) => void;
  setOpenarrive: (open: boolean) => void;
  setOpenExit: (open:boolean) => void;
  setShowSuggestions: (show: boolean) => void;
  setShowExitButton: (show: boolean) => void;
  setExploreDestinations: (show:boolean) => void
  setArrivalDate: (select: Date | null) => void;
  setDepartureDate: (select: Date | null) => void; 
  setAddress: (address: string) => void;
  setMode: (select:boolean) => void;
  setClosed: (click:boolean) => void;
  setOpenDates:(click:boolean) => void;
  setOpenMonths: (click:boolean) =>void;
  setOpenFlex: (click:boolean) => void;
  setOpenReservation:(click:boolean) => void
  setShowReservationPlace: (click:boolean) => void;
  setOpenPanelSearch: ( click: boolean) => void;
  setOpenFormNumberPeople: (click:boolean) => void;
  setNoShow: (click:boolean) => void;
}

export const useStore = create<State>(( set:any) => ({
  openWhere: false,
  openArrive: false,
  showSuggestions: false,
  openExit:false,
  showExitButton: true,
  exploreDestinations:false,
  address: '',
  arrivalDate: null,
  departureDate: null,
  mode:false,
  closed:true,
  openDates:true,
  openMonths:false,
  openFlex:false,
  openReservation:false,
  showReservationPlace:true,
  openPanelSearch:false,
  openFormNumberPeople:false,
  noShow:false,
  setOpenWhere: (open) => set({ openWhere: open }),
  setOpenarrive: (open) => set({ openArrive: open }),
  setOpenExit:(open)=> set({openExit:open}),
  setShowSuggestions: (show) => set({ showSuggestions: show }),
  setShowExitButton: (show) =>  set({ showExitButton: show }),
  setExploreDestinations: (open) => set({exploreDestinations: open}),
  setArrivalDate: (select) => set({ arrivalDate: select }),
  setDepartureDate: (select) => set({ departureDate: select}), 
  setAddress: (address) => set({ address }),
  setMode: ( select) => set({ mode: select }),
  setClosed: (click) => set({closed: click}),
  setOpenDates: (click) => set({openDates: click}),
  setOpenMonths: (click) => set({openMonths: click}),
  setOpenFlex: (click) => set({openFlex: click}),
  setOpenReservation:(click) =>set({openReservation: click}),
  setShowReservationPlace: (click) => set({showReservationPlace: click}),
  setOpenPanelSearch: (click) => set({ openPanelSearch:click }),
  setOpenFormNumberPeople: (click) => set({openFormNumberPeople: click}) ,
  setNoShow: (click) => set ({ noShow: click })
}));
