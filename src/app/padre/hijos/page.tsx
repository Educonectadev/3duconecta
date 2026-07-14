"use client";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function PadreHijosPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Mis Hijos</h1>
        <p className="text-sm text-neutral-500 mt-1">Seguimiento academico de tus hijos</p>
      </div>
      <div className="border border-neutral-200 p-5">
        <div className="flex flex-col items-center justify-center py-12">
          <Users className="h-10 w-10 text-neutral-300 mb-4" />
          <p className="text-sm text-neutral-400">No hay hijos vinculados a tu cuenta</p>
        </div>
      </div>
    </motion.div>
  );
}
