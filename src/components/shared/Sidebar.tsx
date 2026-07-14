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
  ClipboardList,
  BookMarked,
  ChevronLeft,
  Menu,
  X,
  Home,
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

const ROLE_LABELS: Record<Role, string> = {
  dev: "Desarrollador",
  director: "Director",
  secretaria: "Secretaria",
  docente: "Docente",
  alumno: "Alumno",
  padre: "Padre de Familia",
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
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Abrir menu"
      >
        <Menu className="h-5 w-5 text-neutral-600" />
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside
        className={cn(
          "fixed md:sticky top-0 left-0 h-dvh bg-background border-r border-border flex flex-col z-40 transition-all duration-300",
          collapsed ? "w-16" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-border">
          {collapsed ? (
            <span className="w-2 h-2 bg-foreground" />
          ) : (
            <span className="font-semibold text-base tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 bg-foreground" />
              EduConecta
            </span>
          )}
          <div className="flex items-center gap-1">
            {mobileOpen && (
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              onClick={() => setCollapsed(!collapsed)}
            >
              <ChevronLeft
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  collapsed && "rotate-180"
                )}
              />
            </Button>
          </div>
        </div>

        {role === "dev" && !collapsed && <SchoolToggle />}

        <div className="flex-1 py-2 px-2 space-y-0.5 overflow-y-auto">
          {navItems.map((item, i) => (
            <NavButton
              key={item.href}
              item={item}
              collapsed={collapsed}
              active={pathname === item.href}
              delay={i * 0.03}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        </div>

        <div className="border-t border-border py-2 px-2 space-y-0.5">
          {!collapsed && (
            <div className="px-3 py-2">
              <p className="text-xs text-muted-foreground truncate">
                {user?.email}
              </p>
              <p className="text-xs font-medium text-foreground">
                {ROLE_LABELS[role]}
              </p>
            </div>
          )}
          <button
            onClick={signOut}
            className={cn(
              "flex items-center gap-3 w-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150",
              collapsed && "justify-center px-0"
            )}
          >
            <LogOut className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Cerrar Sesion</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

function NavButton({
  item,
  collapsed,
  active,
  delay,
  onClick,
}: {
  item: NavItem;
  collapsed: boolean;
  active: boolean;
  delay: number;
  onClick: () => void;
}) {
  return (
    <motion.a
      href={item.href}
      onClick={onClick}
      initial={false}
      animate={{
        backgroundColor: active
          ? "var(--color-accent)"
          : "transparent",
      }}
      whileHover={{ backgroundColor: "var(--color-accent)" }}
      transition={{ duration: 0.15, delay }}
      className={cn(
        "flex items-center gap-3 rounded-sm px-3 py-2 text-sm transition-colors duration-150",
        collapsed && "justify-center px-0 mx-auto w-10 h-10",
        active ? "text-foreground font-medium" : "text-muted-foreground"
      )}
    >
      <item.icon className="h-4 w-4 shrink-0" />
      {!collapsed && <span>{item.label}</span>}
    </motion.a>
  );
}
