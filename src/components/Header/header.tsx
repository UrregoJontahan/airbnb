import { ButtonUser } from "../shared/profileUser";
import { ButtonRommForm } from "../roomUploadForm/ButtonFormRoom";
import { Tags } from "../shared/tags/tags";
import { Logo } from "../shared/logo/logo";

  export const Header = () => {
      return (
        <div>
          <div className="hidden md:block">
            <header className="flex relative w-full h-16 "> 
              <nav className="flex flex-row flex-nowrap list-none items-center w-full justify-between">
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
           </div>
        </div>
      )
  }