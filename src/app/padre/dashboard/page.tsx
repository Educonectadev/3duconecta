"use client";

import { Users, CreditCard, MessageSquare, TrendingUp } from "lucide-react";
import { Dashboard } from "@/components/shared/Dashboard";

export default function PadreDashboard() {
  return (
    <Dashboard
      title="Panel de Padre de Familia"
      subtitle="Seguimiento academico de tus hijos"
      stats={[
        { label: "Hijos", value: "0", icon: Users },
        { label: "Pagos Pendientes", value: "0", icon: CreditCard },
        { label: "Comunicados", value: "0", icon: MessageSquare },
        { label: "Promedio General", value: "0", icon: TrendingUp },
      ]}
    >
      <h2 className="text-sm font-medium mb-4">Ultimos Comunicados</h2>
      <p className="text-xs text-muted-foreground">No hay comunicados recientes.</p>
    </Dashboard>
  );
}
