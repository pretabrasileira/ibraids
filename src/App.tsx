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

import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Search from "./pages/Search";
import Marketplace from "./pages/Marketplace";
import BankAccount from "./pages/BankAccount";
import Points from "./pages/Points";
import Courses from "./pages/Courses";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import Categories from "./pages/admin/Categories";
import Products from "./pages/admin/Products";
import Ads from "./pages/admin/Ads";
import AdminCourses from "./pages/admin/Courses";
import AdminPoints from "./pages/admin/Points";
import Settings from "./pages/admin/Settings";
import ScheduleService from "./pages/ScheduleService";

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
                  <Profile />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/services"
            element={
              <ProtectedRoute allowedRoles={["entrepreneur"]}>
                <Layout>
                  <Services />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/search"
            element={
              <ProtectedRoute allowedRoles={["consumer"]}>
                <Layout>
                  <Search />
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
                  <BankAccount />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/points"
            element={
              <ProtectedRoute>
                <Layout>
                  <Points />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/courses"
            element={
              <ProtectedRoute allowedRoles={["entrepreneur"]}>
                <Layout>
                  <Courses />
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
                  <Marketplace />
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
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <AdminDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <Users />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/categories"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <Categories />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/products"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <Products />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/ads"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <Ads />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/courses"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <AdminCourses />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/points"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <AdminPoints />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout>
                  <Settings />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/schedule-service"
            element={
              <ProtectedRoute>
                <Layout>
                  <ScheduleService />
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
