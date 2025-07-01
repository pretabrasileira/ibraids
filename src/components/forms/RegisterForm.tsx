import React from "react";

interface RegisterFormProps {
  name: string;
  birthDate: string;
  document: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
  loading?: boolean;
  error?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ name, birthDate, document, email, phone, password, confirmPassword, onChange, onSubmit, loading, error }) => (
  <form className="space-y-4 max-w-sm mx-auto" onSubmit={e => { e.preventDefault(); onSubmit(); }}>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">Nome completo</label>
      <input type="text" className="w-full border border-amber-200 rounded px-3 py-2" value={name} onChange={e => onChange("name", e.target.value)} required />
    </div>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">Data de nascimento</label>
      <input type="date" className="w-full border border-amber-200 rounded px-3 py-2" value={birthDate} onChange={e => onChange("birthDate", e.target.value)} required />
    </div>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">CPF/CNPJ</label>
      <input type="text" className="w-full border border-amber-200 rounded px-3 py-2" value={document} onChange={e => onChange("document", e.target.value)} required />
    </div>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">Email</label>
      <input type="email" className="w-full border border-amber-200 rounded px-3 py-2" value={email} onChange={e => onChange("email", e.target.value)} required />
    </div>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">Celular</label>
      <input type="text" className="w-full border border-amber-200 rounded px-3 py-2" value={phone} onChange={e => onChange("phone", e.target.value)} required />
    </div>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">Senha</label>
      <input type="password" className="w-full border border-amber-200 rounded px-3 py-2" value={password} onChange={e => onChange("password", e.target.value)} required />
    </div>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">Confirmar senha</label>
      <input type="password" className="w-full border border-amber-200 rounded px-3 py-2" value={confirmPassword} onChange={e => onChange("confirmPassword", e.target.value)} required />
    </div>
    {error && <div className="text-red-600 text-xs">{error}</div>}
    <button type="submit" className="w-full bg-[#8B4513] text-white font-bold py-2 rounded hover:bg-[#6a2e0a]" disabled={loading}>{loading ? "Cadastrando..." : "Cadastrar"}</button>
  </form>
);

export default RegisterForm; 