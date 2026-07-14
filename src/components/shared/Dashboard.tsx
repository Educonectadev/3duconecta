"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface Stat {
  label: string
  value: string
  icon: LucideIcon
  color?: string
}

interface DashboardProps {
  title: string
  subtitle: string
  stats: Stat[]
  links?: { label: string; href: string }[]
  children?: ReactNode
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-500",
  green: "bg-emerald-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
  violet: "bg-purple-500",
}

export function Dashboard({ title, subtitle, stats, links, children }: DashboardProps) {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-1">{title}</h1>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <Card
            key={stat.label}
            className="bg-card border border-border p-4 rounded-lg animate-slide-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <h3 className="text-xs text-muted-foreground font-medium mb-3">{stat.label}</h3>
            <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
            <div className="flex items-center gap-2 mt-2">
              {stat.color && (
                <div className={`w-2 h-2 rounded-full ${colorMap[stat.color] || "bg-primary"}`} />
              )}
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          </Card>
        ))}
      </div>

      {links && (
        <Card
          className="p-6 transition-all duration-500 hover:shadow-xl animate-slide-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">Acceso Rapido</h2>
          <div className="space-y-2">
            {links.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <span className="font-medium text-foreground text-sm">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Card>
      )}

      {children && (
        <Card
          className="p-6 transition-all duration-500 hover:shadow-xl animate-slide-in-up"
          style={{ animationDelay: "600ms" }}
        >
          {children}
        </Card>
      )}
    </div>
  )
}
