import React from "react";

const mockProducts = [
  { id: 1, name: "Shampoo Afro", price: 30 },
  { id: 2, name: "Creme de Pentear", price: 25 },
];

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Produtos</h1>
        <button className="mb-4 bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Cadastrar Novo Produto</button>
        <div className="grid gap-4">
          {mockProducts.map(p => (
            <div key={p.id} className="border border-amber-200 rounded-lg p-4 bg-white shadow flex justify-between items-center">
              <div className="font-bold text-[#8B4513]">{p.name}</div>
              <div className="text-xs text-gray-500">R$ {p.price}</div>
              <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Editar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products; 