// Este arquivo não é mais necessário para roteamento em Next.js.
// Mova toda a lógica de rotas para a estrutura de arquivos/pastas em /pages ou /app.
// Se precisar de contexto global, mantenha apenas o AuthProvider:

import { AuthProvider } from "./contexts/AuthContext"

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
