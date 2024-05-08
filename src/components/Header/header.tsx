import { FaAirbnb } from "react-icons/fa";
import {Mulish} from "next/font/google"
import Link from "next/link";

const mulish = Mulish({
    weight: ["800"],
    subsets: ["latin"]
  })
  

export const Header = () => {
    return (
        <header className="relative">
            <nav className="flex flex-row flex-nowrap list-none">
                <Link href={"/"} className="flex flex-row flex-nowrap list-none relative top-8 left-8 font-bold text-pink-600">   
                    <FaAirbnb  className="text-4xl"/>
                    <span className={`${mulish.className} text-2xl font-bold`} >airbnb</span>
                </Link>
                <ul className="flex flex-row flex-nowrap list-none gap-x-10 mx-auto py-8 px-5 justify-center text-base text-gray-500">
                    <li>Estadias</li>
                    <li>Experiencias</li>
                    <li>Experiencias en linea</li>
                </ul>
            </nav>
        </header>
    )
}