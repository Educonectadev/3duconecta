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
    bg: "bg-muted/60",
  },
  blue: {
    icon: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
  },
  green: {
    icon: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
  },
  amber: {
    icon: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40",
  },
  rose: {
    icon: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/40",
  },
  violet: {
    icon: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/40",
  },
};

export function Dashboard({ title, subtitle, stats, links, children }: DashboardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl"
    >
      <div className="mb-10">
        <p className="text-[11px] font-medium text-muted-foreground tracking-widest uppercase mb-2">{title}</p>
        <h1 className="text-3xl font-bold tracking-tight">{subtitle}</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {stats.map((stat, i) => {
          const color = colorMap[stat.color ?? "default"];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative border border-border/60 p-5 rounded-xl hover:border-border hover:shadow-sm transition-all duration-300 overflow-hidden"
            >
              <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300", color.bg)} />
              <div className="relative">
                <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center mb-4", color.bg)}>
                  <stat.icon className={cn("h-4.5 w-4.5", color.icon)} />
                </div>
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1.5 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {links && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="border border-border/60 rounded-xl p-6 mb-6"
        >
          <h2 className="text-sm font-semibold mb-4">Acceso Rapido</h2>
          <div className="space-y-1.5">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between px-4 py-3 rounded-lg border border-border/40 hover:border-border hover:bg-accent/50 transition-all duration-200"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200" />
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="border border-border/60 rounded-xl p-6"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
