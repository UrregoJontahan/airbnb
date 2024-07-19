import { useStore } from "app/app/lib/stateChangeButtonSearch"
import { Reservation } from "../../SearchDates/reservation"
import { motion } from "framer-motion"


export function MobileCalendarReservation (){
    const {
        openReservation, 
        setOpenReservation, 
        setShowReservationPlace, 
        setOpenFormNumberPeople,
        openPanelSearch
    } = useStore()

    const handleClickReservation = () => {
        setOpenReservation(true)
        setShowReservationPlace(false)
        setOpenFormNumberPeople(false)
    }

    return(
        <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{
        opacity: openPanelSearch ? 1 : 0,
        y: openPanelSearch ? 0 : 50,
        }}
        transition={{ duration: 0.4 }}
        >
            {!openReservation ? 
                <div className="w-11/12 border ml-3 p-2 border-gray-200 rounded-2xl shadow-md bg-white mt-4 h-auto flex gap-4 overflow-y-auto" 
                    onClick={handleClickReservation}>
                    <p className="p-2 text-gray-400 font-medium">Cúando</p>
                    <p className="ml-auto p-2 font-semibold text-base">Agregar fechas</p>
                </div> 
            : <div className="w-11/12 border ml-3 p-2 border-gray-200 rounded-2xl shadow-md shadow-gray-400 bg-white mt-2 h-auto">
                <h2 className="text-2xl font-semibold m-3">¿Cuando es tu viaje?</h2>
                <Reservation/>
              </div>
            }
        </motion.div>
    )
}