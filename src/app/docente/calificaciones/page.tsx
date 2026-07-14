"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DocenteCalificacionesPage() {
  const [selected, setSelected] = useState("");
  return (
    <div className="max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Docente</p>
        <h1 className="text-2xl font-semibold tracking-tight">Calificaciones</h1>
        <p className="text-sm text-muted-foreground mt-1">Registro de notas por aula</p>

        <div className="mt-6">
          <label className="block text-xs text-muted-foreground tracking-wide uppercase mb-2">Seleccionar Aula</label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full max-w-xs px-3 py-2 bg-transparent border-0 border-b border-border text-sm focus:outline-none appearance-none"
          >
            <option value="">Selecciona un aula...</option>
          </select>
        </div>

        <div className="border border-border mt-8 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            {selected ? "No hay alumnos en esta aula" : "Selecciona un aula para ver las calificaciones"}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
