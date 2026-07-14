"use client";

import { useAuth } from "@/hooks/use-auth";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  Shield,
  ClipboardList,
  BookMarked,
  ChevronLeft,
  Menu,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Role } from "@/lib/auth/roles";
import { useSchool } from "@/hooks/use-school";
import { SchoolToggle } from "@/components/shared/SchoolToggle";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
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
};

export function Sidebar() {
  const { user, role, signOut } = useAuth();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!role) return null;

  const navItems = NAV_ITEMS[role];

  return (
    <>
      <button
        className="fixed top-3 left-3 z-50 md:hidden"
        onClick={() => setMobileOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside
        className={cn(
          "fixed md:sticky top-0 left-0 h-screen bg-neutral-900 text-white flex flex-col z-40 transition-all duration-300",
          collapsed ? "w-16" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-700">
          {!collapsed && (
            <span className="font-semibold text-lg tracking-tight">EduConecta</span>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-neutral-700 hidden md:flex"
            onClick={() => setCollapsed(!collapsed)}
          >
            <ChevronLeft
              className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")}
            />
          </Button>
        </div>

        {role === "dev" && !collapsed && <SchoolToggle />}

        <nav className="flex-1 p-2 space-y-1">
          {navItems.map((item) => (
            <NavButton
              key={item.href}
              item={item}
              collapsed={collapsed}
              active={pathname === item.href}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        </nav>

        <div className="p-2 border-t border-neutral-700 space-y-1">
          {!collapsed && (
            <div className="px-3 py-2 text-xs text-neutral-400 truncate">
              {user?.email}
            </div>
          )}
          <Button
            variant="ghost"
            size={collapsed ? "icon" : "default"}
            className="w-full justify-start text-white hover:bg-neutral-700"
            onClick={signOut}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Cerrar Sesion</span>}
          </Button>
        </div>
      </aside>
    </>
  );
}

function NavButton({
  item,
  collapsed,
  active,
  onClick,
}: {
  item: NavItem;
  collapsed: boolean;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <a href={item.href} onClick={onClick}>
      <Button
        variant="ghost"
        size={collapsed ? "icon" : "default"}
        className={cn(
          "w-full justify-start text-white hover:bg-neutral-700 transition-colors duration-200",
          active && "bg-neutral-700"
        )}
      >
        <item.icon className="h-4 w-4 shrink-0" />
        {!collapsed && <span className="ml-3 text-sm">{item.label}</span>}
      </Button>
    </a>
  );
}
