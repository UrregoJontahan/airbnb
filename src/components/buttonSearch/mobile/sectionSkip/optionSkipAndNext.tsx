import { useStore } from "app/app/lib/stateChangeButtonSearch"

export function OptionsSkipAndNext (){

    const {
        setOpenReservation,
        setOpenFormNumberPeople,
    } = useStore()

    const handleSkip = () =>{
        setOpenReservation(false)
        setOpenFormNumberPeople(true)
    }

    return(
        <div className="md:hidden border-t relative bottom-2 pt-2 flex items-start w-full">
            <div className="flex pl-4 pr-4 w-full relative top-2">
                <p className=" font-semibold flex text-center items-center underline text-lg" onClick={handleSkip}>Omite</p>
                <button className="ml-auto bg-black text-white w-32 h-11 rounded-md" onClick={handleSkip}>Siguiente</button>
            </div>
        </div>
    )
}