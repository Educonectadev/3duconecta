"use client";
import { motion } from "framer-motion";
import { Search, UserPlus } from "lucide-react";
import { useState } from "react";

export default function SecretariaMatriculasPage() {
  const [search, setSearch] = useState("");
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Matriculas</h1>
          <p className="text-sm text-neutral-500 mt-1">Gestion de matriculas y traslados</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
          <UserPlus className="h-4 w-4" /> Nueva Matricula
        </button>
      </div>
      <div className="border border-neutral-200">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-neutral-200 bg-neutral-50">
            <th className="text-left px-4 py-3 font-medium">Alumno</th><th className="text-left px-4 py-3 font-medium">Grado</th>
            <th className="text-left px-4 py-3 font-medium">Seccion</th><th className="text-left px-4 py-3 font-medium">Estado</th>
            <th className="text-left px-4 py-3 font-medium">Acciones</th>
          </tr></thead>
          <tbody><tr><td colSpan={5} className="px-4 py-12 text-center text-neutral-400">No hay matriculas registradas.</td></tr></tbody>
        </table>
      </div>
    </motion.div>
  );
}
