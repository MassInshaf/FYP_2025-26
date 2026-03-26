import React from "react";

const Card = ({ title, description, imageUrl, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="focus:outline-none transform hover:scale-105 transition duration-300"
    >
      <div className="w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 md:h-80 object-cover"
          />
        )}

        <div className="py-6 px-6 md:px-8 whitespace-pre-line">
          {/* Gem + Shape in one card */}
          <div className="font-bold text-2xl md:text-3xl mb-3">{title || "Unknown"}</div>
          <p className="text-white/90 text-base md:text-lg">{description || ""}</p>
        </div>
      </div>
    </button>
  );
};

export default Card;
