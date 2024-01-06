export default function validarCep(cep: string): boolean {
    const constarCep = /^\d{8}$/;
  
    return constarCep.test(cep);
  };