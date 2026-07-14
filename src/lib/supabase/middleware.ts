import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Rutas protegidas por rol
  const roleRoutes: Record<string, string[]> = {
    dev: ["/dev"],
    director: ["/director"],
    secretaria: ["/secretaria"],
    docente: ["/docente"],
    alumno: ["/alumno"],
    padre: ["/padre"],
  };

  const pathname = request.nextUrl.pathname;

  // Si el usuario esta en una ruta protegida
  for (const [role, routes] of Object.entries(roleRoutes)) {
    if (routes.some((route) => pathname.startsWith(route))) {
      if (!user) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
      }

      // Verificar que el usuario tenga el rol correcto
      const userRole = user.user_metadata?.role || user.app_metadata?.role;
      if (userRole !== role && userRole !== "dev") {
        const url = request.nextUrl.clone();
        url.pathname = `/${userRole}`;
        return NextResponse.redirect(url);
      }
    }
  }

  // Redirigir usuarios autenticados desde login/register
  if (
    user &&
    (pathname === "/login" || pathname === "/register" || pathname === "/")
  ) {
    const userRole = user.user_metadata?.role || user.app_metadata?.role;
    if (userRole) {
      const url = request.nextUrl.clone();
      url.pathname = `/${userRole}`;
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}
