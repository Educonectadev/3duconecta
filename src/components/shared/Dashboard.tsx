"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
  color?: "default" | "blue" | "green" | "amber" | "rose" | "violet";
}

interface DashboardProps {
  title: string;
  subtitle: string;
  stats: Stat[];
  links?: { label: string; href: string }[];
  children?: ReactNode;
}

const colorMap = {
  default: {
    icon: "text-muted-foreground",
    bg: "bg-muted",
    hoverBg: "group-hover:bg-muted",
  },
  blue: {
    icon: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/50",
    hoverBg: "group-hover:bg-blue-100 dark:group-hover:bg-blue-950/70",
  },
  green: {
    icon: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
    hoverBg: "group-hover:bg-emerald-100 dark:group-hover:bg-emerald-950/70",
  },
  amber: {
    icon: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/50",
    hoverBg: "group-hover:bg-amber-100 dark:group-hover:bg-amber-950/70",
  },
  rose: {
    icon: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/50",
    hoverBg: "group-hover:bg-rose-100 dark:group-hover:bg-rose-950/70",
  },
  violet: {
    icon: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/50",
    hoverBg: "group-hover:bg-violet-100 dark:group-hover:bg-violet-950/70",
  },
};

export function Dashboard({ title, subtitle, stats, links, children }: DashboardProps) {
  return (
    <div className="max-w-5xl space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-1.5">{title}</p>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{subtitle}</h1>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, i) => {
          const color = colorMap[stat.color ?? "default"];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={cn(
                "group relative bg-card border border-border rounded-xl p-5",
                "shadow-sm hover:shadow-lg hover:shadow-primary/5",
                "hover:-translate-y-0.5",
                "transition-all duration-300 overflow-hidden"
              )}
            >
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300", color.bg, color.hoverBg)}>
                <stat.icon className={cn("h-5 w-5 transition-transform duration-300 group-hover:scale-110", color.icon)} />
              </div>
              <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {links && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-card border border-border rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-sm font-semibold mb-4">Acceso Rapido</h2>
          <div className="space-y-2">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between px-4 py-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border/60 transition-all duration-200"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-card border border-border rounded-xl p-6 shadow-sm"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
