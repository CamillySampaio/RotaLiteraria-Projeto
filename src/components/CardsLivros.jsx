import React from 'react';
import Image from 'next/image'; 

const CardsLivros = ({ imageSrc, title, price }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto bg-white">
      <Image
        className="object-cover w-full rounded-md h-72 xl:h-80"
        src={imageSrc}
        alt={title}
      />
      <h4 className="mt-2 text-lg font-medium text-gray-700  text-indigo-800">
        {title}
      </h4>
      <p className="text-blue-500">{price}</p>

      <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
        <span className="mx-1">Comprar agora</span>
      </button>
    </div>
  );
};

export default CardsLivros;