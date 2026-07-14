"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SecretariaMatriculasPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Secretaria</p>
        <h1 className="text-2xl font-semibold tracking-tight">Matriculas</h1>
        <p className="text-sm text-muted-foreground mt-1">Gestion de matriculas y traslados</p>

        <div className="relative mt-6">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar matricula..."
            className="w-full pl-6 pr-4 py-2 bg-transparent border-0 border-b border-border text-sm focus:outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="border border-border mt-6">
          <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 text-xs text-muted-foreground tracking-wide uppercase font-medium whitespace-nowrap">Alumno</th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground tracking-wide uppercase font-medium whitespace-nowrap">Grado</th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground tracking-wide uppercase font-medium whitespace-nowrap">Seccion</th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground tracking-wide uppercase font-medium whitespace-nowrap">Estado</th>
                <th className="text-left px-4 py-3 text-xs text-muted-foreground tracking-wide uppercase font-medium whitespace-nowrap">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center whitespace-nowrap">
                  <p className="text-sm text-muted-foreground">No hay matriculas registradas.</p>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
