"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ROLE_LABELS, type Role } from "@/lib/auth/roles";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dni: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          dni: formData.dni,
          role: "secretaria", // default role, Dev lo cambia
          has_completed_onboarding: false,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-2xl font-semibold mb-2">Registro Exitoso</h1>
          <p className="text-neutral-600 mb-6">
            Se ha enviado un enlace de confirmacion a tu correo.
            Revisa tu bandeja de entrada.
          </p>
          <Link
            href="/login"
            className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium inline-block hover:bg-neutral-800 transition-colors"
          >
            Ir a iniciar sesion
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight mb-1">
            Solicitar Registro
          </h1>
          <p className="text-sm text-neutral-500">
            Completa tus datos para solicitar acceso al sistema
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1.5">
                Nombre
              </label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1.5">
                Apellido
              </label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="dni" className="block text-sm font-medium mb-1.5">
              DNI
            </label>
            <input
              id="dni"
              type="text"
              value={formData.dni}
              onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="regEmail" className="block text-sm font-medium mb-1.5">
              Correo electronico
            </label>
            <input
              id="regEmail"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div>
            <label htmlFor="regPassword" className="block text-sm font-medium mb-1.5">
              Contrasena
            </label>
            <input
              id="regPassword"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              placeholder="Min. 8 caracteres"
              minLength={8}
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 disabled:opacity-50 transition-colors"
          >
            {loading ? "Procesando..." : "Solicitar Registro"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">
          {"Ya tienes cuenta? "}
          <Link href="/login" className="text-neutral-900 underline underline-offset-2">
            Inicia sesion
          </Link>
        </p>
      </div>
    </div>
  );
}
