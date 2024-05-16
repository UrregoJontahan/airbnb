"use client"

import Link from "next/link"
import { useState } from "react";
 
export function Login(){
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [celphone, setCelphone] = useState('');
  const [error, setError] = useState(false)

  const handleSubmitLogin = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:2000/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password, celphone }),
      });
      if (response.ok) {
        console.log("Inicio de sesión exitoso");
      } else {
        setError(true)
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  }

  const handleGoogleLogin = () => {
    
    window.location.href = "http://localhost:2000/google";
  };

  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:2000/auth/Facebook"
  };


   return(
    <div className="flex items-center justify-center h-screen">
    <div className="w-2/5 h-4/5 rounded-md border border-gray-400 shadow-xl shadow-neutral-700">
      <div className="text-base font-medium flex">
        <Link href={"/"} className="flex pt-4 pl-8">x</Link>
        <span className="flex text-base font-medium p-4 relative left-1/3">Iniciar Sesión</span>
      </div>
      <div className="flex w-full border-t border-gray-300 flex-col">
        <h2 className="font-medium flex p-4 pl-8 ">Te damos la bienvenida a Airbnb</h2>
        <form className="flex flex-col pl-8 pr-8" method="POST" onSubmit={handleSubmitLogin}>
          <input className="w-full h-10 border border-gray-400 rounded-t-lg pl-4" type="text" value={name} placeholder="Nombre de Usuario" onChange={(e) => setName(e.target.value)} required/>
          <input className="w-full h-10 border-l border-r border-gray-400 pl-4" placeholder="Numero de telefono" type="text" value={celphone} onChange={(e) => setCelphone(e.target.value)}  />
          <input className="w-full h-10 border border-gray-400 pl-4 rounded-b-lg" type="password" value={password} placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
          <p className="text-xs pt-2"> Te vamos a confirmar el numero por telefono o mensaje de texto.Sujeto a las tarifas estandar para mensajes y datos</p>
          <input type="submit" className="w-full h-10 border bg-pink-600 rounded-lg mt-4 text-white font-medium cursor-pointer" value="Continúa"/>
          {error && (
            <div className="text-red-700 text-xs flex justify-center ">Datos incorrectos, intenta de nuevo</div>
          )}
          <span className="flex justify-center pt-4">o</span>
          <div className="flex flex-col pt-8 gap-4">
            <button className="w-full h-10 border border-gray-400 rounded-lg text-black cursor-pointer hover:bg-gray-200" onClick={handleFacebookLogin}>Continúa con Facebook</button>
            <button className="w-full h-10 border border-gray-400 rounded-lg pl-4 cursor-pointer hover:bg-gray-200" onClick={handleGoogleLogin}>Continúa con Google</button>
          </div>
        </form>
      </div>
    </div>
  </div>
   )
}