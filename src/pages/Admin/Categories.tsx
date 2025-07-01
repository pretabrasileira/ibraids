import React from "react";

const mockCategories = [
  { id: 1, name: "Cabelo" },
  { id: 2, name: "Maquiagem" },
];

const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Categorias</h1>
        <button className="mb-4 bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Cadastrar Nova Categoria</button>
        <div className="grid gap-4">
          {mockCategories.map(c => (
            <div key={c.id} className="border border-amber-200 rounded-lg p-4 bg-white shadow flex justify-between items-center">
              <div className="font-bold text-[#8B4513]">{c.name}</div>
              <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Editar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories; 