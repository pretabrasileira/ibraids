import React from "react";

interface EntrepreneurCardProps {
  avatar: string;
  name: string;
  rating: number;
  totalServices: number;
  onClick?: () => void;
}

const EntrepreneurCard: React.FC<EntrepreneurCardProps> = ({ avatar, name, rating, totalServices, onClick }) => (
  <div className="border border-amber-200 rounded-lg p-4 bg-white shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center">
    <img src={avatar} alt={name} className="h-20 w-20 rounded-full object-cover border-2 border-[#8B4513] mb-2" />
    <div className="font-bold text-[#8B4513] text-lg mb-1">{name}</div>
    <div className="text-yellow-500 mb-1">{Array.from({ length: 5 }, (_, i) => (
      <span key={i}>{i < Math.round(rating) ? "★" : "☆"}</span>
    ))} <span className="text-xs text-gray-500">({rating.toFixed(1)})</span></div>
    <div className="text-xs text-gray-500 mb-2">{totalServices} serviços realizados</div>
    {onClick && <button className="bg-[#8B4513] text-white px-3 py-1 rounded hover:bg-[#6a2e0a] font-bold" onClick={onClick}>Ver Perfil</button>}
  </div>
);

export default EntrepreneurCard; 