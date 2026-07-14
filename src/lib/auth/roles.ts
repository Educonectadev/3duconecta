export const ROLES = {
  DEV: "dev",
  DIRECTOR: "director",
  SECRETARIA: "secretaria",
  DOCENTE: "docente",
  ALUMNO: "alumno",
  PADRE: "padre",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const ROLE_LABELS: Record<Role, string> = {
  dev: "Desarrollador",
  director: "Director",
  secretaria: "Secretaria",
  docente: "Docente",
  alumno: "Alumno",
  padre: "Padre de Familia",
};

export const ROLE_ROUTES: Record<Role, string> = {
  dev: "/dev",
  director: "/director",
  secretaria: "/secretaria",
  docente: "/docente",
  alumno: "/alumno",
  padre: "/padre",
};

export const ROLE_HIERARCHY: Record<Role, number> = {
  dev: 0,
  director: 1,
  secretaria: 2,
  docente: 3,
  padre: 4,
  alumno: 5,
};
