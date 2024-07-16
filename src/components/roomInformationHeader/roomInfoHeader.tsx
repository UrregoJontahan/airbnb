import { Logo } from "../shared/logo/logo"
import { ButtonSearchSmall } from "../buttonSearch/buttonSearchSmall/buttonSearchSmall"
import { ButtonRommForm } from "../roomUploadForm/ButtonFormRoom"
import { ButtonUser } from "../shared/profileUser"

export function RoomInfoHeader (){
    return(
    <div className={`hidden md:block`}>
      <div className="h-auto border-b"> 
        <div className="md:flex md:items-center md:w-full" >
          <Logo/>     
          <div className="md:ml-36">
            <ButtonSearchSmall/>
          </div>
          <div className="ml-auto flex">
            <ButtonRommForm/>   
            <ButtonUser/>
          </div>
        </div>
      </div>
    </div>
    )
}