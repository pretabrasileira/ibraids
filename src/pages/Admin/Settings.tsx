import React from "react";

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Configurações do Sistema</h1>
        <div className="bg-white border border-amber-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold text-[#8B4513] mb-2">Módulos</h2>
          <div className="text-gray-700 mb-2">Módulos ativos: Marketplace, Pagamentos, Gamificação</div>
        </div>
        <div className="bg-white border border-amber-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold text-[#8B4513] mb-2">Banco de Dados</h2>
          <div className="text-gray-700 mb-2">Banco: PostgreSQL (mock)</div>
        </div>
        <div className="bg-white border border-amber-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold text-[#8B4513] mb-2">Inteligência Artificial</h2>
          <div className="text-gray-700 mb-2">Reconhecimento facial: Ativo (mock)</div>
        </div>
        <div className="bg-white border border-amber-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold text-[#8B4513] mb-2">SMS</h2>
          <div className="text-gray-700 mb-2">Serviço: Twilio (mock)</div>
        </div>
        <div className="bg-white border border-amber-200 rounded-lg p-4">
          <h2 className="text-lg font-bold text-[#8B4513] mb-2">E-mail</h2>
          <div className="text-gray-700 mb-2">Serviço: SendGrid (mock)</div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 