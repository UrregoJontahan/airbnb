import { FaAirbnb } from "react-icons/fa";
import {Mulish} from "next/font/google"
import Link from "next/link";
import { ButtonUser } from "../profileUser";

const mulish = Mulish({
    weight: ["800"],
    subsets: ["latin"]
  })
  
  export const Header = () => {
      return (
          <header className="relative">
              <nav className="flex flex-row flex-nowrap list-none">
                  <Link href={"/"} className="flex flex-row flex-nowrap list-none relative top-4 font-bold text-pink-600 left-0 lg:left-14">
                      <FaAirbnb className="text-4xl"/>
                      <span className={`${mulish.className} text-2xl font-bold hidden md:block lg:hidden`}>airbnb</span>
                    <span className={`${mulish.className} text-2xl font-bold hidden lg:block`}>airbnb</span>
                  </Link>
                  <ul className="flex flex-row flex-nowrap list-none gap-x-10 mx-auto p-4 justify-center text-base text-gray-500 ">
                      <li className=" hover:text-black cursor-pointer ">Estadias</li>
                      <li className=" hover:text-black cursor-pointer ">Experiencias</li>
                      <li className=" hover:text-black cursor-pointer ">Experiencias en linea</li>
                  </ul>
                    <ButtonUser/>
              </nav>
          </header>
      )
  }