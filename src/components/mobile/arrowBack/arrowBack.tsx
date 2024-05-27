import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

export function ArrowBack (){
    return(
        <Link href={"/"} className="flex p-4 items-center rounded-full shadow-sm hover:shadow-md cursor-pointer bg-white">
            <MdArrowBackIos className="flex font-bold text-xl"/>
        </Link>
    )
}