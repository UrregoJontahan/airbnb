import { ButtonUser } from "../shared/profileUser";
import { ButtonRommForm } from "../roomUploadForm/ButtonFormRoom";
import { Tags } from "../shared/tags/tags";
import { Logo } from "../shared/logo/logo";

  export const Header = () => {
      return (
          <header className="flex relative w-full pt-4">
              <nav className="flex flex-row flex-nowrap list-none items-center w-full">
                <Logo/>
                <Tags/>       
                <div className="flex absolute right-4 gap-2">
                  <ButtonRommForm/>   
                  <ButtonUser/>
                </div>
              </nav>
          </header>
      )
  }