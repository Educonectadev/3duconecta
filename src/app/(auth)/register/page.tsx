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
      if (!res.ok) throw new Error("");
    } catch {
      setError("Modo demo: el registro solo funciona con Supabase configurado.");
      setLoading(false);
      return;
    }
    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-2xl font-semibold tracking-tight mb-2">Registro Exitoso</h1>
          <p className="text-muted-foreground mb-6">Se ha enviado un enlace de confirmacion a tu correo.</p>
          <Link href="/login" className="px-8 py-3 bg-foreground text-background text-sm font-medium rounded-full inline-block hover:opacity-90 transition-all duration-300">
            Ir a iniciar sesion
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-sm">
        <Link href="/" className="inline-flex items-center gap-2 mb-10 group">
          <span className="w-2 h-2 bg-foreground rotate-45 group-hover:scale-125 transition-transform duration-300" />
          <span className="text-sm font-semibold tracking-tight">EduConecta</span>
        </Link>

        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight mb-1.5">Solicitar Registro</h1>
          <p className="text-sm text-muted-foreground">Completa tus datos para solicitar acceso al sistema</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">Nombre</label>
              <input type="text" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" required />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">Apellido</label>
              <input type="text" value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" required />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">DNI</label>
            <input type="text" value={formData.dni} onChange={e => setFormData({ ...formData, dni: e.target.value })}
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" required />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">Correo electronico</label>
            <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" required />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">Contrasena</label>
            <input type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-border text-sm focus:border-foreground outline-none transition-colors" minLength={8} required />
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button type="submit" disabled={loading}
            className="w-full py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 disabled:opacity-50 transition-all duration-300">
            {loading ? "Procesando..." : "Solicitar Registro"}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Ya tienes cuenta?{' '}
          <Link href="/login" className="text-foreground underline underline-offset-4 hover:no-underline transition-all">Inicia sesion</Link>
        </p>
      </div>
    </div>
  );
}
