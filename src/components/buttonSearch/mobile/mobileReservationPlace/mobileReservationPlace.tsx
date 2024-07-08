import { InputSearchMobile } from "../mobileSearchComponents/inputSearchMobile/inputSearchMobile"
import { ContainerMaps } from "../../reservationPlace/containerMap"
import { useStore } from "app/app/lib/stateChangeButtonSearch"
import { motion } from "framer-motion"

export function MobileReservationPlace (){

    const { 
        showReservationPlace,
        setShowReservationPlace, 
        setOpenReservation,
        setOpenFormNumberPeople,
        openPanelSearch
     } = useStore()

    const handleClickReservationPLace = () => {
        setShowReservationPlace(true)
        setOpenReservation(false)
        setOpenFormNumberPeople(false)
    }

    return(
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{
        opacity: openPanelSearch ? 1 : 0,
        y: openPanelSearch ? 0 : 50,
        }}
        transition={{ duration: 0.3 }}
        >
          {showReservationPlace ?
            <div className="w-11/12 border ml-3 p-2 border-gray-200 rounded-2xl shadow-md shadow-gray-300 bg-white mt-4 h-auto z-50">
                <InputSearchMobile/>
                <ContainerMaps/>
            </div> :
            <div className="w-11/12 border ml-3 p-2 border-gray-200 rounded-2xl shadow-md shadow-gray-300 bg-white mt-4 h-auto flex gap-4 overflow-y-auto"
                onClick={handleClickReservationPLace} >
            <p className="p-2 text-gray-400 font-medium">Dónde</p>
            <p className="ml-auto p-2 font-semibold text-base">Busqueda flexible</p>
        </div> 
            }
        </motion.div>
    )
}