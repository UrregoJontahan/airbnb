import { VscSettings } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { SearchPanelMobile } from "./mobileSearchComponents/searchPanelMobile";

export function ButtonSearchMobile() {
    const  [ openPanelSearch, setOpenPanelSearch ] = useState(false)

    const handleClickButtonSearch = (e:any) =>{
        setOpenPanelSearch(true)
    }

    return (
        <div className="w-full flex justify-center">
            <div className="flex w-full justify-center">
                <div className="h-14 flex rounded-full border border-gray-300  items-center w-11/12 m-4 shadow-md"
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
            <div className="w-11 h-10 mt-6 mr-2 border border-gray-400 flex justify-center items-center rounded-full relative right-2">
                <VscSettings className="text-2xl" />
            </div>
            {openPanelSearch && <SearchPanelMobile/> }
        </div>
    );
}
