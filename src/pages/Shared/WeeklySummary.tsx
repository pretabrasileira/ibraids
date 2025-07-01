"use client"

import { TrendingUp, Award, Target, DollarSign, Calendar, Trophy, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function WeeklySummary() {
  const services = [
    { name: "Box Braids", count: 8, value: 1440 },
    { name: "Tranças Nagô", count: 5, value: 750 },
    { name: "Twist", count: 3, value: 360 },
    { name: "Crochet Braids", count: 2, value: 320 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">Resumo Semanal</h1>
          <Badge variant="secondary" className="bg-white/20 text-white border-0">
            <Calendar className="h-4 w-4 mr-1" />
            14-20 Jan
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="h-16 w-16 border-3 border-white">
            <AvatarImage src="/placeholder.svg?height=64&width=64" />
            <AvatarFallback className="bg-purple-700 text-white text-lg">MC</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">Maria Clara Santos</h2>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-400" />
              <span className="text-sm">#3 no Ranking Geral</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Resumo Financeiro */}
        <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Faturamento da Semana</p>
                <p className="text-3xl font-bold">R$ 2.870,00</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+23% vs semana anterior</span>
                </div>
              </div>
              <DollarSign className="h-12 w-12 text-green-200" />
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas Rápidas */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-purple-600">18</div>
              <p className="text-sm text-gray-600">Atendimentos</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-pink-600">4.9</div>
              <div className="flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <p className="text-sm text-gray-600">Avaliação</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gamificação */}
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-600" />
              Conquistas da Semana
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Trophy className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium">Top 3 Trancistas</p>
                <p className="text-sm text-gray-600">Você está entre as melhores!</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Meta Semanal Atingida</p>
                <p className="text-sm text-gray-600">15+ atendimentos concluídos</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Próxima meta: 20 atendimentos</span>
                <span>18/20</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Serviços Realizados */}
        <Card>
          <CardHeader>
            <CardTitle>Serviços Realizados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{service.name}</p>
                  <p className="text-sm text-gray-600">{service.count} atendimentos</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">R$ {service.value}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Ranking */}
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-purple-600" />
              Ranking Regional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <span className="font-medium">Ana Silva</span>
                </div>
                <span className="text-sm text-gray-600">R$ 3.200</span>
              </div>

              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <span className="font-medium">Carla Santos</span>
                </div>
                <span className="text-sm text-gray-600">R$ 2.950</span>
              </div>

              <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg border-2 border-orange-200">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <span className="font-medium">Você</span>
                </div>
                <span className="text-sm text-gray-600">R$ 2.870</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
