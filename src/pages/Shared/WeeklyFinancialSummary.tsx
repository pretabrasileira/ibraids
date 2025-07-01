"use client"

import { TrendingUp, Calendar, Trophy, BookOpen, GraduationCap, DollarSign, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function WeeklyFinancialSummary() {
  const services = [
    { name: "Box Braids Premium", count: 8, value: 1440, growth: "+15%" },
    { name: "Tranças Nagô", count: 5, value: 750, growth: "+8%" },
    { name: "Twist Africano", count: 3, value: 360, growth: "+12%" },
    { name: "Crochet Braids", count: 2, value: 320, growth: "+5%" },
  ]

  const learningPath = [
    { title: "Técnicas Avançadas de Box Braids", progress: 85, completed: true },
    { title: "Atendimento ao Cliente Premium", progress: 60, completed: false },
    { title: "Gestão Financeira", progress: 30, completed: false },
    { title: "Marketing Digital", progress: 0, completed: false },
  ]

  const ranking = [
    { position: 1, initials: "A.S.", points: "⭐⭐⭐⭐⭐" },
    { position: 2, initials: "C.F.", points: "⭐⭐⭐⭐" },
    { position: 3, initials: "Você", points: "⭐⭐⭐⭐", isUser: true },
    { position: 4, initials: "M.O.", points: "⭐⭐⭐" },
    { position: 5, initials: "J.C.", points: "⭐⭐⭐" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-red-900 text-white relative overflow-hidden">
        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold tracking-wide">Resumo Semanal</h1>
            <Badge className="bg-amber-600 text-white border-0 font-bold">
              <Calendar className="h-4 w-4 mr-1" />
              14-20 Jan
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16 border-3 border-amber-500">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-red-900 text-white text-lg font-bold">MC</AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 h-6 w-6 bg-green-600 rounded-full border-2 border-white flex items-center justify-center">
                <GraduationCap className="h-3 w-3 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold">Maria Clara Santos</h2>
              <p className="text-gray-300 text-sm font-medium">Profissional Avançada</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Resumo Financeiro Principal */}
        <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <DollarSign className="h-12 w-12 mx-auto mb-2" />
              <p className="text-green-100 text-sm font-medium">Faturamento da Semana</p>
              <p className="text-4xl font-bold">R$ 2.870,00</p>
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span className="font-bold">+23% vs semana anterior</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Métricas Rápidas */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-red-800">18</div>
              <p className="text-xs text-gray-600 font-medium">Atendimentos</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-amber-600">4.9</div>
              <p className="text-xs text-gray-600 font-medium">Avaliação</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-4 text-center">
              <div className="text-2xl font-bold text-green-600">R$ 159</div>
              <p className="text-xs text-gray-600 font-medium">Ticket Médio</p>
            </CardContent>
          </Card>
        </div>

        {/* Serviços Realizados */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-green-50">
            <CardTitle className="text-black">Serviços Realizados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-amber-50 rounded-lg border border-gray-200"
              >
                <div>
                  <p className="font-bold text-black">{service.name}</p>
                  <p className="text-sm text-gray-600">{service.count} atendimentos</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600 text-lg">R$ {service.value}</p>
                  <p className="text-xs text-green-700 font-bold">{service.growth}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Trilha de Aprendizado */}
        <Card className="border-2 border-amber-200 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-green-50">
            <CardTitle className="flex items-center gap-2 text-black">
              <BookOpen className="h-6 w-6 text-amber-600" />
              Trilha de Capacitação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            {learningPath.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-6 w-6 rounded-full flex items-center justify-center ${
                        course.completed ? "bg-green-600" : course.progress > 0 ? "bg-amber-600" : "bg-gray-300"
                      }`}
                    >
                      {course.completed ? (
                        <span className="text-white text-xs">✓</span>
                      ) : course.progress > 0 ? (
                        <span className="text-white text-xs">📚</span>
                      ) : (
                        <span className="text-gray-600 text-xs">○</span>
                      )}
                    </div>
                    <span className="font-medium text-black text-sm">{course.title}</span>
                  </div>
                  <span className="text-xs font-bold text-gray-600">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2 bg-gray-200" />
              </div>
            ))}

            <div className="bg-gradient-to-r from-green-50 to-amber-50 p-3 rounded-lg border border-green-200">
              <p className="text-sm font-bold text-green-800 mb-1">🎓 Próximo Certificado</p>
              <p className="text-xs text-gray-700">Complete mais 2 cursos para receber "Especialista Premium"</p>
            </div>
          </CardContent>
        </Card>

        {/* Ranking Discreto */}
        <Card className="border-2 border-gray-200 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-amber-50">
            <CardTitle className="flex items-center gap-2 text-black">
              <Trophy className="h-6 w-6 text-red-800" />
              Ranking Regional
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              {ranking.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    item.isUser
                      ? "bg-gradient-to-r from-red-100 to-amber-100 border-2 border-red-300"
                      : "bg-gradient-to-r from-gray-50 to-green-50 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        item.position === 1
                          ? "bg-amber-500 text-white"
                          : item.position === 2
                            ? "bg-gray-400 text-white"
                            : item.position === 3
                              ? "bg-red-600 text-white"
                              : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {item.position}
                    </div>
                    <span className={`font-bold ${item.isUser ? "text-red-800" : "text-black"}`}>{item.initials}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm">{item.points}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-amber-50 p-3 rounded-lg border border-amber-200">
              <p className="text-xs text-amber-800 font-bold text-center">
                🏆 Você está no Top 3! Continue assim para manter sua posição
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Metas da Semana */}
        <Card className="bg-gradient-to-r from-red-800 to-black text-white shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Metas da Próxima Semana
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Faturamento: R$ 3.000</span>
                <span>96%</span>
              </div>
              <Progress value={96} className="h-2 bg-red-700" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Atendimentos: 20</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-2 bg-red-700" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Cursos: 2</span>
                <span>50%</span>
              </div>
              <Progress value={50} className="h-2 bg-red-700" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
