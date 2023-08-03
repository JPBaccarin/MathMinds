// src/Card.js
import React from 'react';



const Cardpost = ({ title, description, linkUrl, imageUrl, imageAlt }) => {
  return (
    <div className="bg-gray-700 shadow-md text-white rounded-lg p-4 m-2">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-32 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="">{description}</p>
      <a href={linkUrl} className="text-blue-500 mt-2 inline-block">
        Leia mais
      </a>
    </div>
  );
};

export default Cardpost;
