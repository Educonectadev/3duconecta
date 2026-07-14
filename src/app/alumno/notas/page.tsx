"use client";
import { motion } from "framer-motion";

export default function AlumnoNotasPage() {
  return (
    <div className="max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Alumno</p>
        <h1 className="text-2xl font-semibold tracking-tight">Notas</h1>
        <p className="text-sm text-muted-foreground mt-1">Calificaciones por curso</p>

        <div className="border border-border mt-8 p-8 text-center">
          <p className="text-sm text-muted-foreground">No hay notas disponibles.</p>
        </div>
      </motion.div>
    </div>
  );
}
