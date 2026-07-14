"use client";

import { BookOpen, Users, ClipboardCheck, BookMarked } from "lucide-react";
import { Dashboard } from "@/components/shared/Dashboard";

export default function DocenteDashboard() {
  return (
    <Dashboard
      title="Panel del Docente"
      subtitle="Gestiona tus cursos y alumnos"
      stats={[
        { label: "Mis Cursos", value: "0", icon: BookOpen, color: "blue" },
        { label: "Alumnos", value: "0", icon: Users, color: "green" },
        { label: "Tareas", value: "0", icon: ClipboardCheck, color: "amber" },
        { label: "Materiales", value: "0", icon: BookMarked, color: "violet" },
      ]}
    >
      <h2 className="text-sm font-semibold mb-3">Clases de Hoy</h2>
      <p className="text-sm text-muted-foreground">No tienes clases programadas para hoy.</p>
    </Dashboard>
  );
}
