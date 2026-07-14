"use client"

import { useAuth } from "@/hooks/use-auth"
import { useSchool } from "@/hooks/use-school"
import { SCHOOL_TYPE_LABELS } from "@/lib/constants"
import { Building2, Users, Shield, Activity, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const stats = [
  { title: "Escuelas", value: "0", subtitle: "Instituciones registradas", color: "bg-blue-500" },
  { title: "Usuarios", value: "0", subtitle: "Usuarios activos", color: "bg-emerald-500" },
  { title: "Sistema", value: "Online", subtitle: "Estado del servicio", color: "bg-purple-500" },
  { title: "Logs Hoy", value: "0", subtitle: "Eventos registrados", color: "bg-amber-500" },
]

const quickLinks = [
  { label: "Gestionar Escuelas", href: "/dev/escuelas" },
  { label: "Gestionar Usuarios", href: "/dev/usuarios" },
  { label: "Configuracion", href: "/dev/configuracion" },
]

export default function DevDashboard() {
  const { user } = useAuth()
  const { schoolType } = useSchool()

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-1">
          Bienvenido, {user?.email?.split("@")[0] || "Dev"}
        </h1>
        <p className="text-sm text-muted-foreground">
          Gestion completa del sistema · Modo{" "}
          <span className="font-medium text-foreground">{SCHOOL_TYPE_LABELS[schoolType]}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <Card
            key={stat.title}
            className="bg-card border border-border p-4 rounded-lg animate-slide-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <h3 className="text-xs text-muted-foreground font-medium mb-3">{stat.title}</h3>
            <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className={`w-2 h-2 rounded-full ${stat.color}`} />
              <span className="text-xs text-muted-foreground">{stat.subtitle}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card
          className="p-6 transition-all duration-500 hover:shadow-xl animate-slide-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">Acceso Rapido</h2>
          <div className="space-y-2">
            {quickLinks.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <span className="font-medium text-foreground text-sm">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Card>

        <Card
          className="p-6 transition-all duration-500 hover:shadow-xl animate-slide-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">Actividad Reciente</h2>
          <div className="flex items-center justify-center py-8">
            <p className="text-sm text-muted-foreground">
              No hay actividad registrada. Comienza a usar el sistema.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
