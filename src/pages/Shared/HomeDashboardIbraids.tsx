"use client"
import {
  Calendar,
  DollarSign,
  Users,
  TrendingUp,
  MapPin,
  Star,
  Heart,
  BookOpen,
  Shield,
  Clock,
  Award,
  Bell,
  Settings,
  User,
  Search,
  Crown,
  Sparkles,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function HomeDashboardIbraids() {
  const quickStats = {
    todayEarnings: 450,
    weeklyEarnings: 2870,
    todayAppointments: 3,
    weeklyAppointments: 18,
    rating: 4.9,
    wellnessScore: 78,
  }

  const todaySchedule = [
    { time: "09:00", client: "Ana Silva", service: "Box Braids", status: "confirmed", avatar: "AS" },
    { time: "14:30", client: "Carla Santos", service: "Tranças Nagô", status: "in-progress", avatar: "CS" },
    { time: "18:00", client: "Maria Oliveira", service: "Twist", status: "pending", avatar: "MO" },
  ]

  const quickActions = [
    { icon: MapPin, label: "Em Atendimento", color: "bg-red-600", route: "service" },
    { icon: DollarSign, label: "Financeiro", color: "bg-green-600", route: "financial" },
    { icon: Users, label: "Encontrar Trancistas", color: "bg-blue-600", route: "professionals" },
    { icon: BarChart3, label: "Analytics", color: "bg-purple-600", route: "analytics" },
    { icon: Calendar, label: "Agenda", color: "bg-amber-600", route: "schedule" },
    { icon: BookOpen, label: "Cursos", color: "bg-indigo-600", route: "courses" },
    { icon: Heart, label: "Bem-estar", color: "bg-pink-600", route: "wellness" },
    { icon: Shield, label: "Segurança", color: "bg-gray-600", route: "security" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header com Logo Ibraids */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <pattern id="cultural-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <circle cx="12.5" cy="12.5" r="2" fill="white" />
                <path d="M5,5 L20,20 M20,5 L5,20" stroke="white" strokeWidth="0.5" />
                <path d="M0,12.5 L25,12.5 M12.5,0 L12.5,25" stroke="white" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cultural-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="/logo-ibraids.png" alt="Ibraids Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold">Ibraids</h1>
                <p className="text-amber-200 text-sm">Conectando Culturas</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></div>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16 border-3 border-amber-300">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-amber-700 text-white text-lg font-bold">MC</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                Olá, Maria Clara!
                <Crown className="h-5 w-5 text-amber-300" />
              </h2>
              <p className="text-amber-200 text-sm">Trancista Profissional • Nível Mestra</p>
              <div className="flex items-center gap-2 mt-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">
                  {quickStats.rating} • {quickStats.todayAppointments} atendimentos hoje
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Banner Empoderamento */}
        <Card className="bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-xl overflow-hidden relative">
          <CardContent className="p-6 relative z-10">
            <div className="absolute right-4 top-0 h-full w-24 flex items-center justify-center opacity-20">
              <svg width="80" height="120" viewBox="0 0 80 120" className="fill-white">
                <ellipse cx="40" cy="25" rx="15" ry="20" />
                <rect x="30" y="40" width="20" height="40" rx="10" />
                <rect x="25" y="45" width="8" height="25" rx="4" />
                <rect x="47" y="45" width="8" height="25" rx="4" />
                <path d="M25,15 Q20,10 15,20 Q10,30 15,40" strokeWidth="3" stroke="white" fill="none" />
                <path d="M55,15 Q60,10 65,20 Q70,30 65,40" strokeWidth="3" stroke="white" fill="none" />
                <path d="M40,10 Q35,5 30,15" strokeWidth="2" stroke="white" fill="none" />
                <path d="M40,10 Q45,5 50,15" strokeWidth="2" stroke="white" fill="none" />
              </svg>
            </div>
            <div className="relative z-20">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Sua Arte, Sua Força!
              </h3>
              <p className="text-amber-100 text-sm mb-3">
                "Conectando trancistas e clientes com segurança, profissionalismo e valorização cultural"
              </p>
              <Button className="bg-white text-amber-800 hover:bg-amber-50 font-bold">Ver Oportunidades</Button>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Rápido */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">R$ {quickStats.todayEarnings}</div>
              <p className="text-green-100 text-sm">Hoje</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                <span className="text-xs">+15%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
            <CardContent className="p-4 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{quickStats.todayAppointments}</div>
              <p className="text-blue-100 text-sm">Atendimentos</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Clock className="h-3 w-3" />
                <span className="text-xs">Próximo: 14:30</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Busca Rápida */}
        <Card className="bg-white shadow-lg border-2 border-amber-200">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-600" />
              <Input
                placeholder="Buscar cliente, serviço ou localização..."
                className="pl-10 border-2 border-amber-300 focus:border-amber-500 text-amber-900 placeholder:text-amber-600"
              />
            </div>
          </CardContent>
        </Card>

        {/* Ações Principais */}
        <Card className="bg-white shadow-lg border-2 border-amber-200">
          <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <div className="h-6 w-6 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">⚡</span>
              </div>
              Acesso Rápido
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-4 gap-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`${action.color} text-white border-0 hover:opacity-90 h-16 flex flex-col gap-1 p-2 rounded-xl shadow-lg`}
                >
                  <action.icon className="h-5 w-5" />
                  <span className="text-xs font-bold text-center leading-tight">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Agenda de Hoje */}
        <Card className="bg-white shadow-lg border-2 border-amber-200">
          <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Agenda de Hoje
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {todaySchedule.map((appointment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-amber-600 rounded-xl flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-amber-900">{appointment.time}</p>
                    <p className="text-sm text-amber-700 font-medium">{appointment.client}</p>
                    <p className="text-xs text-amber-600">{appointment.service}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 border-2 border-amber-300">
                    <AvatarFallback className="bg-amber-200 text-amber-800 text-xs font-bold">
                      {appointment.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <Badge
                    className={`${
                      appointment.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : appointment.status === "in-progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {appointment.status === "confirmed"
                      ? "Confirmado"
                      : appointment.status === "in-progress"
                        ? "Em Andamento"
                        : "Pendente"}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Resumo Semanal */}
        <Card className="bg-white shadow-lg border-2 border-amber-200">
          <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Resumo da Semana
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">R$ {quickStats.weeklyEarnings}</div>
                <p className="text-sm text-amber-700">Faturamento</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-green-600">+23%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{quickStats.weeklyAppointments}</div>
                <p className="text-sm text-amber-700">Atendimentos</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <Star className="h-3 w-3 text-amber-500" />
                  <span className="text-xs text-amber-600">4.9 média</span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-green-600" />
                <span className="text-sm font-bold text-green-800">Top 3 na sua região! 🏆</span>
              </div>
              <p className="text-xs text-green-700 mt-1">Continue assim para manter sua posição</p>
            </div>
          </CardContent>
        </Card>

        {/* Bem-estar */}
        <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Seu Bem-estar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center">
              <div className="text-4xl font-bold">{quickStats.wellnessScore}%</div>
              <p className="text-pink-200 text-sm">Índice de Bem-estar</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="font-bold">😊</p>
                <p className="text-pink-200 text-xs">Humor</p>
                <p className="font-bold text-xs">Ótimo</p>
              </div>
              <div className="text-center">
                <p className="font-bold">⚡</p>
                <p className="text-pink-200 text-xs">Energia</p>
                <p className="font-bold text-xs">Alta</p>
              </div>
              <div className="text-center">
                <p className="font-bold">🔒</p>
                <p className="text-pink-200 text-xs">Segurança</p>
                <p className="font-bold text-xs">Ativa</p>
              </div>
            </div>
            <Button className="w-full bg-white text-pink-600 hover:bg-pink-50 font-bold">Ver Relatório Completo</Button>
          </CardContent>
        </Card>

        {/* Navegação Inferior */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-amber-200 p-4 shadow-lg">
          <div className="flex justify-around max-w-md mx-auto">
            <Button variant="ghost" className="flex flex-col gap-1 text-amber-700 hover:text-amber-800">
              <div className="h-8 w-8 bg-amber-600 rounded-xl flex items-center justify-center shadow-md">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-bold">Início</span>
            </Button>
            <Button variant="ghost" className="flex flex-col gap-1 text-amber-700 hover:text-amber-800">
              <div className="h-8 w-8 bg-gray-400 rounded-xl flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs">Atendimento</span>
            </Button>
            <Button variant="ghost" className="flex flex-col gap-1 text-amber-700 hover:text-amber-800">
              <div className="h-8 w-8 bg-gray-400 rounded-xl flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs">Financeiro</span>
            </Button>
            <Button variant="ghost" className="flex flex-col gap-1 text-amber-700 hover:text-amber-800">
              <div className="h-8 w-8 bg-gray-400 rounded-xl flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs">Analytics</span>
            </Button>
          </div>
        </div>

        <div className="h-20"></div>
      </div>
    </div>
  )
}
