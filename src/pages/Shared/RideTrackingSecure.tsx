"use client"

import { ArrowLeft, MapPin, Star, Phone, MessageCircle, Navigation, AlertTriangle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function RideTrackingSecure() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Header com Segurança */}
      <div className="bg-gradient-to-r from-black to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 60 60" className="h-full w-full">
            <defs>
              <pattern id="security-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <rect width="30" height="30" fill="none" />
                <circle cx="15" cy="15" r="1" fill="white" />
                <path d="M5,5 L25,25 M25,5 L5,25" stroke="white" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#security-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-bold tracking-wide">Atendimento Seguro</h1>
            </div>
            <Badge className="bg-green-600 text-white border-0 font-bold">
              <Shield className="h-4 w-4 mr-1" />
              Protegida
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16 border-3 border-amber-500">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-red-900 text-white text-lg font-bold">MC</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-600 rounded-full border-2 border-white flex items-center justify-center">
                <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-lg">Maria Clara Santos</h2>
              <div className="flex items-center gap-1 mb-1">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="text-sm font-medium">4.9 • Verificada</span>
              </div>
              <p className="text-gray-300 text-sm">ID: #TR2024-1547</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Botão de Pânico - Destaque Principal */}
        <Card className="border-2 border-red-600 bg-gradient-to-r from-red-50 to-red-100 shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <div className="h-16 w-16 bg-red-600 rounded-full mx-auto flex items-center justify-center animate-pulse">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-red-900 text-lg">Botão de Emergência</h3>
              <p className="text-sm text-red-700 font-medium">Pressione em caso de problemas ou situação de risco</p>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg">
                🚨 ATIVAR EMERGÊNCIA
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Status do Atendimento */}
        <Card className="border-l-4 border-l-green-600 shadow-lg bg-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-black">
              <div className="h-3 w-3 bg-green-600 rounded-full animate-pulse"></div>
              Atendimento em Andamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 font-medium">Progresso do Serviço</span>
              <span className="text-sm font-bold text-green-600">75%</span>
            </div>
            <Progress value={75} className="h-3 bg-gray-200" />

            <div className="grid grid-cols-2 gap-4 text-sm bg-green-50 p-3 rounded-lg border border-green-200">
              <div>
                <span className="text-gray-700 font-medium">Início:</span>
                <p className="font-bold text-black">14:30</p>
              </div>
              <div>
                <span className="text-gray-700 font-medium">Previsão:</span>
                <p className="font-bold text-black">17:00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detalhes do Serviço */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-green-50">
            <CardTitle className="text-lg text-black flex items-center gap-2">
              <div className="h-6 w-6 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✦</span>
              </div>
              Detalhes do Serviço
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Serviço:</span>
              <span className="font-bold text-black">Box Braids Médias</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Valor:</span>
              <span className="font-bold text-red-800 text-xl">R$ 180,00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Tempo estimado:</span>
              <span className="font-bold text-black">2h 30min</span>
            </div>

            {/* Informações de Segurança */}
            <div className="bg-gradient-to-r from-green-50 to-amber-50 p-3 rounded-lg border-l-4 border-l-green-600">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm font-bold text-green-800">Atendimento Monitorado</span>
              </div>
              <p className="text-xs text-gray-700">
                Localização compartilhada • Profissional verificada • Suporte 24h disponível
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Localização com Rastreamento */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-green-50 to-gray-50">
            <CardTitle className="text-lg flex items-center gap-2 text-black">
              <MapPin className="h-5 w-5 text-green-600" />
              Localização Rastreada
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <p className="text-sm text-gray-700 font-medium">Endereço de atendimento:</p>
              <p className="font-bold text-black">Rua das Flores, 123 - Apt 45</p>
              <p className="text-sm text-gray-600">Vila Madalena, São Paulo - SP</p>

              <div className="flex items-center gap-3 mt-4 p-3 bg-gradient-to-r from-green-100 to-amber-100 rounded-lg border border-green-300">
                <Navigation className="h-5 w-5 text-green-700" />
                <div>
                  <p className="text-sm font-bold text-green-800">Chegada em 15 minutos</p>
                  <p className="text-xs text-green-600">Localização sendo monitorada</p>
                </div>
              </div>

              {/* Contatos de Emergência */}
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="text-xs text-red-800 font-bold mb-1">Contatos de Emergência Ativados</p>
                <p className="text-xs text-red-600">Familiares notificados sobre o atendimento</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ações de Contato */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 shadow-lg">
            <Phone className="h-4 w-4 mr-2" />
            Ligar
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white font-bold py-3 shadow-lg">
            <MessageCircle className="h-4 w-4 mr-2" />
            Mensagem
          </Button>
        </div>

        {/* Avaliação de Segurança */}
        <Card className="border-2 border-amber-200 shadow-lg bg-gradient-to-r from-amber-50 to-green-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="h-12 w-12 bg-gradient-to-r from-green-600 to-amber-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">⭐</span>
              </div>
              <h3 className="font-bold text-black text-lg">Avalie o Atendimento</h3>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-10 w-10 text-gray-300 hover:text-amber-500 cursor-pointer transition-colors"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 font-medium">Sua segurança e satisfação são prioridades</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
