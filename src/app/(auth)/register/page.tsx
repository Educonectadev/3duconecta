"use client";

import { useState } from "react";
import Link from "next/link";

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

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Error al registrar");
    } catch (err) {
      setError("Modo demo: el registro solo funciona con Supabase configurado. Usa las cuentas demo en login.");
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
          <p className="text-neutral-600 mb-6">Se ha enviado un enlace de confirmacion a tu correo.</p>
          <Link href="/login" className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium inline-block hover:bg-neutral-800 transition-colors">
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
          <h1 className="text-2xl font-semibold tracking-tight mb-1">Solicitar Registro</h1>
          <p className="text-sm text-neutral-500">Completa tus datos para solicitar acceso al sistema</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1.5">Nombre</label>
              <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Apellido</label>
              <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">DNI</label>
            <input type="text" value={formData.dni} onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Correo electronico</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Contrasena</label>
            <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 bg-white text-sm focus:outline-none focus:border-neutral-900" minLength={8} required />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button type="submit" disabled={loading}
            className="w-full py-2.5 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 disabled:opacity-50 transition-colors">
            {loading ? "Procesando..." : "Solicitar Registro"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">
          {"Ya tienes cuenta? "}
          <Link href="/login" className="text-neutral-900 underline underline-offset-2">Inicia sesion</Link>
        </p>
      </div>
    </div>
  );
}
