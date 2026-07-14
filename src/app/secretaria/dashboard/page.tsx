"use client";

import { GraduationCap, ClipboardCheck, FileText, Users } from "lucide-react";
import { Dashboard } from "@/components/shared/Dashboard";

export default function SecretariaDashboard() {
  return (
    <Dashboard
      title="Panel de Secretaria"
      subtitle="Administracion academica general"
      stats={[
        { label: "Alumnos", value: "0", icon: GraduationCap },
        { label: "Matriculas", value: "0", icon: ClipboardCheck },
        { label: "Documentos", value: "0", icon: FileText },
        { label: "Padres", value: "0", icon: Users },
      ]}
      links={[
        { label: "Gestionar Matriculas", href: "/secretaria/matriculas" },
        { label: "Gestionar Padres", href: "/secretaria/padres" },
        { label: "Documentos", href: "/secretaria/documentos" },
      ]}
    >
      <h2 className="text-sm font-medium mb-4">Actividades del Dia</h2>
      <p className="text-xs text-muted-foreground">No hay actividades registradas para hoy.</p>
    </Dashboard>
  );
}
