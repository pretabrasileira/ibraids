// @ts-ignore
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Calendar, Star, TrendingUp, Clock, Users, Plus, Award } from "lucide-react"
import { apiGet } from "../../services/apiService"

export const EntrepreneurDashboard: React.FC = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        // Simular token recuperado do localStorage
        const token = localStorage.getItem("ibraids_token") || "mock_token"
        const dashboard = await apiGet<any>("/dashboardMetrics.json", token)
        setData(dashboard.entrepreneur)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div>Carregando...</div>
  if (error) return <div className="text-red-600">Erro: {error}</div>
  if (!data) return <div>Nenhum dado encontrado.</div>

  return (
    <div className="space-y-6">
      {/* Header com botão de anúncio */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Bem-vinda de volta! Aqui está um resumo das suas atividades.</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Criar Anúncio
        </Button>
      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ganhos Semanais</CardTitle>
            <DollarSign className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {data.weeklyEarnings.toFixed(2)}</div>
            <p className="text-xs opacity-90">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12% da semana passada
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ganhos Hoje</CardTitle>
            <DollarSign className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {data.dailyEarnings.toFixed(2)}</div>
            <p className="text-xs opacity-90">1 serviço realizado</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avaliação</CardTitle>
            <Star className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.rating}</div>
            <p className="text-xs opacity-90">⭐⭐⭐⭐⭐ {data.completedServices} avaliações</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pontos</CardTitle>
            <Award className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.points}</div>
            <p className="text-xs opacity-90">Nível Profissional</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Próximos agendamentos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-orange-600" />
              Próximos Agendamentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.nextAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{appointment.clientName}</p>
                    <p className="text-sm text-gray-600">{appointment.service}</p>
                    <p className="text-xs text-gray-500">
                      {appointment.date} às {appointment.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">R$ {appointment.price.toFixed(2)}</p>
                    <Badge variant="outline" className="text-xs">
                      Confirmado
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Ver Agenda Completa
            </Button>
          </CardContent>
        </Card>

        {/* Resumo de atividades */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-blue-600" />
              Resumo de Atividades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Serviços esta semana</span>
                <span className="font-bold text-2xl text-blue-600">{data.weeklyServices}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Serviços pendentes</span>
                <span className="font-bold text-2xl text-orange-600">{data.pendingServices}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total de serviços</span>
                <span className="font-bold text-2xl text-green-600">{data.completedServices}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t">
              <h4 className="font-medium text-gray-900 mb-3">Ações Rápidas</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/services">
                    <Plus className="mr-1 h-3 w-3" />
                    Novo Serviço
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/reports">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Relatórios
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Serviços pendentes de avaliação */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">Serviços Pendentes de Avaliação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Clock className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600">Nenhum serviço pendente de avaliação no momento.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EntrepreneurDashboard;
