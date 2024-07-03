import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { FaSearch } from "react-icons/fa";

export function OptionClearOrSearch (){

    const {openReservation} = useStore()

    return (
        <div className={`absolute bottom-0 w-full p-4 border-t border-gray-300 ${openReservation && "hidden"}`}>
            <div className="flex w-full">
                <p className="font-semibold flex text-center items-center underline text-lg">Limpiar todo</p>
                <button className="ml-auto text-lg text-white font-semibold rounded-md w-32 bg-pink-600 pt-2 pb-2 pl-4 pr-4 flex items-center gap-4">
                    <FaSearch />Buscar
                </button>
            </div>
        </div>
    )
}