import { TagsMobile } from "./tagsMobile/tagsMobile";
import { MobileCalendarReservation } from "../mobileCalendarReservation/mobileCalendarReservation";
import { MobileReservationPlace } from "../mobileReservationPlace/mobileReservationPlace";

export function SearchPanelMobile (){
  
    return (
        <div className="w-screen h-screen fixed top-0 bg-gray-200 z-20 overflow-y-auto overflow-x-hidden">
            <TagsMobile/>
            <MobileReservationPlace/>
            <MobileCalendarReservation/>
        </div> 
    )
}