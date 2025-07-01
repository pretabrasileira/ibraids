import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sortServicesForConsumer } from "../utils/sortProfessionals";
import { getDistanceInKm } from "../utils/distance";
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
    completedServices: 120,
    addresses: [{ lat: -23.55052, lng: -46.633308 }],
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

const mockServices = [
  {
    id: "1",
    entrepreneurId: "1",
    title: "Tranças Box Braids",
    description: "Tranças box braids profissionais com cabelo sintético de alta qualidade",
    category: "cabelo",
    price: 150.0,
    isSponsored: true,
    sponsoredType: "mensal",
    sponsoredUntil: "2024-07-31",
    images: ["/placeholder.svg?height=200&width=300"],
  },
  {
    id: "2",
    entrepreneurId: "1",
    title: "Tranças Nagô",
    description: "Tranças nagô tradicionais com técnica ancestral",
    category: "cabelo",
    price: 120.0,
    isSponsored: false,
    images: ["/placeholder.svg?height=200&width=300"],
  },
];

const mockConsumer = {
  id: "2",
  name: "Ana Paula Costa",
  addresses: [
    {
      id: "a2",
      street: "Av. das Flores",
      number: "200",
      neighborhood: "Jardins",
      city: "São Paulo",
      state: "SP",
      zipCode: "01400-000",
      lat: -23.561684,
      lng: -46.655981,
      isMain: true,
    },
  ],
};

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState<any>(null);
  const [orderedServices, setOrderedServices] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Seleciona endereço principal do consumidor
    const mainAddress = mockConsumer.addresses?.find((a) => a.isMain) || null;
    setAddress(mainAddress);
  }, []);

  useEffect(() => {
    if (!address) return;
    // Filtra e ordena serviços
    const filtered = mockServices.filter(s =>
      (!category || s.category === category) &&
      (!query || s.title.toLowerCase().includes(query.toLowerCase()) || s.description.toLowerCase().includes(query.toLowerCase()))
    );
    const ordered = sortServicesForConsumer(filtered, mockEntrepreneurs, address);
    setOrderedServices(ordered);
  }, [query, category, address]);

  if (!address) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="bg-white border border-amber-200 rounded-lg p-8 shadow">
          <h2 className="text-xl font-bold text-[#8B4513] mb-2">Cadastre um endereço para buscar profissionais na sua região</h2>
          {/* Aqui pode ser exibido um botão/link para o AddressForm */}
        </div>
      </div>
    );
  }

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
          {orderedServices.map(s => {
            const entrepreneur = mockEntrepreneurs.find(e => e.id === s.entrepreneurId);
            return (
              <div key={s.id} className="border border-amber-200 rounded-lg p-4 flex gap-4 bg-white shadow hover:shadow-lg transition cursor-pointer">
                <img src={entrepreneur?.avatar} alt={entrepreneur?.name} className="h-20 w-20 rounded-full object-cover border-2 border-[#8B4513]" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#8B4513] text-lg">{entrepreneur?.name}</span>
                    {s.isSponsored && s._sponsoredValid && (
                      <span className="bg-red-200 text-red-800 text-xs px-2 py-0.5 rounded">
                        Patrocinado ({s.sponsoredType}) até {s.sponsoredUntil}
                      </span>
                    )}
                  </div>
                  <div className="text-gray-600 text-sm mb-1">{s.title} - {s.description}</div>
                  <div className="flex gap-4 text-xs text-gray-500 mb-1">
                    <span>Nota: <b className="text-green-700">{s._rating}</b></span>
                    <span>Distância: <b>{s._distance.toFixed(1)} km</b></span>
                    <span>Atendimentos: <b>{s._completed}</b></span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-[#8B4513] font-bold text-lg">R$ {s.price}</span>
                  </div>
                </div>
                <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold" onClick={() => navigate("/schedule-service")}>Ver Perfil</button>
              </div>
            );
          })}
          {orderedServices.length === 0 && (
            <div className="text-center text-gray-500 py-8">Nenhum profissional encontrado.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search; 