import { Header } from "app/components/Header";
import { RoomList } from "../components/Home/index"
import MenuMobile from "./menuOptions/layout";

export default function Home (){
    return(
        <main className="scroll-auto">
            <Header/>
            <RoomList/>
            <div className="md:hidden">
                <MenuMobile/>    
            </div>     
        </main>
    )
}