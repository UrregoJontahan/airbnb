import { IoDiamond } from "react-icons/io5"

export function Calification (){
    return(
    <div className="md:w-full flex flex-col items-center md:ml-14  border-b">
        <div className="flex justify-center border border-gray-400 w-11/12 md:w-full h-auto p-4 m-4 rounded-xl gap-6 ">
            <div className="flex flex-col w-auto">
                <span className="flex justify-center font-semibold"> 487</span>
                <span className="flex text-lg text-black">★★★★</span>
            </div>
            <div className="border-l border-r flex items-center pl-2 pr-2">⚜️
                <div className="flex flex-col">
                    <span className="flex justify-center font-semibold">favorito entre</span>
                    <span className="flex justify-center font-semibold">huespedes</span></div>⚜️
                </div>
                <div className="flex flex-col w-auto">
                    <span className="flex justify-center font-semibold"> 159</span>
                    <span className="flex text-sm text-black font-semibold">reseñas</span>
                </div>
            </div>
            <div className="flex md:ml-8 md:w-full">
            <div className="flex gap-4 items-center pb-4 w-11/12">
              <div className="pl-6 md:pl-0">
                  <IoDiamond className="w-8 h-8 text-pink-500"/>
              </div>
            <div >
              <p className="text-lg font-semibold">Esto es una hallazgo excepcional</p>
              <p className="text-base">el alojamiento de suele estar reservado</p>
            </div>
          </div>
        </div>
    </div>  
    )
}