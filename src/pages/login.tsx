import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import rosadosventos from '@/styles/images/rosadosventos.png'
import funkopop from '@/styles/images/funkopop.jpeg';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import google from '@/styles/images/google.png'
import Head from 'next/head';

export default function Login () {
    return (
      <>

    <Head>
      <title> Entrar | Rota Literária </title>
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
    <div className="text-center text-4xl font-medium text-indigo-800">Faça o seu login</div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="text"
        placeholder="Email"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
      <input
        type="password"
        placeholder="Senha"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <button
      className="transform rounded-sm bg-indigo-600 py-2 font-bold text-white duration-300 hover:bg-indigo-400">
      Entrar
    </button>

    <a
      href="#"
      className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
      >Esqueceu sua senha?</a>

    <p className="text-center text-lg">Ainda não tem uma conta?
    <Link href="/cadastro" className="font-medium text-indigo-500 underline-offset-4 hover:underline"> Cadastre-se</Link>
    </p>
  </section>
</main>

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