import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">EduConecta</h1>
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
          >
            Iniciar Sesion
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-semibold tracking-tight leading-tight mb-6">
              Sistema Educativo Nacional
            </h2>
            <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
              Una plataforma unificada para la gestion educativa de instituciones
              publicas y privadas del Peru. Conectando a directores, docentes,
              alumnos y padres de familia en un solo ecosistema.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/login"
                className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Acceder al Sistema
              </Link>
              <Link
                href="/register"
                className="px-6 py-3 border border-neutral-300 text-sm font-medium hover:bg-neutral-100 transition-colors"
              >
                Solicitar Registro
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-24">
            {[
              { titulo: "Director", desc: "Gestion de planta docente, reportes y convivencia" },
              { titulo: "Secretaria", desc: "Matriculas, documentos, alumnos y padres" },
              { titulo: "Docente", desc: "Calificaciones, asistencia y tareas" },
              { titulo: "Alumno", desc: "Notas, cursos y asistencia personal" },
              { titulo: "Padre de Familia", desc: "Seguimiento de hijos y pagos" },
              { titulo: "Desarrollador", desc: "Admin total del sistema" },
            ].map((item) => (
              <div
                key={item.titulo}
                className="border border-neutral-200 p-5 hover:border-neutral-400 transition-colors"
              >
                <h3 className="font-medium text-sm mb-1">{item.titulo}</h3>
                <p className="text-xs text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-neutral-400">
          EduConecta - Sistema Educativo Nacional del Peru
        </div>
      </footer>
    </div>
  );
}
