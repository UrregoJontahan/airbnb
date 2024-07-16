import { SearchCalendar } from "app/components/reservation/calendar/SearchCalendar"
import { ButtonDates } from "../ReservationDates/buttonDates/buttonDates"
import { useStore } from "app/app/lib/stateChangeButtonSearch"
import { VolumeButton } from "../ReservationDates/buttonMonths/buttonMonths"
import { ButtonOptionFlexReservation } from "../ReservationDates/buttonFlex/ButtonOptionFlex"

export function SearchRoom (){
    
    const {
        openDates, 
        openMonths,
        openFlex, 
    } = useStore()
    
    return(
       <div className="md:w-1/2 md:h-auto md:flex md:absolute md:top-36 md:mt-2 md:rounded-3xl md:left-1/4 md:z-20 md:bg-white md:shadow-lg md:shadow-black md:justify-center md:flex-col md:overflow-hidden">
            <ButtonDates />
            {openDates && <SearchCalendar/>}
            {openMonths && <VolumeButton />}
            {openFlex && <ButtonOptionFlexReservation />}
       </div>
    )
}