"use client";
import { motion } from "framer-motion";

export default function ConfigPage() {
  return (
    <div className="max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Desarrollador</p>
        <h1 className="text-2xl font-semibold tracking-tight">Configuracion del Sistema</h1>
        <p className="text-sm text-muted-foreground mt-1">Parametros globales del sistema educativo nacional</p>

        <div className="space-y-6 max-w-lg mt-8">
          <div className="border border-border p-6">
            <h2 className="text-sm font-medium mb-4">Periodo Academico</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-muted-foreground tracking-wide uppercase mb-2">Anio academico actual</label>
                <input
                  type="text"
                  defaultValue="2026"
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground tracking-wide uppercase mb-2">Periodos</label>
                <div className="flex gap-2">
                  {["I", "II", "III", "IV"].map((p) => (
                    <span key={p} className="px-3 py-1 text-xs border border-border">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border border-border p-6">
            <h2 className="text-sm font-medium mb-4">Calificaciones</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-muted-foreground tracking-wide uppercase mb-2">Nota maxima</label>
                <input
                  type="text"
                  defaultValue="20"
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground tracking-wide uppercase mb-2">Nota minima</label>
                <input
                  type="text"
                  defaultValue="0"
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground tracking-wide uppercase mb-2">Aprobatoria</label>
                <input
                  type="text"
                  defaultValue="11"
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:outline-none"
                />
              </div>
            </div>
          </div>

          <button className="px-6 py-2.5 bg-foreground text-background text-sm font-medium hover:opacity-90 transition">
            Guardar Cambios
          </button>
        </div>
      </motion.div>
    </div>
  );
}
