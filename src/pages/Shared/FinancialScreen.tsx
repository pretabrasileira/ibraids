"use client"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Star,
  BookOpen,
  Target,
  ArrowLeft,
  Home,
  MapPin,
  BarChart3,
  Crown,
  Medal,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function FinancialScreen() {
  const weeklyData = {
    totalEarnings: 2870,
    growth: 23,
    servicesCount: 18,
    averageService: 159,
    goals: {
      weekly: 3000,
      current: 2870,
      percentage: 95.7,
    },
  }

  const services = [
    { name: "Box Braids", count: 6, value: 1080, growth: 15 },
    { name: "Tranças Nagô", count: 4, value: 720, growth: 8 },
    { name: "Twist", count: 5, value: 650, growth: -5 },
    { name: "Crochet Braids", count: 3, value: 420, growth: 25 },
  ]

  const learningPath = [
    { title: "Técnicas Avançadas de Box Braids", progress: 85, completed: true },
    { title: "Cuidados com Couro Cabeludo", progress: 60, completed: false },
    { title: "Atendimento ao Cliente", progress: 100, completed: true },
    { title: "Gestão Financeira", progress: 30, completed: false },
  ]

  const ranking = [
    { position: 1, name: "M.C.", points: 2870, isMe: true },
    { position: 2, name: "A.S.", points: 2650, isMe: false },
    { position: 3, name: "C.R.", points: 2420, isMe: false },
    { position: 4, name: "L.M.", points: 2180, isMe: false },
    { position: 5, name: "R.P.", points: 1950, isMe: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3f6239] to-green-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Financeiro</h1>
              <p className="text-green-200 text-sm">Resumo Semanal</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-yellow-300" />
            <span className="text-sm font-medium">#1 Região</span>
          </div>
        </div>

        {/* Resumo Financeiro Principal */}
        <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold mb-2">R$ {weeklyData.totalEarnings.toLocaleString()}</div>
            <p className="text-green-200 text-sm">Faturamento da Semana</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <TrendingUp className="h-4 w-4 text-green-300" />
              <span className="text-sm font-medium">+{weeklyData.growth}% vs semana anterior</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{weeklyData.servicesCount}</div>
              <p className="text-green-200 text-xs">Atendimentos</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">R$ {weeklyData.averageService}</div>
              <p className="text-green-200 text-xs">Ticket Médio</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Meta Semanal */}
        <Card className="bg-white shadow-lg border-2 border-green-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-t-2xl">
            <CardTitle className="text-[#3f6239] flex items-center gap-2">
              <Target className="h-5 w-5" />
              Meta Semanal
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[#7f2317] font-bold">R$ {weeklyData.goals.current.toLocaleString()}</span>
              <span className="text-gray-600">R$ {weeklyData.goals.weekly.toLocaleString()}</span>
            </div>
            <Progress value={weeklyData.goals.percentage} className="h-3 mb-2" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#3f6239] font-bold">{weeklyData.goals.percentage}% concluída</span>
              <span className="text-gray-600">
                Faltam R$ {(weeklyData.goals.weekly - weeklyData.goals.current).toLocaleString()}
              </span>
            </div>
            <div className="mt-3 p-2 bg-green-50 rounded-lg">
              <p className="text-xs text-[#3f6239] font-medium">
                🎯 Você está muito próxima da meta! Mais 1 atendimento e você consegue!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Serviços Realizados */}
        <Card className="bg-white shadow-lg border-2 border-orange-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <Star className="h-5 w-5" />
              Serviços da Semana
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-[#c6701a] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{service.count}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#7f2317]">{service.name}</p>
                    <p className="text-sm text-gray-600">R$ {service.value.toLocaleString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`flex items-center gap-1 ${service.growth >= 0 ? "text-[#3f6239]" : "text-red-600"}`}>
                    {service.growth >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span className="text-sm font-bold">
                      {service.growth > 0 ? "+" : ""}
                      {service.growth}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Trilha de Aprendizado */}
        <Card className="bg-white shadow-lg border-2 border-blue-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Trilha de Capacitação
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            {learningPath.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-[#7f2317] text-sm">{course.title}</h4>
                  <div className="flex items-center gap-2">
                    {course.completed && <Medal className="h-4 w-4 text-yellow-500" />}
                    <span className="text-sm font-bold text-[#c6701a]">{course.progress}%</span>
                  </div>
                </div>
                <Progress value={course.progress} className="h-2" />
                <p className="text-xs text-gray-600">{course.completed ? "✅ Concluído" : "📚 Em andamento"}</p>
              </div>
            ))}
            <Button className="w-full bg-[#c6701a] hover:bg-orange-700 text-white font-bold rounded-xl mt-4">
              Ver Todos os Cursos
            </Button>
          </CardContent>
        </Card>

        {/* Ranking Regional */}
        <Card className="bg-gradient-to-r from-[#c6701a] to-orange-600 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Ranking Regional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {ranking.map((person, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-xl ${
                  person.isMe ? "bg-white/20 border-2 border-white/30" : "bg-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center font-bold ${
                      person.position === 1
                        ? "bg-yellow-400 text-yellow-900"
                        : person.position === 2
                          ? "bg-gray-300 text-gray-800"
                          : person.position === 3
                            ? "bg-orange-400 text-orange-900"
                            : "bg-white/20 text-white"
                    }`}
                  >
                    {person.position}
                  </div>
                  <div>
                    <p className="font-bold flex items-center gap-2">
                      {person.name}
                      {person.isMe && <Crown className="h-4 w-4 text-yellow-300" />}
                    </p>
                    {person.isMe && <p className="text-orange-200 text-xs">Você</p>}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">R$ {person.points.toLocaleString()}</p>
                  <p className="text-orange-200 text-xs">esta semana</p>
                </div>
              </div>
            ))}
            <div className="mt-4 p-3 bg-white/10 rounded-xl text-center">
              <p className="text-sm font-bold">🏆 Você está em 1º lugar!</p>
              <p className="text-orange-200 text-xs">Continue assim para manter a liderança</p>
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
            <Button variant="ghost" className="flex flex-col gap-1 text-[#c6701a] hover:text-[#7f2317]">
              <div className="h-8 w-8 bg-[#3f6239] rounded-xl flex items-center justify-center shadow-md">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-bold">Financeiro</span>
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
