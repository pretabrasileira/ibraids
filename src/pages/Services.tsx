import React from "react";

const mockServices = [
  { id: "1", title: "Tranças Box Braids", status: "Ativo" },
  { id: "2", title: "Maquiagem Social", status: "Inativo" },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Meus Serviços</h1>
        <button className="mb-4 bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Cadastrar Novo Serviço</button>
        <div className="grid gap-4">
          {mockServices.map(s => (
            <div key={s.id} className="border border-amber-200 rounded-lg p-4 bg-white shadow flex justify-between items-center">
              <div>
                <div className="font-bold text-[#8B4513]">{s.title}</div>
                <div className="text-xs text-gray-500">Status: {s.status}</div>
              </div>
              <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Editar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 