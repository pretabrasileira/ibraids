"use client"

import type React from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import {
  Home,
  User,
  Briefcase,
  CreditCard,
  Star,
  BookOpen,
  BarChart3,
  Search,
  ShoppingBag,
  Settings,
  Users,
  Tag,
  Award,
} from "lucide-react"
import { useEffect, useState } from "react"

const entrepreneurMenuItems = [
  { to: "/dashboard", icon: Home, label: "Dashboard" },
  { to: "/profile", icon: User, label: "Meu Perfil" },
  { to: "/services", icon: Briefcase, label: "Meus Serviços" },
  { to: "/bank-account", icon: CreditCard, label: "Conta Bancária" },
  { to: "/points", icon: Star, label: "Pontos Acumulados" },
  { to: "/courses", icon: BookOpen, label: "Meus Cursos" },
  { to: "/reports", icon: BarChart3, label: "Relatórios" },
  { to: "/marketplace", icon: ShoppingBag, label: "Marketplace" },
  { to: "/entrepreneur/evaluate-clients", icon: Star, label: "Avaliar Clientes" },
  { to: "/entrepreneur/reviews-history", icon: Star, label: "Avaliações Realizadas" },
]

const consumerMenuItems = [
  { to: "/dashboard", icon: Home, label: "Dashboard" },
  { to: "/search", icon: Search, label: "Buscar Serviços" },
  { to: "/profile", icon: User, label: "Meu Perfil" },
  { to: "/my-services", icon: Briefcase, label: "Meus Serviços" },
  { to: "/payments", icon: CreditCard, label: "Pagamentos" },
  { to: "/points", icon: Star, label: "Pontos" },
]

const adminMenuItems = [
  { to: "/dashboard", icon: Home, label: "Dashboard" },
  { to: "/users", icon: Users, label: "Usuários" },
  { to: "/categories", icon: Tag, label: "Categorias" },
  { to: "/products", icon: ShoppingBag, label: "Produtos" },
  { to: "/ads", icon: Award, label: "Anúncios" },
  { to: "/courses-admin", icon: BookOpen, label: "Cursos" },
  { to: "/points-admin", icon: Star, label: "Pontos" },
  { to: "/settings", icon: Settings, label: "Configurações" },
]

export const Sidebar: React.FC = () => {
  const { user } = useAuth()
  const [pendingReviews, setPendingReviews] = useState<number>(0)

  useEffect(() => {
    if (user?.role === "entrepreneur") {
      const BOOKINGS_KEY = "ibraids_bookings"
      const data = localStorage.getItem(BOOKINGS_KEY)
      if (data) {
        const bookings = JSON.parse(data)
        const pendings = bookings.filter((b: any) => b.status === "completed" && (!b.entrepreneurRating || !b.entrepreneurReview))
        setPendingReviews(pendings.length)
      } else {
        setPendingReviews(0)
      }
    }
  }, [user])

  const getMenuItems = () => {
    switch (user?.role) {
      case "entrepreneur":
        return entrepreneurMenuItems
      case "consumer":
        return consumerMenuItems
      case "admin":
        return adminMenuItems
      default:
        return []
    }
  }

  const menuItems = getMenuItems()

  return (
    <div className="bg-white w-64 min-h-screen shadow-sm border-r border-gray-200">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.to} className="relative">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-orange-100 to-red-100 text-red-700 border-l-4 border-red-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
                {user?.role === "entrepreneur" && item.to === "/entrepreneur/evaluate-clients" && pendingReviews > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                    {pendingReviews}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
