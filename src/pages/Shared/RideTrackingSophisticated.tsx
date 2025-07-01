"use client"

import { ArrowLeft, MapPin, Star, Phone, MessageCircle, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function RideTrackingSophisticated() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50">
      {/* Header Sofisticado */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-white relative overflow-hidden">
        {/* Padrão Geométrico Sutil */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 60 60" className="h-full w-full">
            <defs>
              <pattern id="sophisticated-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <rect width="30" height="30" fill="none" />
                <circle cx="15" cy="15" r="1" fill="white" />
                <path d="M0,15 L30,15 M15,0 L15,30" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sophisticated-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <div className="flex items-center gap-3 mb-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-bold tracking-wide">Acompanhar Atendimento</h1>
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
                <span className="text-sm font-medium">4.9 • Especialista Premium</span>
              </div>
              <p className="text-stone-300 text-sm">Mestra em Tranças Africanas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Status do Atendimento */}
        <Card className="border-l-4 border-l-red-800 shadow-lg bg-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-stone-800">
              <div className="h-3 w-3 bg-green-600 rounded-full animate-pulse"></div>
              Em Atendimento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-stone-600 font-medium">Progresso do Serviço</span>
              <span className="text-sm font-bold text-red-800">75%</span>
            </div>
            <Progress value={75} className="h-3 bg-stone-200" />

            <div className="grid grid-cols-2 gap-4 text-sm bg-stone-50 p-3 rounded-lg border border-stone-200">
              <div>
                <span className="text-stone-600 font-medium">Início:</span>
                <p className="font-bold text-stone-800">14:30</p>
              </div>
              <div>
                <span className="text-stone-600 font-medium">Previsão:</span>
                <p className="font-bold text-stone-800">17:00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detalhes do Serviço */}
        <Card className="shadow-lg border-stone-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-stone-50 to-amber-50">
            <CardTitle className="text-lg text-stone-800 flex items-center gap-2">
              <div className="h-6 w-6 bg-red-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✦</span>
              </div>
              Detalhes do Serviço
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-stone-600 font-medium">Serviço:</span>
              <span className="font-bold text-stone-800">Box Braids Médias</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600 font-medium">Valor:</span>
              <span className="font-bold text-red-800 text-xl">R$ 180,00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600 font-medium">Tempo estimado:</span>
              <span className="font-bold text-stone-800">2h 30min</span>
            </div>

            {/* Descrição Premium */}
            <div className="bg-gradient-to-r from-amber-50 to-stone-50 p-3 rounded-lg border-l-4 border-l-amber-600">
              <p className="text-sm text-stone-700 font-medium">
                Serviço premium com produtos de alta qualidade e técnicas tradicionais africanas
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Localização */}
        <Card className="shadow-lg border-stone-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-stone-50 to-red-50">
            <CardTitle className="text-lg flex items-center gap-2 text-stone-800">
              <MapPin className="h-5 w-5 text-red-800" />
              Localização
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <p className="text-sm text-stone-600 font-medium">Endereço de atendimento:</p>
              <p className="font-bold text-stone-800">Rua das Flores, 123 - Apt 45</p>
              <p className="text-sm text-stone-600">Vila Madalena, São Paulo - SP</p>

              <div className="flex items-center gap-3 mt-4 p-3 bg-gradient-to-r from-green-50 to-stone-50 rounded-lg border border-green-200">
                <Navigation className="h-5 w-5 text-green-700" />
                <div>
                  <p className="text-sm font-bold text-green-800">Chegada em 15 minutos</p>
                  <p className="text-xs text-green-600">Profissional a caminho</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ações de Contato */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-red-800 hover:bg-red-900 text-white font-bold py-3 shadow-lg">
            <Phone className="h-4 w-4 mr-2" />
            Ligar
          </Button>
          <Button className="bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 shadow-lg">
            <MessageCircle className="h-4 w-4 mr-2" />
            Mensagem
          </Button>
        </div>

        {/* Avaliação */}
        <Card className="border-2 border-amber-200 shadow-lg bg-gradient-to-r from-amber-50 to-stone-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="h-12 w-12 bg-gradient-to-r from-red-800 to-stone-800 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-xl">★</span>
              </div>
              <h3 className="font-bold text-stone-800 text-lg">Como foi seu atendimento?</h3>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-10 w-10 text-stone-300 hover:text-amber-500 cursor-pointer transition-colors"
                  />
                ))}
              </div>
              <p className="text-sm text-stone-600 font-medium">Avalie após o término do serviço</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
