"use client"

import {
  Users,
  MapPin,
  Clock,
  Heart,
  DollarSign,
  Calendar,
  BarChart3,
  Target,
  Star,
  Brain,
  Coffee,
  Dumbbell,
  Smile,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function WellnessAnalytics() {
  const topServices = [
    { name: "Box Braids Premium", count: 45, percentage: 35, revenue: 8100, trend: "+12%" },
    { name: "Tranças Nagô", count: 28, percentage: 22, revenue: 4200, trend: "+8%" },
    { name: "Twist Africano", count: 25, percentage: 19, revenue: 3000, trend: "+15%" },
    { name: "Crochet Braids", count: 18, percentage: 14, revenue: 2880, trend: "+5%" },
  ]

  const topClients = [
    { name: "Ana Silva", services: 8, revenue: 1440, frequency: "Semanal", satisfaction: 4.9 },
    { name: "Carla Santos", services: 6, revenue: 1080, frequency: "Quinzenal", satisfaction: 4.8 },
    { name: "Maria Oliveira", services: 5, revenue: 900, frequency: "Mensal", satisfaction: 4.7 },
    { name: "Juliana Costa", services: 4, revenue: 720, frequency: "Mensal", satisfaction: 4.6 },
  ]

  const topRegions = [
    { name: "Vila Madalena", services: 32, percentage: 25, avgTime: "25min", revenue: 5760 },
    { name: "Pinheiros", services: 28, percentage: 22, avgTime: "30min", revenue: 5040 },
    { name: "Liberdade", services: 24, percentage: 19, avgTime: "35min", revenue: 4320 },
    { name: "Bela Vista", services: 20, percentage: 16, avgTime: "28min", revenue: 3600 },
  ]

  // Dados de Bem-estar e Qualidade de Vida
  const wellnessMetrics = {
    mentalHealth: 78, // 0-100
    workSatisfaction: 85,
    workLifeBalance: 72,
    physicalHealth: 68,
    financialStress: 35, // menor é melhor
    sleepQuality: 75,
    nutritionTime: 60, // % de refeições adequadas
    exerciseTime: 45, // % de dias com exercício
  }

  const getWellnessColor = (value: number, isReverse = false) => {
    if (isReverse) {
      // Para métricas onde menor é melhor (como stress)
      if (value <= 30) return "text-green-600"
      if (value <= 60) return "text-yellow-600"
      return "text-red-600"
    } else {
      // Para métricas onde maior é melhor
      if (value >= 80) return "text-green-600"
      if (value >= 60) return "text-yellow-600"
      return "text-red-600"
    }
  }

  const getWellnessIcon = (value: number, isReverse = false) => {
    if (isReverse) {
      if (value <= 30) return <CheckCircle className="h-4 w-4 text-green-600" />
      if (value <= 60) return <AlertCircle className="h-4 w-4 text-yellow-600" />
      return <AlertCircle className="h-4 w-4 text-red-600" />
    } else {
      if (value >= 80) return <CheckCircle className="h-4 w-4 text-green-600" />
      if (value >= 60) return <AlertCircle className="h-4 w-4 text-yellow-600" />
      return <AlertCircle className="h-4 w-4 text-red-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-red-900 text-white relative overflow-hidden">
        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold tracking-wide">Analytics & Bem-estar</h1>
            <Badge className="bg-amber-600 text-white border-0 font-bold">
              <Calendar className="h-4 w-4 mr-1" />
              Últimos 30 dias
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold">R$ 18.520</p>
              <p className="text-gray-300 text-sm font-medium">Faturamento Total</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">129</p>
              <p className="text-gray-300 text-sm font-medium">Atendimentos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Índice de Felicidade e Bem-estar */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6" />
              Índice de Felicidade & Bem-estar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">78%</div>
              <p className="text-purple-200 text-sm">Índice Geral de Bem-estar</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">85%</p>
                <p className="text-purple-200 text-xs">Satisfação no Trabalho</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">72%</p>
                <p className="text-purple-200 text-xs">Equilíbrio Vida-Trabalho</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Métricas de Saúde Mental e Física */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-4 text-center">
              <Brain className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className={`text-2xl font-bold ${getWellnessColor(wellnessMetrics.mentalHealth)}`}>
                {wellnessMetrics.mentalHealth}%
              </div>
              <p className="text-xs text-gray-600">Saúde Mental</p>
              {getWellnessIcon(wellnessMetrics.mentalHealth)}
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-4 text-center">
              <Dumbbell className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className={`text-2xl font-bold ${getWellnessColor(wellnessMetrics.physicalHealth)}`}>
                {wellnessMetrics.physicalHealth}%
              </div>
              <p className="text-xs text-gray-600">Saúde Física</p>
              {getWellnessIcon(wellnessMetrics.physicalHealth)}
            </CardContent>
          </Card>
        </div>

        {/* Qualidade de Vida Detalhada */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-green-50 to-purple-50">
            <CardTitle className="flex items-center gap-2 text-black">
              <Smile className="h-5 w-5 text-green-600" />
              Qualidade de Vida
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            {/* Alimentação */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Coffee className="h-4 w-4 text-amber-600" />
                  <span className="font-medium text-black">Tempo para Alimentação</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold ${getWellnessColor(wellnessMetrics.nutritionTime)}`}>
                    {wellnessMetrics.nutritionTime}%
                  </span>
                  {getWellnessIcon(wellnessMetrics.nutritionTime)}
                </div>
              </div>
              <Progress value={wellnessMetrics.nutritionTime} className="h-2 bg-gray-200" />
              <p className="text-xs text-gray-600">Refeições adequadas nos últimos 30 dias</p>
            </div>

            {/* Exercício */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-black">Tempo para Exercícios</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold ${getWellnessColor(wellnessMetrics.exerciseTime)}`}>
                    {wellnessMetrics.exerciseTime}%
                  </span>
                  {getWellnessIcon(wellnessMetrics.exerciseTime)}
                </div>
              </div>
              <Progress value={wellnessMetrics.exerciseTime} className="h-2 bg-gray-200" />
              <p className="text-xs text-gray-600">Dias com atividade física nos últimos 30 dias</p>
            </div>

            {/* Estresse Financeiro */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-red-600" />
                  <span className="font-medium text-black">Estresse Financeiro</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold ${getWellnessColor(wellnessMetrics.financialStress, true)}`}>
                    {wellnessMetrics.financialStress}%
                  </span>
                  {getWellnessIcon(wellnessMetrics.financialStress, true)}
                </div>
              </div>
              <Progress value={wellnessMetrics.financialStress} className="h-2 bg-gray-200" />
              <p className="text-xs text-gray-600">Nível de preocupação financeira (menor é melhor)</p>
            </div>

            {/* Qualidade do Sono */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">😴</span>
                  <span className="font-medium text-black">Qualidade do Sono</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-bold ${getWellnessColor(wellnessMetrics.sleepQuality)}`}>
                    {wellnessMetrics.sleepQuality}%
                  </span>
                  {getWellnessIcon(wellnessMetrics.sleepQuality)}
                </div>
              </div>
              <Progress value={wellnessMetrics.sleepQuality} className="h-2 bg-gray-200" />
              <p className="text-xs text-gray-600">Qualidade do sono nos últimos 30 dias</p>
            </div>
          </CardContent>
        </Card>

        {/* Tempo Médio de Deslocamento */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-green-50">
            <CardTitle className="flex items-center gap-2 text-black">
              <Clock className="h-5 w-5 text-amber-600" />
              Tempo Médio de Deslocamento
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-amber-600">28 min</div>
              <p className="text-sm text-gray-600 font-medium">Média para chegar ao cliente</p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-green-600 font-bold">↓ 5 min</span>
                <span className="text-gray-500">vs mês anterior</span>
              </div>
              <div className="bg-green-50 p-2 rounded-lg border border-green-200">
                <p className="text-xs text-green-800 font-bold">
                  ✅ Tempo otimizado reduz estresse e melhora qualidade de vida
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Serviços Mais Realizados */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-red-50 to-amber-50">
            <CardTitle className="flex items-center gap-2 text-black">
              <BarChart3 className="h-5 w-5 text-red-800" />
              Serviços Mais Realizados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            {topServices.map((service, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-black">{service.name}</span>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-black">R$ {service.revenue}</span>
                      <span
                        className={`text-xs font-bold ${
                          service.trend.startsWith("+") ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {service.trend}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">{service.count} serviços</div>
                  </div>
                </div>
                <Progress value={service.percentage} className="h-2 bg-gray-200" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Clientes Mais Frequentes */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
            <CardTitle className="flex items-center gap-2 text-black">
              <Users className="h-5 w-5 text-green-600" />
              Clientes Mais Frequentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {topClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-green-50 rounded-lg border border-gray-200"
              >
                <div>
                  <p className="font-medium text-black">{client.name}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <span>{client.services} atendimentos</span>
                    <span>•</span>
                    <span>{client.frequency}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                      <span>{client.satisfaction}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">R$ {client.revenue}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Regiões Mais Atendidas */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-red-50">
            <CardTitle className="flex items-center gap-2 text-black">
              <MapPin className="h-5 w-5 text-amber-600" />
              Regiões Mais Atendidas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            {topRegions.map((region, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-black">{region.name}</span>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-black">R$ {region.revenue}</span>
                      <Badge className="bg-amber-100 text-amber-800 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {region.avgTime}
                      </Badge>
                    </div>
                    <span className="text-xs text-gray-600">{region.services} atendimentos</span>
                  </div>
                </div>
                <Progress value={region.percentage} className="h-2 bg-gray-200" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Resumo Financeiro */}
        <Card className="bg-gradient-to-r from-green-600 to-amber-600 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Resumo Financeiro
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-green-100 text-sm">Ticket Médio</p>
                <p className="text-xl font-bold">R$ 143,50</p>
              </div>
              <div>
                <p className="text-green-100 text-sm">Maior Faturamento</p>
                <p className="text-xl font-bold">R$ 890,00</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-green-100 text-sm">Dias Trabalhados</p>
                <p className="text-xl font-bold">22 dias</p>
              </div>
              <div>
                <p className="text-green-100 text-sm">Média/Dia</p>
                <p className="text-xl font-bold">R$ 841,80</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4" />
                <span className="text-sm font-bold">Impacto no Bem-estar</span>
              </div>
              <div className="space-y-2 text-sm">
                <p>✅ Renda estável reduz ansiedade financeira</p>
                <p>✅ Crescimento de 18% melhora autoestima</p>
                <p>⚠️ 22 dias trabalhados - considere mais descanso</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recomendações de Bem-estar */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Recomendações para seu Bem-estar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4" />
                <span className="text-sm font-bold">Alimentação</span>
              </div>
              <p className="text-xs text-blue-100">Reserve 30min entre atendimentos para refeições adequadas</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-4 w-4" />
                <span className="text-sm font-bold">Exercícios</span>
              </div>
              <p className="text-xs text-blue-100">Inclua 20min de caminhada nos dias de trabalho</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span className="text-sm font-bold">Saúde Mental</span>
              </div>
              <p className="text-xs text-blue-100">Pratique 5min de respiração profunda entre clientes</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
