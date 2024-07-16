import { TagsMobile } from "./tagsMobile/tagsMobile";
import { MobileSearchCalendar } from "../MobileSearchCalendar/mobileSearchCalendar";
import { SearchFormByPeople } from "../SearchFormByPeople/SearchFormByPeople";
import { OptionClearOrSearch } from "../OptionSearchOrClearSearch/ClearOrSearchSearch";
import { MobileSearchPlace } from "../MobileSearchPlace/MobileSearchPlace";

export function   SearchPanelMobile (){
    return (
        <div className={`w-screen h-screen fixed top-0 bg-gray-200 z-40`}>
            <TagsMobile/>
            <MobileSearchPlace/>
            <MobileSearchCalendar/>
            <SearchFormByPeople/>
            <OptionClearOrSearch/>
        </div> 
    )
}