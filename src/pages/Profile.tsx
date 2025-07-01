import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Meu Perfil</h1>
        <div className="bg-white border border-amber-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold text-[#8B4513] mb-2">Dados Pessoais</h2>
          <div className="text-gray-700 mb-2">Nome: <span className="font-medium">Usuário Exemplo</span></div>
          <div className="text-gray-700 mb-2">E-mail: <span className="font-medium">usuario@email.com</span></div>
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold mt-2">Editar Dados</button>
        </div>
        <div className="bg-white border border-amber-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold text-[#8B4513] mb-2">Endereço</h2>
          <div className="text-gray-700 mb-2">Endereço cadastrado...</div>
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold mt-2">Cadastrar Novo Endereço</button>
        </div>
        <div className="bg-white border border-amber-200 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-bold text-[#8B4513] mb-2">Documentos</h2>
          <div className="text-gray-700 mb-2">Nenhum documento enviado.</div>
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold mt-2">Enviar Documento</button>
        </div>
        <div className="bg-white border border-amber-200 rounded-lg p-4">
          <h2 className="text-lg font-bold text-[#8B4513] mb-2">Biometria</h2>
          <div className="text-gray-700 mb-2">Biometria não realizada.</div>
          <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold mt-2">Realizar Biometria</button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 