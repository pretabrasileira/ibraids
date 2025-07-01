"use client"

import { ArrowLeft, MapPin, Clock, Star, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function RideTracking() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold">Acompanhar Atendimento</h1>
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-white">
            <AvatarImage src="/placeholder.svg?height=48&width=48" />
            <AvatarFallback className="bg-purple-700 text-white">MC</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">Maria Clara</h2>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.9 • Especialista em Tranças</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Status do Atendimento */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              Em Atendimento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Progresso</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <Progress value={75} className="h-2" />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Início:</span>
                <p className="font-medium">14:30</p>
              </div>
              <div>
                <span className="text-gray-600">Previsão:</span>
                <p className="font-medium">17:00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detalhes do Serviço */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Detalhes do Serviço</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Serviço:</span>
              <span className="font-medium">Box Braids Médias</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Valor:</span>
              <span className="font-semibold text-green-600 text-lg">R$ 180,00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tempo estimado:</span>
              <span className="font-medium">2h 30min</span>
            </div>
          </CardContent>
        </Card>

        {/* Localização */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              Localização
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Endereço de atendimento:</p>
              <p className="font-medium">Rua das Flores, 123 - Apt 45</p>
              <p className="text-sm text-gray-600">Vila Madalena, São Paulo - SP</p>

              <div className="flex items-center gap-2 mt-3 p-2 bg-blue-50 rounded-lg">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-700">Chegada prevista: 15 min</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ações */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Ligar
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Mensagem
          </Button>
        </div>

        {/* Avaliação Prévia */}
        <Card className="border-purple-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <h3 className="font-semibold text-purple-700">Como foi seu atendimento?</h3>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-gray-300 hover:text-yellow-400 cursor-pointer" />
                ))}
              </div>
              <p className="text-sm text-gray-600">Avalie após o término do serviço</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
