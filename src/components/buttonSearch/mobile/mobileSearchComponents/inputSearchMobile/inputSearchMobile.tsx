import { useStore } from "app/app/lib/stateChangeButtonSearch"
import { useState } from "react"
import { LocationSearchInput } from "app/components/buttonSearch/locationSearchInput/locationSearchInput"
import { SuggestionLocation } from "app/components/buttonSearch/SearchPlace/suggestionLocation/suggestionLocation"

export function InputSearchMobile (){
    const { address, setAddress, closed, setClosed } = useStore()
    const [ openSuggestions, setOpenSuggetions ] = useState(false)

    const handleClckLocationInputSearch = () => {
        setOpenSuggetions(true)
        setClosed(false)
    }

    return(
        <div>
            <div className="w-full p-2 bg-white h-auto ">
                <h2 className={`text-2xl font-semibold m-3 ${closed ? "¿A donde quieres ir?" : "hidden"}`}>¿A donde quieres ir?</h2>
                <div onClick={handleClckLocationInputSearch} className={`${openSuggestions && "mt-8"}`}>
                    <LocationSearchInput/>
                    {openSuggestions && 
                        <div>
                            {!closed && (
                                <SuggestionLocation  address={address} setAddress={setAddress}/>
                            )} 
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}