"use client"

import { useSchool } from "@/hooks/use-school"
import { SCHOOL_TYPE_LABELS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { SchoolType } from "@/lib/constants"

export function SchoolToggle() {
  const { schoolType, setSchoolType } = useSchool()

  const types = Object.entries(SCHOOL_TYPE_LABELS) as [SchoolType, string][]

  return (
    <div className="px-2.5 py-2">
      <p className="text-[10px] font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
        Modalidad
      </p>
      <div className="flex bg-muted p-0.5 rounded-lg">
        {types.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSchoolType(key)}
            className={cn(
              "relative flex-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200",
              schoolType === key
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {schoolType === key && (
              <motion.div
                layoutId="school-toggle"
                className="absolute inset-0 bg-primary rounded-md shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
