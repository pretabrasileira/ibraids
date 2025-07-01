"use client"

import { Search, Filter, Star, MapPin, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function ProfessionalsGridSophisticated() {
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
      level: "Master",
      experience: "8 anos",
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
      level: "Expert",
      experience: "5 anos",
    },
    {
      id: 3,
      name: "Carla Fernandes",
      title: "Artista Capilar",
      rating: 4.7,
      reviews: 83,
      services: 54,
      avgTime: "3h 00min",
      priceRange: "$$$",
      specialties: ["Fulani Braids", "Goddess Braids"],
      distance: "3.5 km",
      available: false,
      image: "/placeholder.svg?height=80&width=80",
      level: "Professional",
      experience: "6 anos",
    },
    {
      id: 4,
      name: "Juliana Costa",
      title: "Mestra Trancista",
      rating: 4.9,
      reviews: 156,
      services: 112,
      avgTime: "2h 45min",
      priceRange: "$$",
      specialties: ["Tranças Soltas", "Box Braids Deluxe"],
      distance: "1.8 km",
      available: true,
      image: "/placeholder.svg?height=80&width=80",
      level: "Master",
      experience: "10 anos",
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
        return "text-stone-600"
    }
  }

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Master":
        return "bg-red-800 text-white"
      case "Expert":
        return "bg-amber-600 text-white"
      case "Professional":
        return "bg-stone-600 text-white"
      default:
        return "bg-stone-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50">
      {/* Header Profissional */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-white relative overflow-hidden">
        {/* Padrão Geométrico */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <pattern id="professional-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <rect width="50" height="50" fill="none" />
                <path d="M0,25 L50,25 M25,0 L25,50" stroke="white" strokeWidth="0.5" />
                <circle cx="12.5" cy="12.5" r="1" fill="white" />
                <circle cx="37.5" cy="37.5" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#professional-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <h1 className="text-xl font-bold mb-4 tracking-wide">Profissionais Premium</h1>

          {/* Barra de Busca */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-600" />
            <Input
              placeholder="Buscar especialista ou serviço..."
              className="pl-10 bg-white/95 border-2 border-stone-300 text-stone-800 font-medium placeholder:text-stone-600"
            />
          </div>

          {/* Filtros */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button className="bg-red-800 hover:bg-red-900 text-white border-0 whitespace-nowrap font-bold">
              <Filter className="h-4 w-4 mr-1" />
              Filtros
            </Button>
            <Badge className="bg-stone-600 text-white border-0 whitespace-nowrap font-bold">Disponível agora</Badge>
            <Badge className="bg-amber-600 text-white border-0 whitespace-nowrap font-bold">Próximas</Badge>
            <Badge className="bg-red-800 text-white border-0 whitespace-nowrap font-bold">Top Rated</Badge>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-stone-700 font-bold">24 profissionais encontradas</p>
          <Button variant="ghost" size="sm" className="text-red-800 font-bold">
            Ordenar por
          </Button>
        </div>

        {/* Grid de Profissionais */}
        <div className="space-y-4">
          {professionals.map((professional) => (
            <Card
              key={professional.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-stone-200 bg-white"
            >
              <CardContent className="p-4">
                <div className="flex gap-4">
                  {/* Avatar Profissional */}
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-3 border-amber-500">
                      <AvatarImage src={professional.image || "/placeholder.svg"} />
                      <AvatarFallback className="bg-gradient-to-r from-red-800 to-stone-800 text-white text-xl font-bold">
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
                    {/* Badge de Nível */}
                    <div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-bold ${getLevelBadge(professional.level)}`}
                    >
                      {professional.level}
                    </div>
                  </div>

                  {/* Informações */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-stone-800 truncate">{professional.name}</h3>
                        <p className="text-sm text-red-800 font-medium mb-1">{professional.title}</p>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                          <span className="text-sm font-bold text-stone-800">{professional.rating}</span>
                          <span className="text-sm text-stone-600">({professional.reviews})</span>
                        </div>
                      </div>
                      <div className={`text-2xl font-bold ${getPriceColor(professional.priceRange)}`}>
                        {professional.priceRange}
                      </div>
                    </div>

                    {/* Experiência */}
                    <div className="bg-gradient-to-r from-stone-100 to-amber-100 p-2 rounded-lg mb-3 border-l-4 border-l-red-800">
                      <p className="text-xs text-stone-700 font-medium">
                        <Award className="h-3 w-3 inline mr-1" />
                        {professional.experience} de experiência profissional
                      </p>
                    </div>

                    {/* Especialidades */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {professional.specialties.map((specialty, index) => (
                        <Badge
                          key={index}
                          className="text-xs bg-gradient-to-r from-red-800 to-stone-800 text-white font-bold"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Estatísticas */}
                    <div className="grid grid-cols-3 gap-2 text-xs text-stone-700 mb-3 font-medium">
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3 text-red-800" />
                        <span>{professional.services} serviços</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-amber-600" />
                        <span>{professional.avgTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-stone-600" />
                        <span>{professional.distance}</span>
                      </div>
                    </div>

                    {/* Botão de Ação */}
                    <Button
                      className="w-full bg-gradient-to-r from-red-800 to-stone-800 hover:from-red-900 hover:to-stone-900 text-white font-bold py-3"
                      disabled={!professional.available}
                    >
                      {professional.available ? "Agendar Atendimento Premium" : "Indisponível"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carregar Mais */}
        <div className="text-center mt-6">
          <Button className="bg-gradient-to-r from-stone-800 to-red-800 hover:from-stone-900 hover:to-red-900 text-white font-bold px-8 py-3">
            Ver mais profissionais
          </Button>
        </div>
      </div>
    </div>
  )
}
