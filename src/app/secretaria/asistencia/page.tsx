"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SecretariaAsistenciaPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Secretaria</p>
        <h1 className="text-2xl font-semibold tracking-tight">Asistencia General</h1>
        <p className="text-sm text-muted-foreground mt-1">Registro de asistencia de la institucion</p>

        <div className="relative mt-6">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por alumno o grado..."
            className="w-full pl-6 pr-4 py-2 bg-transparent border-0 border-b border-border text-sm focus:outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="border border-border mt-6 p-8 text-center">
          <p className="text-sm text-muted-foreground">No hay registros de asistencia.</p>
        </div>
      </motion.div>
    </div>
  );
}
