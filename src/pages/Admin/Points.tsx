import React from "react";

const mockPoints = 1000;

const Points: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Pontos (Gamificação)</h1>
        <div className="bg-white border border-amber-200 rounded-lg p-4 mb-4">
          <div className="text-gray-700 mb-2">Saldo de pontos: <span className="font-bold text-green-700">{mockPoints}</span></div>
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold mt-2">Cadastrar/Trocar Pontos</button>
        </div>
      </div>
    </div>
  );
};

export default Points; 