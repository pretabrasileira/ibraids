import React, { useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";

interface Address {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  lat: string;
  lng: string;
}

const initialAddress: Address = {
  street: "",
  number: "",
  neighborhood: "",
  city: "",
  state: "",
  zipCode: "",
  lat: "",
  lng: "",
};

const AddressForm: React.FC = () => {
  const [address, setAddress] = useState<Address>(initialAddress);
  const [saved, setSaved] = useState(false);
  const { location, loading, error } = useGeolocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleUseLocation = () => {
    if (location) {
      setAddress((prev) => ({ ...prev, lat: String(location.latitude), lng: String(location.longitude) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-amber-100">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-4 text-center">Cadastrar Endereço</h1>
        {saved && (
          <div className="bg-green-100 border border-green-200 text-green-700 rounded p-2 mb-4 text-sm text-center">Endereço salvo com sucesso!</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="street" value={address.street} onChange={handleChange} placeholder="Rua" required className="w-full border border-amber-200 rounded px-3 py-2" />
          <input name="number" value={address.number} onChange={handleChange} placeholder="Número" required className="w-full border border-amber-200 rounded px-3 py-2" />
          <input name="neighborhood" value={address.neighborhood} onChange={handleChange} placeholder="Bairro" required className="w-full border border-amber-200 rounded px-3 py-2" />
          <input name="city" value={address.city} onChange={handleChange} placeholder="Cidade" required className="w-full border border-amber-200 rounded px-3 py-2" />
          <input name="state" value={address.state} onChange={handleChange} placeholder="Estado" required className="w-full border border-amber-200 rounded px-3 py-2" />
          <input name="zipCode" value={address.zipCode} onChange={handleChange} placeholder="CEP" required className="w-full border border-amber-200 rounded px-3 py-2" />
          <div className="flex gap-2 items-center">
            <input name="lat" value={address.lat} onChange={handleChange} placeholder="Latitude (simulada)" required className="flex-1 border border-amber-200 rounded px-3 py-2" />
            <input name="lng" value={address.lng} onChange={handleChange} placeholder="Longitude (simulada)" required className="flex-1 border border-amber-200 rounded px-3 py-2" />
            <button type="button" onClick={handleUseLocation} className="bg-[#8B4513] text-white px-2 py-1 rounded ml-2 text-xs hover:bg-[#6a2e0a]" disabled={loading}>
              {loading ? "Obtendo..." : "Usar minha localização"}
            </button>
          </div>
          {error && <div className="text-red-600 text-xs">{error}</div>}
          <button type="submit" className="w-full bg-[#8B4513] hover:bg-[#6a2e0a] text-white font-bold py-2 rounded transition mt-2">Salvar Endereço</button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm; 