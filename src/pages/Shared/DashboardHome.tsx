"use client"
import {
  Calendar,
  DollarSign,
  TrendingUp,
  MapPin,
  Star,
  Clock,
  Award,
  Bell,
  Search,
  Crown,
  Sparkles,
  BarChart3,
  Menu,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function DashboardHome() {
  const quickStats = {
    todayEarnings: 450,
    weeklyEarnings: 2870,
    todayAppointments: 3,
    weeklyAppointments: 18,
    rating: 4.9,
    wellnessScore: 85,
  }

  const todaySchedule = [
    { time: "09:00", client: "Ana Silva", service: "Box Braids", status: "confirmed", avatar: "AS" },
    { time: "14:30", client: "Carla Santos", service: "Tranças Nagô", status: "in-progress", avatar: "CS" },
    { time: "18:00", client: "Maria Oliveira", service: "Twist", status: "pending", avatar: "MO" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Header com Logo Ibraids */}
      <div className="bg-gradient-to-r from-[#c6701a] to-[#7f2317] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <pattern id="african-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="white" />
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="white" strokeWidth="0.5" />
                <rect x="8" y="8" width="4" height="4" fill="none" stroke="white" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#african-pattern)" />
          </svg>
        </div>

        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="/logo-ibraids.png" alt="Ibraids Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold">Ibraids</h1>
                <p className="text-orange-200 text-sm">Conectando Culturas</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-[#7f2317] rounded-full"></div>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16 border-3 border-orange-300">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback className="bg-[#7f2317] text-white text-lg font-bold">MC</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-[#3f6239] rounded-full border-2 border-white flex items-center justify-center">
                <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                Olá, Maria Clara!
                <Crown className="h-5 w-5 text-orange-300" />
              </h2>
              <p className="text-orange-200 text-sm">Trancista Profissional • Nível Mestra</p>
              <div className="flex items-center gap-2 mt-1">
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
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
        <Card className="bg-gradient-to-r from-[#c6701a] to-[#7f2317] text-white shadow-xl overflow-hidden relative">
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
              <p className="text-orange-100 text-sm mb-3">
                "Conectando trancistas e clientes com segurança, profissionalismo e valorização cultural"
              </p>
              <Button className="bg-white text-[#c6701a] hover:bg-orange-50 font-bold rounded-xl">
                Ver Oportunidades
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Rápido */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-[#3f6239] to-green-600 text-white shadow-lg rounded-2xl">
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

          <Card className="bg-gradient-to-br from-[#c6701a] to-orange-600 text-white shadow-lg rounded-2xl">
            <CardContent className="p-4 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">{quickStats.todayAppointments}</div>
              <p className="text-orange-100 text-sm">Atendimentos</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <Clock className="h-3 w-3" />
                <span className="text-xs">Próximo: 14:30</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ações Principais */}
        <Card className="bg-white shadow-lg border-2 border-orange-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <div className="h-6 w-6 bg-[#c6701a] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">⚡</span>
              </div>
              Acesso Rápido
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-3">
              <Button className="bg-[#7f2317] hover:bg-red-800 text-white border-0 h-20 flex flex-col gap-2 p-3 rounded-2xl shadow-lg">
                <MapPin className="h-6 w-6" />
                <span className="text-xs font-bold text-center leading-tight">Em Atendimento</span>
              </Button>

              <Button className="bg-[#3f6239] hover:bg-green-800 text-white border-0 h-20 flex flex-col gap-2 p-3 rounded-2xl shadow-lg">
                <DollarSign className="h-6 w-6" />
                <span className="text-xs font-bold text-center leading-tight">Financeiro</span>
              </Button>

              <Button className="bg-[#c6701a] hover:bg-orange-700 text-white border-0 h-20 flex flex-col gap-2 p-3 rounded-2xl shadow-lg">
                <BarChart3 className="h-6 w-6" />
                <span className="text-xs font-bold text-center leading-tight">Relatórios</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Busca Rápida */}
        <Card className="bg-white shadow-lg border-2 border-orange-200 rounded-2xl">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#c6701a]" />
              <Input
                placeholder="Buscar cliente, serviço ou localização..."
                className="pl-10 border-2 border-orange-300 focus:border-[#c6701a] text-[#7f2317] placeholder:text-orange-600 rounded-xl"
              />
            </div>
          </CardContent>
        </Card>

        {/* Agenda de Hoje */}
        <Card className="bg-white shadow-lg border-2 border-orange-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Agenda de Hoje
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {todaySchedule.map((appointment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-[#c6701a] rounded-xl flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#7f2317]">{appointment.time}</p>
                    <p className="text-sm text-[#c6701a] font-medium">{appointment.client}</p>
                    <p className="text-xs text-orange-600">{appointment.service}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 border-2 border-orange-300">
                    <AvatarFallback className="bg-orange-200 text-[#7f2317] text-xs font-bold">
                      {appointment.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <Badge
                    className={`${
                      appointment.status === "confirmed"
                        ? "bg-[#3f6239] text-white"
                        : appointment.status === "in-progress"
                          ? "bg-[#c6701a] text-white"
                          : "bg-yellow-500 text-white"
                    } rounded-lg`}
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
        <Card className="bg-white shadow-lg border-2 border-orange-200 rounded-2xl">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-t-2xl">
            <CardTitle className="text-[#7f2317] flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Resumo da Semana
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#3f6239]">R$ {quickStats.weeklyEarnings}</div>
                <p className="text-sm text-[#c6701a]">Faturamento</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-[#3f6239]" />
                  <span className="text-xs text-[#3f6239]">+23%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#c6701a]">{quickStats.weeklyAppointments}</div>
                <p className="text-sm text-[#7f2317]">Atendimentos</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <Star className="h-3 w-3 text-orange-500" />
                  <span className="text-xs text-orange-600">4.9 média</span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-gradient-to-r from-green-50 to-orange-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#3f6239]" />
                <span className="text-sm font-bold text-[#3f6239]">Top 3 na sua região! 🏆</span>
              </div>
              <p className="text-xs text-green-700 mt-1">Continue assim para manter sua posição</p>
            </div>
          </CardContent>
        </Card>

        {/* Navegação Inferior */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-orange-200 p-4 shadow-lg">
          <div className="flex justify-around max-w-md mx-auto">
            <Button variant="ghost" className="flex flex-col gap-1 text-[#c6701a] hover:text-[#7f2317]">
              <div className="h-8 w-8 bg-[#c6701a] rounded-xl flex items-center justify-center shadow-md">
                <Home className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-bold">Início</span>
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
