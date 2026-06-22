import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  tone = "default",
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: "default" | "success" | "warning" | "info" }) {
  const classes = {
    default: "bg-muted text-foreground",
    success: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
    warning: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
    info: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  }[tone];
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", classes, className)}>{children}</span>;
}
