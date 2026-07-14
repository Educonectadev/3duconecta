import { Role } from "./roles";

export type Permission =
  | "schools.create"
  | "schools.read"
  | "schools.update"
  | "schools.delete"
  | "users.create"
  | "users.read"
  | "users.update"
  | "users.delete"
  | "teachers.create"
  | "teachers.read"
  | "teachers.update"
  | "teachers.delete"
  | "students.create"
  | "students.read"
  | "students.update"
  | "students.delete"
  | "parents.create"
  | "parents.read"
  | "parents.update"
  | "parents.delete"
  | "grades.create"
  | "grades.read"
  | "grades.update"
  | "grades.delete"
  | "attendance.create"
  | "attendance.read"
  | "attendance.update"
  | "documents.create"
  | "documents.read"
  | "documents.update"
  | "announcements.create"
  | "announcements.read"
  | "announcements.update"
  | "payments.create"
  | "payments.read"
  | "payments.update"
  | "reports.read"
  | "config.update"
  | "logs.read";

const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  dev: [
    "schools.create", "schools.read", "schools.update", "schools.delete",
    "users.create", "users.read", "users.update", "users.delete",
    "teachers.create", "teachers.read", "teachers.update", "teachers.delete",
    "students.create", "students.read", "students.update", "students.delete",
    "parents.create", "parents.read", "parents.update", "parents.delete",
    "grades.create", "grades.read", "grades.update", "grades.delete",
    "attendance.create", "attendance.read", "attendance.update",
    "documents.create", "documents.read", "documents.update",
    "announcements.create", "announcements.read", "announcements.update",
    "payments.create", "payments.read", "payments.update",
    "reports.read", "config.update", "logs.read",
  ],
  director: [
    "teachers.create", "teachers.read", "teachers.update", "teachers.delete",
    "students.read", "students.update",
    "parents.read",
    "grades.read",
    "attendance.read",
    "documents.read",
    "announcements.create", "announcements.read", "announcements.update",
    "reports.read",
  ],
  secretaria: [
    "teachers.read", "teachers.create", "teachers.update",
    "students.create", "students.read", "students.update",
    "parents.create", "parents.read", "parents.update",
    "grades.read",
    "attendance.create", "attendance.read", "attendance.update",
    "documents.create", "documents.read", "documents.update",
    "announcements.read",
    "payments.create", "payments.read", "payments.update",
  ],
  docente: [
    "students.read",
    "grades.create", "grades.read", "grades.update",
    "attendance.create", "attendance.read",
    "announcements.create", "announcements.read",
  ],
  alumno: [
    "grades.read",
    "attendance.read",
    "documents.read",
    "announcements.read",
  ],
  padre: [
    "students.read",
    "grades.read",
    "attendance.read",
    "documents.read",
    "announcements.read",
    "payments.read",
  ],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  if (role === "dev") return true;
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export function getRolePermissions(role: Role): Permission[] {
  if (role === "dev") return ROLE_PERMISSIONS.dev;
  return ROLE_PERMISSIONS[role] ?? [];
}
