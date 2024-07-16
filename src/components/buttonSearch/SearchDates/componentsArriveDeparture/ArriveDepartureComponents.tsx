import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { Reservation } from "../reservation";

export function ArriveDeparture (){

    const {
        showExitButton,
        arrivalDate,
        departureDate,
        openArrive,
        openExit,
        openWhere,
        exploreDestinations,
        setShowExitButton,
        setArrivalDate,
        setDepartureDate,
        setOpenarrive,
        setOpenWhere,
        setShowSuggestions,
        setExploreDestinations,
        setOpenExit,
    } = useStore()

    const handleClickArrive = () => {
        setOpenarrive(!openArrive);
        setOpenWhere(false);
        setShowSuggestions(false);
        setExploreDestinations(false);
        setOpenExit(false);
      };
    
      const handleClickExit = () => {
        setOpenarrive(false);
        setOpenWhere(false);
        setShowSuggestions(false);
        setExploreDestinations(false);
        setOpenExit(!openExit);
        setShowExitButton(showExitButton);
      };
    
    
      const handleClickCancelDateArrive = () => {
        setArrivalDate(null)
      }
      const handleClickCancelDateDeparture = () => {
        setDepartureDate(null)
      }

    return(
        <div className={`flex flex-row items-center rounded-full h-16` }>
            <span
                className={`${!openArrive && "text-sm font-semibold w-40 h-full pt-3 pl-8 rounded truncate flex flex-col hover:bg-gray-300 hover:rounded-full border-r border-gray-300 cursor-pointer"} 
                ${openArrive && "rounded-full shadow-lg bg-white hover:bg-none text-sm font-semibold w-40 h-full border-none pt-3 pl-8 items-center truncate border-r border-gray-300 hover:rounded-full cursor-pointer"}
                ${openArrive && "border-none"} ${openExit && `border-none`} ${exploreDestinations && "border-none"} ${openWhere && "border-none"}
                `}
                onClick={handleClickArrive}
              >
                Llegada
                <p className="text-base text-gray-400 font-normal p-0 overflow-hidden whitespace-nowrap overflow-ellipsis truncate border-none focus:outline-none w-auto">
                  {arrivalDate instanceof Date ? `${arrivalDate.getDate()} ${arrivalDate.toLocaleString('default', { month: 'short' })}` : 'Agregar fecha'}
                  {arrivalDate && <span className=" ml-2 cursor-pointer text-black hover:bg-gray-600 hover:text-white hover:rounded-full w-2 h-2 p-1" 
                  onClick={handleClickCancelDateArrive}>x</span>}
                </p>
              </span>
              {openArrive && <Reservation />}
              {showExitButton && (
                <span className={`${!openExit && "text-sm font-semibold w-40 h-full pt-3 pl-8 rounded truncate flex flex-col hover:bg-gray-300 hover:rounded-full border-r border-gray-300 cursor-pointer"}
                ${openExit && "rounded-full shadow-lg bg-white hover:bg-none text-sm font-semibold w-40 h-full border-none pt-3 pl-8 items-center truncate border-r border-gray-300 hover:rounded-full cursor-pointer"}
                ${openArrive && "border-none"} ${openExit && `border-none`} ${exploreDestinations && "border-none"} ${openWhere && "border-none"}
                `}
                onClick={handleClickExit}>
                  Salida
                  <p className="text-base text-gray-400 font-normal p-0 overflow-hidden whitespace-nowrap overflow-ellipsis truncate border-none focus:outline-none w-auto">
                    {departureDate instanceof Date ? `${departureDate.getDate()} ${departureDate.toLocaleString('default', { month: 'short' })}` : 'Agregar fecha'}
                    {departureDate && <span className=" ml-2 cursor-pointer text-black hover:bg-gray-600 hover:text-white hover:rounded-full w-2 h-2 p-1" onClick={handleClickCancelDateDeparture}>x</span>}

                  </p>
                </span>
              )}
              {openExit && <Reservation />}
        </div>
    )
}