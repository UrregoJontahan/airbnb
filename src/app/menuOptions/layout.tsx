import { MenuOptions } from "app/components/menuOptions/menuOptionsMobile";
import { ReactNode } from "react";

interface MobileLayoutProps {
    children: ReactNode;
  }
  

const MenuMobile = ({ children }: MobileLayoutProps) => {
    return(
        <div className="fixed bottom-0 z-10 w-full md:hidden">
            {children}
            <MenuOptions/>
          </div>
    )
}

export default MenuMobile