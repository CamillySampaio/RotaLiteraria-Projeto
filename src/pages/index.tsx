import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import rosadosventos from '@/styles/images/rosadosventos.png'
import funkopop from '@/styles/images/funkopop.jpeg';
import Head from 'next/head';
import card1 from '@/styles/images/card1.png';
import card2 from '@/styles/images/card2.png';
import card3 from '@/styles/images/card3.png';
import { Card } from '@/components';




export default function Home() {

  return (
    <>
    <Head>
      <title> Rota Literária </title>
    </Head>
    
    <div className="min-h-screen bg-white flex flex-col justify-between">
    <header className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav className="-mb-px flex flex-col sm:flex-row justify-between space-x-8 sm:items-center" aria-label="Tabs">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 mr-4">
             
              <Link href="/"> <Image className="absolute object-cover w-full h-full rounded-full" src={rosadosventos} alt="Slogan rosa dos ventos" /></Link>

            </div>
            <h1 className="text-2xl font-bold text-indigo-700">Rota Literária</h1>
          </div>

          <div className='flex space-x-8 sm:justify-center sm:flex-grow'>
            <Link href="/produtos" passHref>
              <div className="border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg link link-underline link-underline-black text-black">Produtos</div>
            </Link>

            <Link href="/vendas" passHref>
              <div className="border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg link link-underline link-underline-black text-black">Vendas</div>
            </Link>

            <Link href="/trocas" passHref>
              <div className="border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg link link-underline link-underline-black text-black">Trocas</div>
            </Link>
          </div>
          

          <div className='flex space-x-8'>
            <Link href="/login" passHref>
              <div className="inline-block text-white font-bold py-2 px-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 border border-transparent transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out">Login</div>
            </Link>
          </div>
        </nav>
      </div>
        </header>

<br />
        
        <main className="flex-1">
        <div className="bg-white relative flex items-center justify-center overflow-hidden z-50">
      <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
          <div className="relative">
            <div className="lg:max-w-xl lg:pr-5 relative z-40">

              <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                Encare o mundo dos
                <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4">Livros</span>
              </h2>
              <p className="text-base text-gray-700">Compre, venda e troque livros em nosso site.</p>
              <p className="text-base text-gray-700">Uma plataforma ampla para amantes do mundo literário.</p>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <Link href="/cadastro" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
                  Cadastre-se
                </Link>
                
                <Link href="/" aria-label="" className="group inline-flex items-center font-semibold text-g1">
                  Saiba mais                  
                </Link>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <div className="mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none animated-image">
              <Image src={funkopop} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40">
        About Us
      </div>
      
    </div>

    <br />

    <div className='items-center font-bold text-indigo-800 text-center text-size'>
  <p> Acesse o Rota Literária </p>
</div>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Card
            title="Compre"
            description="Compre diversos livros vendidos por editoras ou por usuários do site, de diversos gêneros e diveros autores."
            imageSrc={card1}
            gradientFrom="indigo-50"
            gradientTo="blue-50"
          /> 
          <Card
            title="Venda"
            description="Venda livros ocupando espaço na sua plateleira na nossa plataforma, garantimos uma venda segura."
            imageSrc={card2}
            gradientFrom="pink-50"
            gradientTo="red-50"
          />
          <Card
            title="Troque"
            description="Quer muito ler um livro em específico e tem livros sobrando na prateleira? Troque com leitores de todo o Brasil."
            imageSrc={card3}
            gradientFrom="fuchsia-50"
            gradientTo="pink-50"
          />
        </div>
      </div>
    </section>


        </main>

      
        <footer className="bg-gray-100 shadow">
          <div className="container mx-auto py-4 flex justify-between items-center">
            <div>
              <Image src={rosadosventos} alt="rosa dos ventos logo" priority className="h-36 w-36" />
            </div>
            <div className="text-indigo-800 text-xl">
              Desenvolvido por Camilly Lima Sampaio
            </div>
          </div>
        </footer>
      </div>
    </>
 );
}
