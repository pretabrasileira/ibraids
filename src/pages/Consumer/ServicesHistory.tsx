import React, { useEffect, useState } from "react";
import type { ServiceRequest, Entrepreneur, Service } from "../types";

// Mock de bookings (importar do ScheduleService ou localStorage futuramente)
import { mockEntrepreneurs, mockServices } from "../data/mocks"; // Ajuste o caminho conforme necessário

// Simulação: importar bookings do escopo global (ScheduleService) ou localStorage
let mockBookings: ServiceRequest[] = [];

const getEntrepreneur = (id: string): Entrepreneur | undefined => mockEntrepreneurs.find(e => e.id === id);
const getService = (id: string): Service | undefined => mockServices.find(s => s.id === id);

const ServicesHistory: React.FC = () => {
  const [bookings, setBookings] = useState<ServiceRequest[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    // Aqui você pode buscar do localStorage ou API futuramente
    setBookings([...mockBookings]);
    // Notificações de agendamento próximo
    const now = new Date();
    const upcoming = mockBookings.filter(b => {
      const sched = new Date(b.scheduledDate);
      return sched > now && (sched.getTime() - now.getTime()) < 24 * 60 * 60 * 1000;
    });
    setNotifications(upcoming.map(b => `Você tem um serviço agendado para ${new Date(b.scheduledDate).toLocaleString()}`));
  }, []);

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