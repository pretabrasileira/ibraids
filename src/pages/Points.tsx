import React from "react";

const mockPoints = 120;
const mockHistory = [
  { id: 1, desc: "+10 pontos por avaliação", date: "10/06/2024" },
  { id: 2, desc: "+5 pontos por serviço contratado", date: "09/06/2024" },
];

const Points: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Meus Pontos</h1>
        <div className="bg-white border border-amber-200 rounded-lg p-4 mb-4">
          <div className="text-gray-700 mb-2">Saldo de pontos: <span className="font-bold text-green-700">{mockPoints}</span></div>
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold mt-2">Trocar por desconto</button>
        </div>
        <div className="bg-white border border-amber-200 rounded-lg p-4">
          <h2 className="text-lg font-bold text-[#8B4513] mb-2">Histórico de Pontuação</h2>
          <ul className="text-gray-700">
            {mockHistory.map(h => (
              <li key={h.id} className="mb-1 flex justify-between"><span>{h.desc}</span><span className="text-xs text-gray-500">{h.date}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Points; 