import { Header } from "app/components/Header";
import { ButtonSearchPlace } from "app/components/buttonSearchMap";
import { RoomList } from "../components/Home/index"
import { Icons } from "../components/icons/index"

export default function Home (){
    return(
        <main>
            <Header/>
            <ButtonSearchPlace/> 
            <Icons/>
            <RoomList/>     
        </main>
    )
}