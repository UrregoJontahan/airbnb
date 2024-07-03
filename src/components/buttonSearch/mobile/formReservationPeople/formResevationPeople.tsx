import { useStore } from "app/app/lib/stateChangeButtonSearch"
import { NumberOfPeopleForm } from "../../numberOfPeopleForm/numberOfPeopleForm"

export function FormReservationNumberPeople (){

    const { setOpenReservation, setShowReservationPlace, setOpenFormNumberPeople, openFormNumberPeople } = useStore()

    const handleClickOnAddGuest = () => {
        setOpenFormNumberPeople(true)
        setOpenReservation(false)
        setShowReservationPlace(false)
    }

    return(
        <div> 
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
            
        </div>
    )
}