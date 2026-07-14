"use client";

import { useSchool } from "@/hooks/use-school";
import { SCHOOL_TYPES, SCHOOL_TYPE_LABELS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { SchoolType } from "@/lib/constants";

export function SchoolToggle() {
  const { schoolType, setSchoolType } = useSchool();

  const toggle = (type: SchoolType) => {
    setSchoolType(type);
  };

  return (
    <div className="p-4 border-b border-neutral-700">
      <p className="text-xs text-neutral-400 mb-2">Modalidad</p>
      <div className="flex space-x-1 bg-neutral-800 rounded-none p-1">
        {Object.entries(SCHOOL_TYPE_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => toggle(key as SchoolType)}
            className={cn(
              "flex-1 px-3 py-1.5 text-xs font-medium transition-all duration-200",
              schoolType === key
                ? "bg-white text-black"
                : "text-neutral-400 hover:text-white"
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
