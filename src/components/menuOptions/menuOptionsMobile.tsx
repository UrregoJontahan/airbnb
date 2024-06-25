import { FaSearch } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";

export function MenuOptionsMobile (){
    return(
            <div className="w-full h-16 flex items-center justify-center bg-white gap-4 border border-gray-300">
                <Link href={"/"} className="flex text-pink-600 flex-col justify-center items-center h-12 w-16">
                    <FaSearch className="flex text-2xl"/>
                    <p className="flex text-sm h-4">explora</p>
                </Link>
                <Link href={"/favorites"} className="flex text-gray-500 flex-col justify-center items-center h-12 w-16">
                    <GrFavorite className="flex text-2xl" />
                    <p className="flex text-sm h-4">favoritos</p>
                </Link>
                <Link href={"/login"} className="flex text-gray-500 flex-col justify-center items-center h-12 w-18">
                    <FaRegCircleUser className="flex text-2xl" />
                    <p className="flex text-sm h-4">iniciar sesion</p>
                </Link>
            </div>
    )
}
