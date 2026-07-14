"use client";

import { useAuth } from "@/hooks/use-auth";
import { useSchool } from "@/hooks/use-school";
import { SCHOOL_TYPE_LABELS } from "@/lib/constants";
import { Building2, Users, Shield, Activity } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Escuelas Registradas", value: "0", icon: Building2 },
  { label: "Usuarios Activos", value: "0", icon: Users },
  { label: "Sistema", value: "Online", icon: Shield },
  { label: "Logs Hoy", value: "0", icon: Activity },
];

export default function DevDashboard() {
  const { user } = useAuth();
  const { schoolType } = useSchool();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Panel de Desarrollo</h1>
        <p className="text-sm text-neutral-500 mt-1">
          Gestion completa del sistema | Modo:{" "}
          <span className="font-medium text-neutral-900">
            {SCHOOL_TYPE_LABELS[schoolType]}
          </span>
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border border-neutral-200 p-5 hover:border-neutral-400 transition-colors"
          >
            <stat.icon className="h-4 w-4 text-neutral-400 mb-3" />
            <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="text-xs text-neutral-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-neutral-200 p-5">
          <h2 className="text-sm font-medium mb-4">Acceso Rapido</h2>
          <div className="space-y-2">
            {[
              { label: "Gestionar Escuelas", href: "/dev/escuelas" },
              { label: "Gestionar Usuarios", href: "/dev/usuarios" },
              { label: "Configuracion", href: "/dev/configuracion" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm border border-neutral-200 hover:bg-neutral-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border border-neutral-200 p-5">
          <h2 className="text-sm font-medium mb-4">Actividad Reciente</h2>
          <p className="text-xs text-neutral-400">
            No hay actividad registrada. Comienza a usar el sistema.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
