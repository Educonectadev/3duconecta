"use client";

import { useAuth } from "@/hooks/use-auth";
import { useSchool } from "@/hooks/use-school";
import { SCHOOL_TYPE_LABELS } from "@/lib/constants";
import { Building2, Users, Shield, Activity, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Escuelas", value: "0", icon: Building2, color: "blue" as const },
  { label: "Usuarios", value: "0", icon: Users, color: "green" as const },
  { label: "Sistema", value: "Online", icon: Shield, color: "violet" as const },
  { label: "Logs Hoy", value: "0", icon: Activity, color: "amber" as const },
];

const quickLinks = [
  { label: "Gestionar Escuelas", href: "/dev/escuelas" },
  { label: "Gestionar Usuarios", href: "/dev/usuarios" },
  { label: "Configuracion", href: "/dev/configuracion" },
];

const colorMap = {
  blue: {
    icon: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/50",
    hoverBg: "group-hover:bg-blue-100 dark:group-hover:bg-blue-950/70",
  },
  green: {
    icon: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
    hoverBg: "group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/70",
  },
  violet: {
    icon: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/50",
    hoverBg: "group-hover:bg-violet-100 dark:group-hover:bg-violet-950/70",
  },
  amber: {
    icon: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/50",
    hoverBg: "group-hover:bg-amber-100 dark:group-hover:bg-amber-950/70",
  },
};

export default function DevDashboard() {
  const { user } = useAuth();
  const { schoolType } = useSchool();

  return (
    <div className="max-w-7xl space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-1.5">
          Panel de Desarrollo
        </p>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Bienvenido, {user?.email?.split("@")[0] || "Dev"}
        </h1>
        <p className="text-sm text-muted-foreground mt-1.5">
          Gestion completa del sistema · Modo{" "}
          <span className="text-primary font-semibold">{SCHOOL_TYPE_LABELS[schoolType]}</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, i) => {
          const colors = colorMap[stat.color];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${colors.bg} ${colors.hoverBg}`}>
                <stat.icon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${colors.icon}`} />
              </div>
              <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-card border border-border rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-sm font-semibold mb-4">Acceso Rapido</h2>
          <div className="space-y-2">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between px-4 py-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border/60 transition-all duration-200"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-card border border-border rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-sm font-semibold mb-4">Actividad Reciente</h2>
          <div className="flex items-center justify-center py-8">
            <p className="text-sm text-muted-foreground">
              No hay actividad registrada. Comienza a usar el sistema.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
