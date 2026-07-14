"use client";

import { BookOpen, Users, ClipboardCheck, BookMarked } from "lucide-react";
import { Dashboard } from "@/components/shared/Dashboard";

export default function DocenteDashboard() {
  return (
    <Dashboard
      title="Panel del Docente"
      subtitle="Gestiona tus cursos y alumnos"
      stats={[
        { label: "Mis Cursos", value: "0", icon: BookOpen },
        { label: "Alumnos", value: "0", icon: Users },
        { label: "Tareas", value: "0", icon: ClipboardCheck },
        { label: "Materiales", value: "0", icon: BookMarked },
      ]}
    >
      <h2 className="text-sm font-medium mb-4">Clases de Hoy</h2>
      <p className="text-xs text-muted-foreground">No tienes clases programadas para hoy.</p>
    </Dashboard>
  );
}
