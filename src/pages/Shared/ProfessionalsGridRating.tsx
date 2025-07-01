"use client"

import { Search, Filter, Star, MapPin, Clock, Award, TrendingUp, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function ProfessionalsGridRating() {
  const professionals = [
    {
      id: 1,
      name: "Maria Clara Santos",
      title: "Especialista Premium",
      rating: 4.9,
      reviews: 127,
      services: 89,
      avgTime: "2h 30min",
      priceRange: "$$$",
      specialties: ["Box Braids Premium", "Tranças Nagô"],
      distance: "1.2 km",
      available: true,
      image: "/placeholder.svg?height=80&width=80",
      performance: "excellent", // excellent, good, average, poor
      responseTime: "5min",
      completionRate: 98,
    },
    {
      id: 2,
      name: "Ana Beatriz Silva",
      title: "Profissional Certificada",
      rating: 4.8,
      reviews: 95,
      services: 67,
      avgTime: "2h 15min",
      priceRange: "$$",
      specialties: ["Twist Africano", "Crochet Braids"],
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
      title: "Artista Capilar",
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
      title: "Mestra Trancista",
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

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case "excellent":
        return "bg-green-600 text-white border-green-700"
      case "good":
        return "bg-blue-600 text-white border-blue-700"
      case "average":
        return "bg-amber-600 text-white border-amber-700"
      case "poor":
        return "bg-red-600 text-white border-red-700"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getPerformanceIcon = (performance: string) => {
    switch (performance) {
      case "excellent":
        return <TrendingUp className="h-3 w-3" />
      case "good":
        return <TrendingUp className="h-3 w-3" />
      case "average":
        return <span className="text-xs">~</span>
      case "poor":
        return <TrendingDown className="h-3 w-3" />
      default:
        return null
    }
  }

  const getCardBorderColor = (performance: string) => {
    switch (performance) {
      case "excellent":
        return "border-green-300 bg-green-50"
      case "good":
        return "border-blue-300 bg-blue-50"
      case "average":
        return "border-amber-300 bg-amber-50"
      case "poor":
        return "border-red-300 bg-red-50"
      default:
        return "border-gray-200 bg-white"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Header com Sistema de Cores */}
      <div className="bg-gradient-to-r from-black to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <pattern id="rating-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <rect width="50" height="50" fill="none" />
                <path d="M0,25 L50,25 M25,0 L25,50" stroke="white" strokeWidth="0.5" />
                <circle cx="12.5" cy="12.5" r="1" fill="white" />
                <circle cx="37.5" cy="37.5" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rating-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <h1 className="text-xl font-bold mb-4 tracking-wide">Profissionais Avaliadas</h1>

          {/* Barra de Busca */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600" />
            <Input
              placeholder="Buscar profissional ou serviço..."
              className="pl-10 bg-white/95 border-2 border-gray-300 text-black font-medium placeholder:text-gray-600"
            />
          </div>

          {/* Filtros com Legenda de Cores */}
          <div className="space-y-3">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button className="bg-red-800 hover:bg-red-900 text-white border-0 whitespace-nowrap font-bold">
                <Filter className="h-4 w-4 mr-1" />
                Filtros
              </Button>
              <Badge className="bg-green-600 text-white border-0 whitespace-nowrap font-bold">Disponível</Badge>
              <Badge className="bg-amber-600 text-white border-0 whitespace-nowrap font-bold">Próximas</Badge>
            </div>

            {/* Legenda de Performance */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-xs font-bold mb-2">Legenda de Performance:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-600 rounded-full"></div>
                  <span>Excelente</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
                  <span>Boa</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-amber-600 rounded-full"></div>
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
            Ordenar por performance
          </Button>
        </div>

        {/* Grid com Sistema de Cores */}
        <div className="space-y-4">
          {professionals.map((professional) => (
            <Card
              key={professional.id}
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 border-2 ${getCardBorderColor(professional.performance)}`}
            >
              <CardContent className="p-4">
                <div className="flex gap-4">
                  {/* Avatar com Indicador de Performance */}
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-3 border-amber-500">
                      <AvatarImage src={professional.image || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-red-800 to-black text-white text-xl font-bold">
                        {professional.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {professional.available && (
                      <div className="absolute -top-1 -right-1 h-8 w-8 bg-green-600 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="h-3 w-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    )}
                    {/* Badge de Performance */}
                    <div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-bold border-2 ${getPerformanceColor(professional.performance)} flex items-center gap-1`}
                    >
                      {getPerformanceIcon(professional.performance)}
                      <span className="capitalize">{professional.performance}</span>
                    </div>
                  </div>

                  {/* Informações com Métricas de Performance */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-black truncate">{professional.name}</h3>
                        <p className="text-sm text-red-800 font-medium mb-1">{professional.title}</p>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                          <span className="text-sm font-bold text-black">{professional.rating}</span>
                          <span className="text-sm text-gray-600">({professional.reviews})</span>
                        </div>
                      </div>
                      <div className={`text-2xl font-bold ${getPriceColor(professional.priceRange)}`}>
                        {professional.priceRange}
                      </div>
                    </div>

                    {/* Métricas de Performance */}
                    <div className="bg-white/80 p-2 rounded-lg mb-3 border border-gray-200">
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                          <p className="font-bold text-black">{professional.responseTime}</p>
                          <p className="text-gray-600">Resposta</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-black">{professional.completionRate}%</p>
                          <p className="text-gray-600">Conclusão</p>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-black">{professional.avgTime}</p>
                          <p className="text-gray-600">Tempo Médio</p>
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

                    {/* Estatísticas */}
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-700 mb-3 font-medium">
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3 text-red-800" />
                        <span>{professional.services} serviços</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-amber-600" />
                        <span>{professional.avgTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-green-600" />
                        <span>{professional.distance}</span>
                      </div>
                    </div>

                    {/* Botão de Ação com Cor Baseada na Performance */}
                    <Button
                      className={`w-full font-bold py-3 ${
                        professional.performance === "excellent" || professional.performance === "good"
                          ? "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                          : professional.performance === "average"
                            ? "bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700"
                            : "bg-gradient-to-r from-red-600 to-black hover:from-red-700 hover:to-gray-800"
                      } text-white`}
                      disabled={!professional.available}
                    >
                      {professional.available ? "Agendar Atendimento" : "Indisponível"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
