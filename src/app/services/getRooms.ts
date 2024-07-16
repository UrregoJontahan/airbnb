const URLRooms ="http://localhost:2000"

export const fetchRooms = async ():Promise<any> => {
    try{
        const response = await fetch( `${URLRooms}/rooms` );
        const data = await response.json();

        return data

    } catch{
        console.error("error")
    }
}

export const fetchRoomsById = async (id: any): Promise<any> => {
    try {
        const response = await fetch(`http://localhost:2000/rooms/${id}`);
        const data = await response.json();
        console.log(data)
        return data;

    } catch (error) {
        console.error("Error fetching room:", error);
    }
};