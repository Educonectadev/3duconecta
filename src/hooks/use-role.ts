import { useAuth } from "./use-auth";
import { useMemo } from "react";
import { hasPermission, type Permission } from "@/lib/auth/permissions";

export function useRole() {
  const { role } = useAuth();

  const can = useMemo(
    () => ({
      hasPermission: (permission: Permission): boolean => {
        if (!role) return false;
        return hasPermission(role, permission);
      },
      isDev: role === "dev",
      isDirector: role === "director",
      isSecretaria: role === "secretaria",
      isDocente: role === "docente",
      isAlumno: role === "alumno",
      isPadre: role === "padre",
    }),
    [role]
  );

  return { role, ...can };
}
