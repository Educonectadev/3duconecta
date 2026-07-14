export const SCHOOL_TYPES = {
  ESTATAL: "estatal",
  PRIVADO: "privado",
} as const;

export type SchoolType = (typeof SCHOOL_TYPES)[keyof typeof SCHOOL_TYPES];

export const SCHOOL_TYPE_LABELS: Record<SchoolType, string> = {
  estatal: "Estatal",
  privado: "Privado",
};

export const ACADEMIC_PERIODS = ["I", "II", "III", "IV"] as const;

export const ATTENDANCE_STATUS = {
  PRESENTE: "presente",
  AUSENTE: "ausente",
  TARDANZA: "tardanza",
  JUSTIFICADO: "justificado",
} as const;

export const STUDENT_STATUS = {
  ACTIVO: "activo",
  EGRESADO: "egresado",
  RETIRADO: "retirado",
  TRASLADADO: "trasladado",
} as const;

export const GRADES = [
  "1° Primaria",
  "2° Primaria",
  "3° Primaria",
  "4° Primaria",
  "5° Primaria",
  "6° Primaria",
  "1° Secundaria",
  "2° Secundaria",
  "3° Secundaria",
  "4° Secundaria",
  "5° Secundaria",
] as const;
