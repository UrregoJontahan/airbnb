import { CalendarReservation } from "app/components/reservation/calendar/calendarReservation"
import { ButtonDates } from "./buttonDates/buttonDates"
import { useStore } from "app/app/lib/stateChangeButtonSearch"
import { VolumeButton } from "./buttonMonths/buttonMonths"
import { ButtonOptionFlexReservation } from "./buttonFlex/ButtonOptionFlex"

export function Reservation (){
    
    const {
        openDates, 
        openMonths,
        openFlex, 
    } = useStore()
    
    return(
       <div className="md:w-1/2 md:h-2/4 md:flex md:absolute md:top-32 md:mt-2 md:rounded-3xl md:left-1/4 md:z-20 md:bg-white md:shadow-lg md:shadow-black md:justify-center ">
            <ButtonDates />
            {openDates && <CalendarReservation/>}
            {openMonths && <VolumeButton />}
            {openFlex && <ButtonOptionFlexReservation />}
       </div>
    )
}