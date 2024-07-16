export function UserHost ({host}:any){

  return(  
    <div className="flex md:ml-14 md:w-full border-b">
        <div className="flex gap-4 items-center pb-4 m-2 w-11/12 md:w-full">
            <div className="pl-6 md:pl-0">
                <div className="w-14 h-14 rounded-full bg-gray-800"></div>
            </div>
            <div >
            <p className="text-lg font-semibold">Anfintrión: {host}</p>
            <p className="text-base">Superanfitrión ,6 años anfitrionando</p>
            </div>
        </div>
    </div>
  )
}