"use client";
import { motion } from "framer-motion";
import { GraduationCap, ClipboardCheck, FileText, Users } from "lucide-react";

export default function SecretariaDashboard() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Panel de Secretaria</h1>
        <p className="text-sm text-neutral-500 mt-1">Administracion academica general</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Alumnos", value: "0", icon: GraduationCap }, { label: "Matriculas", value: "0", icon: ClipboardCheck },
          { label: "Documentos", value: "0", icon: FileText }, { label: "Padres", value: "0", icon: Users },
        ].map((s) => (
          <div key={s.label} className="border border-neutral-200 p-5 hover:border-neutral-400 transition-colors">
            <s.icon className="h-4 w-4 text-neutral-400 mb-3" />
            <p className="text-2xl font-semibold tracking-tight">{s.value}</p>
            <p className="text-xs text-neutral-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-neutral-200 p-5">
          <h2 className="text-sm font-medium mb-4">Acceso Rapido</h2>
          {["Gestionar Matriculas", "Gestionar Padres", "Documentos"].map((l, i) => (
            <a key={l} href={["/secretaria/matriculas", "/secretaria/padres", "/secretaria/documentos"][i]}
              className="block px-3 py-2 text-sm border border-neutral-200 hover:bg-neutral-100 transition-colors">{l}</a>
          ))}
        </div>
        <div className="border border-neutral-200 p-5">
          <h2 className="text-sm font-medium mb-4">Actividades del Dia</h2>
          <p className="text-xs text-neutral-400">No hay actividades registradas para hoy.</p>
        </div>
      </div>
    </motion.div>
  );
}
