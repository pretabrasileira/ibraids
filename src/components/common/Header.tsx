import React from "react";

const Header: React.FC = () => (
  <header className="w-full bg-white border-b border-amber-200 flex items-center justify-between px-4 py-2 shadow-sm">
    <div className="flex items-center gap-2">
      <img src="/logo.svg" alt="Ibraids" className="h-8 w-8" />
      <span className="text-xl font-bold text-[#8B4513]">ibraids</span>
    </div>
    <div className="flex items-center gap-4">
      {/* Placeholder para menu do usuário */}
      <span className="text-gray-500">Usuário</span>
    </div>
  </header>
);

export default Header; 