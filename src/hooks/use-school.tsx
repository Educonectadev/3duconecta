"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { SchoolType } from "@/lib/constants";

interface SchoolContextType {
  schoolType: SchoolType;
  setSchoolType: (type: SchoolType) => void;
}

const SchoolContext = createContext<SchoolContextType>({
  schoolType: "estatal",
  setSchoolType: () => {},
});

export function SchoolProvider({ children }: { children: ReactNode }) {
  const [schoolType, setSchoolType] = useState<SchoolType>("estatal");

  return (
    <SchoolContext value={{ schoolType, setSchoolType }}>
      {children}
    </SchoolContext>
  );
}

export function useSchool() {
  return useContext(SchoolContext);
}
