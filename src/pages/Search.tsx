import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sortServicesForConsumer } from "../utils/sortProfessionals";
import { getDistanceInKm } from "../utils/distance";
import type { Service, Entrepreneur, Address } from "../types";
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

const mockEntrepreneurs: Entrepreneur[] = [
  {
    id: "1",
    name: "Maria Trancista",
    email: "maria@email.com",
    phone: "11999999999",
    cpf: "000.000.000-00",
    birthDate: "1990-01-01",
    role: "entrepreneur",
    avatar: "/placeholder.svg?height=100&width=100",
    isActive: true,
    createdAt: "2024-01-01",
    businessName: "Tranças da Maria",
    cnpj: "00.000.000/0000-00",
    rating: 4.9,
    totalServices: 120,
    isVerified: true,
    categories: ["cabelo"],
    location: { lat: -23.55052, lng: -46.633308, address: "Rua X", city: "São Paulo", state: "SP", zipCode: "00000-000" },
    points: 200,
  },
];

const mockServices: Service[] = [
  {
    id: "1",
    entrepreneurId: "1",
    title: "Tranças Box Braids",
    description: "Tranças box braids profissionais com cabelo sintético de alta qualidade",
    category: "cabelo",
    price: 150.0,
    duration: 120,
    isActive: true,
    images: ["/placeholder.svg?height=200&width=300"],
  },
  {
    id: "2",
    entrepreneurId: "1",
    title: "Tranças Nagô",
    description: "Tranças nagô tradicionais com técnica ancestral",
    category: "cabelo",
    price: 120.0,
    duration: 90,
    isActive: true,
    images: ["/placeholder.svg?height=200&width=300"],
  },
];

const mockConsumer = {
  id: "2",
  name: "Ana Paula Costa",
  addresses: [
    {
      id: "a2",
      name: "Casa",
      location: {
        lat: -23.561684,
        lng: -46.655981,
        address: "Av. das Flores, 200",
        city: "São Paulo",
        state: "SP",
        zipCode: "01400-000"
      },
      isDefault: true,
    },
  ],
};

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [orderedServices, setOrderedServices] = useState<Service[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Seleciona endereço principal do consumidor
    const mainAddress = mockConsumer.addresses?.find((a: Address) => a.isDefault) || null;
    setAddress(mainAddress);
  }, []);

  useEffect(() => {
    if (!address) return;
    // Filtra e ordena serviços
    const filtered = mockServices.filter(s =>
      (!category || s.category === category) &&
      (!query || s.title.toLowerCase().includes(query.toLowerCase()) || s.description.toLowerCase().includes(query.toLowerCase()))
    );
    // Aqui você pode integrar a ordenação real se desejar, por enquanto só filtra
    setOrderedServices(filtered);
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          />
          <select
            className="border border-amber-200 rounded px-3 py-2 text-[#8B4513]"
            value={category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
          >
            <option value="">Todas categorias</option>
            {mockCategories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-4">
          {orderedServices.map((s: Service) => {
            const entrepreneur = mockEntrepreneurs.find((e: Entrepreneur) => e.id === s.entrepreneurId);
            return (
              <div key={s.id} className="border border-amber-200 rounded-lg p-4 flex gap-4 bg-white shadow hover:shadow-lg transition cursor-pointer">
                <img src={entrepreneur?.avatar} alt={entrepreneur?.name} className="h-20 w-20 rounded-full object-cover border-2 border-[#8B4513]" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#8B4513] text-lg">{entrepreneur?.name}</span>
                  </div>
                  <div className="text-gray-600 text-sm mb-1">{s.title} - {s.description}</div>
                  <div className="flex gap-4 text-xs text-gray-500 mb-1">
                    {/* Exemplo de exibição de dados adicionais se disponíveis */}
                    {/* <span>Nota: <b className="text-green-700">{s.rating}</b></span> */}
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-[#8B4513] font-bold text-lg">R$ {s.price}</span>
                  </div>
                </div>
                <button className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6a2e0a] font-bold" onClick={() => entrepreneur && navigate("/schedule-service", { state: { service: s, entrepreneur } })}>Ver Perfil</button>
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