"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/shared/Sidebar";
import { SchoolProvider } from "@/hooks/use-school";

export function PanelLayout({ children }: { children: ReactNode }) {
  return (
    <SchoolProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </SchoolProvider>
  );
}
