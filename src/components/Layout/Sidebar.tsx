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

const entrepreneurMenuItems = [
  { to: "/dashboard", icon: Home, label: "Dashboard" },
  { to: "/profile", icon: User, label: "Meu Perfil" },
  { to: "/services", icon: Briefcase, label: "Meus Serviços" },
  { to: "/bank-account", icon: CreditCard, label: "Conta Bancária" },
  { to: "/points", icon: Star, label: "Pontos Acumulados" },
  { to: "/courses", icon: BookOpen, label: "Meus Cursos" },
  { to: "/reports", icon: BarChart3, label: "Relatórios" },
  { to: "/marketplace", icon: ShoppingBag, label: "Marketplace" },
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
            <li key={item.to}>
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
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
