import React, { useState } from 'react';


const SenhaValidacao: React.FC<{ senha: string; confirmaSenha: string }> = ({
  senha,
  confirmaSenha,
}) => {
  const [erroDeSenha, setErroDeSenha] = useState<boolean>(false);

  const validarSenha = () => {
    if (senha === confirmaSenha) {
      setErroDeSenha(false); 
    } else {
      setErroDeSenha(true); 
    }
  };

  React.useEffect(() => {
    validarSenha();
  }, [senha, confirmaSenha]);

  return (
    <div>
      {erroDeSenha && <span style={{ color: 'red' }}>As senhas não coincidem.</span>}
    </div>
  );
};

export default SenhaValidacao;
