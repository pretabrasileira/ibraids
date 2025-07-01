"use client"

import type React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, ShoppingBag, ArrowLeft } from "lucide-react"

export const RegisterType: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <img src="/logo-ibraids.png" alt="Ibraids" className="h-12 w-auto mx-auto" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Como você quer se cadastrar?</CardTitle>
          <p className="text-gray-600">Escolha o tipo de conta</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => navigate("/register/entrepreneur")}
            className="w-full h-16 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 flex items-center justify-center space-x-3"
          >
            <Briefcase className="h-6 w-6" />
            <div className="text-left">
              <div className="font-semibold">Sou Empreendedora</div>
              <div className="text-sm opacity-90">Ofereço serviços de beleza</div>
            </div>
          </Button>

          <Button
            onClick={() => navigate("/register/consumer")}
            variant="outline"
            className="w-full h-16 border-2 border-red-200 hover:bg-red-50 flex items-center justify-center space-x-3"
          >
            <ShoppingBag className="h-6 w-6 text-red-600" />
            <div className="text-left">
              <div className="font-semibold text-red-600">Sou Cliente</div>
              <div className="text-sm text-red-500">Busco serviços de beleza</div>
            </div>
          </Button>

          <div className="text-center pt-4">
            <Link to="/login" className="inline-flex items-center text-gray-600 hover:text-gray-500">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar ao login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterType;
