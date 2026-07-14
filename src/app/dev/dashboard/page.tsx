"use client";

import { useAuth } from "@/hooks/use-auth";
import { useSchool } from "@/hooks/use-school";
import { SCHOOL_TYPE_LABELS } from "@/lib/constants";
import { Building2, Users, Shield, Activity, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Escuelas", value: "0", icon: Building2 },
  { label: "Usuarios", value: "0", icon: Users },
  { label: "Sistema", value: "Online", icon: Shield },
  { label: "Logs Hoy", value: "0", icon: Activity },
];

export default function DevDashboard() {
  const { user } = useAuth();
  const { schoolType } = useSchool();

  return (
    <div className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">
          Panel de Desarrollo
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Bienvenido, {user?.email?.split("@")[0] || "Dev"}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Gestion completa del sistema · Modo{" "}
          <span className="text-foreground font-medium">{SCHOOL_TYPE_LABELS[schoolType]}</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * i }}
            className="border border-border p-5 hover:bg-accent transition-colors duration-200"
          >
            <stat.icon className="h-4 w-4 text-muted-foreground mb-4" />
            <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="border border-border p-6"
        >
          <h2 className="text-sm font-medium mb-5">Acceso Rapido</h2>
          <div className="space-y-1">
            {[
              { label: "Gestionar Escuelas", href: "/dev/escuelas" },
              { label: "Gestionar Usuarios", href: "/dev/usuarios" },
              { label: "Configuracion", href: "/dev/configuracion" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between px-3 py-2.5 border border-border hover:bg-accent transition-colors duration-150"
              >
                <span className="text-sm">{item.label}</span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors duration-150" />
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="border border-border p-6"
        >
          <h2 className="text-sm font-medium mb-5">Actividad Reciente</h2>
          <p className="text-xs text-muted-foreground">
            No hay actividad registrada. Comienza a usar el sistema.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
