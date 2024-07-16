export function ReservationCosts ({room}:any){
    return(
        <div>
            <p className="flex justify-center text-sm mt-4">No se hará ningún cargo por el momento</p>
            <section className="flex justify-center flex-col mt-4 p-4">
                <span className="flex ml-5 text-lg mt-3">
                    <p className="underline">${room.price}x5 noches</p>
                    <p className="ml-auto mr-5">$269 USD</p>
                </span>
                <span className="flex ml-5 text-lg mt-3">
                    <p className="underline">Tarifa de limpieza</p>
                    <p className="ml-auto mr-5">$14 USD</p>
                </span>
                <span className="flex ml-5 text-lg mt-3">
                    <p className="underline">Tarifa por servicio de Airbnb</p>
                    <p className="ml-auto mr-5">$55 USD</p>
                </span>
            </section>
            <div className="m-3 border-t">
                <span className="text-lg font-semibold flex pt-2 m-2">
                    <p className="text-lg">Total sin Incluir impuestos</p>
                    <p className="ml-auto">$355 USD</p>
                </span>
            </div>
        </div>
    )
}