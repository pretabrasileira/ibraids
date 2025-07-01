export interface User {
  id: string
  name: string
  email: string
  phone: string
  cpf: string
  birthDate: string
  role: "entrepreneur" | "consumer" | "admin"
  avatar?: string
  isActive: boolean
  createdAt: string
}

export interface Entrepreneur extends User {
  role: "entrepreneur"
  businessName?: string
  cnpj?: string
  rating: number
  totalServices: number
  isVerified: boolean
  categories: string[]
  location: Location
  bankAccount?: BankAccount
  points: number
}

export interface Consumer extends User {
  role: "consumer"
  addresses: Address[]
  points: number
  currentLocation?: Location
}

export interface Admin extends User {
  role: "admin"
  permissions: string[]
}

export interface Location {
  lat: number
  lng: number
  address: string
  city: string
  state: string
  zipCode: string
}

export interface Address {
  id: string
  name: string
  location: Location
  isDefault: boolean
}

export interface Service {
  id: string
  entrepreneurId: string
  title: string
  description: string
  category: string
  price: number
  duration: number
  isActive: boolean
  images: string[]
}

export interface ServiceRequest {
  id: string
  consumerId: string
  entrepreneurId: string
  serviceId: string
  status: "pending" | "accepted" | "in_progress" | "completed" | "cancelled"
  scheduledDate: string
  location: Location
  totalPrice: number
  rating?: number
  review?: string
  createdAt: string
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
  isActive: boolean
}

export interface BankAccount {
  bank: string
  agency: string
  account: string
  accountType: "checking" | "savings"
  holderName: string
  holderDocument: string
}

export interface AuthResponse {
  token: string
  user: User
  expiresIn: number
}

export interface LoginRequest {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
  phone: string
  cpf: string
  birthDate: string
  role: "entrepreneur" | "consumer"
}
