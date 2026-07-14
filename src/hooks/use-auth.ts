"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Role } from "@/lib/auth/roles";

interface DemoUser {
  email: string;
  password: string;
  role: Role;
  label: string;
}

export function useAuth() {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("educonecta_demo_user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const signOut = () => {
    localStorage.removeItem("educonecta_demo_user");
    document.cookie = "educonecta_demo_user=; path=/; max-age=0";
    setUser(null);
    router.push("/login");
  };

  return { user, role: user?.role ?? null, loading, signOut };
}
