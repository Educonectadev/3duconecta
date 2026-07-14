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
    <div className="min-h-dvh flex flex-col bg-background selection:bg-foreground selection:text-background">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-foreground rotate-45" />
            <span className="text-base font-semibold tracking-tight">EduConecta</span>
          </div>
          <Link
            href="/login"
            className="px-6 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-all duration-300"
          >
            Iniciar Sesion
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-3xl mb-24">
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-6">
              <span className="inline-block w-3 h-0.5 bg-foreground align-middle mr-2" />
              Sistema Educativo Nacional
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-8">
              Una plataforma,
              <br />
              <span className="text-muted-foreground">toda la comunidad</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
              Gestion unificada para instituciones publicas y privadas del Peru.
              Conectando a directores, docentes, alumnos y padres en un solo ecosistema.
            </p>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-8 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-all duration-300"
              >
                Acceder al Sistema
              </Link>
              <Link
                href="/register"
                className="px-8 py-3 text-sm font-medium text-foreground border border-border rounded-full hover:bg-accent transition-all duration-300"
              >
                Solicitar Registro
              </Link>
            </div>
          </div>

          <h2 className="text-xs text-muted-foreground tracking-widest uppercase mb-6">
            Disenado para cada perfil
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {roles.map((item, i) => (
              <div
                key={item.titulo}
                className="group relative p-6 border border-border hover:border-foreground transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="w-6 h-0.5 bg-foreground mb-3 transition-all duration-300 group-hover:w-8" />
                <p className="text-sm font-medium mb-1.5">{item.titulo}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-muted-foreground">
          EduConecta — Sistema Educativo Nacional del Peru
        </div>
      </footer>
    </div>
  );
}
