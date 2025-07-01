"use client"

// @ts-ignore
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { User, AuthResponse, LoginRequest, RegisterRequest } from "../types"
import { apiGet } from "../services/apiService"

interface AuthContextType {
  user: User | null
  token: string | null
  login: (credentials: LoginRequest) => Promise<AuthResponse>
  register: (data: RegisterRequest) => Promise<AuthResponse>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

let cachedUsers: User[] | null = null

async function getUsers(token?: string): Promise<User[]> {
  if (cachedUsers) return cachedUsers
  const users = await apiGet<User[]>("/users.json", token)
  cachedUsers = users
  return users
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedToken = localStorage.getItem("ibraids_token")
    const savedUser = localStorage.getItem("ibraids_user")

    if (savedToken && savedUser) {
      setToken(savedToken)
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
    // Simular API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Token ainda não existe, então não passamos
    const users = await getUsers()
    const user = users.find((u) => u.email === credentials.email)
    if (!user) {
      throw new Error("Usuário não encontrado")
    }

    const mockToken = `mock_jwt_token_${user.id}_${Date.now()}`
    const authResponse: AuthResponse = {
      token: mockToken,
      user,
      expiresIn: 3600,
    }

    setToken(mockToken)
    setUser(user)

    if (credentials.rememberMe) {
      localStorage.setItem("ibraids_token", mockToken)
      localStorage.setItem("ibraids_user", JSON.stringify(user))
    }

    return authResponse
  }

  const register = async (data: RegisterRequest): Promise<AuthResponse> => {
    // Simular API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      cpf: data.cpf,
      birthDate: data.birthDate,
      role: data.role,
      isActive: true,
      createdAt: new Date().toISOString(),
    }

    const mockToken = `mock_jwt_token_${newUser.id}_${Date.now()}`
    const authResponse: AuthResponse = {
      token: mockToken,
      user: newUser,
      expiresIn: 3600,
    }

    setToken(mockToken)
    setUser(newUser)
    localStorage.setItem("ibraids_token", mockToken)
    localStorage.setItem("ibraids_user", JSON.stringify(newUser))

    return authResponse
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem("ibraids_token")
    localStorage.removeItem("ibraids_user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
