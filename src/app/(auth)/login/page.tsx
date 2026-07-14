"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      setError("Credenciales incorrectas. Usa las cuentas demo.");
      setLoading(false);
      return;
    }

    localStorage.setItem("educonecta_demo_user", JSON.stringify(user));
    document.cookie = `educonecta_demo_user=${JSON.stringify(user)}; path=/; max-age=86400`;
    router.push(`/${user.role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-sm">
        <Link href="/" className="inline-flex items-center gap-2 mb-10 group">
          <span className="w-2 h-2 bg-foreground rotate-45 group-hover:scale-125 transition-transform duration-300" />
          <span className="text-sm font-semibold tracking-tight">EduConecta</span>
        </Link>

        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight mb-1.5">Iniciar Sesion</h1>
          <p className="text-sm text-muted-foreground">Accede al sistema con tus credenciales</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">
              Correo electronico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">
              Contrasena
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors"
              placeholder="********"
              required
            />
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 disabled:opacity-50 transition-all duration-300"
          >
            {loading ? "Ingresando..." : "Iniciar Sesion"}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground mb-4 tracking-widest uppercase">
            Cuentas de prueba
          </p>
          <div className="space-y-1">
            {DEMO_USERS.map((u) => (
              <button
                key={u.role}
                onClick={() => { setEmail(u.email); setPassword(u.password); }}
                className="w-full text-left px-4 py-2.5 text-xs border border-border hover:border-foreground transition-all duration-300 group"
              >
                <span className="font-medium text-foreground">{u.label}</span>
                <span className="text-muted-foreground ml-2">{u.email}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          {"No tienes cuenta? "}
          <Link href="/register" className="text-foreground underline underline-offset-4 hover:no-underline transition-all">
            Solicitar Registro
          </Link>
        </p>
      </div>
    </div>
  );
}
