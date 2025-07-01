import React, { useState } from "react";

const Marketplace: React.FC = () => {
  const [tab, setTab] = useState<"empreendedor" | "consumidor">("empreendedor");

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Marketplace</h1>
        <div className="flex gap-2 mb-6">
          <button
            className={`px-4 py-2 rounded font-bold border ${tab === "empreendedor" ? "bg-[#8B4513] text-white" : "bg-white text-[#8B4513] border-[#8B4513]"}`}
            onClick={() => setTab("empreendedor")}
          >
            Empreendedor
          </button>
          <button
            className={`px-4 py-2 rounded font-bold border ${tab === "consumidor" ? "bg-[#8B4513] text-white" : "bg-white text-[#8B4513] border-[#8B4513]"}`}
            onClick={() => setTab("consumidor")}
          >
            Consumidor
          </button>
        </div>
        {tab === "empreendedor" ? (
          <div>
            <h2 className="text-xl font-bold text-[#8B4513] mb-2">Produtos e Cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-amber-200 rounded-lg p-4 bg-white shadow">
                <div className="font-bold text-[#8B4513]">Produto Exemplo</div>
                <div className="text-gray-600 text-sm mb-2">Descrição do produto...</div>
                <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Comprar</button>
              </div>
              <div className="border border-amber-200 rounded-lg p-4 bg-white shadow">
                <div className="font-bold text-[#8B4513]">Curso Exemplo</div>
                <div className="text-gray-600 text-sm mb-2">Descrição do curso...</div>
                <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Inscrever-se</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-[#8B4513] mb-2">Serviços Disponíveis</h2>
            <div className="grid gap-4">
              <div className="border border-amber-200 rounded-lg p-4 bg-white shadow">
                <div className="font-bold text-[#8B4513]">Serviço Exemplo</div>
                <div className="text-gray-600 text-sm mb-2">Descrição do serviço...</div>
                <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Contratar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace; 