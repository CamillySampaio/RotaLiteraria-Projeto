import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image'
import rosadosventos from '@/styles/images/rosadosventos.png'
import Head from 'next/head';
import ValidaCpf from "@/components/Validacpf";
import validarEmail from "@/components/Email";
import validarCep from '@/components/Cep';
import Alerta from '@/components/alert';


export default function Cadastro () {

const [cpfValido, setCpfValido] = useState(true);

const [EmailValido, setEmailValido] = useState(true);

const [cepValido, setCepValido] = useState(true);

const [erroDeSenha, setErroDeSenha] = useState(false);

const [formData, setFormData] = useState({
  Nome:"",
  CPF:"",
  Email:"",
  Senha:"",
  ConfirmaSenha:"",
  CEP:"",
  Estado:"",
  Cidade:"",
  Bairro:"",
  Rua:"",
  Numero:"",
});

const atualizarForm = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  if (name === "CPF") {
    const cpfEhValido = ValidaCpf(value);
    setCpfValido(cpfEhValido);
  }

  if (name === "Email") {
    const EmailValido = validarEmail(value);
    setEmailValido(EmailValido);
  }

  if (name === "CEP") {
    const cepValido = validarCep(value);
    setCepValido(cepValido);
  }

  

 


  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const enviarForm = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); 
  
  if (formData.Senha !== formData.ConfirmaSenha) {
    alert("As senhas não coincidem. Corrija antes de prosseguir.");
    return;
  }


  if (
    formData.Nome.trim() === "" ||
    formData.CPF.trim() === "" ||
    formData.Email.trim() === "" ||
    formData.Senha.trim() === "" ||
    formData.ConfirmaSenha.trim() === "" || 
    formData.Senha === formData.ConfirmaSenha ||
    formData.CEP.trim() === "" ||
    formData.Estado.trim() === "" ||
    formData.Cidade.trim() === "" ||
    formData.Bairro.trim() === "" ||
    formData.Rua.trim() === "" ||
    formData.Numero.trim() === ""
  ) {
    alert("Preencha todos os campos obrigatórios corretamente.");
    return;
  }

  Router.push('/login');
};



    return (
      <>

    <Head>
      <title> Cadastro | Rota Literária </title>
    </Head>
      <header className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav className="-mb-px flex flex-col sm:flex-row justify-between space-x-8 sm:items-center" aria-label="Tabs">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 mr-4">
            <Link href="/"> <Image className="absolute object-cover w-full h-full rounded-full" src={rosadosventos} alt="Slogan rosa dos ventos" /></Link>
            </div>
            <h1 className="text-2xl font-bold text-indigo-700">Rota Literária</h1>
          </div>
        </nav>
      </div>
        </header>
      
      <br />

        <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-white text-black">
  <section className="flex w-[30rem] flex-col space-y-10">
    <div className="text-center text-4xl font-medium text-indigo-800">Faça o seu cadastro</div>

    <div className='items-center font-bold text-indigo-800 text-center text-xl'>
      <p>Dados pessoais</p>
    </div>

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="text"
        id="Nome"
        name="Nome"
        value={formData.Nome}
        onChange={atualizarForm}
        required
        placeholder="Nome completo"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="text"
        id="CPF"
        name="CPF"
        value={formData.CPF}
        onChange={atualizarForm}
        required
        placeholder="CPF"
        className={`w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none ${
          cpfValido ? "" : "border-red-500"
        }`}
      />
      {!cpfValido && (
                  <p className="text-red-500">
                    CPF inválido.
                  </p>
                )}
    </div>

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="text"
        id="Email"
        name="Email"
        value={formData.Email}
        onChange={atualizarForm}
        required
        placeholder="Email"
        className={`w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none ${
          cpfValido ? "" : "border-red-500"
        }`}
      />
      {!EmailValido && (
                  <p className="text-red-500">
                    Email inválido.
                  </p>
                )}
    </div>

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="password"
        id="Senha"
        name="Senha"
        value={formData.Senha}
        onChange={atualizarForm}
        required
        placeholder="Senha"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
      
    </div>

   

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="password"
        id="ConfirmaSenha"
        name="ConfirmaSenha"
        value={formData.ConfirmaSenha}
        onChange={atualizarForm}
        required
        placeholder="Confirme sua senha"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>
    
    {erroDeSenha && (
                <p className="text-red-500">
                  As senhas não coincidem. Por favor, tente novamente.
                </p>
              )}

    <div className='items-center font-bold text-indigo-800 text-center text-xl'>
      <p>Localização</p>
    </div>

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="number"
        id="CEP"
        name="CEP"
        value={formData.CEP}
        onChange={atualizarForm}
        required
        placeholder="CEP"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <label
      htmlFor="Estado"
      className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none font-light"
      />
      <select
         id="Estado"
         name="Estado"
         value={formData.Estado}
         onChange={atualizarForm} 
         required
         className="w-full border-none bg-transparent outline-none italic focus:outline-none font-light">
          <option value="">Selecione o estado</option>
          <option value="ac">Acre (AC)</option>
          <option value="al">Alagoas (AL)</option>
          <option value="am">Amazonas (AM)</option>
          <option value="ap">Amapá (AP)</option>
          <option value="ba">Bahia (BA)</option>
          <option value="ce">Ceará (CE)</option>
          <option value="df">Distrito Federal (DF)</option>
          <option value="es">Espírito Santo (ES)</option>
          <option value="go">Goiás (GO)</option>
          <option value="ma">Maranhão (MA)</option>
          <option value="mg">Minas Gerais (MG)</option>
          <option value="ms">Mato Grosso do Sul (MS)</option>
          <option value="mt">Mato Grosso (MT)</option>
          <option value="pa">Pará (PA)</option>
          <option value="pb">Paraíba (PB)</option>
          <option value="pe">Pernambuco (PE)</option>
          <option value="pi">Piauí (PI)</option>
          <option value="pr">Paraná (PR)</option>
          <option value="rj">Rio de Janeiro (RJ)</option>
          <option value="rn">Rio Grande do Norte (RN)</option>
          <option value="ro">Rondônia (RO)</option>
          <option value="rr">Roraima (RR)</option>
          <option value="rs">Rio Grande do Sul (RS)</option>
          <option value="sc">Santa Catarina (SC)</option>
          <option value="se">Sergipe (SE)</option>
          <option value="sp">São Paulo (SP)</option>
          <option value="to">Tocantins (TO)</option>
      </select>
    </div>

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="text"
        id="Cidade"
        name="Cidade"
        value={formData.Cidade}
        onChange={atualizarForm}
        required
        placeholder="Cidade"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="text"
        id="Bairro"
        name="Bairro"
        value={formData.Bairro}
        onChange={atualizarForm}
        required
        placeholder="Bairro"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="text"
        id="Rua"
        name="Rua"
        value={formData.Rua}
        onChange={atualizarForm}
        required
        placeholder="Rua"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="text"
        id="Numero"
        name="Numero"
        value={formData.Numero}
        onChange={atualizarForm}
        required
        placeholder="Número"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <button className="transform rounded-sm bg-indigo-600 py-2 font-bold text-white duration-300 hover:bg-indigo-400" 
            onClick={enviarForm}>
      Criar conta
    </button>

  </section>
</main>


<br />

<footer className="bg-gray-100 shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <Image src={rosadosventos} alt="rosa dos ventos logo" priority className="h-36 w-36" />
        </div>
        <div className="text-indigo-800 text-xl">
          Desenvolvido por Camilly Lima Sampaio
        </div>
      </div>
    </footer>
</>
    )
}