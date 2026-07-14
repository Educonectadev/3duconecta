"use client";

import { motion } from "framer-motion";

export default function ConfigPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Configuracion del Sistema</h1>
        <p className="text-sm text-neutral-500 mt-1">Parametros globales del sistema educativo nacional</p>
      </div>

      <div className="space-y-6 max-w-lg">
        <div className="border border-neutral-200 p-5">
          <h2 className="text-sm font-medium mb-4">Periodo Academico</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-1">Anio academico actual</label>
              <input type="text" defaultValue="2026" className="w-full px-3 py-2 border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900" />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-1">Periodos</label>
              <div className="flex gap-2">
                {["I", "II", "III", "IV"].map((p) => (
                  <span key={p} className="px-3 py-1 text-xs bg-neutral-100 border border-neutral-200">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border border-neutral-200 p-5">
          <h2 className="text-sm font-medium mb-4">Calificaciones</h2>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-1">Nota maxima</label>
              <input type="text" defaultValue="20" className="w-full px-3 py-2 border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900" />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-1">Nota minima</label>
              <input type="text" defaultValue="0" className="w-full px-3 py-2 border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900" />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-1">Aprobatoria</label>
              <input type="text" defaultValue="11" className="w-full px-3 py-2 border border-neutral-300 text-sm" />
            </div>
          </div>
        </div>

        <button className="px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
          Guardar Cambios
        </button>
      </div>
    </motion.div>
  );
}
