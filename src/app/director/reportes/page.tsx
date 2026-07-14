"use client";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

export default function DirectorReportesPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Reportes Academicos</h1>
        <p className="text-sm text-neutral-500 mt-1">Estadisticas de tu institucion</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Rendimiento Academico", "Asistencia General", "Docentes"].map((title, idx) => (
          <div key={title} className="border border-neutral-200 p-5 hover:border-neutral-400 transition-colors cursor-pointer">
            <BarChart3 className="h-4 w-4 text-neutral-400 mb-3" />
            <h3 className="text-sm font-medium mb-1">{title}</h3>
            <p className="text-xs text-neutral-400">Reporte detallado</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
