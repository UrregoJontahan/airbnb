"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { FaAirbnb } from "react-icons/fa";
import { Mulish } from "next/font/google";
import { uploadImages, submitRoomForm } from "../../app/services/roomServices";
import axios from "axios";

const mulish = Mulish({
  weight: ["800"],
  subsets: ["latin"],
});

const BACKEND_URL = "http://localhost:2000";

const getCoordinates = async (address: string) => {
  const response = await axios.get(`${BACKEND_URL}/api/location/coordinates`, {
    params: { address },
  });

  if (response.data) {
    return response.data;
  } else {
    throw new Error("No se encontraron coordenadas para la dirección proporcionada.");
  }
};

export function RoomForm() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadForm, setUploadForm] = useState(false);
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [ coordinates , setCoordinates ] = useState<{latitude:number, longitude:number}|null>(null)
  const [boxAddress , setBoxAddress ] = useState(false)

  const handleImageUpload = async (files: FileList) => {
    setLoading(true);

    try {
      const urls = await uploadImages(files);
      setImageUrls(urls);
      setUploadSuccess(true);
    } catch (error) {
      console.error('Error de red:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddressChange = async (e: any) => {
    const { value } = e.target;
    setAddress(value);
    setBoxAddress(true)

    try {
      const response = await axios.get(`${BACKEND_URL}/api/location/autocomplete`, {
        params: { address: value }
      });
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error al obtener sugerencias de direcciones:", error);
    }
  };

  const handleAddressSuggestions = (suggestion: string) => {
    setAddress(suggestion);
    setBoxAddress(false);
  }

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const address = (form.querySelector('#location') as HTMLInputElement).value;
      if (!address) {
        alert("Por favor proporciona una dirección válida.");
        return;
      }

      const coords = await getCoordinates(address);
      setCoordinates(coords)
      formData.append('coordinates', `${coords.latitude},${coords.longitude}`);

      await submitRoomForm(formData, imageUrls);
      console.log('Habitación guardada exitosamente');
      setUploadForm(true);
      form.reset();
      setImageUrls([]);
      setUploadSuccess(false);
      setSuggestions([])
      setAddress("")
    } catch (error) {
      console.error('Error al guardar la habitación:', error);
      alert('Error al guardar la habitación');
    }
  };

  const handleBackForm = () => {
    setUploadForm(false);
  };

  return (
    <div>
      <Link href="/" className="flex relative top-4 font-bold text-pink-600 left-0 lg:left-14 w-48">
        <FaAirbnb className="text-4xl" />
        <span className={`${mulish.className} text-2xl font-bold hidden md:block lg:hidden`}>airbnb</span>
        <span className={`${mulish.className} text-2xl font-bold hidden lg:block`}>airbnb</span>
      </Link>
      <div className="flex items-center justify-center">
        <form className="flex flex-col border border-gray-300 p-12 gap-2 shadow-xl shadow-neutral-400" onSubmit={handleSubmitForm}>
          <label htmlFor="title">Título:</label>
          <input type="text" id="title" name="title" className="border border-gray-400 rounded-lg p-4" required />
  
          <label htmlFor="description">Descripción:</label>
          <textarea id="description" name="description" className="border border-gray-400 rounded-lg p-4" required></textarea>
  
          <label htmlFor="price">Precio:</label>
          <input type="number" id="price" name="price" className="border border-gray-400 rounded-lg p-4" required />
   
          <label htmlFor="location">Ubicación:</label>
          <input
            type="text"
            id="location"
            name="location"
            className="border border-gray-400 rounded-lg p-4"
            placeholder="agrega la direccion y la ciudad"
            value={address}
            onChange={handleAddressChange}
            autoComplete="off"
            required
          />
          {boxAddress && (
            <ul className="w-64 h-auto border border-gray-300 truncate cursor-pointer">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleAddressSuggestions(suggestion)} className="hover:bg-blue-400  pl-4">{suggestion}</li>
            ))}
            </ul>
          )}

          <label htmlFor="city">Ciudad:</label>
          <input type="text" required id="city" name="city" className="border border-gray-400 rounded-lg p-4" />
  
          <label htmlFor="capacity">Capacidad:</label>
          <input type="number" id="capacity" name="capacity" className="border border-gray-400 rounded-lg p-4" required />
  
          <label htmlFor="amenities">Comodidades (separadas por comas):</label>
          <input type="text" id="amenities" name="amenities" className="border border-gray-400 rounded-lg p-4" required />
  
          <div className="mb-3 flex flex-col">
            <div className="w-full h-auto">
              <input type="file" id="formFile" name="images" multiple onChange={(e) => handleImageUpload(e.target.files as FileList)} />
              <label className="form-file-label"></label>
            </div>
          </div>
          {loading && <p>Cargando...</p>}
          {uploadSuccess && <p>¡Carga exitosa!</p>}
  
          <button type="submit" className="w-full h-10 border bg-pink-600 hover:bg-pink-700 rounded-lg mt-4 text-white font-medium cursor-pointer">
            Enviar
          </button>
        </form>
      </div>
      {uploadForm && (
        <div className="fixed w-screen h-screen bg-white flex items-center justify-center top-0">
          <div className="fixed w-screen h-screen rounded-lg bg-white flex items-center justify-center flex-col border border-gray-400 p-4 gap-4">
            <p>Felicidades, cargaste tu habitación con éxito</p>
            <Link href="/" className="p-4 border border-gray-400 rounded-lg bg-pink-600 text-white font-medium">volver al inicio</Link>
            <button className="p-4 border border-gray-400 rounded-lg bg-pink-600 text-white font-medium" onClick={handleBackForm}>volver al formulario</button>
          </div>
        </div>
      )}
    </div>
  );
}


