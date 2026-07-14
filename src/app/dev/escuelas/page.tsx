"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search } from "lucide-react";
import { useSchool } from "@/hooks/use-school";
import { SCHOOL_TYPES, SCHOOL_TYPE_LABELS } from "@/lib/constants";

type School = {
  id: string;
  name: string;
  code: string;
  type: string;
  region: string;
  district: string;
  isActive: boolean;
};

export default function EscuelasPage() {
  const { schoolType } = useSchool();
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const schools: School[] = [];

  const filteredSchools = schools.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Escuelas</h1>
          <p className="text-sm text-neutral-500 mt-1">
            Gestiona todas las instituciones educativas del sistema
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Nueva Escuela
        </button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre o codigo..."
            className="w-full pl-10 pr-4 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900 transition-colors"
          />
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Nueva Escuela</h2>
            <SchoolForm
              schoolType={schoolType}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      <div className="border border-neutral-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <th className="text-left px-4 py-3 font-medium">Nombre</th>
              <th className="text-left px-4 py-3 font-medium">Codigo</th>
              <th className="text-left px-4 py-3 font-medium">Tipo</th>
              <th className="text-left px-4 py-3 font-medium">Region</th>
              <th className="text-left px-4 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {filteredSchools.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-neutral-400">
                  No hay escuelas registradas. Crea la primera.
                </td>
              </tr>
            ) : (
              filteredSchools.map((school) => (
                <tr key={school.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                  <td className="px-4 py-3">{school.name}</td>
                  <td className="px-4 py-3 text-neutral-500">{school.code}</td>
                  <td className="px-4 py-3">
                    <span className="text-xs bg-neutral-100 px-2 py-1">
                      {SCHOOL_TYPE_LABELS[school.type as keyof typeof SCHOOL_TYPE_LABELS]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-neutral-500">{school.region}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-2 py-1 ${
                        school.isActive ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-500"
                      }`}
                    >
                      {school.isActive ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function SchoolForm({
  schoolType,
  onClose,
}: {
  schoolType: string;
  onClose: () => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1.5">Nombre de la Institucion</label>
        <input type="text" className="w-full px-3 py-2 border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">Codigo Modular</label>
        <input type="text" className="w-full px-3 py-2 border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1.5">Region</label>
          <input type="text" className="w-full px-3 py-2 border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Distrito</label>
          <input type="text" className="w-full px-3 py-2 border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">Direccion</label>
        <input type="text" className="w-full px-3 py-2 border border-neutral-300 text-sm focus:outline-none focus:border-neutral-900" />
      </div>
      <p className="text-xs text-neutral-400">
        Tipo: {SCHOOL_TYPE_LABELS[schoolType as keyof typeof SCHOOL_TYPE_LABELS]}
      </p>
      <div className="flex gap-3 pt-2">
        <button type="button" onClick={onClose}
          className="flex-1 py-2 border border-neutral-300 text-sm font-medium hover:bg-neutral-100 transition-colors">
          Cancelar
        </button>
        <button type="button"
          className="flex-1 py-2 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
          Crear Escuela
        </button>
      </div>
    </div>
  );
}
