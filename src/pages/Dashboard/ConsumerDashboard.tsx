"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, Award, Clock, Heart } from "lucide-react"
import { apiGet } from "@/services/apiService"

export const ConsumerDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [data, setData] = useState<any>(null)
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const token = localStorage.getItem("ibraids_token") || "mock_token"
        const dashboard = await apiGet<any>("/dashboardMetrics.json", token)
        setData(dashboard.consumer)
        const cats = await apiGet<any[]>("/categories.json", token)
        setCategories(cats)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div>Carregando...</div>
  if (error) return <div className="text-red-600">Erro: {error}</div>
  if (!data) return <div>Nenhum dado encontrado.</div>

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Encontre o Serviço Perfeito</h1>
        <p className="text-gray-600">Descubra profissionais incríveis perto de você</p>
      </div>

      {/* Barra de busca */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar serviços (ex: tranças, maquiagem, manicure...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>

          <div className="mt-4 flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Buscando em: São Paulo, SP</span>
            <Button variant="link" size="sm" className="text-red-600 p-0 ml-2">
              Alterar localização
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categorias */}
      <Card>
        <CardHeader>
          <CardTitle>Categorias de Serviços</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/search?category=${category.id}`}
                className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-2"
                  style={{ backgroundColor: category.color }}
                >
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Meus pontos */}
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Meus Pontos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{data.points}</div>
            <p className="text-sm opacity-90">Troque por descontos especiais</p>
            <Button variant="secondary" size="sm" className="mt-3">
              Ver Recompensas
            </Button>
          </CardContent>
        </Card>

        {/* Serviços favoritos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 h-5 w-5 text-red-500" />
              Categorias Favoritas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data.favoriteCategories.map((categoryId) => {
                const category = categories.find((c) => c.id === categoryId)
                return category ? (
                  <div key={categoryId} className="flex items-center space-x-2">
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                ) : null
              })}
            </div>
          </CardContent>
        </Card>

        {/* Últimos serviços */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-blue-500" />
              Serviços Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.recentServices.map((service) => (
                <div key={service.id} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm">{service.entrepreneurName}</p>
                  <p className="text-xs text-gray-600">{service.service}</p>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="outline" className="text-xs">
                      {service.status === "completed" ? "Concluído" : "Pendente"}
                    </Badge>
                    {service.needsReview && (
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">
                        Avaliar
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profissionais recomendados */}
      <Card>
        <CardHeader>
          <CardTitle>Profissionais Recomendados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    M{i}
                  </div>
                  <div>
                    <h4 className="font-medium">Maria Silva {i}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" />
                      4.{8 + i} • 2.{i}km
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">Especialista em tranças e penteados afro</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">R$ 15{i}.00</span>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Ver Perfil
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Serviços pendentes de avaliação */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">Serviços Pendentes de Avaliação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Star className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600">Nenhum serviço pendente de avaliação no momento.</p>
            <p className="text-sm text-gray-500 mt-2">Avalie seus serviços e ganhe pontos para trocar por descontos!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
