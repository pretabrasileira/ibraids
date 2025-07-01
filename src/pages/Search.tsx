import React, { useState } from "react";
// Importe dados mockados e tipos conforme necessário

const mockCategories = [
  { id: "cabelo", name: "Cabelo" },
  { id: "pele", name: "Pele" },
  { id: "maquiagem", name: "Maquiagem" },
  { id: "spa", name: "Spa" },
  { id: "manicure", name: "Manicure" },
  { id: "pedicure", name: "Pedicure" },
  { id: "cilios", name: "Cílios" },
];

const mockEntrepreneurs = [
  {
    id: "1",
    name: "Maria Trancista",
    rating: 4.9,
    distance: 2.1,
    services: 120,
    description: "Especialista em tranças afro e penteados culturais.",
    price: 150,
    sponsored: true,
    category: "cabelo",
    image: "/placeholder.svg?height=100&width=100",
    priceLevel: "$$",
  },
  {
    id: "2",
    name: "Ana Maquiadora",
    rating: 4.7,
    distance: 3.5,
    services: 80,
    description: "Maquiagem social e artística.",
    price: 90,
    sponsored: false,
    category: "maquiagem",
    image: "/placeholder.svg?height=100&width=100",
    priceLevel: "$",
  },
];

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const filtered = mockEntrepreneurs.filter(e =>
    (!category || e.category === category) &&
    (!query || e.name.toLowerCase().includes(query.toLowerCase()) || e.description.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Buscar Serviços</h1>
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border border-amber-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            placeholder="Buscar por serviço, profissional..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <select
            className="border border-amber-200 rounded px-3 py-2 text-[#8B4513]"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">Todas categorias</option>
            {mockCategories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-4">
          {filtered.map(e => (
            <div key={e.id} className="border border-amber-200 rounded-lg p-4 flex gap-4 bg-white shadow hover:shadow-lg transition cursor-pointer">
              <img src={e.image} alt={e.name} className="h-20 w-20 rounded-full object-cover border-2 border-[#8B4513]" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#8B4513] text-lg">{e.name}</span>
                  {e.sponsored && <span className="bg-red-200 text-red-800 text-xs px-2 py-0.5 rounded">Patrocinado</span>}
                </div>
                <div className="text-gray-600 text-sm mb-1">{e.description}</div>
                <div className="flex gap-4 text-xs text-gray-500 mb-1">
                  <span>Nota: <b className="text-green-700">{e.rating}</b></span>
                  <span>Distância: <b>{e.distance} km</b></span>
                  <span>Serviços: <b>{e.services}</b></span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-[#8B4513] font-bold text-lg">R$ {e.price}</span>
                  <span className="text-xs text-gray-500">{e.priceLevel}</span>
                </div>
              </div>
              <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold">Ver Perfil</button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center text-gray-500 py-8">Nenhum profissional encontrado.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search; 