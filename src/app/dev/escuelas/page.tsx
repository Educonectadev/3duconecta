"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, X, Loader2 } from "lucide-react";
import { useSchool } from "@/hooks/use-school";
import { SCHOOL_TYPE_LABELS, type SchoolType } from "@/lib/constants";
import { REGION_LIST, getProvinces, getDistricts } from "@/lib/locations";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

interface School {
  id: string;
  name: string;
  code: string;
  type: string;
  region: string;
  province: string;
  district: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  is_active: boolean;
  created_at: string;
}

interface SchoolForm {
  name: string;
  code: string;
  type: SchoolType;
  region: string;
  province: string;
  district: string;
  address: string;
  phone: string;
  email: string;
}

const initialForm: SchoolForm = {
  name: "",
  code: "",
  type: "estatal",
  region: "",
  province: "",
  district: "",
  address: "",
  phone: "",
  email: "",
};

export default function EscuelasPage() {
  const { schoolType } = useSchool();
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<SchoolForm>({ ...initialForm, type: schoolType });

  const supabase = createClient();

  const fetchSchools = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("schools")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Error al cargar escuelas");
      console.error(error);
    } else {
      setSchools(data ?? []);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchSchools();
  }, [fetchSchools]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, type: schoolType }));
  }, [schoolType]);

  const provinces = form.region ? getProvinces(form.region) : [];
  const districts = form.region && form.province ? getDistricts(form.region, form.province) : [];

  useEffect(() => {
    setForm((prev) => ({ ...prev, province: "", district: "" }));
  }, [form.region]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, district: "" }));
  }, [form.province]);

  const updateField = (field: keyof SchoolForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.code.trim() || !form.region || !form.province || !form.district) {
      toast.error("Completa todos los campos obligatorios");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("schools").insert({
      name: form.name.trim(),
      code: form.code.trim(),
      type: form.type,
      region: REGION_LIST.find((r) => r.id === form.region)?.name ?? form.region,
      province: provinces.find((p) => p.id === form.province)?.name ?? form.province,
      district: form.district,
      address: form.address.trim() || null,
      phone: form.phone.trim() || null,
      email: form.email.trim() || null,
    });

    setSubmitting(false);

    if (error) {
      if (error.code === "23505") {
        toast.error("Ya existe una escuela con ese codigo");
      } else {
        toast.error("Error al crear la escuela");
      }
      console.error(error);
    } else {
      toast.success("Escuela creada correctamente");
      setForm({ ...initialForm, type: schoolType });
      setShowForm(false);
      fetchSchools();
    }
  };

  const filteredSchools = schools.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[11px] font-medium text-muted-foreground tracking-widest uppercase mb-2">Administracion</p>
          <h1 className="text-3xl font-bold tracking-tight">Escuelas</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Gestiona todas las instituciones educativas del sistema
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-200"
        >
          <Plus className="h-4 w-4" />
          Nueva Escuela
        </button>
      </div>

      <div className="mb-6">
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre o codigo..."
            className="w-full pl-9 pr-3 py-2.5 bg-muted/50 border border-border/60 rounded-lg text-sm focus:border-foreground outline-none transition-colors"
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
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-background border border-border/60 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
                  <h2 className="text-base font-semibold">Nueva Escuela</h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>

                <div className="px-6 py-5 space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
                      Nombre de la Institucion *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Ej: I.E.P. San Martin"
                      className="w-full px-3 py-2.5 bg-muted/50 border border-border/60 rounded-lg text-sm focus:border-foreground outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
                        Codigo Modular *
                      </label>
                      <input
                        type="text"
                        value={form.code}
                        onChange={(e) => updateField("code", e.target.value)}
                        placeholder="Ej: 0123456"
                        className="w-full px-3 py-2.5 bg-muted/50 border border-border/60 rounded-lg text-sm focus:border-foreground outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
                        Tipo
                      </label>
                      <div className="px-3 py-2.5 bg-muted/30 border border-border/60 rounded-lg text-sm text-muted-foreground">
                        {SCHOOL_TYPE_LABELS[form.type]}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
                      Region *
                    </label>
                    <select
                      value={form.region}
                      onChange={(e) => updateField("region", e.target.value)}
                      className="w-full px-3 py-2.5 bg-muted/50 border border-border/60 rounded-lg text-sm focus:border-foreground outline-none transition-colors appearance-none"
                    >
                      <option value="">Seleccionar region</option>
                      {REGION_LIST.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
                        Provincia *
                      </label>
                      <select
                        value={form.province}
                        onChange={(e) => updateField("province", e.target.value)}
                        disabled={!form.region}
                        className="w-full px-3 py-2.5 bg-muted/50 border border-border/60 rounded-lg text-sm focus:border-foreground outline-none transition-colors appearance-none disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <option value="">{form.region ? "Seleccionar provincia" : "Primero selecciona region"}</option>
                        {provinces.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
                        Distrito *
                      </label>
                      <select
                        value={form.district}
                        onChange={(e) => updateField("district", e.target.value)}
                        disabled={!form.province}
                        className="w-full px-3 py-2.5 bg-muted/50 border border-border/60 rounded-lg text-sm focus:border-foreground outline-none transition-colors appearance-none disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <option value="">{form.province ? "Seleccionar distrito" : "Primero selecciona provincia"}</option>
                        {districts.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
                      Direccion
                    </label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      placeholder="Direccion de la escuela"
                      className="w-full px-3 py-2.5 bg-muted/50 border border-border/60 rounded-lg text-sm focus:border-foreground outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
                        Telefono
                      </label>
                      <input
                        type="text"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="Ej: 054-123456"
                        className="w-full px-3 py-2.5 bg-muted/50 border border-border/60 rounded-lg text-sm focus:border-foreground outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
                        Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="escuela@correo.com"
                        className="w-full px-3 py-2.5 bg-muted/50 border border-border/60 rounded-lg text-sm focus:border-foreground outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 px-6 py-5 border-t border-border/60">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 py-2.5 border border-border/60 rounded-lg text-sm font-medium hover:bg-muted transition-colors duration-150"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex-1 py-2.5 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Creando...
                      </>
                    ) : (
                      "Crear Escuela"
                    )}
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <div className="border border-border/60 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/30">
                <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Nombre</th>
                <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Codigo</th>
                <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Tipo</th>
                <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Region</th>
                <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Distrito</th>
                <th className="text-left px-4 py-3 font-medium text-xs text-muted-foreground tracking-wide uppercase whitespace-nowrap">Estado</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground mx-auto" />
                    <p className="text-sm text-muted-foreground mt-2">Cargando escuelas...</p>
                  </td>
                </tr>
              ) : filteredSchools.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center">
                    <p className="text-sm text-muted-foreground">
                      {search ? "No se encontraron escuelas con esa busqueda." : "No hay escuelas registradas."}
                    </p>
                    {!search && (
                      <p className="text-xs text-muted-foreground mt-1">Crea la primera escuela para comenzar.</p>
                    )}
                  </td>
                </tr>
              ) : (
                filteredSchools.map((school) => (
                  <tr key={school.id} className="border-b border-border/40 last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-medium">{school.name}</td>
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{school.code}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-md bg-muted/60">
                        {SCHOOL_TYPE_LABELS[school.type as SchoolType] ?? school.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{school.region}</td>
                    <td className="px-4 py-3 text-muted-foreground">{school.district}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-md ${school.is_active ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400" : "bg-muted text-muted-foreground"}`}>
                        {school.is_active ? "Activa" : "Inactiva"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
