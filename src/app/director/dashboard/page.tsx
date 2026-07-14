"use client";

import { Users, BookOpen, FileText, AlertTriangle } from "lucide-react";
import { Dashboard } from "@/components/shared/Dashboard";

export default function DirectorDashboard() {
  return (
    <Dashboard
      title="Panel del Director"
      subtitle="Gestiona tu institucion educativa"
      stats={[
        { label: "Docentes", value: "0", icon: Users },
        { label: "Aulas", value: "0", icon: BookOpen },
        { label: "Comunicados", value: "0", icon: FileText },
        { label: "Incidencias", value: "0", icon: AlertTriangle },
      ]}
      links={[
        { label: "Gestionar Docentes", href: "/director/docentes" },
        { label: "Ver Reportes", href: "/director/reportes" },
      ]}
    />
  );
}
