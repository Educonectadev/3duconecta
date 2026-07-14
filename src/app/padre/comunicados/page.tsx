"use client";
import { motion } from "framer-motion";

export default function PadreComunicadosPage() {
  return (
    <div className="max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Padre</p>
        <h1 className="text-2xl font-semibold tracking-tight">Comunicados</h1>
        <p className="text-sm text-muted-foreground mt-1">Mensajes y notificaciones de la institucion</p>

        <div className="border border-border mt-8 p-8 text-center">
          <p className="text-sm text-muted-foreground">No hay comunicados disponibles.</p>
        </div>
      </motion.div>
    </div>
  );
}
