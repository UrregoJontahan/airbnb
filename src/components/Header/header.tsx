"use client"
import { ButtonUser } from "../shared/profileUser";
import { ButtonRommForm } from "../roomUploadForm/ButtonFormRoom";
import { Tags } from "../shared/tags/tags";
import { Logo } from "../shared/logo/logo";
import { useStore } from "app/app/lib/stateChangeButtonSearch";
import { ButtonSearchPlace } from "../buttonSearch/reservationPlace/ButtonSearchPlace";
import { Icons } from "app/components/icons/index"
import { ButtonShowMap } from "../buttonShowMap/buttonShowMap";

export const  Header = () => {    
  const { scrolledY, clickButtonSearSmall,showIcons } = useStore()
  
  return (
    <div className="h-auto"> 
      <div className={`hidden md:block flex-col ${scrolledY && "absolute top-0 "}`}>
        <header className={`flex w-full h-20 ${scrolledY && "fixed md:z-20 top-0 bg-white"} `}> 
          <Logo/>
          <div className="flex ml-auto relative bottom-8">
            <Tags/> 
          </div>      
          <div className="flex ml-auto">
            <ButtonRommForm/>   
            <ButtonUser/>
          </div>
        </header>
      </div>
      <div>
        <div className={`bg-white h-auto ${scrolledY && "md:fixed md:z-20 md:flex md:justify-center md:ml-80 fixed z-50"}`}>
          <ButtonSearchPlace/>
        </div>
        <div
          className={`w-full h-auto bg-white ${scrolledY && "mt-2 md:mt-0 md:z-30 md:top-20 fixed top-20 z-20"} ${clickButtonSearSmall && "md:hidden"}`}>
          { showIcons && <Icons/>}
        </div>
        <div className="fixed bottom-10 w-full flex justify-center z-50 ">
          <ButtonShowMap/>
        </div>
      </div>
    </div>
  )
}