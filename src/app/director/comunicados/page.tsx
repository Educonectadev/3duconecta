"use client";
import { motion } from "framer-motion";

export default function DirectorComunicadosPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Comunicados</h1>
          <p className="text-sm text-neutral-500 mt-1">Envia comunicados a la comunidad educativa</p>
        </div>
        <button className="px-4 py-2 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800">Nuevo Comunicado</button>
      </div>
      <div className="border border-neutral-200 p-8 text-center text-neutral-400 text-sm">No hay comunicados publicados.</div>
    </motion.div>
  );
}
