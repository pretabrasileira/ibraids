import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, price, description, onClick }) => (
  <div className="border border-amber-200 rounded-lg p-4 bg-white shadow hover:shadow-lg transition cursor-pointer flex flex-col">
    <img src={image} alt={title} className="h-32 w-full object-cover rounded mb-2" />
    <div className="font-bold text-[#8B4513] text-lg mb-1">{title}</div>
    <div className="text-gray-600 text-sm mb-2">{description}</div>
    <div className="flex items-center justify-between mt-auto">
      <span className="text-[#8B4513] font-bold text-lg">R$ {price}</span>
      {onClick && <button className="bg-[#8B4513] text-white px-3 py-1 rounded hover:bg-[#6a2e0a] font-bold ml-2" onClick={onClick}>Ver Detalhes</button>}
    </div>
  </div>
);

export default ServiceCard; 