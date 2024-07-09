"use client"
import { ButtonUser } from "../shared/profileUser";
import { ButtonRommForm } from "../roomUploadForm/ButtonFormRoom";
import { Tags } from "../shared/tags/tags";
import { Logo } from "../shared/logo/logo";
import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { ButtonSearchPlace } from "../buttonSearch/reservationPlace/ButtonSearchPlace";
import { Icons } from "app/components/icons/index"


  export const  Header = () => {
    
    const { scrolledY} = useStore()

      return (
           <div className={`hidden md:block flex-col ${scrolledY && "absolute top-0"}`}>
            <header className={`flex w-full h-16 ${scrolledY && "fixed md:z-50 top-0"} `}> 
              <nav className="flex flex-row flex-nowrap list-none items-center w-full justify-between z-40">
                <Logo/>
                <div className="flex pl-20">
                  <Tags/> 
                </div>      
                <div className="flex">
                  <ButtonRommForm/>   
                  <ButtonUser/>
                </div>
              </nav>
            </header>
              <div className={`w-full h-auto bg-white ${scrolledY && "fixed md:z-20"}`}>
                <ButtonSearchPlace/>
                <Icons/>
              </div>
           </div>
      )
  }