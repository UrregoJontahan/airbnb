import { useStore } from "app/app/lib/stateChangeButtonSearch"
import { NumberOfPeopleForm } from "../../numberOfPeopleForm/numberOfPeopleForm"
import { motion } from "framer-motion";

export function FormReservationNumberPeople (){

    const { 
        setOpenReservation, 
        setShowReservationPlace, 
        setOpenFormNumberPeople, 
        openFormNumberPeople,
        openPanelSearch,
    } = useStore()

    const handleClickOnAddGuest = () => {
        setOpenFormNumberPeople(true)
        setOpenReservation(false)
        setShowReservationPlace(false)
    }

    return(
        <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{
        opacity: openPanelSearch ? 1 : 0,
        y: openPanelSearch ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
        > 
            { openFormNumberPeople ? 
                <div className="w-11/12 border ml-3 p-2 border-gray-200 rounded-2xl shadow-md shadow-gray-400 bg-white mt-2 h-auto">
                    <h2 className="text-2xl font-semibold ml-3 mt-2">¿Quién te acompaña?</h2>
                    <NumberOfPeopleForm/>
                </div> :
                <div className="w-11/12 border ml-3 p-2 border-gray-200 rounded-2xl shadow-md shadow-gray-300 bg-white mt-4 h-auto flex gap-4 overflow-y-auto"
                    onClick={handleClickOnAddGuest}
                >
                    <p className="p-2 text-gray-400 font-medium">Quién</p>
                    <p className="ml-auto p-2 font-semibold text-base">Agrega huéspedes</p>
                </div>
            }
            
        </motion.div>
    )
}