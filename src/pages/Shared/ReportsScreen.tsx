"use client"
import {
  BarChart3,
  TrendingUp,
  Users,
  MapPin,
  Clock,
  Heart,
  DollarSign,
  Star,
  Activity,
  Brain,
  Utensils,
  Dumbbell,
  Moon,
  Smile,
  ArrowLeft,
  Home,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function ReportsScreen() {
  const analyticsData = {
    revenue: {
      monthly: 12450,
      growth: 18,
      bestMonth: "Outubro",
    },
    services: {
      total: 78,
      mostPopular: "Box Braids",
      averageTime: "3h 15min",
    },
    clients: {
      total: 45,
      returning: 32,
      satisfaction: 4.8,
    },
    regions: [
      { name: "Vila Madalena", count: 18, percentage: 23 },
      { name: "Pinheiros", count: 15, percentage: 19 },
      { name: "Bela Vista", count: 12, percentage: 15 },
      { name: "Liberdade", count: 10, percentage: 13 },
    ],
    wellness: {
      happiness: 85,
      mentalHealth: 78,
      physicalHealth: 82,
      workLifeBalance: 75,
      nutrition: 70,
      exercise: 65,
      sleep: 80,
    },
  }

  const topServices = [
    { name: "Box Braids", count: 28, revenue: 5040, color: "bg-[#c6701a]" },
    { name: "Tranças Nagô", count: 18, revenue: 3240, color: "bg-[#3f6239]" },
    { name: "Twist", count: 16, revenue: 2400, color: "bg-[#7f2317]" },
    { name: "Crochet Braids", count: 12, revenue: 1680, color: "bg-orange-500" },
  ]

  const topClients = [
    { name: "Ana Silva", visits: 8, lastService: "Box Braids", value: 1440 },
    { name: "Carla Santos", visits: 6, lastService: "Tranças Nagô", value: 1080 },
    { name: "Maria Oliveira", visits: 5, lastService: "Twist", value: 750 },
    { name: "Lucia Ferreira", visits: 4, lastService: "Crochet", value: 560 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7f2317] to-red-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Relatórios</h1>
              <p className="text-red-200 text-sm">Analytics & Bem-estar</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <span className="text-sm font-medium">Outubro 2024</span>
          </div>
        </div>

        {/* Resumo Geral */}
        <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">R$ {analyticsData.revenue.monthly.toLocaleString()}</div>
              <p className="text-red-200 text-xs">Faturamento</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                <span className="text-xs">+{analyticsData.revenue.growth}%</span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">{analyticsData.services.total}</div>
              <p className="text-red-200 text-xs">Atendimentos</p>
              <p className="text-xs mt-1">{analyticsData.services.averageTime} médio</p>
            </div>
            <div>
              <div className="text-2xl font-bold">{analyticsData.clients.total}</div>
              <p className="text-red-200 text-xs">Clientes</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Star className="h-3 w-3" />
                <span className="text-xs">{analyticsData.clients.satisfaction}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Índice de Felicidade */}
        <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Índice de Bem-estar Geral
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">{analyticsData.wellness.happiness}%</div>
              <p className="text-pink-200">Índice de Felicidade</p>
              <Badge className="bg-white/20 text-white mt-2">Excelente</Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    <Brain className="h-4 w-4" />
                    Saúde Mental
                  </span>
                  <span className="font-bold">{analyticsData.wellness.mentalHealth}%</span>
                </div>
                <Progress value={analyticsData.wellness.mentalHealth} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    <Activity className="h-4 w-4" />
                    Saúde Física
                  </span>
                  <span className="font-bold">{analyticsData.wellness.physicalHealth}%</span>
                </div>
                <Progress value={analyticsData.wellness.physicalHealth} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Qualidade de Vida */}
        <Card className="bg-white shadow-lg border-2 border-pink-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <Smile className="h-5 w-5" />
              Qualidade de Vida
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Utensils className="h-6 w-6 text-[#c6701a]" />
                  <div>
                    <p className="font-bold text-[#7f2317]">Alimentação</p>
                    <p className="text-sm text-gray-600">Tempo para refeições adequadas</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#c6701a]">{analyticsData.wellness.nutrition}%</div>
                  <p className="text-xs text-gray-600">Bom</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Dumbbell className="h-6 w-6 text-[#3f6239]" />
                  <div>
                    <p className="font-bold text-[#7f2317]">Exercícios</p>
                    <p className="text-sm text-gray-600">Atividade física regular</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#3f6239]">{analyticsData.wellness.exercise}%</div>
                  <p className="text-xs text-gray-600">Regular</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Moon className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-bold text-[#7f2317]">Sono</p>
                    <p className="text-sm text-gray-600">Qualidade do descanso</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{analyticsData.wellness.sleep}%</div>
                  <p className="text-xs text-gray-600">Ótimo</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-purple-600" />
                <span className="font-bold text-purple-800">Equilíbrio Vida-Trabalho</span>
                <span className="font-bold text-purple-800">Equilíbrio Vida-Trabalho</span>
              </div>
              <div className="flex items-center justify-between">
                <Progress value={analyticsData.wellness.workLifeBalance} className="flex-1 mr-3" />
                <span className="text-2xl font-bold text-purple-600">{analyticsData.wellness.workLifeBalance}%</span>
              </div>
              <p className="text-xs text-purple-700 mt-1">
                Você está conseguindo equilibrar bem trabalho e vida pessoal
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Serviços Mais Realizados */}
        <Card className="bg-white shadow-lg border-2 border-orange-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <Star className="h-5 w-5" />
              Serviços Mais Realizados
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {topServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200"
              >
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 ${service.color} rounded-xl flex items-center justify-center`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#7f2317]">{service.name}</p>
                    <p className="text-sm text-gray-600">{service.count} atendimentos</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[#3f6239]">R$ {service.revenue.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">faturamento</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Clientes Mais Frequentes */}
        <Card className="bg-white shadow-lg border-2 border-blue-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <Users className="h-5 w-5" />
              Clientes Mais Frequentes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {topClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-[#c6701a] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {client.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-[#7f2317]">{client.name}</p>
                    <p className="text-sm text-gray-600">
                      {client.visits} visitas • {client.lastService}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[#3f6239]">R$ {client.value.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">total gasto</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Regiões Mais Atendidas */}
        <Card className="bg-white shadow-lg border-2 border-green-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Regiões Mais Atendidas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {analyticsData.regions.map((region, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#7f2317]">{region.name}</span>
                  <span className="text-sm text-[#3f6239] font-bold">{region.count} atendimentos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={region.percentage} className="flex-1" />
                  <span className="text-sm font-bold text-[#c6701a]">{region.percentage}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tempo Médio de Deslocamento */}
        <Card className="bg-gradient-to-r from-[#c6701a] to-orange-600 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Eficiência de Deslocamento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">28 min</div>
              <p className="text-orange-200">Tempo Médio de Deslocamento</p>
              <Badge className="bg-white/20 text-white mt-2">15% melhor que a média</Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">12.5 km</div>
                <p className="text-orange-200">Distância Média</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">R$ 8.50</div>
                <p className="text-orange-200">Custo Médio Uber</p>
              </div>
            </div>

            <div className="p-3 bg-white/10 rounded-xl">
              <p className="text-sm font-bold">💡 Dica de Otimização</p>
              <p className="text-orange-200 text-xs mt-1">
                Agende atendimentos próximos no mesmo dia para reduzir custos de deslocamento
              </p>
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
            <Button variant="ghost" className="flex flex-col gap-1 text-gray-500 hover:text-[#7f2317]">
              <div className="h-8 w-8 bg-gray-400 rounded-xl flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs">Atendimento</span>
            </Button>
            <Button variant="ghost" className="flex flex-col gap-1 text-gray-500 hover:text-[#7f2317]">
              <div className="h-8 w-8 bg-gray-400 rounded-xl flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs">Financeiro</span>
            </Button>
            <Button variant="ghost" className="flex flex-col gap-1 text-[#c6701a] hover:text-[#7f2317]">
              <div className="h-8 w-8 bg-[#7f2317] rounded-xl flex items-center justify-center shadow-md">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-bold">Relatórios</span>
            </Button>
          </div>
        </div>

        <div className="h-20"></div>
      </div>
    </div>
  )
}
