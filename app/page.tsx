"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceTrackingScreen from "@/service-tracking-screen"
import WeeklyFinancialScreen from "@/weekly-financial-screen"
import ProfessionalsGridScreen from "@/professionals-grid-screen"
import AnalyticsWellnessScreen from "@/analytics-wellness-screen"
import DashboardHome from "../dashboard-home"

export default function IbraidsCompleteApp() {
  const [currentScreen, setCurrentScreen] = useState("home")

  const screens = [
    {
      id: "home",
      title: "Dashboard Principal",
      component: DashboardHome,
      icon: "🏠",
      description: "Página inicial com resumo geral",
    },
    {
      id: "service",
      title: "Em Atendimento",
      component: ServiceTrackingScreen,
      icon: "🗺️",
      description: "Monitoramento com GPS e botão de pânico",
    },
    {
      id: "financial",
      title: "Resumo Financeiro",
      component: WeeklyFinancialScreen,
      icon: "📊",
      description: "Trilha de aprendizado e ranking",
    },
    {
      id: "professionals",
      title: "Encontrar Trancistas",
      component: ProfessionalsGridScreen,
      icon: "⭐",
      description: "Grid com sistema de cores por performance",
    },
    {
      id: "analytics",
      title: "Analytics & Bem-estar",
      component: AnalyticsWellnessScreen,
      icon: "💚",
      description: "Métricas de saúde mental e qualidade de vida",
    },
  ]

  if (currentScreen !== "menu") {
    const screen = screens.find((s) => s.id === currentScreen)
    if (screen) {
      const Component = screen.component
      return (
        <div className="relative">
          {currentScreen !== "home" && (
            <div className="absolute top-4 left-4 z-10">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentScreen("home")}
                className="bg-white/95 backdrop-blur-sm border-2 border-amber-300 text-amber-800 font-bold hover:bg-amber-50"
              >
                ← Dashboard
              </Button>
            </div>
          )}
          <Component />
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-700 text-white relative overflow-hidden">
        <div className="relative p-6 text-center">
          <div className="mb-4">
            <div className="h-16 w-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mx-auto flex items-center justify-center mb-3 border-2 border-white/20">
              <span className="text-3xl">👑</span>
            </div>
            <h1 className="text-4xl font-bold tracking-wide mb-2">Ibraids</h1>
            <p className="text-amber-200 font-medium">Conectando Culturas com Segurança</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <p className="text-sm font-medium">Plataforma segura para trancistas e clientes afrodescendentes</p>
          </div>
        </div>
      </div>

      <div className="p-4 max-w-md mx-auto space-y-4 mt-6">
        {screens.map((screen) => (
          <Card
            key={screen.id}
            className="hover:shadow-xl transition-all duration-300 border-2 border-amber-200 cursor-pointer group bg-white"
          >
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 group-hover:from-amber-100 group-hover:to-orange-100 transition-all">
              <CardTitle className="text-lg text-amber-800 flex items-center gap-3">
                <div className="h-10 w-10 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-lg">{screen.icon}</span>
                </div>
                <div>
                  <div>{screen.title}</div>
                  <p className="text-xs text-amber-600 font-normal">{screen.description}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <Button
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 rounded-xl shadow-lg"
                onClick={() => setCurrentScreen(screen.id)}
              >
                {screen.id === "home" ? "Acessar Dashboard" : "Visualizar Protótipo"}
              </Button>
            </CardContent>
          </Card>
        ))}

        {/* Rodapé Cultural */}
        <div className="text-center mt-8 p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg border-2 border-amber-200">
          <div className="h-8 w-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center">
            <span className="text-white text-sm">👑</span>
          </div>
          <p className="text-sm text-amber-800 font-bold mb-2">Segurança • Empoderamento • Profissionalização</p>
          <p className="text-xs text-amber-700 font-medium">
            "Conectando trancistas e clientes com segurança e valorização cultural"
          </p>
        </div>
      </div>
    </div>
  )
}
