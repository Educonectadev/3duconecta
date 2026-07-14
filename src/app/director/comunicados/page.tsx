"use client";
import { motion } from "framer-motion";

export default function DirectorComunicadosPage() {
  return (
    <div className="max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Director</p>
            <h1 className="text-2xl font-semibold tracking-tight">Comunicados</h1>
            <p className="text-sm text-muted-foreground mt-1">Envia comunicados a la comunidad educativa</p>
          </div>
          <button className="px-4 py-2 bg-foreground text-background text-sm font-medium hover:opacity-90 transition">Nuevo Comunicado</button>
        </div>

        <div className="border border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">No hay comunicados publicados.</p>
        </div>
      </motion.div>
    </div>
  );
}
