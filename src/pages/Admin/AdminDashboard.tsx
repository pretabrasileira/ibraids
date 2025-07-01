import React from "react";

const mockMetrics = {
  activeUsers: 120,
  loggedUsers: 80,
  deactivatedUsers: 5,
  monthlyRevenue: 5000,
  semestralRevenue: 25000,
  yearlyRevenue: 48000,
};

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex">
      <aside className="w-64 bg-[#8B4513] text-white p-6 space-y-4 min-h-screen">
        <h2 className="text-xl font-bold mb-6">Administração</h2>
        <nav className="flex flex-col gap-2">
          <a href="/admin/users" className="hover:underline">Usuários</a>
          <a href="/admin/categories" className="hover:underline">Categorias</a>
          <a href="/admin/products" className="hover:underline">Produtos</a>
          <a href="/admin/ads" className="hover:underline">Anúncios</a>
          <a href="/admin/courses" className="hover:underline">Cursos</a>
          <a href="/admin/points" className="hover:underline">Pontos</a>
          <a href="/admin/settings" className="hover:underline">Configurações</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-6">Dashboard do Administrador</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-200 text-blue-900 rounded-lg p-6 text-center font-bold text-xl shadow">Usuários Ativos: {mockMetrics.activeUsers}</div>
          <div className="bg-green-200 text-green-900 rounded-lg p-6 text-center font-bold text-xl shadow">Usuários Logados: {mockMetrics.loggedUsers}</div>
          <div className="bg-red-200 text-red-900 rounded-lg p-6 text-center font-bold text-xl shadow">Descadastrados: {mockMetrics.deactivatedUsers}</div>
          <div className="bg-yellow-200 text-yellow-900 rounded-lg p-6 text-center font-bold text-xl shadow col-span-1 md:col-span-3">Faturamento Mensal: R$ {mockMetrics.monthlyRevenue}</div>
          <div className="bg-orange-200 text-orange-900 rounded-lg p-6 text-center font-bold text-xl shadow col-span-1 md:col-span-3">Faturamento Semestral: R$ {mockMetrics.semestralRevenue}</div>
          <div className="bg-purple-200 text-purple-900 rounded-lg p-6 text-center font-bold text-xl shadow col-span-1 md:col-span-3">Faturamento Anual: R$ {mockMetrics.yearlyRevenue}</div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard; 