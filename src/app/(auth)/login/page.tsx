"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const DEMO_USERS = [
  { email: "dev@educonecta.pe", password: "demo123", role: "dev", label: "Desarrollador" },
  { email: "director@educonecta.pe", password: "demo123", role: "director", label: "Director" },
  { email: "secretaria@educonecta.pe", password: "demo123", role: "secretaria", label: "Secretaria" },
  { email: "docente@educonecta.pe", password: "demo123", role: "docente", label: "Docente" },
  { email: "alumno@educonecta.pe", password: "demo123", role: "alumno", label: "Alumno" },
  { email: "padre@educonecta.pe", password: "demo123", role: "padre", label: "Padre" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const user = DEMO_USERS.find((u) => u.email === email && u.password === password);

    if (!user) {
      setError("Credenciales incorrectas. Usa las cuentas demo de abajo.");
      setLoading(false);
      return;
    }

    localStorage.setItem("educonecta_demo_user", JSON.stringify(user));
    document.cookie = `educonecta_demo_user=${JSON.stringify(user)}; path=/; max-age=86400`;
    router.push(`/${user.role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-foreground" />
            <h1 className="text-lg font-semibold tracking-tight">EduConecta</h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Inicia sesion para acceder al sistema
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
              Correo electronico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">
              Contrasena
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors"
              placeholder="********"
              required
            />
          </div>

          <AnimatedError error={error} />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-foreground text-background text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-all duration-200"
          >
            {loading ? "Ingresando..." : "Iniciar Sesion"}
          </button>
        </form>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground mb-3 tracking-wide uppercase">
            Cuentas de prueba
          </p>
          <div className="space-y-1.5">
            {DEMO_USERS.map((u) => (
              <motion.button
                key={u.role}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
                onClick={() => { setEmail(u.email); setPassword(u.password); }}
                className="w-full text-left px-3 py-2 text-xs border border-border hover:bg-accent transition-colors duration-150"
              >
                <span className="font-medium text-foreground">{u.label}</span>
                <span className="text-muted-foreground ml-2">{u.email}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {"No tienes cuenta? "}
          <Link href="/register" className="text-foreground underline underline-offset-4 hover:no-underline transition-all">
            Solicitar Registro
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

function AnimatedError({ error }: { error: string }) {
  if (!error) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      className="text-xs text-red-500"
    >
      {error}
    </motion.p>
  );
}
