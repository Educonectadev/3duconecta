"use client";
import { motion } from "framer-motion";
import { Search, UserPlus } from "lucide-react";
import { useState } from "react";

export default function SecretariaAlumnosPage() {
  const [search, setSearch] = useState("");
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Alumnos</h1>
          <p className="text-sm text-neutral-500 mt-1">Registro de alumnos de la institucion</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
          <UserPlus className="h-4 w-4" /> Nuevo Alumno
        </button>
      </div>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar alumno..." className="w-full pl-10 pr-4 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900" />
      </div>
      <div className="border border-neutral-200">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-neutral-200 bg-neutral-50">
            <th className="text-left px-4 py-3 font-medium">Nombre</th><th className="text-left px-4 py-3 font-medium">DNI</th>
            <th className="text-left px-4 py-3 font-medium">Grado</th><th className="text-left px-4 py-3 font-medium">Seccion</th>
            <th className="text-left px-4 py-3 font-medium">Estado</th>
          </tr></thead>
          <tbody><tr><td colSpan={5} className="px-4 py-12 text-center text-neutral-400">No hay alumnos registrados.</td></tr></tbody>
        </table>
      </div>
    </motion.div>
  );
}
