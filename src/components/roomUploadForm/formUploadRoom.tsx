"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { FaAirbnb } from "react-icons/fa";
import { Mulish } from "next/font/google";
import { uploadImages, submitRoomForm } from "../../services/roomServices";

const mulish = Mulish({
  weight: ["800"],
  subsets: ["latin"],
});

export function RoomForm() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadForm, setUploadForm] = useState(false);

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

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await submitRoomForm(formData, imageUrls);
      console.log('Habitación guardada exitosamente');
      setUploadForm(true);
      form.reset();
      setImageUrls([]);
      setUploadSuccess(false);
    } catch (error) {
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
          <input type="text" id="location" name="location" className="border border-gray-400 rounded-lg p-4" required />
  
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
        <div className="w-full h-full bg-white absolute flex items-center justify-center top-0">
          <div className="absolute w-auto h-auto rounded-lg bg-white flex items-center justify-center flex-col border border-gray-400 p-4 gap-4">
            <p>Felicidades, cargaste tu habitación con éxito</p>
            <Link href="/" className="p-4 border border-gray-400 rounded-lg bg-pink-600 text-white font-medium">volver al inicio</Link>
            <button className="p-4 border border-gray-400 rounded-lg bg-pink-600 text-white font-medium" onClick={handleBackForm}>volver al formulario</button>
          </div>
        </div>
      )}
    </div>
  );
}

  