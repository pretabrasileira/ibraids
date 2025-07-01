import React, { useEffect, useState } from "react";
import type { ServiceRequest, Entrepreneur, Service } from "../types";

// Mock de bookings (importar do ScheduleService ou localStorage futuramente)
import { mockEntrepreneurs, mockServices } from "../data/mocks"; // Ajuste o caminho conforme necessário

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

const getEntrepreneur = (id: string): Entrepreneur | undefined => mockEntrepreneurs.find(e => e.id === id);
const getService = (id: string): Service | undefined => mockServices.find(s => s.id === id);

const ServicesHistory: React.FC = () => {
  const [bookings, setBookingsState] = useState<ServiceRequest[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const loaded = getBookings();
    setBookingsState(loaded);
    const now = new Date();
    const notifs: string[] = [];
    loaded.forEach(b => {
      const sched = new Date(b.scheduledDate);
      const diffMs = sched.getTime() - now.getTime();
      const created = new Date(b.createdAt);
      const createdDiff = sched.getTime() - created.getTime();
      if (createdDiff > 24 * 60 * 60 * 1000 && sched > now && diffMs < 24 * 60 * 60 * 1000 && diffMs > 60 * 60 * 1000) {
        notifs.push(`Você tem um serviço agendado para ${sched.toLocaleString()}`);
      }
      if (b.status === "confirmed" && sched > now && diffMs < 60 * 60 * 1000 && diffMs > 0) {
        notifs.push(`Lembrete: seu serviço confirmado começa em menos de 1 hora (${sched.toLocaleString()})`);
      }
      if (createdDiff <= 24 * 60 * 60 * 1000 && b.status === "confirmed" && sched > now && diffMs < 60 * 60 * 1000 && diffMs > 0) {
        // Já está coberto pela regra acima
      }
    });
    setNotifications(notifs);
  }, []);

  const handleConfirm = (bookingId: string) => {
    const loaded = getBookings();
    const idx = loaded.findIndex(b => b.id === bookingId);
    if (idx !== -1) {
      loaded[idx].status = "confirmed";
      setBookings(loaded);
      setBookingsState([...loaded]);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-2xl font-bold text-[#8B4513] mb-4">Histórico de Serviços</h1>
      {notifications.length > 0 && (
        <div className="mb-4">
          {notifications.map((n, i) => (
            <div key={i} className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-2 mb-2 rounded">
              {n}
            </div>
          ))}
        </div>
      )}
      <div className="grid gap-4">
        {bookings.length === 0 && <div className="text-gray-500">Nenhum serviço agendado.</div>}
        {bookings.map(b => {
          const entrepreneur = getEntrepreneur(b.entrepreneurId);
          const service = getService(b.serviceId);
          return (
            <div key={b.id} className="border border-amber-200 rounded-lg p-4 flex flex-col md:flex-row gap-4 bg-white shadow">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <img src={entrepreneur?.avatar} alt={entrepreneur?.name} className="h-12 w-12 rounded-full object-cover border-2 border-[#8B4513]" />
                  <span className="font-bold text-[#8B4513]">{entrepreneur?.name}</span>
                </div>
                <div className="text-gray-700">{service?.title}</div>
                <div className="text-xs text-gray-500">Data: {new Date(b.scheduledDate).toLocaleString()}</div>
                <div className="text-xs text-gray-500">Status: <b>{b.status}</b></div>
              </div>
              {b.status === "pending" && (
                <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold" onClick={() => handleConfirm(b.id)}>Confirmar Presença</button>
              )}
              {b.status === "completed" && !b.review && (
                <button className="bg-green-600 text-white px-4 py-2 rounded font-bold">Avaliar</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesHistory; 