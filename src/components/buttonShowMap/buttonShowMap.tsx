import { stateMap } from "app/app/lib/stateMapHome/stateMap";
import { FaMap } from "react-icons/fa";
import { FaList } from "react-icons/fa6";

export function ButtonShowMap (){
    const { setShowMap, showMap } = stateMap()

    const handleClickShowMap = () => {
         setShowMap(!showMap)
    }

    return(
            <button className="bg-black rounded-full pl-4 pr-4 pb-3 pt-3 text-white font-semibold"
                onClick={handleClickShowMap}
            >
            {showMap ? 
                <p className="flex items-center gap-2">Mostrar listas <FaList /></p> : 
                <p className="flex items-center gap-2">Mostrar mapa <FaMap /></p>}
             
            </button>
    )
}