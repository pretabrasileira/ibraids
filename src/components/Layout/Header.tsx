"use client"

import type React from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { LogOut, User, Bell } from "lucide-react"

export const Header: React.FC = () => {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo-ibraids.png" alt="Ibraids" />
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-bold text-gray-900">Ibraids</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>

            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">{user?.name}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Sair
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
