"use client";

import { useSchool } from "@/hooks/use-school";
import { SCHOOL_TYPE_LABELS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { SchoolType } from "@/lib/constants";

export function SchoolToggle() {
  const { schoolType, setSchoolType } = useSchool();

  const types = Object.entries(SCHOOL_TYPE_LABELS) as [SchoolType, string][];

  return (
    <div className="px-3 py-3 border-b border-border">
      <p className="text-xs text-muted-foreground mb-2 font-medium tracking-wider uppercase">
        Modalidad
      </p>
      <div className="flex bg-muted p-0.5 rounded-sm">
        {types.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSchoolType(key)}
            className={cn(
              "relative flex-1 px-3 py-1.5 text-xs font-medium transition-colors duration-150",
              schoolType === key
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {schoolType === key && (
              <motion.div
                layoutId="school-toggle"
                className="absolute inset-0 bg-foreground rounded-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
