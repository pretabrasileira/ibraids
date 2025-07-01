import React from "react";

const mockUsers = [
  { id: 1, name: "Maria Silva", email: "maria@email.com", role: "Empreendedor" },
  { id: 2, name: "Ana Costa", email: "ana@email.com", role: "Consumidor" },
];

const Users: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Usuários</h1>
        <button className="mb-4 bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Cadastrar Novo Usuário</button>
        <div className="grid gap-4">
          {mockUsers.map(u => (
            <div key={u.id} className="border border-amber-200 rounded-lg p-4 bg-white shadow flex justify-between items-center">
              <div>
                <div className="font-bold text-[#8B4513]">{u.name}</div>
                <div className="text-xs text-gray-500">{u.email} - {u.role}</div>
              </div>
              <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Editar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users; 