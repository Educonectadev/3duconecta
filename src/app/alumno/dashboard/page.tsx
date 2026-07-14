"use client";

import { BookOpen, ClipboardCheck, Calendar, TrendingUp } from "lucide-react";
import { Dashboard } from "@/components/shared/Dashboard";

export default function AlumnoDashboard() {
  return (
    <Dashboard
      title="Panel del Alumno"
      subtitle="Tu informacion academica"
      stats={[
        { label: "Cursos", value: "0", icon: BookOpen, color: "blue" },
        { label: "Tareas Pendientes", value: "0", icon: ClipboardCheck, color: "amber" },
        { label: "Asistencia", value: "0%", icon: Calendar, color: "green" },
        { label: "Promedio", value: "0", icon: TrendingUp, color: "violet" },
      ]}
    >
      <h2 className="text-sm font-semibold mb-3">Ultimas Notas</h2>
      <p className="text-sm text-muted-foreground">No hay notas registradas aun.</p>
    </Dashboard>
  );
}
