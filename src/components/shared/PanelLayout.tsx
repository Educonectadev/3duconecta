"use client"

import type { ReactNode } from "react"
import { Sidebar } from "@/components/shared/Sidebar"
import { SchoolProvider } from "@/hooks/use-school"

export function PanelLayout({ children }: { children: ReactNode }) {
  return (
    <SchoolProvider>
      <div className="flex min-h-dvh">
        <Sidebar />
        <main className="flex-1 min-w-0 ml-0 md:ml-60 transition-all duration-300">
          <div className="p-4 md:p-5 lg:p-6">
            {children}
          </div>
        </main>
      </div>
    </SchoolProvider>
  )
}
