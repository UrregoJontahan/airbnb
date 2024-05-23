"use client"

import React, { useEffect, useState } from 'react';
import { fetchRoomsById } from '../../app/services/getRooms';

export function DetailsRoomId({ id }: { id: string }) {
    const [rooms, setRooms] = useState<any | null>(null);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const roomsFetchId = await fetchRoomsById(id);
                setRooms(roomsFetchId);
            } catch (error) {
                console.error('Error fetching room details:', error);
            }
        };
        fetchRooms();
    }, [id]);

    console.log(rooms, "rooms")

    return (
        <div>
           holis
        </div>
    );
}


