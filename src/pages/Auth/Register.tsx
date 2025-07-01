"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { useAuth } from "../../contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export const Register: React.FC = () => {
  const { type } = useParams<{ type: "entrepreneur" | "consumer" }>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    cpf: "",
    birthDate: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { register } = useAuth()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Aplicar máscaras
    let maskedValue = value
    if (name === "cpf") {
      maskedValue = value.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    } else if (name === "phone") {
      maskedValue = value.replace(/\D/g, "").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    }

    setFormData((prev) => ({ ...prev, [name]: maskedValue }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem")
      setIsLoading(false)
      return
    }

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        cpf: formData.cpf,
        birthDate: formData.birthDate,
        role: type as "entrepreneur" | "consumer",
      })
      router.push("/dashboard")
    } catch (err) {
      setError("Erro ao criar conta. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const isEntrepreneur = type === "entrepreneur"

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <img src="/logo-ibraids.png" alt="Ibraids" className="h-12 w-auto mx-auto" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            {isEntrepreneur ? "Cadastro de Empreendedora" : "Cadastro de Cliente"}
          </CardTitle>
          <p className="text-gray-600">Preencha seus dados</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">{error}</AlertDescription>
              </Alert>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha *</label>
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Senha *</label>
              <Input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Celular *</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                maxLength={15}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CPF *</label>
              <Input
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
                maxLength={14}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento *</label>
              <Input name="birthDate" type="date" value={formData.birthDate} onChange={handleChange} required />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            >
              {isLoading ? (
                <>Criando conta...</>
              ) : (
                "Criar Conta"
              )}
            </Button>

            <div className="text-center">
              <Link href="/register-type" className="inline-flex items-center text-gray-600 hover:text-gray-500">
                Voltar
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
