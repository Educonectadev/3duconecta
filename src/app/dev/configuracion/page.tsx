"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { toast } from "sonner"

export default function ConfigPage() {
  const [config, setConfig] = useState({
    year: "2026",
    periods: ["I", "II", "III", "IV"],
    maxGrade: "20",
    minGrade: "0",
    passingGrade: "11",
  })

  const updateField = (field: string, value: string) => {
    setConfig((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    toast.success("Configuracion guardada correctamente")
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-1">Configuracion del Sistema</h1>
        <p className="text-sm text-muted-foreground">Parametros globales del sistema educativo nacional</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl">
        <Card
          className="bg-card border border-border p-6 rounded-lg transition-all duration-500 hover:shadow-xl animate-slide-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-5">Periodo Academico</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-muted-foreground font-medium mb-2">Anio academico actual</label>
              <input
                type="text"
                value={config.year}
                onChange={(e) => updateField("year", e.target.value)}
                className="w-full h-9 px-3 rounded-md border border-input bg-transparent text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground font-medium mb-2">Periodos</label>
              <div className="flex gap-2">
                {config.periods.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-md"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card
          className="bg-card border border-border p-6 rounded-lg transition-all duration-500 hover:shadow-xl animate-slide-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-5">Calificaciones</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-muted-foreground font-medium mb-2">Nota maxima</label>
              <input
                type="text"
                value={config.maxGrade}
                onChange={(e) => updateField("maxGrade", e.target.value)}
                className="w-full h-9 px-3 rounded-md border border-input bg-transparent text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-muted-foreground font-medium mb-2">Nota minima</label>
                <input
                  type="text"
                  value={config.minGrade}
                  onChange={(e) => updateField("minGrade", e.target.value)}
                  className="w-full h-9 px-3 rounded-md border border-input bg-transparent text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground font-medium mb-2">Aprobatoria</label>
                <input
                  type="text"
                  value={config.passingGrade}
                  onChange={(e) => updateField("passingGrade", e.target.value)}
                  className="w-full h-9 px-3 rounded-md border border-input bg-transparent text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="animate-slide-in-up" style={{ animationDelay: "300ms" }}>
        <Button
          onClick={handleSave}
          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
        >
          Guardar Cambios
        </Button>
      </div>
    </div>
  )
}
