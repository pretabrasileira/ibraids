"use client"

import { TrendingUp, Award, Target, Calendar, Trophy, Star, Crown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function WeeklySummaryAncestral() {
  const services = [
    { name: "Box Braids Ancestrais", count: 8, value: 1440, icon: "👑" },
    { name: "Tranças Nagô Tradicionais", count: 5, value: 750, icon: "✨" },
    { name: "Twist Africano", count: 3, value: 360, icon: "🌟" },
    { name: "Crochet Braids Modernas", count: 2, value: 320, icon: "💫" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      {/* Header Ancestral */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-600 text-white relative overflow-hidden">
        {/* Padrão Ancestral de Fundo */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 60 60" className="h-full w-full">
            <defs>
              <pattern id="kente-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <rect width="30" height="30" fill="none" />
                <path d="M0,15 L30,15 M15,0 L15,30" stroke="white" strokeWidth="1" />
                <circle cx="7.5" cy="7.5" r="2" fill="white" />
                <circle cx="22.5" cy="22.5" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kente-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold tracking-wide">Jornada Semanal</h1>
            <Badge className="bg-pink-500 text-white border-0 font-bold">
              <Calendar className="h-4 w-4 mr-1" />
              14-20 Jan
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-20 w-20 border-4 border-pink-300">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback className="bg-pink-600 text-white text-xl font-bold">MC</AvatarFallback>
              </Avatar>
              <div className="absolute -top-2 -right-2 h-8 w-8 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center">
                <Crown className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Maria Clara Santos</h2>
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <span className="font-bold">#3 Rainha das Tranças</span>
              </div>
              <p className="text-orange-100 text-sm font-medium">Guardiã da Arte Ancestral</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Abundância Financeira */}
        <Card className="bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-xl">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm font-medium">Abundância da Semana</p>
                <p className="text-4xl font-bold mb-2">R$ 2.870,00</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-bold">+23% crescimento ancestral</span>
                </div>
              </div>
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">💰</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas Sagradas */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="border-2 border-pink-200 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-pink-600">18</div>
              <p className="text-sm text-amber-700 font-bold">Rituais Realizados</p>
              <div className="mt-2 h-8 w-8 bg-pink-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-pink-600">👑</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-orange-200 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-orange-600">4.9</div>
              <div className="flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <p className="text-sm text-amber-700 font-bold">Satisfação</p>
              </div>
              <div className="mt-2 h-8 w-8 bg-orange-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-orange-600">✨</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conquistas Ancestrais */}
        <Card className="border-2 border-amber-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-pink-100">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <Award className="h-6 w-6 text-orange-600" />
              Conquistas Ancestrais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border border-yellow-200">
              <div className="h-12 w-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-amber-800">Rainha das Tranças</p>
                <p className="text-sm text-amber-600 font-medium">Top 3 entre as mestras!</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-pink-100 to-orange-100 rounded-lg border border-pink-200">
              <div className="h-12 w-12 bg-pink-500 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-amber-800">Meta Ancestral Atingida</p>
                <p className="text-sm text-amber-600 font-medium">15+ rituais sagrados concluídos</p>
              </div>
            </div>

            <div className="space-y-3 p-3 bg-orange-50 rounded-lg">
              <div className="flex justify-between text-sm font-bold text-amber-800">
                <span>Próxima conquista: 20 rituais</span>
                <span>18/20</span>
              </div>
              <Progress value={90} className="h-3 bg-orange-200" />
              <p className="text-xs text-amber-600 font-medium text-center">Quase lá, guerreira!</p>
            </div>
          </CardContent>
        </Card>

        {/* Artes Realizadas */}
        <Card className="shadow-lg border-pink-200">
          <CardHeader className="bg-gradient-to-r from-pink-100 to-orange-100">
            <CardTitle className="text-amber-800">Artes Ancestrais Criadas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg border border-orange-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-lg">{service.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-amber-800">{service.name}</p>
                    <p className="text-sm text-amber-600 font-medium">{service.count} criações</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-pink-600 text-lg">R$ {service.value}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Reino das Trancistas */}
        <Card className="border-2 border-amber-200 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <Trophy className="h-6 w-6 text-orange-600" />
              Reino das Mestras
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border-2 border-yellow-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-amber-800">Ana Silva - Rainha Suprema</span>
                </div>
                <span className="font-bold text-yellow-700">R$ 3.200</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-100 to-orange-100 rounded-lg border border-gray-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <span className="font-bold text-amber-800">Carla Santos</span>
                </div>
                <span className="font-bold text-gray-600">R$ 2.950</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg border-2 border-orange-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">👑</span>
                  </div>
                  <span className="font-bold text-amber-800">Você - Princesa Guerreira</span>
                </div>
                <span className="font-bold text-orange-600">R$ 2.870</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
