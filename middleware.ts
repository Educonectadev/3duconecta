import { type NextRequest, NextResponse } from "next/server";

const ROLE_ROUTES: Record<string, string> = {
  dev: "/dev",
  director: "/director",
  secretaria: "/secretaria",
  docente: "/docente",
  alumno: "/alumno",
  padre: "/padre",
};

const ROLE_PREFIXES: Record<string, string[]> = {
  dev: ["/dev"],
  director: ["/director"],
  secretaria: ["/secretaria"],
  docente: ["/docente"],
  alumno: ["/alumno"],
  padre: ["/padre"],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/static")) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("educonecta_demo_user")?.value;
  let role: string | null = null;

  if (cookie) {
    try {
      const parsed = JSON.parse(decodeURIComponent(cookie));
      role = parsed.role;
    } catch {}
  }

  const isProtectedRoute = Object.values(ROLE_PREFIXES).flat().some((p) =>
    pathname.startsWith(p)
  );

  if (isProtectedRoute && !role) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  for (const [routeRole, prefixes] of Object.entries(ROLE_PREFIXES)) {
    if (prefixes.some((p) => pathname.startsWith(p)) && role !== routeRole && role !== "dev") {
      const dest = role ? ROLE_ROUTES[role] ?? "/login" : "/login";
      return NextResponse.redirect(new URL(dest, request.url));
    }
  }

  if (role && (pathname === "/login" || pathname === "/register" || pathname === "/")) {
    const dest = ROLE_ROUTES[role] ?? "/dev";
    return NextResponse.redirect(new URL(dest, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
