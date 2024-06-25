import { Header } from "app/components/Header";
import { ButtonSearchPlace } from "app/components/buttonSearch/reservationPlace/ButtonSearchPlace";
import { RoomList } from "../components/Home/index"
import { Icons } from "../components/icons/index"
import MenuMobile from "./menuOptions/layout";

export default function Home (){
    return(
        <main>
            <Header/>
            <ButtonSearchPlace/> 
            <Icons/>
            <RoomList/>
            <div className="md:hidden">
                <MenuMobile/>    
            </div>     
        </main>
    )
}