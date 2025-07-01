import React from "react";

const mockBank = {
  bank: "Banco Exemplo",
  agency: "1234",
  account: "56789-0",
  type: "Corrente",
};

const BankAccount: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Conta Bancária</h1>
        <div className="bg-white border border-amber-200 rounded-lg p-4 mb-4">
          <div className="text-gray-700 mb-2">Banco: <span className="font-medium">{mockBank.bank}</span></div>
          <div className="text-gray-700 mb-2">Agência: <span className="font-medium">{mockBank.agency}</span></div>
          <div className="text-gray-700 mb-2">Conta: <span className="font-medium">{mockBank.account}</span></div>
          <div className="text-gray-700 mb-2">Tipo: <span className="font-medium">{mockBank.type}</span></div>
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold mt-2">Editar Conta</button>
        </div>
      </div>
    </div>
  );
};

export default BankAccount; 