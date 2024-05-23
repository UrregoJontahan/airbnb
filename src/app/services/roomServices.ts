export const uploadImages = async (files: FileList): Promise<string[]> => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }
  
    try {
      const response = await fetch('http://localhost:2000/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Error al cargar imágenes');
      }
  
      const data = await response.json();
      return data.imageUrls;
    } catch (error) {
      console.error('Error de red:', error);
      throw error;
    }
  };
  
  interface RoomData {
    title: string;
    description: string;
    price: number;
    city:string;
    location: string;
    capacity: number;
    amenities: string;
    photos: string[];
  }
  
  export const submitRoomForm = async (formData: FormData, imageUrls: string[]): Promise<void> => {
    const data: RoomData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      price: Number(formData.get('price')),
      city: formData.get("city") as string,
      location: formData.get('location') as string,
      capacity: Number(formData.get('capacity')),
      amenities: formData.get('amenities') as string,
      photos: imageUrls,
    };
  
    try {
      const response = await fetch('http://localhost:2000/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Error al guardar la habitación');
      }
    } catch (error) {
      console.error('Error de red:', error);
      throw error;
    }
  };
  