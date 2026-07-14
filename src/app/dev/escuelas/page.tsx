"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, X } from "lucide-react";
import { useSchool } from "@/hooks/use-school";
import { SCHOOL_TYPE_LABELS } from "@/lib/constants";

export default function EscuelasPage() {
  const { schoolType } = useSchool();
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">Administracion</p>
          <h1 className="text-2xl font-semibold tracking-tight">Escuelas</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gestiona todas las instituciones educativas del sistema
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          Nueva Escuela
        </button>
      </div>

      <div className="mb-6 border-b border-border pb-4">
        <div className="relative max-w-xs">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre o codigo..."
            className="w-full pl-7 pr-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors"
          />
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50"
              onClick={() => setShowForm(false)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="bg-background border border-border w-full max-w-lg p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-base font-medium">Nueva Escuela</h2>
                  <button onClick={() => setShowForm(false)}>
                    <X className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </button>
                </div>
                <SchoolForm
                  schoolType={schoolType}
                  onClose={() => setShowForm(false)}
                />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <div className="border border-border">
        <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Nombre</th>
              <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Codigo</th>
              <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Tipo</th>
              <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Region</th>
              <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="px-4 py-16 text-center whitespace-nowrap">
                <p className="text-sm text-muted-foreground">No hay escuelas registradas.</p>
                <p className="text-xs text-muted-foreground mt-1">Crea la primera escuela para comenzar.</p>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </motion.div>
  );
}

function SchoolForm({ schoolType, onClose }: { schoolType: string; onClose: () => void }) {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">Nombre de la Institucion</label>
        <input type="text" className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">Codigo Modular</label>
        <input type="text" className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">Region</label>
          <input type="text" className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">Distrito</label>
          <input type="text" className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">Direccion</label>
        <input type="text" className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" />
      </div>
      <p className="text-xs text-muted-foreground">
        Tipo: {SCHOOL_TYPE_LABELS[schoolType as keyof typeof SCHOOL_TYPE_LABELS]}
      </p>
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onClose}
          className="flex-1 py-2 border border-border text-sm font-medium hover:bg-accent transition-colors duration-150">
          Cancelar
        </button>
        <button type="button"
          className="flex-1 py-2 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-all duration-200">
          Crear Escuela
        </button>
      </div>
    </div>
  );
}
