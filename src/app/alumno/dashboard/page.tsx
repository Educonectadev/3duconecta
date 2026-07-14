"use client";

import { BookOpen, ClipboardCheck, Calendar, TrendingUp } from "lucide-react";
import { Dashboard } from "@/components/shared/Dashboard";

export default function AlumnoDashboard() {
  return (
    <Dashboard
      title="Panel del Alumno"
      subtitle="Tu informacion academica"
      stats={[
        { label: "Cursos", value: "0", icon: BookOpen },
        { label: "Tareas Pendientes", value: "0", icon: ClipboardCheck },
        { label: "Asistencia", value: "0%", icon: Calendar },
        { label: "Promedio", value: "0", icon: TrendingUp },
      ]}
    >
      <h2 className="text-sm font-medium mb-4">Ultimas Notas</h2>
      <p className="text-xs text-muted-foreground">No hay notas registradas aun.</p>
    </Dashboard>
  );
}
