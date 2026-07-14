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

  const handleLogin = async (e: React.FormEvent) => {
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
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight mb-1">EduConecta</h1>
          <p className="text-sm text-neutral-500">
            Inicia sesion para acceder al sistema
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">Correo electronico</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              placeholder="correo@ejemplo.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1.5">Contrasena</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              placeholder="********" required />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button type="submit" disabled={loading}
            className="w-full py-2.5 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 disabled:opacity-50 transition-colors">
            {loading ? "Ingresando..." : "Iniciar Sesion"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-neutral-200">
          <p className="text-xs font-medium text-neutral-500 mb-3">CUENTAS DE DEMO</p>
          <div className="space-y-2">
            {DEMO_USERS.map((u) => (
              <button key={u.role}
                onClick={() => { setEmail(u.email); setPassword(u.password); }}
                className="w-full text-left px-3 py-2 text-xs border border-neutral-200 hover:bg-neutral-100 transition-colors">
                <span className="font-medium">{u.label}</span>
                <span className="text-neutral-400 ml-2">{u.email}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-neutral-500">
          {"No tienes cuenta? "}
          <Link href="/register" className="text-neutral-900 underline underline-offset-2">Solicitar Registro</Link>
        </p>
      </div>
    </div>
  );
}
