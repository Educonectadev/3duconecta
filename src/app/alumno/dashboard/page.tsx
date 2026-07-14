"use client";
import { motion } from "framer-motion";
import { BookOpen, ClipboardCheck, Calendar, TrendingUp } from "lucide-react";

export default function AlumnoDashboard() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Panel del Alumno</h1>
        <p className="text-sm text-neutral-500 mt-1">Tu informacion academica</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Cursos", value: "0", icon: BookOpen },
          { label: "Tareas Pendientes", value: "0", icon: ClipboardCheck },
          { label: "Asistencia", value: "0%", icon: Calendar },
          { label: "Promedio", value: "0", icon: TrendingUp },
        ].map((stat) => (
          <div key={stat.label} className="border border-neutral-200 p-5 hover:border-neutral-400 transition-colors">
            <stat.icon className="h-4 w-4 text-neutral-400 mb-3" />
            <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="text-xs text-neutral-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-neutral-200 p-5">
          <h2 className="text-sm font-medium mb-4">Ultimas Notas</h2>
          <p className="text-xs text-neutral-400">No hay notas registradas aun.</p>
        </div>
        <div className="border border-neutral-200 p-5">
          <h2 className="text-sm font-medium mb-4">Acceso Rapido</h2>
          <div className="space-y-2">
            {[
              { label: "Mis Cursos", href: "/alumno/mis-cursos" },
              { label: "Notas", href: "/alumno/notas" },
              { label: "Tareas", href: "/alumno/tareas" },
              { label: "Asistencia", href: "/alumno/asistencia" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="block px-3 py-2 text-sm border border-neutral-200 hover:bg-neutral-100 transition-colors">{item.label}</a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
