import { ArrowBack } from "../arrowBack/arrowBack"
import { ButtonShared } from "app/components/shared/buttonShared/buttonShared"

export function HeaderInfoRoomMobile ({room}:any){
    return(
        <div className="h-16 md:hidden flex items-center">
        <ArrowBack />
        <div className="ml-auto">
          <ButtonShared room={room} />
        </div>
      </div>
    )
}