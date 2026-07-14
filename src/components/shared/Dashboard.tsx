"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface DashboardProps {
  title: string;
  subtitle: string;
  stats: Stat[];
  links?: { label: string; href: string }[];
  children?: ReactNode;
}

export function Dashboard({ title, subtitle, stats, links, children }: DashboardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl"
    >
      <div className="mb-10">
        <p className="text-xs text-muted-foreground tracking-wide uppercase mb-1">{title}</p>
        <h1 className="text-2xl font-semibold tracking-tight">{subtitle}</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * i }}
            className="border border-border p-5 hover:bg-accent transition-colors duration-200"
          >
            <stat.icon className="h-4 w-4 text-muted-foreground mb-4" />
            <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {links && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="border border-border p-6 mb-6"
        >
          <h2 className="text-sm font-medium mb-5">Acceso Rapido</h2>
          <div className="space-y-1">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between px-3 py-2.5 border border-border hover:bg-accent transition-colors duration-150"
              >
                <span className="text-sm">{item.label}</span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors duration-150" />
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {children && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="border border-border p-6"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
