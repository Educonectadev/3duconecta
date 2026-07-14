"use client";

import { Users, BookOpen, FileText, AlertTriangle } from "lucide-react";
import { Dashboard } from "@/components/shared/Dashboard";

export default function DirectorDashboard() {
  return (
    <Dashboard
      title="Panel del Director"
      subtitle="Gestiona tu institucion educativa"
      stats={[
        { label: "Docentes", value: "0", icon: Users, color: "blue" },
        { label: "Aulas", value: "0", icon: BookOpen, color: "green" },
        { label: "Comunicados", value: "0", icon: FileText, color: "violet" },
        { label: "Incidencias", value: "0", icon: AlertTriangle, color: "rose" },
      ]}
      links={[
        { label: "Gestionar Docentes", href: "/director/docentes" },
        { label: "Ver Reportes", href: "/director/reportes" },
      ]}
    />
  );
}
