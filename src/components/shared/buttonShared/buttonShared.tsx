export function ButtonShared ({room}:any){

    const handleShare = () => {
        if (navigator.share) {
          navigator.share({
            title: room.title,
            text: `Mira esta habitación en ${room.location}`,
            url: window.location.href + `#room-${room.id}`
          }).catch((error) => console.log('Error al compartir', error));
        } else {
          console.log('La función de compartir no está disponible en este navegador.');
        }
      };

    return(
        <button
        className="mt-2 bg-blue-500 text-white p-2 rounded"
        onClick={handleShare}
            >
        Compartir
      </button>
    )
}