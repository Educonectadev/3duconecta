"use client";
import { motion } from "framer-motion";

export default function AlumnoTareasPage() {
  return (
    <div className="max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Alumno</p>
        <h1 className="text-2xl font-semibold tracking-tight">Tareas</h1>
        <p className="text-sm text-muted-foreground mt-1">Tareas asignadas y pendientes</p>

        <div className="border border-border mt-8 p-8 text-center">
          <p className="text-sm text-muted-foreground">No hay tareas pendientes.</p>
        </div>
      </motion.div>
    </div>
  );
}
