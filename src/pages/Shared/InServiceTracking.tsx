"use client"

import { ArrowLeft, MapPin, Star, Phone, MessageCircle, Navigation, AlertTriangle, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function InServiceTracking() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-red-900 text-white relative overflow-hidden">
        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-bold tracking-wide">Em Atendimento</h1>
            </div>
            <Badge className="bg-green-600 text-white border-0 font-bold animate-pulse">
              <Shield className="h-4 w-4 mr-1" />
              Monitorado
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border-2 border-amber-500">
              <AvatarImage src="/placeholder.svg?height=48&width=48" />
              <AvatarFallback className="bg-red-900 text-white font-bold">AS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-bold">Ana Silva</h2>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="text-sm">4.8 • Cliente Verificada</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Mapa de Trajeto */}
        <Card className="shadow-lg bg-white border-2 border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-black">
              <Navigation className="h-5 w-5 text-green-600" />
              Trajeto Monitorado
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Simulação do Mapa */}
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-4 h-32 relative border-2 border-green-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 200 100" className="opacity-60">
                  {/* Ruas */}
                  <path d="M20,50 Q60,30 100,50 T180,50" stroke="#4B5563" strokeWidth="2" fill="none" />
                  <path d="M50,20 L50,80" stroke="#6B7280" strokeWidth="1" />
                  <path d="M150,20 L150,80" stroke="#6B7280" strokeWidth="1" />

                  {/* Pontos de Interesse */}
                  <circle cx="30" cy="50" r="4" fill="#DC2626" />
                  <circle cx="170" cy="50" r="4" fill="#16A34A" />
                  <circle cx="100" cy="50" r="3" fill="#F59E0B" className="animate-pulse" />

                  {/* Trajeto */}
                  <path d="M30,50 Q65,35 100,50" stroke="#DC2626" strokeWidth="3" strokeDasharray="5,5" />
                  <path d="M100,50 Q135,35 170,50" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="3,3" />
                </svg>
              </div>

              {/* Legenda do Mapa */}
              <div className="absolute bottom-2 left-2 bg-white/90 rounded px-2 py-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                    <span>Origem</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 bg-amber-500 rounded-full animate-pulse"></div>
                    <span>Você</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    <span>Destino</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações do Trajeto */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="bg-green-50 p-2 rounded-lg border border-green-200">
                <p className="text-xs text-green-700 font-medium">Tempo Restante</p>
                <p className="font-bold text-green-800">12 min</p>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-700 font-medium">Distância</p>
                <p className="font-bold text-blue-800">2.3 km</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Botão de Pânico - Destaque */}
        <Card className="border-2 border-red-600 bg-gradient-to-r from-red-50 to-red-100 shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <div className="h-16 w-16 bg-red-600 rounded-full mx-auto flex items-center justify-center animate-pulse">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-red-900 text-lg">Emergência</h3>
              <p className="text-sm text-red-700 font-medium">Pressione se sentir-se insegura</p>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg">
                🚨 ATIVAR PÂNICO
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detalhes do Atendimento */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-green-50">
            <CardTitle className="text-lg text-black">Detalhes do Atendimento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Serviço:</span>
              <span className="font-bold text-black">Box Braids Médias</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Valor:</span>
              <span className="font-bold text-green-600 text-xl">R$ 180,00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Tempo estimado:</span>
              <span className="font-bold text-black">2h 30min</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Avaliação da Cliente:</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="font-bold text-black">4.8</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Endereço de Destino */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardTitle className="text-lg flex items-center gap-2 text-black">
              <MapPin className="h-5 w-5 text-green-600" />
              Destino
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <p className="font-bold text-black">Rua das Flores, 123 - Apt 45</p>
              <p className="text-sm text-gray-600">Vila Madalena, São Paulo - SP</p>
              <p className="text-sm text-gray-600">CEP: 05432-000</p>

              <div className="flex items-center gap-3 mt-4 p-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border border-green-300">
                <Clock className="h-5 w-5 text-green-700" />
                <div>
                  <p className="text-sm font-bold text-green-800">Chegada prevista: 14:45</p>
                  <p className="text-xs text-green-600">Baseado no trânsito atual</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ações de Contato */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 shadow-lg">
            <Phone className="h-4 w-4 mr-2" />
            Ligar Cliente
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white font-bold py-3 shadow-lg">
            <MessageCircle className="h-4 w-4 mr-2" />
            Mensagem
          </Button>
        </div>

        {/* Status de Segurança */}
        <Card className="border-2 border-green-200 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-green-600 rounded-full mx-auto flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-green-800 text-lg">Atendimento Seguro</h3>
              <div className="space-y-2 text-sm text-green-700">
                <p>✓ Localização compartilhada</p>
                <p>✓ Cliente verificada</p>
                <p>✓ Suporte 24h ativo</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
