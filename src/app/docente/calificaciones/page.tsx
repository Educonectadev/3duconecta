"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ClipboardCheck, ChevronDown } from "lucide-react";

export default function DocenteCalificacionesPage() {
  const [selected, setSelected] = useState("");
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Calificaciones</h1>
        <p className="text-sm text-neutral-500 mt-1">Registro de notas por aula</p>
      </div>
      <div className="border border-neutral-200 p-5 mb-6">
        <label className="block text-sm font-medium mb-2">Seleccionar Aula</label>
        <div className="relative">
          <select value={selected} onChange={(e) => setSelected(e.target.value)}
            className="w-full appearance-none border border-neutral-200 px-3 py-2 text-sm bg-white pr-8 focus:outline-none focus:border-neutral-400">
            <option value="">Selecciona un aula...</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
        </div>
      </div>
      <div className="border border-neutral-200 p-5">
        <div className="flex flex-col items-center justify-center py-12">
          <ClipboardCheck className="h-10 w-10 text-neutral-300 mb-4" />
          <p className="text-sm text-neutral-400">{selected ? "No hay alumnos en esta aula" : "Selecciona un aula para ver las calificaciones"}</p>
        </div>
      </div>
    </motion.div>
  );
}
