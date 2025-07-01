"use client"

import type React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider, useAuth } from "./contexts/AuthContext"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { Layout } from "./components/Layout/Layout"

// Auth pages
import { Login } from "./pages/Auth/Login"
import { RegisterType } from "./pages/Auth/RegisterType"
import { Register } from "./pages/Auth/Register"

// Dashboard pages
import { EntrepreneurDashboard } from "./pages/Dashboard/EntrepreneurDashboard"
import { ConsumerDashboard } from "./pages/Dashboard/ConsumerDashboard"
import { AdminDashboard } from "./pages/Dashboard/AdminDashboard"

// Placeholder components for other pages
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center py-12">
    <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
    <p className="text-gray-600">Esta página está em desenvolvimento.</p>
  </div>
)

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register-type" element={<RegisterType />} />
          <Route path="/register/:type" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout>
                  <DashboardRouter />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Layout>
                  <PlaceholderPage title="Meu Perfil" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/services"
            element={
              <ProtectedRoute allowedRoles={["entrepreneur"]}>
                <Layout>
                  <PlaceholderPage title="Meus Serviços" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/search"
            element={
              <ProtectedRoute allowedRoles={["consumer"]}>
                <Layout>
                  <PlaceholderPage title="Buscar Serviços" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/my-services"
            element={
              <ProtectedRoute allowedRoles={["consumer"]}>
                <Layout>
                  <PlaceholderPage title="Meus Serviços Contratados" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/bank-account"
            element={
              <ProtectedRoute allowedRoles={["entrepreneur"]}>
                <Layout>
                  <PlaceholderPage title="Conta Bancária" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/points"
            element={
              <ProtectedRoute>
                <Layout>
                  <PlaceholderPage title="Pontos Acumulados" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/courses"
            element={
              <ProtectedRoute allowedRoles={["entrepreneur"]}>
                <Layout>
                  <PlaceholderPage title="Meus Cursos" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <ProtectedRoute allowedRoles={["entrepreneur"]}>
                <Layout>
                  <PlaceholderPage title="Relatórios" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/marketplace"
            element={
              <ProtectedRoute>
                <Layout>
                  <PlaceholderPage title="Marketplace" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/payments"
            element={
              <ProtectedRoute allowedRoles={["consumer"]}>
                <Layout>
                  <PlaceholderPage title="Pagamentos" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/users"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <PlaceholderPage title="Gerenciar Usuários" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/categories"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <PlaceholderPage title="Gerenciar Categorias" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/products"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <PlaceholderPage title="Gerenciar Produtos" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/ads"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <PlaceholderPage title="Gerenciar Anúncios" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/courses-admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <PlaceholderPage title="Gerenciar Cursos" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/points-admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <PlaceholderPage title="Gerenciar Pontos" />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <PlaceholderPage title="Configurações do Sistema" />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

// Component to route to correct dashboard based on user role
const DashboardRouter: React.FC = () => {
  const { user } = useAuth()

  switch (user?.role) {
    case "entrepreneur":
      return <EntrepreneurDashboard />
    case "consumer":
      return <ConsumerDashboard />
    case "admin":
      return <AdminDashboard />
    default:
      return <Navigate to="/login" replace />
  }
}

export default App
