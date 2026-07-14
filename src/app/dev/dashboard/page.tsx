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
    bg: "bg-blue-50 dark:bg-blue-950/40",
  },
  green: {
    icon: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  violet: {
    icon: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/40",
  },
  amber: {
    icon: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40",
  },
};

export default function DevDashboard() {
  const { user } = useAuth();
  const { schoolType } = useSchool();

  return (
    <div className="max-w-7xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-[11px] font-medium text-muted-foreground tracking-widest uppercase mb-2">
          Panel de Desarrollo
        </p>
        <h1 className="text-3xl font-bold tracking-tight">
          Bienvenido, {user?.email?.split("@")[0] || "Dev"}
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          Gestion completa del sistema · Modo{" "}
          <span className="text-foreground font-semibold">{SCHOOL_TYPE_LABELS[schoolType]}</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {stats.map((stat, i) => {
          const colors = colorMap[stat.color];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative border border-border/60 p-5 rounded-xl hover:border-border hover:shadow-sm transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${colors.bg}`} />
              <div className="relative">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${colors.bg}`}>
                  <stat.icon className={`h-4.5 w-4.5 ${colors.icon}`} />
                </div>
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1.5 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="border border-border/60 rounded-xl p-6"
        >
          <h2 className="text-sm font-semibold mb-4">Acceso Rapido</h2>
          <div className="space-y-1.5">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between px-4 py-3 rounded-lg border border-border/40 hover:border-border hover:bg-accent/50 transition-all duration-200"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="border border-border/60 rounded-xl p-6"
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
