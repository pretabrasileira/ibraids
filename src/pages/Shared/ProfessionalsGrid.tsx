"use client"

import { Search, Filter, Star, MapPin, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function ProfessionalsGrid() {
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
    },
    {
      id: 3,
      name: "Carla Fernandes",
      rating: 4.7,
      reviews: 83,
      services: 54,
      avgTime: "3h 00min",
      priceRange: "$$$",
      specialties: ["Fulani Braids", "Goddess Braids"],
      distance: "3.5 km",
      available: false,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "Juliana Costa",
      rating: 4.9,
      reviews: 156,
      services: 112,
      avgTime: "2h 45min",
      priceRange: "$$",
      specialties: ["Tranças Soltas", "Box Braids"],
      distance: "1.8 km",
      available: true,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const getPriceColor = (range: string) => {
    switch (range) {
      case "$":
        return "text-green-600"
      case "$$":
        return "text-yellow-600"
      case "$$$":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
        <h1 className="text-xl font-bold mb-4">Encontre sua Trancista</h1>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar por especialidade ou nome..."
            className="pl-10 bg-white/90 border-0 text-gray-900"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button variant="secondary" size="sm" className="bg-white/20 text-white border-0 whitespace-nowrap">
            <Filter className="h-4 w-4 mr-1" />
            Filtros
          </Button>
          <Badge variant="secondary" className="bg-white/20 text-white border-0 whitespace-nowrap">
            Disponível agora
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-0 whitespace-nowrap">
            Próximo a mim
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-0 whitespace-nowrap">
            Melhor avaliadas
          </Badge>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">24 trancistas encontradas</p>
          <Button variant="ghost" size="sm" className="text-purple-600">
            Ordenar por
          </Button>
        </div>

        {/* Professionals Grid */}
        <div className="space-y-4">
          {professionals.map((professional) => (
            <Card key={professional.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <Avatar className="h-20 w-20 border-2 border-purple-200">
                      <AvatarImage src={professional.image || "/placeholder.svg"} />
                      <AvatarFallback className="bg-purple-100 text-purple-700 text-lg">
                        {professional.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {professional.available && (
                      <div className="absolute -top-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg truncate">{professional.name}</h3>
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{professional.rating}</span>
                          <span className="text-sm text-gray-500">({professional.reviews})</span>
                        </div>
                      </div>
                      <div className={`text-lg font-bold ${getPriceColor(professional.priceRange)}`}>
                        {professional.priceRange}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {professional.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        <span>{professional.services} serviços</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{professional.avgTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{professional.distance}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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

        {/* Load More */}
        <div className="text-center mt-6">
          <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
            Carregar mais profissionais
          </Button>
        </div>
      </div>
    </div>
  )
}
