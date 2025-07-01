import React, { useEffect, useState } from "react";
import type { ServiceRequest, Consumer, Service } from "../../types";
// Funções utilitárias para persistência
const BOOKINGS_KEY = "ibraids_bookings";
function getBookings(): ServiceRequest[] {
  const data = localStorage.getItem(BOOKINGS_KEY);
  if (data) return JSON.parse(data);
  return [];
}
function setBookings(bookings: ServiceRequest[]) {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
}
// Mock de consumidores e serviços (ajuste conforme necessário)
import consumers from "../../data/users.json";
import services from "../../data/services.json";
const getConsumer = (id: string): Consumer | undefined =>
  (consumers as any[]).find((c) => c.id === id && c.role === "consumer") as Consumer | undefined;
const getService = (id: string): Service | undefined => (services as Service[]).find((s) => s.id === id);

const EvaluateClients: React.FC = () => {
  const [bookings, setBookingsState] = useState<ServiceRequest[]>([]);
  const [reviewingId, setReviewingId] = useState<string | null>(null);
  const [reviewData, setReviewData] = useState<{ rating: number; comment: string }>({ rating: 5, comment: "" });

  useEffect(() => {
    // Filtra bookings concluídos e não avaliados pelo empreendedor
    const all = getBookings();
    const filtered = all.filter(b => b.status === "completed" && (!b.entrepreneurRating || !b.entrepreneurReview));
    setBookingsState(filtered);
  }, []);

  const handleStartReview = (bookingId: string) => {
    setReviewingId(bookingId);
    setReviewData({ rating: 5, comment: "" });
  };

  const handleReviewChange = (field: "rating" | "comment", value: number | string) => {
    setReviewData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitReview = (bookingId: string) => {
    const all = getBookings();
    const idx = all.findIndex(b => b.id === bookingId);
    if (idx !== -1) {
      all[idx].entrepreneurRating = reviewData.rating;
      all[idx].entrepreneurReview = reviewData.comment;
      setBookings(all);
      setBookingsState(bookings.filter(b => b.id !== bookingId));
      setReviewingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Avaliar Clientes</h1>
      <div className="grid gap-4">
        {bookings.length === 0 && <div className="text-gray-500">Nenhum serviço pendente de avaliação.</div>}
        {bookings.map(b => {
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
              </div>
              {reviewingId !== b.id && (
                <button className="bg-green-600 text-white px-4 py-2 rounded font-bold" onClick={() => handleStartReview(b.id)}>Avaliar Cliente</button>
              )}
              {reviewingId === b.id && (
                <form className="flex flex-col gap-2 mt-2 bg-gray-50 p-2 rounded" onSubmit={e => { e.preventDefault(); handleSubmitReview(b.id); }}>
                  <label className="font-bold text-[#8B4513]">Avaliação do Cliente:</label>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <button type="button" key={star} onClick={() => handleReviewChange("rating", star)} className={star <= reviewData.rating ? "text-yellow-500" : "text-gray-300"}>
                        ★
                      </button>
                    ))}
                  </div>
                  <textarea className="border rounded p-1" placeholder="Comentário (opcional)" value={reviewData.comment} onChange={e => handleReviewChange("comment", e.target.value)} />
                  <button type="submit" className="bg-[#8B4513] text-white px-3 py-1 rounded font-bold">Enviar Avaliação</button>
                </form>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EvaluateClients; 