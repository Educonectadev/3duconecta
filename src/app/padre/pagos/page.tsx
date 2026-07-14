"use client";
import { motion } from "framer-motion";

export default function PadrePagosPage() {
  return (
    <div className="max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Padre</p>
        <h1 className="text-2xl font-semibold tracking-tight">Pagos</h1>
        <p className="text-sm text-muted-foreground mt-1">Historial y estado de pagos</p>

        <div className="border border-border mt-8 p-8 text-center">
          <p className="text-sm text-muted-foreground">No hay pagos registrados.</p>
        </div>
      </motion.div>
    </div>
  );
}
