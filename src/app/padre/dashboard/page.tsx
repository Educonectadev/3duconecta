"use client";

import { Users, CreditCard, MessageSquare, TrendingUp } from "lucide-react";
import { Dashboard } from "@/components/shared/Dashboard";

export default function PadreDashboard() {
  return (
    <Dashboard
      title="Panel de Padre de Familia"
      subtitle="Seguimiento academico de tus hijos"
      stats={[
        { label: "Hijos", value: "0", icon: Users, color: "blue" },
        { label: "Pagos Pendientes", value: "0", icon: CreditCard, color: "rose" },
        { label: "Comunicados", value: "0", icon: MessageSquare, color: "amber" },
        { label: "Promedio General", value: "0", icon: TrendingUp, color: "green" },
      ]}
    >
      <h2 className="text-sm font-semibold mb-3">Ultimos Comunicados</h2>
      <p className="text-sm text-muted-foreground">No hay comunicados recientes.</p>
    </Dashboard>
  );
}
