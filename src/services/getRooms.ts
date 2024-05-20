const URLRomms ="http://localhost:2000/rooms"

export const fetchRooms = async ():Promise<any> => {
    try{
        const response = await fetch( URLRomms );
        const data = await response.json();

        return data

    } catch{
        console.error("error")
    }
}