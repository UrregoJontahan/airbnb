import { InputSearchMobile } from "../mobileSearchComponents/inputSearchMobile/inputSearchMobile"
import { ContainerMaps } from "../../SearchPlace/containerMap"
import { useStore } from "app/app/lib/stateChangeButtonSearch"

export function MobileReservationPlace (){

    const { showReservationPlace, setShowReservationPlace, setOpenReservation } = useStore()

    const handleClickReservationPLace = () => {
        setShowReservationPlace(true)
        setOpenReservation(false)
    }

    return(
        <div>
          {showReservationPlace ?
            <div className="w-11/12 border ml-3 p-2 border-gray-200 rounded-2xl shadow-md shadow-gray-400 bg-white mt-4 h-auto">
                <InputSearchMobile/>
                <ContainerMaps/>
            </div> :
            <div className="w-11/12 border ml-3 p-2 border-gray-200 rounded-2xl shadow-md shadow-gray-400 bg-white mt-4 h-auto flex gap-4 overflow-y-auto"
                onClick={handleClickReservationPLace} >
            <p className="p-2 text-gray-400 font-medium">Dónde</p>
            <p className="ml-auto p-2 font-semibold text-base">Busqueda flexible</p>
        </div> 
            }
        </div>
    )
}