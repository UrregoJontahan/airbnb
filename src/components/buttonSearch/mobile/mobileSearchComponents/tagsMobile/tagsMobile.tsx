import { useStore } from "app/app/lib/stateChangeButtonSearch"

export function TagsMobile (){
    const { setClosed } = useStore()

    const handleClickCloseSearch = () => {
        setClosed(true)
    }

    return(
        <div className="flex mt-5 items-center gap-6">
            <button className="flex rounded-full border border-gray-400 w-8 h-8 justify-center font-bold ml-5 text-lg bg-gray-100" onClick={handleClickCloseSearch}> x </button>
            <span className="text-lg ml-2 font-semibold">Estadias</span>
            <span className="text-lg font-semibold">Experiencias</span>
        </div>
    )
}