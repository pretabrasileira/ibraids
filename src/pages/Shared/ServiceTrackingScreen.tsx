"use client"

import { ArrowLeft, MapPin, Star, Phone, MessageCircle, Navigation, AlertTriangle, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ServiceTrackingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-700 text-white relative overflow-hidden">
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
              <AvatarFallback className="bg-amber-700 text-white font-bold">AS</AvatarFallback>
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
        <Card className="shadow-lg bg-white border-2 border-amber-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
              <Navigation className="h-5 w-5 text-amber-600" />
              Trajeto Monitorado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-4 h-40 relative border-2 border-amber-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 300 150" className="opacity-70">
                  {/* Ruas */}
                  <path d="M30,75 Q90,45 150,75 T270,75" stroke="#8B5A2B" strokeWidth="3" fill="none" />
                  <path d="M75,30 L75,120" stroke="#A0522D" strokeWidth="2" />
                  <path d="M225,30 L225,120" stroke="#A0522D" strokeWidth="2" />

                  {/* Pontos de Interesse */}
                  <circle cx="45" cy="75" r="6" fill="#DC2626" />
                  <circle cx="255" cy="75" r="6" fill="#16A34A" />
                  <circle cx="150" cy="75" r="5" fill="#F59E0B" className="animate-pulse" />

                  {/* Trajeto */}
                  <path d="M45,75 Q97,50 150,75" stroke="#DC2626" strokeWidth="4" strokeDasharray="8,4" />
                  <path d="M150,75 Q202,50 255,75" stroke="#9CA3AF" strokeWidth="3" strokeDasharray="5,5" />
                </svg>
              </div>

              <div className="absolute bottom-2 left-2 bg-white/95 rounded px-3 py-2 text-xs shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-red-600 rounded-full"></div>
                    <span className="font-medium">Origem</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-amber-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Você</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-green-600 rounded-full"></div>
                    <span className="font-medium">Destino</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <p className="text-xs text-amber-700 font-medium">Tempo Restante</p>
                <p className="font-bold text-amber-800 text-lg">12 min</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                <p className="text-xs text-orange-700 font-medium">Distância</p>
                <p className="font-bold text-orange-800 text-lg">2.3 km</p>
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
              <h3 className="font-bold text-red-900 text-lg">Botão de Emergência</h3>
              <p className="text-sm text-red-700 font-medium">Pressione se sentir-se insegura ou em perigo</p>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg">
                🚨 ATIVAR PÂNICO
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detalhes do Atendimento */}
        <Card className="shadow-lg border-amber-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
            <CardTitle className="text-lg text-amber-800">Detalhes do Atendimento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-amber-700 font-medium">Serviço:</span>
              <span className="font-bold text-amber-900">Box Braids Médias</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-amber-700 font-medium">Valor:</span>
              <span className="font-bold text-green-600 text-xl">R$ 180,00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-amber-700 font-medium">Tempo estimado:</span>
              <span className="font-bold text-amber-900">2h 30min</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-amber-700 font-medium">Avaliação da Cliente:</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <span className="font-bold text-amber-900">4.8</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg border-l-4 border-l-amber-600">
              <p className="text-sm text-amber-800 font-medium">
                ✅ Atendimento monitorado por GPS • Cliente verificada • Suporte 24h ativo
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Endereço de Destino */}
        <Card className="shadow-lg border-amber-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
            <CardTitle className="text-lg flex items-center gap-2 text-amber-800">
              <MapPin className="h-5 w-5 text-amber-600" />
              Destino
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <p className="font-bold text-amber-900">Rua das Flores, 123 - Apt 45</p>
              <p className="text-sm text-amber-700">Vila Madalena, São Paulo - SP</p>
              <p className="text-sm text-amber-700">CEP: 05432-000</p>

              <div className="flex items-center gap-3 mt-4 p-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border border-amber-300">
                <Clock className="h-5 w-5 text-amber-700" />
                <div>
                  <p className="text-sm font-bold text-amber-800">Chegada prevista: 14:45</p>
                  <p className="text-xs text-amber-600">Baseado no trânsito atual</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ações de Contato */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 shadow-lg">
            <Phone className="h-4 w-4 mr-2" />
            Ligar Cliente
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 shadow-lg">
            <MessageCircle className="h-4 w-4 mr-2" />
            Mensagem
          </Button>
        </div>

        {/* Status de Segurança */}
        <Card className="border-2 border-green-200 shadow-lg bg-gradient-to-r from-green-50 to-amber-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <div className="h-12 w-12 bg-green-600 rounded-full mx-auto flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-green-800 text-lg">Atendimento Seguro</h3>
              <div className="space-y-2 text-sm text-green-700">
                <p>✓ Localização compartilhada em tempo real</p>
                <p>✓ Cliente verificada no sistema</p>
                <p>✓ Suporte de emergência 24h ativo</p>
                <p>✓ Contatos de emergência notificados</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
