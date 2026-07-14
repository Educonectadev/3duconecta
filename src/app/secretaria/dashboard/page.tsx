"use client";

import { GraduationCap, ClipboardCheck, FileText, Users } from "lucide-react";
import { Dashboard } from "@/components/shared/Dashboard";

export default function SecretariaDashboard() {
  return (
    <Dashboard
      title="Panel de Secretaria"
      subtitle="Administracion academica general"
      stats={[
        { label: "Alumnos", value: "0", icon: GraduationCap, color: "blue" },
        { label: "Matriculas", value: "0", icon: ClipboardCheck, color: "green" },
        { label: "Documentos", value: "0", icon: FileText, color: "amber" },
        { label: "Padres", value: "0", icon: Users, color: "violet" },
      ]}
      links={[
        { label: "Gestionar Matriculas", href: "/secretaria/matriculas" },
        { label: "Gestionar Padres", href: "/secretaria/padres" },
        { label: "Documentos", href: "/secretaria/documentos" },
      ]}
    >
      <h2 className="text-sm font-semibold mb-3">Actividades del Dia</h2>
      <p className="text-sm text-muted-foreground">No hay actividades registradas para hoy.</p>
    </Dashboard>
  );
}
