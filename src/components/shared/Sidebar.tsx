"use client"

import { useAuth } from "@/hooks/use-auth"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardCheck,
  FileText,
  MessageSquare,
  LogOut,
  CreditCard,
  GraduationCap,
  Calendar,
  BarChart3,
  UserPlus,
  Building2,
  Settings,
  ClipboardList,
  BookMarked,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react"
import { useState } from "react"
import type { Role } from "@/lib/auth/roles"
import { SchoolToggle } from "@/components/shared/SchoolToggle"

interface NavItem {
  label: string
  href: string
  icon: LucideIcon
}

const NAV_ITEMS: Record<Role, NavItem[]> = {
  dev: [
    { label: "Dashboard", href: "/dev", icon: LayoutDashboard },
    { label: "Escuelas", href: "/dev/escuelas", icon: Building2 },
    { label: "Usuarios", href: "/dev/usuarios", icon: Users },
    { label: "Configuracion", href: "/dev/configuracion", icon: Settings },
  ],
  director: [
    { label: "Dashboard", href: "/director", icon: LayoutDashboard },
    { label: "Docentes", href: "/director/docentes", icon: UserPlus },
    { label: "Reportes", href: "/director/reportes", icon: BarChart3 },
    { label: "Comunicados", href: "/director/comunicados", icon: MessageSquare },
  ],
  secretaria: [
    { label: "Dashboard", href: "/secretaria", icon: LayoutDashboard },
    { label: "Matriculas", href: "/secretaria/matriculas", icon: ClipboardList },
    { label: "Alumnos", href: "/secretaria/alumnos", icon: GraduationCap },
    { label: "Padres", href: "/secretaria/padres", icon: Users },
    { label: "Documentos", href: "/secretaria/documentos", icon: FileText },
    { label: "Asistencia", href: "/secretaria/asistencia", icon: ClipboardCheck },
  ],
  docente: [
    { label: "Dashboard", href: "/docente", icon: LayoutDashboard },
    { label: "Mis Clases", href: "/docente/mis-clases", icon: BookOpen },
    { label: "Calificaciones", href: "/docente/calificaciones", icon: ClipboardCheck },
    { label: "Materiales", href: "/docente/materiales", icon: BookMarked },
  ],
  alumno: [
    { label: "Dashboard", href: "/alumno", icon: LayoutDashboard },
    { label: "Mis Cursos", href: "/alumno/mis-cursos", icon: BookOpen },
    { label: "Notas", href: "/alumno/notas", icon: ClipboardCheck },
    { label: "Tareas", href: "/alumno/tareas", icon: ClipboardList },
    { label: "Asistencia", href: "/alumno/asistencia", icon: Calendar },
  ],
  padre: [
    { label: "Dashboard", href: "/padre", icon: LayoutDashboard },
    { label: "Mis Hijos", href: "/padre/hijos", icon: Users },
    { label: "Pagos", href: "/padre/pagos", icon: CreditCard },
    { label: "Comunicados", href: "/padre/comunicados", icon: MessageSquare },
  ],
}

const ROLE_LABELS: Record<Role, string> = {
  dev: "Desarrollador",
  director: "Director",
  secretaria: "Secretaria",
  docente: "Docente",
  alumno: "Alumno",
  padre: "Padre de Familia",
}

export function Sidebar() {
  const { user, role, signOut } = useAuth()
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  if (!role) return null

  const navItems = NAV_ITEMS[role]

  return (
    <>
      <aside
        className={cn(
          "hidden md:flex fixed top-0 left-0 bg-sidebar border-r border-sidebar-border h-screen overflow-y-auto transition-all duration-300 ease-in-out z-40",
          isCollapsed ? "w-16" : "w-60"
        )}
      >
        <div className={cn("p-4", isCollapsed && "px-2")}>
          <div className={cn("mb-6 flex items-center", isCollapsed ? "justify-center" : "justify-between")}>
            {!isCollapsed && (
              <div>
                <span className="text-base font-bold text-sidebar-foreground">EduConecta</span>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={cn(
                "h-7 w-7 rounded-lg hover:bg-sidebar-accent flex items-center justify-center transition-colors",
                isCollapsed && "mx-auto"
              )}
            >
              {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="space-y-4">
            {role === "dev" && !isCollapsed && (
              <SchoolToggle />
            )}

            <div>
              {!isCollapsed && (
                <p className="text-[10px] font-semibold text-muted-foreground mb-2 uppercase tracking-wide px-2">
                  NAVEGACION
                </p>
              )}
              <nav className="space-y-0.5">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      title={isCollapsed ? item.label : undefined}
                      className={cn(
                        "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-normal transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                        isCollapsed && "justify-center"
                      )}
                    >
                      <item.icon className={cn("w-4 h-4", isCollapsed && "w-4.5 h-4.5")} />
                      {!isCollapsed && <span className="text-sm">{item.label}</span>}
                    </a>
                  )
                })}
              </nav>
            </div>

            {!isCollapsed && (
              <div>
                <p className="text-[10px] font-semibold text-muted-foreground mb-2 uppercase tracking-wide px-2">
                  CUENTA
                </p>
                <div className="px-2.5 py-2">
                  <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                  <p className="text-xs font-medium text-foreground">{ROLE_LABELS[role]}</p>
                </div>
                <button
                  onClick={signOut}
                  className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-normal text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Cerrar Sesion</span>
                </button>
              </div>
            )}

            {isCollapsed && (
              <nav className="space-y-0.5">
                <button
                  onClick={signOut}
                  className="w-full flex items-center justify-center px-2.5 py-2 rounded-lg text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </nav>
            )}
          </div>
        </div>
      </aside>

      <MobileBottomNav
        navItems={navItems}
        pathname={pathname}
        role={role}
        onSignOut={signOut}
      />
    </>
  )
}

function MobileBottomNav({
  navItems,
  pathname,
  role,
  onSignOut,
}: {
  navItems: NavItem[]
  pathname: string
  role: Role
  onSignOut: () => void
}) {
  return (
    <>
      {role === "dev" && (
        <div className="md:hidden fixed bottom-14 left-0 right-0 z-50">
          <SchoolToggle />
        </div>
      )}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border z-50 flex items-stretch h-14">
        {navItems.slice(0, 5).map((item) => {
          const isActive = pathname === item.href
          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 min-w-0 gap-0 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div className="relative flex items-center justify-center">
                {isActive && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />
                )}
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-[9px] leading-tight mt-0.5 font-medium">{item.label}</span>
            </a>
          )
        })}
        <button
          onClick={onSignOut}
          className="flex flex-col items-center justify-center flex-1 min-w-0 gap-0 text-muted-foreground"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-[9px] leading-tight mt-0.5">Salir</span>
        </button>
      </nav>
      <div className={cn("md:hidden", role === "dev" ? "h-[8.5rem]" : "h-14")} />
    </>
  )
}
