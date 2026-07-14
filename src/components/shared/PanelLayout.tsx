"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/shared/Sidebar";
import { SchoolProvider } from "@/hooks/use-school";

export function PanelLayout({ children }: { children: ReactNode }) {
  return (
    <SchoolProvider>
      <div className="flex min-h-dvh">
        <Sidebar />
        <main className="flex-1 min-w-0 p-5 md:p-8 lg:p-10 overflow-y-auto">
          <div className="max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </SchoolProvider>
  );
}
