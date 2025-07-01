import React from "react";

interface PaymentFormProps {
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
  save: boolean;
  onChange: (field: string, value: string | boolean) => void;
  onSubmit: () => void;
  loading?: boolean;
  error?: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ cardNumber, cardName, expiry, cvv, save, onChange, onSubmit, loading, error }) => (
  <form className="space-y-4 max-w-sm mx-auto" onSubmit={e => { e.preventDefault(); onSubmit(); }}>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">Número do cartão</label>
      <input type="text" className="w-full border border-amber-200 rounded px-3 py-2" value={cardNumber} onChange={e => onChange("cardNumber", e.target.value)} required />
    </div>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">Nome no cartão</label>
      <input type="text" className="w-full border border-amber-200 rounded px-3 py-2" value={cardName} onChange={e => onChange("cardName", e.target.value)} required />
    </div>
    <div className="flex gap-2">
      <div className="flex-1">
        <label className="block text-[#8B4513] font-bold mb-1">Validade</label>
        <input type="text" className="w-full border border-amber-200 rounded px-3 py-2" value={expiry} onChange={e => onChange("expiry", e.target.value)} required placeholder="MM/AA" />
      </div>
      <div className="flex-1">
        <label className="block text-[#8B4513] font-bold mb-1">CVV</label>
        <input type="text" className="w-full border border-amber-200 rounded px-3 py-2" value={cvv} onChange={e => onChange("cvv", e.target.value)} required />
      </div>
    </div>
    <div className="flex items-center gap-2">
      <input type="checkbox" checked={save} onChange={e => onChange("save", e.target.checked)} />
      <span className="text-xs text-gray-600">Salvar cartão</span>
    </div>
    {error && <div className="text-red-600 text-xs">{error}</div>}
    <button type="submit" className="w-full bg-[#8B4513] text-white font-bold py-2 rounded hover:bg-[#6a2e0a]" disabled={loading}>{loading ? "Processando..." : "Pagar"}</button>
  </form>
);

export default PaymentForm; 