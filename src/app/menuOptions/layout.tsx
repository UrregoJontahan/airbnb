import { MenuOptionsMobile } from "app/components/menuOptions/menuOptionsMobile";

const MenuMobile = () => {
    return (
        <div className="fixed bottom-0 z-10 w-full md:hidden">
            <MenuOptionsMobile />
        </div>
    );
}

export default MenuMobile;
