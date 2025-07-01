"use client"

import { Search, Filter, Star, MapPin, Clock, TrendingUp, TrendingDown, Thermometer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function ProfessionalsClientView() {
  const professionals = [
    {
      id: 1,
      name: "Maria Clara Santos",
      rating: 4.9,
      reviews: 127,
      services: 89,
      avgTime: "2h 30min",
      priceRange: "$$$",
      specialties: ["Box Braids", "Tranças Nagô"],
      distance: "1.2 km",
      available: true,
      image: "/placeholder.svg?height=80&width=80",
      performance: "excellent", // excellent = tons frios, poor = tons vermelhos
      responseTime: "5min",
      completionRate: 98,
    },
    {
      id: 2,
      name: "Ana Beatriz Silva",
      rating: 4.8,
      reviews: 95,
      services: 67,
      avgTime: "2h 15min",
      priceRange: "$$",
      specialties: ["Twist", "Crochet Braids"],
      distance: "2.1 km",
      available: true,
      image: "/placeholder.svg?height=80&width=80",
      performance: "good",
      responseTime: "8min",
      completionRate: 95,
    },
    {
      id: 3,
      name: "Carla Fernandes",
      rating: 4.2,
      reviews: 83,
      services: 54,
      avgTime: "3h 30min",
      priceRange: "$$$",
      specialties: ["Fulani Braids", "Goddess Braids"],
      distance: "3.5 km",
      available: false,
      image: "/placeholder.svg?height=80&width=80",
      performance: "average",
      responseTime: "15min",
      completionRate: 87,
    },
    {
      id: 4,
      name: "Juliana Costa",
      rating: 3.8,
      reviews: 156,
      services: 112,
      avgTime: "4h 00min",
      priceRange: "$$",
      specialties: ["Tranças Soltas", "Box Braids"],
      distance: "1.8 km",
      available: true,
      image: "/placeholder.svg?height=80&width=80",
      performance: "poor",
      responseTime: "25min",
      completionRate: 78,
    },
  ]

  const getPriceColor = (range: string) => {
    switch (range) {
      case "$":
        return "text-green-700"
      case "$$":
        return "text-amber-600"
      case "$$$":
        return "text-red-800"
      default:
        return "text-gray-600"
    }
  }

  // Tons frios para bom, tons vermelhos para ruim
  const getPerformanceColors = (performance: string) => {
    switch (performance) {
      case "excellent":
        return {
          bg: "bg-gradient-to-r from-blue-50 to-cyan-50",
          border: "border-blue-300",
          badge: "bg-blue-600 text-white",
          icon: "text-blue-600",
        }
      case "good":
        return {
          bg: "bg-gradient-to-r from-green-50 to-teal-50",
          border: "border-green-300",
          badge: "bg-green-600 text-white",
          icon: "text-green-600",
        }
      case "average":
        return {
          bg: "bg-gradient-to-r from-yellow-50 to-orange-50",
          border: "border-yellow-300",
          badge: "bg-yellow-600 text-white",
          icon: "text-yellow-600",
        }
      case "poor":
        return {
          bg: "bg-gradient-to-r from-red-50 to-pink-50",
          border: "border-red-300",
          badge: "bg-red-600 text-white",
          icon: "text-red-600",
        }
      default:
        return {
          bg: "bg-white",
          border: "border-gray-200",
          badge: "bg-gray-500 text-white",
          icon: "text-gray-500",
        }
    }
  }

  const getPerformanceIcon = (performance: string) => {
    switch (performance) {
      case "excellent":
        return <TrendingUp className="h-3 w-3" />
      case "good":
        return <TrendingUp className="h-3 w-3" />
      case "average":
        return <Thermometer className="h-3 w-3" />
      case "poor":
        return <TrendingDown className="h-3 w-3" />
      default:
        return null
    }
  }

  const getPerformanceLabel = (performance: string) => {
    switch (performance) {
      case "excellent":
        return "Excelente"
      case "good":
        return "Muito Boa"
      case "average":
        return "Regular"
      case "poor":
        return "Precisa Melhorar"
      default:
        return "N/A"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-red-900 text-white relative overflow-hidden">
        <div className="relative p-4">
          <h1 className="text-xl font-bold mb-4 tracking-wide">Encontre sua Trancista</h1>

          {/* Barra de Busca */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
            <Input
              placeholder="Buscar por especialidade ou região..."
              className="pl-10 bg-white/95 border-2 border-gray-300 text-black font-medium placeholder:text-gray-600"
            />
          </div>

          {/* Filtros */}
          <div className="space-y-3">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button className="bg-red-800 hover:bg-red-900 text-white border-0 whitespace-nowrap font-bold">
                <Filter className="h-4 w-4 mr-1" />
                Filtros
              </Button>
              <Badge className="bg-green-600 text-white border-0 whitespace-nowrap font-bold">Disponível</Badge>
              <Badge className="bg-amber-600 text-white border-0 whitespace-nowrap font-bold">Próximas</Badge>
              <Badge className="bg-blue-600 text-white border-0 whitespace-nowrap font-bold">Bem Avaliadas</Badge>
            </div>

            {/* Legenda de Performance */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-xs font-bold mb-2">Indicador de Qualidade:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
                  <span>Excelente</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-600 rounded-full"></div>
                  <span>Muito Boa</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-yellow-600 rounded-full"></div>
                  <span>Regular</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-red-600 rounded-full"></div>
                  <span>Precisa Melhorar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-black font-bold">24 profissionais encontradas</p>
          <Button variant="ghost" size="sm" className="text-red-800 font-bold">
            Ordenar por qualidade
          </Button>
        </div>

        {/* Grid com Sistema de Cores */}
        <div className="space-y-4">
          {professionals.map((professional) => {
            const colors = getPerformanceColors(professional.performance)

            return (
              <Card
                key={professional.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 border-2 ${colors.border} ${colors.bg}`}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    {/* Avatar com Indicador */}
                    <div className="relative">
                      <Avatar className="h-20 w-20 border-3 border-amber-500">
                        <AvatarImage src={professional.image || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-red-800 to-black text-white text-lg font-bold">
                          {professional.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {professional.available && (
                        <div className="absolute -top-1 -right-1 h-6 w-6 bg-green-600 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      )}
                      {/* Badge de Performance */}
                      <div
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-bold ${colors.badge} flex items-center gap-1`}
                      >
                        {getPerformanceIcon(professional.performance)}
                        <span>{getPerformanceLabel(professional.performance)}</span>
                      </div>
                    </div>

                    {/* Informações */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-lg text-black truncate">{professional.name}</h3>
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                            <span className="text-sm font-bold text-black">{professional.rating}</span>
                            <span className="text-sm text-gray-600">({professional.reviews} avaliações)</span>
                          </div>
                        </div>
                        <div className={`text-2xl font-bold ${getPriceColor(professional.priceRange)}`}>
                          {professional.priceRange}
                        </div>
                      </div>

                      {/* Métricas de Qualidade */}
                      <div className="bg-white/80 p-2 rounded-lg mb-3 border border-gray-200">
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="text-center">
                            <p className="font-bold text-black">{professional.services}</p>
                            <p className="text-gray-600">Atendimentos</p>
                          </div>
                          <div className="text-center">
                            <p className="font-bold text-black">{professional.responseTime}</p>
                            <p className="text-gray-600">Resposta</p>
                          </div>
                          <div className="text-center">
                            <p className="font-bold text-black">{professional.completionRate}%</p>
                            <p className="text-gray-600">Conclusão</p>
                          </div>
                        </div>
                      </div>

                      {/* Especialidades */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {professional.specialties.map((specialty, index) => (
                          <Badge
                            key={index}
                            className="text-xs bg-gradient-to-r from-red-800 to-black text-white font-bold"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      {/* Informações Adicionais */}
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 mb-3 font-medium">
                        <div className="flex items-center gap-1">
                          <Clock className={`h-3 w-3 ${colors.icon}`} />
                          <span>Tempo: {professional.avgTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className={`h-3 w-3 ${colors.icon}`} />
                          <span>Distância: {professional.distance}</span>
                        </div>
                      </div>

                      {/* Botão de Ação */}
                      <Button
                        className={`w-full font-bold py-3 ${
                          professional.performance === "excellent" || professional.performance === "good"
                            ? "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                            : professional.performance === "average"
                              ? "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                              : "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                        } text-white`}
                        disabled={!professional.available}
                      >
                        {professional.available ? "Agendar Atendimento" : "Indisponível"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Carregar Mais */}
        <div className="text-center mt-6">
          <Button className="bg-gradient-to-r from-black to-red-800 hover:from-gray-800 hover:to-red-900 text-white font-bold px-8 py-3">
            Ver mais profissionais
          </Button>
        </div>
      </div>
    </div>
  )
}
