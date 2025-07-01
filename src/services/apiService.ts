// Serviço genérico para consumo de APIs mock e reais

const BASE_URL = "/src/data" // Troque para "/api" quando migrar para backend real

export async function apiGet<T>(endpoint: string, token?: string): Promise<T> {
  const url = `${BASE_URL}${endpoint}`
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  }
  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }
  const response = await fetch(url, { headers })
  if (!response.ok) {
    throw new Error(`Erro ao buscar ${endpoint}: ${response.statusText}`)
  }
  return response.json()
}

// Exemplo de uso:
// const users = await apiGet<User[]>("/users.json", token) 