import Link from "next/link";

const roles = [
  { titulo: "Director", desc: "Gestion de planta docente, reportes y convivencia" },
  { titulo: "Secretaria", desc: "Matriculas, documentos, alumnos y padres" },
  { titulo: "Docente", desc: "Calificaciones, asistencia y tareas" },
  { titulo: "Alumno", desc: "Notas, cursos y asistencia personal" },
  { titulo: "Padre de Familia", desc: "Seguimiento de hijos y pagos" },
  { titulo: "Desarrollador", desc: "Admin total del sistema" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-foreground" />
            <span className="text-base font-semibold tracking-tight">EduConecta</span>
          </div>
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-all duration-200"
          >
            Iniciar Sesion
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-20">
            <p className="text-xs text-muted-foreground tracking-wide uppercase mb-4">
              Sistema Educativo Nacional
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Una plataforma,<br />toda la comunidad educativa
            </h2>
            <p className="text-base text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Gestion unificada para instituciones publicas y privadas del Peru.
              Conectando a directores, docentes, alumnos y padres en un solo ecosistema.
            </p>
            <div className="flex gap-3">
              <Link
                href="/login"
                className="px-6 py-3 bg-foreground text-background text-sm font-medium hover:opacity-90 transition-all duration-200"
              >
                Acceder al Sistema
              </Link>
              <Link
                href="/register"
                className="px-6 py-3 border border-border text-sm font-medium hover:bg-accent transition-all duration-200"
              >
                Solicitar Registro
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
            {roles.map((item) => (
              <div key={item.titulo} className="bg-background p-6 hover:bg-accent transition-colors duration-200">
                <p className="text-sm font-medium mb-1.5">{item.titulo}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-muted-foreground">
          EduConecta — Sistema Educativo Nacional del Peru
        </div>
      </footer>
    </div>
  );
}
