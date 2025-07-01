import React, { useEffect, useState } from "react";
import type { ServiceRequest, Consumer, Service } from "../../types";
// Funções utilitárias para persistência
const BOOKINGS_KEY = "ibraids_bookings";
function getBookings(): ServiceRequest[] {
  const data = localStorage.getItem(BOOKINGS_KEY);
  if (data) return JSON.parse(data);
  return [];
}
// Mock de consumidores e serviços (ajuste conforme necessário)
import consumers from "../../data/users.json";
import services from "../../data/services.json";
const getConsumer = (id: string): Consumer | undefined =>
  (consumers as any[]).find((c) => c.id === id && c.role === "consumer") as Consumer | undefined;
const getService = (id: string): Service | undefined => (services as Service[]).find((s) => s.id === id);

const ReviewsHistory: React.FC = () => {
  const [reviews, setReviews] = useState<ServiceRequest[]>([]);

  useEffect(() => {
    // Filtra bookings avaliados pelo empreendedor
    const all = getBookings();
    const filtered = all.filter(b => b.entrepreneurRating && b.entrepreneurReview);
    setReviews(filtered);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Histórico de Avaliações Realizadas</h1>
      <div className="grid gap-4">
        {reviews.length === 0 && <div className="text-gray-500">Nenhuma avaliação realizada ainda.</div>}
        {reviews.map(b => {
          const consumer = getConsumer(b.consumerId);
          const service = getService(b.serviceId);
          return (
            <div key={b.id} className="border border-amber-200 rounded-lg p-4 flex flex-col md:flex-row gap-4 bg-white shadow">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <img src={consumer?.avatar} alt={consumer?.name} className="h-12 w-12 rounded-full object-cover border-2 border-[#8B4513]" />
                  <span className="font-bold text-[#8B4513]">{consumer?.name}</span>
                </div>
                <div className="text-gray-700">{service?.title}</div>
                <div className="text-xs text-gray-500">Data: {new Date(b.scheduledDate).toLocaleString()}</div>
                <div className="mt-2 text-green-700 text-sm">Nota: {b.entrepreneurRating} estrelas<br />"{b.entrepreneurReview}"</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewsHistory; 