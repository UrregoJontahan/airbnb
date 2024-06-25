import axios from "axios";

const BACKEND_URL = "http://localhost:2000";

 export const getCoordinates = async (address: string) => {
  const response = await axios.get(`${BACKEND_URL}/api/location/coordinates`, {
    params: { address },
  });

  if (response.data) {
    return response.data;
  } else {
    throw new Error("No se encontraron coordenadas para la dirección proporcionada.");
  }
};

export const locationAutoComplete = async (query:any) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/location/autocomplete`, {
      params: { address: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener sugerencias de direcciones:", error);
  }
};
