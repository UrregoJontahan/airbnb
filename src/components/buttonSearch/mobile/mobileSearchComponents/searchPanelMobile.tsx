import { TagsMobile } from "./tagsMobile/tagsMobile";
import { MobileCalendarReservation } from "../mobileCalendarReservation/mobileCalendarReservation";
import { MobileReservationPlace } from "../mobileReservationPlace/mobileReservationPlace";
import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { FormReservationNumberPeople } from "../formReservationPeople/formResevationPeople";
import { OptionClearOrSearch } from "../OptionSearchOrClearSearch/ClearOrSearchSearch";

export function   SearchPanelMobile (){
    const { } = useStore()
  
    return (
        <div className={`w-screen h-screen fixed top-0 bg-gray-200 z-50`}>
            <TagsMobile/>
            <MobileReservationPlace/>
            <MobileCalendarReservation/>
            <FormReservationNumberPeople/>
            <OptionClearOrSearch/>
        </div> 
    )
}