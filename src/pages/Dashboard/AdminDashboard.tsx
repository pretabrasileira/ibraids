// @ts-ignore
import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, UserCheck, DollarSign, TrendingUp, Calendar, BarChart3, Plus } from "lucide-react"
import { apiGet } from "../../services/apiService"

export const AdminDashboard: React.FC = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const token = localStorage.getItem("ibraids_token") || "mock_token"
        const dashboard = await apiGet<any>("/dashboardMetrics.json", token)
        setData(dashboard.admin)
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
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
          <p className="text-gray-600">Visão geral da plataforma Ibraids</p>
        </div>
        <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
          <Plus className="mr-2 h-4 w-4" />
          Novo Usuário
        </Button>
      </div>

      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Empreendedoras Ativas</CardTitle>
            <Users className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.activeUsers.entrepreneurs.toLocaleString()}</div>
            <p className="text-xs opacity-90">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8% este mês
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <Users className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.activeUsers.consumers.toLocaleString()}</div>
            <p className="text-xs opacity-90">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +15% este mês
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faturamento Mensal</CardTitle>
            <DollarSign className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {(data.revenue.monthly / 1000).toFixed(0)}K</div>
            <p className="text-xs opacity-90">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +22% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Online</CardTitle>
            <UserCheck className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.loggedUsers.entrepreneurs + data.loggedUsers.consumers}</div>
            <p className="text-xs opacity-90">
              {data.loggedUsers.entrepreneurs} empreendedoras, {data.loggedUsers.consumers} clientes
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Usuários por categoria */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-blue-600" />
              Usuários por Categoria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="font-medium">Empreendedoras</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">{data.activeUsers.entrepreneurs}</div>
                  <div className="text-xs text-gray-500">Online: {data.loggedUsers.entrepreneurs}</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="font-medium">Clientes</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">{data.activeUsers.consumers}</div>
                  <div className="text-xs text-gray-500">Online: {data.loggedUsers.consumers}</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="font-medium">Descadastrados (mês)</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-red-600">
                    {data.deactivatedUsers.entrepreneurs + data.deactivatedUsers.consumers}
                  </div>
                  <div className="text-xs text-gray-500">
                    {data.deactivatedUsers.entrepreneurs} emp., {data.deactivatedUsers.consumers} cli.
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Faturamento */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-green-600" />
              Faturamento por Período
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-700">Mensal</span>
                  <div className="text-xs text-gray-500">Dezembro 2024</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">R$ {data.revenue.monthly.toLocaleString("pt-BR")}</div>
                  <div className="text-xs text-green-500">+22%</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-700">Semestral</span>
                  <div className="text-xs text-gray-500">Jul - Dez 2024</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">R$ {data.revenue.semester.toLocaleString("pt-BR")}</div>
                  <div className="text-xs text-blue-500">+18%</div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <div>
                  <span className="font-medium text-gray-700">Anual</span>
                  <div className="text-xs text-gray-500">2024</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-purple-600">R$ {data.revenue.annual.toLocaleString("pt-BR")}</div>
                  <div className="text-xs text-purple-500">+25%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ações rápidas */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
              <Users className="h-6 w-6 mb-2 text-blue-600" />
              <span className="text-sm">Gerenciar Usuários</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
              <Calendar className="h-6 w-6 mb-2 text-green-600" />
              <span className="text-sm">Categorias</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
              <BarChart3 className="h-6 w-6 mb-2 text-purple-600" />
              <span className="text-sm">Relatórios</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center bg-transparent">
              <DollarSign className="h-6 w-6 mb-2 text-orange-600" />
              <span className="text-sm">Configurações</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminDashboard;
