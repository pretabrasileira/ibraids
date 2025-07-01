import React from "react";

interface LoginFormProps {
  email: string;
  password: string;
  remember: boolean;
  onChange: (field: string, value: string | boolean) => void;
  onSubmit: () => void;
  loading?: boolean;
  error?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, password, remember, onChange, onSubmit, loading, error }) => (
  <form className="space-y-4 max-w-sm mx-auto" onSubmit={e => { e.preventDefault(); onSubmit(); }}>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">Email</label>
      <input type="email" className="w-full border border-amber-200 rounded px-3 py-2" value={email} onChange={e => onChange("email", e.target.value)} required />
    </div>
    <div>
      <label className="block text-[#8B4513] font-bold mb-1">Senha</label>
      <input type="password" className="w-full border border-amber-200 rounded px-3 py-2" value={password} onChange={e => onChange("password", e.target.value)} required />
    </div>
    <div className="flex items-center gap-2">
      <input type="checkbox" checked={remember} onChange={e => onChange("remember", e.target.checked)} />
      <span className="text-xs text-gray-600">Lembrar-me</span>
    </div>
    {error && <div className="text-red-600 text-xs">{error}</div>}
    <button type="submit" className="w-full bg-[#8B4513] text-white font-bold py-2 rounded hover:bg-[#6a2e0a]" disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>
    <div className="flex justify-between text-xs mt-2">
      <a href="/register" className="text-[#8B4513] hover:underline">Cadastre-se</a>
      <a href="/forgot-password" className="text-[#8B4513] hover:underline">Recuperar senha</a>
    </div>
  </form>
);

export default LoginForm; 