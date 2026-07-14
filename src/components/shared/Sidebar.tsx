"use client";

import { useAuth } from "@/hooks/use-auth";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
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
  type LucideIcon,
} from "lucide-react";
import { useRef, useState } from "react";
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

  if (!role) return null;

  const navItems = NAV_ITEMS[role];

  return (
    <>
      <aside
        className={cn(
          "hidden md:flex flex-col h-dvh bg-background border-r border-border z-40 sticky top-0 transition-[width] duration-200",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-border shrink-0">
          {collapsed ? (
            <span className="w-2 h-2 bg-foreground" />
          ) : (
            <span className="font-semibold text-base tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 bg-foreground" />
              EduConecta
            </span>
          )}
          <button
            className="flex items-center justify-center w-8 h-8 text-muted-foreground hover:text-foreground"
            onClick={() => setCollapsed(!collapsed)}
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                collapsed && "rotate-180"
              )}
            />
          </button>
        </div>

        {role === "dev" && !collapsed && (
          <div className="shrink-0">
            <SchoolToggle />
          </div>
        )}

        <div className="flex-1 py-2 px-2 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <NavButton
              key={item.href}
              item={item}
              collapsed={collapsed}
              active={pathname === item.href}
            />
          ))}
        </div>

        <div className="border-t border-border py-2 px-2 space-y-0.5 shrink-0">
          {!collapsed && (
            <div className="px-3 py-2">
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
              <p className="text-xs font-medium text-foreground">{ROLE_LABELS[role]}</p>
            </div>
          )}
          <button
            onClick={signOut}
            className={cn(
              "flex items-center gap-3 w-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground",
              collapsed && "justify-center px-0"
            )}
          >
            <LogOut className="h-4 w-4 shrink-0" />
            {!collapsed && <span>Cerrar Sesion</span>}
          </button>
        </div>
      </aside>

      <MobileBottomNav
        navItems={navItems}
        pathname={pathname}
        role={role}
        email={user?.email}
        onSignOut={signOut}
      />
    </>
  );
}

function NavButton({
  item,
  collapsed,
  active,
}: {
  item: NavItem;
  collapsed: boolean;
  active: boolean;
}) {
  return (
    <a
      href={item.href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 text-sm",
        collapsed && "justify-center px-0 mx-auto w-10 h-10",
        active
          ? "bg-accent text-foreground font-medium"
          : "text-muted-foreground hover:bg-accent hover:text-foreground"
      )}
    >
      <item.icon className="h-4 w-4 shrink-0" />
      {!collapsed && <span>{item.label}</span>}
    </a>
  );
}

function MobileBottomNav({
  navItems,
  pathname,
  onSignOut,
}: {
  navItems: NavItem[];
  pathname: string;
  role: Role;
  email?: string;
  onSignOut: () => void;
}) {
  return (
    <>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 flex items-stretch h-14">
        {navItems.slice(0, 5).map((item) => {
          const isActive = pathname === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 min-w-0 gap-0",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <div className="relative flex items-center justify-center">
                {isActive && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-foreground" />
                )}
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-[9px] leading-tight mt-0.5">{item.label}</span>
            </a>
          );
        })}
        {navItems.length > 5 && (
          <MoreMenu navItems={navItems.slice(5)} pathname={pathname} />
        )}
        <button
          onClick={onSignOut}
          className="flex flex-col items-center justify-center flex-1 min-w-0 gap-0 text-muted-foreground"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-[9px] leading-tight mt-0.5">Salir</span>
        </button>
      </nav>
      <div className="md:hidden h-14" />
    </>
  );
}

function MoreMenu({
  navItems,
  pathname,
}: {
  navItems: NavItem[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex-1 min-w-0">
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        className="flex flex-col items-center justify-center w-full h-full gap-0 text-muted-foreground"
      >
        <div className="flex gap-0.5">
          <span className="w-1 h-1 bg-current" />
          <span className="w-1 h-1 bg-current" />
          <span className="w-1 h-1 bg-current" />
        </div>
        <span className="text-[9px] leading-tight mt-0.5">Mas</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute bottom-14 right-0 mb-2 bg-background border border-border shadow-lg min-w-40 z-50">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 text-sm",
                  pathname === item.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
