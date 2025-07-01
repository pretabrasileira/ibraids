import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Location } from "react-router-dom";
import type { Service, Entrepreneur, ServiceRequest } from "../types";

// Mock de agenda disponível (normalmente viria da API ou do profissional)
const mockAgenda = [
  { date: "2024-06-20", slots: ["14:00", "15:00", "16:00"] },
  { date: "2024-06-21", slots: ["10:00", "11:00", "13:00"] },
];

// Mock de bookings (simulação em memória)
let mockBookings: ServiceRequest[] = [];

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

const ScheduleService: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { service?: Service; entrepreneur?: Entrepreneur };
  const service = state?.service;
  const entrepreneur = state?.entrepreneur;

  useEffect(() => {
    if (!service || !entrepreneur) {
      navigate("/search");
    }
  }, [service, entrepreneur, navigate]);

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState<string>("");

  const availableSlots = mockAgenda.find(a => a.date === selectedDate)?.slots || [];

  const handleConfirm = () => {
    if (selectedDate && selectedSlot && service && entrepreneur) {
      const newBooking: ServiceRequest = {
        id: `booking_${Date.now()}`,
        consumerId: "2", // Simulado, idealmente viria do contexto do usuário logado
        entrepreneurId: entrepreneur.id,
        serviceId: service.id,
        status: "pending",
        scheduledDate: `${selectedDate}T${selectedSlot}`,
        location: entrepreneur.location,
        totalPrice: service.price,
        createdAt: new Date().toISOString(),
      };
      // Persistir no localStorage
      const bookings = getBookings();
      bookings.push(newBooking);
      setBookings(bookings);
      setBookingId(newBooking.id);
      setConfirmed(true);
    }
  };

  if (!service || !entrepreneur) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="bg-white border border-amber-200 rounded-lg p-8 shadow">
          <h2 className="text-xl font-bold text-[#8B4513] mb-2">Selecione um serviço para agendar</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-amber-100">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-2 text-center">Agendar Serviço</h1>
        <div className="flex items-center gap-4 mb-4">
          <img src={entrepreneur.avatar} alt={entrepreneur.name} className="h-16 w-16 rounded-full border-2 border-[#8B4513]" />
          <div>
            <div className="font-bold text-[#8B4513]">{entrepreneur.name}</div>
            <div className="text-gray-700">{service.title}</div>
            <div className="text-[#8B4513] font-bold">R$ {service.price}</div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-[#8B4513] font-bold mb-1">Selecione a data:</label>
          <select
            className="w-full border border-amber-200 rounded px-3 py-2 mb-2"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
          >
            <option value="">Selecione</option>
            {mockAgenda.map(a => (
              <option key={a.date} value={a.date}>{a.date}</option>
            ))}
          </select>
          {selectedDate && (
            <>
              <label className="block text-[#8B4513] font-bold mb-1">Horário disponível:</label>
              <div className="flex gap-2 flex-wrap">
                {availableSlots.map(slot => (
                  <button
                    key={slot}
                    type="button"
                    className={`px-4 py-2 rounded font-bold border ${selectedSlot === slot ? "bg-[#8B4513] text-white" : "bg-white text-[#8B4513] border-[#8B4513]"}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
        <button
          className="w-full bg-[#8B4513] hover:bg-[#6a2e0a] text-white font-bold py-2 rounded transition mt-2"
          disabled={!selectedDate || !selectedSlot}
          onClick={handleConfirm}
        >
          Confirmar Agendamento
        </button>
        {confirmed && (
          <div className="bg-green-100 border border-green-200 text-green-700 rounded p-2 mt-4 text-sm text-center">
            Agendamento realizado com sucesso!<br />
            Código do agendamento: <b>{bookingId}</b>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleService; 