"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    const role = data.user?.user_metadata?.role || data.user?.app_metadata?.role;
    if (role) {
      router.push(`/${role}`);
    } else {
      router.push("/dev");
    }
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
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Correo electronico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1.5">
              Contrasena
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              placeholder="********"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 disabled:opacity-50 transition-colors"
          >
            {loading ? "Ingresando..." : "Iniciar Sesion"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">
          {"No tienes cuenta? "}
          <Link href="/register" className="text-neutral-900 underline underline-offset-2">
            Solicitar Registro
          </Link>
        </p>
      </div>
    </div>
  );
}
