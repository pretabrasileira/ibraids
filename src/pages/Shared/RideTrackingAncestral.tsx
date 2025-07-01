"use client"

import { ArrowLeft, MapPin, Star, Phone, MessageCircle, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function RideTrackingAncestral() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      {/* Header with Ancestral Pattern */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-600 text-white relative overflow-hidden">
        {/* Ancestral Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <pattern id="ancestral-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" />
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ancestral-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-bold tracking-wide">Acompanhar Jornada</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16 border-3 border-pink-300">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-pink-600 text-white text-lg font-bold">MC</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-lg">Maria Clara</h2>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.9 • Mestra em Tranças Ancestrais</span>
              </div>
              <p className="text-orange-100 text-sm">Especialista em Arte Capilar Africana</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Status da Jornada */}
        <Card className="border-l-4 border-l-pink-500 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
              <div className="h-3 w-3 bg-pink-500 rounded-full animate-pulse"></div>
              Criando Arte Ancestral
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-amber-700 font-medium">Progresso da Transformação</span>
              <span className="text-sm font-bold text-pink-600">75%</span>
            </div>
            <Progress value={75} className="h-3 bg-orange-100" />

            <div className="grid grid-cols-2 gap-4 text-sm bg-orange-50 p-3 rounded-lg">
              <div>
                <span className="text-amber-700 font-medium">Início da Jornada:</span>
                <p className="font-bold text-amber-800">14:30</p>
              </div>
              <div>
                <span className="text-amber-700 font-medium">Conclusão Prevista:</span>
                <p className="font-bold text-amber-800">17:00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detalhes do Ritual Capilar */}
        <Card className="shadow-lg border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-pink-100">
            <CardTitle className="text-lg text-amber-800 flex items-center gap-2">
              <div className="h-6 w-6 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✨</span>
              </div>
              Ritual de Beleza Ancestral
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-amber-700 font-medium">Arte Escolhida:</span>
              <span className="font-bold text-amber-800">Box Braids Médias</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-amber-700 font-medium">Investimento:</span>
              <span className="font-bold text-pink-600 text-xl">R$ 180,00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-amber-700 font-medium">Tempo de Criação:</span>
              <span className="font-bold text-amber-800">2h 30min</span>
            </div>

            {/* Ancestral Quote */}
            <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-3 rounded-lg border-l-4 border-l-pink-500">
              <p className="text-sm italic text-amber-800 font-medium">
                "Cada trança conta uma história, cada fio carrega ancestralidade"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Localização Sagrada */}
        <Card className="shadow-lg border-pink-200">
          <CardHeader className="bg-gradient-to-r from-pink-100 to-orange-100">
            <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
              <MapPin className="h-5 w-5 text-pink-600" />
              Localização do Ritual
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <p className="text-sm text-amber-700 font-medium">Endereço do Atendimento:</p>
              <p className="font-bold text-amber-800">Rua das Flores, 123 - Apt 45</p>
              <p className="text-sm text-amber-600">Vila Madalena, São Paulo - SP</p>

              <div className="flex items-center gap-2 mt-4 p-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg border border-orange-200">
                <Navigation className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="text-sm font-bold text-orange-700">Chegada em 15 minutos</p>
                  <p className="text-xs text-orange-600">Sua artista está a caminho</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ações de Conexão */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3">
            <Phone className="h-4 w-4 mr-2" />
            Conectar
          </Button>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3">
            <MessageCircle className="h-4 w-4 mr-2" />
            Mensagem
          </Button>
        </div>

        {/* Avaliação da Experiência */}
        <Card className="border-2 border-pink-200 shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">👑</span>
              </div>
              <h3 className="font-bold text-amber-800 text-lg">Como foi sua experiência ancestral?</h3>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-10 w-10 text-orange-300 hover:text-yellow-400 cursor-pointer transition-colors"
                  />
                ))}
              </div>
              <p className="text-sm text-amber-600 font-medium">Avalie após o término do ritual</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
