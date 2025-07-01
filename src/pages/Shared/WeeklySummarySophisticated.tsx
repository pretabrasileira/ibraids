"use client"

import { TrendingUp, Award, Target, Calendar, Trophy, Star, Crown, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function WeeklySummarySophisticated() {
  const services = [
    { name: "Box Braids Premium", count: 8, value: 1440, growth: "+15%" },
    { name: "Tranças Nagô Tradicionais", count: 5, value: 750, growth: "+8%" },
    { name: "Twist Africano", count: 3, value: 360, growth: "+12%" },
    { name: "Crochet Braids Deluxe", count: 2, value: 320, growth: "+5%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50">
      {/* Header Elegante */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 text-white relative overflow-hidden">
        {/* Padrão Geométrico */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" viewBox="0 0 80 80" className="h-full w-full">
            <defs>
              <pattern id="elegant-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" />
                <path d="M0,20 L40,20 M20,0 L20,40" stroke="white" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="1" fill="white" />
                <circle cx="30" cy="30" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#elegant-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold tracking-wide">Resumo Semanal</h1>
            <Badge className="bg-red-800 text-white border-0 font-bold">
              <Calendar className="h-4 w-4 mr-1" />
              14-20 Jan
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-20 w-20 border-4 border-amber-500">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="bg-red-900 text-white text-xl font-bold">MC</AvatarFallback>
              </Avatar>
              <div className="absolute -top-2 -right-2 h-8 w-8 bg-amber-600 rounded-full border-2 border-white flex items-center justify-center">
                <Crown className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Maria Clara Santos</h2>
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="h-5 w-5 text-amber-500" />
                <span className="font-bold">#3 Ranking Geral</span>
              </div>
              <p className="text-stone-300 text-sm font-medium">Especialista Premium</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Faturamento Principal */}
        <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white shadow-xl">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-200 text-sm font-medium">Faturamento Semanal</p>
                <p className="text-4xl font-bold mb-2">R$ 2.870,00</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-bold">+23% vs semana anterior</span>
                </div>
              </div>
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
                <DollarSign className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Métricas Principais */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="border-2 border-stone-200 shadow-lg bg-white">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-red-800">18</div>
              <p className="text-sm text-stone-600 font-bold">Atendimentos</p>
              <div className="mt-2 h-8 w-8 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-red-800 text-lg">✦</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-stone-200 shadow-lg bg-white">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-amber-600">4.9</div>
              <div className="flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <p className="text-sm text-stone-600 font-bold">Avaliação</p>
              </div>
              <div className="mt-2 h-8 w-8 bg-amber-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-amber-600 text-lg">★</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sistema de Conquistas */}
        <Card className="border-2 border-amber-200 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-stone-50 to-amber-50">
            <CardTitle className="flex items-center gap-2 text-stone-800">
              <Award className="h-6 w-6 text-red-800" />
              Conquistas da Semana
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-amber-100 to-stone-100 rounded-lg border border-amber-200">
              <div className="h-12 w-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-stone-800">Top 3 Profissionais</p>
                <p className="text-sm text-stone-600 font-medium">Você está entre as melhores da região!</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-red-100 to-stone-100 rounded-lg border border-red-200">
              <div className="h-12 w-12 bg-red-800 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-stone-800">Meta Semanal Atingida</p>
                <p className="text-sm text-stone-600 font-medium">15+ atendimentos premium concluídos</p>
              </div>
            </div>

            <div className="space-y-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
              <div className="flex justify-between text-sm font-bold text-stone-800">
                <span>Próxima meta: 20 atendimentos</span>
                <span>18/20</span>
              </div>
              <Progress value={90} className="h-3 bg-stone-200" />
              <p className="text-xs text-stone-600 font-medium text-center">Faltam apenas 2 atendimentos!</p>
            </div>
          </CardContent>
        </Card>

        {/* Serviços Detalhados */}
        <Card className="shadow-lg border-stone-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-stone-50 to-red-50">
            <CardTitle className="text-stone-800">Serviços Realizados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-stone-50 to-amber-50 rounded-lg border border-stone-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-red-800 to-stone-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✦</span>
                  </div>
                  <div>
                    <p className="font-bold text-stone-800">{service.name}</p>
                    <p className="text-sm text-stone-600 font-medium">{service.count} atendimentos</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-800 text-lg">R$ {service.value}</p>
                  <p className="text-xs text-green-700 font-bold">{service.growth}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Ranking Profissional */}
        <Card className="border-2 border-stone-200 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-stone-50 to-amber-50">
            <CardTitle className="flex items-center gap-2 text-stone-800">
              <Trophy className="h-6 w-6 text-red-800" />
              Ranking Regional
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-100 to-stone-100 rounded-lg border-2 border-amber-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-amber-600 rounded-full flex items-center justify-center">
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-stone-800">Ana Silva</span>
                </div>
                <span className="font-bold text-amber-700">R$ 3.200</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-stone-100 to-red-100 rounded-lg border border-stone-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-stone-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <span className="font-bold text-stone-800">Carla Santos</span>
                </div>
                <span className="font-bold text-stone-600">R$ 2.950</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-100 to-stone-100 rounded-lg border-2 border-red-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-red-800 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <span className="font-bold text-stone-800">Você</span>
                </div>
                <span className="font-bold text-red-800">R$ 2.870</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
