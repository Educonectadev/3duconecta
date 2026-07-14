"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/shared/Sidebar";
import { SchoolProvider } from "@/hooks/use-school";

export function PanelLayout({ children }: { children: ReactNode }) {
  return (
    <SchoolProvider>
      <div className="flex min-h-dvh">
        <Sidebar />
        <main className="flex-1 min-w-0 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </SchoolProvider>
  );
}
