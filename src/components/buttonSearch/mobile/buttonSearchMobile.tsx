import { VscSettings } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { SearchPanelMobile } from "./mobileSearchComponents/searchPanelMobile";
import { useStore } from "app/app/lib/stateChangeButtonSearch";

export function ButtonSearchMobile() { 
    const {setOpenPanelSearch, openPanelSearch} = useStore()

    const handleClickButtonSearch = () =>{
        setOpenPanelSearch(true)
    }

    return (
        <div className="w-screen flex justify-center">
            <div className="flex w-full justify-center pb-2">
                <div className="h-14 flex rounded-full border border-gray-300  items-center w-11/12 mt-4 shadow-md"
                    onClick={handleClickButtonSearch}
                >
                    <div className="w-14 h-14 flex items-center rounded-full justify-center">
                        <FaSearch/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold w-48">¿A dónde quieres ir?</span>
                        <ul className="flex flex-row gap-2">
                            <li className="flex text-sm w-16 overflow-hidden overflow-ellipsis whitespace-nowrap">•En cualquier lugar del mundo</li>
                            <li className="flex text-sm w-16 overflow-hidden overflow-ellipsis whitespace-nowrap">•Cualquier semana</li>
                            <li className="flex text-sm w-16 overflow-hidden overflow-ellipsis whitespace-nowrap">•¿Cuantos?</li>
                        </ul>
                    </div>
                </div>
            </div>
            {openPanelSearch && <SearchPanelMobile/>}
        </div>
    );
}
