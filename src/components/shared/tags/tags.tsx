export function Tags (){
    return(
       <div className="hidden md:block">
         <div className="flex flex-row flex-nowrap list-none">
            <ul className="flex flex-row flex-nowrap list-none gap-x-10 mx-auto  relative left-16  justify-center text-base text-gray-500 ">
                  <li className=" hover:text-black cursor-pointer ">Estadias</li>
                  <li className=" hover:text-black cursor-pointer ">Experiencias</li>
                  <li className=" hover:text-black cursor-pointer ">Experiencias en linea</li>
            </ul>
        </div>
       </div>
    )
}