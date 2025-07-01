"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../contexts/AuthContext"

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: ("entrepreneur" | "consumer" | "admin")[]
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-orange-600 text-lg animate-pulse">Carregando...</span>
      </div>
    )
  }

  if (!user) {
    if (typeof window !== "undefined") router.replace("/login")
    return null
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (typeof window !== "undefined") router.replace("/dashboard")
    return null
  }

  return <>{children}</>
}
