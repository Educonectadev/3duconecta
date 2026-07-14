"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Search } from "lucide-react";

export default function DirectorDocentesPage() {
  const [search, setSearch] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Gestion</p>
          <h1 className="text-2xl font-semibold tracking-tight">Planta Docente</h1>
          <p className="text-sm text-muted-foreground mt-1">Gestiona los docentes de tu institucion</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-all duration-200">
          <UserPlus className="h-4 w-4" /> Nuevo Docente
        </button>
      </div>

      <div className="mb-6 border-b border-border pb-4">
        <div className="relative max-w-xs">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar docente..."
            className="w-full pl-7 pr-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" />
        </div>
      </div>

      <div className="border border-border">
        <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {["Nombre", "DNI", "Especialidad", "Tipo", "Acciones"].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="px-4 py-16 text-center whitespace-nowrap">
                <p className="text-sm text-muted-foreground">No hay docentes registrados.</p>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </motion.div>
  );
}
