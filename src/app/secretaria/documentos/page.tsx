"use client";
import { motion } from "framer-motion";

export default function SecretariaDocumentosPage() {
  return (
    <div className="max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Secretaria</p>
        <h1 className="text-2xl font-semibold tracking-tight">Documentos</h1>
        <p className="text-sm text-muted-foreground mt-1">Gestion de documentos oficiales</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {["Certificados de Estudio", "Constancias de Matricula", "Actas de Notas"].map((title) => (
            <div key={title} className="border border-border p-6 hover:bg-accent transition cursor-pointer">
              <h3 className="text-sm font-medium">{title}</h3>
              <p className="text-xs text-muted-foreground mt-1">Gestionar documentos</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
