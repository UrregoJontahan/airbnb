import { useStore } from "app/app/lib/stateChangeButtonSearch"
import { CalendarReservation } from "../reservationDates/calendarReservation/calendarReservation"
import { useStateGuestsForm } from "app/app/lib/reservationForm/stateGuestsForm"

export function BookingForm (){
    const {setOpenCalendar} = useStateGuestsForm()
    const { arrivalDate, departureDate} = useStore()
    
    
    const handleClickClosed = () => {
        setOpenCalendar(false)
    }

    return(
        <div className="absolute bg-white shadow-lg shadow-gray-500 rounded-3xl overflow-hidden right-6 z-50">
            <div className="flex ">
              <div className="pl-6 pr-6 pb-4 pt-4 flex flex-col mt-2">
                <h1 className="text-xl font-semibold whitespace-nowrap">5 Noches</h1>
                <p className="text-gray-400 whitespace-nowrap">fecha de -hasta pero tiene que </p>
              </div>
              <div className="flex m-4 p-2">
                <button className="border border-gray-400 p-2 text-sm font-semibold rounded-l-lg focus:outline focus:outline-1 focus:outline-black ">
                  <p className="flex mr-auto">Llegada</p>
                  <input type="text" placeholder="DD/MM/AA" className="focus:outline-none" />
                </button> 
                <button className="p-2 text-sm font-semibold border border-gray-400 rounded-r-lg focus:outline focus:outline-1 focus:outline-black">
                  <p className="flex mr-auto">Salida</p>
                  <input type="text" placeholder="DD/MM/AA" className="focus:outline-none"/>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <CalendarReservation/>
            </div>
            <div className="w-full flex">
              <div className="ml-auto mr-8 flex gap-4 p-2">
                <button className="pl-4 pr-4 pb-2 pt-2 hover:bg-gray-300 font-semibold underline">Borrar fechas</button>
                <button className="pl-4 pr-4 pb-2 pt-2 bg-black text-white rounded-lg font-semibold"
                 onClick={handleClickClosed}>
                    Cierra
                </button>
              </div>
            </div>
          </div>
    )
}