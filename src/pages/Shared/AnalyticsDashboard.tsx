"use client"

import { TrendingUp, Users, MapPin, Clock, Heart, DollarSign, Calendar, BarChart3, Target, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function AnalyticsDashboard() {
  const topServices = [
    { name: "Box Braids Premium", count: 45, percentage: 35, revenue: 8100, trend: "+12%" },
    { name: "Tranças Nagô", count: 28, percentage: 22, revenue: 4200, trend: "+8%" },
    { name: "Twist Africano", count: 25, percentage: 19, revenue: 3000, trend: "+15%" },
    { name: "Crochet Braids", count: 18, percentage: 14, revenue: 2880, trend: "+5%" },
    { name: "Fulani Braids", count: 13, percentage: 10, revenue: 2340, trend: "-2%" },
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
    { name: "Consolação", services: 15, percentage: 12, avgTime: "32min", revenue: 2700 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Header Analytics */}
      <div className="bg-gradient-to-r from-black to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 120 120" className="h-full w-full">
            <defs>
              <pattern id="analytics-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect width="60" height="60" fill="none" />
                <path d="M0,30 L60,30 M30,0 L30,60" stroke="white" strokeWidth="0.5" />
                <circle cx="15" cy="15" r="1" fill="white" />
                <circle cx="45" cy="45" r="1" fill="white" />
                <rect x="25" y="25" width="10" height="10" fill="none" stroke="white" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#analytics-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold tracking-wide">Analytics Avançado</h1>
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
        {/* KPIs Principais */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardContent className="pt-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">+18%</div>
              <p className="text-sm text-green-100">Crescimento</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-800 to-red-900 text-white">
            <CardContent className="pt-6 text-center">
              <Heart className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">94%</div>
              <p className="text-sm text-red-200">Satisfação</p>
            </CardContent>
          </Card>
        </div>

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
                <p className="text-xs text-green-800 font-bold">🎯 Meta: 25 min | Faltam: 3 min</p>
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
          <CardHeader className="bg-gradient-to-r from-green-50 to-amber-50">
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

        {/* Índice de Felicidade Detalhado */}
        <Card className="bg-gradient-to-r from-red-800 to-black text-white shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Índice de Felicidade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">94%</div>
              <p className="text-red-200 text-sm">Satisfação Geral dos Clientes</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-red-200 text-xs">Avaliação Média</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">96%</p>
                <p className="text-red-200 text-xs">Recomendação</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Qualidade do Serviço</span>
                <span>4.9/5</span>
              </div>
              <Progress value={98} className="h-2 bg-red-700" />

              <div className="flex justify-between text-sm">
                <span>Pontualidade</span>
                <span>4.7/5</span>
              </div>
              <Progress value={94} className="h-2 bg-red-700" />

              <div className="flex justify-between text-sm">
                <span>Atendimento</span>
                <span>4.8/5</span>
              </div>
              <Progress value={96} className="h-2 bg-red-700" />
            </div>
          </CardContent>
        </Card>

        {/* Resumo Financeiro Detalhado */}
        <Card className="bg-gradient-to-r from-green-600 to-amber-600 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Resumo Financeiro Completo
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
                <span className="text-sm font-bold">Metas do Mês</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Faturamento: R$ 25.000</span>
                  <span>74%</span>
                </div>
                <Progress value={74} className="h-2 bg-white/20" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
