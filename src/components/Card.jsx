import React from 'react';
import Image from 'next/image'; 


const Card = ({ title, description, imageSrc, gradientFrom, gradientTo,}) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className={`h-full rounded-xl shadow-cla-${gradientTo.split('-')[1]} bg-gradient-to-r from-${gradientFrom} to-${gradientTo} overflow-hidden`}>
        <Image className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={imageSrc} alt="blog" />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>

        </div>
      </div>
    </div>
  );
};

export default Card;