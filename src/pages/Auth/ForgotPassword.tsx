import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Por favor, informe seu e-mail.");
      return;
    }
    setError("");
    setSent(true);
    // Simula envio
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-amber-100">
        <h1 className="text-2xl font-bold text-[#8B4513] mb-2 text-center">Recuperar Senha</h1>
        <p className="text-gray-600 text-center mb-6">Informe seu e-mail para receber instruções de recuperação.</p>
        {error && (
          <div className="bg-red-100 border border-red-200 text-red-700 rounded p-2 mb-4 text-sm">{error}</div>
        )}
        {sent && (
          <div className="bg-green-100 border border-green-200 text-green-700 rounded p-2 mb-4 text-sm">Se as informações estiverem corretas, você receberá um e-mail com instruções.</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#8B4513] mb-1">E-mail</label>
            <input
              type="email"
              className="w-full border border-amber-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#8B4513] hover:bg-[#6a2e0a] text-white font-bold py-2 rounded transition"
          >
            Enviar
          </button>
        </form>
        <button
          className="mt-6 w-full text-[#8B4513] hover:underline text-sm"
          onClick={() => navigate("/login")}
        >
          Voltar para o login
        </button>
      </div>
    </div>
  );
};

export { ForgotPassword };
export default ForgotPassword; 