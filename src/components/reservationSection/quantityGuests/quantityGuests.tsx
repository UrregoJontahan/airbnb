import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { FormQuantityGuests } from "app/components/buttonSearch/numberOfPeopleForm/formQuantityGuests/formQunatityGuests";
import { IoIosArrowDown } from "react-icons/io";

export function QuantityGuests ({ room } :any){

    const {openFormGuests, setOpenFormGuests } = useStore()

    const handleClickBtnQuantityGuests = () =>{
        setOpenFormGuests(!openFormGuests)
    }

    return(
    <div>
        <section className="border-t border-gray-400 p-2 text-sm font-semibold hover:cursor-pointer">
            <div className="flex"
            onClick={handleClickBtnQuantityGuests}>
                <p>Huespedes</p>
                <IoIosArrowDown className="ml-auto text-2xl relative top-4" />  
            </div>
            <p className="text-base font-normal">Huespedes</p>
        {openFormGuests && (
            <div className="absolute left-14 mt-3 w-9/12 border bg-white p-4 shadow-lg shadow-gray-400">
                <FormQuantityGuests room = {room} />
            </div>
        )}
        </section>
     </div>
    )
}