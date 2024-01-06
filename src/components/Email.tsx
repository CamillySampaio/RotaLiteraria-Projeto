export default function validarEmail(email: string): boolean {
    const constarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return constarEmail.test(email);
  };