import Image from "next/image";

export function StayImages(
  { photos }: { photos?: string[] }
) {
  if (!photos || photos.length === 0) {
    return <div className="flex justify-center">Cargando...</div>;
  }

  return (
    <div className="flex p-4 justify-center w-full">
      <div className="w-11/12 flex">
        <div className="flex-none w-[600px] h-[550px] overflow-hidden">
          <Image 
            src={photos[0]} 
            alt="Foto 1" 
            width={600} 
            height={400} 
            className="object-cover w-full h-full rounded-l-2xl transition duration-300 ease-in-out transform hover:brightness-75" 
          />
        </div>
        <div className="grid grid-cols-2 justify-center gap-4 rounded-r-2xl ml-4 overflow-hidden w-full h-[550px] ">
          {photos.slice(1).map((photo, index) => (
            <div key={index + 1}>
              <Image 
                src={photo} 
                alt={`Foto ${index + 2}`} 
                width={200} 
                height={200} 
                className="w-72 h-[270px] transition duration-300 ease-in-out transform hover:brightness-75" 
              />
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
}
