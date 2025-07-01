"use client"
import {
  MapPin,
  DollarSign,
  Star,
  Phone,
  MessageCircle,
  AlertTriangle,
  Shield,
  User,
  ArrowLeft,
  Home,
  BarChart3,
  CheckCircle,
  Timer,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ServiceScreen() {
  const serviceData = {
    client: {
      name: "Carla Santos",
      avatar: "CS",
      rating: 4.8,
      phone: "(11) 99999-9999",
    },
    service: {
      type: "Tranças Nagô",
      value: 180,
      estimatedTime: "3h 30min",
      startTime: "14:30",
      currentTime: "15:45",
    },
    location: {
      origin: "Rua das Flores, 123 - Vila Madalena",
      destination: "Av. Paulista, 456 - Bela Vista",
      estimatedArrival: "16:15",
      distance: "8.5 km",
    },
    status: "in-progress",
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#c6701a] to-[#7f2317] text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Em Atendimento</h1>
              <p className="text-orange-200 text-sm">Monitoramento Ativo</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-[#3f6239] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Seguro</span>
          </div>
        </div>

        {/* Status do Atendimento */}
        <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#3f6239]" />
              <span className="font-bold">Atendimento Iniciado</span>
            </div>
            <Badge className="bg-[#3f6239] text-white rounded-lg">Em Andamento</Badge>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Timer className="h-4 w-4" />
            <span>Iniciado às {serviceData.service.startTime} • Tempo decorrido: 1h 15min</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Mapa de Localização */}
        <Card className="bg-white shadow-lg border-2 border-orange-200 rounded-2xl overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#c6701a] mx-auto mb-2" />
                <p className="text-[#7f2317] font-bold">Mapa de Localização</p>
                <p className="text-sm text-gray-600">GPS Ativo • Trajeto Monitorado</p>
              </div>
            </div>

            {/* Simulação de pontos no mapa */}
            <div className="absolute top-4 left-4 h-4 w-4 bg-[#3f6239] rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            <div className="absolute bottom-4 right-4 h-4 w-4 bg-[#7f2317] rounded-full border-2 border-white shadow-lg"></div>

            {/* Linha do trajeto */}
            <svg className="absolute inset-0 w-full h-full">
              <path
                d="M 20 20 Q 100 80 180 180"
                stroke="#c6701a"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            </svg>
          </div>

          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Origem</p>
                <p className="text-sm font-bold text-[#7f2317]">{serviceData.location.origin}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Destino</p>
                <p className="text-sm font-bold text-[#7f2317]">{serviceData.location.destination}</p>
              </div>
            </div>
            <div className="mt-3 p-2 bg-orange-50 rounded-lg">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#c6701a] font-medium">Distância: {serviceData.location.distance}</span>
                <span className="text-[#3f6239] font-medium">Chegada: {serviceData.location.estimatedArrival}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Informações da Cliente */}
        <Card className="bg-white shadow-lg border-2 border-orange-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <User className="h-5 w-5" />
              Informações da Cliente
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-orange-300">
                  <AvatarFallback className="bg-[#c6701a] text-white font-bold">
                    {serviceData.client.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-[#7f2317]">{serviceData.client.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                    <span className="text-sm text-gray-600">{serviceData.client.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-[#3f6239] hover:bg-green-700 text-white rounded-xl">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button size="sm" className="bg-[#c6701a] hover:bg-orange-700 text-white rounded-xl">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-orange-50 rounded-xl">
                <p className="text-2xl font-bold text-[#3f6239]">R$ {serviceData.service.value}</p>
                <p className="text-xs text-gray-600">Valor do Serviço</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <p className="text-2xl font-bold text-[#c6701a]">{serviceData.service.estimatedTime}</p>
                <p className="text-xs text-gray-600">Tempo Estimado</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detalhes do Serviço */}
        <Card className="bg-white shadow-lg border-2 border-orange-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <Star className="h-5 w-5" />
              Detalhes do Serviço
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div>
              <h4 className="font-bold text-[#7f2317] mb-2">{serviceData.service.type}</h4>
              <p className="text-sm text-gray-600 mb-3">
                Serviço de tranças tradicionais nagô com técnica ancestral, incluindo preparação do cabelo e finalização
                com produtos naturais.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progresso do Atendimento</span>
                <span className="text-[#c6701a] font-bold">35%</span>
              </div>
              <Progress value={35} className="h-2" />
              <p className="text-xs text-gray-500">Preparação concluída • Iniciando trançado</p>
            </div>
          </CardContent>
        </Card>

        {/* Botão de Pânico */}
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-12 w-12 mx-auto mb-3 animate-pulse" />
            <h3 className="text-xl font-bold mb-2">Botão de Emergência</h3>
            <p className="text-red-100 text-sm mb-4">
              Em caso de problemas, pressione para acionar o suporte de emergência
            </p>
            <Button className="bg-white text-red-600 hover:bg-red-50 font-bold text-lg px-8 py-3 rounded-xl">
              🚨 EMERGÊNCIA
            </Button>
          </CardContent>
        </Card>

        {/* Status de Segurança */}
        <Card className="bg-gradient-to-r from-[#3f6239] to-green-600 text-white shadow-lg rounded-2xl">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8" />
                <div>
                  <h4 className="font-bold">Status de Segurança</h4>
                  <p className="text-green-100 text-sm">Monitoramento 24h Ativo</p>
                </div>
              </div>
              <div className="text-right">
                <div className="h-3 w-3 bg-green-300 rounded-full animate-pulse mb-1"></div>
                <p className="text-xs">Protegida</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navegação Inferior */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-200 p-4 shadow-lg">
          <div className="flex justify-around max-w-md mx-auto">
            <Button variant="ghost" className="flex flex-col gap-1 text-gray-500 hover:text-[#7f2317]">
              <div className="h-8 w-8 bg-gray-400 rounded-xl flex items-center justify-center">
                <Home className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs">Início</span>
            </Button>
            <Button variant="ghost" className="flex flex-col gap-1 text-[#c6701a] hover:text-[#7f2317]">
              <div className="h-8 w-8 bg-[#7f2317] rounded-xl flex items-center justify-center shadow-md">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-bold">Atendimento</span>
            </Button>
            <Button variant="ghost" className="flex flex-col gap-1 text-gray-500 hover:text-[#7f2317]">
              <div className="h-8 w-8 bg-gray-400 rounded-xl flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs">Financeiro</span>
            </Button>
            <Button variant="ghost" className="flex flex-col gap-1 text-gray-500 hover:text-[#7f2317]">
              <div className="h-8 w-8 bg-gray-400 rounded-xl flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs">Relatórios</span>
            </Button>
          </div>
        </div>

        <div className="h-20"></div>
      </div>
    </div>
  )
}
