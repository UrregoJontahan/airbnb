export const registerUser = async (name: string, celphone: string, password: string): Promise<void> => {
    try {
      const response = await fetch('http://localhost:2000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, celphone, password }),
      });
  
      if (!response.ok) {
        throw new Error('Error al registrar usuario');
      }
  
      console.log("bien", await response.json());
    } catch (error) {
      console.error('Error de red:', error);
      throw error;
    }
  };
  
  export const redirectToGoogleLogin = (): void => {
    window.location.href = "http://localhost:2000/google";
  };
  
  export const redirectToFacebookLogin = (): void => {
    window.location.href = "http://localhost:2000/facebook";
  };
  