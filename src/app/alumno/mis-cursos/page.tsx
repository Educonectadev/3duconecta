"use client";
import { motion } from "framer-motion";

export default function AlumnoMisCursosPage() {
  return (
    <div className="max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Alumno</p>
        <h1 className="text-2xl font-semibold tracking-tight">Mis Cursos</h1>
        <p className="text-sm text-muted-foreground mt-1">Cursos asignados en el periodo actual</p>

        <div className="border border-border mt-8 p-8 text-center">
          <p className="text-sm text-muted-foreground">No tienes cursos asignados.</p>
        </div>
      </motion.div>
    </div>
  );
}
