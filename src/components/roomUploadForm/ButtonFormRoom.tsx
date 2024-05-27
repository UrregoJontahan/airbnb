import Link from "next/link";
import { TbWorld } from "react-icons/tb";

export function ButtonRommForm (){
    return(
        <div className="">
            <Link href={"/form-room"} className="flex w-64 h-10 rounded-full items-center justify-center gap-4 hover:shadow-xl hover:bg-gray-300 cursor-pointer">
                <p className="p-4 text-sm">Pon tu espacion en airbnb </p>
                <TbWorld/>
            </Link>
        </div>    
    )
}