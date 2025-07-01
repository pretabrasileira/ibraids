"use client"

import { TrendingUp, Award, Calendar, Trophy, Star, BookOpen, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function WeeklySummaryLearning() {
  const services = [
    { name: "Box Braids Premium", count: 8, value: 1440, growth: "+15%" },
    { name: "Tranças Nagô", count: 5, value: 750, growth: "+8%" },
    { name: "Twist Africano", count: 3, value: 360, growth: "+12%" },
    { name: "Crochet Braids", count: 2, value: 320, growth: "+5%" },
  ]

  const learningPath = [
    { title: "Técnicas Avançadas de Box Braids", progress: 85, completed: true },
    { title: "Atendimento ao Cliente Premium", progress: 60, completed: false },
    { title: "Gestão Financeira para Trancistas", progress: 30, completed: false },
    { title: "Marketing Digital", progress: 0, completed: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50">
      {/* Header com Aprendizado */}
      <div className="bg-gradient-to-r from-black to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 80 80" className="h-full w-full">
            <defs>
              <pattern id="learning-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" />
                <path d="M0,20 L40,20 M20,0 L20,40" stroke="white" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="1" fill="white" />
                <circle cx="30" cy="30" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#learning-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold tracking-wide">Resumo & Aprendizado</h1>
            <Badge className="bg-amber-600 text-white border-0 font-bold">
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
              <div className="absolute -top-2 -right-2 h-8 w-8 bg-green-600 rounded-full border-2 border-white flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Maria Clara Santos</h2>
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="h-5 w-5 text-amber-500" />
                <span className="font-bold">#3 Ranking Geral</span>
              </div>
              <p className="text-gray-300 text-sm font-medium">Nível: Profissional Avançada</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Faturamento Principal */}
        <Card className="bg-gradient-to-r from-red-800 to-black text-white shadow-xl">
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
                <span className="text-3xl">💰</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Métricas e Nível */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="border-2 border-green-200 shadow-lg bg-white">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-green-600">18</div>
              <p className="text-sm text-black font-bold">Atendimentos</p>
              <div className="mt-2 h-8 w-8 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-green-600 text-lg">✓</span>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2 border-amber-200 shadow-lg bg-white">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-amber-600">4.9</div>
              <div className="flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                <p className="text-sm text-black font-bold">Avaliação</p>
              </div>
              <div className="mt-2 h-8 w-8 bg-amber-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-amber-600 text-lg">⭐</span>
              </div>
            </CardContent>
          </Card>
        </div>

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
              <p className="text-xs text-gray-700">
                Complete mais 2 cursos para receber o certificado "Especialista Premium"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Conquistas da Semana */}
        <Card className="border-2 border-green-200 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-green-50 to-amber-50">
            <CardTitle className="flex items-center gap-2 text-black">
              <Award className="h-6 w-6 text-green-600" />
              Conquistas da Semana
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-green-100 to-amber-100 rounded-lg border border-green-200">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-black">Top 3 Profissionais</p>
                <p className="text-sm text-gray-600 font-medium">Você está entre as melhores da região!</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-amber-100 to-green-100 rounded-lg border border-amber-200">
              <div className="h-12 w-12 bg-amber-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-black">Curso Concluído</p>
                <p className="text-sm text-gray-600 font-medium">Técnicas Avançadas de Box Braids</p>
              </div>
            </div>

            <div className="space-y-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between text-sm font-bold text-black">
                <span>Meta semanal: 20 atendimentos</span>
                <span>18/20</span>
              </div>
              <Progress value={90} className="h-3 bg-gray-200" />
              <p className="text-xs text-gray-600 font-medium text-center">Faltam apenas 2 atendimentos!</p>
            </div>
          </CardContent>
        </Card>

        {/* Serviços Realizados */}
        <Card className="shadow-lg border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-green-50">
            <CardTitle className="text-black">Serviços Realizados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-amber-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-green-600 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✦</span>
                  </div>
                  <div>
                    <p className="font-bold text-black">{service.name}</p>
                    <p className="text-sm text-gray-600 font-medium">{service.count} atendimentos</p>
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

        {/* Ranking com Níveis */}
        <Card className="border-2 border-gray-200 shadow-lg bg-white">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-amber-50">
            <CardTitle className="flex items-center gap-2 text-black">
              <Trophy className="h-6 w-6 text-red-800" />
              Ranking & Níveis
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-100 to-green-100 rounded-lg border-2 border-amber-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <span className="font-bold text-black">Ana Silva</span>
                    <p className="text-xs text-amber-700">Mestra Certificada</p>
                  </div>
                </div>
                <span className="font-bold text-amber-700">R$ 3.200</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-100 to-green-100 rounded-lg border border-gray-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <span className="font-bold text-black">Carla Santos</span>
                    <p className="text-xs text-gray-600">Profissional Avançada</p>
                  </div>
                </div>
                <span className="font-bold text-gray-600">R$ 2.950</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-100 to-amber-100 rounded-lg border-2 border-red-300">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-red-800 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <span className="font-bold text-black">Você</span>
                    <p className="text-xs text-red-700">Profissional Avançada</p>
                  </div>
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
