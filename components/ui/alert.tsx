import * as React from "react";
import { cn } from "@/lib/utils";

export function Alert({
  className,
  tone = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { tone?: "default" | "warning" | "destructive" }) {
  const toneClass = {
    default: "border bg-background",
    warning: "border-amber-500/40 bg-amber-500/10",
    destructive: "border-destructive/40 bg-destructive/10",
  }[tone];
  return <div className={cn("rounded-2xl p-4 text-sm", toneClass, className)} {...props} />;
}
