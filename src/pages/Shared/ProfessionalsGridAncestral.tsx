"use client"

import { Search, Filter, Star, MapPin, Clock, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function ProfessionalsGridAncestral() {
  const professionals = [
    {
      id: 1,
      name: "Maria Clara Santos",
      title: "Mestra em Artes Ancestrais",
      rating: 4.9,
      reviews: 127,
      services: 89,
      avgTime: "2h 30min",
      priceRange: "$$$",
      specialties: ["Box Braids Reais", "Tranças Nagô"],
      distance: "1.2 km",
      available: true,
      image: "/placeholder.svg?height=80&width=80",
      level: "Rainha",
      ancestralQuote: "Cada trança é uma oração ancestral",
    },
    {
      id: 2,
      name: "Ana Beatriz Silva",
      title: "Guardiã das Tradições",
      rating: 4.8,
      reviews: 95,
      services: 67,
      avgTime: "2h 15min",
      priceRange: "$$",
      specialties: ["Twist Africano", "Crochet Sagrado"],
      distance: "2.1 km",
      available: true,
      image: "/placeholder.svg?height=80&width=80",
      level: "Princesa",
      ancestralQuote: "Beleza que vem da alma",
    },
    {
      id: 3,
      name: "Carla Fernandes",
      title: "Artista da Coroa Negra",
      rating: 4.7,
      reviews: 83,
      services: 54,
      avgTime: "3h 00min",
      priceRange: "$$$",
      specialties: ["Fulani Braids", "Goddess Braids"],
      distance: "3.5 km",
      available: false,
      image: "/placeholder.svg?height=80&width=80",
      level: "Guerreira",
      ancestralQuote: "Arte que honra nossos ancestrais",
    },
    {
      id: 4,
      name: "Juliana Costa",
      title: "Sacerdotisa das Tranças",
      rating: 4.9,
      reviews: 156,
      services: 112,
      avgTime: "2h 45min",
      priceRange: "$$",
      specialties: ["Tranças Soltas", "Box Braids Divinas"],
      distance: "1.8 km",
      available: true,
      image: "/placeholder.svg?height=80&width=80",
      level: "Rainha",
      ancestralQuote: "Transformo cabelos em obras de arte",
    },
  ]

  const getPriceColor = (range: string) => {
    switch (range) {
      case "$":
        return "text-orange-600"
      case "$$":
        return "text-pink-600"
      case "$$$":
        return "text-amber-700"
      default:
        return "text-gray-600"
    }
  }

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Rainha":
        return "👑"
      case "Princesa":
        return "✨"
      case "Guerreira":
        return "⚔️"
      default:
        return "🌟"
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Rainha":
        return "bg-yellow-500 text-white"
      case "Princesa":
        return "bg-pink-500 text-white"
      case "Guerreira":
        return "bg-orange-500 text-white"
      default:
        return "bg-amber-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      {/* Header Ancestral */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-600 text-white relative overflow-hidden">
        {/* Padrão Kente de Fundo */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 80 80" className="h-full w-full">
            <defs>
              <pattern id="kente-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" />
                <path d="M0,20 L40,20 M20,0 L20,40" stroke="white" strokeWidth="1" />
                <rect x="5" y="5" width="10" height="10" fill="white" opacity="0.3" />
                <rect x="25" y="25" width="10" height="10" fill="white" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kente-grid)" />
          </svg>
        </div>

        <div className="relative p-4">
          <h1 className="text-xl font-bold mb-4 tracking-wide">Encontre sua Mestra</h1>

          {/* Barra de Busca Ancestral */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-600" />
            <Input
              placeholder="Buscar por arte ancestral ou mestra..."
              className="pl-10 bg-white/95 border-2 border-orange-200 text-amber-800 font-medium placeholder:text-amber-600"
            />
          </div>

          {/* Filtros Sagrados */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white border-0 whitespace-nowrap font-bold">
              <Filter className="h-4 w-4 mr-1" />
              Filtros Sagrados
            </Button>
            <Badge className="bg-orange-500 text-white border-0 whitespace-nowrap font-bold">Disponível agora</Badge>
            <Badge className="bg-pink-500 text-white border-0 whitespace-nowrap font-bold">Próximas a mim</Badge>
            <Badge className="bg-amber-600 text-white border-0 whitespace-nowrap font-bold">Rainhas das Tranças</Badge>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-amber-700 font-bold">24 mestras encontradas</p>
          <Button variant="ghost" size="sm" className="text-orange-600 font-bold">
            Ordenar por magia
          </Button>
        </div>

        {/* Grid das Mestras */}
        <div className="space-y-4">
          {professionals.map((professional) => (
            <Card
              key={professional.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-orange-200"
            >
              <CardContent className="p-4">
                <div className="flex gap-4">
                  {/* Avatar Ancestral */}
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-3 border-pink-300">
                      <AvatarImage src={professional.image || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xl font-bold">
                        {professional.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {professional.available && (
                      <div className="absolute -top-1 -right-1 h-8 w-8 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="h-3 w-3 bg-white rounded-full animate-pulse"></div>
                      </div>
                    )}
                    {/* Nível da Mestra */}
                    <div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-bold ${getLevelColor(professional.level)}`}
                    >
                      {getLevelIcon(professional.level)} {professional.level}
                    </div>
                  </div>

                  {/* Informações da Mestra */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-amber-800 truncate">{professional.name}</h3>
                        <p className="text-sm text-orange-600 font-medium mb-1">{professional.title}</p>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold text-amber-800">{professional.rating}</span>
                          <span className="text-sm text-amber-600">({professional.reviews})</span>
                        </div>
                      </div>
                      <div className={`text-2xl font-bold ${getPriceColor(professional.priceRange)}`}>
                        {professional.priceRange}
                      </div>
                    </div>

                    {/* Citação Ancestral */}
                    <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-2 rounded-lg mb-3 border-l-4 border-l-pink-500">
                      <p className="text-xs italic text-amber-700 font-medium">"{professional.ancestralQuote}"</p>
                    </div>

                    {/* Especialidades */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {professional.specialties.map((specialty, index) => (
                        <Badge
                          key={index}
                          className="text-xs bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Estatísticas Sagradas */}
                    <div className="grid grid-cols-3 gap-2 text-xs text-amber-700 mb-3 font-medium">
                      <div className="flex items-center gap-1">
                        <Crown className="h-3 w-3 text-pink-600" />
                        <span>{professional.services} rituais</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-orange-600" />
                        <span>{professional.avgTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-pink-600" />
                        <span>{professional.distance}</span>
                      </div>
                    </div>

                    {/* Botão de Ação */}
                    <Button
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-3"
                      disabled={!professional.available}
                    >
                      {professional.available ? "🌟 Agendar Ritual Ancestral" : "Indisponível"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carregar Mais Mestras */}
        <div className="text-center mt-6">
          <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-3">
            Descobrir mais mestras ancestrais
          </Button>
        </div>
      </div>
    </div>
  )
}
